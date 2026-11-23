"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CalendarCheck,
  Clock,
  CheckCircle,
  XCircle,
  MessageSquare,
  Phone,
  Eye,
  UtensilsCrossed,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

// Mock reservation data representing active bookings in Supabase
const initialReservations = [
  {
    id: "res-01",
    name: "Emeka Okonkwo",
    phone: "0803 123 4567",
    email: "emeka.o@example.com",
    date: "2026-11-25",
    time: "19:30",
    guests: 4,
    occasion: "Birthday Celebration",
    special_request: "Quiet corner booth, complimentary dessert candle if possible.",
    status: "pending",
  },
  {
    id: "res-02",
    name: "Amina Bello",
    phone: "0812 987 6543",
    email: "amina.bello@example.com",
    date: "2026-11-24",
    time: "20:00",
    guests: 2,
    occasion: "Date Night",
    special_request: "Window view preferred.",
    status: "confirmed",
  },
  {
    id: "res-03",
    name: "Dr. Femi Adeleke",
    phone: "0909 555 1212",
    email: "femi.adeleke@example.com",
    date: "2026-11-26",
    time: "13:00",
    guests: 6,
    occasion: "Business Lunch",
    special_request: "Separate receipts needed.",
    status: "pending",
  },
];

export default function AdminOverviewPage() {
  const [reservations, setReservations] = useState(initialReservations);

  const updateStatus = (id: string, newStatus: string) => {
    setReservations((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
  };

  const pendingCount = reservations.filter((r) => r.status === "pending").length;
  const confirmedCount = reservations.filter((r) => r.status === "confirmed").length;

  return (
    <div className="space-y-8">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="card-dark p-5 rounded-lg border border-charcoal-800">
          <div className="flex items-center justify-between text-charcoal-400 mb-2">
            <span className="text-xs uppercase tracking-wider font-semibold">Pending Requests</span>
            <Clock size={16} className="text-amber-400" />
          </div>
          <p className="text-3xl font-display text-cream-100">{pendingCount}</p>
          <span className="text-[11px] text-amber-400 font-medium">Requires host action</span>
        </div>

        <div className="card-dark p-5 rounded-lg border border-charcoal-800">
          <div className="flex items-center justify-between text-charcoal-400 mb-2">
            <span className="text-xs uppercase tracking-wider font-semibold">Confirmed Bookings</span>
            <CheckCircle size={16} className="text-emerald-400" />
          </div>
          <p className="text-3xl font-display text-cream-100">{confirmedCount}</p>
          <span className="text-[11px] text-emerald-400 font-medium">Ready for service</span>
        </div>

        <div className="card-dark p-5 rounded-lg border border-charcoal-800">
          <div className="flex items-center justify-between text-charcoal-400 mb-2">
            <span className="text-xs uppercase tracking-wider font-semibold">Active Menu Dishes</span>
            <UtensilsCrossed size={16} className="text-gold-400" />
          </div>
          <p className="text-3xl font-display text-cream-100">18</p>
          <span className="text-[11px] text-charcoal-400">Across 7 categories</span>
        </div>

        <div className="card-dark p-5 rounded-lg border border-charcoal-800">
          <div className="flex items-center justify-between text-charcoal-400 mb-2">
            <span className="text-xs uppercase tracking-wider font-semibold">Live Events</span>
            <CalendarCheck size={16} className="text-blue-400" />
          </div>
          <p className="text-3xl font-display text-cream-100">3</p>
          <span className="text-[11px] text-blue-400">Weekly music & brunch</span>
        </div>
      </div>

      {/* Recent Reservations Table */}
      <div className="bg-charcoal-900 border border-charcoal-800 rounded-lg overflow-hidden">
        <div className="p-6 border-b border-charcoal-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-lg text-cream-100">Recent Table Reservation Requests</h3>
            <p className="text-xs text-charcoal-400 mt-0.5">
              Review and confirm guest dining inquiries directly
            </p>
          </div>
          <Link
            href="/admin/reservations"
            className="text-xs font-semibold text-gold-400 hover:text-gold-300 uppercase tracking-wider"
          >
            View All Bookings &rarr;
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-charcoal-950 text-charcoal-400 uppercase tracking-wider border-b border-charcoal-800">
              <tr>
                <th className="py-3 px-6">Guest Info</th>
                <th className="py-3 px-6">Date & Time</th>
                <th className="py-3 px-6">Guests</th>
                <th className="py-3 px-6">Occasion & Notes</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal-800">
              {reservations.map((res) => {
                const whatsappHref = `https://wa.me/234${res.phone.replace(/[^0-9]/g, "").slice(-10)}?text=${encodeURIComponent(
                  `Hello ${res.name}, this is Prados Restaurant regarding your table reservation for ${res.guests} guests on ${res.date} at ${res.time}.`
                )}`;

                return (
                  <tr key={res.id} className="hover:bg-charcoal-800/40 transition-colors">
                    <td className="py-4 px-6">
                      <p className="font-semibold text-cream-100">{res.name}</p>
                      <p className="text-charcoal-400">{res.phone}</p>
                      <p className="text-charcoal-500 text-[11px]">{res.email}</p>
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-medium text-cream-200">{res.date}</p>
                      <p className="text-gold-400">{res.time}</p>
                    </td>
                    <td className="py-4 px-6 font-semibold text-cream-200">
                      {res.guests} {res.guests === 1 ? "Guest" : "Guests"}
                    </td>
                    <td className="py-4 px-6 max-w-xs">
                      {res.occasion && (
                        <span className="inline-block px-2 py-0.5 bg-charcoal-800 text-gold-400 rounded text-[10px] uppercase font-bold mb-1">
                          {res.occasion}
                        </span>
                      )}
                      <p className="text-charcoal-400 truncate">{res.special_request || "None"}</p>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          res.status === "confirmed"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : res.status === "cancelled"
                            ? "bg-red-500/10 text-red-400 border border-red-500/20"
                            : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        }`}
                      >
                        {res.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right space-x-2">
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-p p-1.5 rounded bg-green-950/60 text-green-400 hover:bg-green-900 border border-green-800/50"
                        title="Chat on WhatsApp"
                      >
                        <MessageSquare size={13} className="inline" />
                      </a>
                      {res.status === "pending" && (
                        <>
                          <button
                            onClick={() => updateStatus(res.id, "confirmed")}
                            className="p-1.5 rounded bg-emerald-950/60 text-emerald-400 hover:bg-emerald-900 border border-emerald-800/50"
                            title="Confirm Booking"
                          >
                            <CheckCircle size={13} className="inline" />
                          </button>
                          <button
                            onClick={() => updateStatus(res.id, "cancelled")}
                            className="p-1.5 rounded bg-red-950/60 text-red-400 hover:bg-red-900 border border-red-800/50"
                            title="Decline"
                          >
                            <XCircle size={13} className="inline" />
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
