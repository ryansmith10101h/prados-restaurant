"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { BUSINESS, CALL_URL, getPradosOpenStatus } from "@/lib/constants";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Bar", href: "/#bar" },
  { label: "Events", href: "/events" },
  { label: "Private Events", href: "/private-events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reservations", href: "/reservations" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState<{ isOpen: boolean; statusText: string; nextChange: string }>({
    isOpen: true,
    statusText: "Open Today",
    nextChange: "From 12 PM",
  });

  useEffect(() => {
    setOpenStatus(getPradosOpenStatus());
    const interval = setInterval(() => {
      setOpenStatus(getPradosOpenStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-charcoal-950/95 backdrop-blur-md border-b border-charcoal-800 shadow-xl py-3"
            : "bg-gradient-to-b from-charcoal-950/90 via-charcoal-950/40 to-transparent py-4"
        )}
        role="banner"
      >
        <div className="container-site flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none group"
            aria-label="Prados Restaurant & Bar — Homepage"
          >
            <span className="font-display text-2xl font-semibold tracking-wider text-cream-100 group-hover:text-gold-400 transition-colors duration-300">
              PRADOS
            </span>
            <span className="text-[8px] font-medium tracking-[0.3em] uppercase text-gold-500/90 mt-0.5">
              Restaurant & Bar
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden xl:flex items-center gap-7"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || (link.href.startsWith("/#") && pathname === "/");
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-200 py-1 border-b",
                    isActive
                      ? "text-gold-400 border-gold-400/80"
                      : "text-cream-300/90 border-transparent hover:text-cream-100 hover:border-gold-500/50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Hours & CTA */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Live Open Status Indicator */}
            <div className="hidden 2xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-900/90 border border-charcoal-800 text-[11px]">
              <span
                className={cn(
                  "w-2 h-2 rounded-full",
                  openStatus.isOpen ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                )}
              />
              <span className="font-medium text-cream-200">{openStatus.statusText}</span>
              <span className="text-charcoal-400">• {openStatus.nextChange}</span>
            </div>

            <a
              href={CALL_URL}
              className="flex items-center gap-2 text-xs text-cream-300 hover:text-gold-400 transition-colors duration-200"
              aria-label={`Call Prados: ${BUSINESS.contact.phoneFormatted}`}
            >
              <Phone size={13} className="text-gold-500" />
              <span className="font-medium tracking-wider">{BUSINESS.contact.phoneFormatted}</span>
            </a>

            <Link
              href="/reservations"
              className="btn-primary text-xs px-5 py-2.5 shadow-md"
            >
              Reserve a Table
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 xl:hidden">
            <Link
              href="/reservations"
              className="btn-primary text-[11px] px-3.5 py-2 sm:hidden"
            >
              Reserve
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-cream-200 hover:text-gold-400 transition-colors duration-200"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-0 z-40 bg-charcoal-950 flex flex-col justify-between transition-all duration-300 xl:hidden overflow-y-auto pt-24 pb-12 px-6",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!menuOpen}
      >
        <div className="container-site max-w-lg mx-auto w-full">
          {/* Live Status Pill in Mobile */}
          <div className="mb-6 flex items-center justify-between p-3 rounded bg-charcoal-900 border border-charcoal-800 text-xs">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "w-2 h-2 rounded-full",
                  openStatus.isOpen ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                )}
              />
              <span className="font-semibold text-cream-100">{openStatus.statusText}</span>
              <span className="text-charcoal-400">({openStatus.nextChange})</span>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-gold-500">Magodo Phase 2</span>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col gap-1 border-y border-charcoal-800 py-3" aria-label="Mobile links">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl text-cream-100 hover:text-gold-400 transition-colors py-2.5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-charcoal-500">&rarr;</span>
              </Link>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/reservations"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full text-center text-sm py-3.5"
            >
              Reserve a Table
            </Link>
            <a
              href={CALL_URL}
              className="btn-secondary w-full text-center text-sm py-3.5 flex items-center justify-center gap-2"
            >
              <Phone size={15} />
              Call {BUSINESS.contact.phoneFormatted}
            </a>
          </div>

          {/* Address & Hours Summary */}
          <div className="mt-8 pt-6 border-t border-charcoal-900 text-center">
            <p className="text-xs text-cream-300 font-medium">{BUSINESS.address.full}</p>
            <p className="text-[11px] text-charcoal-400 mt-1 flex items-center justify-center gap-1">
              <Clock size={12} className="text-gold-500" />
              {BUSINESS.hours.scheduleText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
