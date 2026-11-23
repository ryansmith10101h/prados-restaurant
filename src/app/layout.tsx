import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://pradosrestaurant.com"
  ),
  title: {
    default: BUSINESS.seo.title,
    template: `%s | Prados Restaurant & Bar`,
  },
  description: BUSINESS.seo.description,
  keywords: BUSINESS.seo.keywords,
  authors: [{ name: "Prados Restaurant & Bar" }],
  creator: "Prados Restaurant & Bar",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://pradosrestaurant.com",
    siteName: "Prados Restaurant & Bar",
    title: BUSINESS.seo.title,
    description: BUSINESS.seo.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prados Restaurant & Bar — Magodo Phase 2, Lagos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS.seo.title,
    description: BUSINESS.seo.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "", // Add Google Search Console verification code
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a1a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
