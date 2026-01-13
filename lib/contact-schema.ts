import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.email("Enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  terms: z.literal(true, {
    message: "You must accept the Privacy Policy",
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
