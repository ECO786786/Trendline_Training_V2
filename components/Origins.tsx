import Image from "next/image";

export default function Origins() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="mb-5 text-4xl font-medium lg:tracking-[-1%] lg:leading-15 md:mb-6  lg:text-5xl">
              The Co-Founders Message 
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              As Co-Founder of Trendline Training & Consultancy Ltd, I am proud
              to welcome you to a firm built on purpose, practicality, and
              impact. Our work is guided by the ACTION philosophy, which
              reflects our commitment to delivering solutions that move
              individuals and organizations forward. We exist to help you make
              sense of your data, strengthen your decision making, and translate
              knowledge into meaningful results.
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
