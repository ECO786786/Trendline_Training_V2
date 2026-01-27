"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

export interface Course {
  id: number;
  dateRange: string;
  title: string;
  description: string;
  duration: string;
  seatsLeft: number;
  isLimited: boolean;
  status: "open" | "closed" | "waitlist";
  slug: string;
}



// COURSES constant removed/ignored

const ITEMS_PER_PAGE = 5;

export interface TrainingTimetableProps {
  initialCourses: Course[];
}

export default function TrainingTimetable({ initialCourses }: TrainingTimetableProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date-earliest");
  const [currentPage, setCurrentPage] = useState(1);

  const processedCourses = useMemo(() => {
    const result = [...initialCourses].filter(
      (c) =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.description.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    if (sortBy === "title-az") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "date-latest") {
      result.sort((a, b) => b.id - a.id);
    } else {
      result.sort((a, b) => a.id - b.id);
    }
    return result;
  }, [searchQuery, sortBy]);

  const totalPages = Math.ceil(processedCourses.length / ITEMS_PER_PAGE);
  const paginatedCourses = processedCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="relative min-h-screen w-full bg-gray-50 pb-20">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-10">
        <nav className="mb-6 flex items-center gap-2" aria-label="Breadcrumb">
          <Link
            href="/"
            className="text-sm font-medium text-gray-500 hover:text-blue-900"
          >
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-sm font-medium text-blue-700">
            2026 Schedule
          </span>
        </nav>
        <header className="mb-12 flex flex-col gap-4">
          <h1 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            2026 Training Schedule
          </h1>
          <p className="max-w-3xl text-lg text-slate-600 md:text-xl">
            Explore our professional development calendar. From fundamental
            Excel skills to advanced AI, find the perfect course to advance your
            career.
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
            <select
              className="h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 text-sm font-bold text-slate-600 outline-none focus:ring-2 focus:ring-blue-900/10 sm:w-64"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date-earliest">Date (Earliest First)</option>
              <option value="date-latest">Date (Latest First)</option>
              <option value="title-az">Course Title (A-Z)</option>
            </select>

            <Link
              href="/brochures/calendar.pdf"
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
              PDF Calendar
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {paginatedCourses.length > 0 ? (
            paginatedCourses.map((course) => (
              <div
                key={course.id}
                className="group flex flex-col gap-6 rounded-2xl border border-gray-300 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-xl md:flex-row"
              >
                <div className="flex h-24 w-full flex-col items-center justify-center rounded-xl bg-blue-900 text-white md:h-auto md:w-36 lg:w-40">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">
                    DATE
                  </span>
                  <span className="text-2xl font-black">
                    {course.dateRange}
                  </span>
                </div>
                <div className="flex grow flex-col justify-center gap-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-900">
                        {course.title}
                      </h3>
                      <p className="mt-1 text-base text-slate-500 line-clamp-2">
                        {course.description}
                      </p>
                    </div>
                    <div className="flex min-w-fit flex-col items-end gap-1.5">
                      <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold uppercase text-green-700">
                        {course.status}
                      </span>
                      <span
                        className={`text-xs font-bold ${course.isLimited ? "text-orange-600 uppercase" : "text-slate-500"}`}
                      >
                        {course.isLimited
                          ? `Last ${course.seatsLeft} Seats!`
                          : `${course.seatsLeft} seats left`}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-bold text-slate-700 w-fit">
                    <svg
                      className="h-5 w-5 text-blue-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {course.duration}
                  </div>
                </div>

                <div className="flex min-w-50 flex-col gap-3 border-t border-gray-100 pt-5 md:border-t-0 md:pt-0">
                  <Link
                    href={`/registration?course=${course.slug}&from=schedule&scheduleId=${course.id}`}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-blue-900 text-sm font-bold text-white shadow-md transition-colors hover:bg-blue-950"
                  >
                    Register Now
                  </Link>
                  <Link
                    href={`/courses/${course.slug}?from=schedule`}
                    className="inline-flex h-12 items-center justify-center rounded-full border-2 border-blue-900 bg-white text-sm font-bold text-blue-900 transition-colors hover:bg-blue-50"
                  >
                    View Details
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
