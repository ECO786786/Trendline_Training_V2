"use client";

import { useState, useEffect } from "react";

interface Tab {
  id: string;
  label: string;
  icon: string;
  heading: string;
  description: string;
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const tabs: Tab[] = [
    {
      id: "corporate-training-programs",
      label: "Corporate Training Programs",
      icon: "icons/training.svg",
      heading: "Build capability that lasts",
      description:
        "Customized training solutions designed to enhance your team's skills in data analysis, business intelligence, and strategic planning.",
    },
    {
      id: "data-analytics-consulting",
      label: "Data Analytics Consulting",
      icon: "icons/search.svg",
      heading: "Expert guidance for data strategy",
      description:
        "Expert guidance on implementing data-driven strategies, optimizing business processes, and leveraging analytics for competitive advantage.",
    },
    {
      id: "team-development",
      label: "Team Development",
      icon: "/icons/development.svg",
      heading: "Practical tools your team will use",
      description:
        "From Power BI to advanced analytics techniques, we equip your team with the skills they need to excel.",
    },
    {
      id: "business-intelligence",
      label: "Business Intelligence Solutions",
      icon: "/icons/business.svg",
      heading: "Capability that compounds over time",
      description:
        "Implementation of cutting edge BI tools and methodologies to transform raw data into actionable business insights.",
    },
    {
      id: "executive-coaching",
      label: "Executive Coaching",
      icon: "/icons/data.svg",
      heading: "Strategy and implementation support",
      description: "Customized programs for your team's skill level",
    },
    {
      id: "data-strategy",
      label: "Data Strategy Development",
      icon: "/icons/strategy.svg",
      heading: "From Power BI to advanced analytics",
      description: "Structured programs that build lasting capability",
    },
    {
      id: "reaserch-and-insights",
      label: "Research and Insights",
      icon: "/icons/strategy.svg",
      heading: "From Power BI to advanced analytics",
      description:
        "Providing insightsand analytics for market research, healthcare, finance, and more",
    },
    {
      id: "workshops-and-seminars",
      label: "Workshops and Seminars",
      icon: "/icons/strategy.svg",
      heading: "Interactive learning experiences",
      description:
        "Engaging sessions on the latest trends and technologies in data analytics and business intelligence.",
    },
    {
      id: "Mentorship Program",
      label: "Mentorship Program",
      icon: "/icons/strategy.svg",
      heading: "Personalized guidance and support",
      description:
        "One-on-one mentorship to help individuals navigate their data analytics career paths and achieve their professional goals.",
    },
    {
      id: "evluation-and-assessment",
      label: "Evaluation and Assessment",
      icon: "/icons/strategy.svg",
      heading: "Measuring impact and effectiveness",
      description:
        "Comprehensive evaluation services to assess the effectiveness of training programs and data strategies, ensuring continuous improvement and ROI.",
    },
  ];

  const handleTabInteraction = (index: number) => {
    setActiveTab(index);
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#f0f8ff]">
      <div className="max-w-[1280px] mx-auto">
        <div className="mx-auto mb-12 w-full max-w-[768px] text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4 text-[16px] font-body text-[#1e3a8a]">
            Services
          </p>
          <h2 className="mb-5 font-medium md:mb-6 text-[52px] font-heading leading-[120%]">
            What we deliver
          </h2>
          <p className="md:text-md text-[16px] text-[#04030B] font-regular">
            We offer comprehensive training and consultancy services designed to
            transform your organization&apos;s approach to data and strategy.
          </p>
        </div>

        <div className="relative grid auto-cols-fr grid-cols-1 border border-gray-200 md:grid-cols-[1fr_1.5fr] rounded-lg">
          <div
            role="tablist"
            aria-orientation="vertical"
            className="relative grid h-full auto-cols-fr grid-cols-1 border-b border-gray-200 md:border-b-0 md:border-r"
          >
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === index}
                aria-controls={`${tab.id}-content`}
                id={`${tab.id}-trigger`}
                onClick={() => handleTabInteraction(index)}
                onMouseEnter={() => !isMobile && handleTabInteraction(index)}
                className={`inline-flex items-start text-left justify-start border-0 border-b border-gray-200 px-6 py-6 font-medium last-of-type:border-0 transition-all cursor-pointer focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:px-8 text-[20px] font-heading ${
                  activeTab === index
                    ? "bg-[#1e3a8a] text-white"
                    : "bg-white text-gray-900 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              role="tabpanel"
              aria-labelledby={`${tab.id}-trigger`}
              id={`${tab.id}-content`}
              hidden={activeTab !== index}
              className={`focus-visible:outline-none ${
                activeTab === index ? "animate-fadeIn" : ""
              }`}
            >
              <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16">
                <div className="mb-5 md:mb-6">
                  <img
                    src={tab.icon}
                    className="size-12"
                    alt={`${tab.label} icon`}
                  />
                </div>
                <h2 className="mb-5 font-medium leading-[1.2] md:mb-6 text-[30px] font-heading">
                  {tab.heading}
                </h2>
                <p className="text-[16px]">{tab.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
}
