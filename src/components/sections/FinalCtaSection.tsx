import Link from "next/link";
import { BUSINESS, CALL_URL, WHATSAPP_URL } from "@/lib/constants";
import { Calendar, Phone, MessageSquare } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="section-pad bg-charcoal-900 border-t border-charcoal-800 relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-site relative z-10 text-center max-w-3xl mx-auto">
        <div className="divider-gold mx-auto mb-6" />
        <span className="eyebrow">Your Table Awaits</span>
        
        <h2 id="cta-heading" className="display-lg text-cream-100 mt-4 mb-6">
          Experience the Flavor & Atmosphere of <em className="text-gold-400 not-italic">Prados</em>
        </h2>

        <p className="text-base text-charcoal-300 leading-relaxed mb-10">
          Whether you are joining us for an intimate dinner, business lunch, or late-night drinks with friends, we look forward to serving you an extraordinary Lagos hospitality experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/reservations" className="btn-primary w-full sm:w-auto">
            <Calendar size={18} />
            Make a Reservation
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full sm:w-auto"
          >
            <MessageSquare size={18} className="text-green-400" />
            WhatsApp Us
          </a>
          <a
            href={CALL_URL}
            className="btn-outline-gold w-full sm:w-auto"
          >
            <Phone size={16} />
            Call: {BUSINESS.contact.phoneFormatted}
          </a>
        </div>
      </div>
    </section>
  );
}
