// File: src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  
  schema: ({ image }: { image: () => any }) => z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().max(160, "Keep description SEO friendly"),
    
    // Main high-res cover image (Required)
    // Used for SEO, Detail Page Hero, and Grid fallback
    image: image().refine((img: { width: number }) => img.width >= 1080, {
      message: "Cover image must be at least 1080px wide.",
    }),
    
    // Grid specific assets
    thumbnail: z.string().optional(),       // Custom image for the grid (static)
    thumbnail_video: z.string().optional(), // Video to play on hover
    
    // Detail page assets
    video: z.string().optional(),           // Main video for detail page
    
    role: z.string().default('Full Stack'),
    gameLink: z.string().url().optional(),
    genre: z.string().default('Experience'),
    
    stack: z.array(z.string()).min(1, "List tools (e.g. Luau, Rojo, Blender)"),
    draft: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = {
  projects,
};