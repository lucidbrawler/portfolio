import { defineConfig } from "astro/config";

// Static site — Netlify publishes dist/ after `npm run build`
export default defineConfig({
  output: "static",
  site: "https://lucidbrawler.github.io",
  build: {
    format: "directory",
  },
});
