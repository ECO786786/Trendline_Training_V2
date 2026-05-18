"use server";

import pool from "@/lib/db";
import { registrationSchema } from "@/lib/contact-schema";

export async function submitRegistrationForm(
  prevState: any,
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

      const mappedMethod = 
          deliveryMethod === "online" ? "ONLINE_LIVE" : 
          deliveryMethod === "in-person" ? "IN_PERSON" : 
          "HYBRID";

      // course is the slug, so we save it directly
      await pool.execute(
          `INSERT INTO registrations (first_name, surname, email, phone, company, delivery_method, course_slug, scheduled_course_id)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [firstName, surname, email, phone || "", company || "", mappedMethod, course || null, scheduledCourseId || null]
      );
      
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
