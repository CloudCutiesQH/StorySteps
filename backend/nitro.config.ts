import { defineNitroConfig } from "nitropack/config"

// https://nitro.build/config
export default defineNitroConfig({
  compatibilityDate: "latest",
  srcDir: "server",
  imports: false,
  runtimeConfig: { //https://nitro.build/guide/configuration
    geminiApiKey: "not-a-token",
  }
});
