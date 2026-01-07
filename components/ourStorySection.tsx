"use client";

interface Stat {
  value: string;
  label: string;
}

export default function OurStorySection() {
  const stats: Stat[] = [
    {
      value: "500+",
      label: "Professionals Trained",
    },
    {
      value: "50+",
      label: "Corporate Partners",
    },
  ];

  return (
    <section className="w-full py-10 bg-white dark:bg-gray-900">
      <div className="flex justify-center">
        <div className="max-w-[1280px] w-full px-6 lg:px-40">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 flex flex-col gap-6">
              <div>
                <h2 className="text-[#0d141b] dark:text-white text-3xl font-bold leading-tight mb-4">
                  Our Story
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                  Founded in Lusaka,{" "}
                  <span className="text-[#1e3a8a] font-bold">
                    Trendline Training & Consultancy
                  </span>{" "}
                  bridged a critical gap in the market for premium, localized
                  data analytics training.
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mt-4">
                  What started as a small team of passionate data scientists has
                  grown into Zambia&apos;s leading consultancy, dedicated to
                  elevating data literacy across the region. We believe that
                  local challenges require local context combined with global
                  best practices.
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 mt-2">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col pl-4 border-l-4 border-[#1e3a8a]"
                  >
                    <span className="text-2xl font-bold text-[#0d141b] dark:text-white">
                      {stat.value}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full">
              <div className="relative w-full aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-lg bg-slate-200">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTzVfTCwY0V5qWDS0ON2AelD_kmmZhEqCkZxSEOpc3lv4PJL3pgOEfnAYAfD3Pva7gDj_H6POneJbxz6ST9hW22Pncig1s3osZ-YxgK2wC6T_B0iGa0BXvRMgE8gPOYfCwfokf1TUesug0H57GcVvTvqNJj-zeiWxVx6GeK_mzSwL_gs6zl9tqsCgabakbNowHU5_RWmvS8Ux-4ShAZ07bjsRKucGE2IRbFXdz0GgloD3yU3r-t7WqDrxjHDYMAv-Zj55g67_s7qo"
                  alt="Group of professionals in a training workshop discussing data on a whiteboard"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
