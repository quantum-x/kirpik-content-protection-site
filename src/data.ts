/**
 * Single source of truth for repeated site content (features, pricing, FAQs).
 * Pages import from here so the homepage and inner pages never drift apart.
 */

export interface Feature {
  slug: string;
  tag: string;
  title: string;
  short: string; // homepage grid
  lead: string; // feature page intro
  points: { h: string; p: string }[];
  image?: string;
  imageAlt?: string;
}

export const FEATURES: Feature[] = [
  {
    slug: "invisible-text-watermarking",
    tag: "Invisible",
    title: "Invisible text watermarking",
    short:
      "An algorithmic watermark derived from your original text. Readers see your text, Kirpik sees your signature.",
    lead: "Kirpik embeds an invisible, algorithmic watermark into your product descriptions, blog articles and pages. It is derived from your original text's signature, carries your store's unique watermark code, and changes nothing a reader or a search engine cares about.",
    points: [
      { h: "Your words stay your words", p: "Kirpik never rewrites, shortens or restyles your text. Every word, comma and heading stays exactly as you wrote it." },
      { h: "Nothing for shoppers to see", p: "There is no badge, footer notice or visible marker. Your descriptions read and render exactly as before." },
      { h: "One watermark code per store", p: "Each install carries its own identifier, so a detected watermark ties the text back to your shop specifically." },
    ],
  },
  {
    slug: "resilience",
    tag: "Travels with the text",
    title: "Protection that travels",
    short:
      "The watermark lives in the text itself, so it survives copy-paste, scraping, editing and reformatting.",
    lead: "Stolen text rarely arrives in one clean piece. It gets pasted into a new theme, trimmed, lightly reworded and reformatted. Kirpik's watermark repeats through your text with built-in redundancy, so a match can still be read from a stolen version that has been cut down or edited in places.",
    points: [
      { h: "Copying is the delivery mechanism", p: "The watermark is part of the text, not the page around it. Whoever takes your words takes the signature with them." },
      { h: "Redundant by design", p: "The signature repeats throughout your content. Deleting a paragraph or rewording a few lines still leaves plenty for the detector to read." },
      { h: "Honest about its limits", p: "A thief who rewrites your text from scratch is no longer using your words. Kirpik protects the thing that gets stolen: the text itself." },
    ],
  },
  {
    slug: "chain-of-proof",
    tag: "Evidence",
    title: "Proof of Ownership Certificate",
    short:
      "Turn a detection into a dated, verifiable ownership certificate built for DMCA takedowns.",
    lead: "Finding your text on someone else's store is not the same as proving it is yours. When Kirpik detects your watermark, it can generate a Proof of Ownership Certificate: a dated ownership document with content fingerprints, detection details and a public verification page.",
    points: [
      { h: "Technical and specific", p: "It records the Protection Signature of your original, the Detected Signature of the stolen text, detection date, Watermark Security Markers and a confidence figure." },
      { h: "Independently verifiable", p: "A QR code links to a public verification page, so a host, marketplace or lawyer can confirm the certificate is genuine without trusting a PDF." },
      { h: "A timeline, not just a claim", p: "The certificate pairs your protection date with the infringing page's own headers and Internet Archive records, so the order of events is visible at a glance." },
    ],
    image: "/img/chain-of-proof.png",
    imageAlt: "A Kirpik Proof of Ownership Certificate",
  },
  {
    slug: "detection",
    tag: "Verify",
    title: "Detection on demand",
    short:
      "Paste suspect text or check a URL. In seconds you know whether it carries your watermark.",
    lead: "Found a store that reads suspiciously like yours? Paste the text into Kirpik, or point it at the URL. The detector reports whether your watermark is present, how many security markers it recovered, and how confident the match is.",
    points: [
      { h: "Two ways to check", p: "Paste any text directly, or let Kirpik fetch a live URL and check the page for you. If a site blocks automated visits, a guided paste flow covers it." },
      { h: "Works on edited versions", p: "Detection tolerates the same abuse the watermark does, so a trimmed or lightly reworded version still reports a match." },
      { h: "On every plan", p: "Paste detection is included on all plans, and every plan includes a monthly allowance of URL checks." },
    ],
  },
  {
    slug: "auto-protect",
    tag: "Hands-off",
    title: "Auto-Protect",
    short:
      "New and updated products are watermarked the moment you save them. Nothing to remember.",
    lead: "Protection only counts if it is actually applied. With Auto-Protect on, Kirpik watermarks new and updated content automatically in the background, so your catalogue stays covered as it grows and changes.",
    points: [
      { h: "Covers your workflow", p: "Write and edit in the Shopify admin exactly as you do now. Kirpik picks up saves automatically and applies protection behind the scenes." },
      { h: "No double handling", p: "Kirpik recognises content that is already protected and leaves it alone, so nothing is processed twice." },
      { h: "Pro plan feature", p: "Auto-Protect is included in Pro. Free and Paid plans protect manually or in batches with the same one-click flow." },
    ],
  },
  {
    slug: "bulk-protection",
    tag: "Flexible",
    title: "Protect one item or the whole catalogue",
    short:
      "Single products, batches, or everything at once. Remove protection any time with one click.",
    lead: "Protect a single product from its page in the Shopify admin, tick a batch of products, articles and pages, or run your whole catalogue in one job. Protection is reversible: restore any item to its unwatermarked state whenever you choose.",
    points: [
      { h: "Products, articles and pages", p: "Kirpik covers the text people actually steal: product descriptions, blog articles and store pages." },
      { h: "Batch jobs that behave", p: "Large runs are queued and processed in the background with progress you can watch, not a browser tab you have to babysit." },
      { h: "Reversible on demand", p: "Remove protection from one item or everything at once. Your text returns to exactly its prior state." },
    ],
  },
];

