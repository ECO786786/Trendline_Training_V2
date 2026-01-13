"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "../app/actions/contact";

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
      className="w-full sm:w-auto rounded-full bg-[#1e3a8a] px-8 py-3 text-white font-medium
      disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <form
      action={formAction}
      noValidate
      aria-describedby="form-status"
      className="grid max-w-lg grid-cols-1 gap-6"
    >
      {/* Full name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium mb-2">
          Full name
        </label>
        <input
          id="fullName"
          name="fullName"
          aria-invalid={!!state.errors.fullName}
          aria-describedby="fullName-error"
          className={`w-full rounded-md border px-4 py-3 ${
            state.errors.fullName ? "border-red-500" : "border-gray-300"
          }`}
        />
        {state.errors.fullName && (
          <p
            id="fullName-error"
            className="mt-1 text-xs text-red-600 animate-in fade-in"
          >
            {state.errors.fullName[0]}
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
          aria-invalid={!!state.errors.email}
          aria-describedby="email-error"
          className={`w-full rounded-md border px-4 py-3 ${
            state.errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {state.errors.email && (
          <p
            id="email-error"
            className="mt-1 text-xs text-red-600 animate-in fade-in"
          >
            {state.errors.email[0]}
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

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          aria-invalid={!!state.errors.subject}
          aria-describedby="subject-error"
          className={`w-full rounded-md border px-4 py-3 ${
            state.errors.subject ? "border-red-500" : "border-gray-300"
          }`}
        />
        {state.errors.subject && (
          <p
            id="subject-error"
            className="mt-1 text-xs text-red-600 animate-in fade-in"
          >
            {state.errors.subject[0]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={!!state.errors.message}
          aria-describedby="message-error"
          className={`w-full rounded-md border px-4 py-3 resize-none ${
            state.errors.message ? "border-red-500" : "border-gray-300"
          }`}
        />
        {state.errors.message && (
          <p
            id="message-error"
            className="mt-1 text-xs text-red-600 animate-in fade-in"
          >
            {state.errors.message[0]}
          </p>
        )}
      </div>

      {/* Terms */}
      <label className="flex items-center gap-3 text-sm cursor-pointer">
        <input
          type="checkbox"
          name="terms"
          aria-invalid={!!state.errors.terms}
          className="h-5 w-5"
        />
        I agree to the Privacy Policy
      </label>

      {state.errors.terms && (
        <p className="text-xs text-red-600 animate-in fade-in">
          {state.errors.terms[0]}
        </p>
      )}

      <div id="form-status" aria-live="polite" className="min-h-6">
        {state.success && (
          <p className="text-green-600 animate-in fade-in slide-in-from-bottom-2">
            Message sent successfully!
          </p>
        )}
      </div>

      <SubmitButton />
    </form>
  );
}
