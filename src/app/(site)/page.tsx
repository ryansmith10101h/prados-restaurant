import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import MenuPreviewSection from "@/components/sections/MenuPreviewSection";
import BarExperienceSection from "@/components/sections/BarExperienceSection";
import AtmosphereSection from "@/components/sections/AtmosphereSection";
import EventsSection from "@/components/sections/EventsSection";
import LocationContactSection from "@/components/sections/LocationContactSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { BUSINESS } from "@/lib/constants";

export default function HomePage() {
  // Structured Schema.org data for Restaurant & LocalBusiness
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "BarOrPub", "LocalBusiness"],
    "name": BUSINESS.name,
    "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    "description": BUSINESS.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS.address.street,
      "addressLocality": BUSINESS.address.area,
      "addressRegion": BUSINESS.address.city,
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.6194,
      "longitude": 3.3768
    },
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://pradosrestaurant.com",
    "telephone": BUSINESS.contact.phoneE164,
    "servesCuisine": ["Nigerian", "Contemporary African", "Grills", "Cocktails"],
    "priceRange": "₦₦₦",
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
        "closes": "00:00"
      }
    ],
    "acceptsReservations": "True"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="sr-only">Prados Restaurant & Bar - Premium Dining & Lounge in Magodo Phase 2, Lagos</h1>
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
