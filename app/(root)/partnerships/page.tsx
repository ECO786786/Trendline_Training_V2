import SubHero from "@/components/hero/SubHero";
import ContentCard from "@/components/ContentCard";

const inofmationCardData = {
  title: "Professional bodies driving analytics adoption",
  description:
    "We partner with leading professional institutions across Zambia to embed data literacy into their membership programs.",
  features: [
    "ZIHRM official training partner",
    "HR analytics for member organizations",
    "Certified professional development programs",
  ],
  imageUrl: "/images/MoU-ZIHRM.jpg",
};

export default function Partnerships() {
  return (
    <>
      <SubHero
        title="Our Trusted Partners"
        description="Working alongside leaders who share our commitment to data driven decision making and business excellence."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Partnerships", href: "/partnerships" },
        ]}
      />
      <ContentCard
        title={inofmationCardData.title}
        description={inofmationCardData.description}
        features={inofmationCardData.features}
        image={{
          src: inofmationCardData.imageUrl,
          alt: "ZIHRM Partnership MoU",
          position: "right",
        }}
        hasBackground={true}
      />
    </>
  );
}
