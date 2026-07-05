# Kirpik marketing site (kirpik.app)

SEO/agent-optimised static marketing site for Kirpik, a Shopify app that invisibly watermarks TEXT content (product descriptions, blog articles, pages) so stolen copy can be detected and "Chain of Proof" ownership certificates issued. Sibling site to tilkie.app (image protection, same developer INFOWISE LIMITED), same stack, deliberately distinct design and 100% original content.

Local working notes live in `docs/` (gitignored, see Security below): `docs/PLAN.md` is the approved build plan, `docs/research/` holds verified product facts, the Tilkie site blueprint, and the 90-app competitor database. Read `docs/research/kirpik-app-facts.md` before writing any product claim.

## Commands

- `npm run dev` — Astro dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the build
- `node scripts/gen-og.mjs` — regenerate branded OG cards (Playwright)
- `node scripts/gen-icons.mjs` — regenerate favicons/manifest (sharp)
- Deploy: push to `main` -> GitHub Actions -> GitHub Pages. Cloudflare fronts the apex; the `worker/` agent-edge Worker is deployed manually with `wrangler deploy` from `worker/`.

## Architecture

Astro 5 static site, no UI framework, no Tailwind. Hand-written CSS with design tokens in `src/styles/global.css`. Site constants and nav in `src/config.ts`. Page-level datasets (features, plans, FAQ, article roadmap) in `src/data.ts`. Comparison database in `src/compare-data.ts`. Articles are markdown in `src/content/articles/` (collection schema in `src/content.config.ts`); each article also gets a `.md` mirror route. JSON-LD is emitted from `src/layouts/Base.astro` (Organization, WebSite, BreadcrumbList) plus per-page schemas.

## SECURITY / NON-DISCLOSURE (critical, user-mandated)

**Never reveal how the watermark works.** Not in prose, code comments, commit messages, alt text, or metadata. Forbidden anywhere in the public repo or site: mention of whitespace/space characters as the carrier, Unicode codepoints, "steganography" applied to Kirpik specifically, or anything that tells a reader what to normalize to strip the mark. The mark is strippable by someone who knows what to look for; thieves currently do not.

- Approved public phrasing: "algorithmic invisible watermark derived from your original text signature", "invisible markers", "invisible digital watermark".
- The homepage X-ray demo highlights DECOY marker positions (letters, word boundaries), never real carrier positions.
- The site-check detector (`src/pages/site-check.astro`) necessarily contains a real detection routine: keep it compact, hex-escaped, uncommented, and never explain it in prose.
- Discussing OTHER techniques (zero-width characters, homoglyphs, C2PA metadata, visible watermarks, JS blockers) by name is fine and useful; Kirpik is never described as any of them.
- `docs/` is gitignored because the research notes contain the mechanism. Keep it that way. The repo is public.

## Truthful-claims register

Always accurate to the product (verified against the app codebase):
- Protects products, blog articles, pages. NOT collections.
- Adds zero scripts/embeds/tags to the storefront; zero effect on page speed.
- Does NOT change the merchant's text, does NOT modify their copy, does NOT affect SEO. Stress this constantly.
- Watermark survives copy-paste, scraping, editing, partial deletion, reformatting, re-rendering.
- Detection: paste text or check a URL from the app (rate-limited per plan). No automated web monitoring exists; never claim scheduled scanning.
- Chain of Proof certificate: SHA-256 content fingerprints ("Protection Signature"), immutable protection snapshots, infringing page Last-Modified headers, Wayback Machine timeline corroboration, Watermark Security Markers count, Confidence %, QR-verified public verification page.
- Plans: Free $0 (25 products, 3 articles/pages, 5 URL checks/mo, 1 lifetime certificate) / Paid $7.99/mo (100 products, 50 articles/pages, batch protect, 20 URL checks, 5 certs/mo) / Pro $19.99/mo or $199/yr (unlimited, auto-protect, 100 URL checks, unlimited certs).
- CTA: https://apps.shopify.com/kirpik-content-protection (app under Shopify review as of 2026-07).

Forbidden claims: "cryptographically signed", "encrypted", "HMAC", "blockchain", "notarized", "guaranteed", "stops/prevents copying" (we prove theft, we do not prevent it), collection protection, automated monitoring, surviving "any" transformation.

## Editorial voice (locked)

Written by a smart, technical, approachable human expert. **No em-dashes, ever.** No AI tells: no "In today's digital landscape", no "It's not just X, it's Y", no rule-of-three adjective stacks, no grandiose statements, no excessive sub-headers or orphan text fragments. No fabricated reviews, testimonials, or statistics. "Strong track record", never "guaranteed". Concrete over abstract; name real threats (dropship cloners, copycat stores, scrapers). Recurring narrative: you cannot stop text from being copied, so make every copy traceable and provable. Comparisons are strictly neutral: quote competitor listings verbatim (dated 2026-07), frame limitations as general browser/platform behavior, include method + trademark + not-legal-advice notes on every comparison page.

Content must never overlap with tilkie.app phrasing or topics (SEO duplicate risk): different titles, angles, examples, and prose throughout.

## Design language (locked)

Same family as Tilkie, never copy-pasted. Tokens in `src/styles/global.css`:
- Paper base like Tilkie but cooler; dark anchor is deep navy/indigo `--ink #181c2f` (Tilkie uses warm brown) for dark sections, footer, HUD.
- Primary accent burnt orange `--orange #d96438` (logo quills); secondary amber `--amber #dd9f4a`; terracotta tertiary; mint green reserved solely for "Protected" verdicts.
- Fonts: Manrope Variable (display + body, 800 headings) + IBM Plex Mono (eyebrows, data labels, evidence HUD, always uppercase + letterspaced).
- Signature motif: hidden-markers-made-visible (glowing marker dots in text, dotted underlines). Signature homepage widget is the text X-ray slider with a mono evidence HUD (owner / markers / confidence, matching certificate terminology).
- Italic <em> in headings takes the orange accent.

## Terminology (must match the app UI)

"watermark", "invisible text watermark", "Protect/Protection/Protected", "Auto-Protect", "Detect/Detection", "watermark code", "Chain of Proof" (certificate), "Protection Signature", "Watermark Security Markers", "Confidence", "product description", "blog article", "page", "proof of ownership", "DMCA takedown".
