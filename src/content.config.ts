import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Yazılar: src/content/articles/{tr,en,ru}/<adres>.md
// Aynı yazının farklı dillerdeki sürümleri aynı "key" değerini taşır.
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    key: z.string(),
  }),
});

export const collections = { articles };
