import TrainingTimetable from "@/components/TrainingTimetable";
import { Course } from "@/components/TrainingTimetable";
import { courses as newCourses } from "@/data/courses";

export default function TrainingSchedulePage() {
  const initialCourses: Course[] = newCourses;

  return <TrainingTimetable initialCourses={initialCourses} />;
}
