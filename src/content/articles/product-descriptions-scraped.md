---
title: "Your product descriptions are being scraped right now"
description: "Shopify product text is scraped by download, not by browsing. Who collects your descriptions, how the feeds hand them over, and what you still control."
cluster: "Text theft & what it costs"
summary: "Scraping a Shopify catalogue is an automated download that never touches your storefront. Here is how it works, who does it, and the one thing that remains in your control."
pubDate: 2026-05-20
pillar: true
related: ["shopify-public-product-feed", "copycat-store-playbook", "where-stolen-copy-ends-up"]
---

The word scraping suggests labour. What happens to a Shopify catalogue is closer to a download. A program asks your store for its product data, the store answers, and every description you wrote arrives as structured text, ready to reuse. No page is opened. No mouse moves. Nothing is highlighted or right-clicked.

That is worth understanding before you spend anything on protection apps, because the whole blocker category watches the storefront: the pages, the mouse, the keyboard. Scraping rarely touches any of them.

## Scraping is a download, not a visit

Every Shopify store answers a fixed set of web addresses with machine-readable data. The best known is `/products.json`. It returns your products in batches of up to 250, page after page, until the catalogue runs out. Each entry carries the title, price, variants and image addresses, and in a field named `body_html` it carries the full text of your product description, exactly as you wrote it.

A catalogue of two thousand products takes eight requests. A simple program makes them in under a minute. The same program can walk `/sitemap.xml` to find your pages and read your blog articles from their own feeds. The complete list of these addresses, each one verified against a live store, is in our guide to [the public product feed](/learn/shopify-public-product-feed/).

Two things follow. First, no theme loads and no storefront script runs, so a right-click blocker or copy-paste disabler installed on the store observes nothing. Second, the requests look like ordinary platform traffic, because sales channels, shopping integrations and search engines fetch the same addresses all day. There is no alarm to raise and no pattern to block.

## Who collects product text

Not everyone reading your feed is a thief, which is exactly why the feeds exist and cannot be closed. The collectors fall into four groups, and only some of them cost you money.

Copycat and dropship stores take descriptions in order to republish them. When a competitor sources the same product from the same supplier, your text is the one part of your listing worth stealing, and it tends to appear on their site verbatim or lightly trimmed. This group costs you sales and search positions, and the [copycat playbook](/learn/copycat-store-playbook/) shows how quickly it works.

Product research tools ingest whole catalogues so that subscribers can browse proven listings and import them, text included, into stores of their own. One scrape becomes many storefronts, run by people who never saw your site.

Price and market monitors fetch catalogues on a schedule. They store your text for analysis but rarely republish it. They are the least of your worries and the bulk of the traffic.

AI crawlers collect product text for training and for shopping answers. Your sentences can resurface in generated descriptions, almost never with a traceable source.

## What you can do about it

Prevention is not on offer, from anyone. The feeds cannot be switched off, the download cannot be observed, and blocking the addresses would break the legitimate services your store depends on. Accepting this early saves money on apps that promise otherwise.

You can watch the mechanism yourself in under a minute. Add `/products.json` to your own store's address and read what comes back: every description, laid out as data, for anyone who asks. Our [site check](/site-check/) does the same reading for you and reports, product by product and article by article, what your store hands to any program that requests it.

What stays in your control is what the text can prove after it leaves. Hosting companies, marketplaces and search engines act on removal requests when the requester shows the text was theirs first, with dates. [Our enforcement guide](/enforcement/) covers each route. The evidence has to exist before the theft: protection applied today covers whatever is taken from today onward, and does nothing for the version scraped last month. So the time to protect a catalogue is before you go looking for thieves, not after you find one.

Kirpik does this by embedding an algorithmic invisible watermark, derived from your original text signature, into your product descriptions, blog articles and pages. It changes nothing a reader or a search engine sees. The watermark survives scraping and feed export, so you can detect your text on any site you check and issue a Proof of Ownership Certificate for the takedown. [See how it works](/how-it-works/).
