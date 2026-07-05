---
title: "What counts as proof when your copy is stolen"
description: "Hosts and marketplaces act on evidence, not indignation. What convinces an abuse team: publication timelines, content fingerprints and watermark provenance."
cluster: "Proof & enforcement"
summary: "Knowing the text is yours and demonstrating it to a stranger are different problems. Here is what abuse teams actually find convincing, ranked from weakest to strongest."
pubDate: 2026-06-20
related:
  - inside-chain-of-proof
  - dmca-for-stolen-text
  - wayback-machine-timeline-evidence
---

Here is the scene your evidence has to work in. An abuse analyst at a hosting company opens ticket number forty-something of the day. Two parties each claim a block of text is theirs. The analyst has a few minutes, no interest in the product being sold, and no way to know who is lying. Whatever you sent is all you are in that room.

Understanding that scene changes how you prepare. The goal is not to be right, you already are. The goal is to be verifiable by a busy stranger, quickly. Some kinds of evidence do that well, some barely at all, and it pays to know which is which before you need any of it.

A quick framing note: this is general information about evidence and takedown practice, not legal advice. For disputes with real money attached, involve a lawyer early.

## The weak end: "my page looks older"

The instinctive move is to point at your own site. The blog post shows a publication date. The product page has been up for two years. Surely that settles it.

It settles less than you would hope, for one simple reason: everything on your own site is under your own control. A page's displayed date is text you can edit. CMS timestamps can be changed by anyone with admin access. Even a sitemap date is self-declared. The analyst does not think you forged your dates, but they cannot know you did not, and the thief's page carries self-declared dates too. Two sites pointing at their own clocks is a stalemate.

Self-hosted evidence is not worthless. It is corroboration, useful once something independent anchors the timeline. It just cannot carry the argument alone.

## Better: independent timestamps

Evidence gains weight the moment its date is held by someone who is not you. The Internet Archive is the workhorse here: if the Wayback Machine captured your product page eighteen months ago and its earliest capture of the copycat page is from last month, that ordering comes from a neutral third party's records rather than from either side's say-so. [Using the Internet Archive to prove who published first](/learn/wayback-machine-timeline-evidence/) covers how captures work and their limits, the biggest being coverage: the Archive never promised to crawl every page, so absence of a snapshot proves nothing.

Other independent anchors exist in the same spirit: the infringing server's own HTTP headers can reveal when its page was last modified, and a Google cache date occasionally helps. Each is a small, checkable fact from a source neither party controls. Takedown arguments are built by stacking such facts.

## Better still: content fingerprints

A timeline says who published first. A fingerprint says exactly what was published. A content fingerprint, such as a SHA-256 hash, is a short value computed from a piece of text, with the property that even a one-word change produces a completely different result. Record a fingerprint at protection time and you can later demonstrate that the exact text in question, not a vague approximation of it, existed in your hands on a specific date.

Fingerprints have a sharp limitation, and it is worth being honest about: they only match identical text. A thief who trims two sentences has broken the exact match, and you are back to arguing similarity. That is why fingerprints work best as one layer in a stack, anchoring what your original was, while something else ties the modified copy back to you.

## The strong end: provenance instead of similarity

Everything above still argues from resemblance. These texts match, mine is older, therefore they copied me. It is a good argument, but it is inference, and a determined opponent argues with inference. Common phrases, shared suppliers, coincidence, "everyone describes this product that way".

Watermark detection changes the category of the claim. When your copy is protected with an invisible watermark that carries your store's unique code, and [detection](/features/detection/) recovers that watermark from the text on the thief's page, you are no longer saying "these look alike". You are saying "the text on their page is physically my text, and it says so". The copy itself testifies to where it came from. There is no innocent explanation for another store's copy carrying your signature, because independently written text does not contain it.

This is the difference between similarity and provenance, and abuse teams feel it immediately even without understanding the technology, because the claim is specific, checkable and hard to argue against. The detection reports how many security markers were recovered and a confidence figure, so the strength of the finding is itself documented rather than asserted.

## Assembling the stack

The strongest submission is not one killer exhibit but a short stack in which each layer covers another's weakness:

- **Provenance:** watermark detection tying the copied text to your store specifically.
- **Identity:** fingerprints of your original, fixing exactly what your text was at protection time.
- **Timeline:** your dated protection record, the infringing page's own headers, and the Internet Archive's earliest captures of both pages.
- **Corroboration:** your CMS records and screenshots, now useful because independent anchors back them.

Assembled by hand, that stack is an afternoon of work per infringement, which is precisely why most merchants never do it and most theft goes unchallenged. Kirpik generates it as a single document instead. The [Proof of Ownership Certificate](/features/chain-of-proof/) records your protection date and Protection Signature, the detection details with marker count and confidence, a side-by-side comparison of original and copy, and Wayback Machine timeline corroboration, all behind a QR code linking to a public verification page the analyst can check without trusting your PDF. [Inside a Proof of Ownership Certificate](/learn/inside-chain-of-proof/) walks through the sections one by one.

## Evidence is a decision you make in advance

The uncomfortable structural fact about all of this: the strongest layers cannot be created after the theft. A watermark proves nothing unless it was in the text before it was copied. A fingerprint dates your content only from the moment it was recorded. Independent snapshots of your pages exist only if something captured them early.

Merchants who prepare before anything goes wrong walk into ticket number forty-something holding provenance, fingerprints and a timeline. Merchants who start preparing after finding the copycat are holding "my page looks older". Kirpik exists to put you in the first group, and its free plan makes that decision cost nothing: protect your key descriptions now, and the day a copy surfaces, the proof is already made.
