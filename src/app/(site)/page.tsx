import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import MenuPreviewSection from "@/components/sections/MenuPreviewSection";
import BarExperienceSection from "@/components/sections/BarExperienceSection";
import AtmosphereSection from "@/components/sections/AtmosphereSection";
import EventsSection from "@/components/sections/EventsSection";
import LocationContactSection from "@/components/sections/LocationContactSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { BUSINESS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prados Restaurant & Bar | Contemporary Nigerian Dining & Cocktails in Magodo Phase 2, Lagos",
  description:
    "Experience contemporary Nigerian cuisine, charcoal grills, artisanal cocktails, and live entertainment at Prados Restaurant & Bar, 51 Alh. Bashorun Shittu Avenue, Magodo Phase 2, Lagos.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const siteUrl = BUSINESS.seo.siteUrl;

  // Complete Schema.org JSON-LD representing Restaurant, BarOrPub, and LocalBusiness
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Restaurant", "BarOrPub", "LocalBusiness"],
        "@id": `${siteUrl}/#restaurant`,
        "name": BUSINESS.name,
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
        "description": BUSINESS.description,
        "url": siteUrl,
        "telephone": BUSINESS.contact.phoneE164,
        "priceRange": "₦₦₦",
        "servesCuisine": [
          "Contemporary Nigerian",
          "Nigerian",
          "African",
          "Charcoal Grills",
          "Cocktails",
          "Wine Bar"
        ],
        "acceptsReservations": "True",
        "menu": `${siteUrl}/menu`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": BUSINESS.address.street,
          "addressLocality": BUSINESS.address.area,
          "addressRegion": BUSINESS.address.city,
          "postalCode": BUSINESS.address.postalCode,
          "addressCountry": "NG"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 6.6194,
          "longitude": 3.3768
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "12:00",
            "closes": "23:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday", "Sunday"],
            "opens": "12:00",
            "closes": "23:59"
          }
        ],
        "hasMap": BUSINESS.maps.googleMapsUrl,
        "sameAs": [
          BUSINESS.social.instagram,
          BUSINESS.social.facebook,
          BUSINESS.social.twitter
        ].filter(Boolean)
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": BUSINESS.name,
        "description": BUSINESS.description,
        "publisher": {
          "@id": `${siteUrl}/#restaurant`
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Page Sections */}
      <HeroSection />
      <IntroSection />
      <MenuPreviewSection />
      <BarExperienceSection />
      <AtmosphereSection />
      <EventsSection />
      <LocationContactSection />
      <FinalCtaSection />
    </>
  );
}
