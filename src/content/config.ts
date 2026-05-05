import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    dateOfPublish: z.string(),
    topic: z.string().optional(),
    color: z.string().default("#2496ED"),
  }),
});

export const collections = {
  blog: blogCollection,
};
