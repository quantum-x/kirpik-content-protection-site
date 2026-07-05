# Kirpik site style guide

This document is binding for every page, article, component and review on kirpik.app. It encodes the owner's editorial standard, established by hand across the front page, /compare/, /site-check/ and /how-it-works/. When this guide and an agent's instinct disagree, this guide wins. When this guide and the owner's explicit copy disagree, the owner wins. Security and deployment rules live in CLAUDE.md; nothing here overrides its NON-DISCLOSURE section.

## 1. The method: no copy without a plan

Copy written without a plan gets rejected wholesale. Before writing or rewriting any page:

1. **State the page goal.** One sentence. The site's overall purpose: inform merchants who are worried about content theft, so they conclude Kirpik is the only app providing real protection and enforcement. Each page serves a specific slice of that (e.g. /compare/: "the reader concludes Kirpik is the only choice for text content protection").
2. **Build the content pyramid.** The most important message first; each row supported by the next. The front page's approved pyramid: (1) Kirpik protects your brand by protecting your text content; (2) the protection is invisible and lets you track stolen content; (3) the watermark survives copying, pasting, editing, resaving; (4) Kirpik enables enforcement by providing proof of infringement.
3. **Map sections to pyramid rows.** Every section serves a row. A section that serves no row gets cut, however nice it looks. Weighting follows priority: the top of the pyramid gets the space.
4. **Propose headlines and section headings to the owner first**, iterate until approved, then write the body. Owner-approved lines are never re-litigated by any reviewer.

The reader is a Shopify merchant who is worried about content theft. Not a developer, not a lawyer. They know "SEO", "app" and "theme". They do not know JSON, feeds, scripts, crawling, clipboards, fingerprints or hosts. Every sentence is written for them.

## 2. Voice

Style guide: The Economist. Smart, limpid, objective, laser-focused. Every word earns its place. Say what you mean; never invent a clever rewrite of a plain fact.

**Banned outright:**
- Em-dashes and en-dashes, everywhere, including code comments and frontmatter. Use commas, colons, full stops. (The owner may use a spaced hyphen " - " in copy they author; do not introduce it yourself.)
- AI-tell constructions: "In today's...", "It's not just X, it's Y", rule-of-three adjective stacks ("dated, fingerprinted and independently verifiable" was rejected), rhetorical-question openers, listicle voice, bolded keyword spam, summary boxes.
- Metaphor and image-play in headlines or claims: "shake off the proof", "cheapest theft on the internet", "your words will travel", "zero storefront weight" were all rejected. If you mean "No speed impact", write "No speed impact".
- Oddly specific colour that draws attention to itself: "four seconds", "a clipboard", "Photoshop", "ten minutes after rain".
- Verbatim tics stamped across pages ("The plain answer: no." on 83 pages), the clever-comma flourish ("All questions, answered"), see/sees wordplay repeated.
- Fabricated anything: statistics, adoption claims ("plenty of stores run both"), popularity labels ("Most popular" for an unreleased app), testimonials, named victims. If a figure cannot be verified, it does not appear.
- Hedging filler ("also available at", "around 17%" when the figure is exactly 17%), empty urgency ("today"), grandiosity, arrogance.

**Required:**
- Short declarative sentences. One idea per sentence. If a sentence needs two passes to parse, rewrite it.
- Plain nouns for the merchant: "the company that hosts the thief's site" not "the host" (unexplained); "search removal" not "search deindexing"; "new content" not "new saves".
- British-leaning spelling: catalogue, behaviour, organised.
- Honesty stated once, plainly, where it matters, then dropped. Do not build shrines to limitations ("What Kirpik does not claim" was rejected as a section: pointless negative space). Fold necessary boundaries into the section where they operate, as one sentence or one bullet.
- Footnote-grade facts (the 20-word minimum, rate-limit numbers, plan-tier feature ladders) live in the technical FAQ or the pricing page, never in a page's first viewport, never as bullets inside a hero-adjacent step.

## 3. Headlines and section headings

A headline is short, concrete, and answers a question the reader has or should have. It is never open to interpretation and never requires a second pass.

