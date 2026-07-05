---
title: "How sure is a match? False positives, explained"
description: "How Kirpik's detector avoids crying wolf: repeated markers, majority agreement and an integrity check, for roughly a 1-in-65,000 per-page false positive rate."
cluster: "How invisible text watermarking works"
summary: "A detector that accuses innocent pages is worse than no detector at all. Here is how Kirpik decides a match is real, and why it reports marker counts and confidence instead of a bare yes or no."
pubDate: 2026-06-08
related:
  - why-watermarks-survive-copying
  - inside-chain-of-proof
  - marking-text-without-changing-words
---

Imagine the worst version of this product. You paste a competitor's page into a detector, it flashes "MATCH", and you fire off a furious takedown notice. Then it turns out the detector was guessing, the competitor wrote their own text, and you have accused an innocent business in writing.

A false positive in content protection is not a minor bug. It is the failure mode that destroys the entire point, because evidence you cannot trust is not evidence. So before you rely on any detection result, you should understand how the detector decides, and what would have to go wrong for it to be mistaken. Here is how Kirpik's [detection](/features/detection/) reaches a verdict.

## Why a naive detector would cry wolf

Text is messy. Any system looking for a faint signature in arbitrary content off the open web will sometimes see shapes in the noise, the way you can find faces in clouds. A detector that declared a match on the first hint of a signature would be that cloud-watcher: right sometimes, wrong often, and useless as a witness either way.

The fix is not to look harder. It is to demand more before declaring anything, and to be transparent about how much was found. Kirpik does both, using three stacked requirements.

## The three tests a match must pass

### 1. The signature must be found repeatedly

Kirpik's watermark does not sit in one place in your text. The signature repeats through the content with built-in redundancy, partly so that [edited and trimmed versions survive](/learn/why-watermarks-survive-copying/), and partly for exactly this reason: real watermarked text offers the detector many chances to recover the signature, while random unwatermarked text offers only coincidence.

One apparent recovery is never enough. The detector requires multiple independent recoveries from different parts of the text before a match is even on the table. Coincidence can fake one hit. Faking several independent ones in the same page is a different order of unlikely.

### 2. The recoveries must agree

Finding several signature repetitions is still not sufficient, because noise does not just have to appear, it has to be consistent. Each recovered marker is read as a candidate signature, and the candidates then have to agree with each other by majority before the detector accepts them as one voice.

Think of it as interviewing witnesses separately. Three witnesses who each independently name the same store are compelling. Three witnesses telling three different stories are noise, and Kirpik treats them as noise, whatever their individual confidence.

### 3. Each recovery must pass an integrity check

Every candidate signature carries a built-in integrity check, and a recovery that fails it is discarded before it can vote at all. This is the quiet workhorse of the system: corrupted fragments, partial recoveries from a heavily edited region, and chance patterns in ordinary text overwhelmingly fail the integrity check and never reach the counting stage.

Only recoveries that are internally valid, present in numbers, and in agreement with each other produce a declared match, and the match names a specific store's watermark code rather than a generic "watermark detected".

## What the odds actually are

Stack those requirements and the arithmetic gets severe for a false alarm. For an unprotected page, random text has to produce multiple fragments that each pass an integrity check independently and all happen to agree on the same signature. The combined chance of that works out to roughly one in 65,000 per page checked.

Treat that figure the way it is offered: an engineering estimate of how hard the detector is to fool by chance, not a courtroom statistic. But it is worth sitting with what it means in practice. You could check a suspect page every day for a century and the expected number of false alarms is still below one. When Kirpik declares your watermark present on a page, chance coincidence is not a realistic explanation, and the realistic explanation is the one you suspected when you pasted the URL in.

## Why you see numbers instead of a verdict

A detection result in Kirpik does not say a bare yes. It reports Watermark Security Markers, the count of validated signature recoveries, together with a Confidence figure. That is a deliberate choice about what evidence should look like.

A bare yes/no hides everything that matters. Ten agreeing markers recovered from a full stolen page is a different situation from two markers recovered from a single lifted paragraph, and you should know which you are holding before you act on it. The marker count tells you how much of the signature survived the thief's editing. Confidence summarises how firmly the evidence clears the thresholds. Together they let you, and later a host's abuse team, weigh the finding rather than take it on faith.

The same numbers flow into the paperwork. A [Proof of Ownership Certificate](/features/chain-of-proof/) records the marker count and confidence alongside the detection date, the infringing URL and the content fingerprints, so the strength of the match is documented in the evidence itself. [Inside a Proof of Ownership Certificate](/learn/inside-chain-of-proof/) walks through every field.

## What a low result means

Sometimes detection comes back thin: a marker or two, below the threshold, no declared match. That is the system working, not failing. It can mean the page simply is not carrying your text. It can mean the thief took a fragment too short to hold enough of the repeating signature, which is one reason [longer protected text is stronger text](/learn/marking-text-without-changing-words/). Or it can mean the stolen text was reworked heavily enough that too little signature survived.

What Kirpik will not do is round a weak signal up to an accusation. The thresholds exist so that a declared match means something, and that discipline is precisely what makes a strong match usable against a thief.

## Trust, but verify it yourself

None of this needs to be taken on trust. Protect a description on your own store, paste it into detection, and watch a genuine match report its markers and confidence. Then paste text you never protected and watch it come back clean. Kirpik is built to be tested exactly that way, and the free plan is enough to [run the experiment on your own store](/site-check/) today.
