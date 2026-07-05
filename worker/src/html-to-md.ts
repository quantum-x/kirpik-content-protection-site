// Minimal, dependency-light HTML -> Markdown converter for the edge.
// node-html-parser is pure JS (no Node built-ins), so it runs in Workers.
// We only need to convert the <main> content of our own pages, so this handles
// the elements we actually emit rather than being a general-purpose converter.
import { parse } from "node-html-parser";

const ORIGIN = "https://kirpik.app/";

const NAMED: Record<string, string> = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
  mdash: "—", ndash: "–", hellip: "…", rsquo: "’", lsquo: "‘",
  ldquo: "“", rdquo: "”", copy: "©", reg: "®", trade: "™",
};

function decodeEntities(s: string): string {
  return s.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (m, code) => {
    if (code[0] === "#") {
      const n = code[1] === "x" || code[1] === "X"
        ? parseInt(code.slice(2), 16)
        : parseInt(code.slice(1), 10);
      return Number.isFinite(n) ? String.fromCodePoint(n) : m;
    }
    const key = code.toLowerCase();
    return key in NAMED ? NAMED[key] : m;
  });
}

const collapse = (s: string) => decodeEntities(s).replace(/\s+/g, " ");

function abs(href: string): string {
  if (!href) return "";
  try {
    return new URL(href, ORIGIN).href;
  } catch {
    return href;
  }
}

// Duck-typed node access (avoids importing node-html-parser's types).
type N = any;
const isText = (n: N) => n.nodeType === 3;
const isEl = (n: N) => n.nodeType === 1;
const tag = (n: N) => String(n.tagName || "").toUpperCase();
const kids = (n: N): N[] => n.childNodes || [];

function inline(node: N): string {
  return kids(node).map(renderInline).join("");
}

function renderInline(n: N): string {
  if (isText(n)) return collapse(n.rawText ?? "");
  if (!isEl(n)) return "";
  const t = tag(n);
  const inner = () => inline(n);
  switch (t) {
    case "A": {
      const href = n.getAttribute("href") || "";
      const label = inner().trim();
      if (!label) return "";
      return href ? `[${label}](${abs(href)})` : label;
    }
    case "STRONG":
    case "B":
      return `**${inner().trim()}**`;
    case "EM":
    case "I":
      return `*${inner().trim()}*`;
    case "CODE":
      return "`" + decodeEntities((n.text ?? "").trim()) + "`";
    case "BR":
      return "  \n";
    case "IMG": {
      const alt = n.getAttribute("alt") || "";
      const src = n.getAttribute("src") || "";
      return src ? `![${alt}](${abs(src)})` : "";
    }
    case "SCRIPT":
    case "STYLE":
    case "SVG":
    case "BUTTON":
      return "";
    default:
      return inner();
  }
}

function listItems(node: N, ordered: boolean): string {
  const lis = kids(node).filter((c: N) => isEl(c) && tag(c) === "LI");
  return lis
    .map((li: N, i: number) => {
      const marker = ordered ? `${i + 1}.` : "-";
      const content = block(li).trim().replace(/\n+/g, " ").trim();
      return `${marker} ${content}`;
    })
    .filter((l: string) => l.length > 2)
    .join("\n");
}

function block(node: N): string {
  return kids(node).map(renderBlock).join("");
}

function renderBlock(n: N): string {
  if (isText(n)) {
    const t = collapse(n.rawText ?? "");
    return t.trim() ? t : "";
  }
  if (!isEl(n)) return "";
  const t = tag(n);
  switch (t) {
    case "SCRIPT":
    case "STYLE":
    case "SVG":
    case "NOSCRIPT":
    case "BUTTON":
    case "FORM":
    case "NAV":
      return "";
    case "H1":
    case "H2":
    case "H3":
    case "H4":
    case "H5":
    case "H6": {
      const level = Number(t[1]);
      const text = inline(n).trim();
      return text ? `\n\n${"#".repeat(level)} ${text}` : "";
    }
    case "P": {
      const text = inline(n).trim();
      return text ? `\n\n${text}` : "";
    }
    case "UL":
      return `\n\n${listItems(n, false)}`;
    case "OL":
      return `\n\n${listItems(n, true)}`;
    case "BLOCKQUOTE": {
      const inner = block(n).trim();
      return inner ? `\n\n${inner.split("\n").map((l) => `> ${l}`).join("\n")}` : "";
    }
    case "PRE":
      return `\n\n\`\`\`\n${decodeEntities(n.text ?? "").replace(/\n+$/, "")}\n\`\`\``;
    case "HR":
      return `\n\n---`;
    case "IMG":
      return `\n\n${renderInline(n)}`;
    case "FIGCAPTION": {
      const text = inline(n).trim();
      return text ? `\n\n_${text}_` : "";
    }
    // Inline elements that appear at block level.
    case "A":
    case "STRONG":
    case "EM":
    case "B":
    case "I":
    case "CODE":
    case "SPAN":
    case "BR":
      return renderInline(n);
    // Everything structural (div/section/article/aside/table/...) just recurses.
    default:
      return block(n);
  }
}

export function htmlToMarkdown(mainHtml: string): string {
  const root = parse(mainHtml, {
    comment: false,
    blockTextElements: { script: false, style: false, pre: true },
  });
  const md = block(root);
  return md.replace(/\n{3,}/g, "\n\n").trim() + "\n";
}
