// Local sanity check of the edge converter against real built HTML.
import { readFileSync } from "node:fs";
import { htmlToMarkdown } from "../src/html-to-md.ts";

function mainOf(html) {
  const m = html.match(/<main[^>]*\bid=["']main["'][^>]*>([\s\S]*?)<\/main>/i);
  return m ? m[1] : html;
}

for (const [label, path] of [
  ["homepage", "../../dist/index.html"],
  ["how-it-works", "../../dist/how-it-works/index.html"],
]) {
  const html = readFileSync(new URL(path, import.meta.url), "utf8");
  const md = htmlToMarkdown(mainOf(html));
  console.log(`\n===== ${label} (${md.length} chars) =====`);
  console.log(md.split("\n").slice(0, 22).join("\n"));
}