/** Things stolen content goes through that the watermark is designed to survive. */
export const ATTACKS = [
  "Copy and paste",
  "Web scraping",
  "Spy extensions",
  "Feed exports",
  "Pasting into a new theme",
  "Trimming paragraphs",
  "Rewording a few lines",
  "Rearranging sections",
  "Bold and italic restyling",
  "HTML re-rendering",
  "Template changes",
  "Cross-app copying",
];

export const BENEFITS: [string, string][] = [
  ["Your content, untouched", "Kirpik never rewrites or restyles your text. What you wrote is exactly what shoppers and search engines read."],
  ["Invisible to readers", "No badges, notices or visible markers. Nobody can tell protected text from unprotected text by looking."],
  ["No storefront scripts", "Kirpik adds no code to your theme. Zero effect on page speed, Core Web Vitals or checkout."],
  ["Travels with the text", "The watermark lives in the text itself, so it goes wherever the thief takes it, on any site."],
  ["Proof, not suspicion", "Detection turns 'this reads like mine' into a dated certificate with verifiable content fingerprints."],
  ["Set and forget", "Auto-Protect covers new and updated products the moment you save them, with no per-item busywork."],
];

export interface Plan {
  name: string;
  price: string;
  per: string;
  blurb: string;
  feats: string[];
  cta: string;
  featured: boolean;
}

export const PLANS: Plan[] = [
  {
    name: "Free", price: "$0", per: "forever",
    blurb: "Protect a small catalogue and see detection work on your own store.",
    feats: ["Up to 25 products", "3 blog articles or pages", "One-click protection", "Paste detection included", "5 URL checks / month", "1 lifetime certificate"],
    cta: "Start free", featured: false,
  },
  {
    name: "Paid", price: "$7.99", per: "/ month",
    blurb: "For stores that need batch protection and monthly certificates.",
    feats: ["Up to 100 products", "50 blog articles and pages", "Batch protection", "20 URL checks / month", "5 certificates / month"],
    cta: "Choose Paid", featured: true,
  },
  {
    name: "Pro", price: "$19.99", per: "/ month",
    blurb: "Auto-Protect and unlimited certificates for large stores.",
    feats: ["Unlimited products, articles & pages", "Auto-Protect on save", "100 URL checks / month", "Unlimited certificates"],
    cta: "Go Pro", featured: false,
  },
];

// Feature comparison matrix. Cells: true (included), false (not), or a string value.
export const MATRIX: [string, boolean | string, boolean | string, boolean | string][] = [
  ["Invisible text watermark", true, true, true],
  ["Products included", "25", "100", "Unlimited"],
  ["Blog articles and pages", "3", "50", "Unlimited"],
  ["Paste detection", true, true, true],
  ["URL checks per month", "5", "20", "100"],
  ["Batch protection", false, true, true],
  ["Auto-Protect on save", false, false, true],
  ["Proof of Ownership Certificates", "1 total", "5 / month", "Unlimited"],
  ["Remove protection / restore", true, true, true],
];

// Learn library roadmap. Single source of truth for /learn. Each item has a slug;
// if a Markdown file with that slug exists in src/content/articles, /learn renders it
// as a real link, otherwise it shows as "Coming soon".
export interface ArticleCluster {
  title: string;
  blurb: string;
  items: { title: string; slug: string }[];
}

