"use server";

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

  // 👉 Do real work here (DB, email, etc.)
  //console.log("Form submitted:", parsed.data);
  console.log("Contact form submitted");

  return {
    success: true,
    errors: {},
  };
}
