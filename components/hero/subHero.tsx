interface SubHeroProps {
  title: string;
  description: string;
}

export default function SubHero({ title, description }: SubHeroProps) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#f0f8ff]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-2xl">
              <h1 className="mb-5 text-6xl font-semibold md:mb-6 leading-[120%] opacity-0 animate-fade-up">
                {title}
              </h1>
              <p className="md:text-md opacity-0 animate-fade-up animate-delay-300">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
