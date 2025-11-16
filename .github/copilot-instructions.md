**Purpose**
- **Goal**: Help AI coding agents become productive quickly in StorySteps by describing architecture, workflows, patterns, and important files to consult.

**Quick Architecture**
- **Backend:** `backend/` is a Nitro-based Node server (see `backend/nitro.config.ts`) with `srcDir: "server"` — server code lives under `backend/server/`.
- **Routes:** Server routes use Nitro + `h3` handlers. Example entrypoint: `backend/server/routes/generate.post.ts` — follow this file to understand request validation, LLM interactions, and Twine/Twee conversion.
- **LLM integrations:** Project uses `openai` (and `@google/genai` is installed) and targets Gemini-style models via the `OpenAI` client. Calls are made through `openai.chat.completions.create` with model names like `gemini-2.0-flash` and `gemini-2.5-pro`.

**Local dev & scripts**
- **Run dev server:** from `backend/` use `pnpm run dev` (maps to `nitro dev` in `backend/package.json`).
- **Build / Preview:** `pnpm run build` -> `nitro build`; `pnpm run preview` -> `node .output/server/index.mjs`.
- **Env vars:** `generate.post.ts` depends on runtime environment variable `GEMINIKEY` (used as `process.env.GEMINIKEY`). Ensure it is set before running dev or preview.

**Key files to read first**
- `backend/server/routes/generate.post.ts` — main LLM orchestration flow: prompt refinement, outline generation (`backend/prompts.ts`), story generation, Twee conversion.
- `backend/prompts.ts` — central prompt templates (e.g., `outlinePrompt`) used by routes.
- `backend/package.json` — scripts and declared deps (`openai`, `@google/genai`).
- `backend/nitro.config.ts` — Nitro config, `srcDir` and runtimeConfig entries (contains `geminiApiKey` placeholder).

**Patterns & Conventions (project-specific)**
- **Validation:** routes use `h3` + `readValidatedBody` with `zod` schemas (see `RequestBodySchema` in `generate.post.ts`). Follow this pattern for new endpoints.
- **LLM calls:** prefer `openai.chat.completions.create` style calls with explicit `messages` arrays. System messages contain role-specific instructions (prompts are strictly formatted to return only the required artifact).
- **Prompt separation:** keep prompt templates in `backend/prompts.ts` (reusable templates). When editing prompts, keep responses constrained (e.g., “Only respond with the prompt” or “Return only a Twine-formatted story”).
- **Twee/Twine output:** final LLM output is expected to be Twine/SugarCube-compatible Twee text (passage headers `:: Passage Name`, links `[[Text|Target]]`). Ensure transformations preserve that format.

**Editing guidance / PR hints**
- Keep TypeScript + Nitro conventions: use `defineEventHandler`, `readValidatedBody`, and `zod` schema validation for new routes.
- When changing LLM behavior, edit `backend/prompts.ts` first and keep small, testable prompt changes. Use `console.log` outputs in the route (present in `generate.post.ts`) to inspect intermediary LLM responses when debugging.
- Do not hardcode API keys in source; use environment variables (`GEMINIKEY`) or Nitro `runtimeConfig` for non-sensitive defaults.

**How to exercise `generate` during dev**
- POST to the route implemented in `generate.post.ts` with JSON body:

```json
{ "prompt": "Write a short lesson…", "theme": "water cycle" }
```

- Use `curl` or a small HTTP client while `pnpm run dev` is running. Watch console logs for `refined prompt..` and `story resp..` lines.

**Dependencies & external integration notes**
- The code uses `openai` package but configures `baseURL` to a Google Generative Language endpoint. Verify the runtime `GEMINIKEY` value and model names when switching providers.
- Installed deps: see `backend/package.json` — changing model clients or SDKs should update this file and `import` sites.

**What NOT to change without checking**
- `generate.post.ts` message sequences and system prompt wording — small changes can drastically change LLM output format. When adjusting prompts, keep a clear test prompt and validate final Twee output.
- Nitro `srcDir` in `nitro.config.ts` — moving server files requires updating this config.

**If you need more context**
- Check `backend/README.md` for Nitro starter notes. For LLM behavior, open `backend/server/routes/generate.post.ts` and `backend/prompts.ts` to see examples of required outputs (prompt refinement, outline, then Twee conversion).

If anything here is unclear or you'd like more examples (sample requests, expected twee output, or a postman collection), tell me which part to expand.
