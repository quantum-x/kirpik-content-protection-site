---
title: "What counts as proof when your text is stolen"
description: "Hosting companies and marketplaces respond to evidence they can check. What convinces an abuse team: independent dates, fingerprints and watermark provenance."
cluster: "Proof & enforcement"
summary: "Abuse teams decide on what they can check, not on who sounds certain. The evidence that persuades them, ranked from self-declared dates up to watermark provenance."
pubDate: 2026-06-20
related:
  - inside-chain-of-proof
  - dmca-for-stolen-text
  - wayback-machine-timeline-evidence
---

The decision about your stolen content will be made by a stranger with a queue. An analyst at a hosting company or marketplace opens your complaint between dozens of others, knows nothing about your store, and has no way of telling which of two parties claiming the same text is honest. Whatever you attached is the entire case. That framing should change how you prepare: the goal is not to be right, which you already are, but to be checkable by a busy stranger in the few minutes you get. Some evidence achieves that and some does not, and the ranking below runs from weakest to strongest. A note before it: this is general information about evidence and takedown practice, not legal advice; where real money is at stake, involve a lawyer early.

## Why your own site cannot carry the case

The instinctive move is to point at your own pages. The blog article displays a publication date; the product page has been live for two years. It settles less than you would hope, because everything on your own site is under your own control. A displayed date is text anyone with admin access can edit, and system timestamps are no different. The analyst does not assume you forged anything, but they cannot know you did not, and the thief's page displays self-declared dates of its own. Two sites pointing at their own clocks is a stalemate. Evidence you host still has a place, as corroboration, once something independent has anchored the timeline; it simply cannot anchor it alone.

## Independent dates and exact content

Evidence gains weight the moment its date is held by someone who is not you. The Internet Archive is the usual anchor: if the Wayback Machine captured your product page long before its earliest capture of the copying page, that ordering comes from a neutral archive's records rather than from either side. The infringing server contributes against its own cause too, since its HTTP headers can state when its page last changed. Each of these is a small, checkable fact from a source neither party controls, and takedown arguments are built by stacking such facts.

Fingerprints add precision about the content itself. A content fingerprint, such as a SHA-256 hash, is a short value computed from a piece of text, and changing a single word produces a completely different value. Recorded at protection time, a fingerprint demonstrates that this exact text existed in your hands on a specific date. Its limitation is equally sharp: it matches only identical text, so a thief who trims two sentences breaks the match and returns the argument to similarity. Fingerprints fix what your original was; something else has to tie the altered version back to you.

## Provenance beats resemblance

Everything so far argues from resemblance: the texts match, mine came first, so they copied me. It is a fair inference, and inference can be argued with. Shared suppliers, standard phrasing, coincidence.

Watermark detection changes the category of the claim. When content protected by Kirpik surfaces on another site and detection recovers the watermark carrying your store's unique code, you are no longer saying the texts look alike. You are saying the text on their page is your text, and the text itself says so, because independently written content does not carry your store's watermark. The detection reports how many Watermark Security Markers were recovered and a Confidence figure, so even the strength of the finding is documented rather than asserted. Abuse teams respond to this kind of claim, whatever they know about the technology, because it is specific and easy to check.

The strongest submission stacks the layers so that each covers another's weakness:

- Provenance: watermark detection tying the stolen text to your store specifically.
- Identity: a fingerprint fixing exactly what your original was at protection time.
- Timeline: your protection date, the infringing page's own headers, and the Archive's earliest captures of both pages.
- Corroboration: your admin records and screenshots, useful now that independent anchors support them.

## Evidence is a decision made in advance

The structural fact underneath the ranking: the strongest layers cannot be created after the theft. A watermark proves nothing unless it was in the text before the text was taken. A fingerprint dates content only from the moment it was recorded. The merchant who prepared walks into the analyst's queue holding provenance, identity and a timeline; the merchant who did not is holding "my page looks older".

Kirpik exists to put you in the first group, and it assembles the whole stack as one document: the [Proof of Ownership Certificate](/features/chain-of-proof/) records your protection date and Protection Signature, the detection with its markers and Confidence, a side-by-side view of the original against the altered text, and Wayback Machine corroboration, behind a QR code to a public verification page, evidence an abuse team can act on without trusting your PDF. Protect the content that matters before anything happens to it, and the day a stolen version surfaces, the proof already exists.
