import pool from "@/lib/db";
import { NextResponse } from "next/server";
import { RowDataPacket } from "mysql2";
import { registrationSchema } from "@/lib/contact-schema";

export async function GET() {
  try {
    const [registrations] = await pool.execute<RowDataPacket[]>(
      `SELECT r.*, r.course_slug as courseSlug
       FROM registrations r
       ORDER BY r.created_at DESC`
    );
    return NextResponse.json(registrations);
  } catch (error) {
    console.error("Error fetching registrations:", error);
    return NextResponse.json(
      { error: "Failed to fetch registrations" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = registrationSchema.safeParse({
        ...body,
        terms: true 
    });

    if (!result.success) {
        return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
    }

    const { firstName, surname, email, phone, company, deliveryMethod, course } = result.data;
    const scheduledCourseId = body.scheduledCourseId || null;
    
    const deliveryMethodMapped = 
        deliveryMethod === "online" ? "ONLINE_LIVE" : 
        deliveryMethod === "in-person" ? "IN_PERSON" : 
        "HYBRID";

    const [insertResult] = await pool.execute(
      `INSERT INTO registrations (first_name, surname, email, phone, company, delivery_method, course_slug, scheduled_course_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [firstName, surname, email, phone || "", company || "", deliveryMethodMapped, course || null, scheduledCourseId]
    );

    return NextResponse.json({ id: (insertResult as any).insertId, ...result.data }, { status: 201 });
  } catch (error) {
    console.error("Error creating registration:", error);
    return NextResponse.json(
      { error: "Failed to create registration" },
      { status: 500 }
    );
  }
}
