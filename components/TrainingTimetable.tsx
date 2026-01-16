"use client";

import React, { useState } from "react";

interface Course {
  id: number;
  date: {
    day: string;
    month: string;
  };
  title: string;
  description: string;
  duration: string;
  seatsLeft: number;
  isLimited: boolean;
  status: "open" | "closed" | "waitlist";
}

export function TrainingSchedule() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const courses: Course[] = [
    {
      id: 1,
      date: { day: "09", month: "FEB" },
      title: "Data Analysis with Excel",
      description: "Master the fundamentals of analyzing data using Excel.",
      duration: "3 Days",
      seatsLeft: 12,
      isLimited: false,
      status: "open",
    },
    {
      id: 2,
      date: { day: "16", month: "FEB" },
      title: "Financial Modelling & Forecasting",
      description: "Build robust financial models for business forecasting.",
      duration: "5 Days",
      seatsLeft: 3,
      isLimited: true,
      status: "open",
    },
    {
      id: 3,
      date: { day: "16", month: "MAR" },
      title: "Advanced Excel for Data Analysis",
      description:
        "Take your Excel skills to the next level with advanced functions.",
      duration: "3 Days",
      seatsLeft: 15,
      isLimited: false,
      status: "open",
    },
    {
      id: 4,
      date: { day: "23", month: "MAR" },
      title: "Financial Analysis with Power BI",
      description:
        "Integrate financial data into Power BI for deeper insights.",
      duration: "5 Days",
      seatsLeft: 5,
      isLimited: true,
      status: "open",
    },
    {
      id: 5,
      date: { day: "13", month: "APR" },
      title: "Excel & Power BI for Integrated Reporting",
      description:
        "Combine Excel and Power BI for comprehensive reporting solutions.",
      duration: "5 Days",
      seatsLeft: 8,
      isLimited: false,
      status: "open",
    },
    {
      id: 6,
      date: { day: "11", month: "MAY" },
      title: "Analytics Dax/Capstone",
      description:
        "Deep dive into DAX formulas and a comprehensive capstone project.",
      duration: "5 Days",
      seatsLeft: 20,
      isLimited: false,
      status: "open",
    },
    {
      id: 7,
      date: { day: "26", month: "MAY" },
      title: "Data Governance",
      description:
        "Best practices for managing data availability, usability, and security.",
      duration: "3 Days",
      seatsLeft: 2,
      isLimited: true,
      status: "open",
    },
    {
      id: 8,
      date: { day: "08", month: "JUN" },
      title: "AI for Data Analysts",
      description:
        "Leverage Artificial Intelligence tools to enhance data analysis.",
      duration: "5 Days",
      seatsLeft: 10,
      isLimited: false,
      status: "open",
    },
    {
      id: 9,
      date: { day: "18", month: "JUN" },
      title: "Executive Strategic Data Analysis",
      description: "High-level strategies for data-driven decision making.",
      duration: "3 Days",
      seatsLeft: 4,
      isLimited: true,
      status: "open",
    },
    {
      id: 10,
      date: { day: "27", month: "JUL" },
      title: "Budgeting & Planning",
      description:
        "Effective techniques for corporate budgeting and financial planning.",
      duration: "3 Days",
      seatsLeft: 16,
      isLimited: false,
      status: "open",
    },
    {
      id: 11,
      date: { day: "24", month: "AUG" },
      title: "Analytics with Power BI",
      description: "Create impactful dashboards and reports.",
      duration: "5 Days",
      seatsLeft: 9,
      isLimited: false,
      status: "open",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="mx-auto max-w-360 px-4 py-5 md:px-6 lg:px-10">
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
        <div className="flex flex-col gap-3 py-4 md:py-8">
          <h1 className="text-3xl font-black leading-tight tracking-tight text-gray-900 md:text-4xl">
            2026 Training Schedule
          </h1>
          <p className="max-w-3xl text-base font-normal leading-normal text-slate-600 md:text-lg">
            Explore our comprehensive 2026 professional development calendar.
            From fundamental Excel skills to advanced AI for Data Analysts, find
            the perfect course to advance your analytics career.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Sidebar Filters */}
          <aside className="space-y-6 lg:col-span-3">
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                <button className="text-xs font-medium text-blue-900 hover:text-blue-950">
                  Reset All
                </button>
              </div>

              {/* Mobile Search */}
              <div className="mb-6 lg:hidden">
                <div className="flex h-10 w-full flex-1 items-stretch rounded-lg border border-gray-200 bg-gray-50">
                  <div className="flex items-center justify-center pl-3 text-slate-600">
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    className="w-full border-none bg-transparent p-2 text-sm text-gray-900 placeholder:text-slate-500 focus:ring-0"
                    placeholder="Search..."
                  />
                </div>
              </div>

              {/* Course Category */}
              <div className="mb-6">
                <h4 className="mb-3 text-sm font-bold text-gray-900">
                  Course Category
                </h4>
                <div className="space-y-2">
                  {[
                    "Data Analytics",
                    "Financial Modeling",
                    "Business Intelligence",
                    "Strategy & AI",
                  ].map((category) => (
                    <label
                      key={category}
                      className="group flex cursor-pointer items-center gap-3"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-slate-300 bg-slate-50 text-blue-900 focus:ring-blue-900"
                        defaultChecked={category === "Data Analytics"}
                      />
                      <span className="text-sm text-slate-600 transition-colors group-hover:text-blue-900">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex h-full flex-col lg:col-span-9">
            {/* Search and Filter Bar */}
            <div className="mb-6 flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:flex-row">
              <div className="w-full md:flex-1">
                <label className="flex w-full flex-col">
                  <div className="focus-within:border-blue-900 focus-within:ring-2 focus-within:ring-blue-900/20 flex h-10 w-full items-stretch rounded-lg border border-gray-200 bg-gray-50 transition-all lg:h-12">
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
                      className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border-none bg-transparent text-sm font-normal leading-normal text-gray-900 placeholder:text-slate-500 focus:ring-0 md:text-base"
                      placeholder="Search courses..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </label>
              </div>

              <div className="flex w-full items-center gap-3 md:w-auto">
                <select className="hidden h-10 cursor-pointer rounded-lg border-none bg-gray-50 px-4 text-sm font-medium text-slate-600 focus:ring-0 md:block lg:h-12">
                  <option>Sort by: Date (Earliest)</option>
                  <option>Sort by: Date (Latest)</option>
                </select>

                <div className="flex h-10 w-full items-center justify-center rounded-lg bg-gray-200 p-1 md:w-auto lg:h-12">
                  <label className="flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded bg-white px-3 shadow-sm transition-all md:px-4">
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                    <span className="truncate text-sm font-bold leading-normal text-blue-900">
                      List
                    </span>
                    <input
                      className="invisible w-0"
                      name="view_toggle"
                      type="radio"
                      value="List View"
                      defaultChecked
                    />
                  </label>
                  <label className="flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded px-3 text-slate-600 transition-all hover:text-slate-900 md:px-4">
                    <svg
                      className="mr-2 h-5 w-5"
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
                    <span className="truncate text-sm font-medium leading-normal">
                      Calendar
                    </span>
                    <input
                      className="invisible w-0"
                      name="view_toggle"
                      type="radio"
                      value="Calendar View"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Course List */}
            <div className="flex flex-col gap-4">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="group flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md md:flex-row"
                >
                  {/* Date Badge */}
                  <div
                    className={`flex h-24 w-full flex-shrink-0 flex-row items-center justify-center gap-2 rounded-lg font-display md:h-auto md:w-28 md:flex-col md:gap-0 ${
                      course.id === 1
                        ? "bg-blue-900/10 text-blue-900"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <span className="text-3xl font-black tracking-tighter">
                      {course.date.day}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-wider">
                      {course.date.month}
                    </span>
                  </div>

                  {/* Course Details */}
                  <div className="flex flex-grow flex-col justify-center gap-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="cursor-pointer text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-900">
                          {course.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                          {course.description}
                        </p>
                      </div>
                      <div className="flex min-w-fit flex-col items-end gap-1.5">
                        <span className="hidden whitespace-nowrap rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700 sm:inline-block">
                          Open for Reg
                        </span>
                        <span
                          className={`whitespace-nowrap text-xs ${
                            course.isLimited
                              ? "font-bold text-orange-600"
                              : "font-medium text-slate-500"
                          }`}
                        >
                          {course.isLimited ? "Limited: " : ""}
                          {course.seatsLeft} seats left
                        </span>
                      </div>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center">
                      <div className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700">
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
                  <div className="flex min-w-[140px] justify-center gap-3 border-t border-slate-100 pt-4 md:flex-col md:border-t-0 md:pt-0">
                    <button className="flex-1 rounded-lg bg-blue-900 px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-blue-950 hover:shadow md:flex-none">
                      Register
                    </button>
                    <button className="flex-1 rounded-lg border border-slate-200 bg-transparent px-6 py-3 text-sm font-bold text-slate-600 transition-colors hover:bg-slate-50 md:flex-none">
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex justify-center">
              <nav className="flex items-center gap-1">
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 disabled:opacity-50"
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
                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900 font-bold text-white">
                  1
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg font-medium text-slate-600 hover:bg-slate-100">
                  2
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100">
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
    </div>
  );
}
