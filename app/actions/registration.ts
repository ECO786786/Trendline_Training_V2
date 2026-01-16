"use server";

import { registrationSchema } from "@/lib/registration-schema";

type RegistrationFormState = {
  success: boolean;
  errors: Record<string, string[] | undefined>;
};

export async function submitRegistrationForm(
  prevState: RegistrationFormState | null,
  formData: FormData
) {
  const rawData = Object.fromEntries(formData.entries());

  const parsed = registrationSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // 👉 Do real work here (DB, email, etc.)
  console.log("Registration form submitted:", parsed.data);

  return {
    success: true,
    errors: {},
  };
}
