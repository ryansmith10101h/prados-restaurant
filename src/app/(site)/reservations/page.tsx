import type { Metadata } from "next";
import ReservationForm from "@/components/sections/ReservationForm";
import { BUSINESS, CALL_URL, WHATSAPP_URL, WHATSAPP_PRIVATE_EVENT_URL } from "@/lib/constants";
import { Clock, Users, ShieldCheck, Phone, MessageSquare, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Table Reservations & Bookings | Prados Restaurant & Bar Magodo",
  description:
    "Reserve your table at Prados Restaurant & Bar, 51 Alh. Bashorun Shittu Avenue, Magodo Phase 2, Lagos. Intimate dining, family lunches, and celebration tables.",
  alternates: {
    canonical: "/reservations",
  },
};

export default function ReservationsPage() {
  return (
    <div className="pt-32 pb-24 bg-charcoal-950 min-h-screen">
      <div className="container-site">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="divider-gold" />
            <span className="eyebrow">Table Bookings</span>
          </div>
          <h1 className="display-lg text-cream-100 mb-6">
            Reserve Your Experience at <em className="text-gold-400 not-italic">Prados</em>
          </h1>
          <p className="text-base text-charcoal-300 leading-relaxed font-light">
            Join us for contemporary Nigerian dining, charcoal grills, and curated cocktails in Magodo Phase 2. Fill out the reservation form below, and our host team will connect with you via phone or WhatsApp to verify and confirm your table.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Form (7 cols) */}
          <div className="lg:col-span-7">
            <ReservationForm />
          </div>

          {/* Right Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Booking Policies Card */}
            <div className="bg-charcoal-900 border border-charcoal-800 rounded-lg p-6 lg:p-8">
              <h2 className="font-display text-xl text-cream-100 mb-4">Reservation Guidelines</h2>
              <ul className="space-y-4 text-xs sm:text-sm text-charcoal-300 font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <Clock className="text-gold-500 shrink-0 mt-0.5" size={18} />
                  <span>
                    <strong className="text-cream-100 font-medium">Grace Period Policy:</strong> Tables are held for up to 20 minutes past the scheduled reservation time before being offered to waiting walk-in guests.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="text-gold-500 shrink-0 mt-0.5" size={18} />
                  <span>
                    <strong className="text-cream-100 font-medium">Large Groups (8+ Guests):</strong> For larger parties, birthdays, or dedicated sections, an advance commitment deposit may be requested.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="text-gold-500 shrink-0 mt-0.5" size={18} />
                  <span>
                    <strong className="text-cream-100 font-medium">Verification Notice:</strong> Reservation requests are confirmed after direct verification by our host team via phone or WhatsApp.
                  </span>
                </li>
              </ul>

              <div className="mt-6 pt-5 border-t border-charcoal-800">
                <Link
                  href="/private-events"
                  className="text-xs font-semibold text-gold-400 hover:text-gold-300 uppercase tracking-wider inline-flex items-center gap-1.5"
                >
                  <Sparkles size={14} />
                  Planning a party for 8+? See Private Events &rarr;
                </Link>
              </div>
            </div>

            {/* Fast Assistance Card */}
            <div className="bg-charcoal-900 border border-gold-500/30 rounded-lg p-6 lg:p-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">Need Immediate Help?</span>
              <h3 className="font-display text-lg text-cream-100 mt-1 mb-2">Same-Day Table Availability</h3>
              <p className="text-xs sm:text-sm text-charcoal-300 leading-relaxed font-light mb-6">
                Planning to visit within the next 2 hours? Calling or chatting with our concierge directly is the fastest way to confirm instant table availability.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={CALL_URL}
                  className="btn-primary text-xs py-3 px-4 flex-1 text-center justify-center flex items-center gap-1.5"
                >
                  <Phone size={14} />
                  Call {BUSINESS.contact.phoneFormatted}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-3 px-4 flex-1 text-center justify-center flex items-center gap-1.5"
                >
                  <MessageSquare size={14} className="text-emerald-400" />
                  WhatsApp Host
                </a>
              </div>
            </div>

            {/* Operating Hours & Location */}
            <div className="p-6 bg-charcoal-900/60 border border-charcoal-800 rounded-lg text-xs text-charcoal-400">
              <p className="font-semibold text-cream-200 uppercase tracking-wider mb-1">Venue Address & Hours</p>
              <p className="text-charcoal-300 mb-2">{BUSINESS.address.full}</p>
              <p className="text-gold-400 font-medium">Mon–Fri: 12 PM – 11 PM | Sat–Sun: 12 PM – 12 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
