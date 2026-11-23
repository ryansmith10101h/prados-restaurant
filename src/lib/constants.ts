// Business constants — centralized authoritative configuration for Prados Restaurant & Bar

export const BUSINESS = {
  name: "Prados Restaurant & Bar",
  tagline: "Contemporary Nigerian Cuisine, Charcoal Grills & Signature Cocktails",
  description:
    "A sophisticated contemporary Nigerian restaurant and bar destination in Magodo Phase 2, Lagos. Exceptional dining, charcoal grills, curated cocktails, and vibrant weekend social experiences.",
  address: {
    street: "51 Alh. Bashorun Shittu Avenue",
    area: "Magodo Phase 2",
    city: "Lagos",
    state: "Lagos State",
    country: "Nigeria",
    postalCode: "100248",
    full: "51 Alh. Bashorun Shittu Avenue, Magodo Phase 2, Lagos, Nigeria",
  },
  contact: {
    phone: "09041695561",
    phoneFormatted: "0904 169 5561",
    phoneE164: "+2349041695561",
    whatsapp: "2349041695561",
    email: "reservations@pradosrestaurant.com",
  },
  social: {
    instagram: "https://instagram.com/pradosrestaurant",
    facebook: "https://facebook.com/pradosrestaurant",
    twitter: "https://twitter.com/pradoslagos",
  },
  hours: {
    scheduleText: "Mon–Fri: 12 PM – 11 PM | Sat–Sun: 12 PM – 12 AM",
    weekdays: "12:00 PM – 11:00 PM",
    weekends: "12:00 PM – 12:00 AM",
    weekdayOpenHour: 12,
    weekdayCloseHour: 23,
    weekendOpenHour: 12,
    weekendCloseHour: 24, // Midnight
    kitchenNote: "Kitchen closes one hour before venue closing",
    timezone: "Africa/Lagos",
  },
  maps: {
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=51+Alh.+Bashorun+Shittu+Avenue,+Magodo+Phase+2,+Lagos",
    placeName: "51 Alh. Bashorun Shittu Avenue, Magodo Phase 2, Lagos",
  },
  seo: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://prados-restaurant.vercel.app",
    title: "Prados Restaurant & Bar | Contemporary Nigerian Dining & Cocktails in Magodo Phase 2, Lagos",
    description:
      "Experience contemporary Nigerian cuisine, charcoal grills, and artisanal cocktails at Prados Restaurant & Bar, 51 Alh. Bashorun Shittu Avenue, Magodo Phase 2, Lagos. Reserve your table or private event today.",
    keywords: [
      "restaurant in Magodo",
      "restaurant in Magodo Phase 2",
      "Nigerian restaurant in Magodo",
      "restaurant in Magodo Lagos",
      "premium dining in Magodo",
      "restaurant and bar in Magodo",
      "cocktails in Magodo",
      "private event venue in Magodo",
      "family dining in Magodo",
      "Prados restaurant and bar",
      "charcoal grill Magodo",
    ],
  },
};

export const WHATSAPP_URL = `https://wa.me/${BUSINESS.contact.whatsapp}?text=Hello%20Prados%2C%20I%20would%20like%20to%20make%20a%20table%20reservation.`;
export const WHATSAPP_ENQUIRY_URL = `https://wa.me/${BUSINESS.contact.whatsapp}?text=Hello%20Prados%2C%20I%20have%20an%20enquiry%20regarding%20dining%20or%20events.`;
export const WHATSAPP_PRIVATE_EVENT_URL = `https://wa.me/${BUSINESS.contact.whatsapp}?text=Hello%20Prados%2C%20I%20am%20enquiring%20about%20booking%20a%20private%20event%20at%20your%20venue.`;
export const CALL_URL = `tel:${BUSINESS.contact.phone}`;

/**
 * Returns real-time open status in Africa/Lagos timezone
 */
export function getLagosCurrentTime() {
  const now = new Date();
  const lagosTimeString = now.toLocaleString("en-US", { timeZone: "Africa/Lagos" });
  return new Date(lagosTimeString);
}

export function getPradosOpenStatus(): {
  isOpen: boolean;
  statusText: string;
  nextChange: string;
} {
  const lagosDate = getLagosCurrentTime();
  const day = lagosDate.getDay(); // 0 is Sunday, 6 is Saturday
  const hour = lagosDate.getHours();
  const isWeekend = day === 0 || day === 6;

  const openHour = 12; // 12 PM every day
  const closeHour = isWeekend ? 24 : 23; // 12 AM on Sat/Sun, 11 PM Mon-Fri

  const isOpen = hour >= openHour && hour < closeHour;

  if (isOpen) {
    const closeDisplay = isWeekend ? "12:00 AM" : "11:00 PM";
    return {
      isOpen: true,
      statusText: "Open Now",
      nextChange: `Closes at ${closeDisplay}`,
    };
  } else {
    return {
      isOpen: false,
      statusText: "Closed Now",
      nextChange: "Opens at 12:00 PM",
    };
  }
}
