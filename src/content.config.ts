import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const facets = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/facets" }),
  schema: z.object({
    title: z.string(),
    icon: z.enum(["shield", "wing", "star"]),
    order: z.number(),
  }),
});

const timeline = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/timeline" }),
  schema: z.object({
    org: z.string(),
    url: z.string().url().optional(),
    role: z.string(),
    dates: z.string(),
    kind: z.enum(["work", "education", "service"]),
    order: z.number(),
  }),
});

export const collections = { facets, timeline };
