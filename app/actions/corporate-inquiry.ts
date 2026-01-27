"use server";

import { prisma } from "@/lib/prisma";
import { corporateInquirySchema } from "@/lib/contact-schema";
import { InquiryType } from "@prisma/client";

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

  try {
      const { fullName, email, phone, company, message, serviceName, servicePrice } = parsed.data;

      await prisma.inquiry.create({
          data: {
              type: InquiryType.CORPORATE,
              fullName,
              email,
              phone: phone || "",
              company: company || "",
              message: message || "",
              serviceName,
              servicePrice
          }
      });

      return {
        success: true,
        errors: {},
      };
  } catch (e) {
      console.error("Failed to save corporate inquiry:", e);
      return {
          success: false,
          errors: {
              form: ["Failed to submit inquiry. Please try again."]
          }
      };
  }
}
