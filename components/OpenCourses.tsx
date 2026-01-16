import Link from "next/link";
import Image from "next/image";

export default function OpenCourses() {
  const courses = [
    {
      image: "/images/excel.jpg",
      level: "Intermediate",
      startDate: "Feb 15, 2026",
      location: "Lusaka",
      title: "Data Analysis with Excel",
      description:
        "Intensive 3-day workshop focused on practical instruction in creating dashboards and visual representations.",
      link: "#",
    },
    {
      image: "/images/sql.jpg",
      level: "Beginner",
      startDate: "Mar 02, 2026",
      location: "Online",
      title: "SQL for decision makers",
      description:
        "Intensive 3-day workshop focused on learning to query data and build reports that matter.",
      link: "#",
    },
  ];

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 grid auto-cols-fr grid-cols-1 items-end gap-12 md:mb-18 md:grid-cols-[1fr_max-content] lg:mb-20 lg:gap-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4 text-[16px] text-[#1e3a8a]">
              Programs
            </p>
            <h2 className="text-[52px] font-medium leading-[120%] font-heading">
              Training schedule
            </h2>
            <p className="mt-5 md:mt-6">
              Upcoming sessions in Lusaka and Online. Spots are limited.
            </p>
          </div>
          <Link
            href="/brochures/calendar.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center px-6 py-2 border border-border-primary hover:bg-gray-100 transition-colors font-medium rounded-full"
          >
            View calendar
          </Link>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-12">
          {courses.map((course, index) => (
            <div key={index} className="flex flex-col items-start">
              <Link
                href={course.link}
                className="relative block aspect-3/2 w-full"
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  width={640}
                  height={427}
                  className="absolute size-full object-cover rounded-lg"
                />
                <span className="absolute right-4 top-4 bg-background-secondary px-2 py-1 text-sm font-semibold bg-white rounded-full">
                  {course.level}
                </span>
              </Link>
              <div className="mt-5 flex flex-col items-start md:mt-6">
                <div className="mb-3 flex flex-wrap gap-4 text-sm md:mb-4">
                  <div className="flex items-center gap-2">
                    <svg
                      className="size-6 flex-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Starts {course.startDate}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="size-6 flex-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{course.location}</span>
                  </div>
                </div>
              </div>
              <Link href={course.link} className="mb-2">
                <h2 className="text-xl font-bold md:text-2xl">
                  {course.title}
                </h2>
              </Link>
              <p>{course.description}</p>
              <Link
                href={course.link}
                className="mt-5 md:mt-6 inline-flex items-center gap-2 font-medium hover:underline"
              >
                Enroll now
                <svg
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-end md:hidden">
          <Link
            href="/brochures/calendar.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 hover:bg-gray-100 transition-colors font-medium "
          >
            View calendar
          </Link>
        </div>
      </div>
    </section>
  );
}
