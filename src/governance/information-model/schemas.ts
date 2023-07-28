import { z } from "zod";

export const helloSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  aliases: z.string(),
});


