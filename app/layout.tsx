import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Inter } from "next/font/google";

export const metadata: Metadata = {
  title:
    "Trendline Training & Consultancy Ltd | Data Training & Corporate Consultancy",
  description:
    "Expert led corporate training and consultancy helping businesses unlock the power of data for strategic growth, innovation, and long term success.",
  keywords: [
    "trendline training",
    "corporate training",
    "data analytics training",
    "business consultancy",
    "professional development",
  ],
  authors: [{ name: "Trendline Training & Consultancy Ltd" }],
  alternates: {
    canonical: "https://trendlinec.com/",
  },
  openGraph: {
    title: "Trendline Training & Consultancy Ltd",
    description:
      "Helping businesses grow through data-driven training and consulting.",
    url: "https://trendlinec.com/",
    siteName: "Trendline Training & Consultancy Ltd",
    images: [
      {
        url: "https://static.readdy.ai/image/7a2941f4f4bd206a071b69a2951de2dc/66ca896711b4be15fa15f7657f0c555e.jpeg",
        width: 1200,
        height: 630,
        alt: "Trendline Training & Consultancy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trendline Training & Consultancy Ltd",
    description:
      "Helping businesses grow through data-driven training and consulting.",
    images: [
      "https://static.readdy.ai/image/7a2941f4f4bd206a071b69a2951de2dc/66ca896711b4be15fa15f7657f0c555e.jpeg",
    ],
  },
  verification: {
    google: "CPnNW4Bq1VN2rZRWSpb200rbJvK9u0njx7sXdVpvhKk",
  },
  icons: {
    icon: "/favicon.ico",
  },
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
      <head>
        {/* Material Icons – used by Partnerships page and others */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