Approved patterns, from the locked pages:
- Question that the page answers: **"Is your store's content protected?"**
- Plain naming of the thing: **"Kirpik vs other anti-theft apps"**, **"Protect your text. Protect your brand."**
- Action triad: **"Protect content. Prove infringement. Enforce your rights."** / **"Protect, prove, enforce: how Kirpik works."**
- Direct factual statement: **"Kirpik does not modify your content, slow down your site or affect SEO."**, **"Nothing changes for you or your customers."**, **"Your content is protected; your site's performance is untouched."**, **"Kirpik's watermark algorithm is resilient:"**, **"Shopify exposes direct feeds of your products, blogs and pages."**

Rejected examples and why (keep these as calibration):
| Rejected | Fault |
|---|---|
| "Anyone can copy your words. Nobody can shake off the proof inside them." | Metaphor, ambiguous referents ("words", "shake", "proof inside what?") |
| "Copying text is the cheapest theft on the internet." | Grandiose, adds nothing a worried merchant needs |
| "Your product copy is sitting in a public feed right now." | Means nothing to non-technical users, little to technical ones |
| "Kirpik and the Shopify anti-theft category, compared" | Verbose, weird syntax, needs several passes |
| "What changes on your store? Nothing you can point at." | Coy; say the fact instead |
| "Three steps from plain text to provable ownership." | Abstract noun pile |
| "No tricks. We asked your store, and it answered." | Clever-clever; personifies a website |

Section micro-labels are dead: no eyebrows, no "Step 01", no "The problem"/"Two minute tour" cobwebs, no mono bylines under buttons ("Free plan available · ..."). If a line carries information it becomes a real heading or body copy; otherwise it does not exist. Exception (owner-accepted): the site-check tool's privacy line ("Runs in your browser · We never see your store or its data · No login"), set at readable size.

Heading case: Title Case for keywords in titles and headings ("Prove Infringement", "Proof of Ownership Certificate", "Enforcement Guide"); surrounding non-keyword words stay in sentence case. Owner-authored headings keep their exact casing and punctuation.

## 4. CTAs (fixed registry, do not improvise)

| Location | Exact string |
|---|---|
| Nav and footer button | **Install free** |
| Primary buttons and closing bands | **Install now for free** |
| Site-check verdict banner | **Protect your content now** |
| Site-check / band forms | **Check my store** |
| Per-item protect buttons (site check) | **Protect now** |

Closing band: every page ends with the standard `<CtaBand />` using its defaults, verbatim:
- Heading: **"Protect your content."**
- Sub: **"Kirpik protects your text content, certifies infringement and enables enforcement. Stop paying for fake protection. Install Kirpik for free."**
- Button: **"Install now for free"**

Custom band copy requires explicit owner approval for that specific page. Inventing a new closing line ("Protect first. Everything else depends on it.") is a violation even if it sounds good; this exact failure happened and was rejected.

Never "Add to Shopify" (merchants do not "add things to Shopify"). Never a CTA whose object is unclear ("Put invisible proof in your product copy" was rejected: proof of what? why?).

## 5. Terminology (fixed registry)

