import GalleryItem from "@/components/galleryItem";
import SubHero from "@/components/hero/subHero";

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
