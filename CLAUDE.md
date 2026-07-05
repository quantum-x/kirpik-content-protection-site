# Kirpik marketing site (kirpik.app)

SEO/agent-optimised static marketing site for Kirpik, a Shopify app that invisibly watermarks TEXT content (product descriptions, blog articles, pages) so stolen copy can be detected and "Chain of Proof" ownership certificates issued. Sibling site to tilkie.app (image protection, same developer INFOWISE LIMITED), same stack, deliberately distinct design and 100% original content.

Local working notes live in `docs/` (gitignored, see Security below): `docs/PLAN.md` is the approved build plan, `docs/research/` holds verified product facts, the Tilkie site blueprint, and the 90-app competitor database. Read `docs/research/kirpik-app-facts.md` before writing any product claim.

## Deployment state (2026-07-05)

Live at https://kirpik.app via GitHub Pages (repo quantum-x/kirpik-content-protection-site, workflow deploy) behind Cloudflare (proxied, Full SSL). The `kirpik-agent-edge` Worker is deployed on route `kirpik.app/*` (Link headers + markdown negotiation; deploy manually with `wrangler deploy` from `worker/`).

KNOWN GOTCHA 2: re-running a failed "Deploy to GitHub Pages" run usually fails again with "Deployment failed, try again later" (consumed deployment token). Push a fresh commit (git commit --allow-empty) instead of gh run rerun.

KNOWN GOTCHA: Pages deployments FAIL with "Deployment failed, try again later" while the custom domain is attached but kirpik.app is not a verified/approved domain for the quantum-x org (tilkie.app is verified, kirpik.app was pending as of 2026-07-05). If deploys fail, check org Settings > Verified and approved domains. Do not remove the custom domain as a workaround for long: while it is detached, kirpik.app serves 404.

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

## STYLEGUIDE.md is the canonical content standard

**Read STYLEGUIDE.md before writing or reviewing ANY page, article, headline, CTA or design element.** It is binding and exhaustive: the content-pyramid method, voice rules with rejected-example calibration, the fixed CTA registry (including the mandatory standard closing band), terminology, structure and design rules, claims discipline, comparison-page law, the four-agent review process, the pre-ship checklist, and the locked-pages registry. The sections below are the historical summary; where they and STYLEGUIDE.md differ, STYLEGUIDE.md wins. When the owner hands down a correction, update STYLEGUIDE.md in the same commit.

## Editorial voice v2 (locked 2026-07-05, supersedes anything looser)

Style guide: The Economist. Smart, limpid, objective, laser-focused. Every word must earn its place. Before writing any page: define the content pyramid (most important message first, each row supported by the next) and the page goal; write to it. The site's purpose: INFORM merchants who are worried about content theft so they conclude Kirpik is the only app providing real protection and enforcement.

Hard rules learned from owner review (violations were rejected wholesale):
- NO decorative micro-labels/eyebrows/bylines ("The problem", "Two minute tour", "Free plan available · ..."). If a line matters it becomes a real heading or body copy; otherwise it does not exist.
- NO inserted aside/note/blockquote boxes of secondary commentary. Fold hard facts into body prose or drop them.
- Headlines: short, concrete, answer a question the reader has or should have ("Is your store's content protected?"). Never metaphor ("shake off the proof"), never invented cleverness ("zero storefront weight" -> say "No speed impact"), never oddly specific colour ("four seconds", "Photoshop", "clipboard").
- CTAs: "Install now for free" / "Protect your content" register. Never "Add to Shopify" (jargon: merchants do not "add things to Shopify").
- Design serves content: no stat tiles, pill/label confetti, or fiddly small elements that carry no information. Favour removal over redesign.
- Comparison pages: NEVER link out to competitor app listings (no free SEO for them). Every app mentioned on the site must have its own comparison page, or must not be mentioned. Order lists by popularity (review count); visually highlight the 27 most popular.
- Site check: no paste-a-text tool (prospects only ever get a negative). Verdict banner carries "Protect your content now" CTA; product cards say "N words · No watermark · Unprotected" and a green "Protect now" install button; no image ZIP download.
- Standing review panel for all content changes: (1) Economist editor agent, (2) worried-merchant reader agent, (3) value-pyramid agent, (4) human UI/UX anti-AI-design agent. Run them and resolve findings before shipping.
- Page headlines and section headings are proposed to the owner page by page and iterated before body rewrite. Owner-approved lines are not re-litigated.

## Editorial voice (original rules, still binding where not superseded)

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

"watermark", "invisible text watermark", "Protect/Protection/Protected", "Auto-Protect", "Detect/Detection", "watermark code", "Protection Signature", "Watermark Security Markers", "Confidence", "product description", "blog article", "page", "DMCA takedown".

Certificate naming (owner decision 2026-07-05): the primary term in ALL site prose is "Proof of Ownership Certificate". "Chain of Proof" appears only as the document's printed title (in imagery) and inside verbatim competitor-listing quotes (Tilkie's). URL slugs keep chain-of-proof where they already exist.
