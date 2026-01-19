"use server";

import { prisma } from "@/lib/prisma";
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

  try {
      const { course, firstName, surname, email, phone, company, deliveryMethod } = parsed.data;
      
      let courseId: number | undefined;

      if (course) {
          const courseRecord = await prisma.course.findUnique({
              where: { slug: course }
          });
          if (courseRecord) {
              courseId = courseRecord.id;
          }
      }

      await prisma.registration.create({
          data: {
              firstName,
              surname,
              email,
              phone: phone || "", // Schema might allow optional, DB expects string
              company,
              deliveryMethod,
              courseId
          }
      });
      
      console.log("Registration saved to database");
      return {
        success: true,
        errors: {},
      };

  } catch (e) {
      console.error("Failed to save registration:", e);
      return {
          success: false,
          errors: {
              form: ["Failed to save registration. Please try again."]
          }
      }
  }
}
