import GalleryItem from "@/components/GalleryItem";
import SubHero from "@/components/hero/SubHero";

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
    </>
  );
}
