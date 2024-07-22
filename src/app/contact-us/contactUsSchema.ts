import { z } from "zod";

export const contactUsSchema = z.object({
  name: z.string().min(1, "Name is required!!!"),
  email: z.string().email("Invalid email address"),
  content: z.string(),
});

export type FlattenedErrors = z.inferFlattenedErrors<typeof contactUsSchema>;
