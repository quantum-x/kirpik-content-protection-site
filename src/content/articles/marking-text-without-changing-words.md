---
title: "How Kirpik marks your text without changing a single word"
description: "Kirpik watermarks product descriptions, blog articles and pages without altering a single word. What stays identical, and why the method stays private."
cluster: "How invisible text watermarking works"
summary: "The claim sounds contradictory: a watermark in your text that changes nothing you wrote. What stays identical, what algorithmic means, why the method stays private, and why 20 words is the floor."
pubDate: 2026-05-27
related:
  - what-is-invisible-text-watermark
  - text-watermarks-and-seo
  - watermark-false-positives
---

On its face the claim contradicts itself. Kirpik asks for permission to write to your product descriptions, then promises that your product descriptions will not change. Both halves are true, but a merchant deserves the precise version rather than a reassuring one, so here it is: exactly what stays the same, what "algorithmic" means, and why the method itself is not published.

## The promise, stated exactly

Protect a product description and compare the text before with the text after. Every word is the same word. Every full stop, comma and apostrophe is where you left it. Headings, links, lists, bold and italics sit exactly as they did, and the paragraphs break where they broke. A shopper reads what you wrote. A search engine crawls what you wrote and finds no new markup and no added script. In the Shopify admin, you carry on editing your own writing; Kirpik never rewrites, shortens, restyles or "optimises" anything.

The protection is also reversible. Remove it from one item or from your whole catalogue and the content returns to exactly its prior state. None of this needs to be believed on trust: protect one item on your own store and run the comparison yourself.

## What algorithmic means

Kirpik's watermark is an algorithmic invisible watermark derived from your original text signature. Unpacked, that means a repeatable procedure takes your text and your store's unique watermark code as input and lays invisible markers through the content. The markers repeat along the length of the text with redundancy, which is why a trimmed or edited version still matches later. Detection is the same procedure run in reverse: it recovers the markers from a suspect text and names the store they belong to, with a count of the markers found and a Confidence figure.

It is equally useful to say what the watermark is not. It is not a badge or notice, not metadata stored beside the content, not zero-width characters hidden between letters, and not a fingerprint that exists only in a database. Those are all real techniques with well-known weaknesses, and Kirpik uses none of them. The mark is in the text, and only in the text.

## Why the method is not published

A fair reader now asks how, exactly, and the honest answer is that Kirpik does not say. The internals are not documented publicly, and detection runs only through Kirpik.

That is a security decision rather than evasiveness. An invisible watermark protects because two things hold at once: thieves cannot see it, and thieves do not know what to look for. A published specification preserves the first and surrenders the second, and with it a recipe for a stripping tool. The sensible comparison is a bank's fraud rules: real, effective and checkable by their results, but not printed in the annual report.

What replaces the specification is verifiability where it counts. Detections report recovered markers and Confidence rather than a bare yes or no, so the strength of any match is visible. A Proof of Ownership Certificate carries a QR code to a public verification page, so the company that hosts a thief's site, or a lawyer, can confirm the document is genuine without installing anything or taking your word for it.

## Why 20 words is the floor

Kirpik declines to protect text shorter than 20 words, and the reason explains a good deal about how the protection holds. The watermark's resilience comes from repetition. A thief who deletes a paragraph or trims the opening removes some repetitions of the mark, and detection succeeds as long as enough of them survive. Short text offers too little room to repeat in. Below 20 words there is no meaningful redundancy, so Kirpik refuses rather than sell protection it cannot stand behind. Between 20 and 30 words the app shows a limited-redundancy warning, and from around 45 words the mark repeats with comfortable margin.

The floor rarely bites in practice. Any description that does real selling runs past 45 words, and blog articles and pages clear it many times over.

The whole promise fits a five-minute test: protect one description, read the live page beside your draft, then paste the protected text into Kirpik's detection and watch it name your store. [How Kirpik works](/how-it-works/) walks the full loop from protection to certificate, and the free plan covers the experiment.
