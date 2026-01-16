import { JSX } from "react";
import { Building2, Sliders, TrendingUp } from "lucide-react";

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
      icon: <Building2 className="w-8 h-8 text-[#1e3a8a]" strokeWidth={1.5} />,
      title: "Enterprise Experience",
      description:
        "Proven enterprise experience tackling complex corporate data challenges.",
    },
    {
      id: 2,
      icon: <Sliders className="w-8 h-8 text-[#1e3a8a]" strokeWidth={1.5} />,
      title: "Customized Approach",
      description:
        "Every solution is tailored to your specific industry, team size, and business objectives.",
    },
    {
      id: 3,
      icon: <TrendingUp className="w-8 h-8 text-[#1e3a8a]" strokeWidth={1.5} />,
      title: "Proven Results",
      description:
        "95% client satisfaction rate with measurable ROI improvements in data efficiency.",
    },
  ];

  const displayFeatures = features || defaultFeatures;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-5 text-3xl font-medium lg:tracking-[-1%] lg:leading-15 md:mb-6 md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="text-black max-w-3xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-black">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
