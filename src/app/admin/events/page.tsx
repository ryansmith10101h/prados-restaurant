"use client";

import { useState } from "react";
import { Plus, Calendar, Clock } from "lucide-react";

type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  category: string;
  isActive: boolean;
};

const initialEvents: EventItem[] = [
  {
    id: "e1",
    title: "Acoustic Afro-Soul & Dinner Night",
    date: "Every Thursday Evening",
    time: "7:00 PM – 11:00 PM",
    category: "Live Music",
    isActive: true,
  },
  {
    id: "e2",
    title: "Friday Highlife & Cocktails Social",
    date: "Every Friday",
    time: "8:00 PM – Late",
    category: "Weekend Lounge",
    isActive: true,
  },
  {
    id: "e3",
    title: "Sunday Family Brunch & Grill Out",
    date: "Sundays",
    time: "1:00 PM – 6:00 PM",
    category: "Special Dining",
    isActive: true,
  },
];

export default function AdminEventsPage() {
  const [events, setEvents] = useState(initialEvents);

  const toggleEvent = (id: string) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? { ...e, isActive: !e.isActive } : e))
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl text-cream-100">Events Management</h1>
          <p className="text-xs text-charcoal-400 mt-1">
            Publish and manage weekly live performances, guest DJ sessions, and dining specials
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((evt) => (
          <div
            key={evt.id}
            className="card-dark p-6 rounded-lg border border-charcoal-800 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 bg-charcoal-900 px-2 py-0.5 rounded">
                  {evt.category}
                </span>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    evt.isActive
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-charcoal-800 text-charcoal-500"
                  }`}
                >
                  {evt.isActive ? "Published" : "Hidden"}
                </span>
              </div>
              <h3 className="font-display text-lg text-cream-100 mb-2">{evt.title}</h3>
              <p className="text-xs text-charcoal-300 flex items-center gap-1.5 mb-1">
                <Calendar size={13} className="text-gold-500" />
                {evt.date}
              </p>
              <p className="text-xs text-charcoal-400 flex items-center gap-1.5">
                <Clock size={13} className="text-gold-500" />
                {evt.time}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-charcoal-800/80 flex justify-end">
              <button
                onClick={() => toggleEvent(evt.id)}
                className="text-xs px-3 py-1.5 rounded bg-charcoal-800 text-charcoal-300 hover:text-white"
              >
                {evt.isActive ? "Hide Event" : "Publish Event"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
