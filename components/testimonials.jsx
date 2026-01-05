"use client";

import { useState } from "react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "The financial modelling and Power BI training was highly practical and interactive, significantly enhancing my ability to lead with data-driven decisions. It equipped our Finance team with relevant, real-world skills while also providing me with a valuable coaching and development opportunity that strengthened both knowledge and leadership.",
      name: "Financial Controller",
      role: "Dangote",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
    {
      quote:
        "The instructor was knowledgeable and paced the training effectively, ensuring all participants could follow regardless of skill level. The sessions were well structured, engaging and boosted my confidence in Excel. I would highly recommend this program to colleagues aiming to strengthen their Excel proficiency and skills.",
      name: "Reporting, Planning & Forecasting Officer",
      role: "Liquid Intelligent Technologies",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
    {
      quote:
        "The training session was very good overall. The trainer demonstrated strong knowledge of the subject matter and delivered the content in an engaging, easy-to-follow way. The key lessons were clearly explained, practical, and directly applicable, allowing me to start using what I learned immediately after the session.",
      name: "Results Delivery Office Analyst",
      role: "Zambia Sugar",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
    {
      quote:
        "Trendline designed and managed our Fixed Asset Data Registry with professionalism, precision, and great attention to detail. Their thorough work streamlined our asset tracking processes and significantly enhanced our audit readiness, providing efficiency, accuracy, and confidence. We highly recommend their reliable services.",
      name: "Asset Manager",
      role: "Gatesville Investments Limited",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
    {
      quote:
        "Trendline transformed how we view and manage our business operations. With accurate, real-time data at our fingertips, decision-making has become faster, more informed, and more effective. The team is better aligned with customer expectations, resulting in stronger performance, improved efficiency, and lasting value across the organization.",
      name: "Operations Manager",
      role: "Powerdrive Freight",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === testimonials.length - 1) {
        return prev; // Stay at last slide
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        return prev; // Stay at first slide
      }
      return prev - 1;
    });
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="w-full max-w-md lg:mb-24">
            <h2 className="mb-5 text-5xl font-medium md:mb-6 text-[52px] leading-[120%] font-heading">
              What Our Clients Say
            </h2>
            <p className="md:text-[18px] font-body font-normal">
              Hear from organizations that have transformed their approach to
              data and strategy with our training and consultancy services.
            </p>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentSlide * 100}% - ${
                  currentSlide * 24
                }px))`,
                gap: "24px",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8 rounded-lg">
                    <div className="mb-5 flex md:mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="size-6"
                          fill="#FCD34D"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="md:text-md">
                      {testimonial.quote}
                    </blockquote>
                    <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                      <div>
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.name} avatar`}
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p>{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center justify-between">
              <div className="mt-5 flex w-full items-start justify-start">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`mx-[3px] inline-block size-2 rounded-full ${
                      currentSlide === index ? "bg-black" : "bg-neutral-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-end justify-end gap-2 md:gap-4">
                <button
                  onClick={prevSlide}
                  className="flex size-12 rounded-full items-center justify-center border border-border-primary hover:bg-gray-100 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg
                    className="size-6"
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
                  onClick={nextSlide}
                  className="flex size-12 rounded-full items-center justify-center border border-border-primary hover:bg-gray-100 transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg
                    className="size-6"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
