// Centralized authoritative menu data for Prados Restaurant & Bar
// Reflecting contemporary Nigerian culinary excellence with actual ₦ pricing

export type MenuItemData = {
  id: string;
  category: "STARTERS" | "MAINS" | "GRILLS" | "SIDES" | "DESSERTS" | "COCKTAILS" | "DRINKS";
  name: string;
  description: string;
  price: number;
  image: string;
  featured?: boolean;
  dietary?: string[];
  available: boolean;
};

export const MENU_CATEGORIES = [
  "ALL",
  "STARTERS",
  "MAINS",
  "GRILLS",
  "SIDES",
  "DESSERTS",
  "COCKTAILS",
  "DRINKS",
] as const;

export const MENU_ITEMS: MenuItemData[] = [
  // STARTERS
  {
    id: "s1",
    category: "STARTERS",
    name: "Crispy Peppered Calamari",
    description:
      "Tender calamari rings dusted in spiced cassava flour, tossed in slow-cooked scotch bonnet relish with fresh lime zest.",
    price: 9500,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&q=80",
    featured: true,
    dietary: ["Spicy", "Seafood"],
    available: true,
  },
  {
    id: "s2",
    category: "STARTERS",
    name: "Smoked Goat Meat Asun Tartlets",
    description:
      "Rich firewood-smoked diced goat meat seasoned with indigenous aromatic peppers and habanero relish inside buttery shortcrust pastry.",
    price: 8500,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    featured: true,
    dietary: ["House Specialty", "Spicy"],
    available: true,
  },
  {
    id: "s3",
    category: "STARTERS",
    name: "Spiced Prawn & Yam Croquettes",
    description:
      "Creamy mashed white yam infused with grilled jumbo tiger prawns and spring onions, accompanied by roasted chili dip.",
    price: 9000,
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=800&q=80",
    dietary: ["Seafood"],
    available: true,
  },

  // MAINS
  {
    id: "m1",
    category: "MAINS",
    name: "Prados Signature Jollof Feast",
    description:
      "Firewood-infused smoky basmati jollof rice served with caramelized dodo rosettes, moin-moin elewe, and choice of tender protein.",
    price: 14000,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    featured: true,
    dietary: ["Chef's Signature"],
    available: true,
  },
  {
    id: "m2",
    category: "MAINS",
    name: "Slow-Braised Oxtail with Butter Yam Puree",
    description:
      "Tender oxtail braised for six hours in rich tomato and scent leaf jus, paired with velvety roasted garlic butter yam mash.",
    price: 24000,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    featured: true,
    dietary: ["House Specialty"],
    available: true,
  },
  {
    id: "m3",
    category: "MAINS",
    name: "Seafood Okra Supreme",
    description:
      "Finely chopped crunchy okra simmered with jumbo tiger prawns, calamari, blue crab, and fresh croaker fish, served with warm pounded yam.",
    price: 28000,
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&q=80",
    featured: true,
    dietary: ["Seafood", "Traditional"],
    available: true,
  },

  // GRILLS
  {
    id: "g1",
    category: "GRILLS",
    name: "Prime Lamb Chops in Suya Spice Crust",
    description:
      "Flame-grilled succulent New Zealand lamb cutlets encrusted with artisanal yaji spice, charred shallots, and fresh mint chutney.",
    price: 32000,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    featured: true,
    dietary: ["Premium Grill", "Spicy"],
    available: true,
  },
  {
    id: "g2",
    category: "GRILLS",
    name: "Charcoal Whole Jumbo Croaker Fish",
    description:
      "Fresh Atlantic croaker marinated in habanero-ginger glaze, slow-grilled over charcoal and garnished with seasoned peppers and sweet plantains.",
    price: 22000,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80",
    featured: true,
    dietary: ["Charcoal Grill", "Seafood"],
    available: true,
  },
  {
    id: "g3",
    category: "GRILLS",
    name: "Signature Peppered Turkey Wings",
    description:
      "Crispy twice-cooked turkey wings tossed in deeply caramelized bell pepper and habanero relish with sweet onions.",
    price: 13500,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&q=80",
    dietary: ["Spicy"],
    available: true,
  },

  // SIDES
  {
    id: "sd1",
    category: "SIDES",
    name: "Caramelized Dodo (Fried Sweet Plantain)",
    description:
      "Naturally sweet golden ripe plantains cut into succulent bite-sized cubes, fried to tender perfection.",
    price: 3500,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
    dietary: ["Vegetarian"],
    available: true,
  },
  {
    id: "sd2",
    category: "SIDES",
    name: "Truffle Yam Fries",
    description:
      "Hand-cut crispy white yam fries tossed in aromatic white truffle oil, sea salt flakes, and fresh parsley.",
    price: 5500,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80",
    dietary: ["Vegetarian"],
    available: true,
  },
  {
    id: "sd3",
    category: "SIDES",
    name: "Coconut Fried Rice",
    description:
      "Fragrant basmati rice steamed in fresh pressed coconut milk with sweet corn, diced peppers, and liver bits.",
    price: 6000,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    available: true,
  },

  // DESSERTS
  {
    id: "d1",
    category: "DESSERTS",
    name: "Warm Plantain Pudding & Vanilla Bean Gelato",
    description:
      "Spiced baked plantain bread pudding topped with salted caramel drizzle and artisan Madagascar vanilla gelato.",
    price: 7500,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80",
    dietary: ["Sweet Finish"],
    available: true,
  },
  {
    id: "d2",
    category: "DESSERTS",
    name: "Dark Chocolate Fondant with Hibiscus Coulis",
    description:
      "Molten 70% dark chocolate cake paired with zesty zobo-infused reduction and fresh seasonal berries.",
    price: 8500,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
    dietary: ["Sweet Finish"],
    available: true,
  },

  // COCKTAILS
  {
    id: "c1",
    category: "COCKTAILS",
    name: "The Magodo Sunset",
    description:
      "Aged rum, fresh passion fruit puree, hibiscus liquor, cold-pressed lime juice, and a dash of Angostura bitters.",
    price: 8000,
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&q=80",
    featured: true,
    dietary: ["Signature Cocktail"],
    available: true,
  },
  {
    id: "c2",
    category: "COCKTAILS",
    name: "Smoked Mezcal Paloma",
    description:
      "Artisanal mezcal, fresh pink grapefruit, agave nectar, fresh lime, smoked rosemary sprig, and black volcanic salt rim.",
    price: 9500,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
    featured: true,
    dietary: ["Smoked & Citrus"],
    available: true,
  },
  {
    id: "c3",
    category: "COCKTAILS",
    name: "Prados Old Fashioned",
    description:
      "Bourbon whiskey infused with dried orange peel and Nigerian whole nutmeg, stirred slowly with aromatic bitters.",
    price: 9000,
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80",
    featured: true,
    dietary: ["Classic Twist"],
    available: true,
  },

  // DRINKS & MOCKTAILS
  {
    id: "dr1",
    category: "DRINKS",
    name: "Zobo Bliss Craft Mocktail",
    description:
      "House-steeped organic dried roselle hibiscus flowers, pineapple peel, ginger, cloves, and sparkling mineral water.",
    price: 4500,
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80",
    featured: true,
    dietary: ["Non-Alcoholic", "Craft Mocktail"],
    available: true,
  },
  {
    id: "dr2",
    category: "DRINKS",
    name: "Premium Champagne & Vintage Wines",
    description:
      "Carefully selected cellared vintages and French champagne available by glass or bottle. Ask your sommelier for today's cellar reserve.",
    price: 65000,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
    dietary: ["Wine Cellar"],
    available: true,
  },
];
