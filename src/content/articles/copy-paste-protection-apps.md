---
title: "What copy-paste protection apps actually do"
description: "A survey of copy protection apps: event suppression, CSS tricks, overlays and shortcut traps, each paired with the browser behaviour that undoes it."
cluster: "Why blockers don't work"
summary: "Behind every 'disable copying' app is a short list of browser techniques. Here is each one, what it really does, and the ordinary browser behaviour that walks straight past it."
pubDate: 2026-06-10
related: ["right-click-blockers-text-test", "scrapers-vs-storefront-scripts", "choosing-text-protection-shopify"]
---

The copy-protection category is crowded, but the crowd is deceptive. Underneath the varied listings and screenshots, these apps draw on the same short menu of browser techniques, because the browser only offers so many levers to pull. This article surveys the menu, technique by technique, without naming apps. If you want named, quoted, dated comparisons of specific products, that is what our [comparison section](/compare/) is for.

One framing note before the list. Every technique here is JavaScript or CSS delivered with the page and executed by the visitor's browser. That placement, inside an environment the visitor fully controls, is the shared weakness. The techniques differ only in which browser feature they lean on.

## Technique 1: cancelling the context menu

The app registers a handler for the `contextmenu` event and cancels it, so right-click produces nothing. This is the oldest trick in the category and the headline feature of many listings.

What undoes it: everything that does not involve the context menu, which is nearly everything. Keyboard copying, reader mode, view-source, the [store's own public feed](/learn/shopify-public-product-feed/), and disabling JavaScript. We published a [step-by-step test](/learn/right-click-blockers-text-test/) you can run in five minutes.

## Technique 2: suppressing selection and copy events

Handlers on `selectstart`, `copy` and `cut` cancel the events, so dragging across text selects nothing and Ctrl+C copies nothing. Some variants clear the clipboard or replace copied text with a warning message.

What undoes it: the text still arrived in the HTML, so view-source and saving the page produce it intact. Reader mode re-renders it outside the page's authority. Turning JavaScript off removes the handlers entirely. And because search engines must be able to read the text for the page to rank, the readable version is by definition always being served.

## Technique 3: CSS user-select

A stylesheet rule, `user-select: none`, tells the browser not to visually select the text. No script involved, which listings sometimes present as a strength.

What undoes it: it is a presentation hint, not an access control. The text sits in the DOM and the source untouched. Any reader mode, any saved HTML, any devtools panel shows it. A visitor can even override the rule with one line of their own CSS, since browsers let users restyle any page.

## Technique 4: transparent overlays

An invisible element is stretched over the content so that clicks and selections land on the overlay instead of the text beneath. More common for images, occasionally applied to text blocks.

What undoes it: the overlay changes what the mouse touches, not what the server sent. Source view, feeds and reader mode never interact with the overlay. In devtools, deleting one element removes the "protection" in a keystroke.

## Technique 5: keyboard shortcut interception

Scripts watch for Ctrl+C, Ctrl+U, Ctrl+S, F12 and friends, and cancel them, sometimes with a scolding popup. The aim is to close the doors the other techniques leave open.

What undoes it: browser menus reach the same functions without the shortcuts, and the `view-source:` URL prefix bypasses shortcut interception entirely. Shortcut traps also cannot see anything that happens outside the page, which includes the entire operating system. The hard ceiling on this idea is the subject of [things a browser cannot do](/learn/things-a-browser-cannot-do/).

## Technique 6: devtools detection and deterrents

Some apps try to detect open developer tools, then blank the page, break the layout or redirect. Others print console warnings.

What undoes it: detection heuristics are unreliable and browsers do not expose a genuine "devtools open" signal, so these tricks misfire both ways. A false positive blanks the page for an innocent visitor with a docked window or an unusual screen size. More fundamentally, a visitor who wants the text does not need devtools, as techniques 1 through 5 already showed.

## The summary table

| Technique | Layer | Defeated by |
| --- | --- | --- |
| Context menu cancel | JS event | Keyboard, reader mode, source, feed, JS off |
| Selection/copy suppression | JS event | Source view, reader mode, JS off |
| `user-select: none` | CSS | Source view, reader mode, user CSS |
| Transparent overlay | DOM | Source view, feed, element deletion |
| Shortcut interception | JS event | Menus, `view-source:`, JS off |
| Devtools deterrents | JS heuristics | Not needing devtools |

Two absences from this table matter more than anything in it. Scrapers do not appear, because [scrapers never execute storefront scripts](/learn/scrapers-vs-storefront-scripts/) and are untouched by all six techniques at once. And the public product feed does not appear, because no technique on this list runs there.

## The honest trade

What these apps deliver is friction for humans on the rendered storefront: mostly your customers, occasionally an unmotivated copier who will retype the paragraph or move on. What they cannot deliver is control over text the server has already handed out. That is not a criticism of any developer's competence. It is the browser working as designed, keeping pages inside their sandbox and users in charge of their own machines.

Kirpik sits on the other side of that trade. It runs no scripts on your storefront, adds no friction for anyone, and accepts that copying will happen. Instead, it embeds an algorithmic invisible watermark, derived from your original text signature, into the text itself, so any duplicate that surfaces elsewhere can be traced back to your store and [proven yours](/features/chain-of-proof/). Blockers try to stop the copying and fail. A watermark makes the stolen text testify.
