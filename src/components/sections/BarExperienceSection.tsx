import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";

const drinks = [
  {
    name: "Signature Cocktails",
    description:
      "Our bartenders craft bespoke cocktails inspired by Lagos life — bold, balanced and beautifully presented.",
    image:
      "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Curated Wine Selection",
    description:
      "A thoughtful wine list spanning the Old and New World — something for every occasion.",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80&auto=format&fit=crop",
  },
];

export default function BarExperienceSection() {
  return (
    <section
      className="section-pad bg-charcoal-900"
      aria-labelledby="bar-heading"
    >
      <div className="container-site">
        {/* Asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — text content (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="eyebrow">The Bar</span>
            </div>
            <h2
              id="bar-heading"
              className="display-md text-cream-100 mb-6"
            >
              The Art of{" "}
              <em className="text-gold-400 not-italic">the Pour</em>
            </h2>
            <p className="text-base text-charcoal-300 leading-relaxed mb-5">
              Prados Bar is a destination in its own right. Whether you are
              starting the evening with an aperitif, settling in for the night
              with cocktails, or simply unwinding after a long day — our bar
              team crafts every drink with intention.
            </p>
            <p className="text-base text-charcoal-300 leading-relaxed mb-8">
              Cocktails, wines, spirits, mocktails and more — all set against
              the warm, atmospheric backdrop of our bar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/menu#drinks" className="btn-outline-gold">
                View Drinks Menu
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Reserve for the Bar →
              </a>
            </div>
          </div>

          {/* Right — editorial image stack (3 cols) */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {drinks.map((drink, i) => (
              <div
                key={drink.name}
                className={`relative overflow-hidden group ${
                  i === 0 ? "sm:mt-0" : "sm:mt-10"
                }`}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={drink.image}
                    alt={drink.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal-950/80" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-base text-cream-100 mb-1">
                      {drink.name}
                    </h3>
                    <p className="text-xs text-charcoal-300 leading-relaxed">
                      {drink.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Atmosphere callout bar */}
        <div className="mt-16 md:mt-20 p-8 md:p-10 border border-charcoal-700 bg-charcoal-950">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Open Daily", value: "From 12 PM" },
              { label: "Late Nights", value: "Weekends" },
              { label: "Live Entertainment", value: "Regularly" },
              { label: "Private Events", value: "By Request" },
            ].map((item) => (
              <div key={item.label} className="text-center md:text-left">
                <p className="text-[9px] font-semibold tracking-[0.2em] uppercase text-gold-500 mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-cream-200">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
