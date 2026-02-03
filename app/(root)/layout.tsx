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
  // Global layout (`app/layout.tsx`) already renders `Navbar`,
  // `CookieConsent`, `WhatsAppButton`, and `Footer`.
  // Keep this nested layout minimal to avoid duplicate UI.
  return <>{children}</>;
}
