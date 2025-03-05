import { z } from "zod";

export const contactUsSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string(),
  content: z.string().min(1, "Content is required"),
  source: z.string().min(1, "Source is required"),
});

export type FlattenedErrors = z.inferFlattenedErrors<typeof contactUsSchema>;
