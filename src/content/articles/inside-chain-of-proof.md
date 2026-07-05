---
title: "Inside a Proof of Ownership Certificate"
description: "A section-by-section tour of the Proof of Ownership Certificate: protection details, detection details, the comparison page and public QR verification."
cluster: "Proof & enforcement"
summary: "A takedown often turns on the document attached to it. Every section of the Proof of Ownership Certificate, field by field, and the job each one does."
pubDate: 2026-06-24
related:
  - proving-text-ownership
  - watermark-false-positives
  - wayback-machine-timeline-evidence
---

An evidence document is best judged field by field, so this is a tour of the Proof of Ownership Certificate as it actually prints: what each section records, and why the field earns its place. You generate the certificate in Kirpik after detection finds your watermark in someone else's page, and it arrives as a dated PDF. One naming note: the document's printed title reads "Chain of Proof"; in the app and in all prose it is the Proof of Ownership Certificate. It opens with a unique Certificate ID, which doubles as the handle for its public verification page and the reference to quote in correspondence. A Document Scope section states plainly which content and which claim the certificate covers.

## Protection Details: what you owned and when

This section fixes your side of the timeline, recorded at the moment the content was protected. The Date of Protection anchors the argument: your claim to the text predates the infringing page's appearance, and here is the date. The Protection Signature is a SHA-256 fingerprint of the protected content, which commits the certificate to exactly this text rather than roughly this text; a single changed word would produce a different value, and anyone can recompute it. Algorithm Version keeps the record interpretable as Kirpik evolves, while Content Title and Original Content URL tie the technical fields back to a real page on your store. A note on honest terminology: the Protection Signature is a content fingerprint, nothing grander, and the certificate claims nothing beyond what it records.

## Detection Details: the match on the record

The other side of the timeline, recorded when your watermark was found:

- Infringing URL: where the copied text was detected.
- URL Last-Modified: the infringing server's own statement, from its HTTP headers, of when its page last changed. A date supplied by the other side's server carries its own kind of weight.
- Detection Date and Detection ID: when the check ran, with a reference back to the detection event.
- Detected Signature: the fingerprint of the text as found on the infringing page, set beside your Protection Signature so the relationship between the two texts is on the record.
- Watermark Security Markers: the count of valid watermark recoveries in the infringing text, which measures how much of the mark survived the thief's editing.
- Confidence: the detector's confidence in the match, as a percentage.

The last two fields exist because "watermark found" alone would ask the reader for trust. The count and percentage show the strength of the finding, produced by thresholds strict enough that a chance false positive is roughly a one-in-65,000-per-page event.

## The comparison page and the timeline

When the original and the infringing text overlap enough for a meaningful comparison, the certificate adds a side-by-side page: your protected content next to the text from the infringing page, changes highlighted, with a word-match percentage. It does the one job the technical fields cannot: a reviewer who will never parse a fingerprint sees the copying and the light edits at a glance, and the commonest defence, "we wrote it ourselves", collapses against two columns of highlighted text.

Where records exist, the certificate also folds in timeline corroboration from the Internet Archive, citing the earliest relevant Wayback Machine snapshot, a date held by a neutral archive rather than by either side. A certificate can additionally carry a note that the detection was independently verified by the Kirpik support team.

## The QR code and public verification

Every certificate carries a QR code linking to a public verification page for its Certificate ID. No login, no account, no software: a hosting company's abuse team, a marketplace moderator or a lawyer opens the link and sees the certificate's details served by Kirpik directly. This is the detail that changes how the document is received. A PDF on its own is a file the complainant sent, and anyone can typeset an official-looking file; the verification page lets the recipient check the evidence against the system that issued it rather than take it on faith. The document closes with a Certificate of Authenticity block stating what it is and its intended use in copyright enforcement, DMCA takedowns included.

Read in order, the sections assemble a single argument: what your content was, when you had it, where it surfaced, that it is genuinely yours rather than coincidentally similar, what was changed, and when, with every step checkable by the person reading. Kirpik compiles it in the moments after a detection; the [Proof of Ownership Certificate](/features/chain-of-proof/) page shows the document itself.
