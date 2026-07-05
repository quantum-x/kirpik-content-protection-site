---
title: "Right-click blockers don't protect text. Run the test yourself"
description: "A right-click blocker is one JavaScript event handler. Five checks anyone can run in five minutes show what it stops, what it misses and who pays for it."
cluster: "Why blockers don't work"
summary: "Whether right-click blocking protects text is a testable claim. Five checks, five minutes, any store that runs one. The results do not vary."
pubDate: 2026-06-02
related: ["shopify-public-product-feed", "copy-paste-protection-apps", "things-a-browser-cannot-do"]
---

Whether a right-click blocker protects your text is not a matter of opinion. It is a claim you can test in five minutes, on any store that runs one, with nothing but the browser you already use. This article gives you the test. Run it on your own store if you have a blocker installed, and on any store whose listing persuaded you.

## What a right-click blocker is

Browsers tell a page when the visitor presses the right mouse button, and they allow the page to ask for the resulting menu to be suppressed. A right-click blocker is a script that asks, every time. The same mechanism covers the related features these apps bundle: a request to ignore text selection, a request to swallow certain keyboard shortcuts. Each one is a request the browser honours only while the page is open and its scripts are running. The listings describe layers of protection, but each layer is another request of the same kind, granted on the same terms.

Both of those terms belong to the visitor. The browser works for the person at the keyboard, not for the page, and it provides several ordinary ways to read a page without granting its scripts anything. None of them is a hack, and none takes longer than a few seconds. Nothing in the mechanism distinguishes a thief from a customer, either: the request is made to whoever visits, and honoured only by browsers configured to obey it.

## The test, in five steps

Open a product page on the store in question and work through the list.

- Switch the browser to reader mode, offered in or near the address bar in most browsers. The description appears as plain text, fully selectable, with the blocker gone.
- View the page source with Ctrl+U or the browser menu. Every word of the description is present as text, because the source is what the browser was sent.
- Turn JavaScript off for the site in the browser settings and reload. The blocker is JavaScript, so it never loads. The text loads without it.
- Print the page to a PDF with Ctrl+P. The result is a file containing the description as selectable text, outside the page's reach.
- Add `/products.json` to the store's address. The full catalogue returns as structured data, descriptions included, with no page involved at all. This last check matters most, because it is [the route bulk copying actually takes](/learn/shopify-public-product-feed/).

Five checks, no tools, no expertise. A protection measure that fails all five is not being defeated by specialists. It is being walked past by default browser features.

Record what you find, because the result generalises. These checks fail for every store and every blocker, since they exercise browser features the page is never consulted about. The test does not defeat a particular app. It demonstrates the category. And if a listing told you otherwise, you now hold direct evidence of how much weight its remaining claims deserve.

## Who the blocker does stop

The only people certain to run the blocker's script are the visitors who open the page normally and change nothing: your customers. They are the ones who cannot copy your address into a delivery note, cannot copy a product name to search for a review, and cannot use translation or accessibility tools that depend on selecting text, and the store gains a support conversation whenever one of them concludes the site is broken. Scrapers never execute the script, and anyone deliberate spends the five seconds reader mode costs. The friction lands entirely on the people you want on the site; the specific apps making these claims are examined, with their listings quoted and dated, in our [comparison section](/compare/).

If your own store runs a blocker, the test doubles as an exit review. Uninstalling costs no protection, because the copying that matters happens in the feeds the blocker never touched, and removal returns the ordinary browser behaviours your customers had silently lost.

Kirpik sits on the other side of this trade. It adds no scripts to your storefront and asks nothing of your visitors: the protection is an invisible watermark inside the text, so a description remains identifiable and provable after it is copied, whatever route it left by. [How it works](/how-it-works/) covers the three steps.
