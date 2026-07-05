---
title: "Screenshot blocking and other things a browser cannot do"
description: "No web page can block screenshots, hide its source or disable developer tools. The browser security model explains why, and it sorts app claims fast."
cluster: "Why blockers don't work"
summary: "Some protection features are not weak but impossible. What the browser security model lets a page do, the popular promises that fall outside it, and how to use the difference when reading app listings."
pubDate: 2026-06-30
related: ["right-click-blockers-text-test", "copy-paste-protection-apps", "what-is-invisible-text-watermark"]
---

Protection features come in two kinds. Most are weak: they do something, briefly, to some visitors. A smaller set is impossible: no web page can deliver them, with any code, from any vendor. Screenshot blocking, view-source hiding and developer-tools prevention all sit in the second set. The reason is the browser's security model, and it takes five minutes to understand. Those five minutes let you sort any protection claim you meet.

## The browser treats every page as untrusted

A web page is a program written by a stranger, and the browser runs it on that basis. Each page operates inside a sealed compartment with a short list of permissions: draw content, respond to input aimed at the page, make limited network requests, store a little data. Everything else, the screen, the operating system, the other tabs, the browser's own controls, is off limits by design. The compartment ends at the tab's edge: a page knows nothing about the visitor's files, the other software running, or what the operating system is doing, including capturing the screen. The browser's first duty is to protect the person at the keyboard from the page, and it never delegates authority over that person's machine to the page.

This is not a gap waiting for a cleverer app. It is the arrangement that makes the web usable at all, and every browser maker enforces it. Any protection claim that requires the page to control the visitor's computer is therefore false before the details are examined. The limitation is a property of browsers, not a defect of any particular app.

## The impossible list

Screenshot blocking. A screenshot is taken by the operating system, outside the browser, in territory no page can observe or veto. A page script can notice the PrintScreen key while its own tab holds focus, which is why some apps claim capture prevention, but noticing a key is not preventing a capture: the screenshot happens regardless, and system shortcuts, capture tools and a phone camera pointed at the screen never touch the page at all. No web page anywhere prevents a screenshot.

View-source hiding. To display your page, the browser must receive its complete source, and the browser shows the visitor whatever it has received. That is what Ctrl+U displays. Scrambling the source changes its appearance, not its availability, and the readable text must still be present for customers to read. Anything a browser can display, its user can save. Scrambling is also self-defeating in a second way: search engines read the same delivered text, and obscuring it risks obscuring the page from the crawlers that rank it.

Developer-tools blocking. The developer tools belong to the browser, not to the page, and a page cannot disable its host. Scripts can lay traps that make inspection tedious, and every trap is dismissed from inside the same tools it tries to block, or ended wholesale by switching the site's JavaScript off.

Beneath all three runs the same fact: by the time any page script executes, the visitor's machine already holds the complete text. Protection that begins after delivery is negotiation, and [scrapers do not negotiate](/learn/scrapers-vs-storefront-scripts/).

## Reading app listings with this in hand

The impossible list makes a fast screening tool. When a listing promises screen-capture prevention or view-source blocking, you now know that promise cannot be kept by any web page; its other claims warrant the same scrutiny. The general rule: a claim that requires controlling the visitor's machine is impossible, whatever the listing says, and a claim that only requires interfering with the page while it is open is possible, weak, and paid for in customer friction. The claims that remain, menu suppression and selection blocking among them, are possible and merely ineffective, as [the survey of copy-paste protection techniques](/learn/copy-paste-protection-apps/) shows check by check.

The same test clarifies what real text protection has to look like. It cannot operate in the visitor's browser, because the browser answers to the visitor. Kirpik operates in the text instead: an invisible watermark embedded in your descriptions, articles and pages, adding no scripts to the storefront, so that copied text stays identifiable and provable no matter what the copier's browser, or camera, was doing. The claims of every app in the category are examined against their listings in our [comparison section](/compare/).
