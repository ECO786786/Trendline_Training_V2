import Link from "next/link";

export default function TermsConditions() {
  return (
    <main className="bg-gray-50">
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/"
          className="text-[#1e3a8a] hover:underline mb-6 inline-block"
        >
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <p className="text-gray-800 mb-6">
          <strong>Last updated:</strong> 23 September 2025
        </p>

        <p className="mb-6">
          These Terms of Service (“Terms”) govern your use of the website {""}
          <Link href="/" className="text-[#1e3a8a] hover:underline">
            trendlinec.com
          </Link>{" "}
          operated by <strong>Trendline Training & Consultancy Ltd</strong>
          (“we”, “us”, “our”). By accessing or using our website, you agree to
          be bound by these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Use of the Website
        </h2>
        <p className="mb-6">
          You agree to use this website only for lawful purposes and in a way
          that does not infringe the rights of others or restrict their use and
          enjoyment of the site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. Intellectual Property
        </h2>
        <p className="mb-6">
          All content on this website, including text, graphics, logos, images,
          videos, and branding, is the property of Trendline Training &
          Consultancy Ltd unless otherwise stated. You may not copy, reproduce,
          distribute, or reuse any content without written permission.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          3. Services & Information
        </h2>
        <p className="mb-6">
          Information provided on this website is for general informational
          purposes only. We reserve the right to modify or discontinue any
          service, training program, or content without notice.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          4. User Submissions
        </h2>
        <p className="mb-6">
          When you submit enquiries, forms, or booking requests, you agree that
          the information provided is accurate and complete. We are not
          responsible for issues arising from incorrect information supplied by
          users.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          5. Third-Party Links
        </h2>
        <p className="mb-6">
          This website may contain links to third-party websites. We do not
          control or endorse these websites and are not responsible for their
          content, availability, or privacy practices.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          6. Limitation of Liability
        </h2>
        <p className="mb-6">
          To the fullest extent permitted by law, Trendline Training &
          Consultancy Ltd shall not be liable for any direct, indirect,
          incidental, or consequential loss arising from the use or inability to
          use this website or its content.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          7. Availability & Security
        </h2>
        <p className="mb-6">
          We aim to keep the website available at all times but do not guarantee
          uninterrupted access. We are not responsible for downtime, technical
          issues, or data loss.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          8. Changes to These Terms
        </h2>
        <p className="mb-6">
          We may update these Terms from time to time. Continued use of the
          website after changes are posted constitutes acceptance of the updated
          Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law</h2>
        <p className="mb-6">
          These Terms are governed by and interpreted in accordance with the
          laws applicable in Zambia, without regard to conflict of law
          principles.
        </p>

        <section className="mt-16 text-gray-800 text-sm">
          <p>
            If you have questions about these Terms, please contact us at{" "}
            <Link
              href="mailto:info@trendlinec.com"
              className="text-[#1e3a8a] hover:underline"
            >
              info@trendlinec.com
            </Link>
            .
          </p>
        </section>
      </section>
    </main>
  );
}
