
import { prisma } from "@/lib/prisma";
import { DeliveryMethod } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const registrations = await prisma.registration.findMany({
      include: {
        course: {
            select: { title: true, slug: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(registrations);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch registrations" },
      { status: 500 }
    );
  }
}

import { registrationSchema } from "@/lib/contact-schema";

// ... existing GET

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate with Zod
    const result = registrationSchema.safeParse({
        ...body,
        terms: true // API clients usually imply acceptance or we can require it in body
    });

    if (!result.success) {
        return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
    }

    const { firstName, surname, email, phone, company, deliveryMethod, course } = result.data;
    
    // Attempt to connect course via ID if provided, or find by slug from schema
    let courseId: number | undefined;
    if (body.courseId) courseId = body.courseId;
    else if (course) {
        const courseRecord = await prisma.course.findUnique({ where: { slug: course } });
        if (courseRecord) courseId = courseRecord.id;
    }
    
    const registration = await prisma.registration.create({
      data: {
        firstName,
        surname,
        email,
        phone: phone || "",
        company,
        deliveryMethod: deliveryMethod === "online" ? DeliveryMethod.ONLINE_LIVE : deliveryMethod === "in-person" ? DeliveryMethod.IN_PERSON : DeliveryMethod.HYBRID,
        // Optional Link to course if courseId provided
        course: courseId ? { connect: { id: courseId } } : undefined
      },
    });

    return NextResponse.json(registration, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create registration" },
      { status: 500 }
    );
  }
}
