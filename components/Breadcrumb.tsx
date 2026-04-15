import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
  breadcrumbs: { label: string; href: string }[];
}

export default function Breadcrumb({ breadcrumbs }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 text-sm text-gray-600 w-full px-[5%]"
    >
      <ol className="flex items-center gap-2">
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <li>
              {index === breadcrumbs.length - 1 ? (
                <span className="font-medium text-gray-900">{crumb.label}</span>
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
  );
}
