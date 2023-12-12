// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';


const careerCollection = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    shortName: z.string().optional(),
    industry: z.string(),
    snippet: z.string().optional(),
    startup: z.boolean().optional(),
    year: z.number(),
    yearTo: z.number().optional(),
    current: z.boolean().optional(),
    seq: z.number().optional(),
    duration: z.string().optional(),
    role: z.string(),
    basis: z.enum(["Contract"]).optional(),
    lead: z.boolean().optional(),
    tech: z.array(z.string()),
    locality: z.string().optional(),
    highlight: z.boolean().optional(),
    hide: z.boolean().optional(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    period: z.string(),
    seq: z.number().optional(),
    hide: z.boolean().optional(),
  }),
});

const educationCollection = defineCollection({
  type: 'content',
  schema: z.object({
    institution: z.string(),
    year: z.number(),
    yearTo: z.number().optional(),
    current: z.boolean().optional(), // theoretically possible?
    seq: z.number().optional(),
    title: z.string(),
    level: z.string(),
    tech: z.array(z.string()),
    hide: z.boolean().optional(),
  }),
});

const qualsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    institution: z.string(),
    year: z.number(),
    yearTo: z.number().optional(),
    seq: z.number().optional(),
    title: z.string(),
    badges: z.array(z.string()).optional(),
    hide: z.boolean().optional(),
  }),
});

const techCollection = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.string(),
    seq: z.number().optional(),
    hide: z.boolean().optional(),
    tech: z.array(z.object({
      name: z.string(),
      score: z.number(),
      badge: z.boolean().optional(),
    }))
  })
})

export const collections = {
  "career": careerCollection,
  "projects": projectsCollection,
  "education": educationCollection,
  "quals": qualsCollection,
  "tech": techCollection
};