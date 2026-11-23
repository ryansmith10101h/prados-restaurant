import Link from "next/link";
import { Phone, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { BUSINESS, CALL_URL, WHATSAPP_URL, WHATSAPP_ENQUIRY_URL } from "@/lib/constants";

const footerLinks = {
  Explore: [
    { label: "Our Menu", href: "/menu" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reservations", href: "/reservations" },
  ],
  Info: [
    { label: "About Prados", href: "/#about" },
    { label: "Contact Us", href: "/#contact" },
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
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex flex-col leading-none mb-6">
              <span className="font-display text-2xl font-semibold text-cream-100">
                Prados
              </span>
              <span className="text-[9px] font-medium tracking-[0.25em] uppercase text-gold-500/80">
                Restaurant & Bar
              </span>
            </Link>
            <p className="text-sm text-charcoal-300 leading-relaxed max-w-xs mb-6">
              {BUSINESS.description}
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {BUSINESS.social.instagram && (
                <a
                  href={BUSINESS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-charcoal-700 flex items-center justify-center text-charcoal-400 hover:text-gold-400 hover:border-gold-500 transition-all duration-200"
                  aria-label="Follow Prados on Instagram"
                >
                  <Instagram size={15} />
                </a>
              )}
              {BUSINESS.social.facebook && (
                <a
                  href={BUSINESS.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-charcoal-700 flex items-center justify-center text-charcoal-400 hover:text-gold-400 hover:border-gold-500 transition-all duration-200"
                  aria-label="Follow Prados on Facebook"
                >
                  <Facebook size={15} />
                </a>
              )}
              {BUSINESS.social.twitter && (
                <a
                  href={BUSINESS.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-charcoal-700 flex items-center justify-center text-charcoal-400 hover:text-gold-400 hover:border-gold-500 transition-all duration-200"
                  aria-label="Follow Prados on Twitter"
                >
                  <Twitter size={15} />
                </a>
              )}
            </div>
          </div>

          {/* Nav links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="eyebrow mb-5">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-charcoal-300 hover:text-cream-100 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h3 className="eyebrow mb-5">Find Us</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={15} className="text-gold-500 mt-0.5 shrink-0" />
                <address className="not-italic text-sm text-charcoal-300 leading-relaxed">
                  {BUSINESS.address.street},<br />
                  {BUSINESS.address.area},<br />
                  {BUSINESS.address.city}, Nigeria
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-gold-500 shrink-0" />
                <a
                  href={CALL_URL}
                  className="text-sm text-charcoal-300 hover:text-cream-100 transition-colors duration-200"
                >
                  {BUSINESS.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex gap-3">
                <Clock size={15} className="text-gold-500 mt-0.5 shrink-0" />
                <div className="text-sm text-charcoal-300">
                  <p>Mon–Fri: {BUSINESS.hours.weekdays}</p>
                  <p>Sat–Sun: {BUSINESS.hours.weekends}</p>
                </div>
              </div>
            </div>

            <a
              href={BUSINESS.maps.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-gold-500 hover:text-gold-400 transition-colors duration-200"
            >
              Get Directions →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal-500">
            © {new Date().getFullYear()} Prados Restaurant & Bar. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-charcoal-500 hover:text-green-400 transition-colors duration-200"
            >
              WhatsApp Us
            </a>
            <a
              href={CALL_URL}
              className="text-xs text-charcoal-500 hover:text-cream-200 transition-colors duration-200"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
