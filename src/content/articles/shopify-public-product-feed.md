---
title: "Every Shopify store has a public product feed you cannot turn off"
description: "Shopify exposes your full product descriptions through public JSON, sitemap and feed endpoints. See each one, why it exists, and what it means for blockers."
cluster: "Why blockers don't work"
summary: "Your store publishes machine-readable versions of every product description through endpoints you cannot disable. Here is the full list, and why no blocker app touches them."
pubDate: 2026-05-22
pillar: true
related: ["right-click-blockers-text-test", "scrapers-vs-storefront-scripts", "product-descriptions-scraped"]
---

There is a version of your Shopify store that has no theme, no scripts, no right-click to block and no text to un-select. It is plain structured data, it includes every word of every product description, and it is reachable by anyone with the URL. Shopify provides it on purpose, and no setting or app removes it.

If you are evaluating copy-protection apps, this is the single most useful fact to know before you spend anything. Every claim about disabling selection or blocking copy applies to the rendered storefront. None of it applies here.

## The endpoints, verified

These were checked against live production Shopify stores in July 2026. Substitute your own domain and try them.

| Endpoint | What it returns |
| --- | --- |
| `/products.json` | Your products as JSON, paginated, up to 250 per request |
| `/collections/all/products.json` | Products via the built-in "all" collection |
| `/collections.json` | Your collection list |
| `/products/<handle>.json` | One product, full detail |
| `/products/<handle>.js` | The same product as a JavaScript-friendly object |
| `/products/<handle>.oembed` | Product summary for link previews |
| `/sitemap.xml` | Index of every URL on the store |
| `/sitemap_blogs_1.xml` | Every blog article URL |
| `/blogs/<handle>.atom` | Blog articles as a subscribable feed, full text included |

The one that matters most for text is `/products.json`. Each product in the response carries a `body_html` field containing your complete description: the HTML you wrote in the admin, headings, lists, size charts, the lot. Add `?limit=250` and walk the `page` parameter, and a modest catalogue fits in a handful of requests.

The per-product endpoints are just as complete. `/products/<handle>.json` and `/products/<handle>.js` both return the full description for a single product, and the `.js` variant exists specifically so theme code and third-party scripts can fetch product data on the fly. The sitemap files round out the picture: they hand a crawler an orderly list of every product, page and article URL on the store, which is the polite way of saying they are a scraping itinerary as well as an SEO asset.

The blog surfaces deserve a mention too. If you publish articles, `/blogs/<handle>.atom` serves them as a feed, full text included, which is precisely how article-scraping tools prefer to consume them. Anything you have written in a blog post, buying guide or brand story travels through that feed as readily as product text travels through `/products.json`.

## Why Shopify does this

These surfaces are not an oversight. They exist because the modern commerce stack depends on machine-readable data.

Sales channels need your product data to list you elsewhere. Integrations, storefront apps and headless setups read these formats. The oembed endpoint powers the rich preview you see when a product link is pasted into a chat. The sitemaps exist so search engines can find and index every page, which is the visibility your store lives on.

Turning them off would break real functionality, which is why Shopify does not offer a switch. There is no theme setting, no metafield and no app permission that closes these surfaces. The only stores that do not expose them are password-protected, and a password-protected store is not selling anything.

## Why no blocker can reach them

Right-click blockers, copy disablers and anti-inspect scripts are JavaScript that your theme sends to a visitor's browser, where it runs against the rendered page. That is the entire mechanism, and we take it apart in [what copy-paste protection apps actually do](/learn/copy-paste-protection-apps/).

The endpoints above are not rendered pages. A request to `/products.json` goes to Shopify's servers and comes back as raw JSON. Your theme is not involved. Your scripts are not served, let alone executed. There is no page for a blocker to protect, no selection to suppress, no context menu to cancel.

So the honest summary of any "disable copying" app is this: it inconveniences a human on the storefront, while the same text remains one clean request away in a format built for programs. Scrapers know this, which is why [they never see your storefront scripts at all](/learn/scrapers-vs-storefront-scripts/).

## See it on your own store

You do not need to take our word for any of this. Open a new tab and put your own domain in front of `/products.json`. Read the `body_html` fields and you will find your own descriptions looking back at you.

We also built a [site check tool](/site-check/) that does this politely for you: give it your store URL and it shows you which public surfaces are live and what text they expose. It reads only what any anonymous visitor can read, because that is exactly the point.

## What this means for protecting text

Once you accept that the feed is permanent, the strategy question changes shape. You cannot control whether your descriptions can be fetched. You can control whether the fetched text is anonymous.

Plain text carries no evidence of where it came from. Watermarked text does. Kirpik embeds an algorithmic invisible watermark, derived from your original text signature, into the descriptions, articles and pages you choose to protect. It changes nothing a reader or a search engine sees, and it adds no scripts to your storefront. It simply means that the text sitting in `body_html`, and every scrape of it, carries invisible markers tying it to your store. When your words surface on someone else's site, [detection](/features/detection/) reads the markers back and gives you something a blocker never could: proof.
