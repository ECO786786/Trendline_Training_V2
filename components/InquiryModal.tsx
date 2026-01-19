"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { X } from "lucide-react";
import { submitCorporateInquiry } from "@/app/actions/corporate-inquiry";

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
      className="bg-[#1e3a8a] text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition whitespace-nowrap disabled:opacity-50 cursor-pointer"
    >
      {pending ? "Sending..." : "Send Request"}
    </button>
  );
}

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
  servicePrice?: string;
}

export default function InquiryModal({
  isOpen,
  onClose,
  serviceName = "",
  servicePrice = "",
}: InquiryModalProps) {
  const [state, formAction] = useActionState(
    submitCorporateInquiry,
    initialState
  );
  const [clearedErrors, setClearedErrors] = useState<Set<string>>(new Set());
  const [showSuccess, setShowSuccess] = useState(false);

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
    setClearedErrors(new Set());
    setShowSuccess(false);
    return formAction(formData);
  };

  // Show success modal when form succeeds
  if (state.success && !showSuccess) {
    setShowSuccess(true);
  }

  const handleClose = () => {
    setShowSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  // Success view
  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-8 text-center">
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
            Inquiry Submitted!
          </h3>
          <p className="text-gray-600 mb-6">
            Thanks for your interest in our corporate solutions. We&apos;ll be
            in touch soon.
          </p>
          <button
            onClick={handleClose}
            className="bg-[#1e3a8a] text-white px-6 py-2 font-medium hover:bg-blue-700 transition rounded-full cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  // Form view
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Register Your Interest
          </h3>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {serviceName && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-sm text-gray-600">Selected Service:</p>
            <p className="font-semibold text-gray-900">{serviceName}</p>
            {servicePrice && (
              <p className="text-[#1e3a8a] font-medium">{servicePrice}</p>
            )}
          </div>
        )}

        <form action={handleSubmit} noValidate className="space-y-6">
          <input type="hidden" name="serviceName" value={serviceName} />
          <input type="hidden" name="servicePrice" value={servicePrice} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-gray-700 mb-2 font-medium"
                htmlFor="fullName"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                onChange={() => handleInputChange("fullName")}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/50 ${
                  getError("fullName") ? "border-red-500" : "border-gray-300"
                }`}
              />
              {getError("fullName") && (
                <p className="mt-1 text-xs text-red-600">
                  {getError("fullName")![0]}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-gray-700 mb-2 font-medium"
                htmlFor="email"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={() => handleInputChange("email")}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/50 ${
                  getError("email") ? "border-red-500" : "border-gray-300"
                }`}
              />
              {getError("email") && (
                <p className="mt-1 text-xs text-red-600">
                  {getError("email")![0]}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-gray-700 mb-2 font-medium"
                htmlFor="phone"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                onChange={() => handleInputChange("phone")}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/50 ${
                  getError("phone") ? "border-red-500" : "border-gray-300"
                }`}
              />
              {getError("phone") && (
                <p className="mt-1 text-xs text-red-600">
                  {getError("phone")![0]}
                </p>
              )}
            </div>
            <div>
              <label
                className="block text-gray-700 mb-2 font-medium"
                htmlFor="company"
              >
                Company/Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/50"
              />
            </div>
          </div>

          <div>
            <label
              className="block text-gray-700 mb-2 font-medium"
              htmlFor="message"
            >
              Additional Notes
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="Any specific requirements or questions?"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/50"
            />
          </div>

          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative flex items-center pt-0.5">
                <input
                  className="form-checkbox size-5 rounded border-[#cfdbe7] dark:border-slate-600 text-[#1e3a8a] focus:ring-[#1e3a8a]/50 transition-all cursor-pointer"
                  id="privacy-policy"
                  name="terms"
                  required
                  type="checkbox"
                />
              </div>
              <span className="text-sm text-gray-600 leading-normal">
                I have read and agree to the{" "}
                <a
                  className="text-[#1e3a8a] font-semibold hover:underline decoration-2 underline-offset-2"
                  href="/privacy"
                >
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>

          <div className="flex justify-end">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
