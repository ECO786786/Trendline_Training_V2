"use client";

import { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/data/courseDetails";

export default function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const course = getCourseBySlug(slug);

  const [expandedModule, setExpandedModule] = useState<number>(0);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-linear-to-br from-[#1e3a8a] to-[#172554] text-white">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 py-16 lg:py-24">
          <nav className="flex gap-2 text-sm mb-8">
            <Link href="/" className="text-white hover:text-white">
              Home
            </Link>
            <span className="text-blue-300">{">"}</span>
            <Link href="/courses" className="text-white hover:text-white">
              Courses
            </Link>
            <span className="text-blue-300">{">"}</span>
            <span className="text-white">{course.title}</span>
          </nav>
          <div className="max-w-3xl flex flex-col gap-6">
            <h1 className="text-4xl lg:text-6xl font-medium leading-[120%] tracking-[-0.01em]">
              {course.title}
            </h1>
            <p className="text-lg text-white leading-relaxed max-w-2xl">
              {course.subTitle}
            </p>
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
                <span className="text-white">{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                </svg>
                <span className="text-white">{course.level}</span>
              </div>
              {course.certificate === "Yes" && (
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-13 5l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                  <span className="text-white">Certificate Included</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 flex flex-col gap-12">
            <section>
              <h3 className="text-[#1e3a8a] text-2xl font-bold mb-4">
                Course Overview
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {course.overview}
              </p>
              <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl">
                <h4 className="text-gray-900 font-bold mb-3 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#1e3a8a]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  Prerequisites
                </h4>
                <p className="text-gray-700 ml-2">{course.prerequisites}</p>
              </div>
            </section>
            <section>
              <h3 className="text-[#1e3a8a] text-2xl font-bold mb-6">
                What You Will Learn
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {course.learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[#1e3a8a] text-2xl font-bold">
                  Curriculum
                </h3>
              </div>
              <div className="space-y-4">
                {course.curriculum.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setExpandedModule(expandedModule === index ? -1 : index)
                      }
                      className="w-full bg-white p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <svg
                          className={`w-6 h-6 text-gray-400 transition-transform ${
                            expandedModule === index ? "rotate-180" : ""
                          }`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                        </svg>
                        <div className="text-left">
                          <h4 className="text-gray-900 font-bold">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    </button>
                    {expandedModule === index && (
                      <div className="bg-blue-50 p-4 border-t border-gray-200 pl-14">
                        <p className="text-sm text-gray-800">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-full bg-[#1e3a8a] px-6 py-2 text-[14px] md:text-base font-medium text-white shadow hover:bg-blue-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 mb-4 w-full cursor-pointer"
                  >
                    Register Your Interest
                  </Link>
                  <Link
                    href="/brochures/trendline-training-brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" w-full inline-flex items-center justify-center rounded-full bg-[#1e3a8a] px-6 py-2 text-[14px] md:text-base font-medium text-white shadow hover:bg-blue-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 cursor-pointer"
                  >
                    View Brochure
                  </Link>
                  <div className="pt-6 border-t border-gray-100">
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="flex flex-col items-center justify-center p-3 bg-blue-50 rounded-xl border border-blue-100 text-center">
                        <svg
                          className="w-6 h-6 text-[#1e3a8a] mb-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                        </svg>
                        <span className="text-[11px] text-gray-600 font-bold uppercase tracking-wider">
                          Duration
                        </span>
                        <span className="text-gray-900 font-bold text-lg leading-tight">
                          {course.duration}
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-3 bg-blue-50 rounded-xl border border-blue-100 text-center">
                        <svg
                          className="w-6 h-6 text-[#1e3a8a] mb-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-13 5l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                        </svg>
                        <span className="text-[11px] text-gray-600 font-bold uppercase tracking-wider">
                          Certificate
                        </span>
                        <span className="text-gray-900 font-bold text-lg leading-tight">
                          {course.certificate}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm px-1">
                      <span className="flex items-center gap-2 text-gray-500">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                        </svg>
                        Level
                      </span>
                      <span className="font-semibold text-gray-900">
                        {course.level}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                <h5 className="font-bold text-gray-900 mb-2">
                  Have questions?
                </h5>
                <p className="text-sm text-gray-600 mb-4">
                  Speak to our team directly.
                </p>
                <a
                  href="tel:+260977000000"
                  className="text-[#1e3a8a] font-bold text-sm flex items-center justify-center gap-2 hover:underline"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  +260 977 000 000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
