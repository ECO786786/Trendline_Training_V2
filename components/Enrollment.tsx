"use client";

import React, { useState } from "react";

interface FormData {
  firstName: string;
  surname: string;
  email: string;
  phone: string;
  company: string;
}

export default function Enrollment() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const highlights = [
    {
      icon: "dashboard",
      title: "Hands-on Dashboard Creation",
      description:
        "Build dynamic, interactive business dashboards from scratch.",
    },
    {
      icon: "analytics",
      title: "Practical Case Studies",
      description:
        "Work through real-world datasets and industry-specific scenarios.",
    },
    {
      icon: "verified",
      title: "Industry Certification",
      description:
        "Earn a professional certificate recognized by global industry leaders.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 font-display text-gray-900">
      {/* Header */}
      <header className="w-full border-b border-gray-200 bg-slate-50">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between whitespace-nowrap px-4 py-4 sm:px-10">
          <div className="flex items-center gap-4 text-gray-900">
            <div className="flex size-8 items-center justify-center text-blue-900">
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-tight">
              Trendline Training
            </h2>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <span className="text-sm font-medium text-slate-600">
              Questions? Call +260 (0) 211 123 456
            </span>
            <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-blue-900/10 px-4 text-sm font-bold leading-normal tracking-wide text-blue-900 transition-colors hover:bg-blue-900/20">
              <span className="truncate">Contact Support</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-grow justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-[1200px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left Column - Course Information */}
          <div className="flex flex-col gap-10 pt-4 lg:col-span-5">
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-900">
                Intensive 3-Day Workshop
              </span>
              <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-gray-900 lg:text-5xl">
                Data Analysis with Excel (Foundations/Intermediate)
              </h1>
              <p className="text-xl font-normal leading-relaxed text-slate-600">
                Intensive 3-day workshop focused on practical instruction in
                creating dashboards and visual representations.
              </p>
            </div>

            {/* Workshop Highlights */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-gray-900">
                Workshop Highlights
              </h3>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-xl border border-transparent p-4 transition-all hover:border-slate-300 hover:bg-white"
                  >
                    <div className="flex shrink-0 items-center justify-center rounded-lg bg-blue-50 p-2 text-blue-900">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {highlight.icon === "dashboard" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                          />
                        )}
                        {highlight.icon === "analytics" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        )}
                        {highlight.icon === "verified" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        )}
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-base font-bold leading-tight text-gray-900">
                        {highlight.title}
                      </h2>
                      <p className="text-sm font-normal leading-normal text-slate-600">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Enrollment Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-300 bg-white p-6 shadow-xl sm:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Reserve Your Spot
                </h2>
                <p className="mt-1 text-slate-600">
                  Fill in the details below to begin your enrollment.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* First Name & Surname */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="flex flex-col">
                    <span className="pb-2 text-sm font-bold text-gray-900">
                      First Name
                    </span>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base text-gray-900 placeholder:text-slate-400 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/50"
                      placeholder="e.g. Jane"
                      required
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="pb-2 text-sm font-bold text-gray-900">
                      Surname
                    </span>
                    <input
                      type="text"
                      name="surname"
                      value={formData.surname}
                      onChange={handleInputChange}
                      className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base text-gray-900 placeholder:text-slate-400 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/50"
                      placeholder="e.g. Smith"
                      required
                    />
                  </label>
                </div>

                {/* Email */}
                <label className="flex flex-col">
                  <span className="pb-2 text-sm font-bold text-gray-900">
                    Work Email Address
                  </span>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12 w-full rounded-lg border border-slate-300 bg-white py-3 pl-12 pr-4 text-base text-gray-900 placeholder:text-slate-400 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/50"
                      placeholder="name@company.com"
                      required
                    />
                    <svg
                      className="absolute left-4 top-3 h-6 w-6 text-slate-400"
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
                  </div>
                </label>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="flex flex-col">
                    <span className="pb-2 text-sm font-bold text-gray-900">
                      Phone Number
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base text-gray-900 placeholder:text-slate-400 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/50"
                      placeholder="+260 000 000 000"
                    />
                  </label>
                  <label className="flex flex-col">
                    <span className="pb-2 text-sm font-bold text-gray-900">
                      Company Name
                    </span>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base text-gray-900 placeholder:text-slate-400 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/50"
                      placeholder="Company Name"
                    />
                  </label>
                </div>

                {/* Delivery Method & Location */}
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-bold text-gray-900">
                    Delivery Method & Location
                  </p>
                  <div className="flex items-start gap-4 rounded-xl border border-blue-200 bg-blue-50/50 p-4">
                    <div className="flex shrink-0 items-center justify-center rounded-lg bg-white p-2 text-blue-900 shadow-sm">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                        In-person Intensive
                      </span>
                      <p className="text-sm font-bold text-gray-900">
                        Trendline Training Office
                      </p>
                      <p className="text-xs text-slate-600">
                        4th Floor, Anchor House, Lusaka
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex h-14 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-blue-900 px-6 text-lg font-bold leading-normal tracking-wide text-white shadow-lg transition-all hover:bg-blue-950 hover:shadow-xl active:scale-[0.98]"
                  >
                    Register Your Interest
                  </button>
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <span>Secured by SSL. No immediate payment required.</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 bg-white py-8">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 px-10 md:flex-row">
          <div className="flex items-center gap-2 text-slate-600">
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
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            <span className="text-sm font-medium">
              © 2024 Trendline Training & Consultancy Ltd.
            </span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-slate-600">
            <a className="transition-colors hover:text-blue-900" href="#">
              Privacy Policy
            </a>
            <a className="transition-colors hover:text-blue-900" href="#">
              Terms of Service
            </a>
            <a className="transition-colors hover:text-blue-900" href="#">
              Cookie Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
