import { defineCollection, z } from 'astro:content';

const hello = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
    aliases: z.string(),
	}),
});

export const collections = { hello };