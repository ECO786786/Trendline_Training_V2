import Team from "@/components/teamCard";
import Mission from "@/components/Mission";
import SubHero from "@/components/hero/SubHero";
import Origins from "@/components/Origins";
import Vision from "@/components/Vision";
import Goals from "@/components/Goals";

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
      <Origins />
      <Mission />
      <Vision />
      <Goals />
      <Team />
    </>
  );
}
