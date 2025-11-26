import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackRouter({
      autoCodeSplitting: true,
    }),
    tanstackStart({
      srcDirectory: "src",
      sitemap: {
        enabled: true,
        host: "https://kunalagrawal.com/",
      },
      prerender: {
        // Pre-rendering is disabled because it's incompatible with the Nitro Vite plugin.
        // The Nitro plugin's configurePreviewServer hook requires build artifacts that don't
        // exist yet during the prerender phase, causing the Vite preview server to fail.
        // SSR is still enabled for SEO benefits.
        enabled: false,
      },
    }),
    nitro(),
    viteReact(),
  ],
});
