"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "../app/actions/contact";
import Link from "next/link";

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
      className="sm:w-auto rounded-full bg-[#1e3a8a] px-8 py-3 text-white font-medium
      disabled:opacity-50 cursor-pointer mt-6"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
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

  return (
    <>
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
              Message Sent!
            </h3>
            <p className="text-gray-600 mb-6">
              Thanks for getting in touch. We&apos;ll get back to you soon.
            </p>
            <button
              onClick={closeModal}
              className="bg-[#1e3a8a] text-white px-6 py-2 font-medium hover:bg-blue-700 transition rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <form action={handleSubmit} noValidate aria-describedby="form-status">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium mb-2"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              aria-invalid={!!getError("fullName")}
              aria-describedby="fullName-error"
              onChange={() => handleInputChange("fullName")}
              className={`w-full rounded-md border px-4 py-3 ${
                getError("fullName") ? "border-red-500" : "border-gray-300"
              }`}
            />
            {getError("fullName") && (
              <p
                id="fullName-error"
                className="mt-1 text-xs text-red-600 animate-in fade-in"
              >
                {getError("fullName")![0]}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              aria-invalid={!!getError("email")}
              aria-describedby="email-error"
              onChange={() => handleInputChange("email")}
              className={`w-full rounded-md border px-4 py-3 ${
                getError("email") ? "border-red-500" : "border-gray-300"
              }`}
            />
            {getError("email") && (
              <p
                id="email-error"
                className="mt-1 text-xs text-red-600 animate-in fade-in"
              >
                {getError("email")![0]}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              className="w-full rounded-md border border-gray-300 px-4 py-3"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company
            </label>
            <input
              id="company"
              name="company"
              className="w-full rounded-md border border-gray-300 px-4 py-3"
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            aria-invalid={!!getError("subject")}
            aria-describedby="subject-error"
            onChange={() => handleInputChange("subject")}
            className={`w-full rounded-md border px-4 py-3 ${
              getError("subject") ? "border-red-500" : "border-gray-300"
            }`}
          />
          {getError("subject") && (
            <p
              id="subject-error"
              className="mt-1 text-xs text-red-600 animate-in fade-in"
            >
              {getError("subject")![0]}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            aria-invalid={!!getError("message")}
            aria-describedby="message-error"
            onChange={() => handleInputChange("message")}
            className={`w-full rounded-md border px-4 py-3 resize-none ${
              getError("message") ? "border-red-500" : "border-gray-300"
            }`}
          />
          {getError("message") && (
            <p
              id="message-error"
              className="mt-1 text-xs text-red-600 animate-in fade-in"
            >
              {getError("message")![0]}
            </p>
          )}
        </div>
        <div className="pt-2 mb-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative flex items-center pt-0.5">
              <input
                type="checkbox"
                name="terms"
                id="privacy-policy"
                required
                aria-invalid={!!getError("terms")}
                onChange={() => handleInputChange("terms")}
                className="form-checkbox size-5 rounded border-[#cfdbe7] dark:border-slate-600 text-[#1e3a8a] focus:ring-[#1e3a8a]/50 transition-all cursor-pointer"
              />
            </div>
            <span className="text-sm text-gray-600 leading-normal">
              I have read and agree to the{" "}
              <Link
                href="/privacy"
                className="text-[#1e3a8a] font-semibold hover:underline decoration-2 underline-offset-2"
              >
                Privacy Policy
              </Link>
            </span>
          </label>
          {getError("terms") && (
            <p className="mt-1 text-xs text-red-600 animate-in fade-in">
              {getError("terms")![0]}
            </p>
          )}
        </div>
        <SubmitButton />
      </form>
    </>
  );
}
