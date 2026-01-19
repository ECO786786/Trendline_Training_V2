"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Feature {
  id: string;
  number: string;
  title: string;
  heading: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    id: "feature-01",
    number: "01",
    title: "Real implementation",
    heading: "ROI you can see",
    description:
      "Better dashboards. Faster decisions. Lower costs. We track what matters and show you the impact.",
    image: "/images/liquid-training.jpg",
  },
  {
    id: "feature-02",
    number: "02",
    title: "Local expertise",
    heading: "Market knowledge",
    description:
      "We understand Zambian business challenges and regulatory requirements. Our solutions are built for your context.",
    image: "/images/live-session.jpg",
  },
  {
    id: "feature-03",
    number: "03",
    title: "Hands on training",
    heading: "Skills that stick",
    description:
      "No theory-only sessions. We train your teams to use the tools and make decisions independently.",
    image: "/images/training-day.jpg",
  },
  {
    id: "feature-04",
    number: "04",
    title: "Measurable results",
    heading: "Results that matter",
    description:
      "We measure success by business impact, not deliverables. Every engagement includes clear KPIs.",
    image: "/images/zambia-sugar-team.jpg",
  },
];

export default function Benefits() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 992);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-50"
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-4xl md:text-5xl lg:text-[3.25rem] font-medium leading-[120%] font-heading">
            Why Organizations Choose Trendline
          </h2>
          <p className="md:text-md font-body font-normal">
            We combine deep Zambian market knowledge with global analytics
            standards. Our approach is hands on, results driven, and built for
            organizations that need data to work harder.
          </p>
        </div>
        <div className="flex w-full flex-col overflow-hidden border-b border-l border-r border-gray-400 lg:h-[90vh] lg:flex-row lg:border-r-0 lg:border-t font-heading rounded-lg">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-start overflow-hidden lg:h-[90vh] lg:flex-row lg:border-r lg:border-gray-200 transition-all duration-500 ease-in-out"
              style={{
                width: isMobile
                  ? "100%"
                  : activeIndex === index
                    ? "100%"
                    : "5rem",
              }}
            >
              <div
                className="relative flex h-16 w-full min-w-full cursor-pointer items-center justify-center border-t border-gray-400 py-8 md:h-20 lg:h-[90vh] lg:w-20 lg:min-w-20 lg:flex-col lg:justify-between lg:border-none font-medium bg-[#1e3a8a] hover:bg-blue-950 transition-colors text-white"
                onMouseEnter={() => setActiveIndex(index)}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <p className="absolute left-6 whitespace-nowrap text-xl font-medium md:left-10 md:text-2xl lg:static lg:left-0 lg:mb-auto">
                  {feature.number}
                </p>
                <h3 className="hidden [writing-mode:vertical-rl] lg:block lg:rotate-180 lg:text-2xl lg:font-medium">
                  {feature.title}
                </h3>
                <p className="text-xl font-medium md:text-2xl lg:hidden">
                  {feature.title}
                </p>
              </div>
              <div
                className="w-full overflow-hidden lg:h-full lg:w-auto lg:min-w-[200vw] lg:overflow-auto transition-all duration-500 ease-in-out bg-white"
                style={{
                  height: isMobile || activeIndex === index ? "auto" : "0px",
                }}
              >
                <div className="flex h-full flex-col px-6 pb-8 pt-4 md:px-10 md:pb-12 md:pt-12 lg:w-160 lg:px-12 lg:pb-16 lg:pt-16">
                  <h3 className="mb-5 text-3xl md:text-4xl font-medium leading-[1.2] md:mb-6 ">
                    {feature.heading}
                  </h3>
                  <p className="md:text-md">{feature.description}</p>
                  <div className="mt-8 h-80 md:mt-10 md:h-100 lg:mt-12 lg:h-120 relative overflow-hidden rounded-lg">
                    <Image
                      src={feature.image}
                      alt={`${feature.title} illustration`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
