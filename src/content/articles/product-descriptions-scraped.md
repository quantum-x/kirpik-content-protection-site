---
title: "Your product descriptions are being scraped right now"
description: "How Shopify product text really gets scraped: public feeds rather than browsers, who is collecting it, and why the usual blockers never see it happen."
cluster: "Text theft & what it costs"
summary: "Scraping a Shopify catalogue does not involve a browser, a right click, or anything a blocker can watch for. Here is how it actually works, and who is doing it."
pubDate: 2026-05-20
pillar: true
related: ["shopify-public-product-feed", "copycat-store-playbook", "where-stolen-copy-ends-up"]
---

When merchants imagine their content being stolen, they usually picture a person: someone on the site, highlighting a paragraph, right-clicking, pasting it somewhere else. That person exists, but they are the least of it. Most product text leaves a Shopify store without anyone visiting a single page.

Scraping is quiet, automated and cheap. It does not trip the tools sold to stop it, because those tools guard the storefront, and scraping rarely goes through the storefront at all.

## Scraping does not look like browsing

A scraper is a program that sends HTTP requests and reads the responses. There is no window, no mouse, no scrolling. Where a human visitor loads your theme, your fonts, your scripts and your images, a scraper asks for exactly one thing: the data.

That distinction matters more than any other fact in this subject. Every copy-protection script you can install runs inside a visitor's browser. A scraper is not a browser, does not run your scripts, and never sees them. The [comparison between scrapers and storefront scripts](/learn/scrapers-vs-storefront-scripts/) goes deeper, but the short version is that the two operate in different worlds.

## The feed is the front door

Shopify publishes structured product data for every store by design. Append `/products.json` to almost any Shopify storefront domain and you get a clean, machine-readable list of products. A single request returns up to 250 of them, and the response includes a field called `body_html`: your full product description, exactly as you wrote it, headings and all.

Page through that endpoint and a whole catalogue comes out in minutes. No login, no API key, no rate-limit gymnastics for a store of ordinary size. We cover every one of these endpoints, and why they cannot be switched off, in [the public product feed article](/learn/shopify-public-product-feed/). You can also point our [site check tool](/site-check/) at your own store and watch your descriptions come back over the wire.

None of this is a flaw. Sales channels, integrations and search engines depend on these surfaces. But it means the text you spent evenings writing is available in bulk, in a format built for programs to consume.

## Who is actually collecting it

Four groups do most of the taking, and their motives differ.

**Dropship cloners.** They sell the same supplier products you do, often sourced from the same catalogue. Product photos come from the supplier, so the only thing distinguishing one listing from another is the text. Yours is written, tested and ranking, which makes it the obvious thing to lift. Spy tools aimed at dropshippers make importing a competitor's listing a button press.

**Copycat stores.** Some clones do not stop at a product. They take the catalogue, the collection structure and the About page, and stand up a lookalike store under a different name. The [copycat store playbook](/learn/copycat-store-playbook/) walks through how little effort that takes.

**Aggregators and comparison sites.** These crawl product data at scale to populate listings, price comparisons and affiliate pages. Some attribute and link back. Many republish your descriptions wholesale, and their domains often carry more authority than yours.

**AI training and content crawlers.** Product descriptions are exactly the kind of clean, structured, commercially flavoured text that gets swept into training sets and into tools that generate "new" storefronts. Once your text is in that pipeline you will not see where it resurfaces.

## The economics are the problem

Writing a good product description takes real time: research, drafts, revisions, a voice that matches your brand. Taking one takes a fraction of a second, and taking three hundred takes barely longer. A few lines of code, or an off-the-shelf importer, moves an entire catalogue from your store to someone else's in an afternoon.

That asymmetry is why this keeps happening. The cost of copying is close to zero, the duplicate is as good as the original by definition, and the person who wrote it usually never finds out.

## Why you have not noticed

Scraping leaves almost no trace a merchant would see. The requests land in server logs you do not read, they look like ordinary traffic, and nothing on your dashboard changes. The stolen text then surfaces somewhere you do not browse: a different market, a different niche label, an ad landing page that only paid traffic ever sees. We have catalogued the common destinations in [where stolen product text ends up](/learn/where-stolen-copy-ends-up/).

Most merchants discover a clone one of two ways. A customer mentions a suspiciously similar store, or the merchant pastes one of their own distinctive sentences into Google inside quotation marks and finds it on a domain they have never heard of. Try that second one today. It is free and occasionally eye-opening.

## What actually helps

You cannot close the feed, and you cannot make a scraper run your scripts. The apps that promise otherwise are examined, neutrally and with sources, in our [comparison section](/compare/). What you can change is what stolen text is worth to the person who took it.

Text that carries proof of origin is a liability to republish. When you can show that the words on a clone's page came from your store, and show it with dates, fingerprints and a verifiable certificate, takedowns stop being arguments and start being paperwork. The [enforcement guide](/enforcement/) covers that path from detection to DMCA notice.

That is the gap Kirpik works in. It embeds an algorithmic invisible watermark, derived from your original text signature, into your product descriptions, articles and pages. Your text does not change, your storefront gains no scripts, and nothing slows down. But everything scraped quietly carries your store's mark, and [detection](/features/detection/) can read it back out of whatever page it lands on.
