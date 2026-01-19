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
  fullName: z.string().min(2, "Full name is required"),
  email: z.email("Enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"), // InquiryModal uses phone as required *
  company: z.string().optional(), // InquiryModal doesn't seem to have company input in the snippet? I saw it in walkthrough. Assuming optional/present.
  message: z.string().optional(), // 'Additional Notes'
  serviceName: z.string().optional(),
  servicePrice: z.string().optional(),
  terms: z.literal(true, {
    message: "You must accept the Privacy Policy",
  }),
});

export const registrationSchema = z.object({
    firstName: z.string().min(2, "First name is required"),
    surname: z.string().min(2, "Surname is required"),
    email: z.email("Enter a valid email address"),
    phone: z.string().optional(), // In registration form (line 304), it's just 'Phone Number', no asterisk visible in snippet? Wait, line 249 says simply 'Phone Number'. 
    // Actually Enrollment form usually requires phone. I'll make it optional string to be safe or min(1) if required.
    // In Enrollment.tsx (the component), phone was optional.
    company: z.string().optional(),
    course: z.string().optional(), // Slug
    deliveryMethod: z.enum(["in-person", "online", "hybrid"]),
    terms: z.literal(true, {
      message: "You must accept the Privacy Policy",
    }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type CorporateInquiryData = z.infer<typeof corporateInquirySchema>;
export type RegistrationData = z.infer<typeof registrationSchema>;
