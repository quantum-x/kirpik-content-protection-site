---
title: "Using the Internet Archive to prove who published first"
description: "How Wayback Machine snapshots work as timeline evidence, how to find the earliest capture of a page, and the honest limits of archive records in a dispute."
cluster: "Proof & enforcement"
summary: "Both sides of a theft dispute point at their own dates. The Internet Archive holds dates neither side controls: how snapshots work, how to use them, and their limits."
pubDate: 2026-06-28
related:
  - proving-text-ownership
  - inside-chain-of-proof
  - dmca-for-stolen-text
---

A theft dispute over text usually reduces to two websites pointing at their own dates, and a date on your own website is a date you could have typed there. Nothing self-declared settles anything. What the argument needs is a record keeper with no stake in the outcome, and for most of the public web that is the Internet Archive: its Wayback Machine has stored snapshots of pages since 1996, billions of them, each timestamped on arrival by the Archive's own systems. When those records show your page carrying the disputed text months before the copying page first appears, the ordering comes from a neutral third party, and that is what gives it weight with the people who process takedowns.

## How Wayback Machine snapshots work

A snapshot is a stored capture of a page as the Archive's crawler received it at one specific moment, filed under the page's URL and a precise timestamp. Look up any address at web.archive.org and you get a calendar of every capture on record, and each capture opens as the page looked on that day.

Two properties turn stored pages into usable evidence. First, the timestamp is assigned by the Archive when its crawler fetches the page, so neither you nor the thief can backdate one. Second, a snapshot preserves content, not just existence: a capture of your product page contains the description itself, so you can show not merely that your page was live in March, but that it already contained the exact text now sitting on someone else's store.

## Building the timeline for a dispute

The capture that matters is the earliest one, on both sides. The earliest capture of your page containing the disputed text establishes your position; the earliest capture of the infringing page shows it appearing after your original was already on record. The calendar view gets you there by paging back to the first recorded year, and the Archive also maintains a searchable index of every capture it holds for a URL, which is the systematic way to establish first-seen. Run the same lookup on the infringing URL and you also learn roughly how long the stolen page has been live, useful context for a takedown notice.

All of it depends on a capture existing, which is the lesson merchants tend to learn too late. The Archive crawls at its own discretion: well-linked pages get captured often, while a product page on a modest store may be captured rarely or never. You do not have to wait to be noticed. The Save Page Now feature lets anyone request an immediate capture of a URL, free. When you publish or substantially rewrite an important description, buying guide or page, spend the extra half minute saving a snapshot: it banks a third-party timestamp of your text on the day it went live, against a dispute you hope never to have.

## The limits of archive evidence

Archive records appear in real disputes and hold up well, but treat them as one layer of a case rather than the whole of it:

- Coverage is incomplete. A missing snapshot proves nothing about when a page existed, in either direction.
- The earliest capture is a ceiling, not a birthday. A first capture in November shows the page existed by November; it may have been live long before.
- Captures can be imperfect. Pages that depend on scripts to render sometimes archive incompletely, so check what a snapshot actually preserved before citing it.
- Availability can change. Exclusion requests and site changes can make captures for some domains unavailable later.

There is a deeper limit as well. A timeline establishes order: your text was public before their page appeared. It cannot establish provenance, meaning that the text on their page is your text rather than a lookalike. The persuasive case pairs the neutral timeline with evidence tying the stolen text directly to your store, which is the work a watermark does.

Kirpik builds the pairing for you. When you generate a [Proof of Ownership Certificate](/features/chain-of-proof/) from a detection, Kirpik checks the Internet Archive's records and folds the earliest relevant snapshot into the document, next to your protection date, the content fingerprints and the detection itself. The lookup you would have done calendar by calendar arrives already done and already cited.
