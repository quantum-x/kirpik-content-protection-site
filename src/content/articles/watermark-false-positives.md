---
title: "How sure is a match? False positives, explained"
description: "How Kirpik decides a watermark match is real: repeated recoveries, majority agreement and validity checks, for roughly one false positive in 65,000 pages."
cluster: "How invisible text watermarking works"
summary: "A detector that guesses is worse than none. The three tests a Kirpik match must pass, what one in 65,000 means, and why results report marker counts instead of a bare yes."
pubDate: 2026-06-08
related:
  - why-watermarks-survive-copying
  - inside-chain-of-proof
  - marking-text-without-changing-words
---

The most damage a detector can do is to be wrong. Declare a match against text a competitor genuinely wrote, and the takedown notice you send on the back of it becomes a written false accusation. A detector that guesses is therefore worse than no detector: evidence you cannot trust is not evidence. Before acting on any match, you should know how the verdict is reached, so here is how Kirpik decides a match is real, and how often chance could fool it.

## Three tests before a match is declared

Text from the open web is noisy, and any system searching for a faint mark in arbitrary content will occasionally glimpse patterns that are not there. Kirpik's answer is not to look harder but to demand more, three requirements deep:

- The watermark must be recovered repeatedly. The mark repeats through protected text with redundancy, so genuinely stolen text gives the detector many independent chances to find it, in different parts of the content. A single apparent recovery is never enough to declare anything.
- The recoveries must agree. Each recovery is a candidate reading, and the candidates must agree with one another by majority. Several independent recoveries naming the same store carry weight; recoveries pointing in different directions are noise, and Kirpik treats them as noise.
- Each recovery must be internally valid. Every candidate carries its own validity check, and a recovery that fails it is discarded before it can count towards anything. Corrupted fragments and chance patterns in ordinary text overwhelmingly fail at this stage.

A match is declared only when valid recoveries turn up in numbers and agree with one another, and the match names one specific store's watermark code rather than a generic "watermark detected". The 20-word minimum exists for the same reason: below it, the mark has too little room to repeat for these tests to mean anything.

## What one in 65,000 means

Stack the three requirements and chance runs out of room. For an unwatermarked page to trigger a false match, ordinary text would need to produce several fragments that each pass the validity check independently and then all agree on the same reading. The combined odds come to roughly one false positive in 65,000 pages checked.

Take the figure for what it is: an engineering estimate of how hard the detector is to fool by accident, not a courtroom statistic. Even so, the arithmetic is worth a moment. At one suspect page checked every day, the expected wait for a single false alarm runs to well over a century. When Kirpik reports your watermark on a page, coincidence is not a realistic explanation for how it got there.

## Numbers instead of a bare verdict

A Kirpik detection does not answer with a plain yes. It reports Watermark Security Markers, the count of valid recoveries, alongside a Confidence percentage, and the choice is deliberate. A bare yes hides what you most need to weigh: ten agreeing markers recovered from a page stolen wholesale is a different situation from two markers recovered from one lifted paragraph, and you should know which you are holding before you act. The marker count shows how much of the mark survived the thief's editing; Confidence summarises how firmly the result clears the thresholds. Both figures are then recorded on the Proof of Ownership Certificate, so the strength of the match is documented inside the evidence rather than asserted next to it.

Results sometimes come back thin: a marker or two, below threshold, no match declared. That is the discipline operating as intended. It can mean the page is not carrying your text at all, that the lifted fragment was too short to hold enough of the repeating mark, or that heavy rewording destroyed too much of it. What Kirpik will not do is round a weak signal up to an accusation, and that restraint is what makes a strong match safe to act on.

The claims are all testable on your own store. Protect a description, paste it into [detection](/features/detection/), and watch a genuine match report its markers; paste text you never protected and watch it come back clean. Kirpik's free plan covers the whole experiment, in both directions.
