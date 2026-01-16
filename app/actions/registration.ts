"use server";

import { registrationSchema } from "@/lib/contact-schema";

type RegistrationFormState = {
  success: boolean;
  errors: Record<string, string[] | undefined>;
};

export async function submitRegistrationForm(
  prevState: RegistrationFormState | null,
  formData: FormData
) {
  const rawData = Object.fromEntries(formData.entries());

  const parsed = registrationSchema.safeParse({
    ...rawData,
    terms: rawData.terms === "on",
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // 👉 Do real work here (create user, hash password, etc.)
  console.log("Registration submitted");

  return {
    success: true,
    errors: {},
  };
}
