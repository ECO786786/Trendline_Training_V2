"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
      description: "Customized programs for your team's skill level.",
    },
    {
      id: "data-strategy",
      label: "Data Strategy Development",
      icon: "/icons/strategy.svg",
      heading: "From Power BI to advanced analytics",
      description: "Structured programs that build lasting capability.",
    },
    {
      id: "research-and-insights",
      label: "Research and Insights",
      icon: "/icons/data-sql.svg",
      heading: "Turning Data into Strategic Insight",
      description:
        "We deliver advanced analytics and research-driven insights across sectors including market research, healthcare, finance, and the public sector—empowering evidence-based decision-making.",
    },
    {
      id: "workshops-and-seminars",
      label: "Workshops and Seminars",
      icon: "/icons/help-desk.svg",
      heading: "Hands-On, Expert-Led Learning",
      description:
        "Interactive workshops and seminars covering the latest tools, trends, and best practices in data analytics and business intelligence.",
    },
    {
      id: "mentorship-program",
      label: "Mentorship Program",
      icon: "/icons/speech.svg",
      heading: "Personalized Career Guidance",
      description:
        "One-on-one mentorship designed to support individuals at every stage of their data analytics journey, from skill development to career progression.",
    },
    {
      id: "evaluation-and-assessment",
      label: "Evaluation and Assessment",
      icon: "/icons/assessment.svg",
      heading: "Measuring Impact and Driving Improvement",
      description:
        "Comprehensive evaluation and assessment services that measure the effectiveness of training initiatives and data strategies, ensuring measurable impact and return on investment.",
    },
  ];

  const handleTabInteraction = (index: number) => {
    setActiveTab(index);
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 font-medium md:mb-6 text-4xl md:text-5xl lg:text-[3.25rem] font-heading leading-[120%]">
            What We Deliver
          </h2>
          <p className="md:text-md text-[16px] text-[#04030B] font-regular">
            We offer comprehensive training and consultancy services designed to
            transform your organization&apos;s approach to data and strategy.
          </p>
        </div>

        <div className="relative grid auto-cols-fr grid-cols-1 border border-gray-400 md:grid-cols-[1fr_1.5fr] rounded-lg overflow-hidden">
          <div
            role="tablist"
            aria-orientation="vertical"
            className="relative grid h-full auto-cols-fr grid-cols-1 border-b border-gray-400 md:border-b-0 md:border-r"
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
                className={`inline-flex items-start text-left justify-start border-0 border-b border-gray-500 px-6 py-6 font-medium last-of-type:border-0 transition-all cursor-pointer focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:px-8 text-[20px] font-heading  ${
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
              <div className="flex h-full flex-col justify-center p-6 md:p-8 lg:p-16 bg-white">
                <div className="mb-5 md:mb-6 w-16 h-16 bg-linear-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center">
                  <Image
                    src={tab.icon}
                    className="w-6 h-6"
                    alt={`${tab.label} icon`}
                    width={24}
                    height={24}
                  />
                </div>
                <h2 className="mb-5 font-medium leading-[1.2] md:mb-6 text-3xl md:text-[2.75rem] font-heading">
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
