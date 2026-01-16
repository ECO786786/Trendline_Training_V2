"use server";

import { corporateInquirySchema } from "@/lib/contact-schema";

type CorporateInquiryFormState = {
  success: boolean;
  errors: Record<string, string[] | undefined>;
};

export async function submitCorporateInquiry(
  prevState: CorporateInquiryFormState | null,
  formData: FormData
) {
  const rawData = Object.fromEntries(formData.entries());

  const parsed = corporateInquirySchema.safeParse({
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
  console.log("Corporate inquiry submitted");

  return {
    success: true,
    errors: {},
  };
}