export const ARTICLE_CLUSTERS: ArticleCluster[] = [
  {
    title: "Text theft & what it costs",
    blurb: "Who takes product text, how they do it, and what it does to the store that wrote it.",
    items: [
      { title: "Your product descriptions are being scraped right now", slug: "product-descriptions-scraped" },
      { title: "The copycat store playbook: cloning a catalogue in an afternoon", slug: "copycat-store-playbook" },
      { title: "What stolen content does to your search rankings", slug: "stolen-copy-seo-damage" },
      { title: "Where stolen product text ends up", slug: "where-stolen-copy-ends-up" },
      { title: "When the thief outranks you with your own words", slug: "when-thieves-outrank-original" },
    ],
  },
  {
    title: "Why blockers don't work",
    blurb: "A calm, testable look at right-click blockers, copy-paste disablers and anti-spy scripts.",
    items: [
      { title: "Every Shopify store has a public product feed you cannot turn off", slug: "shopify-public-product-feed" },
      { title: "Right-click blockers don't protect text. Run the test yourself", slug: "right-click-blockers-text-test" },
      { title: "What copy-paste protection apps actually do", slug: "copy-paste-protection-apps" },
      { title: "Scrapers never see your storefront scripts", slug: "scrapers-vs-storefront-scripts" },
      { title: "Screenshot blocking and other things a browser cannot do", slug: "things-a-browser-cannot-do" },
    ],
  },
  {
    title: "How invisible text watermarking works",
    blurb: "What an algorithmic text watermark is and why it holds up, in plain English.",
    items: [
      { title: "What is an invisible text watermark?", slug: "what-is-invisible-text-watermark" },
      { title: "How Kirpik marks your text without changing a single word", slug: "marking-text-without-changing-words" },
      { title: "Why the watermark survives copy and paste", slug: "why-watermarks-survive-copying" },
      { title: "How sure is a match? False positives, explained", slug: "watermark-false-positives" },
      { title: "Invisible watermarks and SEO: what changes (nothing)", slug: "text-watermarks-and-seo" },
    ],
  },
  {
    title: "Proof & enforcement",
    blurb: "Turning a detection into a takedown: evidence, timelines and the DMCA.",
    items: [
      { title: "The DMCA process for stolen text, step by step", slug: "dmca-for-stolen-text" },
      { title: "What counts as proof when your text is stolen", slug: "proving-text-ownership" },
      { title: "Inside a Proof of Ownership Certificate", slug: "inside-chain-of-proof" },
      { title: "Using the Internet Archive to prove who published first", slug: "wayback-machine-timeline-evidence" },
      { title: "Getting stolen content removed from Google's index", slug: "deindexing-stolen-copy" },
    ],
  },
  {
    title: "By use case",
    blurb: "Text protection for the stores that get copied the most.",
    items: [
      { title: "Fashion and apparel: when your product text walks off with the trend", slug: "fashion-copy-theft" },
      { title: "Beauty and skincare: protecting ingredient stories and routines", slug: "beauty-copy-theft" },
      { title: "Supplements and food: copied claims are your problem twice", slug: "supplement-copy-theft" },
      { title: "Dropshipping clones: same supplier, your words", slug: "dropship-clone-copy" },
      { title: "Blogs and buying guides: protecting editorial that took weeks to write", slug: "protecting-blog-content" },
    ],
  },
  {
    title: "Choosing & getting started",
    blurb: "Picking a text-protection approach and rolling it out on Shopify.",
    items: [
      { title: "How to choose text protection for a Shopify store", slug: "choosing-text-protection-shopify" },
      { title: "How to watermark your Shopify product descriptions", slug: "watermark-shopify-descriptions" },
      { title: "Protecting a large catalogue with batches and Auto-Protect", slug: "batch-protect-catalogue" },
    ],
  },
];

