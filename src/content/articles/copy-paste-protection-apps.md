---
title: "What copy-paste protection apps actually do"
description: "Copy-paste protection apps rely on four browser techniques. What each one does, the browser behaviour that undoes it, and what running one costs you."
cluster: "Why blockers don't work"
summary: "Every app in the copy-paste protection category is built from the same four browser techniques. This article sets out each technique, the ordinary behaviour that defeats it, and the cost of running it."
pubDate: 2026-06-10
related: ["right-click-blockers-text-test", "scrapers-vs-storefront-scripts", "choosing-text-protection-shopify"]
---

The copy-paste protection category looks varied from the App Store, and is uniform underneath. A browser offers a page only a few levers for interfering with copying, so every app in the category is assembled from the same four techniques. This article describes the techniques without naming apps; the named apps, with their listings quoted and dated, are compared one by one in our [comparison section](/compare/).

The techniques share one property before they differ in anything. Each is JavaScript or CSS delivered with the page and executed, or not, by the visitor's browser. The visitor's machine is where they live and the visitor's settings are what they answer to.

## The four techniques

Cancelling the context menu. The browser lets a page ask for the right-click menu to be suppressed, and the script asks on every click. The menu is one route to copying among several. Reader mode, the page source and the browser's own Edit menu carry the same text, and the [five-step test](/learn/right-click-blockers-text-test/) walks past this technique twice without noticing it.

Blocking selection. A CSS rule tells the browser not to show text as selectable, or a script clears the selection as fast as the visitor makes it. The text itself is untouched and fully present in the page. Reader mode ignores the rule, the page source never had it, and printing to PDF produces selectable text again.

Trapping keyboard shortcuts. A script listens for Ctrl+C, Ctrl+U, Ctrl+P or F12 and swallows them. The script can only hear keys pressed while its own tab has focus, and every one of those shortcuts has a menu equivalent the page cannot touch. The browser's toolbar performs the same actions the shortcuts do.

Discouraging developer tools. Scripts detect a resized window or trigger debugger interruptions to make inspection annoying. By the time any of this runs, the browser has already received the complete text, and switching JavaScript off for the site ends the annoyance along with the app.

There is a fifth item worth naming that is not a technique but a hope: several listings promise screenshot or screen-capture prevention, which no web page can perform at all. That claim belongs to [the list of things a browser cannot do](/learn/things-a-browser-cannot-do/).

## What all four have in common

None of the four touches the copying that costs merchants money. Bulk copying reads [Shopify's public feeds](/learn/shopify-public-product-feed/), which serve full descriptions with no page and no scripts, and which no app can close. Scrapers that do fetch pages never execute what they fetch. The four techniques apply only to a human, in a normal browser, with JavaScript on, who does not know about reader mode. That is a description of your customers.

Which is the second common property: the costs land on paying visitors. Selection blocking breaks translation tools, note-taking and some accessibility software. Shortcut traps break habits visitors do not know they have until the page fights them. Every visitor pays this toll on every visit, and the people the apps are aimed at never encounter it. An app in this category can be working exactly as designed and still deliver friction to customers and nothing to you.

## A fair test before you pay

The category is cheap, and cheap invites the thought that it cannot hurt. Run the arithmetic the other way: the apps cost little because they do little, and the real price is paid in customer friction rather than subscription fees. Before paying for any of them, test the claims on a store that runs the app, using reader mode, the page source and the store's own `/products.json`. Check them in that order: reader mode is one keystroke, the page source is another, and the feed is the route no app touches at all. Every claim in the category fails at least one of the three checks, and most fail all of them.

Kirpik is not part of this category and does not compete with it. It adds no scripts to a storefront, so it runs alongside any blocker without conflict, and it works after the copying that blockers cannot stop: the invisible watermark inside your text lets you identify and certify stolen content wherever you find it. The Free plan protects 25 products, so the approach [can be tried without spending anything](/pricing/).
