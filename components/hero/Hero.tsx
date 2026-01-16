import Image from "next/image";
import Logo from "../logo/Logo";

export default function Hero() {
  return (
    <section
      className="px-[5%] py-16 md:py-24 lg:py-28"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <header className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-2xl">
              <h1
                id="hero-heading"
                className="mb-5 text-[40px] md:text-[60px] font-semibold md:mb-6 leading-[120%] opacity-0 animate-fade-up"
              >
                Transforming Businesses with{" "}
                <span className="bg-linear-to-r from-[#1e3a8a] to-[#42D6FF] bg-clip-text text-transparent">
                  Data
                </span>
              </h1>
              <p className="md:text-md opacity-0 animate-fade-up animate-delay-300">
                Trendline Training & Consultancy provides expert led corporate
                training and consultancy services that empower organizations to
                leverage data for strategic decision making and sustainable
                growth.
              </p>
              <nav
                className="mt-6 flex items-center justify-center gap-x-4 md:mt-8 opacity-0 animate-fade-up animate-delay-400"
                aria-label="Primary actions"
              >
                <a
                  href="https://calendly.com/trendline02tc/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#1e3a8a] px-6 py-2 text-[14px] md:text-base font-medium text-white shadow hover:bg-blue-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
                  aria-label="Request a consultation with our team"
                >
                  Book Appointment
                </a>
                <a
                  href="/brochures/trendline-training-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-blue-900 bg-white px-6 py-2 text-[14px] md:text-base font-medium text-blue-900 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
                  aria-label="View our services brochure"
                >
                  View Brochure
                </a>
              </nav>
            </div>
          </header>
          <figure>
            <Image
              src="/images/hero.jpg"
              alt="Professional team collaborating on data analysis and business strategy"
              width={1280}
              height={720}
              className="rounded-lg shadow-lg"
              priority
            />
          </figure>
        </div>
      </div>
      <Logo />
    </section>
  );
}
