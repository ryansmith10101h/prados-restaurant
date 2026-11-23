"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { BUSINESS, CALL_URL, WHATSAPP_URL } from "@/lib/constants";

const navLinks = [
  { label: "Menu", href: "/menu" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reservations", href: "/reservations" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-charcoal-950/95 backdrop-blur-md border-b border-charcoal-800 py-3"
            : "bg-transparent py-5"
        )}
        role="banner"
      >
        <div className="container-site flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none group"
            aria-label="Prados Restaurant & Bar — Home"
          >
            <span className="font-display text-xl font-semibold text-cream-100 tracking-wide group-hover:text-gold-400 transition-colors duration-300">
              Prados
            </span>
            <span className="text-[9px] font-medium tracking-[0.25em] uppercase text-gold-500/80">
              Restaurant & Bar
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-[0.1em] uppercase text-cream-300 hover:text-gold-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={CALL_URL}
              className="flex items-center gap-2 text-xs text-cream-400 hover:text-cream-100 transition-colors duration-200"
              aria-label={`Call Prados: ${BUSINESS.contact.phoneFormatted}`}
            >
              <Phone size={13} />
              <span className="font-medium">{BUSINESS.contact.phoneFormatted}</span>
            </a>
            <Link
              href="/reservations"
              className="btn-primary text-xs px-5 py-2.5"
            >
              Reserve a Table
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-cream-200 hover:text-gold-400 transition-colors duration-200"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 bg-charcoal-950 flex flex-col transition-all duration-300 lg:hidden",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!menuOpen}
      >
        <div className="container-site pt-24 pb-10 flex flex-col h-full">
          <nav
            className="flex flex-col gap-1 flex-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "font-display text-3xl font-medium text-cream-100 hover:text-gold-400 transition-all duration-200 py-3 border-b border-charcoal-800",
                  "transform transition-transform",
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                )}
                style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/reservations"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full text-center text-sm"
            >
              Reserve a Table
            </Link>
            <a
              href={CALL_URL}
              className="btn-secondary w-full text-center text-sm"
            >
              <Phone size={15} />
              {BUSINESS.contact.phoneFormatted}
            </a>
          </div>

          <p className="mt-6 text-xs text-charcoal-400 text-center">
            {BUSINESS.address.full}
          </p>
        </div>
      </div>
    </>
  );
}
