"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { Sparkles, UtensilsCrossed } from "lucide-react";

export type MenuItemData = {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  featured?: boolean;
  dietary?: string[];
  available: boolean;
};

// Curated starter items reflecting contemporary Nigerian culinary excellence
const defaultMenuItems: MenuItemData[] = [
  // STARTERS
  {
    id: "s1",
    category: "STARTERS",
    name: "Crispy Peppered Calamari",
    description: "Tender calamari rings dusted in spiced cassava flour, tossed in slow-cooked scotch bonnet relish with lime zest.",
    price: 9500,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600&q=80",
    featured: true,
    available: true,
  },
  {
    id: "s2",
    category: "STARTERS",
    name: "Smoked Goat Meat Asun Tartlets",
    description: "Rich firewood-smoked diced goat meat seasoned with indigenous aromatic spices inside buttery shortcrust pastry.",
    price: 8500,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    featured: true,
    available: true,
  },
  {
    id: "s3",
    category: "STARTERS",
    name: "Spiced Prawn & Yam Croquettes",
    description: "Creamy mashed white yam infused with grilled jumbo prawns and spring onions, accompanied by roasted chili dip.",
    price: 9000,
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=600&q=80",
    available: true,
  },

  // MAINS
  {
    id: "m1",
    category: "MAINS",
    name: "Prados Signature Jollof Feast",
    description: "Firewood-infused smoky basmati jollof served with fried sweet plantain rosettes, moin-moin elewe, and choice of protein.",
    price: 14000,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    featured: true,
    available: true,
  },
  {
    id: "m2",
    category: "MAINS",
    name: "Slow-Braised Oxtail with Butter Yam Puree",
    description: "Tender oxtail braised for six hours in rich tomato and scent leaf jus, paired with velvety roasted garlic yam mash.",
    price: 24000,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    featured: true,
    available: true,
  },
  {
    id: "m3",
    category: "MAINS",
    name: "Seafood Okra Supreme",
    description: "Finely chopped crunchy okra simmered with jumbo tiger prawns, calamari, blue crab, and fresh croaker fish, served with pounded yam.",
    price: 28000,
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80",
    available: true,
  },

  // GRILLS
  {
    id: "g1",
    category: "GRILLS",
    name: "Prime Lamb Chops in Suya Spice Crust",
    description: "Flame-grilled succulent New Zealand lamb cutlets encrusted with artisanal yaji spice, charred shallots and mint chutney.",
    price: 32000,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
    featured: true,
    available: true,
  },
  {
    id: "g2",
    category: "GRILLS",
    name: "Charcoal Whole Jumbo Croaker Fish",
    description: "Fresh Atlantic croaker marinated in habanero-ginger marinade, slow-grilled over charcoal and garnished with seasoned bell peppers and fried plantains.",
    price: 22000,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80",
    available: true,
  },
  {
    id: "g3",
    category: "GRILLS",
    name: "Signature Peppered Turkey Wings",
    description: "Crispy twice-cooked turkey wings tossed in a rich, deeply caramelized bell pepper and habanero sauce.",
    price: 13500,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&q=80",
    available: true,
  },

  // SIDES
  {
    id: "sd1",
    category: "SIDES",
    name: "Caramelized Dodo (Fried Plantain)",
    description: "Naturally sweet golden ripe plantains cut into succulent bite-sized cubes.",
    price: 3500,
    available: true,
  },
  {
    id: "sd2",
    category: "SIDES",
    name: "Truffle Yam Fries",
    description: "Hand-cut white yam fries tossed in white truffle oil, sea salt flakes, and fresh parsley.",
    price: 5500,
    available: true,
  },
  {
    id: "sd3",
    category: "SIDES",
    name: "Coconut Fried Rice",
    description: "Fragrant rice steamed in fresh coconut milk with diced bell peppers, liver bits, and sweet corn.",
    price: 6000,
    available: true,
  },

  // DESSERTS
  {
    id: "d1",
    category: "DESSERTS",
    name: "Warm Plantain Pudding & Vanilla Bean Gelato",
    description: "Spiced baked plantain bread pudding topped with salted caramel drizzle and artisan vanilla gelato.",
    price: 7500,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80",
    available: true,
  },
  {
    id: "d2",
    category: "DESSERTS",
    name: "Dark Chocolate Fondant with Hibiscus Coulis",
    description: "Molten 70% dark chocolate cake paired with zesty zobo-infused reduction and fresh berries.",
    price: 8500,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    available: true,
  },

  // COCKTAILS
  {
    id: "c1",
    category: "COCKTAILS",
    name: "The Magodo Sunset",
    description: "Aged rum, fresh passion fruit puree, hibiscus liquor, cold-pressed lime juice, and a dash of Angostura bitters.",
    price: 8000,
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=80",
    featured: true,
    available: true,
  },
  {
    id: "c2",
    category: "COCKTAILS",
    name: "Smoked Mezcal Paloma",
    description: "Artisanal mezcal, fresh pink grapefruit, agave nectar, lime, smoked rosemary sprig, and black volcanic salt rim.",
    price: 9500,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",
    available: true,
  },
  {
    id: "c3",
    category: "COCKTAILS",
    name: "Prados Old Fashioned",
    description: "Bourbon whiskey infused with dried orange peel and Nigerian whole nutmeg, stirred slowly with aromatic bitters.",
    price: 9000,
    available: true,
  },

  // DRINKS
  {
    id: "dr1",
    category: "DRINKS",
    name: "Zobo Bliss Craft Mocktail",
    description: "House-steeped organic dried roselle hibiscus flowers, pineapple peel, ginger, cloves, and sparkling mineral water.",
    price: 4500,
    available: true,
  },
  {
    id: "dr2",
    category: "DRINKS",
    name: "Premium Champagne & Vintage Wines",
    description: "Carefully selected cellared vintages and French champagne available by glass or bottle. Ask your sommelier for today's cellar reserve.",
    price: 65000,
    available: true,
  },
];

