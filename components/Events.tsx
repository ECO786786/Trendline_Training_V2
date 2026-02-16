import Image from "next/image";
import Link from "next/link";

export default function Events() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-50">
      <div className="container mx-auto">
        <div className="mb-12 grid auto-cols-fr grid-cols-1 items-end gap-12 md:mb-18 md:grid-cols-[1fr_max-content] lg:mb-20 lg:gap-20">
          <div className="w-full max-w-3xl mx-auto text-center md:mx-0 md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-medium leading-[120%] font-heading mb-4 md:mb-6">
              Training Schedule
            </h2>
            <p className="md:text-md">
              Upcoming sessions in Lusaka. Spots are limited.
            </p>
          </div>
          <Link
            href="/training-schedule"
            className="flex items-center justify-center px-6 py-2 border border-gray-400  hover:bg-gray-100 transition-colors font-medium rounded-full"
          >
            View calendar
          </Link>
        </div>
        <div className="mb-16 grid auto-cols-fr auto-rows-auto grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <div className="border border-gray-400  rounded-lg">
            <Link
              href="/registration?course=financial-analysis-power-bi&from=schedule"
              className="relative block w-full max-w-full"
            >
              <div className="w-full overflow-hidden">
                <Image
                  src="/images/power-bi-course.png"
                  alt="Data analysis with Excel course"
                  className="aspect-3/2 size-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
                  width={800}
                  height={533}
                />
              </div>
              {/* <div className="absolute right-4 top-4 flex min-w-28 flex-col items-center bg-white px-1 py-3 text-sm rounded-lg shadow-md">
                <span>Feb</span>
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  16
                </span>
                <span>2026</span>
              </div> */}
            </Link>
            <div className="flex flex-col items-start p-6">
              <Link href="/registration?course=financial-analysis-power-bi&from=schedule">
                <h2 className="text-xl font-bold md:text-2xl">
                  Financial analysis with Power BI
                </h2>
              </Link>
              <p className="mb-2 text-[#1e3a8a] font-medium">
                Advanced
              </p>
              <p className="mb-4">
                Transform financial data into automated, insight-driven reports using Power BI and advanced DAX.
              </p>
              <Link
                href={`/registration?course=financial-analysis-power-bi&from=schedule`}
                className="inline-flex items-center justify-center rounded-full bg-[#1e3a8a] px-6 py-2 text-[14px] md:text-base font-medium text-white shadow hover:bg-blue-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
              >
                Register now
              </Link>
            </div>
          </div>
          <div className="border border-gray-400  rounded-lg">
            <Link
              href="/registration?course=analytics-dax-creation-capstone-dashboard-clinic&from=schedule"
              className="relative block w-full max-w-full"
            >
              <div className="w-full overflow-hidden">
                <Image
                  src="/images/analytics-dashboard.png"
                  alt="Data analysis with Excel course"
                  className="aspect-3/2 size-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
                  width={800}
                  height={533}
                />
              </div>
              {/* <div className="absolute right-4 top-4 flex min-w-28 flex-col items-center bg-white px-1 py-3 text-sm rounded-lg shadow-md">
                <span>Feb</span>
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  16
                </span>
                <span>2026</span>
              </div> */}
            </Link>
            <div className="flex flex-col items-start p-6">
              <Link href="/registration?course=analytics-dax-creation-capstone-dashboard-clinic&from=schedule">
                <h2 className="text-xl font-bold md:text-2xl">
                  Analytics (DAX Creation, Capstone & Dashboard Clinic)
                </h2>
              </Link>
              <p className="mb-2 text-[#1e3a8a] font-medium">
                Advanced
              </p>
              <p className="mb-4">
                Master DAX through hands-on creation, real-world capstone work, and live dashboard optimisation clinics.
              </p>
              <Link
                href={`/registration?course=analytics-dax-creation-capstone-dashboard-clinic&from=schedule`}
                className="inline-flex items-center justify-center rounded-full bg-[#1e3a8a] px-6 py-2 text-[14px] md:text-base font-medium text-white shadow hover:bg-blue-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
              >
                Register now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
