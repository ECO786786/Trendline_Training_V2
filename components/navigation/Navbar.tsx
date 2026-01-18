"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 992);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const linkClass = (href: string) =>
    `block py-3 text-base first:pt-7 lg:px-4 lg:py-2 first:lg:pt-2 transition-colors ${
      isActive(href) ? "text-blue-900 font-bold" : "hover:text-blue-900"
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/60 flex w-full items-center lg:min-h-18 lg:px-[5%] border-b border-gray-100">
      <div className="w-full lg:flex lg:items-center lg:justify-between">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <Link href="/" aria-label="Home">
            <Image
              src="/images/logo-1.png"
              alt="Company logo"
              width={170}
              height={40}
              priority
            />
          </Link>
          <button
            className="-mr-2 flex w-12 h-12 flex-col items-center justify-center lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`my-0.75 h-0.5 w-6 bg-black transition-all duration-300 ${isMobileMenuOpen ? "translate-y-2 -rotate-45" : ""}`}
            />
            <span
              className={`my-0.75 h-0.5 w-6 bg-black transition-all duration-300 ${isMobileMenuOpen ? "w-0 opacity-0" : ""}`}
            />
            <span
              className={`my-0.75 h-0.5 w-6 bg-black transition-all duration-300 ${isMobileMenuOpen ? "-translate-y-2 rotate-45" : ""}`}
            />
          </button>
        </div>
        <nav
          id="mobile-menu"
          className={`transition-all duration-400 lg:flex lg:items-center lg:px-0 ${
            isMobileMenuOpen
              ? "max-h-screen overflow-hidden"
              : "max-h-0 overflow-hidden"
          } lg:max-h-full lg:overflow-visible px-[5%]`}
        >
          <Link href="/about" className={linkClass("/about")}>
            About us
          </Link>
          <div className="relative group">
            <button
              className={`flex w-full items-center justify-between gap-2 py-3 text-left text-base lg:flex-none lg:justify-start lg:px-4 lg:py-2 transition-colors ${
                isActive("/services")
                  ? "text-blue-900 font-bold"
                  : "hover:text-blue-900"
              }`}
              onClick={() =>
                isMobile && setIsMobileDropdownOpen((prev) => !prev)
              }
            >
              <span>Our Services</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  isMobile
                    ? isMobileDropdownOpen
                      ? "rotate-180"
                      : ""
                    : "group-hover:rotate-180"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`lg:hidden overflow-hidden transition-all duration-300 ${
                isMobileDropdownOpen
                  ? "max-h-20 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <Link
                href="/corporate"
                className={`block py-3 pl-[5%] text-base transition-colors ${
                  isActive("/corporate") ? "text-blue-900 font-bold" : ""
                }`}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsMobileDropdownOpen(false);
                }}
              >
                Corporate Solutions
              </Link>
            </div>
            <div className="hidden lg:block absolute lg:w-62.5 left-0 top-full mt-2 z-50 min-w-50 rounded-md border border-gray-200 bg-white p-2 opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <Link
                href="/corporate"
                className={`block px-4 py-2 text-base rounded transition-colors ${
                  isActive("/corporate")
                    ? "text-blue-900 font-bold bg-blue-50"
                    : "hover:bg-blue-50"
                }`}
              >
                Corporate Solutions
              </Link>
            </div>
          </div>

          <Link href="/courses" className={linkClass("/courses")}>
            Courses
          </Link>
          <Link href="/gallery" className={linkClass("/gallery")}>
            Gallery
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
          <div className="mt-6 flex flex-col items-center gap-4 lg:ml-4 lg:mt-0 lg:flex-row pb-6 lg:pb-0">
            <a
              href="https://calendly.com/trendline02tc/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full justify-center items-center px-6 py-2 bg-blue-900 hover:bg-blue-950 rounded-full text-white text-sm font-medium transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
