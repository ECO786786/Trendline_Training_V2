import TrainingSchedule from "@/components/TrainingTimetable";
import { prisma } from "@/lib/prisma";
import { Course } from "@/components/TrainingTimetable";

export const dynamic = "force-dynamic";

export default async function TrainingSchedulePage() {
  const scheduledCourses = await prisma.scheduledCourse.findMany({
    include: {
      course: true,
    },
    orderBy: {
      startDate: "asc",
    },
  });

  const formattedCourses: Course[] = scheduledCourses.map((scheduled) => {
    const start = new Date(scheduled.startDate);
    const day = start.getDate();
    const month = start.toLocaleString("default", { month: "short" }).toUpperCase();
    
    // Calculate seats left (mock or real if we have registrations)
    // For now assuming 20 max attendees and we can maybe fetch registrations count later
    // The user just wants the ID to be correct.
    const seatsLeft = 20; 

    return {
      id: scheduled.id, // This is the REAL database ID!
      dateRange: `${day} ${month}`,
      title: scheduled.course.title,
      description: scheduled.course.description || scheduled.course.subTitle || "",
      duration: scheduled.course.duration,
      seatsLeft: seatsLeft,
      isLimited: seatsLeft < 5,
      status: "open",
      slug: scheduled.course.slug,
    };
  });

  return <TrainingSchedule initialCourses={formattedCourses} />;
}
