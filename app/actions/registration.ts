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
      const { course, firstName, surname, email, phone, company, deliveryMethod, scheduledCourseId } = parsed.data;
      
      let courseId: number | undefined;

      if (course) {
          const courseRecord = await prisma.course.findUnique({
              where: { slug: course }
          });
          if (courseRecord) {
              courseId = courseRecord.id;
          } else {
              console.warn(`[Registration] Course slug provided but not found in DB: ${course}`);
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
              courseId,
              // If scheduledCourseId is present, we should also verify it matches the courseId if desired, 
              // but for now just saving it is enough. Be aware that 'scheduledCourseId' is the scalar field 
              // which Prisma might expect or we can use connect. 
              // In the original file, the schema says: 
              // scheduledCourse   ScheduledCourse? @relation(fields: [scheduledCourseId], references: [id])
              // So passing `scheduledCourseId` scalar is fine.
              scheduledCourseId
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
