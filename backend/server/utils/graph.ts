import { outlinePrompt } from "../../prompts";
import { withRateLimitRetry } from "../utils/rateLimitHandler";
import { Annotation, StateGraph } from "@langchain/langgraph";
import { OpenAI } from "openai";

const STREAM_EXCLUDED_NODES = new Set(["generatePassages", "fixPassages"]);

type NodeMessageHook = (
  state: typeof StoryGraphState.State,
  nodeName: string,
  messages: string[],
) => void;

const createInstrumentedNode = <T extends { messages?: string[] }>(
  name: string,
  handler: (state: typeof StoryGraphState.State) => Promise<T>,
  onNodeMessages?: NodeMessageHook,
) =>
  async (state: typeof StoryGraphState.State) => {
    const payload = await handler(state);
    if (onNodeMessages && !STREAM_EXCLUDED_NODES.has(name) && payload.messages?.length) {
      onNodeMessages(state, name, payload.messages);
    }
    return payload;
  };


type GeneratedPassage = {
  attributes: {
    name: string;
    tags?: string[];
  };
  source: string;
};

type PassagePlan = {
  name: string;
  summary: string;
  pseudocode: string;
};

type OutlineSelection = {
  concept: string;
  outline: string;
};

const OUTLINE_SELECTION_RESPONSE_FORMAT = {
  type: "json_schema",
  json_schema: {
    name: "OutlineSelection",
    strict: true,
    schema: {
      type: "object",
      properties: {
        concept: { type: "string" },
        outline: { type: "string" },
      },
      required: ["concept", "outline"],
      additionalProperties: false,
    },
  },
} as const;

const STORY_PLAN_RESPONSE_FORMAT = {
  type: "json_schema",
  json_schema: {
    name: "StoryPlan",
    strict: true,
    schema: {
      type: "object",
      properties: {
        passages: {
          type: "array",
          minItems: 6,
          items: {
            type: "object",
            properties: {
              name: { type: "string" },
              summary: { type: "string" },
              pseudocode: { type: "string" },
            },
            required: ["name", "summary", "pseudocode"],
            additionalProperties: false,
          },
        },
        linkContext: { type: "string" },
      },
      required: ["passages"],
      additionalProperties: false,
    },
  },
} as const;

// Make sure generated passages meet basic integrity checks
const lintGeneratedPassages = (passages: GeneratedPassage[]) => {
  if (!passages || passages.length === 0) {
    return "No passages were generated to lint.";
  }

  const issues: string[] = [];
  const passageNames = new Set(passages.map((p) => p.attributes.name));
  if (!passageNames.has("Starting Passage")) {
    issues.push("Missing required passage 'Starting Passage'.");
  }
  if (!passageNames.has("StoryTitle")) {
    issues.push("Missing required passage 'StoryTitle'.");
  }

  const linkPattern = /\[\[([^\]]+)\]\]/g;
  const isExternalTarget = (target: string) => /^(https?:|mailto:|javascript:)/i.test(target);

  passages.forEach((passage) => {
    const { name } = passage.attributes;
    let match: RegExpExecArray | null;
    while ((match = linkPattern.exec(passage.source)) !== null) {
      const raw = match[1].trim();
      let target = raw;
      if (raw.includes("->")) {
        target = raw.split("->").pop()!.trim();
      } else if (raw.includes("|")) {
        target = raw.split("|").pop()!.trim();
      }
      if (!target || isExternalTarget(target)) {
        continue;
      }
      if (!passageNames.has(target)) {
        issues.push(`Passage '${name}' links to missing target '${target}'.`);
      }
    }

    const openParens = passage.source.match(/\(/g)?.length ?? 0;
    const closeParens = passage.source.match(/\)/g)?.length ?? 0;
    if (openParens !== closeParens) {
      issues.push(
        `Passage '${name}' has unbalanced parentheses (${openParens} '(' vs ${closeParens} ')').`,
      );
    }
  });

  return issues.length > 0 ? issues.join("\n") : undefined;
};

