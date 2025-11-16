import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { JSDOM } from "jsdom";
import { Story, StoryFormat } from "twine-utils";

const moduleDir = dirname(fileURLToPath(import.meta.url));
const formatSource = readFileSync(
  join(
    moduleDir,
    "..",
    "..",
    "assets",
    "story-formats",
    "harlowe-3.3.9",
    "format.js",
  ),
  "utf-8",
);

type DomGlobalKey = keyof typeof domGlobalProps;

type DomGlobalBackups = Partial<Record<DomGlobalKey, PropertyDescriptor | undefined>>;

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
        reject(
          new Error(
            "Asked to load a story format but window.storyFormat is currently defined. Did another format fail to load?",
          ),
        );
      }
      const loader = (attributes: any) => {
        const hydrateResult: any = {};
        if (typeof attributes.hydrate === "string") {
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
        navigator: { userAgent: "Node.js" },
      };
      (global as any).window = mockWindow;
      new Function(rawSource)();
    });
  };
};

patchStoryFormatLoad();

export const compileStoryToHTML = (story: Story): string => {
  const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
  const backups = applyDomGlobals(dom);
  try {
    const format = new StoryFormat(formatSource);
    return format.publish(story);
  } finally {
    restoreDomGlobals(backups);
  }
};
