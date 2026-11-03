import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Makaleler: src/content/articles/{tr,en,ru}/<adres>.md
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

// Faaliyet alanı sayfaları: src/content/areas/{tr,en,ru}/<adres>.md
// "key", src/i18n/content/*.ts içindeki practice.areas[].id ile aynıdır; başlık, özet ve
// süreler oradan gelir. Gövde giriş metnidir.
const areas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/areas' }),
  schema: z.object({
    key: z.string(),
    imageAlt: z.string(),
    services: z.array(z.object({ title: z.string(), text: z.string() })).min(1),
    process: z.array(z.object({ title: z.string(), text: z.string() })).optional(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

// Dilekçe örnekleri: src/content/petitions/<adres>.md
// Gövde Türkçe dilekçe metnidir ve çevrilmez; [KÖŞELİ PARANTEZ] doldurulacak boşluğu gösterir.
// scripts/build-docs.mjs aynı dosyalardan Word ve PDF üretir. EN ve RU sayfalar için yalnız
// açıklamalar "i18n" altında çevrilir.
const petitionInfo = z.object({
  title: z.string(),
  summary: z.string(),
  deadline: z.object({ label: z.string(), detail: z.string() }),
  authority: z.string(),
  steps: z.array(z.string()).min(1),
});

const petitions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/petitions' }),
  schema: petitionInfo.extend({
    // Faaliyet alanı kimliği; alan sayfasında "Bu alandaki dilekçeler" altında listelenir
    area: z.string().optional(),
    law: z.string(),
    updated: z.coerce.date(),
    order: z.number().default(100),
    i18n: z.object({ en: petitionInfo, ru: petitionInfo }),
  }),
});

export const collections = { articles, areas, petitions };