- **Proof of Ownership Certificate** is the certificate's name in ALL prose. "Chain of Proof" appears only as the document's printed title in imagery and inside verbatim competitor-listing quotes (Tilkie's). Existing URL slugs containing chain-of-proof stay.
- App vocabulary, matched to the product UI: "watermark", "invisible text watermark", "Protect / Protection / Protected", "Auto-Protect", "Detect / Detection", "watermark code", "Protection Signature", "Watermark Security Markers", "Confidence", "product description", "blog article", "page", "DMCA takedown".
- Approved description of the mechanism (the ONLY one, see CLAUDE.md non-disclosure): "algorithmic invisible watermark derived from your original text signature" / "invisible markers". Never anything more specific, and never crypto vocabulary (no "encrypted", "cryptographic", "HMAC", "blockchain", "notarised").
- **The noun "copy" is banned** (owner ruling: confusing). The merchant's material is "content" or "text", never "copy" ("product copy", "your copy", "stolen copy" are all violations). A duplicate is "the stolen content", "the infringing version" or "a duplicate". The verb remains allowed where unavoidable ("copy and paste", "copied", the "Copy text" button), but prefer constructions that do not need it. "Words" only in owner-approved lines.
- Enforcement actors, in the owner's register: "eCommerce Platforms, Search Engines, Hosting Providers and Domain Registrars". In explanatory prose, plain forms: "the company that hosts the thief's site", "the marketplace carrying the listing".
- Prices: Free $0 / Paid $7.99 per month / Pro $19.99 per month or $199 per year (17% less). USD. Certificates: 1 lifetime on Free, 5 a month on Paid, unlimited on Pro.

## 6. Page structure

- Section pattern: one real heading, one short lead, then either bullets (3-5, factual, parallel) or one short supporting paragraph. Never lead + long paragraph + another paragraph + bullets: the three-tier font soup was rejected.
- One font rhythm per page: headings, lead, body/bullets. No sub-scale mono stragglers.
- Do not interleave reassurance blocks between numbered steps. If a page says "three steps", the three steps are contiguous.
- The dark ink section pattern (established on the front page and how-it-works): full-width `section--ink`, heading + lead on the left, 4-6 item check-list on the right. Use it for the page's single consolidated reassurance or resilience statement.
- Plan-tier mechanics belong on /pricing/. A step or feature section may say "on every plan" or "automatically on Pro" in passing; it may not carry quota ladders ("5, 20 or 100 a month by plan" was rejected in a step).
- Boundaries the reader must know (protect-before-theft) are stated where they operate, once. Details of interest only to evaluators (20-word minimum) go to the FAQ.
- Every page ends with the standard CtaBand (section 4).

## 7. Design rules

Design serves the content, never the other way around. Palette, fonts and tokens are locked in `src/styles/global.css` (indigo ink #181c2f, orange #d96438, amber #dd9f4a, Manrope + IBM Plex Mono).

Banned (all rejected in review):
- Stat tiles, pill/label confetti, tag chips that carry no information, decorative gradients, corner-bracket/scan-line theatrics, fake-precision readouts (invented hashes, invented marker counts).
- Skeleton-bar mockups. A mockup may exist only if it shows real information with plausible real example data (real product names, a real detection flow). The approved demo dataset: "Copper Pour-Over Carafe", "Juniper & Cedar Soy Candle", "Washed Linen Apron", "Walnut Serving Board"; suspect domain "bargainreef-example.shop"; owner "your-store.myshopify.com"; confidence 100.0% (authentic to the product; do not fake modesty).
- Over-carding: three short paragraphs do not need three shadowed cards; use plain columns. Cards are for genuinely grouped, repeated units (plans, products, comparisons).
- Elements too small to read at arm's length. Trust-bearing lines get readable body sizes.
- Full-section placeholders for content that does not exist yet (the "video coming soon" box was cut; reinstate the section only when the video exists).

Required:
- Tables: plain, generous type, one clear verdict per cell ("Yes" / "No" / "Images only"), no na/unstated legends, no cells that need a footnote to parse. Verdict columns are phrased as plain outcomes ("True protection", "Proof & enforcement"), never as mechanism descriptions ("Does anything for text content" was rejected as meaning nothing).
- Header blocks span the same container width as the rest of the page.
- Mobile: no wrapped pills, no clipped readouts, art lands between text blocks sensibly. Check both viewports before shipping.
- Interactive elements (site-check) are the crown jewels: lean on them, keep them fast, and attach the CTA to the moment of realisation (the verdict banner carries "Protect your content now").

## 8. Claims and accuracy

The full truthful-claims register is in CLAUDE.md; the review-tested essentials:

- Kirpik does NOT prevent copying and never claims to. Nothing does; feeds are public by design. Kirpik's difference is proof.
- Never promise third-party behaviour: "evidence a host **can** act on", never "**will** act on". A certificate "lays out the case"; it does not "convince everyone".
- The merchant performs actions: "you can issue a certificate", never "Kirpik issues" where the merchant clicks. No automated web monitoring exists; do not imply it ("finds it when it surfaces" was rejected; "detects it on any site you check" is the pattern).
- Watermark survives: copy-paste, scraping, feed export, trimming, editing, reformatting, re-saving, reposting. It does not survive a full rewrite; "reworded" is allowed only as "lightly reworded"/"edited". Protection covers content from protection onward; pre-theft copies cannot be detected (state this plainly where relevant, e.g. the FAQ; do not bury it, do not shrine it).
- Content types: products, blog articles, pages. Never collections.

## 9. Comparison content (all 83 detail pages and the hub)

- Every factual statement about a competitor comes from its own public App Store listing, quoted or closely paraphrased, dated ("per its public Shopify App Store listing, July 2026").
- Limitations are properties of browsers and platforms, never accusations ("Browsers do not expose any API that lets a page prevent screenshots"). No opinion adjectives about any competitor, including favourable candour-ranking ("the category's clearest disclosure" was rejected).
- Never contradict a competitor's own claims in our voice. Where a listing claims evidence or provenance (Mintall Keep, Spy Blocker monitor), attribute it ("Yes, per its listing") and scope it honestly in prose (provenance metadata travels beside content and is stripped when text is copied; match reports show similarity, not authorship).
- NEVER link to a competitor's listing or site. Every app mentioned anywhere on the site has its own /compare/ page, or is not mentioned. Off-category apps are excluded entirely.
- Ordering by review count; the 27 most-reviewed subtly shaded, with a one-line caption saying so. Kirpik appears as the pinned first row with Yes/Yes.
- Tilkie: same-developer disclosure box, complementary framing ("designed to run side by side"), no fabricated adoption claims.
- Method + trademark + not-legal-advice note on the hub and on every detail page.
- Each detail page answers, in order: **"What X Claims"** (their listing, verbatim); **"Does it prevent content theft?"**; **"Can it prove infringement?"**; **"X vs Kirpik"** verdict rows; site-check band. The two question sections open with the answer in bold immediately (**No.** for nearly all), then at most two sentences of relevant summary; out-of-scope capability is stated as out of scope, not analysed. After the No: Kirpik's own position, exactly framed as "Kirpik does not claim to prevent content theft: it **protects** content", plus the no-conflict fact once ("Kirpik adds no scripts to your storefront, so it runs alongside any blocker without conflict").
- **No blocker gets a pass, ever.** Right-click and copy scripts do not prevent right-clicks: reader mode, the page source or switching JavaScript off bypasses them in seconds, and browsers keep those controls with the user. Never write that their deterrence is "real", "a real thing" or "friction that works"; their own candid quotes may be cited, followed by the bypass facts. In verdict tables the blocker's right-click cell reads "Easily bypassed", never "Yes".
- Kirpik's cells for capabilities it does not attempt (stopping right-clicks, stopping scraping) show "-", not "No": out of scope, not a failure.

## 10. Review process (mandatory before shipping any content change)

1. Content plan (goal + pyramid + section map) precedes prose.
2. Headlines and section headings proposed to the owner; iterate; owner-approved lines are locked.
3. Body written to this guide.
4. Four-agent panel, every time, before ship:
   - **Economist editor**: line-by-line prose discipline (each finding: quote, fault, shorter replacement).
   - **Worried merchant**: non-technical Shopify merchant who found a clone store; reports comprehension breaks, irrelevance, trust breaks, unanswered questions.
   - **Value pyramid**: section-by-level mapping, weighting, orphan sections, whether the close cashes in.
   - **Human UI/UX**: hostile to AI design tells; favours removal; checks both viewports at full resolution.
5. Apply findings. Findings that touch owner-approved lines are flagged to the owner, not applied.
6. Mechanical pre-ship checks: build passes; grep for em/en dashes (0 in src prose); grep for mechanism terms per CLAUDE.md (0); grep "guarantee|Most popular|prevents? copy" for claim drift; CTA strings match section 4 exactly (especially the closing band); no outbound competitor links; screenshots at 1440 and 390 widths reviewed by eye.
7. Deploy, verify live.

## 11. Locked pages and lines (do not re-litigate)

- **Front page**: H1 "Protect your text. Protect your brand."; hero lead (Proof of Ownership Certificates / DMCA sentence); site-check band heading + sub; "Protect content. Prove infringement. Enforce your rights." + card titles; "Nothing changes for you or your customers."; "Kirpik's watermark algorithm is resilient:" + its body; "Prove infringement and enforce your rights."; "Start free."; "Common questions"; closing band (section 4).
- **/compare/**: H1 "Kirpik vs other anti-theft apps"; the three intro paragraphs (with the customers/search-engines/AI-tools feeds sentence); table columns "True protection" / "Proof & enforcement"; popularity ordering.
- **/site-check/**: H1 "Is your store's content protected?"; lead (descriptions, blog posts and pages); "Shopify exposes direct feeds of your products, blogs and pages."; verdict "None of your content is protected"; products/blog posts/pages sections; no paste-a-text tool, ever.
- **/how-it-works/**: H1 "Protect, prove, enforce: how Kirpik works."; steps "Protect your text" / "Prove Infringement" / "Enforce your rights" with owner-authored leads; dark section heading + body verbatim; standard closing band.

When the owner hands down a correction, add it to this guide in the same commit.
