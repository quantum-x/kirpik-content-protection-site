---
title: "Every Shopify store has a public product feed you cannot turn off"
description: "Shopify publishes your full product text through JSON, sitemap and blog feed endpoints that cannot be disabled. The verified list, and what it means."
cluster: "Why blockers don't work"
summary: "Your store serves machine-readable versions of every description, article and page through addresses no setting or app can close. Here is the verified list, and what it means for blocker apps."
pubDate: 2026-05-22
pillar: true
related: ["right-click-blockers-text-test", "scrapers-vs-storefront-scripts", "product-descriptions-scraped"]
---

Every Shopify store publishes machine-readable versions of its catalogue and blog at fixed public addresses. They contain your text in full, they answer anyone who asks, and no theme, setting or app closes them. If you are weighing up a copy-paste blocker, read this first: blockers operate on the storefront, and none of these addresses is the storefront.

## The endpoints, verified

Each address below was checked against a live store before publication. Replace the store domain with any Shopify store's and they answer the same way. None of them requires a login, a key or any credentials; the address alone is enough.

- `/products.json` returns every product, up to 250 per request and paginated beyond that, with the full description of each in a field called `body_html`.
- `/collections/all/products.json` serves the same catalogue arranged by collection; `/collections.json` lists the collections themselves.
- `/products/<handle>.json`, `.js` and `.oembed` return a single product in three further formats, description included.
- `/sitemap.xml` and `/sitemap_blogs_1.xml` list the address of every product, page and blog article for crawlers.
- `/blogs/<handle>.atom` and `.xml` publish your blog articles as subscription feeds.

None of these surfaces runs a single line of storefront JavaScript. There is no page to render, no menu to suppress and no selection to block. A program reading them receives plain structured text, which is the point: they were built for programs.

The `.oembed` address exists so chat apps and social platforms can build link previews, and it answers anyone.

The blog addresses deserve as much attention as the product ones. Merchants who learn about `/products.json` often assume the exposure ends with the catalogue, but the feed addresses serve your blog articles to any reader that subscribes, so editorial content that took weeks to write can be collected as easily as a product list.

## Why they cannot be switched off

The feeds are not an oversight. Shopify's ecosystem runs on them. Sales channels and shopping integrations read the product endpoints to list your items elsewhere. Search engines read the sitemaps to index your store. Link previews in messaging apps are built from the oembed data. Blog feeds serve subscribers and readers. Closing these surfaces would cut a store off from the machinery that brings it customers, so the platform does not offer a switch, to merchants or to apps. No app can close them either, whatever a listing implies: apps operate inside the platform, and the platform serves these addresses itself.

This is not a Shopify defect, and it is not unique to Shopify. Every commerce platform trades openness for distribution, because the same data that a scraper reads is the data that puts your products in front of buyers. The consequence is simply one that protection decisions have to start from: the text cannot be withheld. Whoever wants your catalogue in bulk can have it, today, without visiting a page. How the collectors use it is covered in [who is scraping your descriptions](/learn/product-descriptions-scraped/).

## What this means for blocker apps

Every claim a blocker app makes, disabling right-click, blocking selection, trapping keyboard shortcuts, describes the rendered storefront. The feeds serve the same text with no page, no mouse and no script, so a blocker's claims can be entirely true on the storefront and still irrelevant to the copying that matters. A scraper reading `/products.json` never encounters the blocker at all; the technical detail is in [scrapers never see your storefront scripts](/learn/scrapers-vs-storefront-scripts/).

You can confirm all of this on your own store in under a minute. Open your store's address with `/products.json` added and read what comes back. Or run our [site check](/site-check/), which reads the same public feeds a scraper would and shows you, item by item, what your store hands out. The sight is worth the minute: most merchants have never read their own feed, and every description laid out as ready-to-take data settles the blocker question faster than any argument.

Since the feed cannot be closed, protection has to travel inside the text itself. That is Kirpik's approach: an [algorithmic invisible watermark](/features/invisible-text-watermarking/) derived from your original text signature, embedded in your descriptions, blog articles and pages, unchanged by feed export, so that text taken from any of these endpoints still identifies the store it came from.
