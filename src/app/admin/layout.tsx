"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarCheck,
  UtensilsCrossed,
  Sparkles,
  Settings,
  ExternalLink,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const adminNav = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "Reservations", href: "/admin/reservations", icon: CalendarCheck },
  { label: "Menu Items", href: "/admin/menu", icon: UtensilsCrossed },
  { label: "Events", href: "/admin/events", icon: Sparkles },
  { label: "Business Details", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-charcoal-950 text-cream-200 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-charcoal-900 border-b md:border-b-0 md:border-r border-charcoal-800 flex flex-col justify-between shrink-0">
        <div>
          {/* Logo & Brand */}
          <div className="p-6 border-b border-charcoal-800 flex items-center justify-between">
            <Link href="/admin" className="flex flex-col">
              <span className="font-display text-lg font-semibold text-cream-100">Prados</span>
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-gold-500">
                Management Console
              </span>
            </Link>
            <span className="px-2 py-0.5 text-[10px] bg-gold-500/10 text-gold-400 border border-gold-500/20 rounded">
              Admin
            </span>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-1.5" aria-label="Admin Navigation">
            {adminNav.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-gold-500 text-charcoal-950 font-semibold"
                      : "text-charcoal-300 hover:text-cream-100 hover:bg-charcoal-800"
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-charcoal-800 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3 py-2 text-xs text-charcoal-400 hover:text-gold-400 transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink size={14} />
              View Live Website
            </span>
            <ChevronRight size={12} />
          </Link>
          <Link
            href="/admin/login"
            className="flex items-center gap-2 px-3 py-2 text-xs text-red-400 hover:text-red-300 transition-colors"
          >
            <LogOut size={14} />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-charcoal-950">
        <header className="h-16 border-b border-charcoal-800 px-6 sm:px-10 flex items-center justify-between">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-cream-200">
            {adminNav.find((n) => n.href === pathname)?.label || "Admin Portal"}
          </h2>
          <div className="flex items-center gap-4 text-xs text-charcoal-400">
            <span>Location: <strong className="text-cream-200">Magodo Phase 2</strong></span>
          </div>
        </header>
        <div className="p-6 sm:p-10 flex-1 overflow-auto">{children}</div>
      </main>
    </div>
  );
}
