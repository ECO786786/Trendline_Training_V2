import Image from "next/image";

export default function Mission() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <Image
              src="/images/mission.png"
              className="w-full object-cover rounded-lg"
              alt="Mission illustration"
              width={800}
              height={600}
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold text-[#1e3a8a] md:mb-4">
              Our Mission
            </p>
            <h2 className="mb-5 text-4xl font-medium lg:tracking-[-1%] lg:leading-15 md:mb-6  lg:text-5xl">
              Empowering Data Driven Leaders
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              To empower organizations and individuals in Zambia and globally
              with cutting-edge data analytics skills, fostering innovation and
              excellence in decision-making worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
