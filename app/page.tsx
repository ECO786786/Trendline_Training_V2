import { Logo } from "../components/logo/logo";
import Hero from "../components/hero/hero";
import Layout351 from "../components/Layout351";
import Testimonials from "../components/testimonials";
import OpenCourse from "../components/openCourses";
import Banner from "../components/banner";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Logo />
      <Layout351 />
      <Testimonials />
      <OpenCourse />
      <Banner />
      <Footer />
    </>
  );
}
