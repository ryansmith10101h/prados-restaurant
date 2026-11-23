import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://prados-restaurant.vercel.app"
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
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://prados-restaurant.vercel.app",
    siteName: "Prados Restaurant & Bar",
    title: BUSINESS.seo.title,
    description: BUSINESS.seo.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
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
    images: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"],
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0b",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
