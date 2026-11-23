"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { CALL_URL, WHATSAPP_URL } from "@/lib/constants";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-500",
        visible ? "translate-y-0" : "translate-y-full"
      )}
      role="navigation"
      aria-label="Quick mobile dining actions"
    >
      <div className="bg-charcoal-900/98 backdrop-blur-md border-t border-charcoal-700/80 grid grid-cols-3 divide-x divide-charcoal-800 shadow-2xl">
        <a
          href={CALL_URL}
          className="flex flex-col items-center justify-center gap-1 py-3 text-cream-200 hover:bg-charcoal-800 active:bg-charcoal-700 transition-colors"
          aria-label="Call Prados Restaurant: 0904 169 5561"
        >
          <Phone size={17} className="text-gold-500" />
          <span className="text-[10px] font-bold tracking-wider uppercase">
            Call Now
          </span>
        </a>

        <Link
          href="/reservations"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-gold-500 text-charcoal-900 hover:bg-gold-400 active:bg-gold-600 transition-colors shadow-inner"
          aria-label="Reserve a table at Prados"
        >
          <CalendarCheck size={17} />
          <span className="text-[10px] font-bold tracking-wider uppercase">
            Reserve
          </span>
        </Link>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-cream-200 hover:bg-charcoal-800 active:bg-charcoal-700 transition-colors"
          aria-label="Chat with Prados concierge on WhatsApp"
        >
          <MessageCircle size={17} className="text-emerald-400" />
          <span className="text-[10px] font-bold tracking-wider uppercase">
            WhatsApp
          </span>
        </a>
      </div>
      {/* iOS safe area */}
      <div className="bg-charcoal-900 h-safe-area-inset-bottom" />
    </div>
  );
}
