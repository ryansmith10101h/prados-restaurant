import Image from "next/image";
import Link from "next/link";
import { Sparkles, HeartHandshake, Flame, Wine } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function IntroSection() {
  return (
    <section
      id="about"
      className="section-pad bg-charcoal-900 border-t border-charcoal-800"
      aria-labelledby="intro-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Side */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-gold" />
              <span className="eyebrow">Our Story & Ethos</span>
            </div>
            
            <h2
              id="intro-heading"
              className="display-md text-cream-100 mb-6"
            >
              The Warmth of Nigerian Hospitality,{" "}
              <span className="text-gold-400 font-normal italic">Elevated for Contemporary Dining.</span>
            </h2>

            <p className="text-base text-charcoal-300 leading-relaxed mb-5 font-light">
              Nestled at 51 Alh. Bashorun Shittu Avenue in Magodo Phase 2, Prados was conceived as an intentional sanctuary for discerning food lovers, cocktail enthusiasts, families, and friends who cherish meaningful gatherings.
            </p>

            <p className="text-base text-charcoal-300 leading-relaxed mb-8 font-light">
              Our culinary philosophy bridges time-honored Nigerian flavor profiles—charcoal smoke, aromatic yaji spices, slow-simmered scent leaf reductions—with modern plating and rigorous culinary craftsmanship. Every dish is cooked to order using fresh, responsibly sourced ingredients.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="p-4 rounded bg-charcoal-950/80 border border-charcoal-800">
                <div className="flex items-center gap-2.5 text-gold-400 mb-1.5">
                  <HeartHandshake size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Warm Service</span>
                </div>
                <p className="text-xs text-charcoal-300 font-light">
                  Attentive, respectful hospitality that makes every guest feel like family.
                </p>
              </div>

              <div className="p-4 rounded bg-charcoal-950/80 border border-charcoal-800">
                <div className="flex items-center gap-2.5 text-gold-400 mb-1.5">
                  <Flame size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Charcoal Grills</span>
                </div>
                <p className="text-xs text-charcoal-300 font-light">
                  Live firewood grills and suya spice encrusting for genuine smoky depth.
                </p>
              </div>

              <div className="p-4 rounded bg-charcoal-950/80 border border-charcoal-800">
                <div className="flex items-center gap-2.5 text-gold-400 mb-1.5">
                  <Wine size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Curated Bar</span>
                </div>
                <p className="text-xs text-charcoal-300 font-light">
                  Signature mixology, artisanal mocktails, and an Old & New World wine cellar.
                </p>
              </div>

              <div className="p-4 rounded bg-charcoal-950/80 border border-charcoal-800">
                <div className="flex items-center gap-2.5 text-gold-400 mb-1.5">
                  <Sparkles size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Social Gatherings</span>
                </div>
                <p className="text-xs text-charcoal-300 font-light">
                  Curated live acoustics, weekend highlife lounge, and private celebrations.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/reservations" className="btn-primary">
                Reserve Your Table
              </Link>
              <Link href="/about" className="btn-secondary">
                Read Full Philosophy
              </Link>
            </div>
          </div>

          {/* Image side — editorial asymmetric layout */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-charcoal-800 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000&q=85&auto=format&fit=crop"
                alt="Contemporary Nigerian dining presentation at Prados Restaurant Magodo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-gold-500 text-charcoal-900 p-5 rounded shadow-xl max-w-[200px]">
              <p className="font-display text-4xl font-bold leading-none mb-1">
                51
              </p>
              <p className="text-xs font-bold leading-tight">
                Alh. Bashorun Shittu Avenue
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-charcoal-800 mt-1">
                Magodo Phase 2, Lagos
              </p>
            </div>

            {/* Second image — staggered cocktail pour */}
            <div className="absolute -top-6 -right-4 sm:-right-6 w-36 h-48 rounded overflow-hidden border-2 border-charcoal-700 shadow-xl hidden sm:block">
              <Image
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&q=85&auto=format&fit=crop"
                alt="Bespoke craft cocktail crafted at Prados Bar"
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
