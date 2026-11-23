// Business constants — edit these or manage through admin CMS
export const BUSINESS = {
  name: "Prados Restaurant & Bar",
  tagline: "Where Lagos Dines & Celebrates",
  description:
    "A sophisticated restaurant and bar destination in the heart of Magodo Phase 2, Lagos. Exceptional cuisine, curated cocktails and an atmosphere that elevates every occasion.",
  address: {
    street: "51 Alh. Bashorun Shittu Avenue",
    area: "Magodo Phase 2",
    city: "Lagos",
    state: "Lagos State",
    country: "Nigeria",
    full: "51 Alh. Bashorun Shittu Avenue, Magodo Phase 2, Lagos, Nigeria",
  },
  contact: {
    phone: "09041695561",
    phoneFormatted: "0904 169 5561",
    phoneE164: "+2349041695561",
    whatsapp: "2349041695561",
    email: "", // To be filled by business owner
  },
  social: {
    instagram: "", // To be filled
    facebook: "",  // To be filled
    twitter: "",   // To be filled
  },
  hours: {
    weekdays: "12:00 PM – 11:00 PM",
    weekends: "12:00 PM – 12:00 AM",
    note: "Kitchen closes 1 hour before closing time",
  },
  maps: {
    googleMapsUrl:
      "https://www.google.com/maps/search/51+Alh.+Bashorun+Shittu+Avenue,+Magodo+Phase+2,+Lagos",
    embedUrl: "", // Google Maps embed URL — set in admin
  },
  seo: {
    title: "Prados Restaurant & Bar | Magodo Phase 2, Lagos",
    description:
      "Sophisticated dining and bar experience in Magodo Phase 2, Lagos. Exceptional cuisine, curated cocktails and memorable atmosphere. Reserve your table today.",
    keywords: [
      "restaurant in Magodo",
      "restaurant Magodo Phase 2",
      "bar Magodo Lagos",
      "restaurants in Lagos",
      "fine dining Lagos",
      "Prados restaurant",
    ],
  },
};

export const WHATSAPP_URL = `https://wa.me/${BUSINESS.contact.whatsapp}?text=Hello%20Prados%2C%20I%20would%20like%20to%20make%20a%20reservation.`;
export const WHATSAPP_ENQUIRY_URL = `https://wa.me/${BUSINESS.contact.whatsapp}?text=Hello%20Prados%2C%20I%20have%20an%20enquiry.`;
export const CALL_URL = `tel:${BUSINESS.contact.phone}`;
