// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom domain (kirpik.app) serves from root, so no `base` needed.
export default defineConfig({
  site: 'https://kirpik.app',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
