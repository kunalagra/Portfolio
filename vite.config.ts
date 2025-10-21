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
        // Pre-rendering enabled for SEO with proper SSR
        enabled: true,

        // Enable if you need pages to be at `/page/index.html` instead of `/page.html`
        autoSubfolderIndex: true,

        // How many prerender jobs to run at once
        concurrency: 14,

        // Whether to extract links from the HTML and prerender them also
        crawlLinks: true,

        // Number of times to retry a failed prerender job
        retryCount: 2,

        // Delay between retries in milliseconds
        retryDelay: 1000,

        // Callback when page is successfully rendered
        onSuccess: ({ page }) => {
          console.log(`Rendered ${page.path}!`);
        },
      },
    }),
    nitro(),
    viteReact(),
  ],
});