const categories = ["ALL", "STARTERS", "MAINS", "GRILLS", "SIDES", "DESSERTS", "COCKTAILS", "DRINKS"];

export default function MenuClient() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = defaultMenuItems.filter((item) => {
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
          <p className="text-base text-charcoal-300 leading-relaxed">
            Every dish and beverage at Prados is created using premium ingredients, bold Nigerian flavor profiles, and refined culinary craftsmanship. All prices are listed in Nigerian Naira (₦).
          </p>
        </div>

        {/* Search & Category Filter Navigation */}
        <div className="mb-12 space-y-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide border-b border-charcoal-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 text-xs font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap border-b-2 -mb-[2px] ${
                  activeCategory === cat
                    ? "border-gold-500 text-gold-400 bg-charcoal-900/60"
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
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-charcoal-900 border border-charcoal-800 rounded-lg">
            <UtensilsCrossed size={40} className="mx-auto text-charcoal-500 mb-4" />
            <h3 className="font-display text-xl text-cream-200 mb-2">No menu items found</h3>
            <p className="text-sm text-charcoal-400 mb-6">Try searching for a different item or switch category tabs.</p>
            <button onClick={() => { setActiveCategory("ALL"); setSearchQuery(""); }} className="btn-secondary text-xs">
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="card-dark group flex flex-col justify-between overflow-hidden rounded hover:border-charcoal-600 transition-all duration-300"
              >
                <div>
                  {item.image && (
                    <div className="relative h-56 w-full overflow-hidden bg-charcoal-900">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent opacity-80" />
                      {item.featured && (
                        <div className="absolute top-3 left-3 bg-gold-500 text-charcoal-900 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded flex items-center gap-1">
                          <Sparkles size={12} />
                          Chef's Special
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-display text-xl text-cream-100 group-hover:text-gold-400 transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-sans font-bold text-base text-gold-400 whitespace-nowrap">
                        {formatPrice(item.price)}
                      </span>
                    </div>

                    <p className="text-xs text-charcoal-300 leading-relaxed mt-2 mb-4">
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
                    className="text-xs font-semibold text-gold-400 hover:text-gold-300 uppercase tracking-wider transition-colors"
                  >
                    Reserve Table &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Footnote about dietary and allergen information */}
        <div className="mt-16 p-6 bg-charcoal-900 border border-charcoal-800 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-cream-100 text-base mb-1">Dietary Requirements or Allergies?</h4>
            <p className="text-xs text-charcoal-300">
              Please inform your server or mention it when booking your table. Our kitchen is happy to accommodate custom dietary preferences.
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
