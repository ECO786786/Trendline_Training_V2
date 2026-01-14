import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-[#1E3A8A] text-white overflow-hidden">
      <div className="relative text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium backdrop-blur-sm rounded-full border border-white/20">
          Start Your Data Journey Today
        </span>

        <h2 className="mb-5 font-medium text-3xl md:text-4xl lg:text-5xl leading-tight font-heading md:mb-6">
          Ready to Transform Your Organization&apos;s Approach to Data?
        </h2>

        <p className="text-base md:text-lg text-white max-w-2xl mx-auto font-inter font-normal leading-6.75 wrap-break-word">
          Schedule a consultation with our experts to discuss how our training
          and consultancy services can help your organization leverage data for
          strategic advantage.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4 md:mt-10 flex-col sm:flex-row">
          <Link
            href="tel:+260978148593"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-blue-900 shadow-lg shadow-blue-900/25 hover:bg-blue-50 hover:shadow-xl hover:shadow-blue-900/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white text-base"
          >
            <svg
              className="w-5 h-5"
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
            Schedule a Call
          </Link>

          <Link
            href="https://calendly.com/trendline02tc/30min"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-white/30 font-semibold hover:bg-white hover:text-blue-900 backdrop-blur-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white text-base"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
