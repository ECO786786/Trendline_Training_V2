"use client";

import { useState } from "react";

interface Course {
  id: number;
  dateRange: string;
  title: string;
  description: string;
  duration: string;
  seatsLeft: number;
  isLimited: boolean;
  status: "open" | "closed" | "waitlist";
}

export default function TrainingTimetable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date-earliest");
  const [currentPage, setCurrentPage] = useState(1);

  const courses: Course[] = [
    {
      id: 1,
      dateRange: "9—11 FEB",
      title: "Data Analysis with Excel",
      description:
        "Master the fundamentals of analyzing data using Excel for professional reporting.",
      duration: "3 Days Duration",
      seatsLeft: 12,
      isLimited: false,
      status: "open",
    },
    {
      id: 2,
      dateRange: "16—20 FEB",
      title: "Financial Modelling & Forecasting",
      description:
        "Build robust financial models for business forecasting and strategic planning.",
      duration: "5 Days Duration",
      seatsLeft: 3,
      isLimited: true,
      status: "open",
    },
    {
      id: 3,
      dateRange: "9—11 MAR",
      title: "Advanced Excel for Data Analysis",
      description:
        "Take your Excel skills to the next level with advanced DAX-like functions and automation.",
      duration: "3 Days Duration",
      seatsLeft: 15,
      isLimited: false,
      status: "open",
    },
    {
      id: 4,
      dateRange: "13—17 APR",
      title: "AI for Data Analysts",
      description:
        "Leverage Artificial Intelligence tools to enhance data processing and visual storytelling.",
      duration: "5 Days Duration",
      seatsLeft: 8,
      isLimited: false,
      status: "open",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-50">
      {/* Main Container */}
      <div className="layout-container mx-auto flex h-full w-full max-w-[1280px] grow flex-col px-4 py-5 md:px-6 lg:px-10">
        {/* Breadcrumb */}
        <div className="flex flex-wrap gap-2 py-4">
          <a
            className="text-sm font-medium leading-normal text-blue-700 hover:underline"
            href="#"
          >
            Home
          </a>
          <span className="text-sm font-medium leading-normal text-blue-700">
            /
          </span>
          <span className="text-sm font-medium leading-normal text-gray-900">
            2026 Schedule
          </span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col gap-3 py-4 text-center md:py-8 md:text-left">
          <h1 className="text-3xl font-black leading-tight tracking-tight text-gray-900 md:text-5xl">
            2026 Training Schedule
          </h1>
          <p className="max-w-4xl text-base font-normal leading-normal text-slate-600 md:text-xl">
            Explore our comprehensive 2026 professional development calendar.
            From fundamental Excel skills to advanced AI for Data Analysts, find
            the perfect course to advance your analytics career.
          </p>
        </div>

        {/* Main Content */}
        <main className="mt-4 flex h-full flex-col">
          {/* Search and Filter Bar */}
          <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:flex-row">
            <div className="w-full lg:flex-1">
              <label className="flex w-full flex-col">
                <div className="focus-within:border-blue-900 focus-within:ring-2 focus-within:ring-blue-900/20 flex h-12 w-full items-stretch rounded-lg border border-gray-200 bg-gray-50 transition-all">
                  <div className="flex items-center justify-center pl-4 pr-2 text-slate-600">
                    <svg
                      className="h-6 w-6"
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
                  <input
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border-none bg-transparent text-base font-normal leading-normal text-gray-900 placeholder:text-slate-500 focus:ring-0"
                    placeholder="Search for courses by title or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </label>
            </div>
            <div className="flex w-full flex-col items-center gap-3 sm:flex-row lg:w-auto">
              <select
                className="focus:ring-blue-900/20 h-12 w-full cursor-pointer rounded-lg border-none bg-gray-50 px-4 text-sm font-medium text-slate-600 focus:ring-2 sm:w-64"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="date-earliest">Sort by: Date (Earliest)</option>
                <option value="date-latest">Sort by: Date (Latest)</option>
                <option value="title-az">Sort by: Course Title (A-Z)</option>
              </select>
              <button className="flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-blue-900 px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-blue-950 sm:w-auto">
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
                <span>Download Calendar as PDF</span>
              </button>
            </div>
          </div>

          {/* Course List */}
          <div className="flex flex-col gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg md:flex-row"
              >
                {/* Date Badge */}
                <div className="flex h-24 w-full shrink-0 flex-col items-center justify-center rounded-lg bg-blue-900 p-2 font-display text-white md:h-auto md:w-36">
                  <span className="mb-1 text-xs font-bold uppercase tracking-widest opacity-80">
                    DATE
                  </span>
                  <span className="text-center text-xl font-black tracking-tight">
                    {course.dateRange}
                  </span>
                </div>

                {/* Course Details */}
                <div className="flex flex-grow flex-col justify-center gap-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="cursor-pointer text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-900">
                        {course.title}
                      </h3>
                      <p className="mt-1 text-base text-slate-500">
                        {course.description}
                      </p>
                    </div>
                    <div className="flex min-w-fit flex-col items-end gap-1.5">
                      <span className="hidden whitespace-nowrap rounded-full bg-green-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-700 sm:inline-block">
                        Open for Registration
                      </span>
                      <span
                        className={`whitespace-nowrap text-xs ${
                          course.isLimited
                            ? "font-bold uppercase text-orange-600"
                            : "font-medium text-slate-500"
                        }`}
                      >
                        {course.isLimited
                          ? `Last ${course.seatsLeft} Seats!`
                          : `${course.seatsLeft} seats remaining`}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center">
                    <div className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700">
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
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex min-w-[180px] justify-center gap-3 border-t border-slate-100 pt-4 md:flex-col md:border-t-0 md:pt-0">
                  <button className="flex-1 rounded-lg bg-blue-900 px-6 py-4 text-sm font-black uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-blue-950 hover:shadow-md md:flex-none">
                    Register Now
                  </button>
                  <button className="flex-1 rounded-lg border border-slate-200 bg-transparent px-6 py-3 text-sm font-bold text-slate-600 transition-colors hover:bg-slate-50 md:flex-none">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mb-8 mt-12 flex justify-center">
            <nav className="flex items-center gap-2">
              <button
                className="flex h-12 w-12 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-200 disabled:opacity-50"
                disabled
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900 font-bold text-white shadow-md">
                1
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-lg font-bold text-slate-600 hover:bg-slate-200">
                2
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-lg font-bold text-slate-600 hover:bg-slate-200">
                3
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-200">
                <svg
                  className="h-6 w-6"
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
              </button>
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
}
