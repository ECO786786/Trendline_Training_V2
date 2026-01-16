"use server";

import { corporateInquirySchema } from "@/lib/corporate-inquiry-schema";

type CorporateInquiryFormState = {
  success: boolean;
  errors: Record<string, string[] | undefined>;
};

export async function submitCorporateInquiry(
  prevState: CorporateInquiryFormState | null,
  formData: FormData
) {
  const rawData = Object.fromEntries(formData.entries());

  const parsed = corporateInquirySchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // 👉 Do real work here (DB, email, etc.)
  console.log("Corporate inquiry submitted:", parsed.data);

  return {
    success: true,
    errors: {},
  };
}
