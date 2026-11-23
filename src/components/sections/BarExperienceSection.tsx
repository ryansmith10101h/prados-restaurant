import Image from "next/image";
import Link from "next/link";
import { Wine, Sparkles, GlassWater } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

// Specific signature drinks required by the master prompt
const signatureBarOfferings = [
  {
    name: "The Magodo Sunset",
    type: "Signature Cocktail",
    price: 8000,
    description:
      "Aged rum, fresh passion fruit puree, hibiscus liquor, cold-pressed lime juice, and aromatic Angostura bitters.",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80",
    badge: "House Favorite",
  },
  {
    name: "Smoked Mezcal Paloma",
    type: "Craft Cocktail",
    price: 9500,
    description:
      "Artisanal mezcal, fresh pink grapefruit, agave nectar, lime, smoked rosemary sprig, and black volcanic salt rim.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
    badge: "Smoked Spirit",
  },
  {
    name: "Prados Old Fashioned",
    type: "Classic Twist",
    price: 9000,
    description:
      "Bourbon whiskey infused with dried orange peel and Nigerian whole nutmeg, stirred slowly over hand-carved ice.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80",
    badge: "Spiced Bourbon",
  },
  {
    name: "Zobo Bliss Craft Mocktail",
    type: "Zero-Proof Mocktail",
    price: 4500,
    description:
      "House-steeped organic dried roselle hibiscus flowers, pineapple peel, fresh ginger, cloves, and sparkling mineral water.",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80",
    badge: "Non-Alcoholic",
  },
  {
    name: "Premium Champagne & Vintage Wines",
    type: "Cellared Reserve",
    price: 65000,
    description:
      "Carefully selected cellared vintages, prosecco, and French champagne available by glass or bottle for your celebrations.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
    badge: "Wine & Bubbles",
  },
];

export default function BarExperienceSection() {
  return (
    <section
      id="bar"
      className="section-pad bg-charcoal-900 border-t border-charcoal-800"
      aria-labelledby="bar-heading"
    >
      <div className="container-site">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="divider-gold" />
              <span className="eyebrow">The Bar Experience</span>
            </div>
            <h2
              id="bar-heading"
              className="display-md text-cream-100"
            >
              The Art of the Pour,{" "}
              <span className="text-gold-400 font-normal italic">Curated Cocktails & Cellar</span>
            </h2>
          </div>
          <p className="text-sm text-charcoal-300 max-w-md leading-relaxed font-light">
            Prados Bar is a sophisticated Magodo destination in its own right. Whether unwinding after work, celebrating with bottle service, or discovering our zero-proof botanicals, every pour is crafted with intention.
          </p>
        </div>

        {/* 5 Distinct Bar Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureBarOfferings.map((drink, idx) => (
            <article
              key={drink.name}
              className={`bg-charcoal-950 border border-charcoal-800 rounded-lg overflow-hidden group hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-charcoal-900">
                  <Image
                    src={drink.image}
                    alt={drink.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-80" />
                  
                  <div className="absolute top-3 left-3 bg-charcoal-950/90 border border-charcoal-700 text-gold-400 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                    {drink.type}
                  </div>

                  <div className="absolute bottom-3 right-3 bg-charcoal-950/90 border border-charcoal-700 text-gold-400 font-sans font-bold text-xs px-2.5 py-1 rounded">
                    {formatPrice(drink.price)}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-display text-xl text-cream-100 group-hover:text-gold-400 transition-colors">
                      {drink.name}
                    </h3>
                  </div>
                  <p className="text-xs text-charcoal-300 leading-relaxed font-light mb-4">
                    {drink.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-charcoal-800/60 flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-wider text-charcoal-400 uppercase">
                  {drink.badge}
                </span>
                <Link
                  href={`/reservations?drink=${encodeURIComponent(drink.name)}`}
                  className="text-xs font-semibold text-gold-400 hover:text-gold-300 uppercase tracking-wider transition-colors"
                >
                  Reserve Bar Seating &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bar Features Banner */}
        <div className="mt-14 p-8 rounded-lg bg-charcoal-950 border border-charcoal-800 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gold-500 mb-1">
              Mixology
            </p>
            <p className="font-display text-base text-cream-100">Bespoke Spirits & Syrups</p>
            <p className="text-xs text-charcoal-400 mt-0.5">Fresh botanicals & local herbs</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gold-500 mb-1">
              Wine Reserve
            </p>
            <p className="font-display text-base text-cream-100">Old & New World Cellar</p>
            <p className="text-xs text-charcoal-400 mt-0.5">Champagnes & chilled whites</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gold-500 mb-1">
              Zero-Proof
            </p>
            <p className="font-display text-base text-cream-100">Artisan Mocktails</p>
            <p className="text-xs text-charcoal-400 mt-0.5">Zobo bliss & pressed juices</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gold-500 mb-1">
              Bar Seating
            </p>
            <p className="font-display text-base text-cream-100">Lounge & Counter</p>
            <p className="text-xs text-charcoal-400 mt-0.5">Open until 12 AM weekends</p>
          </div>
        </div>
      </div>
    </section>
  );
}
