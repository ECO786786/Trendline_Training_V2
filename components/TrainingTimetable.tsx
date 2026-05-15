"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumb from "./Breadcrumb";

export interface Course {
  id: number;
  title: string;
  price: string;
  description: string;
  duration: string;
  buttonText: string;
  buttonLink: string;
  slug: string;
}

const ITEMS_PER_PAGE = 5;

export interface TrainingTimetableProps {
  initialCourses: Course[];
}

export default function TrainingTimetable({
  initialCourses,
}: TrainingTimetableProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const processedCourses = useMemo(() => {
    const result = [...initialCourses].filter(
      (c) =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.description.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    result.sort((a, b) => a.id - b.id);
    return result;
  }, [initialCourses, searchQuery]);

  const totalPages = Math.ceil(processedCourses.length / ITEMS_PER_PAGE);
  const paginatedCourses = processedCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="relative min-h-screen w-full bg-gray-50 pb-20">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-10">
        <Breadcrumb
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Courses", href: "/courses" },
          ]}
        />
        <header className="mb-12 flex flex-col gap-4">
          <h1 className="text-5xl font-medium tracking-[-0.04em] text-[#04030B] md:text-6xl lg:text-[4rem] lg:leading-[120%]">
            Courses
          </h1>
          <p className="max-w-3xl md:text-md text-[#04030B]">
            Discover our comprehensive range of training programs designed to
            enhance your organization&apos;s data capabilities and strategic
            decision making.
          </p>
        </header>
        <div className="mb-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-300 bg-white p-4 shadow-sm lg:flex-row">
          <div className="relative w-full lg:flex-1">
            <input
              type="text"
              placeholder="Search by course title or topic..."
              className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-all"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
            <svg
              className="absolute left-3.5 top-3 h-6 w-6 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            <Link
              href="/brochures/services.jpg"
              target="_blank"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#1e3a8a] px-6 text-sm font-bold text-white transition-all hover:bg-blue-950 active:scale-95 sm:w-auto"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              Our Services
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {paginatedCourses.length > 0 ? (
            paginatedCourses.map((course) => (
              <div
                key={course.id}
                className="group flex flex-col md:flex-row gap-5 p-5 rounded-xl bg-white dark:bg-[#1a2632] shadow-sm hover:shadow-md border border-[#e7edf3] dark:border-slate-800 transition-all duration-300"
              >
                <div className="grow flex flex-col gap-3 justify-center">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0d141b] dark:text-white group-hover:text-blue-900 transition-colors cursor-pointer">
                        {course.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {course.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-lg font-black text-blue-900 dark:text-blue-400">
                        {course.price}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <svg
                        className="h-5 w-5 text-slate-400"
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
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <svg
                        className="h-5 w-5 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8h18v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2 17h20M8 21h8"
                        />
                      </svg>
                      <span>Online Or Consultant Led</span>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col justify-start gap-3 min-w-35 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-700">
                  <Link
                    href={course.buttonLink}
                    className="flex-1 md:flex-none bg-blue-900 hover:bg-blue-950 text-white font-bold py-2.5 px-4 rounded-full transition-colors text-sm text-center "
                  >
                    {course.buttonText}
                  </Link>
                  <Link
                    href={`/registration?course=${course.slug}`}
                    className="flex-1 md:flex-none bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 font-bold py-2.5 px-4 rounded-full transition-colors text-sm text-center"
                  >
                    Register
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-200 py-24 text-center">
              <p className="text-xl font-medium text-gray-400">
                No courses match your search criteria.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 font-bold text-blue-900 hover:underline"
              >
                Clear search query
              </button>
            </div>
          )}
        </div>
        {totalPages > 1 && (
          <nav
            className="mt-16 flex justify-center gap-3"
            aria-label="Pagination"
          >
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white transition-colors hover:bg-gray-100 disabled:opacity-30"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15 19l-7-7 7-7"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`flex h-12 w-12 items-center justify-center rounded-full font-bold transition-all ${
                  currentPage === i + 1
                    ? "bg-blue-900 text-white shadow-lg"
                    : "text-slate-600 hover:bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white transition-colors hover:bg-gray-100 disabled:opacity-30"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </nav>
        )}
      </div>
    </div>
  );
}
