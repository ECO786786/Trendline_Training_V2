import Link from "next/link";

export default function CookiesPolicy() {
  return (
    <main className="bg-gray-50">
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/"
          className="text-[#1e3a8a] hover:underline mb-6 inline-block"
        >
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

        <p className="text-gray-800 mb-6">
          <strong>Last updated:</strong> 23 September 2025
        </p>

        <p className="mb-6">
          This Cookie Policy explains how{" "}
          <strong>Trendline Training & Consultancy Ltd</strong>
          (“we”, “us”, “our”) uses cookies and similar technologies on{" "}
          <Link href="/" className="text-[#1e3a8a] hover:underline">
            https://trendlinec.com
          </Link>
          (“Website”).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. What Are Cookies?
        </h2>
        <p className="mb-6">
          Cookies are small text files stored on your device when you visit a
          website. They help websites function properly and provide information
          about how users interact with the site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. Types of Cookies We Use
        </h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Essential cookies</strong> – Required for basic website
            functionality, security, and navigation.
          </li>
          <li>
            <strong>Analytics cookies</strong> – Used to understand how visitors
            interact with the Website.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          3. Google Analytics
        </h2>
        <p className="mb-6">
          We use <strong>Google Analytics</strong> to collect anonymous
          information such as:
        </p>

        <ul className="list-disc list-inside mb-6">
          <li>Pages visited</li>
          <li>Time spent on the Website</li>
          <li>Traffic sources</li>
          <li>Browser and device information</li>
        </ul>

        <p className="mb-6">
          This data helps us analyse website performance and improve user
          experience. Google Analytics does not directly identify individual
          users.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. Managing Cookies
        </h2>
        <p className="mb-6">
          You can control or disable cookies through your browser settings at
          any time. Please note that disabling cookies may affect certain
          website functionality.
        </p>

        <p className="mb-6">
          You can also opt out of Google Analytics tracking by installing the
          Google Analytics Opt-out Browser Add-on: {""}
          <Link
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1e3a8a] hover:underline"
          >
            https://tools.google.com/dlpage/gaoptout
          </Link>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Consent</h2>
        <p className="mb-6">
          By continuing to use this Website, you consent to the use of cookies
          in accordance with this Cookie Policy. Where required by law, we will
          request your consent before placing non-essential cookies.
        </p>

        <section className="mt-16 text-gray-800 text-sm">
          <p>
            For more information about how we handle personal data, please see
            our{" "}
            <Link href="/privacy" className="text-[#1e3a8a] hover:underline">
              Privacy Policy
            </Link>
            and {""}
            <Link href="/terms" className="text-[#1e3a8a] hover:underline">
              Terms of Service
            </Link>
            .
          </p>
        </section>
      </section>
    </main>
  );
}