const TWINE_PASSAGE_RESPONSE_FORMAT = {
  type: "json_schema",
  json_schema: {
    name: "TwinePassages",
    strict: true,
    schema: {
      type: "object",
      properties: {
        passages: {
          type: "array",
          items: {
            type: "object",
            properties: {
              attributes: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  tags: {
                    type: "array",
                    items: { type: "string" },
                  },
                },
                required: ["name"],
                additionalProperties: false,
              },
              source: { type: "string" },
            },
            required: ["attributes", "source"],
            additionalProperties: false,
          },
        },
      },
      required: ["passages"],
      additionalProperties: false,
    },
  },
} as const;

const MAX_LINT_ATTEMPTS = 3;

export const StoryGraphState = Annotation.Root({
  prompt: Annotation<string>(),
  theme: Annotation<string>(),
  streamId: Annotation<string | undefined>(),
  brainstormedIdeas: Annotation<string | undefined>(),
  outline: Annotation<string | undefined>(),
  writerNotes: Annotation<string | undefined>(),
  linkContext: Annotation<string | undefined>(),
  storyPlan: Annotation<PassagePlan[] | undefined>(),
  passages: Annotation<GeneratedPassage[] | undefined>(),
  lintFindings: Annotation<string | undefined>(),
  lintAttempts: Annotation<number | undefined>(),
  messages: Annotation<string[]>({
    reducer: (left, right) => left.concat(right),
    default: () => [],
  }),
});

type StoryGraphOptions = {
  onNodeMessages?: NodeMessageHook;
};

