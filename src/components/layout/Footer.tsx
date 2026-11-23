import Link from "next/link";
import { Phone, MapPin, Clock, Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";
import { BUSINESS, CALL_URL, WHATSAPP_URL, WHATSAPP_PRIVATE_EVENT_URL } from "@/lib/constants";

const footerLinks = {
  Explore: [
    { label: "Digital Menu", href: "/menu" },
    { label: "Weekly Events", href: "/events" },
    { label: "Private Events", href: "/private-events" },
    { label: "Atmosphere Gallery", href: "/gallery" },
    { label: "Table Reservations", href: "/reservations" },
  ],
  Experience: [
    { label: "About Prados", href: "/about" },
    { label: "The Bar & Cellar", href: "/#bar" },
    { label: "Contact & Location", href: "/#contact" },
    { label: "Get Directions", href: BUSINESS.maps.googleMapsUrl },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="bg-charcoal-950 border-t border-charcoal-800"
      role="contentinfo"
    >
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex flex-col leading-none mb-6 group">
              <span className="font-display text-2xl font-bold text-cream-100 group-hover:text-gold-400 transition-colors">
                PRADOS
              </span>
              <span className="text-[9px] font-medium tracking-[0.25em] uppercase text-gold-500/90 mt-1">
                Restaurant & Bar
              </span>
            </Link>
            <p className="text-xs text-charcoal-300 leading-relaxed font-light mb-6">
              Contemporary Nigerian dining, charcoal grills, curated mixology, and vibrant weekend social gatherings in the heart of Magodo Phase 2, Lagos.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-3">
              {BUSINESS.social.instagram && (
                <a
                  href={BUSINESS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded border border-charcoal-800 flex items-center justify-center text-charcoal-400 hover:text-gold-400 hover:border-gold-500 transition-colors"
                  aria-label="Follow Prados on Instagram"
                >
                  <Instagram size={14} />
                </a>
              )}
              {BUSINESS.social.facebook && (
                <a
                  href={BUSINESS.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded border border-charcoal-800 flex items-center justify-center text-charcoal-400 hover:text-gold-400 hover:border-gold-500 transition-colors"
                  aria-label="Follow Prados on Facebook"
                >
                  <Facebook size={14} />
                </a>
              )}
              {BUSINESS.social.twitter && (
                <a
                  href={BUSINESS.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded border border-charcoal-800 flex items-center justify-center text-charcoal-400 hover:text-gold-400 hover:border-gold-500 transition-colors"
                  aria-label="Follow Prados on Twitter"
                >
                  <Twitter size={14} />
                </a>
              )}
            </div>
          </div>

          {/* Navigation link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="eyebrow mb-5">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-charcoal-300 hover:text-gold-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Hours Column */}
          <div>
            <h3 className="eyebrow mb-5">Location & Hours</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={15} className="text-gold-500 mt-0.5 shrink-0" />
                <address className="not-italic text-xs text-charcoal-300 leading-relaxed font-light">
                  {BUSINESS.address.street},<br />
                  {BUSINESS.address.area}, Lagos, Nigeria
                </address>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={15} className="text-gold-500 shrink-0" />
                <a
                  href={CALL_URL}
                  className="text-xs text-charcoal-300 hover:text-gold-400 font-medium transition-colors"
                >
                  {BUSINESS.contact.phoneFormatted}
                </a>
              </div>

              <div className="flex gap-3">
                <Clock size={15} className="text-gold-500 mt-0.5 shrink-0" />
                <div className="text-xs text-charcoal-300 font-light">
                  <p>Mon–Fri: {BUSINESS.hours.weekdays}</p>
                  <p>Sat–Sun: {BUSINESS.hours.weekends}</p>
                  <p className="text-[10px] text-charcoal-500 mt-0.5">({BUSINESS.hours.kitchenNote})</p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-charcoal-900 flex flex-col gap-2">
              <a
                href={BUSINESS.maps.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors"
              >
                Open Google Maps &rarr;
              </a>
              <a
                href={WHATSAPP_PRIVATE_EVENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle size={13} />
                Private Events WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-12 pt-8 border-t border-charcoal-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-500">
            © {new Date().getFullYear()} Prados Restaurant & Bar. All rights reserved. 51 Alh. Bashorun Shittu Avenue, Magodo Phase 2, Lagos.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-charcoal-400 hover:text-emerald-400 transition-colors"
            >
              WhatsApp Concierge
            </a>
            <a
              href={CALL_URL}
              className="text-xs text-charcoal-400 hover:text-cream-200 transition-colors"
            >
              Call 0904 169 5561
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
