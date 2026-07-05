---
title: "Getting stolen copy removed from Google's index"
description: "How Google's DMCA removal process works for search results: filing the request, timelines, what deindexing achieves, and pairing it with host takedowns."
cluster: "Proof & enforcement"
summary: "When a host will not act, or a copycat is stealing your search traffic right now, Google's own removal process is the lever. How it works, what to expect, and what it cannot do."
pubDate: 2026-07-02
related:
  - dmca-for-stolen-text
  - proving-text-ownership
  - inside-chain-of-proof
---

There are two distinct fights over a page of stolen copy. One is getting the page taken off the internet, which runs through whoever hosts it. The other is getting it out of search results, which runs through the search engine, and for most stores this second fight is the one with money on the line. A copycat page nobody can find in Google might as well not exist, whatever server it lives on.

Google accepts copyright removal requests against search results, processes them at industrial scale, and does not care where the infringing site is hosted. That combination makes deindexing one of the sharpest tools available to a merchant, and one of the least used, mostly because people do not realise it exists. Here is how it works.

The usual caveat applies: this is general information about a process, not legal advice, and removal requests carry legal statements you should make honestly. When in doubt, ask a lawyer.

## What Google's removal process is

Google operates a copyright removal system under the DMCA's provisions for information location tools. In plain terms: search engines that point users to material can be notified of infringement in the same manner as hosts, and Google honours valid notices by removing the reported URLs from its search results. You file through Google's legal removals tool, the same reporting flow linked from its search help pages, choosing the copyright option for Google Search.

The request looks a lot like [a DMCA notice to a host](/learn/dmca-for-stolen-text/), because legally it is the same instrument aimed at a different service. You identify your original work with URLs, list the infringing URLs you want removed from results, provide your contact details, and make the standard statements: good-faith belief the use is unauthorised, accuracy of the notice, and your authority over the work, signed under penalty of perjury.

Two practical notes on filling it well. Be precise with URLs: Google removes the specific pages you report, so report every infringing page, not just the copycat's homepage. And make ownership easy to verify: a dated [Chain of Proof certificate](/features/chain-of-proof/) with its public verification link gives the reviewer a way to confirm your claim in a minute, which is a courtesy the queue rewards. [What counts as proof when your copy is stolen](/learn/proving-text-ownership/) explains why verifiable beats emphatic.

## What deindexing achieves

When Google approves the request, the reported URLs stop appearing in its search results. The consequences for a copycat are severe and immediate:

- The stolen page loses its Google search traffic, which for most parasite stores is most of their traffic.
- Your original no longer competes with a duplicate of itself for your own keywords. If the thief had been outranking you with your own words, that ends.
- The duplicate-content muddle that stolen copy creates in search, covered in [what stolen copy does to your search rankings](/learn/stolen-copy-seo-damage/), gets cleaned at the source Google actually consults: its own index.

Notice what makes this route special: jurisdiction stops mattering. A host in a country that shrugs at notices can keep the page online, but it cannot keep the page in Google. For infringing sites hosted somewhere unreachable, deindexing is often the decisive move rather than the fallback.

## What deindexing does not achieve

Honesty about the limits keeps expectations straight:

- **The page stays online.** Deindexing removes pointers, not the page. Anyone with the direct link still reaches it, and it can still be found through other channels.
- **Other search engines are separate.** A Google removal binds Google. Bing runs its own equivalent process, and filing there too is worth the extra minutes for complete coverage.
- **It is per-URL, not per-thief.** If the copycat republishes your text at a new URL, that URL needs its own report. Persistent offenders sometimes require a few rounds.
- **It is public.** Removal notices are typically forwarded to the Lumen database, where anyone can read them. This is normal, and the transparency cuts both ways: the paper trail of upheld removals against a domain is itself a record of the thief's behaviour.
- **The site owner can push back.** The affected site is notified and can file a counter-notice through Google, in which case the URLs can be restored unless you escalate legally. As with host takedowns, counter-notices to clear-cut theft are rare, and rarer still against solid evidence.

## Timelines: what to expect

Google's copyright queue moves quickly by legal-process standards, slowly by refund-request standards. Straightforward, well-documented requests are commonly resolved within days, sometimes hours. Requests with vague ownership claims, mismatched URLs or missing statements get bounced back with questions, which can stretch the affair into weeks. The single best predictor of a fast outcome is a clean filing: exact URLs, exact statements, and ownership evidence the reviewer can check rather than weigh.

While a request is pending, resist the temptation to keep editing the infringing site's presentation in your head. File it completely, note the date, and give the process its days before following up.

## One more tool: your own Search Console

Google Search Console will not remove someone else's content, its removal tools govern only properties you have verified as yours. But it earns a mention for the adjacent case: once a host takedown succeeds and the infringing page starts returning errors, Google's Refresh Outdated Content tool lets you nudge the dead page's lingering search entry out of the index faster than natural recrawling would. It is the mop-up step after a successful takedown elsewhere.

## Pairing deindexing with the host takedown

The two fights work best fought together, because each covers the other's gap. The host takedown kills the page but depends on a cooperative host. Deindexing works regardless of the host but leaves the page alive. Run in parallel, they leave a copycat with a page that either no longer exists or can no longer be found, and every path between them is covered.

The sequence that works in practice: capture evidence first, generate your certificate, file with the host and with Google in the same sitting, then use Search Console's refresh tool once the page dies. The [enforcement guide](/enforcement/) lays this out as a single workflow.

All of it stands on the same foundation: being able to prove, quickly and checkably, that the text is yours. That is the part Kirpik automates, from the watermark that [travels inside every stolen copy](/learn/why-watermarks-survive-copying/) to the dated certificate both reviewers can verify. If you have found the copycat but not yet the proof, [start by checking their page](/site-check/).
