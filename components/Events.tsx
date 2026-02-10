import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  date: { month: string; day: string; fullDate: string };
  title: string;
  category?: string;
  description: string;
  buttonText: string;
  slug: string;
}

function EventCard({
  date,
  title,
  category,
  description,
  buttonText,
  slug,
}: EventCardProps) {
  return (
    <div className="flex flex-col items-center border border-gray-400  px-4 py-6 md:flex-row md:py-4 rounded-lg">
      <div className="flex min-w-24 shrink-0 flex-col items-center p-0 px-1 py-3 text-base md:px-1 md:py-3">
        <span>{date.month}</span>
        <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
          {date.day}
        </span>
        <span>{date.fullDate}</span>
      </div>
      <div className="mt-6 flex flex-col items-start border-t border-gray-400 pt-6 md:ml-6 md:mt-0 md:border-l md:border-t-0 md:pl-6 md:pt-0">
        <div className="flex flex-wrap items-center gap-4">
          <a href={`/registration?course=${slug}&from=schedule`}>
            <h2 className="text-xl font-bold md:text-2xl mb-1">{title}</h2>
          </a>
        </div>
        <p className="mb-2 text-sm text-[#1e3a8a] font-medium">{category}</p>
        <p className="mb-4">{description}</p>
        <Link
          href={`/registration?course=${slug}&from=schedule`}
          className="inline-flex items-center justify-center rounded-full bg-[#1e3a8a] px-6 py-2 text-[14px] md:text-base font-medium text-white shadow hover:bg-blue-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export default function Events() {
  const events = [
    {
      date: { month: "Mar", day: "23", fullDate: "2026" },
      title: "Financial analysis with Power BI",
      category: "Advanced",
      description:
        "Five days learning visualization and business intelligence fundamentals",
      buttonText: "Register now",
      slug: "financial-analysis-power-bi",
    },
    {
      date: { month: "Apr", day: "13", fullDate: "2026" },
      title: "Analytics (DAX Creation, Capstone & Dashboard Clinic)",
      category: "Advanced",
      description:
        "Master DAX through hands-on creation, real-world capstone work, and live dashboard optimisation clinics.",
      buttonText: "Register now",
      slug: "analytics-dax-creation-capstone-dashboard-clinic",
    },
    {
      date: { month: "May", day: "26", fullDate: "2026" },
      title: "Data Governance & Reporting Standards",
      category: "All Levels",
      description:
        "Build trusted, compliant, and consistent reporting across the organization.",
      buttonText: "Register now",
      slug: "data-governance-reporting-standards",
    }
  ];

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
              href="/registration?course=data-analysis-with-excel&from=schedule"
              className="relative block w-full max-w-full"
            >
              <div className="w-full overflow-hidden">
                <Image
                  src="/images/forecasting.png"
                  alt="Data analysis with Excel course"
                  className="aspect-3/2 size-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
                  width={800}
                  height={533}
                />
              </div>
              <div className="absolute right-4 top-4 flex min-w-28 flex-col items-center bg-white px-1 py-3 text-sm rounded-lg shadow-md">
                <span>Feb</span>
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  16
                </span>
                <span>2026</span>
              </div>
            </Link>
            <div className="flex flex-col items-start p-6">
              <Link href="/registration?course=financial-modelling-and-forecasting&from=schedule">
                <h2 className="text-xl font-bold md:text-2xl">
                  Financial Modelling and Forecasting
                </h2>
              </Link>
              <p className="mb-2 text-[#1e3a8a] font-medium">
                Advanced
              </p>
              <p className="mb-4">
                Five days mastering predictive models and financial planning techniques.
              </p>
              <Link
                href={`/registration?course=financial-modelling-and-forecasting&from=schedule`}
                className="inline-flex items-center justify-center rounded-full bg-[#1e3a8a] px-6 py-2 text-[14px] md:text-base font-medium text-white shadow hover:bg-blue-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
              >
                Register now
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
