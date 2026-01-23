"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    setErrorMessage(null);

    const form = new FormData(e.currentTarget);
    const credentials = Object.fromEntries(form) as {
      email?: string;
      password?: string;
    };

    const res = (await signIn("credentials", {
      redirect: false,
      email: credentials.email,
      password: credentials.password,
    } as any)) as any;

    setIsPending(false);

    if (res?.error) {
      setErrorMessage(res.error);
      return;
    }

    // success
    router.push("/admin/dashboard");
  }

  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex w-full items-end rounded-lg bg-[#1e3a8a] p-3 md:h-36">
          <div className="w-32 text-white md:w-36">Trendline Admin</div>
        </div>
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
            <h1 className="mb-3 text-2xl">Please log in to continue.</h1>
            <div className="w-full">
              <div>
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                    minLength={6}
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-[#1e3a8a] text-white p-3 rounded-lg font-medium hover:bg-blue-800 transition-colors aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
              aria-disabled={isPending}
            >
              Log in
            </button>
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {errorMessage && (
                <p className="text-sm text-red-500">{errorMessage}</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
