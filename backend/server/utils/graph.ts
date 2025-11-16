import { outlinePrompt } from "../../prompts";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { withRateLimitRetry } from "../utils/rateLimitHandler";
import { fileURLToPath } from "url";
import { Annotation, StateGraph } from "@langchain/langgraph";
import { OpenAI } from "openai";

const routeDir = dirname(fileURLToPath(import.meta.url));

const harloweReference = readFileSync(
  join(routeDir, "..", "..", "assets", "harlowe-cheatsheet.txt"),
  "utf-8",
);

const harloweManual = readFileSync(
  join(routeDir, "..", "..", "assets", "HarloweDocs.md"),
  "utf-8",
);

const HARLOWE_DOC_SNIPPET = harloweReference.slice(0, 4000);

type HarloweSection = {
  title: string;
  body: string;
  tokenCounts: Map<string, number>;
};

const tokenize = (text: string) =>
  text
    .toLowerCase()
    .split(/[^a-z0-9]+/g)
    .filter(Boolean);

const buildTokenCounts = (text: string) => {
  const counts = new Map<string, number>();
  tokenize(text).forEach((token) => {
    counts.set(token, (counts.get(token) ?? 0) + 1);
  });
  return counts;
};

const buildSections = (manual: string): HarloweSection[] => {
  const lines = manual.split(/\r?\n/);
  const sections: HarloweSection[] = [];
  let currentTitle = "Introduction";
  let buffer: string[] = [];
  const flush = () => {
    if (buffer.length === 0) {
      return;
    }
    const body = buffer.join("\n").trim();
    sections.push({
      title: currentTitle,
      body,
      tokenCounts: buildTokenCounts(`${currentTitle} ${body}`),
    });
    buffer = [];
  };

  for (const line of lines) {
    if (/^#{3,6}\s+/.test(line.trim())) {
      flush();
      currentTitle = line.replace(/^#+\s*/, "").trim() || currentTitle;
    } else {
      buffer.push(line);
    }
  }
  flush();
  return sections;
};

const HARLOWE_SECTIONS = buildSections(harloweManual);

const scoreSection = (queryTokens: Map<string, number>, section: HarloweSection) => {
  let score = 0;
  queryTokens.forEach((count, token) => {
    const sectionCount = section.tokenCounts.get(token);
    if (sectionCount) {
      score += count * sectionCount;
    }
  });
  return score;
};

const retrieveHarloweContext = (query: string, maxSections = 3) => {
  if (!query.trim()) {
    return undefined;
  }
  const queryCounts = buildTokenCounts(query);
  const ranked = HARLOWE_SECTIONS
    .map((section) => ({
      section,
      score: scoreSection(queryCounts, section),
    }))
    .sort((a, b) => b.score - a.score);

  const top = ranked.filter(({ score }) => score > 0).slice(0, maxSections);
  const fallback = ranked.slice(0, maxSections);
  const chosen = top.length > 0 ? top : fallback;

  if (chosen.length === 0) {
    return undefined;
  }

  return chosen
    .map(({ section }) => `### ${section.title}\n${section.body}`)
    .join("\n\n---\n\n");
};


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

const REVIEW_RESPONSE_FORMAT = {
  type: "json_schema",
  json_schema: {
    name: "FeatureReview",
    strict: true,
    schema: {
      type: "object",
      properties: {
        approved: { type: "boolean" },
        notes: { type: "string" },
      },
      required: ["approved", "notes"],
      additionalProperties: false,
    },
  },
} as const;

const MAX_FEATURE_ATTEMPTS = 3;
const MAX_LINT_ATTEMPTS = 3;

export const StoryGraphState = Annotation.Root({
  prompt: Annotation<string>(),
  theme: Annotation<string>(),
  streamId: Annotation<string | undefined>(),
  brainstormedIdeas: Annotation<string | undefined>(),
  selectedConcept: Annotation<string | undefined>(),
  outline: Annotation<string | undefined>(),
  featuresDraft: Annotation<string | undefined>(),
  featuresPlan: Annotation<string | undefined>(),
  devNotes: Annotation<string | undefined>(),
  writerNotes: Annotation<string | undefined>(),
  featureStatus: Annotation<string | undefined>(),
  featureAttempts: Annotation<number | undefined>(),
  harloweContext: Annotation<string | undefined>(),
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

  const retrieveDocsNode = async (state: typeof StoryGraphState.State) => {
    const queryParts = [
      `Theme: ${state.theme}`,
      `Prompt: ${state.prompt}`,
      state.selectedConcept ? `Concept: ${state.selectedConcept}` : null,
      state.outline ? `Outline snippet: ${state.outline.slice(0, 200)}` : null,
      state.featuresPlan
        ? `Approved features: ${state.featuresPlan}`
        : state.featuresDraft
          ? `Features draft: ${state.featuresDraft}`
          : null,
    ].filter(Boolean);
    const query = queryParts.join("\n");
    const retrieved = retrieveHarloweContext(query, 3);
    const harloweContext = retrieved ?? HARLOWE_DOC_SNIPPET;
    return {
      harloweContext,
      messages: [
        "DocRetriever: Shared relevant Harlowe excerpts early so downstream agents can ground their ideas.",
      ],
    };
  };

  const brainstormConceptsNode = async (state: typeof StoryGraphState.State) => {
    const docContext = state.harloweContext ?? HARLOWE_DOC_SNIPPET;
    const resp = await withRateLimitRetry(() =>
      client.chat.completions.create({
        model: "gemini-2.0-flash",
        messages: [
          {
            role: "system",
            content:
              `You are IdeaSmith, a self-reflective designer. Perform a mini chain-of-thought before pitching interactive story concepts. Use the reference snippets when citing mechanics:\n${docContext}\n\nOutput 3 numbered concepts. For each provide: title, learning objective link, interaction sketch, and risks. Keep under 270 words.`,
          },
          {
            role: "user",
            content: `Theme: ${state.theme}\nPrompt: ${state.prompt}\nReference the structure of Harlowe stories and prefer ideas that require meaningful choices.`,
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

  const featureMuseNode = async (state: typeof StoryGraphState.State) => {
    if (!state.outline) {
      throw new Error("MechanicsMuse requires an outline to build against");
    }
    const docContext = state.harloweContext ?? HARLOWE_DOC_SNIPPET;
    const resp = await withRateLimitRetry(() =>
      client.chat.completions.create({
        model: "gemini-2.0-flash",
        messages: [
          {
            role: "system",
            content:
              `You are MechanicsMuse, proposing Twine/Harlowe interactive features that reinforce learning while staying buildable. Reference the docs when naming macros:\n${docContext}\nProvide 3-4 mechanics with: name, educational intent, interaction steps, and specific Harlowe primitives. Keep under 230 words.`,
          },
          {
            role: "user",
            content: `Theme: ${state.theme}\nConcept: ${state.selectedConcept ?? "(not stated)"}\nOutline:\n${state.outline}\nRecent feedback:${state.writerNotes ?? state.devNotes ?? " (none)"}\nDraft mechanics that feel cohesive with the outline.`,
          },
        ],
      })
    );

    const featuresDraft = resp.choices?.[0]?.message?.content?.trim();
    if (!featuresDraft) {
      throw new Error("MechanicsMuse failed to deliver features");
    }
    return {
      featuresDraft,
      featureStatus: "drafted",
      devNotes: undefined,
      writerNotes: undefined,
      messages: [
        "MechanicsMuse: Proposed interactive learning features.",
        `Mechanics draft:\n${featuresDraft}`,
      ],
    };
  };

  const developerReviewNode = async (state: typeof StoryGraphState.State) => {
    if (!state.featuresDraft) {
      throw new Error("BuilderBot needs a features draft to review");
    }
    const docContext = state.harloweContext ?? HARLOWE_DOC_SNIPPET;
    const resp = await withRateLimitRetry(() =>
      client.chat.completions.parse({
        model: "gemini-2.0-flash",
        response_format: REVIEW_RESPONSE_FORMAT,
        messages: [
          {
            role: "system",
            content:
              `You are BuilderBot, the developer. Evaluate the mechanics for feasibility, calling out macros, state handling, and implementation risks using:\n${docContext}\nApprove only if each feature has a viable approach.`,
          },
          {
            role: "user",
            content: `Theme: ${state.theme}\nOutline:\n${state.outline ?? "(missing)"}\nMechanics draft:\n${state.featuresDraft}\nProvide JSON with approval decision and notes.`,
          },
        ],
      })
    );

    const review = resp.choices?.[0]?.message?.parsed as
      | { approved: boolean; notes: string }
      | null
      | undefined;
    if (!review) {
      throw new Error("BuilderBot review did not parse");
    }

    if (!review.approved) {
      const nextAttempts = (state.featureAttempts ?? 0) + 1;
      if (nextAttempts > MAX_FEATURE_ATTEMPTS) {
        throw new Error(
          `BuilderBot exhausted ${MAX_FEATURE_ATTEMPTS} review cycles without approval. Latest notes:\n${review.notes}`,
        );
      }
      return {
        featureStatus: "needs-dev-revision",
        devNotes: review.notes,
        featureAttempts: nextAttempts,
        messages: [
          "BuilderBot: Requested revisions before implementation.",
          `BuilderBot notes:\n${review.notes}`,
        ],
      };
    }

    return {
      featureStatus: "dev-approved",
      devNotes: review.notes,
      featuresPlan: state.featuresDraft,
      messages: [
        "BuilderBot: Approved the mechanics with implementation notes.",
        `BuilderBot approval notes:\n${review.notes}`,
      ],
    };
  };

  const writerApprovalNode = async (state: typeof StoryGraphState.State) => {
    if (!state.featuresPlan) {
      throw new Error("WriterReview requires an approved features plan");
    }
    const resp = await withRateLimitRetry(() =>
      client.chat.completions.parse({
        model: "gemini-2.0-flash",
        response_format: REVIEW_RESPONSE_FORMAT,
        messages: [
          {
            role: "system",
            content:
              "You are StoryWriter reviewing the developer-approved mechanics. Ensure voice, pacing, and learning checkpoints remain intact before coding. Approve only if the mechanics serve the narrative beats.",
          },
          {
            role: "user",
            content: `Concept: ${state.selectedConcept ?? "(not stated)"}\nOutline:\n${state.outline ?? "(missing)"}\nMechanics plan:\n${state.featuresPlan}\nReply using the JSON review schema.`,
          },
        ],
      })
    );

    const review = resp.choices?.[0]?.message?.parsed as
      | { approved: boolean; notes: string }
      | null
      | undefined;
    if (!review) {
      throw new Error("StoryWriter review did not parse");
    }

    if (!review.approved) {
      const nextAttempts = (state.featureAttempts ?? 0) + 1;
      if (nextAttempts > MAX_FEATURE_ATTEMPTS) {
        throw new Error(
          `StoryWriter rejected the plan ${MAX_FEATURE_ATTEMPTS} times. Notes:\n${review.notes}`,
        );
      }
      return {
        featureStatus: "needs-writer-revision",
        writerNotes: review.notes,
        featuresDraft: state.featuresPlan,
        featureAttempts: nextAttempts,
        messages: [
          "StoryWriter: Asked for narrative adjustments before coding.",
          `StoryWriter notes:\n${review.notes}`,
        ],
      };
    }

    return {
      featureStatus: "writer-approved",
      writerNotes: undefined,
      messages: [
        "StoryWriter: Approved the mechanics and green-lit pseudocode planning.",
      ],
    };
  };

  const featureRewriteNode = async (state: typeof StoryGraphState.State) => {
    const critique = state.writerNotes ?? state.devNotes;
    const basePlan = state.featuresPlan ?? state.featuresDraft;
    if (!critique || !basePlan) {
      throw new Error("FeatureRewriter requires critique notes and a base plan");
    }
    const resp = await withRateLimitRetry(() =>
      client.chat.completions.create({
        model: "gemini-2.0-flash",
        messages: [
          {
            role: "system",
            content:
              "You are MechanicsMuse revising the plan after critique. Keep what works, address every note, and stay within scope.",
          },
          {
            role: "user",
            content: `Theme: ${state.theme}\nConcept: ${state.selectedConcept ?? "(not stated)"}\nOutline:\n${state.outline ?? "(missing)"}\nCurrent plan:\n${basePlan}\nFeedback to address:\n${critique}\nReturn an updated mechanics plan ready for another review.`,
          },
        ],
      })
    );

    const featuresDraft = resp.choices?.[0]?.message?.content?.trim();
    if (!featuresDraft) {
      throw new Error("FeatureRewriter did not return a revised plan");
    }
    return {
      featuresDraft,
      featureStatus: "revised",
      devNotes: undefined,
      writerNotes: undefined,
      messages: [
        "MechanicsMuse: Produced a revised plan responding to critiques.",
        `Revised plan:\n${featuresDraft}`,
      ],
    };
  };

  const pseudocodePlannerNode = async (state: typeof StoryGraphState.State) => {
    if (!state.featuresPlan || !state.outline) {
      throw new Error("PassagePlanner requires the outline and approved mechanics");
    }
    const docContext = state.harloweContext ?? HARLOWE_DOC_SNIPPET;
    const resp = await withRateLimitRetry(() =>
      client.chat.completions.parse({
        model: "gemini-2.0-flash",
        response_format: STORY_PLAN_RESPONSE_FORMAT,
        messages: [
          {
            role: "system",
            content:
              `You are PassagePlanner. Transform the outline + mechanics into a JSON plan whose summaries specify tone, POV, sensory hooks, and lively verbs so later agents know the exact flavor. Mention the emotional beat, the dominant sense, and any signature phrases the prose should echo. Pseudocode must still call out links, variables, and gating logic. Reference this doc snippet when choosing macros:\n${docContext}`,
          },
          {
            role: "user",
            content: `Theme: ${state.theme}\nConcept: ${state.selectedConcept ?? "(not stated)"}\nOutline:\n${state.outline}\nMechanics plan:\n${state.featuresPlan}\nReturn the JSON schema exactly.`,
          },
        ],
      })
    );

    const parsed = resp.choices?.[0]?.message?.parsed as
      | { passages?: PassagePlan[] }
      | null
      | undefined;
    const plan = parsed?.passages;
    if (!plan || plan.length === 0) {
      throw new Error("PassagePlanner did not return any passages");
    }
    return {
      storyPlan: plan,
      messages: [
        "PassagePlanner: Produced pseudocode for every passage.",
      ],
    };
  };

  // CODER AGENT: Converts the passage plan into actual Harlowe passages
  const generatePassagesNode = async (state: typeof StoryGraphState.State) => {
    if (!state.storyPlan || !state.outline || !state.featuresPlan) {
      throw new Error("CoderAgent requires the plan, outline, and mechanics");
    }
    const docContext = state.harloweContext ?? HARLOWE_DOC_SNIPPET;
    const storyResp = await withRateLimitRetry(() =>
      client.chat.completions.parse({
        model: "gemini-2.0-flash",
        response_format: TWINE_PASSAGE_RESPONSE_FORMAT,
        messages: [
          {
            role: "system",
            content:
              `You are BuildCoder, a narrative-forward Harlowe 3 engineer. Preserve every structural instruction from the passage plan, but write like an author with a signature voice: vivid verbs, striking metaphors, varied cadence, and tight viewpoint. Blend the provided sensory hooks and signature phrases into the prose; avoid filler, clichés, or repeated sentence openings. When pseudocode references state changes or mechanics, translate them into correct Harlowe syntax, keeping narrative beats intact. All passages must be valid Twee.\nReference as needed:\n${docContext}`,
          },
          {
            role: "user",
            content: `Theme: ${state.theme}\nConcept: ${state.selectedConcept ?? "(not stated)"}\nOutline:\n${state.outline}\nMechanics:\n${state.featuresPlan}\nPassage plan JSON:\n${JSON.stringify(state.storyPlan, null, 2)}\nWrite immersive passages that follow the plan, honor its tone cues, and only take liberties when it heightens drama without breaking instructions.`,
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
        "BuildCoder: Converted the plan into executable Harlowe passages.",
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

  const lintHarloweTwee = (twee: string) => {
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
    const docContext = state.harloweContext ?? HARLOWE_DOC_SNIPPET;
    const storyResp = await withRateLimitRetry(() =>
      client.chat.completions.parse({
        model: "gemini-2.0-flash",
        response_format: TWINE_PASSAGE_RESPONSE_FORMAT,
        messages: [
          {
            role: "system",
            content:
              `You are LintFixer, tightening the generated passages. Only change text needed to resolve lint findings while honoring the plan. Reference docs:\n${docContext}`,
          },
          {
            role: "user",
            content: `Theme: ${state.theme}\nConcept: ${state.selectedConcept ?? "(not stated)"}\nOutline:\n${state.outline}\nMechanics:\n${state.featuresPlan}\nPassage plan JSON:\n${JSON.stringify(state.storyPlan)}\nCurrent passages JSON:\n${JSON.stringify(state.passages)}\nLint findings to fix:\n${state.lintFindings}`,
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
    retrieveDocs: instrumentNode("retrieveDocs", retrieveDocsNode),
    brainstormConcepts: instrumentNode("brainstormConcepts", brainstormConceptsNode),
    writerOutline: instrumentNode("writerOutline", writerOutlineNode),
    featureMuse: instrumentNode("featureMuse", featureMuseNode),
    developerReview: instrumentNode("developerReview", developerReviewNode),
    writerApproval: instrumentNode("writerApproval", writerApprovalNode),
    featureRewrite: instrumentNode("featureRewrite", featureRewriteNode),
    planPassages: instrumentNode("planPassages", pseudocodePlannerNode),
    generatePassages: instrumentNode("generatePassages", generatePassagesNode),
    lintPassages: instrumentNode("lintPassages", lintPassagesNode),
    fixPassages: instrumentNode("fixPassages", fixPassagesNode),
  });

  builderWithNodes.addEdge("__start__", "retrieveDocs");
  builderWithNodes.addEdge("retrieveDocs", "brainstormConcepts");
  builderWithNodes.addEdge("brainstormConcepts", "writerOutline");
  builderWithNodes.addEdge("writerOutline", "featureMuse");
  builderWithNodes.addEdge("featureMuse", "developerReview");
  builderWithNodes.addEdge("featureRewrite", "developerReview");
  builderWithNodes.addConditionalEdges(
    "developerReview",
    (state: typeof StoryGraphState.State) =>
      state.featureStatus === "needs-dev-revision" ? "revise" : "devApproved",
    {
      revise: "featureRewrite",
      devApproved: "writerApproval",
    },
  );
  builderWithNodes.addConditionalEdges(
    "writerApproval",
    (state: typeof StoryGraphState.State) =>
      state.featureStatus === "needs-writer-revision" ? "revise" : "writerApproved",
    {
      revise: "featureRewrite",
      writerApproved: "planPassages",
    },
  );
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

