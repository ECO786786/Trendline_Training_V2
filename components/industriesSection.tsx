"use client";

interface Industry {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export default function IndustriesSection() {
  const industries: Industry[] = [
    {
      id: 1,
      icon: "ri-bank-fill",
      title: "Financial Services",
      description:
        "Banks, Insurance Companies, Investment Firms, FinTech Startups, and Asset Management",
    },
    {
      id: 2,
      icon: "ri-hospital-fill",
      title: "Healthcare",
      description:
        "Hospitals, Medical Clinics, Pharmaceutical Companies, Research Institutions, and Healthcare Tech",
    },
    {
      id: 3,
      icon: "ri-store-2-fill",
      title: "Retail & E-commerce",
      description:
        "Online Marketplaces, Retail Chains, Consumer Brands, Digital Commerce, and Shopping Centers",
    },
    {
      id: 4,
      icon: "ri-government-fill",
      title: "Government",
      description:
        "Public Sector Organizations, Government Agencies, Regulatory Bodies, and State-Owned Enterprises",
    },
    {
      id: 5,
      icon: "ri-building-2-fill",
      title: "Real Estate",
      description:
        "Property Development, Real Estate Management, Investment Trusts, and Property Tech Solutions",
    },
    {
      id: 6,
      icon: "ri-plant-fill",
      title: "Agriculture",
      description:
        "Smart Farming Operations, Agribusiness Enterprises, Agricultural Technology, and Food Production",
    },
    {
      id: 7,
      icon: "ri-truck-fill",
      title: "Logistics",
      description:
        "Transportation Networks, Supply Chain Management, Distribution Centers, and Logistics Tech",
    },
    {
      id: 8,
      icon: "ri-factory-fill",
      title: "Manufacturing",
      description:
        "Smart Manufacturing, Industrial Operations, Production Facilities, and Industry 4.0 Solutions",
    },
  ];

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <section className="bg-gray-50 px-[5%] py-16 md:py-24 lg:py-28">
        <div className="max-w-[1280px] mx-auto">
          <div className="mx-auto mb-12 w-full max-w-[768px] text-center md:mb-18 lg:mb-20">
            <h2 className="mb-5 font-medium md:mb-6 text-[52px] font-heading leading-[120%]">
              Industries We Serve
            </h2>
            <p className="md:text-md text-[18px] text-[#04030B] font-regular">
              Our specialized training and consultancy services cater to diverse
              industries, helping organizations harness the power of data
              analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900/20 to-blue-900/5 rounded-full flex items-center justify-center mb-6 shadow-sm transform hover:scale-105 transition-transform">
                  <i
                    className={`${industry.icon} text-[#1e3a8a] text-[32px]`}
                  ></i>
                </div>
                <h3 className="font-medium text-gray-900 mb-3 text-[20px] font-heading">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-[16px] leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
