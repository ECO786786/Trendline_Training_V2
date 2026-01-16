import Image from "next/image";

export default function Goals() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <Image
              src="/images/goals.png"
              className="w-full object-cover rounded-lg"
              alt="Goals illustration"
              width={800}
              height={600}
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold text-[#1e3a8a] md:mb-4">
              Our Goals
            </p>
            <h2 className="mb-5 text-4xl font-medium lg:tracking-[-1%] lg:leading-15 md:mb-6  lg:text-5xl">
              Our Commitment to Excellence
            </h2>
            <ul className="my-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <p>
                  Offer high-quality, hands-on training programs integrating
                  industry best practices and emerging technologies in data
                  analytics.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <p>
                  Empower students and professionals with latest tools and
                  techniques for real-world data analysis challenges.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <p>
                  Become a trusted partner for institutions seeking to optimize
                  their data departments with tailored solutions.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <p>
                  Foster a data-driven culture by promoting analytical thinking
                  and evidence-based decision making.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <p>
                  Stay at the forefront of technological advancements and
                  industry trends, continuously updating our curriculum and
                  consultancy approaches to meet evolving market needs.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
