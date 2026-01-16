"use client";

import { useState, JSX } from "react";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { courseDetails } from "@/data/courseDetails";
import { submitRegistrationForm } from "@/app/actions/registration";

const initialState = {
  success: false,
  errors: {} as Record<string, string[]>,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex rounded-full  w-full cursor-pointer items-center justify-center overflow-hidden  h-12 px-6 bg-[#1e3a8a] hover:bg-blue-800 text-white text-base font-bold transition-colors shadow-md hover:shadow-lg disabled:opacity-50"
    >
      {pending ? "Submitting..." : "Complete Registration"}
    </button>
  );
}

interface Course {
  value: string;
  label: string;
}

interface DeliveryMethod {
  value: "in-person" | "online" | "hybrid";
  label: string;
  icon: JSX.Element;
}

export default function EnrollmentPage() {
  const searchParams = useSearchParams();
  const courseSlug = searchParams.get("course") || "";

  const [state, formAction] = useActionState(
    submitRegistrationForm,
    initialState
  );
  const [modalClosed, setModalClosed] = useState(false);
  const [clearedErrors, setClearedErrors] = useState<Set<string>>(new Set());

  const closeModal = () => setModalClosed(true);
  const showModal = state.success && !modalClosed;

  const getError = (field: string) => {
    if (clearedErrors.has(field)) return undefined;
    return state.errors[field];
  };

  const handleInputChange = (field: string) => {
    if (state.errors[field] && !clearedErrors.has(field)) {
      setClearedErrors((prev) => new Set(prev).add(field));
    }
  };

  const handleSubmit = (formData: FormData) => {
    setModalClosed(false);
    setClearedErrors(new Set());
    return formAction(formData);
  };

  const courses: Course[] = courseDetails.map((course) => ({
    value: course.slug,
    label: course.title,
  }));

  const initialCourse = courses.some((c) => c.value === courseSlug)
    ? courseSlug
    : "";

  const deliveryMethods: DeliveryMethod[] = [
    {
      value: "in-person",
      label: "In-person",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
    },
    {
      value: "online",
      label: "Online Live",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
        </svg>
      ),
    },
    {
      value: "hybrid",
      label: "Hybrid",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
        </svg>
      ),
    },
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
        </svg>
      ),
      title: "Expert-led training",
      description:
        "Learn directly from industry veterans with 15+ years of experience.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
        </svg>
      ),
      title: "Practical case studies",
      description:
        "Apply your skills immediately with real-world business scenarios.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z" />
        </svg>
      ),
      title: "Certified Completion Badge",
      description:
        "Receive an industry-recognized certificate upon course completion.",
    },
  ];

  return (
    <div className="font-display bg-gray-50 dark:bg-[#101922] text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Registration Submitted!
            </h3>
            <p className="text-gray-600 mb-6">
              Thanks for registering your interest. We&apos;ll be in touch soon
              with next steps.
            </p>
            <button
              onClick={closeModal}
              className="bg-[#1e3a8a] text-white px-6 py-2 font-medium hover:bg-blue-700 transition rounded-full cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <main className="grow flex justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-280 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 flex flex-col gap-8 pt-4">
            <div className="flex flex-col gap-4">
              <h1 className="text-gray-900 dark:text-white text-4xl lg:text-5xl font-normal">
                Professional Training That Delivers Results
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-relaxed">
                Join many professionals upgrading their skills with Trendline.
                Secure your spot today for career defining growth.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              <h3 className="text-gray-900 dark:text-gray-200 text-xl font-bold">
                Why Enroll with Trendline?
              </h3>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start p-4 rounded-xl border border-transparent hover:border-gray-300 hover:bg-white dark:hover:bg-gray-800 dark:hover:border-gray-700 transition-all"
                >
                  <div className="text-[#1e3a8a] bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg shrink-0 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-gray-900 dark:text-white text-base font-bold leading-tight">
                      {benefit.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-[#f0f8ff] rounded-2xl border border-gray-300 dark:border-gray-700 shadow-sm p-6 sm:p-8">
              <form
                action={handleSubmit}
                className="flex flex-col gap-6"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <p className="text-gray-900 dark:text-gray-200 text-base font-medium pb-2">
                      First Name
                    </p>
                    <input
                      type="text"
                      name="firstName"
                      onChange={() => handleInputChange("firstName")}
                      placeholder="e.g. Jane"
                      className={`w-full rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#1e3a8a]/50 border ${
                        getError("firstName")
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      } bg-white dark:bg-gray-800 h-12 px-4 text-base`}
                    />
                    {getError("firstName") && (
                      <p className="mt-1 text-xs text-red-600">
                        {getError("firstName")![0]}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-900 dark:text-gray-200 text-base font-medium pb-2">
                      Surname
                    </p>
                    <input
                      type="text"
                      name="surname"
                      onChange={() => handleInputChange("surname")}
                      placeholder="e.g. Smith"
                      className={`w-full rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#1e3a8a]/50 border ${
                        getError("surname")
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      } bg-white dark:bg-gray-800 h-12 px-4 text-base`}
                    />
                    {getError("surname") && (
                      <p className="mt-1 text-xs text-red-600">
                        {getError("surname")![0]}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-900 dark:text-gray-200 text-base font-medium pb-2">
                    Work Email Address
                  </p>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      onChange={() => handleInputChange("email")}
                      placeholder="name@company.com"
                      className={`w-full rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#1e3a8a]/50 border ${
                        getError("email")
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-600"
                      } bg-white dark:bg-gray-800 h-12 px-4 text-base pr-12`}
                    />
                    <svg
                      className="absolute right-4 top-3 w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  {getError("email") && (
                    <p className="mt-1 text-xs text-red-600">
                      {getError("email")![0]}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <p className="text-gray-900 dark:text-gray-200 text-base font-medium pb-2">
                      Phone Number
                    </p>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#1e3a8a]/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 h-12 px-4 text-base"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-900 dark:text-gray-200 text-base font-medium pb-2">
                      Company Name{" "}
                      <span className="text-sm text-gray-500 font-normal">
                        (Optional)
                      </span>
                    </p>
                    <input
                      type="text"
                      name="company"
                      placeholder="Trendline Inc."
                      className="w-full rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#1e3a8a]/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 h-12 px-4 text-base"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-900 dark:text-gray-200 text-base font-medium pb-2">
                    Selected Course
                  </p>
                  <div className="relative">
                    {initialCourse ? (
                      <>
                        <input
                          type="text"
                          value={
                            courses.find((c) => c.value === initialCourse)
                              ?.label || ""
                          }
                          readOnly
                          className="w-full rounded-lg text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 h-12 px-4 text-base cursor-not-allowed"
                        />
                        <input
                          type="hidden"
                          name="course"
                          value={initialCourse}
                        />
                      </>
                    ) : (
                      <>
                        <select
                          name="course"
                          defaultValue=""
                          onChange={() => handleInputChange("course")}
                          className={`w-full rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#1e3a8a]/50 border ${
                            getError("course")
                              ? "border-red-500"
                              : "border-gray-300 dark:border-gray-600"
                          } bg-white dark:bg-gray-800 h-12 px-4 text-base appearance-none cursor-pointer`}
                        >
                          <option value="" disabled>
                            Choose a specialization...
                          </option>
                          {courses.map((course) => (
                            <option key={course.value} value={course.value}>
                              {course.label}
                            </option>
                          ))}
                        </select>
                        <svg
                          className="absolute right-4 top-3 w-6 h-6 text-gray-400 pointer-events-none"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                        </svg>
                      </>
                    )}
                  </div>
                  {getError("course") && (
                    <p className="mt-1 text-xs text-red-600">
                      {getError("course")![0]}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-900 dark:text-gray-200 text-base font-medium">
                    Preferred Delivery Method
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {deliveryMethods.map((method, index) => (
                      <label key={method.value} className="cursor-pointer">
                        <input
                          type="radio"
                          name="deliveryMethod"
                          value={method.value}
                          defaultChecked={index === 0}
                          className="sr-only peer"
                        />
                        <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 peer-checked:border-[#1e3a8a] peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 peer-checked:ring-1 peer-checked:ring-[#1e3a8a] transition-all hover:bg-gray-50 dark:hover:bg-gray-700 h-full text-center">
                          <div className="text-gray-600 peer-checked:text-[#1e3a8a] mb-2">
                            {method.icon}
                          </div>
                          <span className="text-sm font-semibold text-gray-900 dark:text-white peer-checked:text-[#1e3a8a]">
                            {method.label}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="pt-2 flex flex-col gap-3">
                  <SubmitButton />
                  <p className="text-center text-xs text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                    </svg>
                    No payment required today. Your information is secure.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
