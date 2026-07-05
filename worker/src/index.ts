// Edge worker fronting kirpik.app (GitHub Pages origin behind Cloudflare).
// Adds two agent-discovery capabilities the static origin cannot provide itself:
//
//   1. RFC 8288 Link response headers on HTML pages.
//   2. Accept: text/markdown content negotiation, returning a markdown rendering
//      of the page (prebuilt .md for Learn articles, edge-converted otherwise).
//
// The worker fails open: any error returns the untouched origin response, so it
// cannot take the site down.
import { htmlToMarkdown } from "./html-to-md";

export default {
  async fetch(request: Request): Promise<Response> {
    try {
      return await handle(request);
    } catch {
      return fetch(request); // fail open
    }
  },
};

async function handle(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const accept = request.headers.get("Accept") || "";
  const wantsMarkdown =
    request.method === "GET" && /text\/markdown/i.test(accept) && isPagePath(url.pathname);

  if (wantsMarkdown) {
    const md = await getMarkdown(url);
    if (md) {
      const headers = new Headers(linkHeaders(url));
      headers.set("Content-Type", "text/markdown; charset=utf-8");
      headers.set("X-Markdown-Tokens", String(Math.ceil(md.length / 4)));
      headers.set("Cache-Control", "public, max-age=300");
      headers.set("Vary", "Accept");
      headers.set("X-Content-Type-Options", "nosniff");
      return new Response(md, { status: 200, headers });
    }
    // No markdown available: fall through to the normal HTML response.
  }

  const resp = await fetch(request);
  const ct = resp.headers.get("Content-Type") || "";
  if (request.method === "GET" && ct.includes("text/html")) {
    const headers = new Headers(resp.headers);
    const link = linkHeaders(url).Link;
    if (link) headers.set("Link", link);
    appendVary(headers, "Accept");
    return new Response(resp.body, {
      status: resp.status,
      statusText: resp.statusText,
      headers,
    });
  }
  return resp;
}

// A "page" is a directory-style path (ends in / or is extensionless), or an
// explicit .html. Assets (.css/.js/.png/.json/.xml/.md and friends) are left untouched.
function isPagePath(pathname: string): boolean {
  const ext = pathname.match(/\.([a-z0-9]+)$/i)?.[1]?.toLowerCase();
  if (!ext) return true;
  return ext === "html";
}

// Pretty path -> markdown mirror path: "/how-it-works/" -> "/how-it-works.md",
// "/" -> "/index.md".
function mdPathFor(pathname: string): string {
  const clean = pathname.replace(/index\.html$/i, "").replace(/\/+$/, "");
  return clean === "" ? "/index.md" : `${clean}.md`;
}

function linkHeaders(url: URL): Record<string, string> {
  const rels = [
    `</llms.txt>; rel="describedby"; type="text/markdown"`,
    `</sitemap-index.xml>; rel="sitemap"`,
    `<${mdPathFor(url.pathname)}>; rel="alternate"; type="text/markdown"`,
  ];
  return { Link: rels.join(", ") };
}

function appendVary(headers: Headers, value: string): void {
  const existing = headers.get("Vary");
  if (!existing) {
    headers.set("Vary", value);
  } else if (!existing.toLowerCase().split(/\s*,\s*/).includes(value.toLowerCase())) {
    headers.set("Vary", `${existing}, ${value}`);
  }
}

async function getMarkdown(url: URL): Promise<string | null> {
  // 1. Prebuilt markdown mirror (Learn articles publish /learn/<slug>.md).
  const mdUrl = new URL(mdPathFor(url.pathname), url.origin).toString();
  const pre = await fetch(mdUrl, {
    headers: { Accept: "text/markdown" },
    cf: { cacheEverything: true, cacheTtl: 300 },
  } as RequestInit);
  if (pre.ok && (pre.headers.get("Content-Type") || "").includes("markdown")) {
    return await pre.text();
  }

  // 2. Edge-convert the HTML page's <main> content.
  const pageUrl = new URL(url.pathname, url.origin).toString();
  const htmlResp = await fetch(pageUrl);
  if (!htmlResp.ok) return null;
  if (!(htmlResp.headers.get("Content-Type") || "").includes("text/html")) return null;

  const html = await htmlResp.text();
  const mainMatch = html.match(/<main[^>]*\bid=["']main["'][^>]*>([\s\S]*?)<\/main>/i);
  const inner = mainMatch ? mainMatch[1] : html;
  const title = (html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || "").trim();

  const body = htmlToMarkdown(inner);
  if (!body.trim()) return null;
  const heading = title ? `<!-- Markdown rendering of ${url.href} -->\n\n` : "";
  return `${heading}${body}`;
}
