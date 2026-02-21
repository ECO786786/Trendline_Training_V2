import SubHero from "@/components/hero/SubHero";
import Image from "next/image";

function ZihrmSection() {
  return (
    <section className="py-24 px-6 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e3b8a]/10 text-[#1e3b8a] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="material-icons text-sm">verified</span>
            Official Accreditation Partner
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Zambia Institute of Human Resources Management (ZIHRM)
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Our strategic alliance with ZIHRM empowers HR professionals across
            the nation. Through this partnership, Trendline Training is
            accredited to offer Continuing Professional Development (CPD) units,
            ensuring that our training programs directly contribute to your
            professional licensure and growth.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Earn accredited CPD points for career advancement.",
              "Curriculum aligned with national HR standards.",
              "Exclusive networking opportunities with industry leaders.",
            ].map((item) => (
              <li key={item} className="flex items-start">
                <span className="material-icons text-[#1e3b8a] mr-3 mt-1">
                  check_circle
                </span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 lg:order-2">
          <Image
            src="/images/MoU-ZIHRM.jpg"
            alt="ZIHRM Partnership MoU"
            width={800}
            height={600}
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}


function StrategicPartnerSection() {
  return (
    <section className="py-24 px-6 bg-[#f6f6f8] border-b border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-1">
          <Image
            src="/images/zambian-institute-marketing-partnership.jpg"
            alt="Zambian Institute Marketing Partnership"
            width={800}
            height={600}
            className="w-full rounded-2xl object-cover"
          />
        </div>
        <div className="order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1e3b8a] text-[#1e3b8a] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="material-icons text-sm">school</span>
            Education Partner
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Official Partnership with the Zambian Institute of Marketing (ZIM)
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            We are proud to partner with the Zambian Institute of Marketing (ZIM) to deliver accredited marketing training and professional development programs that align with national standards and industry best practices.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Accredited marketing certification pathways.",
              "Programs aligned with ZIM professional standards.",
              "Continuous Professional Development (CPD) opportunities.",
              "Stronger professional recognition and career growth.",
            ].map((item) => (
              <li key={item} className="flex items-start">
                <span className="material-icons text-[#1e3b8a] mr-3 mt-1">
                  check_circle
                </span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const whyItems = [
  {
    icon: "psychology",
    title: "Expertise & Authority",
    desc: "Leverage our deep industry knowledge and recognized authority in data analytics and corporate training.",
  },
  {
    icon: "groups",
    title: "Expanded Reach",
    desc: "Tap into our growing alumni network of professionals and corporate decision-makers across the region.",
  },
  {
    icon: "trending_up",
    title: "Mutual Growth",
    desc: "Our partnership models are designed for shared success, offering revenue sharing and co-branding opportunities.",
  },
];

function WhyPartnerSection() {
  return (
    <section className="py-24 px-6 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            Why Partner With Us?
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We don&apos;t just train; we transform. Partnering with Trendline
            means joining a network dedicated to excellence and measurable
            impact.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyItems.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#f6f6f8] p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <span className="material-icons text-[#1e3b8a] text-3xl">
                  {icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{title}</h3>
              <p className="text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Partnerships() {
  return (
    <>
      <SubHero
        title="Strategic Partnerships"
        description="Collaborating with leading institutions to set the gold standard for executive training and data analytics in Zambia and beyond."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Partnerships", href: "/partnerships" },
        ]}
      />
      <ZihrmSection />
      <StrategicPartnerSection />
      <WhyPartnerSection />
    </>
  );
}
