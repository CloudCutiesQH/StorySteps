import { defineEventHandler, readValidatedBody } from "h3";
import { z } from "zod";
import { outlinePrompt } from "../../prompts";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { OpenAI } from "openai";
import { Story, Passage } from "twine-utils";
import { fileURLToPath } from "url";
import { Annotation, StateGraph } from "@langchain/langgraph";
import { compileStoryToHTML } from "../utils/storyCompiler";

const RequestBodySchema = z.object({
  prompt: z.string().min(1),
  theme: z.string().min(1),
});

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


type GeneratedPassage = {
  attributes: {
    name: string;
    tags?: string[];
  };
  source: string;
};

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

const StoryGraphState = Annotation.Root({
  prompt: Annotation<string>(),
  theme: Annotation<string>(),
  brainstormedIdeas: Annotation<string | undefined>(),
  harloweContext: Annotation<string | undefined>(),
  mechanicsDraft: Annotation<string | undefined>(),
  mechanicsNotes: Annotation<string | undefined>(),
  mechanicsPlan: Annotation<string | undefined>(),
  refinedPrompt: Annotation<string | undefined>(),
  outline: Annotation<string | undefined>(),
  passages: Annotation<GeneratedPassage[] | undefined>(),
  lintFindings: Annotation<string | undefined>(),
  lintAttempts: Annotation<number | undefined>(),
  messages: Annotation<string[]>({
    reducer: (left, right) => left.concat(right),
    default: () => [],
  }),
});

