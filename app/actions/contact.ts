"use server";

import pool from "@/lib/db";
import { contactSchema } from "@/lib/contact-schema";

/**
 * Represents the state of a contact form submission.
 * @property success - Indicates whether the form submission was successful.
 * @property errors - A record of field names mapped to arrays of error messages, or undefined if no errors exist for that field.
 * @property fields - The submitted field values, used to repopulate the form after a failed submission (React 19 resets form DOM after actions).
 */
type ContactFormState = {
  success: boolean;
  errors: Record<string, string[] | undefined>;
  fields?: Record<string, string>;
};

export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
) {
  const rawData = Object.fromEntries(formData.entries());

  const fields: Record<string, string> = {
    fullName: (rawData.fullName as string) || "",
    email: (rawData.email as string) || "",
    phone: (rawData.phone as string) || "",
    company: (rawData.company as string) || "",
    subject: (rawData.subject as string) || "",
    message: (rawData.message as string) || "",
  };

  const parsed = contactSchema.safeParse({
    ...rawData,
    terms: rawData.terms === "on",
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
      fields,
    };
  }

  try {
    const { fullName, email, phone, company, subject, message } = parsed.data;

    await pool.execute(
      `INSERT INTO contact_submissions (full_name, email, phone, company, subject, message)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [fullName, email, phone || "", company || "", subject, message]
    );

    return {
      success: true,
      errors: {},
    };
  } catch (e) {
    console.error("Failed to save contact form:", e);
    return {
      success: false,
      errors: {
        form: ["Failed to send message. Please try again."],
      },
      fields,
    };
  }
}
