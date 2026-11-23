import Link from "next/link";
import { MapPin, Phone, Clock, Navigation, MessageCircle, ShieldCheck, Car } from "lucide-react";
import { BUSINESS, CALL_URL, WHATSAPP_URL } from "@/lib/constants";

export default function LocationContactSection() {
  return (
    <section id="contact" className="section-pad bg-charcoal-950 border-t border-charcoal-800" aria-labelledby="location-heading">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-gold" />
              <span className="eyebrow">Find & Connect</span>
            </div>
            
            <h2 id="location-heading" className="display-md text-cream-100 mb-6">
              Visit Prados in <em className="text-gold-400 not-italic">Magodo Phase 2</em>
            </h2>
            
            <p className="text-base text-charcoal-300 leading-relaxed font-light mb-8">
              We are conveniently situated along Alh. Bashorun Shittu Avenue in Magodo Phase 2, Lagos. An inviting venue crafted for dinner dates, family lunches, after-work drinks, and late-night social gatherings.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-charcoal-900 border border-charcoal-800">
                <MapPin className="text-gold-500 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-cream-100 mb-1">Address</h3>
                  <address className="not-italic text-sm text-charcoal-300 leading-relaxed font-light">
                    {BUSINESS.address.street}<br />
                    {BUSINESS.address.area}, {BUSINESS.address.city}, {BUSINESS.address.country}
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-charcoal-900 border border-charcoal-800">
                <Clock className="text-gold-500 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-cream-100 mb-1">Hours of Operation</h3>
                  <p className="text-sm text-charcoal-300 font-light">
                    <strong className="text-cream-200 font-medium">Monday – Friday:</strong> {BUSINESS.hours.weekdays}<br />
                    <strong className="text-cream-200 font-medium">Saturday – Sunday:</strong> {BUSINESS.hours.weekends}
                  </p>
                  <p className="text-xs text-gold-500/90 mt-1 font-medium">({BUSINESS.hours.kitchenNote})</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-charcoal-900 border border-charcoal-800">
                <Phone className="text-gold-500 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-cream-100 mb-1">Reservations & Concierge</h3>
                  <p className="text-sm text-charcoal-300 font-light">
                    Telephone:{" "}
                    <a href={CALL_URL} className="text-gold-400 hover:underline font-medium">
                      {BUSINESS.contact.phoneFormatted}
                    </a>
                  </p>
                  <p className="text-xs text-charcoal-400 mt-0.5">
                    WhatsApp concierge available daily during operational hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-charcoal-900 border border-charcoal-800">
                <Car className="text-gold-500 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-cream-100 mb-1">Parking & Security</h3>
                  <p className="text-xs text-charcoal-300 font-light leading-relaxed">
                    Gated community access within Magodo GRA Phase 2 with professional security personnel and designated customer parking spaces.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={BUSINESS.maps.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Navigation size={16} />
                Get Directions
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MessageCircle size={16} className="text-emerald-400" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Interactive Directions Card */}
          <div className="lg:col-span-7 bg-charcoal-900 border border-charcoal-800 rounded-lg p-6 lg:p-8 flex flex-col justify-between min-h-[480px]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-charcoal-800 mb-6">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold-500">Live Map & Landmark</span>
                  <h3 className="text-xl font-display text-cream-100 mt-1">Magodo Phase 2 Destination</h3>
                </div>
                <span className="px-3 py-1 text-xs bg-gold-500/10 text-gold-400 border border-gold-500/20 rounded font-medium">
                  Lagos Mainland
                </span>
              </div>

              <p className="text-sm text-charcoal-300 leading-relaxed font-light mb-6">
                Located right off the central avenue in Magodo GRA Phase 2 with 24/7 security. Click below to launch real-time turn-by-turn navigation on Google Maps or Apple Maps.
              </p>

              {/* Styled map preview representation */}
              <div className="relative w-full h-72 bg-charcoal-950 border border-charcoal-700 rounded-lg overflow-hidden flex flex-col items-center justify-center p-6 text-center group">
                <div className="absolute inset-0 bg-[radial-gradient(#c9a84c_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={26} />
                  </div>
                  <h4 className="font-display text-cream-100 text-lg mb-1">51 Alh. Bashorun Shittu Avenue</h4>
                  <p className="text-xs text-charcoal-300 mb-4 font-light">Magodo Phase 2, Lagos, Nigeria</p>
                  <a
                    href={BUSINESS.maps.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400 hover:text-gold-300 underline underline-offset-4"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-charcoal-400">
                Planning a special celebration or group party?
              </span>
              <Link href="/private-events" className="text-xs font-semibold uppercase tracking-wider text-gold-400 hover:text-gold-300">
                Private Event Packages &rarr;
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
