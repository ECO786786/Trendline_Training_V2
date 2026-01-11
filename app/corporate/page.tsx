import SubHero from "@/components/hero/subHero";
import ContentCard from "@/components/contentCard";
import { corporateSolutions } from "@/data/corporateSolutions";
import Banner from "@/components/banner";
import WhyChooseUs from "@/components/WhyChooseUs";

export function CorporateSolutions() {
  return (
    <>
      {corporateSolutions.map((item, index) => (
        <ContentCard key={index} {...item} />
      ))}
    </>
  );
}

export default function Corporate() {
  return (
    <>
      <SubHero
        title="Corporate Solutions"
        description="Comprehensive data training and analytics solutions designed specifically for corporate environments. Transform your organization's data capabilities with our proven methodologies."
      />
      <CorporateSolutions />
      <WhyChooseUs />
      <Banner />
    </>
  );
}
