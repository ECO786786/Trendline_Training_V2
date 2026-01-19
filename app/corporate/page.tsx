"use client";

import { useState } from "react";
import SubHero from "@/components/hero/SubHero";
import ContentCard from "@/components/ContentCard";
import { corporateSolutions } from "@/data/corporateSolutions";
import Banner from "@/components/Banner";
import WhyChooseUs from "@/components/WhyChooseUs";
import InquiryModal from "@/components/InquiryModal";

export default function Corporate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState({
    name: "",
    price: "",
  });

  const openInquiryModal = (serviceName: string, servicePrice?: string) => {
    setSelectedService({ name: serviceName, price: servicePrice || "" });
    setIsModalOpen(true);
  };

  return (
    <>
      <SubHero
        title="Corporate Solutions"
        description="Comprehensive data training and analytics solutions designed specifically for corporate environments. Transform your organization's data capabilities with our proven methodologies."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Corporate", href: "/corporate" },
        ]}
      />

      {corporateSolutions.map((item, index) => (
        <ContentCard
          key={index}
          {...item}
          primaryCTA={
            item.primaryCTA
              ? {
                  text: item.primaryCTA.text,
                  href: item.primaryCTA.href,
                  onClick: () => openInquiryModal(item.title),
                }
              : undefined
          }
        />
      ))}

      <WhyChooseUs />
      <Banner />

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName={selectedService.name}
        servicePrice={selectedService.price}
      />
    </>
  );
}
