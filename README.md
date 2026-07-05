# kirpik.app

Marketing and education site for [Kirpik](https://apps.shopify.com/kirpik-content-protection), a Shopify app that invisibly watermarks store text (product descriptions, blog articles and pages), detects stolen copies, and issues Chain of Proof ownership certificates for DMCA takedowns. Built by INFOWISE LIMITED, the developer of [tilkie.app](https://tilkie.app) (image protection).

## Stack

Astro 5, fully static. No UI framework, no Tailwind. Hand-written CSS with design tokens in `src/styles/global.css`. Manrope Variable and IBM Plex Mono via Fontsource.

## Editing

- Articles: markdown in `src/content/articles/` (schema in `src/content.config.ts`). Each article also ships a plain markdown mirror at `/learn/<slug>.md`.
- Page copy: the `.astro` files in `src/pages/`.
- Site constants and nav: `src/config.ts`.
- Features, plans, FAQ and the article roadmap: `src/data.ts`.
- Comparison database: `src/compare-data.ts`.

## Commands

- `npm run dev` starts the dev server
- `npm run build` builds to `dist/`
- `npm run preview` serves the build
- `node scripts/gen-og.mjs` regenerates the branded OG cards in `public/og/` (Playwright)
- `node scripts/gen-icons.mjs` regenerates favicons and the web manifest (sharp)
- `node scripts/shoot.mjs` takes page screenshots for review

## Deploy

Push to `main`. GitHub Actions builds the site and publishes it to GitHub Pages; `public/CNAME` pins the custom domain `kirpik.app`. Cloudflare fronts the apex, and the `worker/` directory holds the kirpik-agent-edge Worker (Link headers and markdown content negotiation for AI agents). The Worker is deployed manually with `wrangler deploy` from `worker/`.
