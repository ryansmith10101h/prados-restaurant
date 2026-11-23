import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { BUSINESS, WHATSAPP_URL, WHATSAPP_PRIVATE_EVENT_URL } from "@/lib/constants";

// The 3 authoritative recurring programmes required by the master prompt
const recurringProgrammes = [
  {
    id: "p1",
    title: "Acoustic Afro-Soul & Dinner Night",
    dayTime: "Every Thursday Evening • 7:00 PM – 11:00 PM",
    description:
      "Unwind with soulful acoustic performances from top local vocalists while savoring chef's evening specials in an intimate candlelit ambiance.",
    badge: "Thursday Residency",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
  },
  {
    id: "p2",
    title: "Friday Highlife & Cocktails Social",
    dayTime: "Every Friday Evening • 8:00 PM – Late",
    description:
      "Kick off your weekend the proper Lagos way with high-energy lounge sets, curated cocktails, and irresistible grilled platters with friends.",
    badge: "Friday Nightlife",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
  },
  {
    id: "p3",
    title: "Sunday Family Brunch & Grill Out",
    dayTime: "Every Sunday Afternoon • 1:00 PM – 6:00 PM",
    description:
      "A leisurely Sunday afternoon feast featuring charcoal grill roasts, fresh salads, refreshing mocktails, and a welcoming atmosphere for families and groups.",
    badge: "Sunday Dining",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
  },
];

const privateEventTypes = [
  { label: "Birthday Celebrations", desc: "Custom cakes, sound setup, and VIP seating." },
  { label: "Corporate Dinners", desc: "Private dining with curated multi-course menus." },
  { label: "Bridal & Baby Showers", desc: "Aesthetic daytime arrangements and mocktails." },
  { label: "Full Lounge Takeovers", desc: "Exclusive venue access for grand milestones." },
];

export default function EventsSection() {
  return (
    <section
      id="events"
      className="section-pad bg-charcoal-950 border-t border-charcoal-800"
      aria-labelledby="events-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="divider-gold" />
              <span className="eyebrow">Atmosphere & Nights</span>
            </div>
            <h2
              id="events-heading"
              className="display-md text-cream-100 max-w-xl"
            >
              Curated Evenings,{" "}
              <span className="text-gold-400 font-normal italic">Weekly Programmes & Private Gatherings</span>
            </h2>
          </div>
          <p className="text-sm text-charcoal-300 max-w-md leading-relaxed font-light">
            From acoustic soul and weekend cocktail socials to celebratory birthday dinners and corporate private dining, Prados is Magodo's favorite venue to gather.
          </p>
        </div>

        {/* 1. Recurring Programmes Section */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-charcoal-800">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-500">
                Weekly Curated Programmes
              </span>
              <h3 className="font-display text-xl text-cream-100 mt-0.5">
                Residencies at Prados
              </h3>
            </div>
            <Link
              href="/events"
              className="text-xs font-semibold text-gold-400 hover:text-gold-300 uppercase tracking-wider hidden sm:inline-flex items-center gap-1"
            >
              View Full Event Calendar <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recurringProgrammes.map((prog) => (
              <article
                key={prog.id}
                className="bg-charcoal-900 border border-charcoal-800 rounded-lg overflow-hidden group hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-charcoal-950">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent opacity-80" />
                    <div className="absolute top-3 left-3 bg-gold-500 text-charcoal-900 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                      {prog.badge}
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-semibold text-gold-400 mb-2 flex items-center gap-1.5">
                      <Clock size={13} />
                      {prog.dayTime}
                    </p>
                    <h4 className="font-display text-xl text-cream-100 group-hover:text-gold-400 transition-colors mb-3">
                      {prog.title}
                    </h4>
                    <p className="text-xs text-charcoal-300 leading-relaxed font-light">
                      {prog.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-charcoal-800/60 mt-4">
                  <Link
                    href={`/reservations?event=${encodeURIComponent(prog.title)}`}
                    className="btn-primary text-[11px] py-2.5 px-4 flex-1 text-center justify-center"
                  >
                    Reserve Table
                  </Link>
                  <a
                    href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=${encodeURIComponent(
                      `Hello Prados, I would like to RSVP/enquire for: ${prog.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded bg-charcoal-800 text-emerald-400 hover:text-emerald-300 border border-charcoal-700"
                    aria-label={`Inquire about ${prog.title} on WhatsApp`}
                  >
                    <MessageCircle size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 2. Private Celebrations & Group Bookings Showcase */}
        <div className="p-8 md:p-12 rounded-lg bg-charcoal-900 border border-gold-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">
              <Sparkles size={14} />
              Private Events & Celebrations
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-cream-100 mb-4">
              Celebrate Life's Milestone Moments at Prados
            </h3>
            <p className="text-sm text-charcoal-300 leading-relaxed font-light mb-6">
              From intimate birthday dinners with bespoke cake service to bridal showers, business mixers, and exclusive lounge buyouts in Magodo Phase 2, our team handles every detail with warm Nigerian hospitality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {privateEventTypes.map((t) => (
                <div key={t.label} className="p-3 rounded bg-charcoal-950/60 border border-charcoal-800">
                  <p className="font-semibold text-xs text-cream-100 mb-0.5">{t.label}</p>
                  <p className="text-[11px] text-charcoal-400">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4 bg-charcoal-950 p-6 rounded-lg border border-charcoal-800 text-center">
            <h4 className="font-display text-lg text-cream-100">Plan Your Gathering</h4>
            <p className="text-xs text-charcoal-400">
              For groups of 8+ or private area reservations, speak directly with our event coordinator.
            </p>
            <Link href="/private-events" className="btn-primary text-xs py-3.5">
              Explore Private Events & Packages
            </Link>
            <a
              href={WHATSAPP_PRIVATE_EVENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-3.5 flex items-center justify-center gap-2"
            >
              <MessageCircle size={15} className="text-emerald-400" />
              Chat on WhatsApp Concierge
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
