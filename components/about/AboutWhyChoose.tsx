const differentiators = [
  {
    letter: "A",
    title: "Analyse",
    description:
      "We help professionals and institutions systematically examine data to uncover patterns, risks, and opportunities that inform sound decision-making.",
  },
  {
    letter: "C",
    title: "Convert",
    description:
      "We convert raw and fragmented data into clear, meaningful, and actionable insights that support operational and strategic goals.",
  },
  {
    letter: "T",
    title: "Teach",
    description:
      "We deliver accessible, practical, and industry-relevant training that equips learners with both theoretical understanding and hands-on analytical skills.",
  },
  {
    letter: "I",
    title: "Inform",
    description:
      "We enable evidence-based decisions by providing timely, accurate, and well-communicated insights to leaders, teams, and stakeholders.",
  },
  {
    letter: "O",
    title: "Optimise",
    description:
      "We support organisations in improving performance, efficiency, and outcomes by using data to refine processes, controls, and strategies.",
  },
  {
    letter: "N",
    title: "Navigate",
    description:
      "We guide professionals and institutions in navigating complexity, change, and uncertainty in an evolving data-driven landscape.",
  },
];

export default function AboutWhyChoose() {
  return (
    <section
      id="why-trendline"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-[0.9fr_1.1fr] md:gap-x-12 lg:gap-x-20">
          <div className="md:sticky md:top-24 self-start">
            <h2 className="mb-5 max-w-xl text-4xl font-medium tracking-[-0.02em] md:mb-6 lg:text-5xl lg:leading-tight">
              Our Core Values
            </h2>
            <p className="max-w-xl text-base leading-8 text-[#04030B] md:text-lg">
              Great leadership and true transformation begin with A.C.T.I.O.N.
              The values that inspire how we lead, serve, and make a difference.
            </p>
          </div>

          <div className="relative md:pb-[45vh]">
            <div className="space-y-6">
              {differentiators.map((item, index) => {
                const topOffset = 120 + index * 28;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] md:sticky"
                    style={{
                      top: `${topOffset}px`,
                      zIndex: index + 1,
                    }}
                  >
                    <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-[#1e3a8a] text-2xl font-semibold tracking-[-0.04em] text-white">
                      {item.letter}
                    </div>

                    <h3 className="mb-3 text-xl font-semibold tracking-[-0.02em] text-[#04030B] md:text-2xl">
                      {item.title}
                    </h3>

                    <p className="text-base leading-7 text-[#04030B]">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
