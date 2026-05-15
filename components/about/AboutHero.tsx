"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Breadcrumb from "../Breadcrumb";

const galleryImages = [
  {
    src: "/images/class-in-session.jpg",
    alt: "Trendline Training team facilitating a workshop",
    accent: "from-[#1e3a8a]/20 via-transparent to-transparent",
  },
  {
    src: "/images/new-workshop.jpg",
    alt: "Participants engaging during a training session",
    accent: "from-[#d97706]/20 via-transparent to-transparent",
  },
  {
    src: "/images/institute-of-banking-training.jpg",
    alt: "Live presentation during a corporate learning session",
    accent: "from-[#0f766e]/20 via-transparent to-transparent",
  },
  {
    src: "/images/transformation-team.jpg",
    alt: "Team collaboration during a strategic workshop",
    accent: "from-[#7c3aed]/20 via-transparent to-transparent",
  },
];

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_42%,#eef4ff_100%)] px-[5%] py-16 md:pb-24 lg:pb-28"
    >
      <Breadcrumb
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />
      <div className="absolute inset-x-0 top-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(30,58,138,0.16),transparent_48%),radial-gradient(circle_at_top_right,rgba(217,119,6,0.14),transparent_36%)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-0.04em] text-[#04030B] md:text-6xl lg:text-[4rem] lg:leading-[120%]">
              About Trendline Training & Consultancy
            </h1>
          </div>

          <div
            className={`transition-all delay-150 duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <p className="max-w-xl text-base leading-8 text-[#04030B] md:text-lg">
              We help professionals and organisations move from spreadsheet
              survival mode to practical, decision-ready analytics through
              hands-on instruction, real business examples, and coaching that
              matches the pace of modern teams.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/courses"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1e3a8a] px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-blue-950"
              >
                View our courses
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-medium text-[#04030B] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Talk to our team
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20 lg:mt-24">
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {galleryImages.map((image, index) => {
              return (
                <div
                  key={image.src}
                  className="group relative overflow-hidden rounded-lg border border-white/70 bg-white/80 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur transition-[transform,opacity,box-shadow] duration-500 ease-out hover:shadow-[0_24px_80px_rgba(15,23,42,0.14)]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: `translate3d(0, ${isVisible ? 0 : 72}px, 0)`,
                    transitionDelay: `${index * 120}ms`,
                  }}
                >
                  <div className="relative aspect-[0.82] overflow-hidden">
                    <div
                      className={`absolute inset-0 z-0 bg-linear-to-t ${image.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={index < 2}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className={`mx-auto mt-10 max-w-3xl text-center transition-all duration-700 ease-out md:mt-14 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-base leading-8 text-[#04030B] md:text-lg">
              From Lusaka boardrooms to specialist classroom cohorts, our work
              blends strategy, analytics, and delivery so teams leave with more
              than inspiration. They leave with repeatable capability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
