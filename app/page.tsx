import Hero from "../components/hero/hero";
import Benefits from "../components/benefits";
import OpenCourse from "../components/openCourses";
import Banner from "../components/Banner";
import Services from "../components/services";
import IndustriesSection from "../components/industriesSection";
import { Testimonial27 } from "../components/testimonial27";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Services />
      <IndustriesSection />
      <Testimonial27 />
      <OpenCourse />
      <Banner />
    </>
  );
}
