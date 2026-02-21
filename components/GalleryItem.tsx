"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  caption: string;
  isVideo?: boolean;
  videoSrc?: string;
}

const galleryItems: GalleryItem[] = [
 
  {
    id: 1,
    src: "/images/liquid-team.jpg",
    alt: "Liquid Telecom Team",
    caption: "Liquid Telecom Team",
  },
  {
    id: 2,
    src: "/images/video-placeholder.png",
    alt: "Training Highlights Video",
    caption: "Training Highlights Video",
    isVideo: true,
    videoSrc: "/videos/training-highlights.mp4",
  },
  {
    id: 3,
    src: "/images/transformation-team.jpg",
    alt: "What We Stand For ...",
    caption: "What We Stand For ...",
  },
  {
    id: 4,
    src: "/images/presentation.jpg",
    alt: "Certificate Presentation Session",
    caption: "Certificate Presentation Session",
  },
  {
    id: 5,
    src: "/images/partnership-milestone.jpg",
    alt: "Partnership Milestone: ZIHRM & Trendline Training",
    caption: "Partnership Milestone: ZIHRM & Trendline Training",
  },
  {
    id: 6,
    src: "/images/zambia-sugar-trainee-award.jpg",
    alt: "Zambia Sugar Trainee Awarded",
    caption: "Zambia Sugar Trainee Awarded",
  },
  {
    id: 7,
    src: "/images/team-preparation.jpg",
    alt: "Team Preparation for Training",
    caption: "Team Preparation for Training",
  },
  {
    id: 8,
    src: "/images/power-bi-locations.jpg",
    alt: "Power BI Training Locations",
    caption: "Power BI Training Locations",
  },
  {
    id: 9,
    src: "/images/power-bi-walkthrough.png",
    alt: "Power BI Walkthrough Video",
    caption: "Power BI Walkthrough Video",
    isVideo: true,
    videoSrc: "/videos/power-bi-walkthrough.mp4",
  },
  {
    id: 10,
    src: "/images/power-bi-talk.png",
    alt: "Power BI discussion Video",
    caption: "Power BI discussion Video",
    isVideo: true,
    videoSrc: "/videos/power-bi-talk.mp4",
  },
  {
    id: 11,
    src: "/images/zambian-marketing-institute-training-partnership.jpg",
    alt: "Zambian Institute of Marketing partnership announcement",
    caption: "Official Partnership with the Zambian Institute of Marketing"
  }
];

export default function GalleryItem() {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => {
    setCurrentItem(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentItem(null);
  };

  return (
    <>
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
          >
            {galleryItems.map((item) => (
              <figure
                key={item.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
                role="listitem"
                onClick={() => openLightbox(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {item.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-40 transition">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" opacity="0.3" />
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )}
                <figcaption className="absolute bottom-0 left-0 right-0 bg-[#1e3a8a] bg-opacity-50 text-white text-sm p-2">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && currentItem && (
        <div
          className="fixed inset-0 bg-[#1e3a8a] bg-opacity-80 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white text-4xl hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            &times;
          </button>
          <div
            className="max-h-[90vh] max-w-[90vw] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {currentItem.isVideo && currentItem.videoSrc ? (
              <video
                src={currentItem.videoSrc}
                controls
                autoPlay
                className="max-h-[80vh] max-w-[80vw] object-contain"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="relative max-h-[80vh] max-w-[80vw] w-full h-full">
                <Image
                  src={currentItem.src}
                  alt={currentItem.alt}
                  width={1200}
                  height={800}
                  className="max-h-[80vh] max-w-[80vw] object-contain"
                  unoptimized
                />
              </div>
            )}
            <p className="text-white text-center mt-4 text-lg">
              {currentItem.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
