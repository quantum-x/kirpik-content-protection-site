---
title: "The DMCA process for stolen text, step by step"
description: "A practical walkthrough of the DMCA for copied store text: finding the host, locating the agent, writing a valid notice, counter-notices and non-US hosts."
cluster: "Proof & enforcement"
summary: "The DMCA is the standard tool for getting copied text taken down, and it is more form-filling than law. Here is the process end to end, from identifying the host to what happens after you send the notice."
pubDate: 2026-06-17
related:
  - proving-text-ownership
  - inside-chain-of-proof
  - deindexing-stolen-copy
---

The DMCA has a reputation as lawyer territory, and for a small store facing a copycat that reputation does real damage: merchants who could have had stolen copy removed in a week decide the fight is above their pay grade and let it stand. The reality is friendlier. A DMCA takedown notice is a structured letter, most hosts process thousands of them through web forms, and the whole exercise is closer to filing a well-organised complaint than to litigation.

This article walks the process for the specific case of stolen store text: product descriptions, blog articles and pages lifted onto someone else's site.

One note before the steps. This is general information about how the process works, not legal advice, and copyright law varies by country. For high-stakes situations, or if you receive a counter-notice and are weighing what to do next, talk to a lawyer.

## Step 1: capture the evidence first

Do this before anything else, because infringing pages have a habit of quietly changing once complaints start arriving. Record the infringing URLs, take dated screenshots of each page, and save a copy of the page itself. If you use the Internet Archive, [save a snapshot of the infringing page](/learn/wayback-machine-timeline-evidence/) so a third-party record exists with a date on it.

This is also the moment to establish that the text is provably yours rather than merely similar. If your copy was protected with Kirpik, run the infringing URL through detection and generate a [Proof of Ownership Certificate](/features/chain-of-proof/). The certificate packages your protection date, content fingerprints, the detection details and a public verification link into one dated document, which is exactly the shape of evidence the rest of this process wants. [What counts as proof when your copy is stolen](/learn/proving-text-ownership/) covers the evidence question more broadly.

## Step 2: identify who hosts the infringing site

A DMCA notice goes to a service provider, usually the company hosting the infringing site, because the law gives hosts a safe harbour: they are not liable for what users upload provided they remove infringing material when properly notified. That incentive is why the process works at all, and why hosts take valid notices seriously.

Finding the host takes a few minutes:

- Run a WHOIS lookup on the domain. It often names the registrar and sometimes the host directly.
- Check the site's DNS records. Nameservers and the IP address usually point at the hosting provider, and an IP lookup service will name the network operator.
- If the site sits behind a CDN such as Cloudflare, you will see the CDN rather than the true host. CDNs generally will not remove content themselves, but they operate abuse processes that forward reports to the origin host or identify it to you.
- If the copycat runs on a hosted commerce platform, the platform is your target and this gets easier. Shopify, for example, publishes its own copyright infringement form and handles notices for stores on its platform.

## Step 3: find the designated agent

US-based providers register a designated DMCA agent with the US Copyright Office, which runs a searchable public directory of them. In practice you rarely need the directory: search for the host's name plus "DMCA" or "abuse", and you will usually land on a dedicated page describing exactly how they want notices submitted. Use their preferred channel. A notice sent into the right form gets processed faster than one emailed to a general inbox.

## Step 4: write a notice that cannot be rejected on formalities

The law lists what a valid notice must contain, and hosts do reject notices that miss elements, so treat this as a checklist:

1. **Identification of the copyrighted work.** Describe the text that was copied and where the original lives, with URLs to your pages. If you hold a Proof of Ownership Certificate, cite it here and include its public verification link, which lets the abuse team confirm your claim independently.
2. **Identification of the infringing material.** The exact URLs where the copied text appears. One URL per infringing page, precise enough that the host can find the material without hunting.
3. **Your contact information.** Name, address, email, and a phone number if you have one.
4. **A good-faith statement.** Words to the effect that you have a good-faith belief the use of the material is not authorised by the copyright owner, its agent, or the law.
5. **An accuracy statement.** That the information in the notice is accurate, and, under penalty of perjury, that you are the copyright owner or authorised to act for them. Take this line seriously: it is the legal weight of the document, and sending knowingly false notices has real consequences.
6. **Your signature.** Physical or electronic. A typed full name is accepted as an electronic signature by most providers.

Keep the tone factual and the notice short. Abuse teams process queues, and a notice that states the six elements cleanly, with a verifiable evidence link, is the notice that gets actioned without a follow-up email asking for clarification.

## Step 5: send it and track what happens

Submit through the host's channel, keep a copy, and note the date. Straightforward cases are often resolved within days: the host removes the material or disables the page and notifies its customer. If a week or two passes with silence, follow up once through the same channel, then consider the parallel routes below.

## If a counter-notice arrives

The person who posted the material can respond with a counter-notice claiming the removal was a mistake or misidentification. If they do, the host forwards it to you, and after a statutory window of roughly ten to fourteen business days the material can be restored unless you tell the host you have filed a court action.

Counter-notices to clear-cut text theft are rare, because a counter-notice requires the sender to swear to their claim and accept court jurisdiction, which is an uncomfortable thing to do over copy they scraped in an afternoon. Solid evidence makes it rarer still: a thief looking at a dated certificate with verifiable fingerprints and a watermark detection knows exactly how a dispute would end. If you do receive one, that is the moment to involve a lawyer.

## Non-US hosts

The DMCA is US law, but the pattern is international. The EU, the UK and most major jurisdictions run notice-based removal regimes of their own, and large hosts everywhere accept DMCA-style notices because it is the format the whole industry standardised on. Send the same notice with the same evidence.

Some hosts, in some jurisdictions, will ignore you. When that happens, stop pushing the locked door and go around it: [ask Google to remove the infringing pages from search results](/learn/deindexing-stolen-copy/). A copycat store that cannot be found does not need to be taken down to stop costing you sales, and search deindexing works regardless of where the server sits.

## Where the certificate fits

Every step above goes smoother when ownership is a fact you demonstrate rather than a story you tell. That is the role of the Proof of Ownership Certificate: your protection date, the content fingerprints of original and copy, the watermark detection with its marker count and confidence, and a QR-linked public verification page an abuse team can check in thirty seconds. The [enforcement guide](/enforcement/) shows how detection, certificate and notice fit together into one workflow, and Kirpik generates the certificate the moment a detection lands, so the evidence is ready before you have opened the host's complaint form.
