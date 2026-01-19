
import { prisma } from "@/lib/prisma";
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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Attempt to connect course via ID if provided, or slug lookup if needed
    // Assuming body contains flat registration data
    
    const registration = await prisma.registration.create({
      data: {
        firstName: body.firstName,
        surname: body.surname,
        email: body.email,
        phone: body.phone,
        company: body.company,
        deliveryMethod: body.deliveryMethod,
        // Optional Link to course if courseId provided
        course: body.courseId ? { connect: { id: body.courseId } } : undefined
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
