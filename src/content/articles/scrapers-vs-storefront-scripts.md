---
title: "Scrapers never see your storefront scripts"
description: "HTTP clients, feed readers, headless browsers, spy extensions: how each obtains your text and why page JavaScript is invisible or irrelevant to them all."
cluster: "Why blockers don't work"
summary: "Protection scripts live inside the rendered page. Scrapers either never render the page or control the rendering completely. Either way, your scripts never get a vote."
pubDate: 2026-06-19
related: ["shopify-public-product-feed", "copy-paste-protection-apps", "product-descriptions-scraped"]
---

Every copy-protection script shares an unstated assumption: that the person taking your text will be standing in front of it, in a normal browser, with your JavaScript running. For actual scrapers, every part of that assumption is false. It is worth understanding exactly how, because once you see the mechanics, the limits of storefront scripts stop being a matter of opinion.

## How scraping actually works

Scrapers come in three broad shapes, in ascending order of effort.

### Plain HTTP clients

The simplest scraper is a program that requests a URL and reads the response: a few lines of Python, a `curl` command, a spreadsheet plugin. It receives the same HTML your server sends everyone, as text. It does not build a page from that HTML, does not load stylesheets, and does not execute scripts. Your protection code arrives as inert characters inside a `<script>` tag and is never run.

For text, this is usually all a scraper needs, because product descriptions are present in the HTML itself. The text has to be there: browsers render it from there and search engines index it from there.

### Feed readers

On Shopify, most scrapers skip HTML parsing altogether, because [every store publishes structured product data](/learn/shopify-public-product-feed/) at endpoints like `/products.json`. These responses are pure data. There is no page, no DOM and no script context. A blocker cannot fail to run here in some fixable way; there is simply no venue in which it could run. One request returns up to 250 products with complete descriptions, which is why [catalogue scraping takes minutes](/learn/product-descriptions-scraped/).

### Headless browsers

Some sites render content with client-side JavaScript, so serious scraping frameworks drive a real browser engine without a visible window. Here your scripts finally do execute, and it does not help, because the scraper controls the entire browser. It reads the rendered text straight out of the DOM through automation APIs, ignoring selection, clipboard and context menus entirely. Those are conveniences for human hands; the scraper takes the text programmatically, at a layer your event handlers never touch. It can equally disable JavaScript per page, strip specific scripts, or override any function your protection defines.

The pattern across all three shapes: your script needs the visitor to run it and to interact through the channels it guards. Scrapers do neither.

A reasonable follow-up question is whether blocking can happen further down, at the network layer, before a request ever reaches the store. Platform-level bot mitigation does exist, and it is genuinely outside the page. But on a hosted platform the network layer belongs to the platform, not to your theme or to any app you install, and the product endpoints stay public because legitimate integrations depend on them. Nothing sold as a storefront script operates at that layer, whatever the listing implies.

## Spy extensions: above the page, not on it

Between human browsing and bulk scraping sits a category merchants increasingly meet: "spy" browser extensions marketed for product research and dropshipping, which let a user extract listings from any store they visit with one click.

Extensions occupy a privileged position in the browser. Page scripts are sandboxed inside the page. Extensions operate above the page, with the ability to read the DOM, run their own code in an isolated context your scripts cannot see or interfere with, and make their own network requests, including to your feed endpoints. A page script trying to stop an extension is a tenant trying to change the building's locks. The permission hierarchy runs the other way.

So even the "human with a browser" case is not safe ground for blockers. The moment that human installs a research extension, they carry a scraper with them, running at a higher privilege than anything your theme can load.

## The vendors already concede this

Read the fine print of the copy-protection category and you find quiet admissions. Listings describe their features as deterrents. Support pages acknowledge that a determined visitor can still access content, or note that disabling JavaScript defeats the protection, or exclude "advanced users" from expectations. Phrases like "makes it harder" and "discourages casual copying" carry the real message: the developers know the browser offers them nothing stronger, and the careful ones say so in their own documentation.

That candour is worth respecting, and worth taking literally. Even the deterrence is thin: reader mode, the page source or switching JavaScript off bypasses the block in seconds. It is not protection against scraping, and the vendors, read closely, do not claim it is. Our [comparison pages](/compare/) quote specific listings verbatim so you can read the wording yourself, and the [technique survey](/learn/copy-paste-protection-apps/) explains what each advertised feature does underneath.

## Where that leaves a merchant

Lay the pieces side by side. Plain HTTP clients never execute your scripts. Feed readers never encounter a page. Headless browsers execute your scripts and overrule them. Extensions outrank them. The common thread is architectural: JavaScript you serve runs, if it runs at all, on machines you do not control, under policies you do not set. Nothing installable in a theme changes that, which is why the strategy has to move from preventing the copying to identifying it.

Kirpik takes the identifying route and, fittingly, adds no storefront scripts at all: there is nothing to run, so there is nothing for a scraper to skip. Protection lives inside the text as an algorithmic invisible watermark derived from your original text signature. The plain HTTP client scrapes it. The feed reader scrapes it. The headless browser and the spy extension scrape it. Every one of them carries your invisible markers along, and [detection](/features/detection/) reads them back out wherever the text resurfaces.
