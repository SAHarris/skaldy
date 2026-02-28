import { defineCollection, z } from 'astro:content';

const intelCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    thumbnail: z.string(),
  }),
});

export const collections = {
  'intel': intelCollection,
};
