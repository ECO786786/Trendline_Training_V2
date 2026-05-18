import { z } from "zod";
import sanitizeHtml from "sanitize-html";

const sanitizedString = z.string().transform((str) => {
  return sanitizeHtml(str, {
    allowedTags: [],
    allowedAttributes: {},
  });
});

export const contactSchema = z.object({
  fullName: sanitizedString.pipe(z.string().min(2, "Full name is required")),
  email: z.string().email("Enter a valid email address"),
  phone: sanitizedString.pipe(z.string().min(1, "Phone number is required")),
  company: sanitizedString.optional(),
  subject: sanitizedString.pipe(z.string().min(2, "Subject is required")),
  message: sanitizedString.pipe(z.string().min(10, "Message must be at least 10 characters")),
  terms: z.literal(true, {
    message: "You must accept the Privacy Policy",
  }),
});



export const registrationSchema = z.object({
    firstName: sanitizedString.pipe(z.string().min(2, "First name is required")),
    surname: sanitizedString.pipe(z.string().min(2, "Surname is required")),
    email: z.string().email("Enter a valid email address"),
    phone: sanitizedString.pipe(z.string().min(1, "Phone number is required")),
    company: sanitizedString.optional(),
    course: sanitizedString.pipe(z.string().min(1, "Please select a course")), 
    scheduledCourseId: z.coerce.number().optional(),
    deliveryMethod: z.enum(["in-person", "online", "hybrid"]),
    terms: z.literal(true, {
      message: "You must accept the Privacy Policy",
    }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type RegistrationData = z.infer<typeof registrationSchema>;
