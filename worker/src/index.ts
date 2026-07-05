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

  // Same-origin fetch helper for the site-check tool. Browsers cannot read a
  // store's sitemap or blog feeds cross-origin, so the tool asks this worker.
  // Only a fixed set of Shopify storefront path shapes can be requested.
  if (url.pathname === "/sc-fetch" && request.method === "GET") {
    return scFetch(url);
  }

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

const SC_MAX_BYTES = 2_500_000;
const SC_MAX_HOPS = 3;

function scDomainOk(d: string): boolean {
  return (
    /^[a-z0-9][a-z0-9.-]{2,80}$/.test(d) &&
    d.includes(".") &&
    !/^\d+\.\d+\.\d+\.\d+$/.test(d) &&
    !/(^|\.)localhost$|\.local$|\.internal$|\.home$|\.lan$/.test(d)
  );
}

/** The only path shapes this endpoint will ever request or follow. */
function scPathOk(pathAndQuery: string): boolean {
  return (
    pathAndQuery === "/sitemap.xml" ||
    /^\/sitemap[a-z0-9_]{0,40}\.xml(\?from=\d{1,20}&to=\d{1,20})?$/.test(pathAndQuery) ||
    /^\/blogs\/[a-zA-Z0-9._-]{1,120}\.atom$/.test(pathAndQuery) ||
    /^\/pages\/[a-zA-Z0-9._-]{1,120}\/?$/.test(pathAndQuery)
  );
}

async function scFetch(url: URL): Promise<Response> {
  const d = (url.searchParams.get("d") || "").toLowerCase().replace(/\.$/, "");
  const t = url.searchParams.get("t") || "";
  const h = url.searchParams.get("h") || "";
  const f = url.searchParams.get("f") || "";

  const handleOk = /^[a-zA-Z0-9._-]{1,120}$/.test(h);
  let path: string | null = null;
  if (t === "sitemap") path = "/sitemap.xml";
  else if (t === "smpart") path = `/${f}`;
  else if (t === "atom" && handleOk) path = `/blogs/${h}.atom`;
  else if (t === "page" && handleOk) path = `/pages/${h}`;

  // The response type is chosen by the request shape, never by the upstream.
  const respondType = t === "page" ? "text/plain; charset=utf-8" : "application/xml; charset=utf-8";

  if (!scDomainOk(d) || !path || !scPathOk(path)) {
    return scRespond("bad request", 400, respondType);
  }

  try {
    // Follow redirects manually so a hop can never leave the allowed shape:
    // https only, a validated public hostname, and one of the allowed paths.
    let target = `https://${d}${path}`;
    let upstream: Response | null = null;
    for (let hop = 0; hop < SC_MAX_HOPS; hop++) {
      upstream = await fetch(target, {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; KirpikSiteCheck/1.0; +https://kirpik.app/site-check/)",
          Accept: "text/html,application/xml,application/atom+xml,*/*",
        },
        redirect: "manual",
        cf: { cacheEverything: true, cacheTtl: 600 },
      } as RequestInit);
      if (upstream.status < 300 || upstream.status >= 400) break;
      const loc = upstream.headers.get("Location");
      if (!loc) break;
      const next = new URL(loc, target);
      const nextPath = next.pathname + next.search;
      if (next.protocol !== "https:" || !scDomainOk(next.hostname.toLowerCase()) || !scPathOk(nextPath)) {
        return scRespond("redirect refused", 404, respondType);
      }
      target = next.toString();
      upstream = null;
    }
    if (!upstream || !upstream.ok) {
      return scRespond(`upstream ${upstream?.status ?? "redirect loop"}`, 404, respondType);
    }
    const text = (await upstream.text()).slice(0, SC_MAX_BYTES);
    return scRespond(text, 200, respondType);
  } catch {
    return scRespond("fetch failed", 502, respondType);
  }
}

function scRespond(body: string, status: number, contentType: string): Response {
  return new Response(body, {
    status,
    headers: {
      "Content-Type": contentType,
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=600",
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": "default-src 'none'; sandbox",
      "Content-Disposition": "attachment",
    },
  });
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
