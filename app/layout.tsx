import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Inter } from "next/font/google";
import { Navbar } from "../components/navigation/navbar";

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js + Tailwind fonts",
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
