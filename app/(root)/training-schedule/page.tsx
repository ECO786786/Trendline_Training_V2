import TrainingSchedule from "@/components/TrainingTimetable";
import { prisma } from "@/lib/prisma";
import { Course } from "@/components/TrainingTimetable";

export const dynamic = "force-dynamic";

export default async function TrainingSchedulePage() {
  const scheduledCourses = await prisma.scheduledCourse.findMany({
    where: {
      startDate: {
        gte: new Date(),
      },
    },
    include: {
      course: true,
      _count: {
        select: {
          registrations: true,
        },
      },
    },
    orderBy: {
      startDate: "asc",
    },
  });

  const formattedCourses: Course[] = scheduledCourses.map((scheduled) => {
    const start = new Date(scheduled.startDate);
    const day = start.getDate();
    const month = start.toLocaleString("default", { month: "short" }).toUpperCase();
    
    const maxAttendees = scheduled.maxAttendees || 20;
    const registrationsCount = scheduled._count.registrations;
    const seatsLeft = Math.max(0, maxAttendees - registrationsCount);

    let status: "open" | "closed" | "waitlist" = "open";
    if (seatsLeft === 0) {
      status = "closed";
    }

    return {
      id: scheduled.id, 
      dateRange: `${day} ${month}`,
      title: scheduled.course.title,
      description: scheduled.course.description || scheduled.course.subTitle || "",
      duration: scheduled.course.duration,
      seatsLeft: seatsLeft,
      isLimited: seatsLeft < 5 && seatsLeft > 0,
      status: status,
      slug: scheduled.course.slug,
    };
  });

  return <TrainingSchedule initialCourses={formattedCourses} />;
}
