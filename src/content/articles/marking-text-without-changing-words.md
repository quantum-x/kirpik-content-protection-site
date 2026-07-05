---
title: "How Kirpik marks your copy without changing a single word"
description: "Kirpik watermarks your descriptions without altering anything you or a search engine reads. What algorithmic protection means and why there is no public spec."
cluster: "How invisible text watermarking works"
summary: "Kirpik's promise sounds impossible: a watermark in your text that changes nothing you wrote. Here is what that promise means precisely, what algorithmic means in practice, and why the internals stay private."
pubDate: 2026-05-27
related:
  - what-is-invisible-text-watermark
  - text-watermarks-and-seo
  - watermark-false-positives
---

Merchants are right to be suspicious of this claim. A tool asks for permission to write to your product descriptions, then promises your product descriptions will not change. Both halves sound true only if one of them is doing some quiet redefinition.

Neither is. But the claim deserves a precise explanation rather than a wink, so this article gives it one: what exactly stays the same, what "algorithmic" means here, and why Kirpik deliberately does not publish how the watermark works.

## The promise, stated exactly

Protect a product description with Kirpik and compare what you read before with what you read after. They are identical. Every word is the same word. Every full stop, comma and apostrophe is where you left it. Headings, bold, italics, links, lists and images sit exactly as they did. The reading order, the paragraph breaks, the layout: unchanged.

The same holds for every audience that matters:

- A shopper reading the page sees your copy exactly as you wrote it.
- A search engine crawling the page reads the same words in the same order and finds no new markup, no added script, and no difference between what it is served and what visitors see. [Invisible watermarks and SEO](/learn/text-watermarks-and-seo/) walks through the SEO case in full.
- You, editing in the Shopify admin, keep working on your own writing. Kirpik never rewrites, shortens, restyles or "optimises" anything.

And the change is reversible. Remove protection from an item and it returns to exactly its prior state, which you can verify yourself on your own store any time you like.

## So where is the watermark?

Inside the content, woven through the way it is stored, and derived from the text you wrote. Kirpik computes an algorithmic signature from your original content, combines it with your store's unique watermark code, and embeds the result invisibly through the text. The signature repeats along the length of the copy with built-in redundancy, which is why edited and trimmed copies still match later.

"Algorithmic" is doing real work in that sentence, so it is worth unpacking. It means the watermark is not a hidden message a human typed in, not a badge, not metadata bolted alongside the file, and not a record that only exists in Kirpik's database. It is produced by a repeatable procedure that takes your text and your watermark code as input, and it can be read back out by the matching procedure at [detection](/features/detection/) time. The same procedure that puts the signature in is the mirror of the one that finds it in a thief's copy, which is what makes a match specific to your store rather than a vague similarity score.

If you want the one-line version for a sceptical colleague: the watermark is real, it is genuinely present in every protected copy, and it lives below the level of anything a person or a crawler reads as writing.

## Why there is no public spec

At this point a fair reader asks the obvious question: fine, but how, exactly? And here is the honest answer. We do not publish the internals, and detection runs only through Kirpik.

That is a security decision, not a marketing one. An invisible watermark's protection comes from two properties working together: thieves cannot see it, and thieves do not know what to look for. Publish a specification and you keep the first property but hand over the second, along with a recipe for a stripping tool. Every watermarking system that guards text on the open web faces the same trade-off, and the defensible choice is the same one banks make about fraud detection rules: the system is real, its outputs are verifiable, and its internals are not documentation for attackers.

What you get instead of a spec is verifiability where it counts. Detection results come with a recovered marker count and a confidence figure rather than a bare yes or no, so you can see how strong a match is. [How sure is a match?](/learn/watermark-false-positives/) explains how those numbers guard against false positives. And a Chain of Proof certificate carries a QR code to a public verification page, so a host or a lawyer can confirm a certificate is genuine without installing anything or taking your word for it.

## Why length matters: the 20-word floor

Kirpik will not protect text shorter than 20 words, and it is worth understanding why, because the reason says a lot about how the protection works.

The signature repeats through your content. Repetition is the whole defence: a thief who deletes a paragraph, trims the opening or reorders sections is removing some copies of the signature, and detection succeeds as long as enough survive. Short text gives the signature fewer places to repeat. Below 20 words there is simply not enough room for meaningful redundancy, so Kirpik declines to protect it rather than offer protection it cannot stand behind. Between 20 and 30 words you will see a limited-redundancy warning, and from around 45 words the signature has comfortable room to repeat several times over.

In practice this is rarely a constraint. A product description that sells anything is longer than 45 words, and blog articles and pages clear the floor by an order of magnitude. But if you have ever wondered why a two-line description is not protectable, that is the reason: honesty about redundancy, not an arbitrary rule.

## The before-and-after test you can run

None of this asks for trust. Protect one product on your own store, then check it yourself. Read the live page next to your original draft. View the rendered storefront in another browser. Run the page through a speed test and confirm nothing new loads, because Kirpik adds no script, embed or tag to your theme. Then copy your own protected description, paste it into Kirpik's detector, and watch it identify your store with a marker count and confidence figure attached.

That loop, unchanged text going in and a specific verifiable match coming out, is the entire product in miniature. [What is an invisible text watermark?](/learn/what-is-invisible-text-watermark/) covers the concept from first principles if you want the wider picture.

The short version to keep: Kirpik changes nothing you wrote, nothing a shopper reads and nothing a search engine ranks. It adds one thing only, a signature no thief knows to look for, and with a free plan there is nothing stopping you [testing it on your own store](/site-check/) this afternoon.
