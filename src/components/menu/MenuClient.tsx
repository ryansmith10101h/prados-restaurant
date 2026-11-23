"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { Sparkles, UtensilsCrossed, ArrowRight } from "lucide-react";
import { MENU_ITEMS, MENU_CATEGORIES } from "@/data/menu";

export default function MenuClient() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === "ALL" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-charcoal-950 min-h-screen">
      <div className="container-site">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="divider-gold" />
            <span className="eyebrow">Culinary & Bar Offerings</span>
          </div>
          <h1 className="display-lg text-cream-100 mb-6">
            The Digital <em className="text-gold-400 not-italic">Menu</em>
          </h1>
          <p className="text-base text-charcoal-300 leading-relaxed font-light">
            Every dish and beverage at Prados is created using premium ingredients, bold Nigerian flavor profiles, and refined culinary craftsmanship. All prices are verified in Nigerian Naira (₦).
          </p>
        </div>

        {/* Search & Category Filter Navigation */}
        <div className="mb-12 space-y-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide border-b border-charcoal-800">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 text-xs font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap border-b-2 -mb-[2px] ${
                  activeCategory === cat
                    ? "border-gold-500 text-gold-400 bg-charcoal-900/80 font-bold"
                    : "border-transparent text-charcoal-400 hover:text-cream-200 hover:border-charcoal-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="max-w-md">
            <input
              type="text"
              placeholder="Search dishes, cocktails, or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field text-sm"
              aria-label="Search menu items"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-charcoal-900 border border-charcoal-800 rounded-lg">
            <UtensilsCrossed size={40} className="mx-auto text-charcoal-500 mb-4" />
            <h3 className="font-display text-xl text-cream-200 mb-2">No menu items found</h3>
            <p className="text-sm text-charcoal-400 mb-6 font-light">Try searching for a different dish or select another category tab.</p>
            <button
              onClick={() => {
                setActiveCategory("ALL");
                setSearchQuery("");
              }}
              className="btn-secondary text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="bg-charcoal-900 border border-charcoal-800 group flex flex-col justify-between overflow-hidden rounded-lg hover:border-gold-500/40 transition-all duration-300"
              >
                <div>
                  <div className="relative h-60 w-full overflow-hidden bg-charcoal-950">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent opacity-80" />
                    {item.featured && (
                      <div className="absolute top-3 left-3 bg-gold-500 text-charcoal-900 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded flex items-center gap-1">
                        <Sparkles size={11} />
                        Chef's Special
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3 bg-charcoal-950/80 backdrop-blur-sm border border-charcoal-700 text-gold-400 font-sans font-bold text-xs px-2.5 py-1 rounded">
                      {formatPrice(item.price)}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-display text-xl text-cream-100 group-hover:text-gold-400 transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-xs text-charcoal-300 leading-relaxed font-light mb-3">
                      {item.description}
                    </p>

                    {item.dietary && item.dietary.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {item.dietary.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-charcoal-800 text-charcoal-300 border border-charcoal-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-charcoal-800/60 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-charcoal-400">
                    {item.category}
                  </span>
                  <Link
                    href={`/reservations?dish=${encodeURIComponent(item.name)}`}
                    className="text-xs font-semibold text-gold-400 hover:text-gold-300 uppercase tracking-wider transition-colors inline-flex items-center gap-1"
                  >
                    Reserve Table <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Dietary Assistance Notice */}
        <div className="mt-16 p-8 bg-charcoal-900 border border-charcoal-800 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-cream-100 text-lg mb-1">Dietary Preferences or Allergies?</h4>
            <p className="text-xs text-charcoal-300 font-light max-w-xl">
              Please inform your server or include a note in your reservation request. Our kitchen will gladly customize preparations to suit your dietary needs.
            </p>
          </div>
          <Link href="/reservations" className="btn-primary text-xs shrink-0 whitespace-nowrap">
            Book Table to Dine
          </Link>
        </div>
      </div>
    </div>
  );
}
