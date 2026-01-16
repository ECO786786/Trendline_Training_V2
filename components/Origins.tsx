import Image from "next/image";

export default function Origins() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#1e3a8a] md:mb-4">Origins</p>
            <h2 className="mb-5 text-4xl font-medium lg:tracking-[-1%] lg:leading-15 md:mb-6  lg:text-5xl">
              How Trendline became Zambia&apos;s data analytics partner
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              We started in Lusaka with a simple observation: Zambian
              organizations had the ambition but lacked the practical tools and
              training to compete on data. What began as a tight group of data
              professionals determined to close that gap has grown into
              something larger a consultancy trusted by the region&apos;s most
              demanding enterprises. We combine local knowledge with global
              standards because we understand that data problems in Zambia
              require solutions built here.
            </p>
          </div>
          <div>
            <Image
              src="/images/origins.png"
              className="w-full object-cover rounded-lg"
              alt="Team collaborating in an office setting"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
