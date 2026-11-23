import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function EventsSection() {
  // Events are managed via Supabase CMS
  // This section shows a placeholder state when no events are scheduled
  const hasEvents = false; // Will be driven by Supabase data on the events page

  return (
    <section
      className="section-pad bg-charcoal-900"
      aria-labelledby="events-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="eyebrow">Events</span>
            </div>
            <h2
              id="events-heading"
              className="display-md text-cream-100 mb-6"
            >
              Live Music, Special{" "}
              <em className="text-gold-400 not-italic">Dinners</em> & More
            </h2>
            <p className="text-base text-charcoal-300 leading-relaxed mb-8">
              Prados comes alive with curated events — from live music nights and
              themed dinners to private celebrations and exclusive bar takeovers.
              Check back regularly for upcoming events, or follow us on social
              media to stay updated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/events" className="btn-primary">
                View All Events
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Book a Private Event
              </a>
            </div>
          </div>

          {/* Right — event types */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: "🎵",
                title: "Live Music Nights",
                description:
                  "Regular live performances from talented Lagos musicians and performers.",
              },
              {
                icon: "🍷",
                title: "Special Dinners",
                description:
                  "Curated dining experiences with themed menus and exclusive pairings.",
              },
              {
                icon: "🎉",
                title: "Private Events",
                description:
                  "Birthdays, corporate events, intimate celebrations — all handled with care.",
              },
              {
                icon: "🌙",
                title: "Weekend Experiences",
                description:
                  "Friday and Saturday nights at Prados — the best way to end the week.",
              },
            ].map((type) => (
              <div
                key={type.title}
                className="card-dark p-6 hover:border-charcoal-600 transition-colors duration-200"
              >
                <span className="text-2xl mb-3 block" role="img" aria-hidden>
                  {type.icon}
                </span>
                <h3 className="font-display text-sm font-semibold text-cream-100 mb-2">
                  {type.title}
                </h3>
                <p className="text-xs text-charcoal-400 leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
