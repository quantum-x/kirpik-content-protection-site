---
title: "How to watermark your Shopify product descriptions"
description: "A step-by-step guide to watermarking Shopify product descriptions with Kirpik: install, protect, verify nothing changed, then test detection on your own copy."
cluster: "Choosing & getting started"
summary: "From App Store install to your first successful detection in about ten minutes, including how to verify that your copy has not changed by a single word."
pubDate: 2026-06-26
related:
  - choosing-text-protection-shopify
  - batch-protect-catalogue
  - text-watermarks-and-seo
---

This is the practical walkthrough: installing Kirpik, protecting your first product descriptions, verifying that nothing visible changed, and then playing thief against your own store to watch detection work. Budget about ten minutes, most of which is you inspecting your own pages out of healthy suspicion.

If you are still weighing watermarking against blockers and monitors, start with [how to choose text protection](/learn/choosing-text-protection-shopify/) and come back. This article assumes you have decided to make your copy provable and want to see it done.

## Step 1: install from the Shopify App Store

Install Kirpik from the Shopify App Store listing like any other app. It runs embedded in your Shopify admin, so there is no separate account, dashboard or password; you work from inside the admin you already use.

One thing worth knowing before you even install: Kirpik adds nothing to your storefront. No app embed, no script tag, no pixel. Protection happens to your content, not to your theme, so there is no theme editor step, no "enable app embed" toggle, and no page-speed cost to check for afterwards.

The Free plan is the sensible starting point: $0, up to 25 products, 3 blog articles or pages, paste detection, 5 URL checks a month and 1 Proof of Ownership Certificate. Enough to protect real content and test the full loop before deciding whether the [paid tiers](/pricing/) earn their keep.

## Step 2: pick products in the Protect tab

Open Kirpik and head to the Protect tab. You will find your content organised the way Shopify thinks about it: Products, Articles and Pages. (Collections are not included; collection descriptions are not content Kirpik protects.)

Select a handful of products to start. If you are choosing, pick the ones whose descriptions you would least like to meet on a stranger's store: your best sellers, your best writing, the pages earning organic traffic.

Two things about content length. Kirpik needs at least 20 words of description to work with, and it will tell you if an item falls short rather than pretending to protect it. Descriptions between 20 and 30 words are accepted with a warning that the protection has limited redundancy; from around 45 words up, the watermark repeats enough times through the text to shrug off trimming and editing comfortably. Most product descriptions worth stealing clear 45 words without trying.

## Step 3: click Protect

Select your products and click Protect. Each item is processed and marked Protected in the list. What just happened: Kirpik embedded an algorithmic invisible watermark, derived from your original text's signature, into each description. The watermark carries your store's unique watermark code, which is what later lets a detection say "this text came from this store" rather than merely "this text is watermarked somewhere".

There is no step four of configuration. Protection is per-item and it is done.

## Step 4: verify that nothing changed

Do not take the app's word for it; this step is the whole reason to trust the tool. Open one of the protected products on your storefront and read the description. It is your copy, word for word, spelling, punctuation, formatting and all. View source if you like: your words are your words, your headings are your headings, your HTML structure is exactly the structure you had. No badges, no notices, no injected markup around your content, nothing a shopper or a crawler reads differently.

This matters commercially as much as aesthetically. Your description is a conversion asset and a ranking asset, and a protection tool that touched either would cost more than theft does. Kirpik changes nothing that readers or search engines evaluate, which is why [watermarking has no SEO effect](/learn/text-watermarks-and-seo/).

While you are in verification mode, check your page speed if you are the measuring type. It will be identical, because nothing was added to the theme to slow it down.

## Step 5: play thief against yourself

Now the satisfying part. Go to your storefront as a visitor, select a protected product description, and copy it, exactly as a copycat would. Paste it into a note or an email first if you want to simulate the text passing through another app on its journey.

Back in Kirpik, open the Detect tab, choose paste, and drop the copied text in. The detector reports a match: your watermark code, the number of Watermark Security Markers recovered, and a confidence figure. That result is what a real detection looks like when your description eventually turns up somewhere it should not be.

Feel free to abuse the copy before pasting: delete a couple of sentences, reword a line, bold something. Within reason the detection still lands, because the signature repeats through the text with [redundancy designed for exactly this](/features/resilience/). You will see the marker count drop as you delete more, which is a nicely honest signal of how much protection survives editing.

You can also test the URL method by pointing Detect at one of your own product pages. The Free plan includes 5 URL checks a month, so spend one on the rehearsal; paste detection is unlimited on every plan and covers most real cases anyway.

## What you have when it happens for real

The rehearsal loop you just ran is the incident response plan. When a customer, a quoted-phrase Google search or plain luck surfaces a store that reads like yours, you paste their text or check their URL, and in seconds you know whether it carries your watermark. From a positive detection you can generate a [Proof of Ownership Certificate](/features/chain-of-proof/): a dated ownership document with content fingerprints, detection details and a public verification page, built to sit behind a DMCA notice.

Two honest notes on scope. Kirpik does not monitor the web on a schedule; finding suspects is your habit, confirming them is Kirpik's job. And protection is per saved version of your text, so if you rewrite a protected description later, re-protect it after editing, or let Auto-Protect handle that on Pro.

## Where to go from here

Protect the rest of your best content: the Free plan's 25 products and 3 articles or pages go further than they sound when you prioritise the pages actually worth stealing. When the catalogue outgrows clicking, [batches and Auto-Protect](/learn/batch-protect-catalogue/) take over the labour. And if the app earns a permanent place in your setup, [Kirpik's plans](/pricing/) scale from there.
