---
title: "Inside a Chain of Proof certificate"
description: "A section-by-section tour of Kirpik's Chain of Proof certificate: protection details, detection details, the comparison page and public QR verification."
cluster: "Proof & enforcement"
summary: "A takedown is won by the document you attach to it. Here is exactly what a Chain of Proof certificate contains, section by section, and what each field is for."
pubDate: 2026-06-24
related:
  - proving-text-ownership
  - watermark-false-positives
  - wayback-machine-timeline-evidence
---

Evidence documents live or die on specifics, so rather than describe the [Chain of Proof certificate](/features/chain-of-proof/) in adjectives, this article walks through the actual document: every section, what it records, and why that field earns its place. If you are about to attach one to a DMCA notice, or you have received one and want to know what you are looking at, this is the tour.

The certificate is generated when Kirpik detects your watermark in someone else's page and you choose to certify the detection. It is a dated PDF titled as a text content ownership certificate, and every claim in it traces back to a recorded event: the moment you protected your content, and the moment your watermark was found somewhere it should not be.

## Certificate ID and Document Scope

The document opens with a unique certificate ID and a Document Scope section. The ID matters more than it looks: it is the handle for the certificate's public verification page, which we will get to, and it makes the document citable in correspondence. Quote the ID in a takedown notice and everyone in the thread is unambiguously discussing the same evidence.

Document Scope states plainly what the certificate covers, which piece of content and which claim. Evidence documents fail when a reader cannot tell what is being asserted, so the certificate says it up front.

## Protection Details: your side of the timeline

This section records the "before" of the story, fixed at the moment you protected the content:

- **Date of Protection.** When Kirpik watermarked the content. This is the anchor of the timeline argument: your claim to the text predates the copy's appearance, and here is the date.
- **Protection Signature.** A SHA-256 fingerprint of your protected content. This pins down exactly what your text was, in a form anyone can recompute and check. One changed word would produce a different fingerprint, which is precisely what makes it useful: the certificate is not gesturing at roughly-this-content, it is committing to exactly-this-content.
- **Algorithm Version.** Which version of Kirpik's watermarking produced the protection, so the record stays interpretable as the system evolves.
- **Content Title and Original Content URL.** The human-readable identity of the work and where the original lives, tying the technical fields back to a real page on your store.

A note on honest terminology, because evidence should not oversell itself. The Protection Signature is a content fingerprint, nothing grander, and the certificate claims nothing beyond what it records. What the field proves is identity of content, and it proves that well.

## Detection Details: their side of the timeline

The "after" of the story, recorded when your watermark was found:

- **Infringing URL.** Where the copied text was detected.
- **URL Last-Modified.** The infringing server's own declaration of when its page last changed, taken from its HTTP headers. Evidence from the opposing side's own server has a particular kind of weight.
- **Detection Date and Detection ID.** When the detection ran, and a reference back to the detection event itself.
- **Detected Signature.** The fingerprint of the text as found on the infringing page, sitting alongside your Protection Signature so the relationship between original and copy is on the record.
- **Watermark Security Markers.** How many valid watermark recoveries the detector made in the infringing text. The signature repeats through protected content, so this count measures how much of it survived the thief's editing.
- **Confidence.** The detector's overall confidence in the match, expressed as a percentage.

The last two fields deserve a sentence more. A bare "watermark found" would ask the reader to trust a verdict. The marker count and confidence figure show the strength of the finding, and they connect to a detection process with deliberately strict thresholds: repeated recoveries, majority agreement between them, and an integrity check each recovery must pass. [How sure is a match?](/learn/watermark-false-positives/) explains that machinery and why false positives are roughly a one-in-65,000-per-page event.

## The comparison page

When the original and the infringing text overlap enough for a meaningful comparison, the certificate includes a side-by-side page: your protected content and the infringing page's text, with modifications highlighted, the original rendering in green and altered material in yellow, plus a word-match percentage.

This page does a job the technical fields cannot: it makes the theft visible to a non-technical reader in seconds. An abuse analyst who will never parse a fingerprint can look at two columns of highlighted text and see the copying, the trims and the light rewording immediately. It also preempts the commonest dodge, "we wrote it ourselves and it happens to be similar", because the highlighting shows the copy is your text with edits, not a coincidental cousin.

## Timeline corroboration from the Internet Archive

Where records exist, the certificate folds in Wayback Machine evidence, using the Archive's index of captures to establish the earliest snapshot relevant to the infringement. This adds an independent third party to the timeline: not your dates, not the thief's dates, but a neutral archive's records of who was visible when. [Using the Internet Archive to prove who published first](/learn/wayback-machine-timeline-evidence/) covers how that evidence works and where its limits are.

## The QR code and the public verification page

The feature that changes how the whole document is received: every certificate carries a QR code linking to a public verification page for that certificate ID. No login, no app, no Kirpik account. A hosting provider's abuse team, a marketplace moderator or a lawyer scans the code or opens the link and sees the certificate's details served by Kirpik directly.

This matters because a PDF, on its own, is just a file the complainant sent. Anyone can typeset an official-looking document. The verification page means the recipient is not trusting your attachment, they are checking it against the system that issued it, independently. In practice this is often what moves a complaint from "claim received" to "action taken": the evidence is confirmable in under a minute by someone with no reason to believe you.

Certificates can also carry a note when a detection has been independently reviewed by the Kirpik support team, an extra set of eyes for the cases where you want it.

## The closing section, and what the document is for

The certificate ends with a Certificate of Authenticity block stating what the document is and its intended use in copyright enforcement, DMCA notices among them. That is the context the whole document is built for: attached to [a properly formed takedown notice](/learn/dmca-for-stolen-text/), cited in a marketplace complaint, or handed to a lawyer as the organised core of a dispute file.

Read back over the sections and notice the shape of the argument they assemble: what your content was (Protection Signature), when you had it (Date of Protection), where it surfaced (Infringing URL), that it is genuinely yours rather than similar (markers and confidence), what was changed (the comparison page), and when (Last-Modified and archive records), all independently checkable (the QR page). That is the stack that [convinces an abuse team](/learn/proving-text-ownership/), compiled by Kirpik in the moments after a detection instead of by you over a lost afternoon.
