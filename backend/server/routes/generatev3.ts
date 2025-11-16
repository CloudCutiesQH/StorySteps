import { defineEventHandler, getQuery, readValidatedBody, type H3Event } from "h3";
import { z } from "zod";
import { OpenAI } from "openai";
import { Story, Passage } from "twine-utils";
import { compileStoryToHTML } from "../utils/storyCompiler";
import { createStoryGraph, StoryGraphState } from "../utils/graph";

const RequestBodySchema = z.object({
  prompt: z.string().min(1),
  theme: z.string().min(1),
  streamId: z.string().optional(),
});


const STREAM_KEEP_ALIVE_INTERVAL_MS = 15_000;
type SSEClient = H3Event["node"]["res"];
const STREAM_CLIENTS = new Map<string, Set<SSEClient>>();

const registerStreamClient = (streamId: string, res: SSEClient) => {
  const clients = STREAM_CLIENTS.get(streamId) ?? new Set<SSEClient>();
  clients.add(res);
  STREAM_CLIENTS.set(streamId, clients);
  console.log("[generatev3] SSE client registered", streamId, clients.size);
};

const unregisterStreamClient = (streamId: string, res: SSEClient) => {
  const clients = STREAM_CLIENTS.get(streamId);
  if (!clients) {
    return;
  }
  clients.delete(res);
  if (clients.size === 0) {
    STREAM_CLIENTS.delete(streamId);
  }
  console.log("[generatev3] SSE client unregistered", streamId, clients.size);
};

const publishStreamEvent = (streamId: string, payload: unknown) => {
  const clients = STREAM_CLIENTS.get(streamId);
  if (!clients || clients.size === 0) {
    return;
  }
  console.log("[generatev3] streaming", JSON.stringify(payload));
  const data = `event: graph\ndata: ${JSON.stringify(payload)}\n\n`;
  for (const client of [...clients]) {
    if (client.writableEnded || client.destroyed) {
      unregisterStreamClient(streamId, client);
      continue;
    }
    try {
      client.write(data);
    } catch (error) {
      unregisterStreamClient(streamId, client);
    }
  }
};

const streamGraphMessages = (
  state: typeof StoryGraphState.State,
  nodeName: string,
  messages: string[],
) => {
  if (messages.length === 0) {
    return;
  }
  messages.forEach((message) => {
    console.log("[generatev3]", nodeName, message);
  });
  if (!state.streamId) {
    return;
  }
  publishStreamEvent(state.streamId, {
    node: nodeName,
    messages,
    timestamp: new Date().toISOString(),
  });
};

const handleStreamConnection = (event: H3Event) => {
  const query = getQuery(event);
  const streamId = typeof query.streamId === "string" && query.streamId.trim()
    ? query.streamId.trim()
    : undefined;
  if (!streamId) {
    event.node.res.statusCode = 400;
    event.node.res.end(JSON.stringify({ error: "Missing streamId query parameter" }));
    return;
  }

  const res = event.node.res;
  console.log("[generatev3] SSE connection opened", streamId);
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("X-Accel-Buffering", "no");
  res.write(":connected\n\n");

  registerStreamClient(streamId, res);
  const keepAlive = setInterval(() => {
    if (!res.writableEnded && !res.destroyed) {
      res.write(":keepalive\n\n");
    }
  }, STREAM_KEEP_ALIVE_INTERVAL_MS);

  const cleanup = () => {
    clearInterval(keepAlive);
    unregisterStreamClient(streamId, res);
    if (!res.writableEnded && !res.destroyed) {
      res.end();
    }
  };

  res.once("close", cleanup);
  res.once("finish", cleanup);
  return new Promise<void>(() => {
    /* keep the connection open */
  });
};

export default defineEventHandler(async (event) => {
  if (event.node.req.method === "GET") {
    return handleStreamConnection(event);
  }
  console.log("Received request to /generatev3");
  const result = await readValidatedBody(event, RequestBodySchema.safeParse);
  if (!result.success) {
    throw result.error;
  }
  const body = result.data;
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  const client = new OpenAI({
    apiKey,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
  });

  const graph = createStoryGraph(client, { onNodeMessages: streamGraphMessages });
  const graphState = await graph.invoke({
    prompt: body.prompt,
    theme: body.theme,
    streamId: body.streamId,
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
