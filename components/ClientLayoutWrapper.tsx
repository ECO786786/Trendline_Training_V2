"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
  whatsappNumber: string | undefined;
}

export default function ClientLayoutWrapper({
  children,
  whatsappNumber,
}: ClientLayoutWrapperProps) {
  const pathname = usePathname();
  // Check if we are on an admin route
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <CookieConsent />
      {whatsappNumber && (
        <WhatsAppButton
          phoneNumber={whatsappNumber}
          message="Hello! How can we help you today?"
        />
      )}
      <Footer />
    </>
  );
}
