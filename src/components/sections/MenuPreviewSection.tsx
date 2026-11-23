"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { MENU_ITEMS, MenuItemData } from "@/data/menu";
import { formatPrice } from "@/lib/utils";

// Real menu items required by master specification
const featuredSections = [
  {
    category: "STARTERS",
    title: "Signature Starters",
    subtitle: "Refined bites marrying indigenous spices with contemporary textures",
    items: MENU_ITEMS.filter((i) => i.category === "STARTERS"),
  },
  {
    category: "MAINS",
    title: "Nigerian Mains",
    subtitle: "Smoky firewood jollof, slow-braised oxtail, and fresh seafood creations",
    items: MENU_ITEMS.filter((i) => i.category === "MAINS"),
  },
  {
    category: "GRILLS",
    title: "Charcoal Grills",
    subtitle: "Expertly charred lamb chops, whole Atlantic croaker, and peppered wings",
    items: MENU_ITEMS.filter((i) => i.category === "GRILLS"),
  },
];

export default function MenuPreviewSection() {
  const [activeTab, setActiveTab] = useState<"STARTERS" | "MAINS" | "GRILLS">("MAINS");

  const currentSection = featuredSections.find((s) => s.category === activeTab) || featuredSections[0];

  return (
    <section
      className="section-pad bg-charcoal-950 border-t border-charcoal-800"
      aria-labelledby="dining-preview-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="divider-gold" />
              <span className="eyebrow">Contemporary Dining</span>
            </div>
            <h2
              id="dining-preview-heading"
              className="display-md text-cream-100 max-w-xl"
            >
              Crafted with Precision,{" "}
              <span className="text-gold-400 font-normal italic">Rooted in Heritage</span>
            </h2>
          </div>
          <p className="text-sm text-charcoal-300 max-w-md leading-relaxed font-light">
            Every dish at Prados is an expression of Nigerian culinary depth — firewood-infused smoky jollof, succulent charcoal grills, and slow-cooked braises prepared fresh daily in Magodo Phase 2.
          </p>
        </div>

        {/* Section Tabs */}
        <div className="flex items-center gap-3 border-b border-charcoal-800 pb-4 mb-10 overflow-x-auto scrollbar-hide">
          {featuredSections.map((sec) => (
            <button
              key={sec.category}
              onClick={() => setActiveTab(sec.category as any)}
              className={`px-5 py-2.5 text-xs font-semibold tracking-wider uppercase rounded transition-all duration-200 whitespace-nowrap ${
                activeTab === sec.category
                  ? "bg-gold-500 text-charcoal-900 shadow-md font-bold"
                  : "bg-charcoal-900 text-cream-300 hover:text-cream-100 border border-charcoal-800"
              }`}
            >
              {sec.title}
            </button>
          ))}
        </div>

        {/* Description of active section */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-gold-500 font-semibold">
            {currentSection.title}
          </p>
          <p className="text-sm text-charcoal-300 mt-1">
            {currentSection.subtitle}
          </p>
        </div>

        {/* Dishes Grid — 3 items with real photography, descriptions & real prices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentSection.items.map((item) => (
            <article
              key={item.id}
              className="group bg-charcoal-900 border border-charcoal-800 rounded-lg overflow-hidden flex flex-col justify-between hover:border-gold-500/40 transition-all duration-300"
            >
              <div>
                <div className="relative h-64 w-full overflow-hidden bg-charcoal-950">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent opacity-70" />
                  {item.featured && (
                    <div className="absolute top-3 left-3 bg-gold-500 text-charcoal-900 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded flex items-center gap-1">
                      <Sparkles size={11} />
                      Signature
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
                  <p className="text-xs text-charcoal-300 leading-relaxed font-light">
                    {item.description}
                  </p>
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

        {/* Bottom CTA */}
        <div className="mt-14 p-6 rounded-lg bg-charcoal-900/80 border border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-lg text-cream-100 mb-1">
              Explore Our Full Eight-Category Digital Menu
            </h4>
            <p className="text-xs text-charcoal-300">
              Starters, Mains, Charcoal Grills, Sides, Decadent Desserts, Signature Cocktails & Wines.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/menu" className="btn-primary text-xs shrink-0">
              View Full Menu
            </Link>
            <Link href="/reservations" className="btn-secondary text-xs shrink-0">
              Book a Table
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
