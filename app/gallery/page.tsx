import GalleryItem from "@/components/GalleryItem";
import SubHero from "@/components/hero/SubHero";
import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <SubHero
        title="Our Gallery"
        description="Explore our work, team, and achievements through this visual journey showcasing our data consulting expertise and successful project implementations."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" },
        ]}
      />
      <GalleryItem />
      <Image
        src="/images/powerdrive-logo-1.png"
        alt="PowerDrive Logo"
        width={150}
        height={50}
      />
    </>
  );
}
