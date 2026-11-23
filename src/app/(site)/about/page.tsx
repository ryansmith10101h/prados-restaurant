import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, MapPin, Heart, Flame, Wine, Users } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Our Story & Culinary Philosophy | Prados Restaurant & Bar",
  description:
    "Learn about Prados Restaurant & Bar in Magodo Phase 2, Lagos. Contemporary Nigerian cuisine, charcoal grills, authentic hospitality, and a welcoming neighborhood sanctuary.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-charcoal-950 min-h-screen">
      <div className="container-site">
        {/* Header */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="divider-gold" />
            <span className="eyebrow">Our Story & Ethos</span>
          </div>
          <h1 className="display-lg text-cream-100 mb-6">
            Contemporary Nigerian Dining,{" "}
            <em className="text-gold-400 not-italic">Born in Magodo</em>
          </h1>
          <p className="text-base sm:text-lg text-charcoal-300 leading-relaxed font-light">
            Prados was founded on a simple conviction: that contemporary Nigerian dining should celebrate the rich soul of traditional recipes while embracing modern culinary artistry, thoughtful hospitality, and an atmosphere where people genuinely love to gather.
          </p>
        </div>

        {/* Story Section: Two Columns with Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-6 space-y-6 text-sm text-charcoal-300 font-light leading-relaxed">
            <h2 className="font-display text-2xl lg:text-3xl text-cream-100">
              A Culinary Sanctuary for Lagos
            </h2>
            <p>
              Located along 51 Alh. Bashorun Shittu Avenue in Magodo Phase 2, Prados provides a sanctuary away from the hustle of the expressway. Step through our doors into warm amber lighting, rich charcoal textures, and the unmistakable aroma of firewood jollof and live charcoal grills.
            </p>
            <p>
              Our kitchen team is passionate about the details: slow-simmering scotch bonnet and tomato relishes for hours, sourcing whole Atlantic croaker fish daily, encrusting prime New Zealand lamb cutlets with artisanal yaji spice from the north, and steeping organic roselle hibiscus flowers for our signature zero-proof drinks.
            </p>
            <p>
              Whether joining us for a family Sunday lunch, an anniversary date night, a relaxed cocktail with colleagues, or an energetic Friday highlife evening, our service reflects the enduring warmth of Nigerian welcome.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/menu" className="btn-primary text-xs">
                Explore The Menu
              </Link>
              <Link href="/reservations" className="btn-secondary text-xs">
                Reserve a Table
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-charcoal-800 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=85"
                alt="Prados Restaurant dining room in Magodo Phase 2 Lagos"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-500">Our Pillars</span>
            <h2 className="font-display text-2xl sm:text-3xl text-cream-100 mt-1">
              What Defines the Prados Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-charcoal-900 border border-charcoal-800 p-6 rounded-lg">
              <Flame className="text-gold-500 mb-4" size={24} />
              <h3 className="font-display text-lg text-cream-100 mb-2">Charcoal & Fire</h3>
              <p className="text-xs text-charcoal-300 font-light leading-relaxed">
                Authentic charcoal grills and firewood smoking methods that impart unforgettable depth to every cut.
              </p>
            </div>

            <div className="bg-charcoal-900 border border-charcoal-800 p-6 rounded-lg">
              <Wine className="text-gold-500 mb-4" size={24} />
              <h3 className="font-display text-lg text-cream-100 mb-2">Intentional Pour</h3>
              <p className="text-xs text-charcoal-300 font-light leading-relaxed">
                Cocktails inspired by Lagos energy, cellared vintage wines, and craft zero-proof mocktails.
              </p>
            </div>

            <div className="bg-charcoal-900 border border-charcoal-800 p-6 rounded-lg">
              <Heart className="text-gold-500 mb-4" size={24} />
              <h3 className="font-display text-lg text-cream-100 mb-2">Nigerian Hospitality</h3>
              <p className="text-xs text-charcoal-300 font-light leading-relaxed">
                Warm, attentive care from our hosts and servers who anticipate your needs and celebrate your milestones.
              </p>
            </div>

            <div className="bg-charcoal-900 border border-charcoal-800 p-6 rounded-lg">
              <Users className="text-gold-500 mb-4" size={24} />
              <h3 className="font-display text-lg text-cream-100 mb-2">Community & Social</h3>
              <p className="text-xs text-charcoal-300 font-light leading-relaxed">
                A gathering place for Magodo Phase 2 and greater Lagos—uniting friends, families, and creatives.
              </p>
            </div>
          </div>
        </div>

        {/* Location & Visiting Hours Banner */}
        <div className="p-8 lg:p-12 bg-charcoal-900 border border-gold-500/30 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin size={15} />
              Verified Location
            </div>
            <h3 className="font-display text-2xl text-cream-100 mb-1">
              51 Alh. Bashorun Shittu Avenue
            </h3>
            <p className="text-xs text-charcoal-300 font-light">
              Magodo Phase 2, Lagos, Nigeria • Open Mon–Fri 12 PM–11 PM | Sat–Sun 12 PM–12 AM
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={BUSINESS.maps.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs"
            >
              Get Directions
            </a>
            <Link href="/reservations" className="btn-secondary text-xs">
              Book Table
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
