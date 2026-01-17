"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

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
  // --- State Management ---
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date-earliest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // --- Full 2026 Course Data from Calendar ---
  const courses: Course[] = [
    {
      id: 1,
      dateRange: "9—11 FEB",
      title: "Data Analysis with Excel (Foundations/Intermediate)",
      description:
        "Master the fundamentals of analyzing data using Excel for professional reporting and business intelligence.",
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
        "Build robust, error-proof financial models for business forecasting and strategic investment planning.",
      duration: "5 Days Duration",
      seatsLeft: 3,
      isLimited: true,
      status: "open",
    },
    {
      id: 3,
      dateRange: "16—18 MAR",
      title: "Advanced Excel for Data Analysis",
      description:
        "Take your Excel skills to the professional level with advanced functions and automation.",
      duration: "3 Days Duration",
      seatsLeft: 15,
      isLimited: false,
      status: "open",
    },
    {
      id: 4,
      dateRange: "23—27 MAR",
      title: "Financial Analysis with Power BI",
      description:
        "Learn to automate financial statements and performance tracking using Power BI's powerful engine.",
      duration: "5 Days Duration",
      seatsLeft: 10,
      isLimited: false,
      status: "open",
    },
    {
      id: 5,
      dateRange: "13—17 APR",
      title: "Excel & Power BI for Integrated Reporting",
      description:
        "Connect Excel's flexibility with Power BI's visualization to create a unified reporting ecosystem.",
      duration: "5 Days Duration",
      seatsLeft: 8,
      isLimited: false,
      status: "open",
    },
    {
      id: 6,
      dateRange: "11—15 MAY",
      title: "Analytics (DAX Creation, Capstone & Dashboard Clinic)",
      description:
        "Deep dive into DAX formulas and hands-on dashboard construction for senior analysts.",
      duration: "5 Days Duration",
      seatsLeft: 6,
      isLimited: true,
      status: "open",
    },
    {
      id: 7,
      dateRange: "26—28 MAY",
      title: "Data Governance & Reporting Standards",
      description:
        "Establish frameworks for data accuracy, security, and professional reporting standards.",
      duration: "3 Days Duration",
      seatsLeft: 12,
      isLimited: false,
      status: "open",
    },
    {
      id: 8,
      dateRange: "8—12 JUN",
      title: "AI for Data Analysts (Excel & Power BI)",
      description:
        "Leverage cutting-edge AI tools and Copilot features to enhance data processing.",
      duration: "5 Days Duration",
      seatsLeft: 8,
      isLimited: false,
      status: "open",
    },
    {
      id: 9,
      dateRange: "18—20 JUN",
      title: "Executive Strategic Data Analysis for Decision-Makers",
      description:
        "A specialized session for leaders to interpret data and drive organizational strategy.",
      duration: "3 Days Duration",
      seatsLeft: 5,
      isLimited: true,
      status: "open",
    },
    {
      id: 10,
      dateRange: "27—29 JUL",
      title: "Budgeting, Planning & Variance Analysis",
      description:
        "Master the financial cycle of target setting and root-cause variance analysis.",
      duration: "3 Days Duration",
      seatsLeft: 14,
      isLimited: false,
      status: "open",
    },
    {
      id: 11,
      dateRange: "24—28 AUG",
      title: "Analytics with Power BI",
      description:
        "End-to-end data analytics training covering data modeling and visualization.",
      duration: "5 Days Duration",
      seatsLeft: 9,
      isLimited: false,
      status: "open",
    },
    {
      id: 12,
      dateRange: "7—11 SEP",
      title: "SQL for Data Analysis",
      description:
        "The essential language for querying databases and managing large datasets.",
      duration: "5 Days Duration",
      seatsLeft: 7,
      isLimited: false,
      status: "open",
    },
    {
      id: 13,
      dateRange: "12—16 OCT",
      title: "Power BI for Data Analysis",
      description:
        "Core skills for turning raw data into interactive, actionable business dashboards.",
      duration: "5 Days Duration",
      seatsLeft: 11,
      isLimited: false,
      status: "open",
    },
    {
      id: 14,
      dateRange: "9—13 NOV",
      title: "Analytics Capstone & Dashboard Clinic",
      description:
        "Finalize your expertise with a project-based session and expert review.",
      duration: "5 Days Duration",
      seatsLeft: 4,
      isLimited: true,
      status: "open",
    },
    {
      id: 15,
      dateRange: "7—8 DEC",
      title: "Executive Strategic Data Analysis",
      description:
        "Year-end strategic data session designed specifically for senior management.",
      duration: "2 Days Duration",
      seatsLeft: 6,
      isLimited: false,
      status: "open",
    },
    {
      id: 16,
      dateRange: "14 DEC",
      title: "Year-End Data, AI & Analytics Trends Briefing",
      description:
        "A specialized briefing on the technology trends shaping the upcoming year.",
      duration: "1 Day Duration",
      seatsLeft: 20,
      isLimited: false,
      status: "open",
    },
  ];

  // --- Logic: Search, Sort, and Paginate ---
  const filteredAndSortedCourses = useMemo(() => {
    const result = courses.filter(
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

  const totalPages = Math.ceil(filteredAndSortedCourses.length / itemsPerPage);
  const paginatedCourses = filteredAndSortedCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-50">
      <div className="layout-container mx-auto flex h-full w-full max-w-[1280px] grow flex-col px-4 py-5 md:px-6 lg:px-10">
        {/* Breadcrumb */}
        <div className="flex flex-wrap gap-2 py-4">
          <Link
            className="text-sm font-medium text-blue-700 hover:underline"
            href="/"
          >
            Home
          </Link>
          <span className="text-sm font-medium text-blue-700">/</span>
          <span className="text-sm font-medium text-gray-900">
            2026 Schedule
          </span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col gap-3 py-4 text-center md:py-8 md:text-left">
          <h1 className="text-3xl font-black tracking-tight text-gray-900 md:text-5xl">
            2026 Training Schedule
          </h1>
          <p className="max-w-4xl text-base text-slate-600 md:text-xl">
            Explore our comprehensive 2026 professional development calendar.
            From fundamental Excel skills to advanced AI for Data Analysts, find
            the perfect course to advance your career.
          </p>
        </div>

        <main className="mt-4 flex h-full flex-col">
          {/* Search and Filter Bar */}
          <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:flex-row">
            <div className="w-full lg:flex-1">
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
                  className="w-full rounded-lg border-none bg-transparent text-base text-gray-900 placeholder:text-slate-500 focus:ring-0"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>

            <div className="flex w-full flex-col items-center gap-3 sm:flex-row lg:w-auto">
              <select
                className="h-12 w-full cursor-pointer rounded-lg border-none bg-gray-50 px-4 text-sm font-medium text-slate-600 focus:ring-2 focus:ring-blue-900/20 sm:w-64"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="date-earliest">Sort by: Date (Earliest)</option>
                <option value="date-latest">Sort by: Date (Latest)</option>
                <option value="title-az">Sort by: Course Title (A-Z)</option>
              </select>

              <a
                href="/calendar.pdf"
                download
                className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-900 px-6 text-sm font-bold text-white transition-all hover:bg-blue-950 sm:w-auto"
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
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Course List */}
          <div className="flex flex-col gap-6">
            {paginatedCourses.length > 0 ? (
              paginatedCourses.map((course) => (
                <div
                  key={course.id}
                  className="group flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg md:flex-row"
                >
                  {/* Date Badge */}
                  <div className="flex h-24 w-full shrink-0 flex-col items-center justify-center rounded-lg bg-blue-900 p-2 text-white md:h-auto md:w-36">
                    <span className="mb-1 text-xs font-bold uppercase tracking-widest opacity-80">
                      DATE
                    </span>
                    <span className="text-center text-xl font-black">
                      {course.dateRange}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex flex-grow flex-col justify-center gap-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                          {course.title}
                        </h3>
                        <p className="mt-1 text-base text-slate-500">
                          {course.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 min-w-fit">
                        <span className="hidden sm:inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700 uppercase">
                          Open
                        </span>
                        <span
                          className={`text-xs ${course.isLimited ? "font-bold text-orange-600 uppercase" : "text-slate-500"}`}
                        >
                          {course.isLimited
                            ? `Last ${course.seatsLeft} Seats!`
                            : `${course.seatsLeft} seats left`}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700 w-fit">
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

                  {/* Actions */}
                  <div className="flex min-w-[180px] gap-3 pt-4 border-t border-slate-100 md:flex-col md:border-t-0 md:pt-0">
                    <button className="flex-1 rounded-lg bg-blue-900 px-6 py-4 text-sm font-black uppercase text-white hover:bg-blue-950 transition-colors">
                      Register
                    </button>
                    <button className="flex-1 rounded-lg border border-slate-200 px-6 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-20 text-center text-slate-500 border-2 border-dashed border-slate-200 rounded-xl">
                No courses found matching &ldquo;{searchQuery}&rdquo;
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mb-8 mt-12 flex justify-center">
              <nav className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-3 rounded-lg hover:bg-slate-200 disabled:opacity-30"
                >
                  <svg
                    className="h-6 w-6"
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
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`h-12 w-12 rounded-lg font-bold transition-all ${currentPage === i + 1 ? "bg-blue-900 text-white" : "text-slate-600 hover:bg-slate-200"}`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="p-3 rounded-lg hover:bg-slate-200 disabled:opacity-30"
                >
                  <svg
                    className="h-6 w-6"
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
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
