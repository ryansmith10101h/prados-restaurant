"use client";

import Link from "next/link";
import { MapPin, ChevronDown } from "lucide-react";
import { BUSINESS, WHATSAPP_URL } from "@/lib/constants";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      aria-label="Hero — Prados Restaurant & Bar"
    >
      {/* Background — editorial dark with warm overlay */}
      <div className="absolute inset-0 bg-charcoal-950">
        {/* Atmospheric background image placeholder */}
        {/* Replace src with actual restaurant photography via CMS */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80&auto=format&fit=crop')`,
          }}
          role="img"
          aria-label="Restaurant interior atmosphere — Prados Restaurant & Bar"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/50 via-charcoal-950/20 to-charcoal-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/60 via-transparent to-charcoal-950/20" />
      </div>

      {/* Decorative gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      {/* Content */}
      <div className="relative container-site pb-24 md:pb-28 lg:pb-32 pt-32">
        <div className="max-w-3xl">
          {/* Location badge */}
          <div
            className={cn(
              "flex items-center gap-2 mb-6 md:mb-8 transition-all duration-700",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="divider-gold" />
            <div className="flex items-center gap-1.5 text-gold-400">
              <MapPin size={12} className="shrink-0" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase">
                Magodo Phase 2, Lagos
              </span>
            </div>
          </div>

          {/* Main headline */}
          <h1
            className={cn(
              "font-display text-cream-100 leading-[0.92] tracking-tight mb-6 md:mb-8 transition-all duration-700 delay-150",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              "text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
            )}
          >
            Where Lagos
            <br />
            <em className="text-gold-400 not-italic">Dines</em> &{" "}
            <em className="text-cream-100 not-italic">Celebrates.</em>
          </h1>

          {/* Subheading */}
          <p
            className={cn(
              "text-base md:text-lg text-cream-300 max-w-xl leading-relaxed mb-10 md:mb-12 transition-all duration-700 delay-300",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            Exceptional cuisine, curated cocktails and an atmosphere that
            elevates every occasion — right in the heart of Magodo.
          </p>

          {/* CTAs */}
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <Link href="/reservations" className="btn-primary">
              Reserve a Table
            </Link>
            <Link href="/menu" className="btn-secondary">
              Explore Menu
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={cn(
            "absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 transition-all duration-700 delay-700",
            loaded ? "opacity-100" : "opacity-0"
          )}
        >
          <span className="text-[9px] font-semibold tracking-[0.3em] uppercase text-charcoal-400 rotate-90 origin-center mb-2">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-charcoal-500 to-transparent" />
        </div>
      </div>

      {/* Bottom content bar */}
      <div className="relative border-t border-cream-200/10 bg-charcoal-950/60 backdrop-blur-sm">
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <div className="text-center sm:text-left">
              <p className="text-[9px] font-semibold tracking-[0.2em] uppercase text-gold-500">
                Opening Hours
              </p>
              <p className="text-xs text-cream-300 mt-0.5">
                Mon–Fri {BUSINESS.hours.weekdays}
              </p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-charcoal-700" />
            <div className="text-center sm:text-left hidden sm:block">
              <p className="text-[9px] font-semibold tracking-[0.2em] uppercase text-gold-500">
                Weekend
              </p>
              <p className="text-xs text-cream-300 mt-0.5">
                {BUSINESS.hours.weekends}
              </p>
            </div>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-green-400 hover:text-green-300 transition-colors duration-200"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            WhatsApp for Enquiries
          </a>
        </div>
      </div>
    </section>
  );
}
