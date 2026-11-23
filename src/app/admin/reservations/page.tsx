"use client";

import { useState } from "react";
import {
  CalendarCheck,
  CheckCircle,
  XCircle,
  MessageSquare,
  Search,
  Filter,
} from "lucide-react";

type Reservation = {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  occasion: string | null;
  special_request: string | null;
  status: "pending" | "confirmed" | "cancelled";
};

const mockReservations: Reservation[] = [
  {
    id: "r1",
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
    id: "r2",
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
    id: "r3",
    name: "Dr. Femi Adeleke",
    phone: "0909 555 1212",
    email: "femi.adeleke@example.com",
    date: "2026-11-26",
    time: "13:00",
    guests: 6,
    occasion: "Business Lunch",
    special_request: "Quiet area for meeting discussion.",
    status: "pending",
  },
  {
    id: "r4",
    name: "Kelechi Nnamdi",
    phone: "0802 334 9911",
    email: "kelechi@gmail.com",
    date: "2026-11-20",
    time: "21:00",
    guests: 8,
    occasion: "Anniversary",
    special_request: null,
    status: "confirmed",
  },
];

export default function AdminReservationsPage() {
  const [list, setList] = useState(mockReservations);
  const [filter, setFilter] = useState<"all" | "pending" | "confirmed" | "cancelled">("all");
  const [search, setSearch] = useState("");

  const updateStatus = (id: string, newStatus: "pending" | "confirmed" | "cancelled") => {
    setList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const filtered = list.filter((r) => {
    const matchesFilter = filter === "all" || r.status === filter;
    const matchesSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.phone.includes(search) ||
      r.email.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl text-cream-100">Table Bookings & Requests</h1>
          <p className="text-xs text-charcoal-400 mt-1">
            Manage incoming guest reservation inquiries and contact customers directly
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center bg-charcoal-900 p-4 rounded-lg border border-charcoal-800">
        <div className="flex items-center gap-2 overflow-x-auto">
          {(["all", "pending", "confirmed", "cancelled"] as const).map((st) => (
            <button
              key={st}
              onClick={() => setFilter(st)}
              className={`px-3 py-1.5 rounded text-xs font-semibold uppercase tracking-wider ${
                filter === st
                  ? "bg-gold-500 text-charcoal-950 font-bold"
                  : "bg-charcoal-800 text-charcoal-400 hover:text-cream-200"
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        <div className="relative max-w-xs w-full">
          <input
            type="text"
            placeholder="Search by name or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field py-2 text-xs"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-charcoal-900 border border-charcoal-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-charcoal-950 text-charcoal-400 uppercase tracking-wider border-b border-charcoal-800">
              <tr>
                <th className="py-3 px-6">Guest</th>
                <th className="py-3 px-6">Schedule</th>
                <th className="py-3 px-6">Party Size</th>
                <th className="py-3 px-6">Occasion / Notes</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal-800">
              {filtered.map((res) => {
                const whatsappHref = `https://wa.me/234${res.phone.replace(/[^0-9]/g, "").slice(-10)}?text=${encodeURIComponent(
                  `Hello ${res.name}, this is Prados Restaurant regarding your table reservation for ${res.guests} guests on ${res.date} at ${res.time}.`
                )}`;

                return (
                  <tr key={res.id} className="hover:bg-charcoal-800/40">
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
                      <p className="text-charcoal-400">{res.special_request || "None"}</p>
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
                        title="Chat with Customer on WhatsApp"
                      >
                        <MessageSquare size={13} className="inline" />
                      </a>
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
                        title="Cancel Booking"
                      >
                        <XCircle size={13} className="inline" />
                      </button>
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
