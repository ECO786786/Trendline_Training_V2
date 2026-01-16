import Image from "next/image";

export default function Logo() {
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
    <section className="pt-12 md:pt-16 lg:pt-20 max-w-7xl mx-auto overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>

      <div className="mb-8 px-[5%] text-center">
        <h2 className="text-base font-bold leading-[1.2] md:text-lg text-slate-800">
          Trusted by Zambia&apos;s largest corporations
        </h2>
      </div>
      <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-linear-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-linear-to-l after:from-white after:to-transparent">
        <div className="flex w-max animate-marquee">
          <div className="flex items-center">
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="mx-8 md:mx-12 shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 w-auto object-contain md:max-h-14"
                  width={110}
                  height={56}
                  priority={index < 4}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center" aria-hidden="true">
            {logos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="mx-8 md:mx-12 shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 w-auto object-contain md:max-h-14"
                  width={110}
                  height={56}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
