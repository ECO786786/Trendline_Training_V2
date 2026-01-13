import SubHero from "@/components/hero/subHero";
import CourseGrid from "@/components/CourseGrid";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <>
      <SubHero
        title="Our Training Courses"
        description="Discover our comprehensive range of training programs designed to enhance your organization's data capabilities and strategic decision making."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
        ]}
      />
      <>
        <CourseGrid courses={courses || []} />
      </>
    </>
  );
}
