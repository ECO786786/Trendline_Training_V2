import Image from "next/image";

export default function Vision() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#1e3a8a] md:mb-4">
              Our Vision
            </p>
            <h2 className="mb-5 text-4xl font-medium lg:tracking-[-1%] lg:leading-15 md:mb-6  lg:text-5xl">
              Building Capacity for a Data Driven Future
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              To provide comprehensive and accessible training in data analysis
              and equipping professionals, learners and institutions with
              practical skills and theoretical knowledge to thrive in the
              evolving data-driven landscape. We aim to deliver top-tier
              consultancy services to institutions, enhancing their data-driven
              and strategic insights.
            </p>
          </div>
          <div>
            <Image
              src="/images/vision.png"
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
