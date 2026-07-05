/**
 * Fetch each compared app's icon from its public Shopify App Store listing
 * and store it as public/compare-icons/<slug>.png (128x128).
 *
 * The slug -> listing-handle map is parsed straight out of src/compare-data.ts
 * so the two never drift. Where a fetch fails, no file is written and the
 * comparison templates fall back to a neutral letter tile.
 */
import sharp from "sharp";
import { existsSync, mkdirSync, readFileSync } from "node:fs";

const src = readFileSync("src/compare-data.ts", "utf8");
const apps = [];
const re = /slug: "([^"]+)",\s*\n\s*name: "[^"]*",\s*\n\s*url: SHOPIFY\("([^"]+)"\)/g;
for (let m; (m = re.exec(src)); ) apps.push({ slug: m[1], handle: m[2] });
console.log(`parsed ${apps.length} apps from compare-data.ts`);

mkdirSync("public/compare-icons", { recursive: true });
const UA = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchListing(handle) {
  for (let attempt = 1; attempt <= 4; attempt++) {
    const res = await fetch(`https://apps.shopify.com/${handle}`, { headers: UA });
    if (res.status === 429) {
      await sleep(15000 * attempt); // back off and retry
      continue;
    }
    return res;
  }
  throw new Error("listing HTTP 429 after retries");
}

let hit = 0;
let miss = 0;
for (const { slug, handle } of apps) {
  if (existsSync(`public/compare-icons/${slug}.png`)) {
    hit++;
    continue; // already fetched on a previous run
  }
  try {
    const res = await fetchListing(handle);
    if (!res.ok) throw new Error(`listing HTTP ${res.status}`);
    const html = await res.text();
    let iconUrl = html.match(/<meta property="og:image" content="([^"]+)"/i)?.[1];
    if (!iconUrl) {
      iconUrl = html.match(/https:\/\/cdn\.shopify\.com\/app-store\/listing_images\/[^"'\\\s)]+/i)?.[0];
    }
    if (!iconUrl) throw new Error("no icon url in listing HTML");
    const imgRes = await fetch(iconUrl.replace(/&amp;/g, "&"), { headers: UA });
    if (!imgRes.ok) throw new Error(`icon HTTP ${imgRes.status}`);
    const buf = Buffer.from(await imgRes.arrayBuffer());
    await sharp(buf).resize(128, 128, { fit: "cover" }).png().toFile(`public/compare-icons/${slug}.png`);
    hit++;
    console.log("ok  ", slug);
  } catch (e) {
    miss++;
    console.log("MISS", slug, "-", e.message);
  }
  await sleep(1500);
}
console.log(`done: ${hit} icons present, ${miss} missing of ${apps.length}`);
