import type { Metadata } from "next";
import MenuClient from "@/components/menu/MenuClient";
import { BUSINESS } from "@/lib/constants";
import { MENU_ITEMS } from "@/data/menu";

export const metadata: Metadata = {
  title: "Digital Menu & Pricing | Prados Restaurant & Bar Magodo Lagos",
  description:
    "Explore our complete digital menu with prices in Nigerian Naira (₦). Contemporary Nigerian jollof, seafood okra, charcoal lamb chops, and signature cocktails in Magodo Phase 2.",
  alternates: {
    canonical: "/menu",
  },
};

export default function MenuPage() {
  const siteUrl = BUSINESS.seo.siteUrl;

  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${siteUrl}/menu#menu`,
    "name": "Prados Restaurant & Bar Digital Menu",
    "description": "Complete menu of contemporary Nigerian dishes, charcoal grills, sides, desserts, and cocktails at Prados Magodo.",
    "inLanguage": "en",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Starters",
        "hasMenuItem": MENU_ITEMS.filter((i) => i.category === "STARTERS").map((item) => ({
          "@type": "MenuItem",
          "name": item.name,
          "description": item.description,
          "offers": {
            "@type": "Offer",
            "price": item.price,
            "priceCurrency": "NGN",
          },
        })),
      },
      {
        "@type": "MenuSection",
        "name": "Mains",
        "hasMenuItem": MENU_ITEMS.filter((i) => i.category === "MAINS").map((item) => ({
          "@type": "MenuItem",
          "name": item.name,
          "description": item.description,
          "offers": {
            "@type": "Offer",
            "price": item.price,
            "priceCurrency": "NGN",
          },
        })),
      },
      {
        "@type": "MenuSection",
        "name": "Grills",
        "hasMenuItem": MENU_ITEMS.filter((i) => i.category === "GRILLS").map((item) => ({
          "@type": "MenuItem",
          "name": item.name,
          "description": item.description,
          "offers": {
            "@type": "Offer",
            "price": item.price,
            "priceCurrency": "NGN",
          },
        })),
      },
      {
        "@type": "MenuSection",
        "name": "Cocktails",
        "hasMenuItem": MENU_ITEMS.filter((i) => i.category === "COCKTAILS").map((item) => ({
          "@type": "MenuItem",
          "name": item.name,
          "description": item.description,
          "offers": {
            "@type": "Offer",
            "price": item.price,
            "priceCurrency": "NGN",
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      <MenuClient />
    </>
  );
}
