import type { Metadata } from "next";
import ReservationForm from "@/components/sections/ReservationForm";
import { BUSINESS, CALL_URL, WHATSAPP_URL } from "@/lib/constants";
import { Clock, Users, ShieldCheck, Phone, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Table Reservations | Prados Restaurant & Bar Magodo",
  description:
    "Reserve your table at Prados Restaurant & Bar in Magodo Phase 2, Lagos. Intimate dining, group events, celebrations, and late-night lounge.",
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
          <p className="text-base text-charcoal-300 leading-relaxed">
            Join us for an exceptional culinary journey and vibrant nightlife in Magodo Phase 2. Fill out the reservation form below, and our team will get in touch to confirm your placement.
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
              <ul className="space-y-4 text-sm text-charcoal-300">
                <li className="flex items-start gap-3">
                  <Clock className="text-gold-500 shrink-0 mt-0.5" size={18} />
                  <span>
                    <strong>Grace Period:</strong> Tables are held for up to 20 minutes past the scheduled time before being offered to walk-ins.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="text-gold-500 shrink-0 mt-0.5" size={18} />
                  <span>
                    <strong>Large Groups (8+):</strong> For private parties and large gatherings, advance deposits may be requested to secure dedicated sections.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="text-gold-500 shrink-0 mt-0.5" size={18} />
                  <span>
                    <strong>Dress Code:</strong> Smart casual & sophisticated evening wear. We aim to keep an elevated ambiance for all guests.
                  </span>
                </li>
              </ul>
            </div>

            {/* Fast Assistance Card */}
            <div className="bg-charcoal-900 border border-gold-500/30 rounded-lg p-6 lg:p-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">Need Immediate Help?</span>
              <h3 className="font-display text-lg text-cream-100 mt-1 mb-3">Same-Day Table Booking</h3>
              <p className="text-sm text-charcoal-300 leading-relaxed mb-6">
                Planning to visit within the next 2 hours? Calling or chatting with our concierge directly is the quickest way to verify instant table availability.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={CALL_URL}
                  className="btn-primary text-xs py-3 px-4 flex-1 text-center justify-center"
                >
                  <Phone size={14} />
                  Call {BUSINESS.contact.phoneFormatted}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-3 px-4 flex-1 text-center justify-center"
                >
                  <MessageSquare size={14} className="text-green-400" />
                  WhatsApp Host
                </a>
              </div>
            </div>

            {/* Address Reminder */}
            <div className="p-6 bg-charcoal-900/60 border border-charcoal-800 rounded-lg text-xs text-charcoal-400">
              <p className="font-semibold text-cream-200 uppercase tracking-wider mb-1">Location</p>
              <p>{BUSINESS.address.full}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
