import Image from "next/image";
import Link from "next/link";

interface Course {
  id: number;
  category: string;
  duration: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
}

interface CourseGridProps {
  courses: Course[];
}

export default function CourseGrid({ courses }: CourseGridProps) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex size-full flex-col items-center justify-start border border-gray-200 hover:shadow-lg transition-shadow duration-300 rounded-lg"
            >
              <Link href={course.buttonLink} className="w-full">
                <div className="relative w-full aspect-[3/2] overflow-hidden rounded-t-lg">
                  <Image
                    src={course.imageSrc}
                    alt={course.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </Link>
              <div className="px-5 py-6 md:p-6">
                <div className="mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-[#1e3a8a1a] px-2 py-1 text-sm font-medium rounded-full text-[#1e3a8a]">
                    {course.category}
                  </p>
                  <p className="inline text-sm font-semibold text-gray-700">
                    {course.duration}
                  </p>
                </div>
                <Link
                  className="mb-2 block max-w-full"
                  href={course.buttonLink}
                >
                  <h2 className="text-xl font-bold md:text-2xl hover:text-[#1e3a8a] transition-colors">
                    {course.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <Link
                  href={course.buttonLink}
                  className="mt-6 flex items-center justify-start gap-x-2 text-gray-900 hover:text-[#1e3a8a] transition-colors font-medium"
                >
                  {course.buttonText}
                  <svg
                    className="w-5 h-5"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
