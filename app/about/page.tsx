import Index from "@/components/teamCard";
import OurStorySection from "@/components/ourStorySection";
import SubHero from "@/components/hero/subHero";
import MissionVisionGoals from "@/components/sectionItem";

export default function About() {
  return (
    <>
      <SubHero
        title="About Trendline Training & Consultancy"
        description="Trendline is Zambia's premier data analytics solution provider, helping businesses turn raw data into actionable insights for sustainable growth."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />
      <OurStorySection />
      <MissionVisionGoals />
      <Index />
    </>
  );
}
