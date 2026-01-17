import Hero from "@/components/hero/Hero";
import Benefits from "@/components/Benefits";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import IndustriesSection from "@/components/IndustriesSection";
import Testimonials from "../components/Testimonials";
import Events from "../components/Events";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Services />
      <IndustriesSection />
      <Events />
      <Testimonials />
      <Banner />
    </>
  );
}
