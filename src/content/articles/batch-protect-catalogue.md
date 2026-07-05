---
title: "Protecting a large catalogue with batches and Auto-Protect"
description: "How large Shopify stores protect hundreds of products with queued batch jobs and Auto-Protect, what happens on edits, and how downgrades are handled safely."
cluster: "Choosing & getting started"
summary: "One-click protection works for twenty products, not two thousand. Batches cover the backlog, Auto-Protect covers everything you save next, and edits and downgrades have sensible answers."
pubDate: 2026-07-02
related:
  - watermark-shopify-descriptions
  - choosing-text-protection-shopify
  - product-descriptions-scraped
---

Protecting a product takes one click. That statement means very different things at 20 products and at 2,000. A large catalogue turns text protection from an action into an operations question: how do you get the backlog covered, how do you keep coverage as the catalogue changes daily, and what happens at the awkward edges, edits, new products, plan changes, without anyone having to remember anything?

Kirpik's answer has two halves: batch protection for the catalogue you already have, and Auto-Protect for the catalogue you are about to create. This article covers both, plus the edge cases that decide whether protection stays real six months in. If you have not protected anything yet, run through [the hands-on walkthrough](/learn/watermark-shopify-descriptions/) with a few products first; everything here builds on that flow.

## The backlog: batch protection

Batch protection is available on the Paid plan and up. In the Protect tab, instead of picking items one by one, you bulk-select across Products, Articles and Pages and start the run in one action.

Large runs are handled properly rather than optimistically. The job is queued and processed in the background, with progress you can watch from the app: items completed, items remaining. You do not babysit a browser tab, you do not keep the app open, and closing the admin does not abandon the run. Come back later and the batch has carried on without you.

A few practical notes for big runs:

- **Short descriptions are reported, not fudged.** Kirpik needs at least 20 words of content per item. In a catalogue of hundreds there are usually a few two-line descriptions that fall short, and the run tells you about them instead of pretending. Treat that list as useful output: a two-line description is thin for conversion and SEO reasons too, and the items on it are the ones least worth stealing anyway.
- **Re-running is safe.** Protection recognises content that is already covered, so overlapping batches or a re-run over the whole catalogue never double-processes anything. When in doubt, run it again.
- **Prioritise if you are capped.** The Paid plan covers up to 100 products and 50 articles and pages. If your catalogue is larger than your plan, protect in order of theft value: best sellers, best-ranking pages, and the descriptions that took real work, before the long tail.

## The future: Auto-Protect on save

The backlog is a one-time problem. The permanent problem is that catalogues move: new products weekly, descriptions polished, seasonal text swapped in and out. Manual protection decays against that churn, because it depends on someone remembering a second step after every save, and busy stores forget second steps.

Auto-Protect, on the Pro plan, removes the step. With it switched on, Kirpik picks up new and updated products as they are saved and applies protection automatically in the background. Your team writes and edits in the Shopify admin exactly as before; coverage follows the saves. For a store adding products every week, this is the difference between "we protected the catalogue once, in March" and the catalogue simply being protected, which is the state you actually want. The [Auto-Protect feature page](/features/auto-protect/) has the fuller description.

## The edge case that matters: editing a protected product

Here is the question every large store should ask any protection vendor: what happens when I edit content that is already protected?

The straight answer for Kirpik: an edit produces a new saved version of your text, and it is that version that needs to be covered. On Pro with Auto-Protect on, this is handled for you; the save is picked up and the updated product is re-covered in the background, no action needed. On Free and Paid, make re-protecting part of the edit itself: change the description, save, re-protect the item. It is one click, and because re-running protection over an item is always safe, there is no bookkeeping about what state a product was in before.

The practical risk of skipping it is mundane rather than catastrophic: a heavily rewritten description is new text, and new text is only provable once protected. Stores that edit descriptions frequently, seasonal refreshes, conversion testing, ongoing SEO work, are exactly the stores Auto-Protect is priced for.

## Plan changes without surprises

Growth in reverse is worth planning for too. Suppose you protected 400 products on Pro and later downgrade to Paid, which covers 100. Nothing breaks and nothing is silently left in a misleading state: Kirpik restores the newest items over the new plan's cap back to their unprotected state, exactly as they were before protection, and your 100 covered items carry on as normal. Your text is never held hostage by a billing decision, and protection status in the app always reflects reality.

The same reversibility applies at any scale by choice: you can remove protection from one item or from everything, and the text returns to its prior state. Protection that can be cleanly undone is easier to trust with two thousand products than protection that cannot.

## Sizing the plan to the catalogue

The plan ladder maps cleanly onto catalogue size:

- **Free ($0):** 25 products and 3 articles or pages, protected one click at a time. Right for testing the loop and for small stores.
- **Paid ($7.99/month):** 100 products, 50 articles and pages, and batch protection. Right for mid-size catalogues with an occasional-edit rhythm, plus 20 URL checks and 5 certificates a month for stores that expect to enforce.
- **Pro ($19.99/month, or $199/year):** unlimited products, articles and pages, Auto-Protect on save, 100 URL checks a month and unlimited certificates. Right for large or fast-moving catalogues where coverage has to survive nobody thinking about it.

The full comparison lives on the [pricing page](/pricing/).

## Coverage is the point

A large catalogue is a large surface: hundreds of descriptions exposed through pages and [feeds that scrapers read directly](/learn/product-descriptions-scraped/), any of which can turn up on a clone store next quarter. Protection at that scale is a coverage level you maintain rather than a feature you try once, and the mechanics above, queued batches, Auto-Protect, safe re-runs, honest downgrades, exist so that maintaining it costs nearly nothing. Set the backlog batch running today, turn on Auto-Protect if you are on Pro, and the next description a thief lifts from you will be one that can testify about where it came from. The end-to-end story is on [how it works](/how-it-works/).
