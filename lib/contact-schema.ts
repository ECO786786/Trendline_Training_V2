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

export const corporateInquirySchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.email("Enter a valid email address"),
  phone: z.string().optional(),
  employeeCount: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  terms: z.literal(true, {
    message: "You must accept the Privacy Policy",
  }),
});

export const registrationSchema = z
  .object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.email("Enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Please confirm your password"),
    terms: z.literal(true, {
      message: "You must accept the Terms and Conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ContactFormData = z.infer<typeof contactSchema>;
export type CorporateInquiryData = z.infer<typeof corporateInquirySchema>;
export type RegistrationData = z.infer<typeof registrationSchema>;
