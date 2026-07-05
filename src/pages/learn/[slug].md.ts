import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE } from "../../config";

// Static markdown mirror of each Learn article, served at /learn/<slug>.md.
// The static-host equivalent of "Markdown for Agents": GitHub Pages cannot do
// Accept-header negotiation, so we publish the markdown at a stable URL and
// advertise it via <link rel="alternate" type="text/markdown"> on the HTML page.
export async function getStaticPaths() {
  const articles = await getCollection("articles", ({ data }) => !data.draft);
  return articles.map((entry) => ({ params: { slug: entry.id }, props: { entry } }));
}

const iso = (d: Date) => d.toISOString().slice(0, 10);

export const GET: APIRoute = ({ props }) => {
  const { entry } = props as { entry: Awaited<ReturnType<typeof getCollection>>[number] };
  const fm = entry.data as {
    title: string;
    summary: string;
    description: string;
    pubDate: Date;
    updated?: Date;
  };
  const url = `${SITE.url}/learn/${entry.id}/`;

  const md = [
    `# ${fm.title}`,
    "",
    `> ${fm.summary}`,
    "",
    `Source: ${url}`,
    `Published: ${iso(fm.pubDate)}${fm.updated ? ` · Updated: ${iso(fm.updated)}` : ""}`,
    `Publisher: ${SITE.name} (${SITE.developer})`,
    "",
    "---",
    "",
    entry.body?.trim() ?? "",
    "",
  ].join("\n");

  return new Response(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "X-Robots-Tag": "all",
    },
  });
};
