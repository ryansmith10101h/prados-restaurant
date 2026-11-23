import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, Sparkles, MessageCircle } from "lucide-react";
import { BUSINESS, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Upcoming Events & Nightlife | Prados Restaurant & Bar",
  description:
    "Discover live music, weekend DJ sessions, culinary tastings, and exclusive nightlife events at Prados Restaurant & Bar in Magodo Phase 2, Lagos.",
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

const events: EventItem[] = [
  {
    id: "e1",
    title: "Acoustic Afro-Soul & Dinner Night",
    category: "Live Music",
    date: "Every Thursday Evening",
    time: "7:00 PM – 11:00 PM",
    description:
      "Unwind with soulful acoustic performances from top local vocalists while savoring our chef's evening specials in an intimate candlelit ambiance.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    status: "upcoming",
  },
  {
    id: "e2",
    title: "Friday Highlife & Cocktails Social",
    category: "Weekend Lounge",
    date: "Every Friday",
    time: "8:00 PM – Late",
    description:
      "Kick off your weekend the proper Lagos way with high-energy lounge sets, curated cocktails, and irresistible grilled treats with friends.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    status: "upcoming",
  },
  {
    id: "e3",
    title: "Sunday Family Brunch & Grill Out",
    category: "Special Dining",
    date: "Sundays",
    time: "1:00 PM – 6:00 PM",
    description:
      "A leisurely Sunday afternoon feast featuring charcoal grill roasts, fresh salads, refreshing mocktails, and a welcoming atmosphere for families and groups.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    status: "upcoming",
  },
];

export default function EventsPage() {
  return (
    <div className="pt-32 pb-24 bg-charcoal-950 min-h-screen">
      <div className="container-site">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="divider-gold" />
            <span className="eyebrow">Atmosphere & Nights</span>
          </div>
          <h1 className="display-lg text-cream-100 mb-6">
            Events & <em className="text-gold-400 not-italic">Gatherings</em>
          </h1>
          <p className="text-base text-charcoal-300 leading-relaxed">
            From acoustic dinners and lively weekend lounges to private birthday blowouts and corporate dinners, Prados is Magodo's favorite venue to gather and celebrate.
          </p>
        </div>

        {/* Featured Events List */}
        <div className="space-y-12 mb-20">
          {events.map((evt, idx) => (
            <article
              key={evt.id}
              className={`bg-charcoal-900 border border-charcoal-800 rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch group hover:border-charcoal-700 transition-colors ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="relative min-h-[280px] lg:min-h-full lg:col-span-5 overflow-hidden">
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

                  <h2 className="font-display text-2xl lg:text-3xl text-cream-100 mb-4 group-hover:text-gold-400 transition-colors">
                    {evt.title}
                  </h2>

                  <p className="text-sm text-charcoal-300 leading-relaxed mb-8">
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
                      `Hello Prados, I want to RSVP/inquire about: ${evt.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs"
                  >
                    <MessageCircle size={15} className="text-green-400" />
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Private Event Hosting Callout */}
        <div className="p-8 md:p-12 bg-charcoal-900 border border-gold-500/30 rounded-lg text-center max-w-4xl mx-auto">
          <Sparkles className="mx-auto text-gold-400 mb-3" size={28} />
          <h3 className="font-display text-2xl md:text-3xl text-cream-100 mb-3">
            Host Your Private Party or Event at Prados
          </h3>
          <p className="text-sm text-charcoal-300 leading-relaxed max-w-xl mx-auto mb-8">
            Looking for a dedicated private dining area or full lounge takeover for birthdays, anniversaries, bridal showers, or corporate celebrations? We offer tailored menus, sound systems, and bespoke styling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=${encodeURIComponent(
                "Hello Prados, I am interested in hosting a private event at your venue."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Discuss Private Booking on WhatsApp
            </a>
            <Link href="/reservations" className="btn-secondary">
              Submit Event Reservation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
