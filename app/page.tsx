import Hero from "../components/hero/hero";
import Layout351 from "../components/Layout351";
import Testimonials from "../components/testimonials";
import OpenCourse from "../components/openCourses";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Services from "../components/services";
import IndustriesSection from "../components/industriesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Layout351 />
      <Services />
      <IndustriesSection />
      <Testimonials />
      <OpenCourse />
      <Banner />
      <Footer />
    </>
  );
}