const createStoryGraph = (client: OpenAI) => {
  const graphBuilder = new StateGraph(StoryGraphState);

  const retrieveDocsNode = async (state: typeof StoryGraphState.State) => {
    const queryParts = [
      `Theme: ${state.theme}`,
      `Prompt: ${state.prompt}`,
      state.mechanicsPlan ? `Mechanics: ${state.mechanicsPlan}` : null,
    ].filter(Boolean);
    const query = queryParts.join("\n");
    const retrieved = retrieveHarloweContext(query, 3);
    const harloweContext = retrieved ?? HARLOWE_DOC_SNIPPET;
    return {
      harloweContext,
      messages: [
        "DocRetriever: Shared relevant Harlowe manual excerpts for builders.",
      ],
    };
  };

  const brainstormMechanicsNode = async (state: typeof StoryGraphState.State) => {
    const conversation = state.messages?.join("\n") ?? "";
    const resp = await client.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [
        {
          role: "system",
          content:
            "You are MechanicsMuse, an imaginative educational game designer. Propose novel Twine/Harlowe mechanics that reinforce learning objectives while staying grounded in what the developer can implement. Describe 2-3 mechanics, each with: name, learning goal, interaction idea, and Twine/Harlowe primitives needed.",
        },
        {
          role: "user",
          content: `Conversation so far:\n${conversation || "(none yet)"}\n\nTheme: ${state.theme}\nPrompt: ${state.prompt}\nKeep proposals under 220 words total and anticipate implementation constraints that the developer may question.`,
        },
      ],
    });

    const mechanicsDraft = resp.choices?.[0]?.message?.content?.trim();
    if (!mechanicsDraft) {
      throw new Error("MechanicsMuse failed to propose mechanics");
    }
    return {
      mechanicsDraft,
      messages: [
        "MechanicsMuse: Drafted candidate mechanics for discussion.",
        `MechanicsMuse Draft:\n${mechanicsDraft}`,
      ],
    };
  };

  const developerCriticNode = async (state: typeof StoryGraphState.State) => {
    if (!state.mechanicsDraft) {
      throw new Error("DeveloperCritic requires a mechanics draft to review");
    }
    const conversation = state.messages?.join("\n") ?? "";
    const docContext = state.harloweContext ?? HARLOWE_DOC_SNIPPET;
    const resp = await client.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [
        {
          role: "system",
          content:
            `You are BuilderBot, a pragmatic Twine/Harlowe developer. Evaluate proposed mechanics for feasibility using actual Harlowe 3 capabilities. Reference helpful docs when debating viability:\n${docContext}\nRespond with sections:\n- Feasible: list mechanics you can build and mention required macros.\n- Concerns: highlight anything risky or impossible plus suggested tweaks.\n- Next Requests: what you need clarified before building. Keep it under 220 words.`,
        },
        {
          role: "user",
          content: `Conversation so far:\n${conversation || "(none yet)"}\n\nMechanics under review:\n${state.mechanicsDraft}`,
        },
      ],
    });

    const mechanicsNotes = resp.choices?.[0]?.message?.content?.trim();
    if (!mechanicsNotes) {
      throw new Error("BuilderBot did not provide feedback");
    }
    return {
      mechanicsNotes,
      messages: [
        "BuilderBot: Challenged the mechanics and noted feasibility concerns.",
        `BuilderBot Feedback:\n${mechanicsNotes}`,
      ],
    };
  };

  const brainstormRefineNode = async (state: typeof StoryGraphState.State) => {
    const conversation = state.messages?.join("\n") ?? "";
    const notes = state.mechanicsNotes ?? "(developer has not left notes)";
    const resp = await client.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [
        {
          role: "system",
          content:
            "You are MechanicsMuse iterating on the design after developer critique. Produce an updated mechanics plan that keeps the strongest ideas while resolving concerns. Include short implementation suggestions per mechanic.",
        },
        {
          role: "user",
          content: `Conversation so far:\n${conversation || "(none yet)"}\n\nOriginal draft:\n${state.mechanicsDraft ?? "(none)"}\n\nDeveloper feedback to address:\n${notes}\n\nReturn a concise mechanics plan (max 200 words) with numbered items.`,
        },
      ],
    });

    const mechanicsPlan = resp.choices?.[0]?.message?.content?.trim();
    if (!mechanicsPlan) {
      throw new Error("MechanicsMuse failed to refine the plan");
    }
    return {
      mechanicsPlan,
      messages: [
        "MechanicsMuse: Revised the mechanics based on feedback.",
        `Mechanics Plan Draft:\n${mechanicsPlan}`,
      ],
    };
  };

  const developerApprovalNode = async (state: typeof StoryGraphState.State) => {
    const planToVerify = state.mechanicsPlan ?? state.mechanicsDraft;
    if (!planToVerify) {
      throw new Error("BuilderBot needs a mechanics plan to approve");
    }
    const conversation = state.messages?.join("\n") ?? "";
    const docContext = state.harloweContext ?? HARLOWE_DOC_SNIPPET;
    const resp = await client.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [
        {
          role: "system",
          content:
            `You are BuilderBot performing a final implementation pass. Confirm which mechanics can now be built, detail any last adjustments, and outline the Twine/Harlowe approach referencing macros or patterns from:\n${docContext}\nIf something remains infeasible, offer a fallback mechanic. Keep response under 220 words.`,
        },
        {
          role: "user",
          content: `Conversation so far:\n${conversation || "(none yet)"}\n\nMechanics plan for approval:\n${planToVerify}`,
        },
      ],
    });

    const approvedPlan = resp.choices?.[0]?.message?.content?.trim();
    if (!approvedPlan) {
      throw new Error("BuilderBot did not provide a final plan");
    }
    return {
      mechanicsPlan: approvedPlan,
      messages: [
        "BuilderBot: Signed off on the mechanics with implementation notes.",
        `BuilderBot Final Plan:\n${approvedPlan}`,
      ],
    };
  };

  const refinePromptNode = async (state: typeof StoryGraphState.State) => {
    const conversation = state.messages?.join("\n") ?? "";
    const mechanicsContext =
      state.mechanicsPlan ?? state.mechanicsDraft ?? "(mechanics TBD)";
    const resp = await client.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [
        {
          role: "system",
          content:
            "You are a expert at crafting prompts for a llm that crafts stories in twine that tells educational stories.\n Only respond with the prompt.",
        },
        {
          role: "user",
          content: `Conversation so far:\n${conversation || "(none yet)"}\n\nTheme: ${state.theme}\nOriginal prompt: ${state.prompt}\nMechanics plan to honor:\n${mechanicsContext}`,
        },
      ],
    });

    const refinedPrompt = resp.choices?.[0]?.message?.content?.trim();
    if (!refinedPrompt) {
      throw new Error("Prompt refinement model returned empty content");
    }
    console.log("[generatev2] refined prompt:", refinedPrompt);
    return {
      refinedPrompt,
      messages: [
        "PromptRefiner: Explored possibilities and produced a sharper creative brief.",
        `PromptRefiner Output:\n${refinedPrompt}`,
      ],
    };
  };

  const outlineNode = async (state: typeof StoryGraphState.State) => {
    const workingPrompt = state.refinedPrompt ?? state.prompt;
    const conversation = state.messages?.join("\n") ?? "";
    const mechanicsContext =
      state.mechanicsPlan ?? state.mechanicsDraft ?? "(mechanics TBD)";
    const outlineResp = await client.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [
        { role: "system", content: outlinePrompt },
        {
          role: "user",
          content: `Conversation so far:\n${conversation || "(none yet)"}\n\nTheme: ${state.theme}\nWorking prompt: ${workingPrompt}\nMechanics to weave in:\n${mechanicsContext}`,
        },
      ],
    });

    const outline = outlineResp.choices?.[0]?.message?.content?.trim();
    if (!outline) {
      throw new Error("Outline generation model returned empty content");
    }
    console.log("[generatev2] outline generated (chars):", outline.length);
    return {
      outline,
      messages: [
        "OutlineArchitect: Proposed the main beats and interactions for the story.",
      ],
    };
  };

  const passageNode = async (state: typeof StoryGraphState.State) => {
    const workingPrompt = state.refinedPrompt ?? state.prompt;
    if (!state.outline) {
      throw new Error("Cannot generate passages without an outline");
    }
    const conversation = state.messages?.join("\n") ?? "";
    const mechanicsContext =
      state.mechanicsPlan ?? state.mechanicsDraft ?? "(mechanics TBD)";
    const docContext = state.harloweContext ?? HARLOWE_DOC_SNIPPET;

    const storyResp = await client.chat.completions.parse({
      model: "gemini-2.0-flash",
      response_format: TWINE_PASSAGE_RESPONSE_FORMAT,
      messages: [
        {
          role: "system",
          content:
            `You are an expert Harlowe 3 developer. Collaborate with other agents by reading their conversation log, then craft Twine passages that obey the structured output schema.\n\nHelpful Harlowe reference:\n${docContext}\n\nReturn passages as a JSON object. Each passage should have:\n- name: Title\n- text: Content with [[Link Text|Target]] links and Harlowe macros like (set:), (if:), (link:)\n- tags: Optional tag array\n\nProduce 6-12 passages, include a StoryTitle passage and begin at Starting Passage. Ensure beginning, middle, end, and interactive elements. Only respond with the JSON object.`,
        },
        {
          role: "user",
          content: `Conversation so far:\n${conversation || "(none yet)"}\n\nTheme: ${state.theme}\nWorking prompt: ${workingPrompt}\nMechanics to showcase:\n${mechanicsContext}\n\nStory outline:\n${state.outline}`,
        },
      ],
    });

    const parsed = storyResp.choices?.[0]?.message?.parsed as
      | { passages?: GeneratedPassage[] }
      | null
      | undefined;
    const passages = parsed?.passages;
    if (!passages || passages.length === 0) {
      throw new Error("Story generation model returned no passages");
    }
    console.log(`[generatev2] passages generated: ${passages.length}`);
    return {
      passages,
      messages: [
        "CoderAgent: Converted the outline into runnable Harlowe passages with doc support.",
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
    const workingPrompt = state.refinedPrompt ?? state.prompt;
    if (!state.outline || !state.passages) {
      throw new Error("LintFixer: Missing outline or passages to revise.");
    }
    const docContext = state.harloweContext ?? HARLOWE_DOC_SNIPPET;
    const storyResp = await client.chat.completions.parse({
      model: "gemini-2.0-flash",
      response_format: TWINE_PASSAGE_RESPONSE_FORMAT,
      messages: [
        {
          role: "system",
          content:
            `You are LintFixer, an expert Harlowe 3 developer. Given lint errors, update the Twine passages to satisfy the structured schema and resolve every finding. Preserve the spirit of the outline and mechanics while fixing syntax. Reference documentation snippets:\n${docContext}`,
        },
        {
          role: "user",
          content: `Theme: ${state.theme}\nWorking prompt: ${workingPrompt}\nOutline:\n${state.outline}\n\nCurrent passages (JSON):\n${JSON.stringify(state.passages)}\n\nLint findings to fix:\n${state.lintFindings}`,
        },
      ],
    });

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
    retrieveDocs: retrieveDocsNode,
    brainstormMechanics: brainstormMechanicsNode,
    developerCritic: developerCriticNode,
    brainstormRefine: brainstormRefineNode,
    developerApproval: developerApprovalNode,
    refinePrompt: refinePromptNode,
    generateOutline: outlineNode,
    generatePassages: passageNode,
    lintPassages: lintPassagesNode,
    fixPassages: fixPassagesNode,
  });

  builderWithNodes.addEdge("__start__", "retrieveDocs");
  builderWithNodes.addEdge("retrieveDocs", "brainstormMechanics");
  builderWithNodes.addEdge("brainstormMechanics", "developerCritic");
  builderWithNodes.addEdge("developerCritic", "brainstormRefine");
  builderWithNodes.addEdge("brainstormRefine", "developerApproval");
  builderWithNodes.addEdge("developerApproval", "refinePrompt");
  builderWithNodes.addEdge("refinePrompt", "generateOutline");
  builderWithNodes.addEdge("generateOutline", "generatePassages");
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

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, RequestBodySchema.safeParse);
  if (!result.success) {
    throw result.error;
  }
  const body = result.data;
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  const openai = new OpenAI({
    apiKey,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
  });

  const graph = createStoryGraph(openai);
  const graphState = await graph.invoke({
    prompt: body.prompt,
    theme: body.theme,
  });

  const generatedPassages = graphState.passages;
  if (!generatedPassages || generatedPassages.length === 0) {
    throw new Error("Story graph did not produce any passages");
  }

  const passageInstances = generatedPassages.map(
    (p) =>
      new Passage({
        attributes: p.attributes,
        source: p.source,
      }),
  );

  const story = new Story({
    passages: passageInstances,
    javascript: "",
    stylesheet: "",
  });

  story.startPassage =
    passageInstances.find((p) => p.attributes.name === "Starting Passage") ||
    passageInstances[0];

  return compileStoryToHTML(story);
});
