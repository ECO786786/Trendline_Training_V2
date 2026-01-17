"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  rating: number;
  quote: string;
  name: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    quote:
      "The financial modelling and Power BI training was highly practical and interactive, significantly enhancing my ability to lead with data-driven decisions. It equipped our Finance team with relevant, real-world skills while also providing me with a valuable coaching and development opportunity that strengthened both knowledge and leadership.",
    name: "Financial Controller",
    company: "Dangote Zambia",
    avatar: "/icons/test.svg",
  },
  {
    id: 2,
    rating: 5,
    quote:
      "The instructor was knowledgeable and paced the training effectively, ensuring all participants could follow regardless of skill level. The sessions were well structured, engaging and boosted my confidence in Excel. I would highly recommend this program to colleagues aiming to strengthen their Excel proficiency and skills.",
    name: "Reporting, Planning & Forecasting Officer",
    company: "Liquid Intelligent Technologies",
    avatar: "/images/liquid-1.png",
  },
  {
    id: 3,
    rating: 5,
    quote:
      "The training session was very good overall. The trainer demonstrated strong knowledge of the subject matter and delivered the content in an engaging, easy-to-follow way. The key lessons were clearly explained, practical, and directly applicable, allowing me to start using what I learned immediately after the session.",
    name: "Results Delivery Office Analyst",
    company: "Zambia Sugar",
    avatar: "/images/zambia-sugar-plc-logo-1.png",
  },
  {
    id: 4,
    rating: 5,
    quote:
      "Trendline designed and managed our Fixed Asset Data Registry with professionalism, precision, and great attention to detail. Their thorough work streamlined our asset tracking processes and significantly enhanced our audit readiness, providing efficiency, accuracy, and confidence. We highly recommend their reliable services.",
    name: "Asset Manager",
    company: "Gatesville Investments Limited",
    avatar: "/images/gatesvile.png",
  },
  {
    id: 5,
    rating: 5,
    quote:
      "Trendline transformed how we view and manage our business operations. With accurate, real-time data at our fingertips, decision-making has become faster, more informed, and more effective. The team is better aligned with customer expectations, resulting in stronger performance, improved efficiency, and lasting value across the organization.",
    name: "Operations Manager",
    company: "Powerdrive Freight",
    avatar: "/images/powerdrive-logo-1.png",
  },
];

function useWindowWidth() {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

export default function Testimonials() {
  const width = useWindowWidth();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const cardsVisible = width >= 768 ? 2 : 1;
  const maxIndex = testimonials.length - cardsVisible;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) return 0;
        return prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) =>
    Array.from({ length: rating }, (_, i) => (
      <svg
        key={i}
        className="w-5 h-5 md:w-6 md:h-6 fill-current text-yellow-400"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));

  const cardWidthPercent = 100 / cardsVisible;

  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 font-medium text-4xl md:text-5xl lg:text-[3.25rem] font-heading leading-[120%]">
            What Our Clients Say
          </h2>
          <p className="text-[16px] text-[#04030B] font-regular">
            Hear from organizations that have transformed their approach to data
            and strategy with our training and consultancy services.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * cardWidthPercent}%)`,
              }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="shrink-0 px-2 md:px-4"
                  style={{ width: `${cardWidthPercent}%` }}
                >
                  <div className="flex flex-col items-start justify-between border border-gray-200 p-6 md:p-8 rounded-lg h-full">
                    <div className="mb-6 flex items-center">
                      {renderStars(t.rating)}
                    </div>
                    <blockquote className="mb-5 md:mb-6 text-base md:text-lg text-gray-700">
                      {t.quote}
                    </blockquote>
                    <div className="flex w-full flex-col items-start gap-4 md:w-auto md:flex-row md:items-center">
                      <Image
                        src={t.avatar}
                        alt={`${t.name} avatar`}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{t.name}</p>
                        <p className="text-gray-600">{t.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handlePrevious}
            className="flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 lg:-translate-x-6 w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 items-center justify-center rounded-full bg-white border-2 border-gray-300 hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-4 h-4 md:w-6 md:h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 lg:translate-x-6 w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 items-center justify-center rounded-full bg-white border-2 border-gray-300 hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-4 h-4 md:w-6 md:h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="mt-8 md:mt-12 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? "bg-black" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
