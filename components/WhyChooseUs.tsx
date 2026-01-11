import { JSX } from "react";

interface FeatureCard {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  title?: string;
  subtitle?: string;
  features?: FeatureCard[];
}

export default function WhyChooseUs({
  title = "Why Choose Our Corporate Solutions?",
  subtitle = "We understand the unique challenges faced by corporate teams and deliver solutions that drive real business impact.",
  features,
}: WhyChooseUsProps) {
  const defaultFeatures: FeatureCard[] = [
    {
      id: 1,
      icon: (
        <svg
          className="w-8 h-8 text-[#1e3a8a]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8.5 6a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-7zm0-2A2.5 2.5 0 0 0 6 6.5v9A2.5 2.5 0 0 0 8.5 18h7a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 15.5 4h-7z" />
          <path d="M2 8a1 1 0 0 1 1-1h1v10H3a1 1 0 0 1-1-1V8zm19-1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1V7h1z" />
        </svg>
      ),
      title: "Enterprise Experience",
      description:
        "Proven enterprise experience tackling complex corporate data challenges.",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-8 h-8 text-[#1e3a8a]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path
            fillRule="evenodd"
            d="M5.216 14.002a2.146 2.146 0 0 0-.233.869c0 .772.502 1.216 1.15 1.497.56.243 1.274.367 2.053.367h6.02c.779 0 1.493-.124 2.053-.367.648-.281 1.15-.725 1.15-1.497a2.146 2.146 0 0 0-.233-.869A5.984 5.984 0 0 1 15.5 12c-.595 0-1.167.113-1.694.317-.61-.244-1.345-.387-2.118-.387-.773 0-1.508.143-2.118.387A5.984 5.984 0 0 1 7.876 12c-.823 0-1.608.196-2.296.544-.162.082-.32.177-.464.286z"
          />
          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm15 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-3 6c-.596 0-1.168.113-1.695.317C15.415 14.564 16 15.195 16 16c0 .537-.234.965-.591 1.291.35.127.74.214 1.157.257.779.08 1.619-.016 2.337-.253.738-.243 1.347-.625 1.647-1.234.2-.405.2-.854 0-1.259-.3-.61-.909-.991-1.647-1.234-.718-.237-1.558-.313-2.337-.253-.417.043-.808.13-1.157.257.357.326.591.754.591 1.291 0-.805-.585-1.436-1.195-1.683z" />
        </svg>
      ),
      title: "Customized Approach",
      description:
        "Every solution is tailored to your specific industry, team size, and business objectives.",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-8 h-8 text-[#1e3a8a]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          <path d="M3.5 11.5a3 3 0 1 1 3.163 3 3 3 0 0 1-3.163-3zm9.058.356A4.978 4.978 0 0 0 13 10c0-.892-.24-1.73-.662-2.457l1.115-1.114c.65.88 1.047 1.95 1.047 3.07 0 .896-.24 1.736-.663 2.457l-1.279-1.1z" />
        </svg>
      ),
      title: "Proven Results",
      description:
        "95% client satisfaction rate with measurable ROI improvements in data efficiency and decision-making.",
    },
  ];

  const displayFeatures = features || defaultFeatures;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
