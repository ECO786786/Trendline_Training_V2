"use server";

import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/contact-schema";

/**
 * Represents the state of a contact form submission.
 * @property success - Indicates whether the form submission was successful.
 * @property errors - A record of field names mapped to arrays of error messages, or undefined if no errors exist for that field.
 */
type ContactFormState = {
  success: boolean;
  errors: Record<string, string[] | undefined>;
};

export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
) {
  const rawData = Object.fromEntries(formData.entries());

  const parsed = contactSchema.safeParse({
    ...rawData,
    terms: rawData.terms === "on",
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
      const { fullName, email, phone, company, subject, message } = parsed.data;

      await prisma.inquiry.create({
          data: {
              type: "general",
              fullName,
              email,
              phone: phone || "",
              company: company || "",
              subject,
              message
          }
      });
      console.log("Contact inquiry saved to database");

      return {
        success: true,
        errors: {},
      };
  } catch (e) {
      console.error("Failed to save contact form:", e);
      return {
          success: false,
          errors: {
              form: ["Failed to send message. Please try again."]
          }
      };
  }
}
