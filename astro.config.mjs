import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import { fileURLToPath } from "node:url";

// https://docs.astro.build/config
export default defineConfig({
  integrations: [UnoCSS()],
  srcDir: "src",
  build: {
    format: "directory"
  },
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "@styles": fileURLToPath(new URL("./src/styles", import.meta.url))
      }
    }
  }
});
