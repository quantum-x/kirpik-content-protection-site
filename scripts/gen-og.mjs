// Branded 1200x630 OG cards, rendered with Playwright.
// Card names match what src/layouts/Base.astro auto-derives from the URL:
//   /            -> /og/home.png
//   /pricing/    -> /og/pricing.png        (first path segment)
//   /learn/x/    -> /og/x.png              (leaf slug)
//   /compare/x/  -> /og/x.png              (leaf slug)
// Slugs come from src/data.ts (articles, features) and src/compare-data.ts
// (featured comparison apps). compare-data.ts may not exist yet; the script
// skips it quietly and can be re-run later to pick those cards up.
import { chromium } from "playwright";
import { readFileSync, existsSync, mkdirSync } from "node:fs";

const OUT = "public/og";
mkdirSync(OUT, { recursive: true });

// Inline brand font so rendering does not depend on the network.
const fontB64 = readFileSync(
  "node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2"
).toString("base64");
const glyphB64 = readFileSync("public/brand/kirpik-glyph.svg").toString("base64");
const glyphUri = `data:image/svg+xml;base64,${glyphB64}`;
const icon = (slug) => {
  const p = `public/compare-icons/${slug}.png`;
  return existsSync(p) ? `data:image/png;base64,${readFileSync(p).toString("base64")}` : null;
};

// ---- Slugs and titles from src/data.ts (single source of truth) ------------

const dataTs = readFileSync("src/data.ts", "utf8");

