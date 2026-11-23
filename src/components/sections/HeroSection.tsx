"use client";

import Link from "next/link";
import { MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";
import { BUSINESS, WHATSAPP_URL, getPradosOpenStatus } from "@/lib/constants";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState({ isOpen: true, statusText: "Open Today", nextChange: "From 12 PM" });

  useEffect(() => {
    setStatus(getPradosOpenStatus());
    const timer = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-end overflow-hidden"
      aria-label="Hero — Prados Restaurant & Bar Magodo"
    >
      {/* Background — authentic high-resolution restaurant dining and cocktail atmosphere */}
      <div className="absolute inset-0 bg-charcoal-950">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-100"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=85&auto=format&fit=crop')`,
          }}
          role="img"
          aria-label="Contemporary dining room and bar lighting at Prados Restaurant & Bar Magodo"
        />
        {/* Multilayered ambient shading for editorial contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/40 to-transparent" />
      </div>

      {/* Subtle top bronze accent border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      {/* Hero Content */}
      <div className="relative container-site pb-16 md:pb-24 pt-36 lg:pt-40">
        <div className="max-w-4xl">
          {/* Location & Status Bar */}
          <div
            className={cn(
              "flex flex-wrap items-center gap-3 sm:gap-4 mb-6 transition-all duration-700",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-900/90 border border-charcoal-700/80 text-xs text-gold-400">
              <MapPin size={13} className="shrink-0 text-gold-500" />
              <span className="font-semibold tracking-wider uppercase text-[11px]">
                51 Alh. Bashorun Shittu Ave, Magodo Phase 2, Lagos
              </span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-900/80 border border-charcoal-800 text-xs text-cream-200">
              <span
                className={cn(
                  "w-2 h-2 rounded-full",
                  status.isOpen ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                )}
              />
              <span className="font-medium text-[11px]">{status.statusText} • {status.nextChange}</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1
            className={cn(
              "font-display text-cream-100 leading-[0.94] tracking-tight mb-6 md:mb-8 transition-all duration-700 delay-150",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              "text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
            )}
          >
            Where Contemporary
            <br />
            <span className="text-gold-400 font-normal italic">Nigerian Dining</span>
            <br />
            Meets Magodo Nightlife.
          </h1>

          {/* Subheading */}
          <p
            className={cn(
              "text-base md:text-xl text-cream-200/90 max-w-2xl leading-relaxed mb-8 md:mb-10 transition-all duration-700 delay-300 font-light",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            A premier destination for contemporary Nigerian cuisine, charcoal grills, bespoke cocktails, family dining, and vibrant weekend celebrations.
          </p>

          {/* Three Primary CTAs */}
          <div
            className={cn(
              "flex flex-col sm:flex-row flex-wrap gap-4 transition-all duration-700 delay-500",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            <Link href="/reservations" className="btn-primary shadow-xl">
              Reserve a Table
            </Link>
            <Link href="/menu" className="btn-secondary">
              Explore Menu
            </Link>
            <Link
              href="/#about"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-cream-300 hover:text-gold-400 font-medium text-xs tracking-wider uppercase transition-colors"
            >
              Discover Prados <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Verified Schedule & Open Hours Strip */}
      <div className="relative border-t border-charcoal-800 bg-charcoal-950/90 backdrop-blur-md">
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2">
              <Clock size={15} className="text-gold-500 shrink-0" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gold-400">
                  Operating Hours
                </p>
                <p className="text-xs text-cream-200">
                  Mon–Fri: 12 PM – 11 PM | Sat–Sun: 12 PM – 12 AM
                </p>
              </div>
            </div>
            <div className="hidden lg:block text-xs text-charcoal-400 border-l border-charcoal-800 pl-6">
              * Kitchen closes 1 hour before venue closing
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <Sparkles size={14} />
            WhatsApp Concierge Booking
          </a>
        </div>
      </div>
    </section>
  );
}
