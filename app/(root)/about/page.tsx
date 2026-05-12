import { Metadata } from "next";
import Team from "@/components/TeamCard";
import Origins from "@/components/Origins";
import AboutHero from "@/components/about/AboutHero";
import AboutWhyChoose from "@/components/about/AboutWhyChoose";

export const metadata: Metadata = {
  title: "About Us | Trendline Training & Consultancy Ltd",
  description:
    "Learn more about Trendline Training & Consultancy Ltd. We empower businesses with expert-led training and data-driven consultancy solutions that foster growth, innovation, and long-term success.",
  alternates: {
    canonical: "https://trendlinec.com/about",
  },
  authors: [{ name: "Trendline Training & Consultancy Ltd" }],
  keywords: [
    "corporate training company",
    "data consultancy firm",
    "business training experts",
    "data-driven solutions",
    "professional development provider",
    "organizational growth consultancy",
    "leadership training",
    "expert-led training",
    "capacity building services",
    "Trendline Training & Consultancy",
  ],
  openGraph: {
    title: "About Us | Trendline Training & Consultancy Ltd",
    description:
      "Discover our mission to empower businesses with expert-led training and consultancy, enabling organizations to leverage data for growth and innovation.",
    url: "https://trendlinec.com/about",
    siteName: "Trendline Training & Consultancy Ltd",
    images: [
      {
        url: "https://static.readdy.ai/image/7a2941f4f4bd206a071b69a2951de2dc/66ca896711b4be15fa15f7657f0c555e.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Trendline Training & Consultancy Ltd",
    description:
      "Empowering organizations through data-driven training and consultancy for growth, innovation, and long-term success.",
    images: [
      "https://static.readdy.ai/image/7a2941f4f4bd206a071b69a2951de2dc/66ca896711b4be15fa15f7657f0c555e.jpeg",
    ],
  },
};

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Trendline Training & Consultancy Ltd",
    url: "https://trendlinec.com",
    logo: "https://static.readdy.ai/image/7a2941f4f4bd206a071b69a2951de2dc/66ca896711b4be15fa15f7657f0c555e.jpeg",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ZM",
      addressLocality: "Lusaka",
    },
    description:
      "Zambia's premier data analytics and corporate training provider.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutHero />
      <AboutWhyChoose />
      <Origins />
      <Team />
    </>
  );
}