export const createStoryGraph = (client: OpenAI, options?: StoryGraphOptions) => {
  const graphBuilder = new StateGraph(StoryGraphState);

  const { onNodeMessages } = options ?? {};
  const instrumentNode = <T extends { messages?: string[] }>(
    name: string,
    handler: (state: typeof StoryGraphState.State) => Promise<T>,
  ) => createInstrumentedNode(name, handler, onNodeMessages);

  const brainstormConceptsNode = async (state: typeof StoryGraphState.State) => {
    const resp = await withRateLimitRetry(() =>
      client.chat.completions.create({
        model: "gemini-2.0-flash",
        messages: [
          {
            role: "system",
            content:
              `You are IdeaSmith, a self-reflective designer. Perform a mini chain-of-thought before pitching interactive story concepts. \nOutput 3 numbered concepts. For each provide: title, learning objective link, interaction sketch, and risks. Keep under 270 words.`,
          },
          {
            role: "user",
            content: `Theme: ${state.theme}\nPrompt: ${state.prompt}\nReference the structure of Twine stories and prefer ideas that require meaningful choices.`,
          },
        ],
      })
    );

    const brainstormedIdeas = resp.choices?.[0]?.message?.content?.trim();
    if (!brainstormedIdeas) {
      throw new Error("IdeaSmith failed to brainstorm concepts");
    }
    return {
      brainstormedIdeas,
      messages: [
        "IdeaSmith: Generated candidate story concepts with self-reflection.",
        `IdeaSmith Concepts:\n${brainstormedIdeas}`,
      ],
    };
  };

  const writerOutlineNode = async (state: typeof StoryGraphState.State) => {
    if (!state.brainstormedIdeas) {
      throw new Error("StoryWriter needs brainstormed ideas to select from");
    }
    const resp = await withRateLimitRetry(() =>
      client.chat.completions.parse({
        model: "gemini-2.0-flash",
        response_format: OUTLINE_SELECTION_RESPONSE_FORMAT,
        messages: [
          {
            role: "system",
            content:
              `${outlinePrompt}\nRespond with JSON containing the selected concept short name and an outline with beats + learning checkpoints.`,
          },
          {
            role: "user",
            content: `Theme: ${state.theme}\nPrompt: ${state.prompt}\nConcept options:\n${state.brainstormedIdeas}\nPick the most teachable concept and outline 5-7 beats.`,
          },
        ],
      })
    );

    const parsed = resp.choices?.[0]?.message?.parsed as
      | OutlineSelection
      | null
      | undefined;
    if (!parsed?.concept || !parsed?.outline) {
      throw new Error("StoryWriter did not return a parsed outline");
    }
    return {
      selectedConcept: parsed.concept.trim(),
      outline: parsed.outline.trim(),
      messages: [
        "StoryWriter: Locked a concept and produced the outline beats.",
      ],
    };
  };

  const planPassageNode = async (state: typeof StoryGraphState.State) => {
    const resp = await withRateLimitRetry(() =>
      client.chat.completions.parse({
        model: "gemini-2.0-flash",
        response_format: STORY_PLAN_RESPONSE_FORMAT,
        messages: [
          {
            role: "system",
            content:
              `You are PassagePlanner. Transform the outline into a JSON plan whose summaries specify tone, POV, sensory hooks, and lively verbs so later agents know the exact flavor. Mention the emotional beat, the dominant sense, and any signature phrases the prose should echo. Pseudocode must call out the linking goals using Twine-style wikilinks ([[Link Text|Target Passage]]). Capture that strategy in the "linkContext" field so downstream agents understand which passages to connect.`,
          },
          {
            role: "user",
            content: `Theme: ${state.theme}\nOutline:\n${state.outline}\nReturn the JSON schema exactly.`,
          },
        ],
      })
    );

    const parsed = resp.choices?.[0]?.message?.parsed as
      | { passages?: PassagePlan[]; linkContext?: string }
      | null
      | undefined;
    const plan = parsed?.passages;
    if (!plan || plan.length === 0) {
      throw new Error("PassagePlanner did not return any passages");
    }
    const linkContext = parsed?.linkContext?.trim();
    return {
      storyPlan: plan,
      linkContext: linkContext ? linkContext : undefined,
      messages: [
        "PassagePlanner: Produced pseudocode for every passage.",
      ],
    };
  };

  // CODER AGENT: Converts the passage plan into playable Twine passages
  const generatePassagesNode = async (state: typeof StoryGraphState.State) => {
    const linkContext = state.linkContext?.trim() ?? "(no additional link guidance)";
    const storyResp = await withRateLimitRetry(() =>
      client.chat.completions.parse({
        model: "gemini-2.0-flash",
        response_format: TWINE_PASSAGE_RESPONSE_FORMAT,
        messages: [
          {
            role: "system",
            content:
              `You are BuildCoder, a narrative-forward Twine engineer. Preserve every structural instruction from the passage plan, but write like an author with a signature voice: vivid verbs, striking metaphors, varied cadence, and tight viewpoint. Blend the provided sensory hooks and signature phrases into the prose; avoid filler, clichés, or repeated sentence openings. When pseudocode references linking to other pages, convert each intent into a Twine-style wikilink ([[Target Passage]] or [[Link Text|Target Passage]]). Honor the linking guidance below:
${linkContext}
All passages must be valid Twee.
The First Passage must be named "Starting Passage" and include an introductory hook.
Include a "StoryTitle" passage with the story's title.
          
`,
          },
          {
            role: "user",
            content: `Theme: ${state.theme}\nOutline:\n${state.outline}\nPassage plan JSON:\n${JSON.stringify(state.storyPlan, null, 2)}\nWrite immersive passages that follow the plan, honor its tone cues, and only take liberties when it heightens drama without breaking instructions.\n Linter Issues:\n${state.lintFindings ?? "(none)"}`,
          },
        ],
      })
    );

    const parsed = storyResp.choices?.[0]?.message?.parsed as
      | { passages?: GeneratedPassage[] }
      | null
      | undefined;
    const passages = parsed?.passages;
    if (!passages || passages.length === 0) {
      throw new Error("BuildCoder did not emit passages");
    }
    return {
      passages,
      messages: [
        "BuildCoder: Converted the plan into executable passages.",
      ],
    };
  };

  const lintPassagesNode = async (state: typeof StoryGraphState.State) => {
    if (!state.passages || state.passages.length === 0) {
      throw new Error("LintCheck: No passages available for linting.");
    }
    const lintSummary = lintGeneratedPassages(state.passages);
    if (lintSummary) {
      const attempts = state.lintAttempts ?? 0;
      if (attempts >= MAX_LINT_ATTEMPTS) {
        throw new Error(
          `LintCheck: Reached maximum lint attempts (${MAX_LINT_ATTEMPTS}). Outstanding issues:\n${lintSummary}`,
        );
      }
      return {
        lintFindings: lintSummary,
        messages: [
          `LintCheck: Detected issues (cycle ${attempts + 1} of ${MAX_LINT_ATTEMPTS}).`,
          `Lint Findings:\n${lintSummary}`,
        ],
      };
    }
    return {
      lintFindings: undefined,
      messages: ["LintCheck: No blocking lint issues detected."],
    };
  };


  const fixPassagesNode = async (state: typeof StoryGraphState.State) => {
    if (!state.lintFindings) {
      return {
        messages: ["LintFixer: No lint findings provided, keeping current passages."],
      };
    }
    const priorAttempts = state.lintAttempts ?? 0;
    if (priorAttempts >= MAX_LINT_ATTEMPTS) {
      throw new Error(
        `LintFixer: Maximum attempts (${MAX_LINT_ATTEMPTS}) exhausted without resolving lint findings.`,
      );
    }
    const attemptNumber = priorAttempts + 1;
    if (!state.outline || !state.passages || !state.storyPlan) {
      throw new Error("LintFixer: Missing outline, plan, or passages to revise.");
    }
    const storyResp = await withRateLimitRetry(() =>
      client.chat.completions.parse({
        model: "gemini-2.0-flash",
        response_format: TWINE_PASSAGE_RESPONSE_FORMAT,
        messages: [
          {
            role: "system",
            content:
              `You are LintFixer, tightening the generated passages. Only change text needed to resolve lint findings while honoring the plan.`,
          },
          {
            role: "user",
            content: `Theme: ${state.theme}\nOutline:\n${state.outline}\nPassage plan JSON:\n${JSON.stringify(state.storyPlan)}\nCurrent passages JSON:\n${JSON.stringify(state.passages)}\nLint findings to fix:\n${state.lintFindings}`,
          },
        ],
      })
    );

    const parsed = storyResp.choices?.[0]?.message?.parsed as
      | { passages?: GeneratedPassage[] }
      | null
      | undefined;
    const updatedPassages = parsed?.passages;
    if (!updatedPassages || updatedPassages.length === 0) {
      throw new Error("LintFixer: Model did not return updated passages.");
    }

    return {
      passages: updatedPassages,
      lintFindings: undefined,
      lintAttempts: attemptNumber,
      messages: [
        `LintFixer: Applied fixes on attempt ${attemptNumber}; rerunning lint.`,
      ],
    };
  };

  const builderWithNodes = graphBuilder.addNode({
    brainstormConcepts: instrumentNode("brainstormConcepts", brainstormConceptsNode),
    writerOutline: instrumentNode("writerOutline", writerOutlineNode),
    planPassages: instrumentNode("planPassages", planPassageNode),
    generatePassages: instrumentNode("generatePassages", generatePassagesNode),
    lintPassages: instrumentNode("lintPassages", lintPassagesNode),
    fixPassages: instrumentNode("fixPassages", fixPassagesNode),
  });

  builderWithNodes.addEdge("__start__", "brainstormConcepts");
  builderWithNodes.addEdge("brainstormConcepts", "writerOutline");
  builderWithNodes.addEdge("writerOutline", "planPassages");
  builderWithNodes.addEdge("planPassages", "generatePassages");
  builderWithNodes.addEdge("generatePassages", "lintPassages");
  builderWithNodes.addConditionalEdges(
    "lintPassages",
    (state: typeof StoryGraphState.State) =>
      state.lintFindings ? "needsFix" : "clean",
    {
      needsFix: "fixPassages",
      clean: "__end__",
    },
  );
  builderWithNodes.addEdge("fixPassages", "lintPassages");

  return builderWithNodes.compile();
};

