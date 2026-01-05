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
    <section className="py-12 md:py-16 lg:py-20 max-w-[1280px] mx-auto bg-[#E8EBF3] rounded-lg overflow-hidden">
      <div className="mb-8 px-[5%] text-center">
        <h1 className="text-base font-bold leading-[1.2] md:text-md">
          Trusted by Zambia&apos;s largest corporations
        </h1>
      </div>

      <div className="relative overflow-hidden">
        <style>{`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>

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

          <div className="flex">
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

      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
