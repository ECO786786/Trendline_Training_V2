"use client";

interface DirectionItem {
  id: string;
  icon: string;
  title: string;
  description?: string;
  goals?: string[];
}

export default function OurDirectionSection() {
  const directions: DirectionItem[] = [
    {
      id: "mission",
      icon: "language",
      title: "Our Mission",
      description:
        "To empower organizations and individuals in Zambia and globally with cutting-edge data analytics skills, fostering innovation and excellence in decision-making worldwide.",
    },
    {
      id: "vision",
      icon: "lightbulb",
      title: "Our Vision",
      description:
        "To provide comprehensive and accessible training in data analysis and equipping professionals, learners and institutions with practical skills and theoretical knowledge to thrive in the evolving data-driven landscape.",
    },
    {
      id: "goals",
      icon: "track_changes",
      title: "Our Goals",
      goals: [
        "Offer high-quality, hands-on training programs integrating industry best practices.",
        "Empower students and professionals with latest tools for real-world challenges.",
        "Become a trusted partner for institutions seeking to optimize their data departments.",
        "Foster a data-driven culture by promoting analytical thinking.",
      ],
    },
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        rel="stylesheet"
      />
      <section className="w-full py-20 bg-white dark:bg-[#15202b]">
        <div className="flex justify-center">
          <div className="max-w-[1280px] w-full px-6 lg:px-20">
            <div className="flex flex-col-reverse lg:flex-row items-start gap-12 lg:gap-20">
              {/* Left Content */}
              <div className="flex-1 flex flex-col gap-12">
                <div className="mb-4">
                  <h2 className="text-[#0d141b] dark:text-white text-3xl md:text-4xl font-black tracking-tight mb-3">
                    Our Direction
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 max-w-lg">
                    Driving excellence through clear purpose and defined
                    objectives.
                  </p>
                </div>

                {/* Direction Items */}
                {directions.map((item) => (
                  <div key={item.id} className="group flex gap-6">
                    <div className="shrink-0 pt-1">
                      <div className="size-14 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-[#0d141b] dark:text-white group-hover:text-[#1e3a8a] transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-3xl">
                          {item.icon}
                        </span>
                      </div>
                    </div>

                    {item.goals ? (
                      <div className="flex flex-col gap-4">
                        <h3 className="text-[#0d141b] dark:text-white text-2xl font-bold">
                          {item.title}
                        </h3>
                        <ul className="flex flex-col gap-3 text-slate-600 dark:text-slate-300 leading-relaxed list-inside">
                          {item.goals.map((goal, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="mt-2 size-1.5 rounded-full bg-[#1e3a8a] shrink-0"></span>
                              <span>{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#0d141b] dark:text-white text-2xl font-bold">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-[45%] shrink-0">
                <div className="sticky top-24">
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-slate-900/10 z-10"></div>
                    <img
                      alt="Professional presenting data analytics on a screen"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbXFIa4dqqoAzOGEO6HkEnshcxvXIfW9PNgUsd4Khtdt2BfBK8QQxnwOjnCCrMqw-odZeye_fVbX9_e-JnsDT5B6bX6SmxY9SHrjWWwDUP5RhK0hmgygxn8h0912MriO4K0nThOUMXFWLsUMFPk-MBniAmgWRXOF_TqMDHP_J45i9FZgtYZLsPrW0ACWRlTeX8RfjmEPkEOB0gErWxfwiRwcH2iE1z4v0n4SACOQSck65KA4JcL3yGzGdM72iVby2oFlGwQ5HpsMU"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
