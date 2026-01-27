"use server";

import { prisma } from "@/lib/prisma";
import { registrationSchema } from "@/lib/contact-schema";
import { DeliveryMethod } from "@prisma/client";

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

      let mappedMethod: DeliveryMethod;
      switch (deliveryMethod) {
        case "in-person":
          mappedMethod = DeliveryMethod.IN_PERSON;
          break;
        case "online":
          mappedMethod = DeliveryMethod.ONLINE_LIVE;
          break;
        case "hybrid":
          mappedMethod = DeliveryMethod.HYBRID;
          break;
        default:
          mappedMethod = DeliveryMethod.ONLINE_LIVE;
      }

      await prisma.registration.create({
          data: {
              firstName,
              surname,
              email,
              phone: phone || "",
              company,
              deliveryMethod: mappedMethod,
              courseId
          }
      });
      
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
