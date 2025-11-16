import { defineEventHandler, readValidatedBody } from "h3";
import { z } from 'zod';
import { outlinePrompt } from "../../prompts"
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { OpenAI } from "openai";
import { Story, Passage, StoryFormat } from "twine-utils";
import { fileURLToPath } from "url";
import { JSDOM } from "jsdom";

const RequestBodySchema = z.object({
    prompt: z.string().min(1),
    theme: z.string().min(1)
});

const routeDir = dirname(fileURLToPath(import.meta.url));
const formatSource = readFileSync(join(routeDir, "..", "..", "assets", "story-formats", "harlowe-3.3.9", "format.js"), "utf-8");

const setGlobalValue = (name: string, value: any) => {
  const target = globalThis as any;
  const descriptor = Object.getOwnPropertyDescriptor(target, name);
  if (descriptor?.configurable) {
    Object.defineProperty(target, name, {
      value,
      writable: true,
      configurable: true,
      enumerable: descriptor.enumerable ?? true,
    });
  } else {
    target[name] = value;
  }
};

const domGlobalProps = {
  document: (dom: JSDOM) => dom.window.document,
  window: (dom: JSDOM) => dom.window,
  Text: (dom: JSDOM) => dom.window.Text,
  HTMLElement: (dom: JSDOM) => dom.window.HTMLElement,
  Element: (dom: JSDOM) => dom.window.Element,
  navigator: (dom: JSDOM) => dom.window.navigator,
} as const;

type DomGlobalKey = keyof typeof domGlobalProps;

type DomGlobalBackups = Partial<Record<DomGlobalKey, PropertyDescriptor | undefined>>;

const applyDomGlobals = (dom: JSDOM) => {
  const target = globalThis as any;
  const backups: DomGlobalBackups = {};

  (Object.keys(domGlobalProps) as DomGlobalKey[]).forEach((name) => {
    backups[name] = Object.getOwnPropertyDescriptor(target, name);
    setGlobalValue(name, domGlobalProps[name](dom));
  });

  return backups;
};

const restoreDomGlobals = (backups: DomGlobalBackups) => {
  const target = globalThis as any;
  (Object.keys(domGlobalProps) as DomGlobalKey[]).forEach((name) => {
    const descriptor = backups[name];
    if (descriptor) {
      Object.defineProperty(target, name, descriptor);
    } else {
      delete target[name];
    }
  });
};

const patchStoryFormatLoad = () => {
  (StoryFormat.prototype as any).load = function (rawSource: string) {
    const self = this as any;
    return new Promise((resolve, reject) => {
      const oldWindow = (global as any).window;
      if (oldWindow?.storyFormat) {
        reject(new Error('Asked to load a story format but window.storyFormat is currently defined. Did another format fail to load?'));
      }
      const loader = (attributes: any) => {
        const hydrateResult: any = {};
        if (typeof attributes.hydrate === 'string') {
          const hydrateFunc = new Function(attributes.hydrate);
          hydrateFunc.call(hydrateResult);
        }
        self.attributes = { ...hydrateResult, ...attributes };
        (global as any).window = oldWindow;
        resolve(undefined);
      };
      const mockWindow: any = {
        storyFormat: loader,
        escape: encodeURIComponent,
        navigator: { userAgent: 'Node.js' }
      };
      (global as any).window = mockWindow;
      new Function(rawSource)();
    });
  };
};

patchStoryFormatLoad();

function compileStoryToHTML(story: Story): string {
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
  const backups = applyDomGlobals(dom);
  try {
    const format = new StoryFormat(formatSource);
    return format.publish(story);
  } finally {
    restoreDomGlobals(backups);
  }
}

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, RequestBodySchema.safeParse);
  if (!result.success) {
    throw result.error;
  }
  const body = result.data;

  const openai = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
  });

  // Refine user prompt
  const resp = await openai.chat.completions.create({
    model: "gemini-2.0-flash",
    messages: [
      { role: "system", content: "You are a expert at crafting prompts for a llm that crafts stories in twine that tells educational stories.\n Only respond with the prompt." },
      { role: "user", content: `The theme is \n${body.theme} \n\nThe prompt is: \n${body.prompt}` }
    ]
  });

  const refinedPrompt = resp.choices[0].message.content;
  console.log("refined prompt.." + refinedPrompt);

  // Generate story outline from prompt
  const outlineResp = await openai.chat.completions.create({
    model: "gemini-2.0-flash",
    messages: [
      { role: "system", content: outlinePrompt },
      { role: "user", content: `The theme is \n${body.theme} \n\nThe prompt is: \n${refinedPrompt}` }
    ]
  });

  const refinedOutline = outlineResp.choices[0].message.content;
  console.log(refinedOutline)

  // Generate story in Twee format from outline using structured output
  const storyResp = await openai.chat.completions.parse({
    model: "gemini-2.0-flash",
    response_format: {
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
                      name: {
                        type: "string"
                      },
                      tags: {
                        type: "array",
                        items: {
                          type: "string"
                        }
                      }
                    },
                    required: ["name"],
                    additionalProperties: false
                  },
                  source: {
                    type: "string"
                  }
                },
                required: ["attributes", "source"],
                additionalProperties: false
              }
            }
          },
          required: ["passages"],
          additionalProperties: false
        }
      }
    },
    messages: [
      {
        role: "system",
        content: `You are an expert at generating working Twine stories in Harlowe 3 format. Return passages as a JSON object. Each passage should have:\n- name: The passage title\n- text: The passage content with Twine links using [[Link Text|Target Passage]] syntax and Harlowe macros like (set:), (if:), (link:)\n- tags: Optional array of tags\n\nProduce 6-12 passages. Keep passages concise and self-contained. There is a special passage called StoryTitle that is the title of the story. The first passage is called Starting Passage and is where the story begins. Make sure the story has a coherent beginning, middle, and end. Use interactive elements to engage the reader. Only respond with the JSON object.`
      },
      { role: "user", content: `The theme is \n${body.theme} \n\nThe prompt is: \n${refinedPrompt}\n\nThe outline is: \n${refinedOutline}` }
    ]
  });

  const parsedResponse = storyResp.choices[0].message.parsed as unknown as { passages: Passage[] };

  // Map plain JavaScript objects to Passage instances and build story
  const passageInstances = parsedResponse.passages.map((p: Passage) => new Passage({
    attributes: p.attributes,
    source: p.source
  }));

  const story = new Story({
    passages: passageInstances,
    javascript: "",
    stylesheet: "",
  });

  story.startPassage = passageInstances.find(p => p.attributes.name === 'Starting Passage') || passageInstances[0];

  return compileStoryToHTML(story);
});