export interface FaqGroup {
  title: string;
  items: { q: string; a: string }[];
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    title: "The basics",
    items: [
      { q: "What does Kirpik do?", a: "Kirpik invisibly watermarks the text on your Shopify store: product descriptions, blog articles and pages. If someone copies your writing, you can detect the watermark and generate a Proof of Ownership Certificate to support a takedown." },
      { q: "Will Kirpik change my text?", a: "No. Your words, spelling, punctuation, headings and formatting stay exactly as you wrote them. The watermark is algorithmic, derived from your original text's signature, and adds nothing a reader can see." },
      { q: "Does it affect SEO?", a: "No. Your text reads the same to search engines as it does to people. Kirpik adds no scripts or markup, and your pages render exactly as before." },
      { q: "Does it slow down my store?", a: "No. Kirpik adds zero code to your theme. There is no app embed, no script tag and no pixel, so your page speed and Core Web Vitals are untouched." },
    ],
  },
  {
    title: "The technology",
    items: [
      { q: "How can a watermark be invisible in plain text?", a: "The watermark is not a visible element like a badge or a footer note. It is an algorithmic signature woven through the way your content is stored, derived from your original text. Readers see your text exactly as written. Kirpik's detector reads the signature back out of any duplicate of it." },
      { q: "Can someone remove the watermark?", a: "Someone who rewrites your text from scratch is no longer using your words, and no text protection can follow a rewrite. Copying, trimming, light rewording and reformatting leave it detectable, and that is what thieves actually do." },
      { q: "Does it survive editing?", a: "Yes, within reason. The signature repeats through your text with built-in redundancy, so a stolen version that has been trimmed, lightly reworded or restyled still reports a match, along with a count of the security markers that survived." },
      { q: "What is a watermark code?", a: "Every store gets its own unique watermark code when Kirpik is installed. A detection does not just say 'this text is watermarked', it says 'this text belongs to this specific store', which is what makes the proof useful." },
    ],
  },
  {
    title: "Using Kirpik",
    items: [
      { q: "What content can I protect?", a: "Product descriptions, blog articles and store pages. You can protect items one at a time, in batches, or automatically on save with Auto-Protect on the Pro plan." },
      { q: "How do I check a suspicious page?", a: "Open Kirpik and either paste the text or enter the page's URL. Kirpik fetches the page, runs detection and reports the result with a confidence figure. If a site blocks automated visits, a guided paste flow gets you the same answer." },
      { q: "My descriptions are short. Is that a problem?", a: "Very short text gives the watermark less room to repeat, so Kirpik asks for at least 20 words and is happiest from around 45 words up. Most product descriptions clear that comfortably." },
      { q: "Can I undo protection?", a: "Yes, any time. Remove protection from a single item or from everything at once, and your text returns to exactly its prior state." },
    ],
  },
  {
    title: "Proof and enforcement",
    items: [
      { q: "What is a Proof of Ownership Certificate?", a: "A dated ownership document Kirpik generates when your watermark is detected in someone else's page. It records your Protection Signature, the Detected Signature of the stolen text, detection details, a confidence figure and a QR code that links to a public verification page." },
      { q: "Why is a certificate better than screenshots?", a: "Screenshots show that two pages look similar. The certificate shows your content carried your store's watermark before the stolen version appeared, pairs content fingerprints with dates, and can be verified independently by anyone you send it to." },
      { q: "How does the certificate establish who published first?", a: "It combines your protection date, the infringing page's own HTTP headers and the earliest Internet Archive snapshot of the infringing URL. The timeline argument is laid out for you rather than left for you to assemble." },
      { q: "Can Kirpik take the content down for me?", a: "Kirpik gives you the evidence, and the Learn section walks you through DMCA notices, host complaints and search deindexing. Takedown decisions stay in your hands, and for stubborn cases we recommend a specialist." },
      { q: "The theft already happened. Can Kirpik still help?", a: "Kirpik detects its own watermark, so text copied before you protected it cannot be identified that way. You can still pursue a takedown with other evidence, and the enforcement guide shows how. Protecting your store now means every future theft carries proof, and clone stores routinely scrape the same targets again." },
    ],
  },
  {
    title: "Pricing",
    items: [
      { q: "Is there a free plan?", a: "Yes. The Free plan protects up to 25 products and 3 articles or pages, includes paste detection, 5 URL checks a month and 1 Proof of Ownership Certificate, and never expires." },
      { q: "What do the paid plans add?", a: "Paid ($7.99/month) raises the limits to 100 products and 50 articles and pages, adds batch protection, 20 URL checks and 5 certificates a month. Pro ($19.99/month) removes the caps, adds Auto-Protect and 100 URL checks, and makes certificates unlimited." },
      { q: "Is there a yearly discount?", a: "Yes. Pro is $199 per year, which works out around 17% cheaper than paying monthly." },
      { q: "What happens if I downgrade?", a: "Nothing breaks. If your protected content exceeds the new plan's limits, Kirpik restores the newest items over the cap back to their unprotected state, and everything else carries on as normal." },
    ],
  },
];
