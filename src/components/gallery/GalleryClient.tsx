"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ZoomIn, CalendarCheck } from "lucide-react";

interface GalleryPhoto {
  id: string;
  category: "FOOD" | "DRINKS" | "INTERIOR" | "ATMOSPHERE" | "EVENTS";
  title: string;
  src: string;
  aspect: string; // for masonry visual dynamics
}

const galleryPhotos: GalleryPhoto[] = [
  {
    id: "g1",
    category: "INTERIOR",
    title: "Main Dining Room & Ambient Lighting",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=80",
    aspect: "aspect-[4/3]",
  },
  {
    id: "g2",
    category: "FOOD",
    title: "Signature Jollof & Grilled Prawns",
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000&q=80",
    aspect: "aspect-[3/4]",
  },
  {
    id: "g3",
    category: "DRINKS",
    title: "Handcrafted Artisanal Cocktail",
    src: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=1000&q=80",
    aspect: "aspect-square",
  },
  {
    id: "g4",
    category: "ATMOSPHERE",
    title: "Evening Lounge & Candlelit Tables",
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1000&q=80",
    aspect: "aspect-[3/4]",
  },
  {
    id: "g5",
    category: "FOOD",
    title: "Suya Spiced Lamb Cutlets",
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1000&q=80",
    aspect: "aspect-square",
  },
  {
    id: "g6",
    category: "DRINKS",
    title: "Curated Wine Reserve Selection",
    src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1000&q=80",
    aspect: "aspect-[4/3]",
  },
  {
    id: "g7",
    category: "EVENTS",
    title: "Live Acoustic Band Performance",
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1000&q=80",
    aspect: "aspect-[4/3]",
  },
  {
    id: "g8",
    category: "INTERIOR",
    title: "Architectural Bar Counter & Spirits Display",
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1000&q=80",
    aspect: "aspect-[3/4]",
  },
  {
    id: "g9",
    category: "FOOD",
    title: "Gourmet Seafood Platter",
    src: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=1000&q=80",
    aspect: "aspect-square",
  },
];

const categories = ["ALL", "FOOD", "DRINKS", "INTERIOR", "ATMOSPHERE", "EVENTS"] as const;

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedImage, setSelectedImage] = useState<GalleryPhoto | null>(null);

  const filtered = galleryPhotos.filter(
    (photo) => activeCategory === "ALL" || photo.category === activeCategory
  );

  return (
    <div className="pt-32 pb-24 bg-charcoal-950 min-h-screen">
      <div className="container-site">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="divider-gold" />
            <span className="eyebrow">Visual Journey</span>
          </div>
          <h1 className="display-lg text-cream-100 mb-6">
            The Prados <em className="text-gold-400 not-italic">Gallery</em>
          </h1>
          <p className="text-base text-charcoal-300 leading-relaxed">
            Take a visual tour inside our restaurant and lounge in Magodo Phase 2. From thoughtfully plated dishes and craft cocktails to the sultry ambient night lighting.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide border-b border-charcoal-800 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap rounded ${
                activeCategory === cat
                  ? "bg-gold-500 text-charcoal-900"
                  : "bg-charcoal-900 text-charcoal-300 hover:text-cream-100 border border-charcoal-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Responsive Editorial Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedImage(photo)}
              className="relative group overflow-hidden rounded bg-charcoal-900 border border-charcoal-800 cursor-pointer break-inside-avoid"
            >
              <div className={`relative w-full ${photo.aspect}`}>
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <span className="self-end p-2 bg-charcoal-900/80 rounded text-gold-400 backdrop-blur-sm">
                    <ZoomIn size={18} />
                  </span>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400 block mb-1">
                      {photo.category}
                    </span>
                    <h3 className="font-display text-base text-cream-100">
                      {photo.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center border-t border-charcoal-800 pt-12">
          <h3 className="font-display text-2xl text-cream-100 mb-3">Immerse Yourself in the Atmosphere</h3>
          <p className="text-sm text-charcoal-300 mb-6">Nothing beats experiencing the flavors and vibes in person.</p>
          <Link href="/reservations" className="btn-primary">
            <CalendarCheck size={18} />
            Reserve Your Table
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="self-end mb-3 text-cream-300 hover:text-white p-2 rounded bg-charcoal-900 border border-charcoal-700"
              aria-label="Close image modal"
            >
              <X size={20} />
            </button>
            <div className="relative w-full h-[65vh] rounded overflow-hidden bg-charcoal-900">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <div className="pt-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400 block">
                  {selectedImage.category}
                </span>
                <h4 className="font-display text-lg text-cream-100">
                  {selectedImage.title}
                </h4>
              </div>
              <Link href="/reservations" className="btn-primary text-xs py-2 px-4">
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
