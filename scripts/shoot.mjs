/**
 * Design-review screenshots. Serves ./dist and captures pages listed below
 * to .screenshots/. Usage: node scripts/shoot.mjs [path ...]
 * With no args, shoots every route it can find in dist.
 */
import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFileSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const DIST = new URL("../dist", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
const OUT = new URL("../.screenshots", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
mkdirSync(OUT, { recursive: true });

const MIME = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".mjs": "text/javascript", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml", ".json": "application/json", ".txt": "text/plain", ".xml": "application/xml", ".woff2": "font/woff2" };

const server = createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let file = join(DIST, p);
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
  if (!existsSync(file)) { res.writeHead(404); res.end("nf"); return; }
  res.writeHead(200, { "content-type": MIME[extname(file)] ?? "application/octet-stream" });
  res.end(readFileSync(file));
});
await new Promise((r) => server.listen(4322, r));

function findRoutes(dir, base = "") {
  const routes = [];
  for (const e of readdirSync(dir)) {
    const full = join(dir, e);
    if (statSync(full).isDirectory()) routes.push(...findRoutes(full, `${base}/${e}`));
    else if (e === "index.html") routes.push(base || "/");
  }
  return routes;
}

const args = process.argv.slice(2);
const routes = args.length ? args : findRoutes(DIST);

const browser = await chromium.launch();
for (const vp of [{ w: 1440, h: 900, tag: "desktop" }, { w: 390, h: 844, tag: "mobile" }]) {
  const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } });
  for (const route of routes) {
    const name = (route === "/" ? "home" : route.replace(/^\/|\/$/g, "").replace(/\//g, "_"));
    await page.goto(`http://localhost:4322${route}`, { waitUntil: "networkidle" });
    await page.evaluate(() => document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-in")));
    await page.waitForTimeout(250);
    await page.screenshot({ path: join(OUT, `${name}--${vp.tag}.png`), fullPage: true });
    console.log(`shot ${name}--${vp.tag}`);
  }
  await page.close();
}
await browser.close();
server.close();
