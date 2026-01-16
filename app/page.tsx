import Hero from "../components/hero/hero";
import Benefits from "@/components/Benefits";
import OpenCourse from "../components/openCourses";
import Banner from "../components/Banner";
import Services from "../components/services";
import IndustriesSection from "../components/industriesSection";
import Testimonials from "../components/Testimonials";
import Events from "../components/Events";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Services />
      <IndustriesSection />
      <OpenCourse />
      {/* <Events /> */}
      <Testimonials />
      <Banner />
    </>
  );
}
