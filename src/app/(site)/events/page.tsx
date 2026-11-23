import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { BUSINESS, WHATSAPP_URL, WHATSAPP_PRIVATE_EVENT_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Upcoming Events, Afro-Soul & Highlife | Prados Restaurant & Bar",
  description:
    "Discover weekly curated programmes, Thursday acoustic afro-soul, Friday highlife & cocktails, and Sunday family grill brunch in Magodo Phase 2, Lagos.",
  alternates: {
    canonical: "/events",
  },
};

interface EventItem {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  description: string;
  image: string;
  status: "upcoming" | "past";
}

const recurringEvents: EventItem[] = [
  {
    id: "e1",
    title: "Acoustic Afro-Soul & Dinner Night",
    category: "Thursday Residency",
    date: "Every Thursday Evening",
    time: "7:00 PM – 11:00 PM",
    description:
      "Unwind with soulful acoustic performances from top local vocalists while savoring chef's evening specials in an intimate candlelit ambiance.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    status: "upcoming",
  },
  {
    id: "e2",
    title: "Friday Highlife & Cocktails Social",
    category: "Friday Nightlife",
    date: "Every Friday Evening",
    time: "8:00 PM – Late",
    description:
      "Kick off your weekend the proper Lagos way with high-energy lounge sets, curated cocktails, and irresistible grilled treats with friends.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    status: "upcoming",
  },
  {
    id: "e3",
    title: "Sunday Family Brunch & Grill Out",
    category: "Sunday Dining",
    date: "Every Sunday Afternoon",
    time: "1:00 PM – 6:00 PM",
    description:
      "A leisurely Sunday afternoon feast featuring charcoal grill roasts, fresh salads, refreshing mocktails, and a welcoming atmosphere for families and groups.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    status: "upcoming",
  },
];

export default function EventsPage() {
  const siteUrl = BUSINESS.seo.siteUrl;

  const eventSchemas = recurringEvents.map((evt) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": evt.title,
    "description": evt.description,
    "image": evt.image,
    "startDate": "2026-01-01T19:00:00+01:00",
    "eventSchedule": {
      "@type": "Schedule",
      "repeatFrequency": "P1W",
    },
    "location": {
      "@type": "Place",
      "name": BUSINESS.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS.address.street,
        "addressLocality": BUSINESS.address.area,
        "addressRegion": BUSINESS.address.city,
        "addressCountry": "NG",
      },
    },
    "organizer": {
      "@type": "Organization",
      "name": BUSINESS.name,
      "url": siteUrl,
    },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchemas) }}
      />
      <div className="pt-32 pb-24 bg-charcoal-950 min-h-screen">
        <div className="container-site">
          {/* Header */}
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="divider-gold" />
              <span className="eyebrow">Atmosphere & Nights</span>
            </div>
            <h1 className="display-lg text-cream-100 mb-6">
              Events & <em className="text-gold-400 not-italic">Weekly Programmes</em>
            </h1>
            <p className="text-base text-charcoal-300 leading-relaxed font-light">
              From soulful acoustic dinners and high-energy weekend lounges to celebratory birthday blowouts and private gatherings, Prados is Magodo's favorite venue to gather and celebrate.
            </p>
          </div>

          {/* Section 1: Weekly Curated Programmes */}
          <div className="mb-20">
            <div className="pb-3 border-b border-charcoal-800 mb-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-500">Weekly Programmes</span>
              <h2 className="font-display text-2xl text-cream-100 mt-1">Our Regular Residencies</h2>
            </div>

            <div className="space-y-12">
              {recurringEvents.map((evt, idx) => (
                <article
                  key={evt.id}
                  className={`bg-charcoal-900 border border-charcoal-800 rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch group hover:border-gold-500/40 transition-colors ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="relative min-h-[280px] lg:min-h-full lg:col-span-5 overflow-hidden bg-charcoal-950">
                    <Image
                      src={evt.image}
                      alt={evt.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-4 left-4 bg-gold-500 text-charcoal-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                      {evt.category}
                    </div>
                  </div>

                  <div className="p-8 lg:p-12 lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-gold-400 font-semibold mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {evt.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} />
                          {evt.time}
                        </span>
                        <span className="flex items-center gap-1.5 text-charcoal-400">
                          <MapPin size={14} />
                          Magodo Phase 2
                        </span>
                      </div>

                      <h3 className="font-display text-2xl lg:text-3xl text-cream-100 mb-4 group-hover:text-gold-400 transition-colors">
                        {evt.title}
                      </h3>

                      <p className="text-sm text-charcoal-300 leading-relaxed font-light mb-8">
                        {evt.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-charcoal-800">
                      <Link
                        href={`/reservations?event=${encodeURIComponent(evt.title)}`}
                        className="btn-primary text-xs"
                      >
                        Reserve Table for This Event
                      </Link>
                      <a
                        href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=${encodeURIComponent(
                          `Hello Prados, I would like to RSVP/enquire about: ${evt.title}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs flex items-center gap-1.5"
                      >
                        <MessageCircle size={15} className="text-emerald-400" />
                        Inquire on WhatsApp
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Section 2: Private Events & Celebrations */}
          <div className="p-8 md:p-12 bg-charcoal-900 border border-gold-500/30 rounded-lg text-center max-w-4xl mx-auto">
            <Sparkles className="mx-auto text-gold-400 mb-3" size={28} />
            <h2 className="font-display text-2xl md:text-3xl text-cream-100 mb-3">
              Host Your Private Celebration or Milestone at Prados
            </h2>
            <p className="text-sm text-charcoal-300 leading-relaxed font-light max-w-xl mx-auto mb-8">
              Birthdays, anniversaries, bridal showers, or corporate team dinners—we offer tailored menus, sound systems, and dedicated lounge areas for 8 to 80+ guests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/private-events" className="btn-primary">
                View Private Event Packages & Form
              </Link>
              <a
                href={WHATSAPP_PRIVATE_EVENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Chat with Event Concierge on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
