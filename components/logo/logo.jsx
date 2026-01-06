"use client";

export function Logo() {
  const logos = [
    { src: "/images/powerdrive-logo-1.png", alt: "Powerdrive logo" },
    {
      src: "/images/zambia-sugar-plc-logo-1.png",
      alt: "Zambia Sugar PLC logo",
    },
    { src: "/images/liquid-1.png", alt: "Liquid logo" },
    { src: "/images/dangote-cement-1.png", alt: "Dangote Cement logo" },
    { src: "/images/gatesvile.png", alt: "Gatesville logo" },
    { src: "/images/ZIHRM.png", alt: "ZIHRM logo" },
  ];

  return (
    <section className="pt-12 md:pt-16 lg:pt-20 max-w-[1280px] mx-auto overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>

      <div className="mb-8 px-[5%] text-center">
        <h2 className="text-base font-bold leading-[1.2] md:text-lg">
          Trusted by Zambia&apos;s largest corporations
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee">
          <div className="flex">
            {logos.map((logo, index) => (
              <img
                key={`logo-1-${index}`}
                src={logo.src}
                alt={logo.alt}
                className="mx-10 max-h-12 shrink-0 md:max-h-14"
              />
            ))}
          </div>

          <div className="flex" aria-hidden="true">
            {logos.map((logo, index) => (
              <img
                key={`logo-2-${index}`}
                src={logo.src}
                alt={logo.alt}
                className="mx-10 max-h-12 shrink-0 md:max-h-14"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
