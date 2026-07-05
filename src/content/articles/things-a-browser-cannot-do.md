---
title: "Screenshot blocking and other things a browser cannot do"
description: "Screenshot prevention, print-screen traps, devtools blocking, view-source hiding: why the browser security model makes each one impossible for a web page."
cluster: "Why blockers don't work"
summary: "Some protection claims are not weak, they are impossible. A calm tour of what the browser security model permits a web page to do, and the popular promises that fall outside it."
pubDate: 2026-06-30
related: ["right-click-blockers-text-test", "copy-paste-protection-apps", "what-is-invisible-text-watermark"]
---

Most copy-protection features are weak but real: they do something, just not much. This article is about a different category, the features that are not possible at all. Screenshot blocking, print-screen interception, devtools prevention and view-source hiding get promised with straight faces, and a web page can deliver none of them. Not with clever code, not with the right app, not next year. The reasons live in the browser's security model, and they are worth ten minutes to understand, because they permanently sort real protection claims from decorative ones.

## The model: a page is a guest

A web page is untrusted code from a stranger, and browsers treat it accordingly. Every page runs inside a sandbox with a deliberately short list of capabilities: render content, respond to input directed at the page, make network requests under restrictions, store a little data. The list is short by design, because the browser's first job is protecting the person at the keyboard from the page, never the other way round.

Everything a page learns about the outside world is information the browser chooses to pass in. Everything a page does happens through APIs the browser chooses to expose. Where no API exists, no app can act, whatever its listing says. With that model in hand, the impossible features explain themselves.

## Screenshots: the OS owns the screen

When a visitor presses Win+Shift+S or Cmd+Shift+4, the operating system's own capture tool reads the screen's pixels. This happens entirely outside the browser. No event is delivered to the page, no API announces it, and the page has no way to know a capture occurred, let alone veto it. The same applies to capture from another application, a phone camera pointed at the monitor, or a video call sharing the screen.

The pixels on the display belong to the operating system, which composited them there. A web page supplied some content for one window and has no further standing. Any script claiming to block screenshots is claiming authority over hardware and OS functions that were never delegated to it.

## Print-screen traps: watching the wrong door

Some scripts listen for the PrintScreen key, then clear the clipboard or flash a warning. Two facts sink this. Key events reach a page only when it has focus, and the OS capture shortcuts are typically handled by the system before or instead of the page. And modern snipping tools do not travel through the page's keyboard events at all. At best, the trap catches one legacy key on one platform in one focused window, which is to say it catches approximately nobody. Screen recording, of course, involves no key press whatsoever.

## Devtools blocking: the inspector belongs to the user

Developer tools are part of the browser's own interface, on the trusted side of the sandbox boundary, exactly like the address bar and the bookmarks menu. Pages cannot detect them reliably, cannot disable them, and cannot tell the browser to refuse to open them. The tricks that try, timing checks, window-size heuristics, debugger statements in loops, are guesses that misfire on ordinary visitors and are shrugged off by anyone who actually opens the inspector. A browser that let pages disable inspection would be a browser nobody could trust, which is why no vendor builds one.

## View-source hiding: the source is the page

The HTML source is not a secret behind the page. It is the page: the document your server transmitted, which the browser kept and will show to its user on request. Hiding it from the visitor while showing it to the browser is a contradiction, since the browser is acting for the visitor. Scripts can intercept the Ctrl+U shortcut inside a focused page, but `view-source:` in the address bar, saving the file, or fetching the URL with any [HTTP client outside the browser](/learn/scrapers-vs-storefront-scripts/) reads the same bytes without asking the page's permission. For text, this is decisive: your descriptions are in that document, and on Shopify they are additionally in [feeds that never render a page at all](/learn/shopify-public-product-feed/).

## Why the impossible keeps getting promised

The features that are possible, cancelling menus and suppressing selection events, are unimpressive once [tested](/learn/right-click-blockers-text-test/), so the marketing gravitates toward stronger words. "Prevents screenshots" sells better than "cancels a menu that has four other equivalents". The claims survive because few merchants have a reason to know where the sandbox boundary sits, and because the features fail silently: nobody sees the screenshots that were taken anyway.

The boundary is worth internalising in one sentence. A page may decorate its own sandbox however it likes, and may not reach outside it, and the screen, the clipboard manager, the OS, the browser chrome and the source document are all outside it.

## Building on what is actually possible

Accepting the boundary is clarifying rather than defeatist. Displayed text can always be captured, so protection that depends on preventing capture is ruled out from the start, and effort moves to the approach the model does permit: making the text itself carry evidence of its origin. That needs no authority over the visitor's machine, which is precisely why it works.

This is Kirpik's territory. An algorithmic invisible watermark, derived from your original text signature, travels inside your copy wherever it is pasted or scraped, and detection ties any copy back to your store. Honesty about limits applies here too: someone who retypes your paragraph from a screenshot, or rewrites it outright, is beyond any text-borne mark, and we say so plainly. But thieves copy because copying is free, and the copies are what turn up on other stores. What an invisible text watermark is, and why it holds where blockers cannot, is covered in [the watermarking explainer](/features/invisible-text-watermarking/).
