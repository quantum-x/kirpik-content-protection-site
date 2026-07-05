---
title: "Scrapers never see your storefront scripts"
description: "Feed readers skip your pages, HTML fetchers never run scripts, headless browsers obey their operator. Why protection scripts never meet a real scraper."
cluster: "Why blockers don't work"
summary: "There are three ways to scrape a store, and a storefront protection script is absent, inert or overruled in all three. The mechanics, explained plainly."
pubDate: 2026-06-19
related: ["shopify-public-product-feed", "copy-paste-protection-apps", "product-descriptions-scraped"]
---

Every storefront protection script rests on one assumption: that whoever takes your text will be a person, in a normal browser, with the script running. Scrapers break that assumption three different ways, and it is worth seeing each one plainly, because together they explain why no blocker app has anything to say about scraping. There are three shapes of scraper, and your scripts do not run in any of them.

## Three ways to take text without running a script

The first shape reads the feeds. Shopify serves every store's products, blog articles and page addresses as structured data at [public endpoints that cannot be closed](/learn/shopify-public-product-feed/). A feed reader requests `/products.json` and receives full descriptions with no page attached. Your theme is never sent, so your scripts are never sent either. There is nothing to bypass, because nothing was ever in the way. The same shape covers your blog, whose feed addresses serve articles to any subscribed reader, and the requests involved are indistinguishable from the legitimate integrations that fetch these endpoints all day. Most Shopify scraping takes this shape for the simple reason that the platform offers the data ready-made.

The second shape fetches pages. Some scrapers download the storefront page itself and parse the description out of the source. The page they download contains your protection script, but a downloaded script is only text. It does nothing until a browser executes it, and a parser is not a browser and executes nothing.

The third shape drives a real browser. Headless browsers are automated browsers used against sites that assemble their content with JavaScript. Here your script does execute, and it does not matter, because the operator controls the entire environment. There is no mouse for a right-click blocker to block and no keyboard for a shortcut trap to trap; the operator's program reads the text straight out of the page structure, and can switch JavaScript off or strip the script's handlers if the script is somehow in the way. A protection script can only inconvenience a human. A headless browser contains none. It is also the most expensive shape to run, which is why it is reserved for sites that give up their data no simpler way; a Shopify store always offers a simpler way.

## The asymmetry that matters

Set the three shapes side by side and one fact stands out. Running your protection script is voluntary for every scraper and unavoidable for every customer. The visitors who obediently execute your storefront JavaScript, and absorb whatever friction it creates, are exactly the ones who came to buy something. The visitors the script was bought to stop choose whether it runs, and choose no. What the category's apps do with that arrangement is covered in [what copy-paste protection apps actually do](/learn/copy-paste-protection-apps/).

The economics point the same way. Executing scripts costs a scraper rendering time, and at scale rendering time is money, so scrapers avoid it wherever the data is available raw. On Shopify it always is, which means the paying visitors subsidise a mechanism the non-paying ones route around.

Any protection that depends on the thief's cooperation is not protection. A real measure must hold even when the thief does everything right.

## What survives the scrape

One thing passes through all three shapes intact: the text itself. The feed reader gets it as data, the parser extracts it from the source, the headless browser reads it off the page, and in every case the words arrive wherever they are going unchanged. Whatever lives inside the text travels with it.

That is where Kirpik places its protection. The invisible markers embedded in your descriptions, blog articles and pages are part of the text, so they pass through feed export, page scraping and headless collection alike, and the [watermark's resilience](/features/resilience/) extends through the editing and reformatting that usually follow. The scraper cannot avoid carrying them, because carrying the text is the entire point of the scrape.
