"use client";

import { useState } from "react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
  avatar: string;
  rating: number;
}

export default function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "Within three months of implementing Trendline's training, our team cut reporting time by 60% and caught a supply chain issue that saved us millions. They didn't just teach us tools—they showed us how to think like analysts.",
      name: "Chipo Mwale",
      position: "CFO, Dangote Zambia",
      avatar: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "We brought in Trendline to build our first real dashboard system. What impressed me most was how they understood our business first, then built the solution around it. That's not typical in this industry.",
      name: "James Banda",
      position: "Operations Manager, Liquid Intelligent Technologies",
      avatar: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Six months in, our reporting time dropped by half and our decisions got faster.",
      name: "Mwila Kaponda",
      position: "Finance Director, Zambia Sugar",
      avatar: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      rating: 5,
    },
    {
      id: 4,
      quote:
        "They didn't sell us software. They taught us to think differently about data.",
      name: "David Nkomo",
      position: "IT Director, PowerDrive Freight",
      avatar: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      rating: 5,
    },
    {
      id: 5,
      quote:
        "The difference between having data and using data is training. They made that difference clear.",
      name: "Grace Simunji",
      position: "Data Team Lead, Regional Bank",
      avatar: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      rating: 5,
    },
  ];

  const itemsPerSlide = 2;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getVisibleTestimonials = () => {
    const start = currentSlide * itemsPerSlide;
    return testimonials.slice(start, start + itemsPerSlide);
  };

  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="mb-5 font-medium text-[52px] font-heading leading-[120%]">
            What Our Clients Say
          </h2>
          <p className="text-[18px] text-[#04030B] font-regular max-w-[768px]">
            Hear from organizations that have transformed their approach to data
            and strategy with our training and consultancy services.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {getVisibleTestimonials().map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white border border-gray-200 p-8 rounded-lg"
                >
                  <div className="mb-6 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="size-5 text-gray-900"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-[16px] mb-8 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="size-6 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-[16px]">
                        {testimonial.name}
                      </p>
                      <p className="text-[14px] text-gray-600">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? "bg-gray-900" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="inline-flex items-center justify-center rounded-full border border-gray-900 bg-white text-gray-900 transition-colors hover:bg-gray-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 w-12 h-12"
                aria-label="Previous slide"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="inline-flex items-center justify-center rounded-full border border-gray-900 bg-white text-gray-900 transition-colors hover:bg-gray-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 w-12 h-12"
                aria-label="Next slide"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
