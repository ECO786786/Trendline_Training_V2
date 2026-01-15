"use client";
import Link from "next/link";

interface CourseModule {
  id: number;
  title: string;
  lessons: number;
  duration: string;
  isExpanded?: boolean;
  topics?: string[];
}

interface Review {
  id: number;
  rating: number;
  comment: string;
  author: string;
  role: string;
  initials: string;
}

interface RelatedCourse {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
}

interface CourseDetailProps {
  title?: string;
  tagline?: string;
  rating?: number;
  reviewCount?: number;
  description?: string;
  duration?: string;
  language?: string;
  certified?: boolean;
  price?: number;
  originalPrice?: number;
  discountText?: string;
  startDate?: string;
  location?: string;
}

export default function CourseDetailPage({
  title = "Power BI Mastery Course",
  tagline = "Best Seller",
  rating = 4.9,
  reviewCount = 124,
  description = "Go from raw data to actionable insights. Master data visualization, business intelligence, and reporting in just 4 weeks with Zambia's leading data training program.",
  duration = "4 Weeks (Weekend)",
  language = "English",
  certified = true,
  price = 3500,
  originalPrice = 4500,
  discountText = "Early bird discount available until Nov 1st",
  startDate = "Nov 15, 2023",
  location = "Lusaka HQ",
}: CourseDetailProps) {
  const modules: CourseModule[] = [
    {
      id: 1,
      title: "Module 1: Introduction & Data Transformation",
      lessons: 3,
      duration: "2 Hours",
      isExpanded: true,
      topics: [
        "Overview of Power BI Ecosystem",
        "Connecting to Data Sources",
        "Introduction to Power Query Editor",
      ],
    },
    {
      id: 2,
      title: "Module 2: Data Modeling Mastery",
      lessons: 4,
      duration: "3 Hours",
    },
    {
      id: 3,
      title: "Module 3: DAX Essentials",
      lessons: 5,
      duration: "4 Hours",
    },
    {
      id: 4,
      title: "Module 4: Visualization & Storytelling",
      lessons: 3,
      duration: "2.5 Hours",
    },
  ];

  const learningOutcomes = [
    "Connect to multiple data sources (Excel, SQL, Web)",
    "Clean and transform messy data using Power Query",
    "Create robust data models and relationships",
    "Master DAX for complex calculations and measures",
    "Design interactive and stunning dashboards",
    "Publish and share reports securely in the cloud",
  ];

  const reviews: Review[] = [
    {
      id: 1,
      rating: 5,
      comment:
        "Hands down the best technical training I've attended in Lusaka. The examples were very local and relatable. Highly recommend!",
      author: "Musonda K.",
      role: "Finance Manager",
      initials: "MK",
    },
    {
      id: 2,
      rating: 5,
      comment:
        "I finally understand DAX! Chanda has a way of explaining complex topics simply. The hybrid option worked great for my schedule.",
      author: "John M.",
      role: "Operations Lead",
      initials: "JM",
    },
  ];

  const relatedCourses: RelatedCourse[] = [
    {
      id: 1,
      category: "ADVANCED EXCEL",
      title: "Financial Modeling Pro",
      description:
        "Build complex financial models and valuation templates from scratch.",
      image: "/images/course-excel.jpg",
    },
    {
      id: 2,
      category: "SQL DATABASE",
      title: "SQL for Data Analysis",
      description:
        "Learn to query databases and extract meaningful insights directly.",
      image: "/images/course-sql.jpg",
    },
    {
      id: 3,
      category: "TABLEAU",
      title: "Tableau Fundamentals",
      description:
        "Create interactive dashboards and visual analytics with Tableau.",
      image: "/images/course-tableau.jpg",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className="w-4 h-4 fill-current text-yellow-400"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-3">
          <nav className="flex gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-[#1e3a8a]">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link
              href="/courses"
              className="text-gray-500 hover:text-[#1e3a8a]"
            >
              Courses
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#1e3a8a] font-medium">Power BI Mastery</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/40 z-10"></div>
          <div className="w-full h-full bg-gray-800"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 py-16 lg:py-24">
          <div className="max-w-3xl flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="bg-blue-500/20 text-blue-200 border border-blue-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {tagline}
              </span>
              <span className="flex items-center gap-1 text-yellow-400 text-sm font-medium">
                {renderStars(rating)}
                <span className="ml-1">
                  {rating} ({reviewCount} reviews)
                </span>
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
              {title}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              {description}
            </p>
            <div className="flex flex-wrap gap-6 pt-4 text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#1e3a8a]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#1e3a8a]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                </svg>
                <span>{language}</span>
              </div>
              {certified && (
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#1e3a8a]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-13 5l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                  <span>Certified Certificate</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Course Overview</h3>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  In today&apos;s data-driven world, the ability to analyze and
                  visualize data is a superpower. The Power BI Mastery Course is
                  designed to transform beginners into confident data
                  storytellers.
                </p>
                <p>
                  Our curriculum is tailored for the Zambian market context,
                  using real-world datasets relevant to local industries.
                </p>
              </div>
              <div className="mt-6 p-6 bg-blue-50 border border-blue-100 rounded-xl">
                <h4 className="font-bold mb-3">Who is this course for?</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Financial Analysts looking to automate reporting</li>
                  <li>Business Managers needing real-time KPI dashboards</li>
                  <li>Excel users ready to upgrade to modern BI tools</li>
                </ul>
              </div>
            </section>

            {/* Learning Outcomes */}
            <section>
              <h3 className="text-2xl font-bold mb-6">What You Will Learn</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {learningOutcomes.map((outcome, index) => (
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

            {/* Curriculum */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Curriculum</h3>
              </div>
              <div className="space-y-4">
                {modules.map((module) => (
                  <div
                    key={module.id}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <div className="bg-white p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                        <svg
                          className="w-6 h-6 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                        </svg>
                        <div>
                          <h4 className="font-bold">{module.title}</h4>
                          <p className="text-xs text-gray-500">
                            {module.lessons} Lessons • {module.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                    {module.isExpanded && module.topics && (
                      <div className="bg-gray-50 p-4 border-t border-gray-200 pl-14">
                        <ul className="space-y-3 text-sm text-gray-600">
                          {module.topics.map((topic, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section>
              <h3 className="text-2xl font-bold mb-6">Student Reviews</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white p-5 rounded-xl border border-gray-200"
                  >
                    <div className="flex items-center gap-1 text-yellow-400 mb-3">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-gray-700 italic text-sm mb-4">
                      `{review.comment}`
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                        {review.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold">{review.author}</p>
                        <p className="text-xs text-gray-500">{review.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Pricing Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="h-32 bg-gray-100"></div>
                <div className="p-6">
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 font-medium mb-1">
                      Total Course Fee
                    </p>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-black">
                        K {price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-400 line-through mb-1.5">
                        K {originalPrice?.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-green-600 text-xs font-bold mt-1">
                      {discountText}
                    </div>
                  </div>
                  <button className="w-full bg-[#1e3a8a] hover:bg-blue-900 text-white font-bold py-3.5 px-4 rounded-lg shadow-lg transition-all mb-4">
                    Enroll Now
                  </button>
                  <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2.5 px-4 rounded-lg transition-colors mb-6">
                    Request Brochure
                  </button>
                  <div className="space-y-4 pt-6 border-t border-gray-100">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Start Date</span>
                      <span className="font-semibold">{startDate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration</span>
                      <span className="font-semibold">{duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Location</span>
                      <span className="font-semibold text-right">
                        {location}
                        <br />
                        <span className="text-xs text-gray-400 font-normal">
                          or Online via Zoom
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                <h5 className="font-bold mb-2">Have questions?</h5>
                <p className="text-sm text-gray-600 mb-4">
                  Speak to our admissions team directly.
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
