import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Users, Wine, Utensils, Music, ShieldCheck, MessageCircle, Phone } from "lucide-react";
import { BUSINESS, CALL_URL, WHATSAPP_PRIVATE_EVENT_URL } from "@/lib/constants";
import PrivateEventForm from "@/components/sections/PrivateEventForm";

export const metadata: Metadata = {
  title: "Private Events, Birthdays & Corporate Dining | Prados Restaurant & Bar",
  description:
    "Host birthdays, anniversaries, bridal showers, corporate celebrations, and private dining in Magodo Phase 2, Lagos. Bespoke menus, sound setups, and VIP service at Prados.",
  alternates: {
    canonical: "/private-events",
  },
};

const eventOccasions = [
  {
    title: "Birthday Celebrations",
    desc: "Celebrate your special day with custom multi-course dining, bottle service, cake presentation, and dedicated celebration tables.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    badge: "Most Popular",
  },
  {
    title: "Corporate Dinners & Mixers",
    desc: "Impress clients or reward your team with private dining arrangements, bespoke canapés, premium wine pairings, and high-speed Wi-Fi.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    badge: "Corporate",
  },
  {
    title: "Bridal & Baby Showers",
    desc: "Aesthetic daytime setups, artisanal mocktails, pastries, and intimate floral tables for memorable celebrations with closest friends.",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    badge: "Intimate Gathering",
  },
  {
    title: "Full Lounge Buyouts",
    desc: "Exclusive access to the complete Prados restaurant and bar venue in Magodo Phase 2 for major milestone galas, launches, and private parties.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    badge: "Exclusive Access",
  },
];

export default function PrivateEventsPage() {
  return (
    <div className="pt-32 pb-24 bg-charcoal-950 min-h-screen">
      <div className="container-site">
        {/* Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="flex items-center gap-4 mb-4">
            <div className="divider-gold" />
            <span className="eyebrow">Milestone Celebrations</span>
          </div>
          <h1 className="display-lg text-cream-100 mb-6">
            Private Events & <em className="text-gold-400 not-italic">Celebrations</em>
          </h1>
          <p className="text-base text-charcoal-300 leading-relaxed font-light">
            From intimate birthday gatherings and milestone anniversaries to corporate dinners and full lounge buyouts, Prados provides the perfect ambiance, contemporary Nigerian dining, and polished hospitality in Magodo Phase 2.
          </p>
        </div>

        {/* Occasions Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {eventOccasions.map((occ) => (
            <div
              key={occ.title}
              className="bg-charcoal-900 border border-charcoal-800 rounded-lg overflow-hidden flex flex-col justify-between group hover:border-gold-500/40 transition-all duration-300"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-charcoal-950">
                  <Image
                    src={occ.image}
                    alt={occ.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 left-3 bg-gold-500 text-charcoal-900 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                    {occ.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-lg text-cream-100 mb-2 group-hover:text-gold-400 transition-colors">
                    {occ.title}
                  </h2>
                  <p className="text-xs text-charcoal-300 leading-relaxed font-light">
                    {occ.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities & Venue Features */}
        <div className="mb-20 p-8 lg:p-12 bg-charcoal-900 border border-charcoal-800 rounded-lg">
          <div className="max-w-2xl mb-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">Venue Features</span>
            <h2 className="font-display text-2xl lg:text-3xl text-cream-100 mt-1">
              Everything Needed for a Flawless Event
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded bg-charcoal-950/80 border border-charcoal-800">
              <Utensils className="text-gold-500 mb-3" size={20} />
              <h3 className="font-display text-base text-cream-100 mb-1">Tailored Event Menus</h3>
              <p className="text-xs text-charcoal-300 font-light leading-relaxed">
                Plated multi-course menus or family-style charcoal grill buffets curated by our executive chef.
              </p>
            </div>
            <div className="p-5 rounded bg-charcoal-950/80 border border-charcoal-800">
              <Wine className="text-gold-500 mb-3" size={20} />
              <h3 className="font-display text-base text-cream-100 mb-1">Dedicated Bar & Sommelier</h3>
              <p className="text-xs text-charcoal-300 font-light leading-relaxed">
                Custom cocktail lists, champagne towers, wine pairings, and non-alcoholic craft mocktails.
              </p>
            </div>
            <div className="p-5 rounded bg-charcoal-950/80 border border-charcoal-800">
              <Music className="text-gold-500 mb-3" size={20} />
              <h3 className="font-display text-base text-cream-100 mb-1">Audiovisual & Sound</h3>
              <p className="text-xs text-charcoal-300 font-light leading-relaxed">
                Surround audio setup, wireless microphones, and DJ plug-in connectivity for speeches and music.
              </p>
            </div>
            <div className="p-5 rounded bg-charcoal-950/80 border border-charcoal-800">
              <Users className="text-gold-500 mb-3" size={20} />
              <h3 className="font-display text-base text-cream-100 mb-1">Flexible Seating Layouts</h3>
              <p className="text-xs text-charcoal-300 font-light leading-relaxed">
                Accommodates 8 to 80+ guests comfortably across intimate booths, dining tables, and bar lounge.
              </p>
            </div>
            <div className="p-5 rounded bg-charcoal-950/80 border border-charcoal-800">
              <ShieldCheck className="text-gold-500 mb-3" size={20} />
              <h3 className="font-display text-base text-cream-100 mb-1">Security & Dedicated Parking</h3>
              <p className="text-xs text-charcoal-300 font-light leading-relaxed">
                Gated Magodo Phase 2 access, professional on-site security, and designated vehicle parking.
              </p>
            </div>
            <div className="p-5 rounded bg-charcoal-950/80 border border-charcoal-800">
              <Sparkles className="text-gold-500 mb-3" size={20} />
              <h3 className="font-display text-base text-cream-100 mb-1">Event Coordination</h3>
              <p className="text-xs text-charcoal-300 font-light leading-relaxed">
                Direct coordination with your event planners, cake bakers, florists, and photographers.
              </p>
            </div>
          </div>
        </div>

        {/* Private Event Enquiry Form & Direct Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <PrivateEventForm />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-charcoal-900 border border-gold-500/30 rounded-lg p-6 lg:p-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">Direct Concierge</span>
              <h3 className="font-display text-xl text-cream-100 mt-1 mb-3">Prefer an Immediate Conversation?</h3>
              <p className="text-sm text-charcoal-300 leading-relaxed font-light mb-6">
                Our event manager is available on WhatsApp or telephone to discuss guest estimates, custom pricing, and date holds instantly.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={WHATSAPP_PRIVATE_EVENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-3.5 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  Chat with Event Manager on WhatsApp
                </a>
                <a
                  href={CALL_URL}
                  className="btn-secondary text-xs py-3.5 flex items-center justify-center gap-2"
                >
                  <Phone size={14} />
                  Call {BUSINESS.contact.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="bg-charcoal-900 border border-charcoal-800 rounded-lg p-6 text-xs text-charcoal-300 space-y-3">
              <h4 className="font-display text-base text-cream-100">Private Booking Guidelines</h4>
              <p>• <strong>Deposit Policy:</strong> A commitment deposit is required to lock dates for groups of 8+ or full section buyouts.</p>
              <p>• <strong>Custom Menus:</strong> Tasting sessions can be arranged for events with 25+ guests.</p>
              <p>• <strong>Location:</strong> 51 Alh. Bashorun Shittu Avenue, Magodo Phase 2, Lagos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
