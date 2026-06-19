import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const locale = z.enum(['fr', 'en']);

/** Per-service page bodies. Keyed by slug shared with src/lib/business.ts. */
const servicesCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    lang: locale,
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    category: z.string(),
    season: z.enum(['automne', 'hiver', 'toute-saison']).optional(),
    order: z.number().default(0),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/** Before/after portfolio entries, grouped by the existing job categories. */
const portfolioCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/portfolio' }),
  schema: z.object({
    lang: locale,
    title: z.string(),
    category: z.enum(['feuilles', 'drain', 'inondations', 'deneigement', 'toiture']),
    borough: z.string().optional(),
    beforeImage: z.string().optional(),
    afterImage: z.string().optional(),
    image: z.string().optional(),
    alt: z.string(),
    order: z.number().default(0),
    featured: z.boolean().default(false),
  }),
});

/** Real customer testimonials. Only genuine reviews get Review schema. */
const testimonialsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/testimonials' }),
  schema: z.object({
    lang: locale,
    author: z.string(),
    borough: z.string().optional(),
    quote: z.string(),
    /** Highlight the honesty story (Vanessa Longhorn) above all others. */
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

/** FAQ entries — answer-first, question-shaped (SEO + GEO). */
const faqCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/faq' }),
  schema: z.object({
    lang: locale,
    question: z.string(),
    answer: z.string(),
    category: z.string().optional(),
    order: z.number().default(0),
  }),
});

/** Blog posts (migrated + new local-intent content). */
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    lang: locale,
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  services: servicesCollection,
  portfolio: portfolioCollection,
  testimonials: testimonialsCollection,
  faq: faqCollection,
  blog: blogCollection,
};
