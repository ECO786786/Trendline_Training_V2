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
  phone: sanitizedString.optional(),
  company: sanitizedString.optional(),
  subject: sanitizedString.pipe(z.string().min(2, "Subject is required")),
  message: sanitizedString.pipe(z.string().min(10, "Message must be at least 10 characters")),
  terms: z.literal(true, {
    message: "You must accept the Privacy Policy",
  }),
});

export const corporateInquirySchema = z.object({
  fullName: sanitizedString.pipe(z.string().min(2, "Full name is required")),
  email: z.string().email("Enter a valid email address"),
  phone: sanitizedString.pipe(z.string().min(1, "Phone number is required")),
  company: sanitizedString.optional(),
  message: sanitizedString.optional(),
  serviceName: sanitizedString.optional(),
  servicePrice: sanitizedString.optional(),
  terms: z.literal(true, {
    message: "You must accept the Privacy Policy",
  }),
});

export const registrationSchema = z.object({
    firstName: sanitizedString.pipe(z.string().min(2, "First name is required")),
    surname: sanitizedString.pipe(z.string().min(2, "Surname is required")),
    email: z.string().email("Enter a valid email address"),
    phone: sanitizedString.optional(),
    company: sanitizedString.optional(),
    course: sanitizedString.optional(), // Slug
    deliveryMethod: z.enum(["in-person", "online", "hybrid"]),
    terms: z.literal(true, {
      message: "You must accept the Privacy Policy",
    }),
});

export const courseSchema = z.object({
  slug: sanitizedString.pipe(z.string().min(1, "Slug is required")),
  title: sanitizedString.pipe(z.string().min(1, "Title is required")),
  subTitle: sanitizedString.optional(),
  description: sanitizedString.optional(),
  category: sanitizedString.pipe(z.string().min(1, "Category is required")),
  duration: sanitizedString.pipe(z.string().min(1, "Duration is required")),
  level: sanitizedString.pipe(z.string().min(1, "Level is required")),
  priceZM: z.number().min(0, "Price (ZM) must be non-negative"),
  priceUS: z.number().min(0, "Price (US) must be non-negative"),
  overview: sanitizedString.pipe(z.string().min(1, "Overview is required")),
  prerequisites: sanitizedString.optional(),
  certificate: sanitizedString.optional(),
  imageSrc: sanitizedString.optional(),
  imageAlt: sanitizedString.optional(),
  curriculum: z.array(z.object({
      title: sanitizedString,
      description: sanitizedString
  })).optional(),
  learningOutcomes: z.array(z.union([sanitizedString, z.object({ description: sanitizedString })])).optional()
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type CorporateInquiryData = z.infer<typeof corporateInquirySchema>;
export type RegistrationData = z.infer<typeof registrationSchema>;
export type CourseData = z.infer<typeof courseSchema>;
