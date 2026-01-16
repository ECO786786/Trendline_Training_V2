import Image from "next/image";
import { ContentCardModel } from "@/types/ContentCard";

export default function ContentCard({
  tag,
  title,
  description,
  features,
  image,
  primaryCTA,
  secondaryCTA,
  hasBackground = false,
}: ContentCardModel) {
  const imageOnLeft = image?.position === "left";

  return (
    <section
      className={`px-[5%] py-16 md:py-24 lg:py-28 ${
        hasBackground ? "bg-gray-50" : ""
      }`}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div
            className={
              imageOnLeft ? "order-2 md:order-1" : "order-2 md:order-2"
            }
          >
            {image?.src && (
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full rounded-lg object-cover"
              />
            )}
          </div>

          <div
            className={
              imageOnLeft ? "order-1 md:order-2" : "order-1 md:order-1"
            }
          >
            {tag && (
              <p className="mb-3 font-semibold text-[#1e3a8a] md:mb-4">{tag}</p>
            )}

            <h2 className="mb-5 text-4xl font-medium lg:tracking-[-1%] lg:leading-15 md:mb-6  lg:text-5xl">
              {title}
            </h2>

            <p className="mb-8 text-black md:text-md">{description}</p>

            {features && features.length > 0 && (
              <div className="mb-6">
                <h4 className="mb-3 font-semibold text-black">Key Benefits:</h4>
                <ul className="list-inside list-disc text-black">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {(primaryCTA || secondaryCTA) && (
              <div className="mt-6 flex gap-4 md:mt-8">
                {primaryCTA &&
                  (primaryCTA.onClick ? (
                    <button
                      onClick={primaryCTA.onClick}
                      className="inline-flex items-center justify-center rounded-full bg-[#1e3a8a] px-6 py-2 text-[14px] lg:text-base font-medium text-white shadow hover:bg-blue-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 cursor-pointer"
                    >
                      {primaryCTA.text}
                    </button>
                  ) : (
                    <a
                      href={primaryCTA.href}
                      className="inline-flex items-center justify-center rounded-full bg-[#1e3a8a] px-6 py-2 text-[14px] lg:text-base font-medium text-white shadow hover:bg-blue-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
                    >
                      {primaryCTA.text}
                    </a>
                  ))}

                {secondaryCTA && (
                  <a
                    href={secondaryCTA.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#1e3a8a] px-6 py-2 text-[14px] lg:text-base font-medium text-white shadow hover:bg-blue-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
                  >
                    {secondaryCTA.text}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
