import Image from "next/image";

interface EventCardProps {
  date: { month: string; day: string; fullDate: string };
  title: string;
  category?: string;
  location: string;
  description: string;
  buttonText: string;
  href: string;
}

function EventCard({
  date,
  title,
  category,
  location,
  description,
  buttonText,
  href,
}: EventCardProps) {
  return (
    <div className="flex flex-col items-center border border-gray-200 px-4 py-6 md:flex-row md:py-4">
      <div className="flex min-w-24 shrink-0 flex-col items-center bg-white p-0 px-1 py-3 text-base md:px-1 md:py-3">
        <span>{date.month}</span>
        <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
          {date.day}
        </span>
        <span>{date.fullDate}</span>
      </div>
      <div className="mt-6 flex flex-col items-start border-t border-gray-200 pt-6 md:ml-6 md:mt-0 md:border-l md:border-t-0 md:pl-6 md:pt-0">
        <div className="flex flex-wrap items-center gap-4">
          <a href={href}>
            <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
          </a>
          {category && (
            <p className="bg-gray-100 px-2 py-1 text-sm font-semibold">
              {category}
            </p>
          )}
        </div>
        <p className="mb-2 text-sm">{location}</p>
        <p>{description}</p>
        <a
          href={href}
          className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 md:mt-6"
        >
          {buttonText}
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Events() {
  const events = [
    {
      date: { month: "Feb", day: "16", fullDate: "Feb 2026" },
      title: "Financial modelling and forecasting",
      category: "Advanced",
      location: "Online",
      description:
        "Five days mastering predictive models and financial planning techniques",
      buttonText: "Register now",
      href: "#",
    },
    {
      date: { month: "Mar", day: "16", fullDate: "Mar 2026" },
      title: "Advanced Excel for data analysis",
      location: "Online",
      description:
        "Three intensive days exploring advanced formulas and analytical methods",
      buttonText: "Join now",
      href: "#",
    },
    {
      date: { month: "Mar", day: "23", fullDate: "Mar 2026" },
      title: "Financial analysis with Power BI",
      location: "Online",
      description:
        "Five days learning visualization and business intelligence fundamentals",
      buttonText: "Secure spot",
      href: "#",
    },
  ];

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full">
            <p className="mb-3 font-semibold md:mb-4">Programs</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Upcoming
            </h1>
            <p className="md:text-md">
              Master data skills with intensive, hands-on training designed for
              professionals
            </p>
          </div>
        </div>
        <div className="mb-16 grid auto-cols-fr auto-rows-auto grid-cols-1 items-start gap-8 lg:grid-cols-2">
          {/* Featured Event */}
          <div className="border border-gray-200">
            <a href="#" className="relative block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <Image
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Data analysis with Excel course"
                  className="aspect-[3/2] size-full object-cover"
                  width={800}
                  height={533}
                />
              </div>
              <div className="absolute right-4 top-4 flex min-w-28 flex-col items-center bg-white px-1 py-3 text-sm">
                <span>Feb</span>
                <span className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  09
                </span>
                <span>Feb 2026</span>
              </div>
            </a>
            <div className="flex flex-col items-start p-6">
              <p className="mb-4 bg-gray-100 px-2 py-1 text-sm font-semibold">
                Foundations
              </p>
              <a href="#">
                <h2 className="text-xl font-bold md:text-2xl">
                  Data analysis with Excel
                </h2>
              </a>
              <p className="mb-2">Online</p>
              <p>
                Three days building essential spreadsheet skills for data work
              </p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 md:mt-6"
              >
                Enroll now
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Event List */}
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
