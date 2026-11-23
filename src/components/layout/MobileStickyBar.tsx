"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { CALL_URL, WHATSAPP_URL } from "@/lib/constants";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-500",
        visible ? "translate-y-0" : "translate-y-full"
      )}
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="bg-charcoal-900 border-t border-charcoal-700 grid grid-cols-3 divide-x divide-charcoal-700">
        <a
          href={CALL_URL}
          className="flex flex-col items-center justify-center gap-1 py-3.5 text-cream-200 hover:bg-charcoal-800 active:bg-charcoal-700 transition-colors duration-150"
          aria-label="Call Prados Restaurant"
        >
          <Phone size={18} className="text-gold-500" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">
            Call Now
          </span>
        </a>
        <Link
          href="/reservations"
          className="flex flex-col items-center justify-center gap-1 py-3.5 bg-gold-500 text-charcoal-900 hover:bg-gold-400 active:bg-gold-600 transition-colors duration-150"
          aria-label="Reserve a table at Prados"
        >
          <CalendarCheck size={18} />
          <span className="text-[10px] font-semibold tracking-wider uppercase">
            Reserve
          </span>
        </Link>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3.5 text-cream-200 hover:bg-charcoal-800 active:bg-charcoal-700 transition-colors duration-150"
          aria-label="WhatsApp Prados Restaurant"
        >
          <MessageCircle size={18} className="text-green-400" />
          <span className="text-[10px] font-semibold tracking-wider uppercase">
            WhatsApp
          </span>
        </a>
      </div>
      {/* Safe area for iOS */}
      <div className="bg-charcoal-900 h-safe-area-inset-bottom" />
    </div>
  );
}
