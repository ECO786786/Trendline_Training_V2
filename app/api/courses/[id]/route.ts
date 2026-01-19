
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = parseInt((await params).id);
  
  if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const course = await prisma.course.findUnique({
      where: { id },
      include: {
        curriculum: true,
        learningOutcomes: true,
      },
    });

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json(course);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch course" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = parseInt((await params).id);
  
  if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const body = await request.json();

    // Transaction to update base fields and replace relations
    const updatedCourse = await prisma.$transaction(async (tx) => {
        // 1. Update main fields
        const course = await tx.course.update({
            where: { id },
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
            }
        });

        // 2. Handle Relations if provided (Replace all strategy)
        if (body.learningOutcomes) {
            await tx.learningOutcome.deleteMany({ where: { courseId: id } });
            await tx.learningOutcome.createMany({
                data: body.learningOutcomes.map((o: any) => ({
                    courseId: id,
                    description: typeof o === 'string' ? o : o.description
                }))
            });
        }

        if (body.curriculum) {
            await tx.curriculumItem.deleteMany({ where: { courseId: id } });
            await tx.curriculumItem.createMany({
                data: body.curriculum.map((c: any) => ({
                    courseId: id,
                    title: c.title,
                    description: c.description
                }))
            });
        }

        return tx.course.findUnique({
             where: { id },
             include: { curriculum: true, learningOutcomes: true }
        });
    });

    return NextResponse.json(updatedCourse);
  } catch (error) {
    console.error("Error updating course:", error);
    return NextResponse.json(
      { error: "Failed to update course" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = parseInt((await params).id);
  
  if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    await prisma.course.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Course deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete course" },
      { status: 500 }
    );
  }
}