// Articles: cluster title + item title per slug.
const ARTICLES = {}; // slug -> [clusterTitle, articleTitle]
{
  const start = dataTs.indexOf("ARTICLE_CLUSTERS");
  const src = start >= 0 ? dataTs.slice(start) : "";
  let cluster = "Learn";
  const re = /title:\s*"((?:[^"\\]|\\.)*)"(?:,\s*slug:\s*"([^"]+)")?/g;
  for (const m of src.matchAll(re)) {
    const title = m[1].replace(/\\"/g, '"');
    if (m[2]) ARTICLES[m[2]] = [cluster, title];
    else cluster = title;
  }
}

// Features: title per slug (the tag field no longer exists; cards use a
// fixed "Kirpik" eyebrow).
const FEATURES = {}; // slug -> [eyebrow, title]
{
  const re = /slug:\s*"([^"]+)",\s*title:\s*"((?:[^"\\]|\\.)*)"/gs;
  for (const m of dataTs.matchAll(re)) {
    if (!ARTICLES[m[1]]) FEATURES[m[1]] = ["Kirpik", m[2]];
  }
}

if (Object.keys(ARTICLES).length < 20) throw new Error("gen-og: failed to parse articles from src/data.ts");
if (Object.keys(FEATURES).length < 6) throw new Error("gen-og: failed to parse features from src/data.ts");

// Featured comparison apps from src/compare-data.ts, if it exists yet.
const COMPARE = {}; // slug -> app name
if (existsSync("src/compare-data.ts")) {
  const src = readFileSync("src/compare-data.ts", "utf8");
  const re = /(?:slug:\s*"([^"]+)"[^{}]*?name:\s*"((?:[^"\\]|\\.)*)"|name:\s*"((?:[^"\\]|\\.)*)"[^{}]*?slug:\s*"([^"]+)")/gs;
  for (const m of src.matchAll(re)) {
    const slug = m[1] ?? m[4];
    const name = (m[2] ?? m[3])?.replace(/\\"/g, '"');
    if (slug && name && !slug.startsWith("vs-") && slug !== "techniques") COMPARE[slug] = name;
  }
  if (!Object.keys(COMPARE).length) console.warn("gen-og: src/compare-data.ts present but no slug/name pairs found");
} else {
  console.warn("gen-og: src/compare-data.ts not found yet; skipping per-app compare cards (re-run later)");
}

// ---- Card template ----------------------------------------------------------

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function html({ eyebrow, title, versus }) {
  const versusHtml = versus
    ? `<div class="versus">
         <span class="tile"><img src="${versus.left}"/></span>
         <span class="vs">vs</span>
         <span class="tile tile--us"><img src="${glyphUri}"/></span>
       </div>`
    : "";
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    @font-face{font-family:'Manrope';src:url(data:font/woff2;base64,${fontB64}) format('woff2');font-weight:200 800;font-display:block}
    *{margin:0;padding:0;box-sizing:border-box}
    body{width:1200px;height:630px;background:#faf9f6;font-family:'Manrope',sans-serif;color:#181c2f;position:relative;overflow:hidden}
    .pad{position:absolute;inset:0;padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between}
    .accent{position:absolute;left:0;top:0;bottom:0;width:14px;background:#d96438}
    .brand{display:flex;align-items:center;gap:16px}
    .brand img{width:64px;height:auto}
    .brand span{font-weight:800;font-size:30px;letter-spacing:-0.01em}
    .mid{flex:1;display:flex;flex-direction:column;justify-content:center;gap:26px}
    .eyebrow{font-family:ui-monospace,Menlo,monospace;text-transform:uppercase;letter-spacing:0.12em;font-size:21px;color:#d96438;font-weight:700;display:flex;align-items:center;gap:14px}
    .eyebrow i{width:9px;height:9px;border-radius:50%;background:#dd9f4a;box-shadow:0 0 0 5px rgba(221,159,74,.22)}
    h1{font-size:64px;line-height:1.08;font-weight:800;letter-spacing:-0.02em;max-width:1000px}
    .versus{display:flex;align-items:center;gap:28px}
    .tile{width:120px;height:120px;border-radius:26px;overflow:hidden;box-shadow:0 10px 30px rgba(24,28,47,.16);background:#fff;display:grid;place-items:center}
    .tile img{width:100%;height:100%;object-fit:cover}
    .tile--us{background:#181c2f;box-shadow:0 10px 30px rgba(217,100,56,.32)}
    .tile--us img{width:84%;height:auto;object-fit:contain}
    .vs{font-family:ui-monospace,Menlo,monospace;font-weight:700;font-size:26px;color:#8b8fa3;text-transform:uppercase;letter-spacing:0.1em}
    .foot{display:flex;align-items:center;justify-content:space-between;font-size:22px}
    .foot b{font-weight:800}
    .foot .tag{font-family:ui-monospace,Menlo,monospace;font-size:18px;color:#8b8fa3;text-transform:uppercase;letter-spacing:0.08em}
  </style></head><body>
    <div class="accent"></div>
    <div class="pad">
      <div class="brand"><img src="${glyphUri}"/><span>kirpik</span></div>
      <div class="mid">
        ${versusHtml}
        ${eyebrow ? `<div class="eyebrow"><i></i>${esc(eyebrow)}</div>` : ""}
        <h1>${esc(title)}</h1>
      </div>
      <div class="foot"><b>kirpik.app</b><span class="tag">Invisible text watermarking for Shopify</span></div>
    </div>
  </body></html>`;
}

// ---- Work list ----------------------------------------------------------------

const items = [];
items.push({ file: "home", eyebrow: "Kirpik", title: "Invisible text watermarking for Shopify" });
items.push({ file: "how-it-works", eyebrow: "How it works", title: "Protect, detect, prove" });
items.push({ file: "features", eyebrow: "Features", title: "Everything Kirpik does for your copy" });
items.push({ file: "pricing", eyebrow: "Pricing", title: "Free, Paid and Pro, from $0" });
items.push({ file: "faq", eyebrow: "FAQ", title: "Straight answers about Kirpik" });
items.push({ file: "enforcement", eyebrow: "Enforcement", title: "From detection to takedown" });
items.push({ file: "about", eyebrow: "About", title: "The team behind Kirpik" });
items.push({ file: "site-check", eyebrow: "Site check", title: "See what a scraper sees on any Shopify store" });
items.push({ file: "learn", eyebrow: "Learn", title: "The text protection library" });
items.push({ file: "compare", eyebrow: "Compare", title: "Kirpik vs the Shopify anti-theft category" });

for (const [slug, [tag, title]] of Object.entries(FEATURES)) items.push({ file: slug, eyebrow: tag, title });
// Learn pages reference /og/article-<slug>.png explicitly (src/pages/learn/[slug].astro).
for (const [slug, [cluster, title]] of Object.entries(ARTICLES)) items.push({ file: `article-${slug}`, eyebrow: cluster, title });

items.push({ file: "techniques", eyebrow: "Compare", title: "Text protection techniques, compared" });
items.push({ file: "vs-copy-blockers", eyebrow: "Technique explainer", title: "Kirpik vs. copy blockers" });
items.push({ file: "vs-visible-watermarks", eyebrow: "Technique explainer", title: "Kirpik vs. visible watermarks" });
items.push({ file: "vs-content-credentials", eyebrow: "Technique explainer", title: "Kirpik vs. content credentials" });
items.push({ file: "vs-zero-width-characters", eyebrow: "Technique explainer", title: "Kirpik vs. zero-width characters" });
items.push({ file: "vs-copy-monitors", eyebrow: "Technique explainer", title: "Kirpik vs. copy monitors" });

for (const [slug, name] of Object.entries(COMPARE)) {
  const left = icon(slug);
  items.push({ file: slug, title: `${name} vs Kirpik`, versus: left ? { left } : null, eyebrow: left ? null : "Comparison" });
}

// ---- Render -------------------------------------------------------------------

const browser = await chromium.launch();
const page = await (await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })).newPage();
for (const it of items) {
  await page.setContent(html(it), { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${OUT}/${it.file}.png` });
  console.log("og", it.file);
}
await browser.close();
console.log(`done: ${items.length} og images`);
