"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Corporate Solutions", href: "/corporate" },
    { name: "Courses", href: "/courses" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const trainingPrograms = [
    {
      name: "Data Analytics – Fundamentals",
      href: "/courses/data-analytics-fundamentals",
    },
    {
      name: "Data Analytics – Intermediate",
      href: "/courses/intermediate-data-analytics",
    },
    {
      name: "Data Analytics – Advanced",
      href: "/courses/advanced-data-analytics-ai",
    },
    {
      name: "Power BI Mastery Course",
      href: "/courses/power-bi-mastery-program",
    },
    { name: "SQL for Data Analysis", href: "/courses/sql-for-data-analysis" },
    {
      name: "Data Visualization Essentials",
      href: "/courses/data-visualization-essentials",
    },
    {
      name: "Data Storytelling Mastery",
      href: "/courses/data-storytelling-mastery",
    },
    {
      name: "Soft Skills for Data Professionals",
      href: "/courses/soft-skills-for-data-professionals",
    },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/images/footer-logo.jpeg"
                alt="Trendline Training Logo"
                width={56}
                height={56}
                className="mr-3"
              />
              <div>
                <h3 className="text-lg font-bold">Trendline Training</h3>
                <p className="text-xs">Transforming Data Into Strategy</p>
              </div>
            </div>
            <p className="mb-6 text-gray-400">
              Trendline Training & Consultancy provides expert-led corporate
              training and consultancy services, empowering organizations to
              leverage data for strategic decision-making.
            </p>
            <nav
              className="flex space-x-4"
              role="navigation"
              aria-label="Social Media Links"
            >
              <a
                href="https://www.linkedin.com/company/trendline-training-consultancy-ltd/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1R3kZ4imU1/?mibextid=qi2Omg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </nav>
          </div>
          <nav aria-label="Quick Links">
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Training Programs">
            <h3 className="text-lg font-bold mb-6">Training Programs</h3>
            <ul className="space-y-3">
              {trainingPrograms.map((program) => (
                <li key={program.name}>
                  <Link
                    href={program.href}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="not-italic">
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <address className="not-italic">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-400 mt-1 mr-3 shrink-0"
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
                  <span className="text-gray-400">
                    4th Floor, Anchor House, Suite 405
                    <br />
                    Cairo Road, Lusaka, Zambia
                    <br />
                    P.O. Box 380104
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-400 mt-1 mr-3 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-400">
                    <a
                      href="tel:+260978148593"
                      className="hover:text-white transition"
                    >
                      +260 978 148 593
                    </a>
                    <br />
                    <a
                      href="tel:+260777738690"
                      className="hover:text-white transition"
                    >
                      +260 777 738 690
                    </a>
                    <br />
                    <a
                      href="tel:+260777037049"
                      className="hover:text-white transition"
                    >
                      +260 777 037 049
                    </a>
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-400 mt-1 mr-3 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-400">
                    <a
                      href="mailto:info@trendlinec.com"
                      className="hover:text-white transition"
                    >
                      info@trendlinec.com
                    </a>
                    <br />
                    <a
                      href="mailto:training@trendlinec.com"
                      className="hover:text-white transition"
                    >
                      training@trendlinec.com
                    </a>
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-gray-400 mt-1 mr-3 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  <Link
                    href="/"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition"
                  >
                    www.trendlinec.com
                  </Link>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-3 shrink-0"
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
                  <span className="text-gray-400">
                    Mon–Fri: 9:00 AM – 6:00 PM
                  </span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2026 Trendline Training & Consultancy Ltd. All rights reserved.
          </p>
          <nav aria-label="Legal Links" className="flex space-x-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-500 text-sm hover:text-white transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
