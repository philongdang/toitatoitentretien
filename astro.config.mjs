// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Canonical production URL — drives sitemap, canonical tags, OG, and schema.
// `GHPAGES=true` builds for the GitHub Pages project-site demo (sub-path);
// the default build targets the production apex domain at the root.
const ghpages = process.env.GHPAGES === 'true';
const SITE = ghpages ? 'https://philongdang.github.io' : 'https://toitatoitentretien.ca';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: ghpages ? '/toitatoitentretien' : undefined,
  // French is canonical at `/`; English is mirrored under `/en/`.
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-CA', en: 'en-CA' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
