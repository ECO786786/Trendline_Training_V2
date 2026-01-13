import Link from "next/link";
import React from "react";

interface SubHeroProps {
  title: string;
  description: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function SubHero({
  title,
  description,
  breadcrumbs,
}: SubHeroProps) {
  return (
    <section className="bg-[#f0f8ff] px-[5%] pt-6 pb-16 md:pt-8 md:pb-24 lg:pt-10 lg:pb-28">
      <div className="container mx-auto">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 text-sm text-gray-600 w-full"
          >
            <ol className="flex items-center gap-2">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <li>
                    {index === breadcrumbs.length - 1 ? (
                      <span className="font-medium text-gray-900">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link href={crumb.href} className="hover:underline">
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                  {index < breadcrumbs.length - 1 && <li>&gt;</li>}
                </React.Fragment>
              ))}
            </ol>
          </nav>
        )}
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-2xl">
            <h1 className="mb-5 text-6xl font-medium leading-[120%] tracking-[-0.01em] opacity-0 animate-fade-up animate-delay-200">
              {title}
            </h1>
            <p className="md:text-md leading-[150%] opacity-0 animate-fade-up animate-delay-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
