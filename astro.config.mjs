import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'http://gohector.com',
  integrations: [sitemap(), robotsTxt(), tailwind()]
});