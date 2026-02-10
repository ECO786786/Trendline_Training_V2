import { Navbar } from "@/components/navigation/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { whatsappNumber } from "@/lib/env";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <CookieConsent />
      <WhatsAppButton
        phoneNumber={whatsappNumber}
        message="Hello! How can we help you today?"
      />
      <Footer />
    </>
  );
}
