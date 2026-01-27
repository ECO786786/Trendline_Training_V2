
import { prisma } from "@/lib/prisma";
import { CourseLevel } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      include: {
        curriculum: true,
        learningOutcomes: true,
      },
    });
    return NextResponse.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}

import { auth } from "@/auth";
import { courseSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const result = courseSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
    }

    const { 
        slug, title, subTitle, description, category, duration, level, 
        priceZM, priceUS, overview, prerequisites, certificate, imageSrc, imageAlt,
        curriculum, learningOutcomes 
    } = result.data;
    
    const course = await prisma.course.create({
      data: {
        slug,
        title,
        subTitle,
        description,
        category,
        duration,
        level: level as CourseLevel,
        priceZM,
        priceUS,
        overview,
        prerequisites,
        certificate,
        imageSrc,
        imageAlt,
        curriculum: {
          create: curriculum?.map((c: any) => ({
            title: c.title,
            description: c.description,
          })),
        },
        learningOutcomes: {
          create: learningOutcomes?.map((o: any) => ({
             description: typeof o === 'string' ? o : o.description
          })),
        },
      },
    });

    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    console.error("Error creating course:", error);
    return NextResponse.json(
      { error: "Failed to create course" },
      { status: 500 }
    );
  }
}
