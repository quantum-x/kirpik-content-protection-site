import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cluster: z.string(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    updated: z.coerce.date().optional(),
    pillar: z.boolean().default(false),
    draft: z.boolean().default(false),
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { articles };
