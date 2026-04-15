import Image from "next/image";

export default function Origins() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#1e3a8a] md:mb-4">
              Co-Founder
            </p>
            <h2 className="mb-5 text-4xl font-medium lg:tracking-[-1%] lg:leading-15 md:mb-6  lg:text-5xl">
              How Trendline Became Zambia’s Trusted Data Analytics Partner
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              Trendline Training & Consultancy Ltd exists to translate knowledge
              into measurable impact. We differentiate ourselves by integrating
              practical application, business context, and analytical thinking
              to develop professionals who don’t just understand concepts—but
              can apply them to solve real problems and drive results. Our focus
              is on building confidence, sharpening decision-making, and
              enabling both individuals and organizations to operate with
              clarity, precision, and purpose in a data-driven world.
            </p>
          </div>
          <div>
            <Image
              src="/images/co-founder.png"
              className="w-full object-cover rounded-lg"
              alt="Team collaborating in an office setting"
              width={800}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
