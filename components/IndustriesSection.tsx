"use client";

import React from "react";

interface IndustryDetail {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  items: string[];
}

export default function IndustriesSection() {
  const [openId, setOpenId] = React.useState<number | null>(null);

  const industries: IndustryDetail[] = [
    {
      id: 1,
      icon: "account_balance",
      title: "Financial Services",
      subtitle: "Advanced modeling for risk, fraud, and credit analysis.",
      items: [
        "Commercial Banks",
        "Insurance Companies",
        "Microfinance",
        "Fintech Startups",
      ],
    },
    {
      id: 2,
      icon: "monitor_heart",
      title: "Healthcare",
      subtitle: "Data-driven patient care and resource management.",
      items: [
        "Hospitals & Clinics",
        "Pharmaceuticals",
        "Public Health NGOs",
        "Medical Research",
      ],
    },
    {
      id: 3,
      icon: "shopping_cart",
      title: "Retail & E-commerce",
      subtitle: "Customer segmentation and inventory optimization.",
      items: [
        "Supermarkets",
        "Online Marketplaces",
        "FMCG Distributors",
        "Fashion Retail",
      ],
    },
    {
      id: 4,
      icon: "public",
      title: "Government",
      subtitle: "Enhancing public sector service delivery and policy analysis.",
      items: [
        "Ministries",
        "Revenue Authorities",
        "Public Agencies",
        "Local Councils",
      ],
    },
    {
      id: 5,
      icon: "apartment",
      title: "Real Estate",
      subtitle: "Property valuation models and investment analysis.",
      items: [
        "Property Developers",
        "Management Agencies",
        "REITs",
        "Valuation Firms",
      ],
    },
    {
      id: 6,
      icon: "agriculture",
      title: "Agriculture",
      subtitle: "Yield forecasting and supply chain optimization.",
      items: [
        "Agribusinesses",
        "Farming Co-ops",
        "Food Processing",
        "Input Suppliers",
      ],
    },
    {
      id: 7,
      icon: "local_shipping",
      title: "Logistics",
      subtitle: "Fleet management and route efficiency analysis.",
      items: [
        "Transport Companies",
        "Warehousing",
        "Freight Forwarders",
        "Delivery Services",
      ],
    },
    {
      id: 8,
      icon: "precision_manufacturing",
      title: "Manufacturing",
      subtitle: "Production optimization and predictive maintenance.",
      items: ["Factories", "Assembly Plants", "Industrial Goods", "Textiles"],
    },
  ];

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        rel="stylesheet"
      />
      <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mx-auto mb-12 w-full max-w-[768px] text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold md:mb-4 text-[16px] font-body text-[#1e3a8a]">
              Industries
            </p>
            <h2 className="mb-5 font-medium text-[52px] font-heading leading-[120%]">
              Sectors We Serve
            </h2>
            <p className="text-[16px] text-[#04030B] font-regular">
              Our specialized training and consultancy services cater to diverse
              industries, helping organizations harness the power of data
              analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:items-start">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="bg-[#1e3a8a] text-white rounded-xl border border-gray-500 overflow-hidden transition-all duration-300 self-start group"
              >
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleAccordion(industry.id);
                  }}
                  className="flex cursor-pointer items-center justify-between p-5 text-white font-medium text-[20px] font-heading select-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded  flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-xl">
                        {industry.icon}
                      </span>
                    </div>
                    <span>{industry.title}</span>
                  </div>
                  <span
                    className={`material-symbols-outlined transition-transform duration-300 ${
                      openId === industry.id ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 bg-white ${
                    openId === industry.id ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-5 pb-5 pt-2 text-[#04030B] text-[14px] leading-relaxed border-t border-gray-200">
                    <p className="mb-3">{industry.subtitle}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {industry.items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a]"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
