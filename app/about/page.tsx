import Index from "@/components/teamCard";
import OurStorySection from "@/components/ourStorySection";

export default function About() {
  return (
    <>
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <div className="mb-12 text-center md:mb-18 lg:mb-20">
              <div className="w-full max-w-2xl">
                <h1 className="mb-5 text-6xl font-semibold md:mb-6 leading-[120%] opacity-0 animate-fade-up">
                  About Trendline Training & Consultancy
                </h1>
                <p className="md:text-md opacity-0 animate-fade-up animate-delay-300">
                  We are an emerging data analytics training and consultancy hub
                  based in Zambia, committed to equipping individuals and
                  organizations with the skills and tools needed to excel in
                  today&apos;s data-driven world. By empowering institutions,
                  professionals and students we aim to be at the forefront of
                  shaping the future of analytics in Zambia and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurStorySection />

      <Index />
    </>
  );
}
