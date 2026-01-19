
import { prisma } from "@/lib/prisma";
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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation implies required fields are present
    // For brevity, we'll trust the body structure matches schema mostly, 
    // but in production use Zod.
    
    const course = await prisma.course.create({
      data: {
        slug: body.slug,
        title: body.title,
        subTitle: body.subTitle,
        description: body.description,
        category: body.category,
        duration: body.duration,
        level: body.level,
        priceZM: body.priceZM,
        priceUS: body.priceUS,
        overview: body.overview,
        prerequisites: body.prerequisites,
        certificate: body.certificate,
        imageSrc: body.imageSrc,
        imageAlt: body.imageAlt,
        learningOutcomes: {
            create: body.learningOutcomes?.map((outcome: any) => ({
                description: typeof outcome === 'string' ? outcome : outcome.description
            })) || []
        },
        curriculum: {
            create: body.curriculum?.map((item: any) => ({
                title: item.title,
                description: item.description
            })) || []
        }
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
