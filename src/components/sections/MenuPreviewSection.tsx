import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Menu preview data — actual items managed via Supabase CMS
const menuHighlights = [
  {
    id: 1,
    category: "Starters",
    name: "Chef's Selection Starter",
    description:
      "A rotating selection of carefully prepared starters. Ask your server for today's options.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Mains",
    name: "Signature Main Course",
    description:
      "Our kitchen's finest — bold Nigerian flavours elevated with contemporary technique.",
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Grills",
    name: "Premium Grill Experience",
    description:
      "Expertly grilled cuts and proteins, served with signature sauces and accompaniments.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&auto=format&fit=crop",
  },
];

export default function MenuPreviewSection() {
  return (
    <section
      className="section-pad bg-charcoal-950"
      aria-labelledby="menu-preview-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-18">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-gold" />
              <span className="eyebrow">Dining</span>
            </div>
            <h2
              id="menu-preview-heading"
              className="display-md text-cream-100 max-w-sm"
            >
              Crafted for Every{" "}
              <em className="text-gold-400 not-italic">Palate</em>
            </h2>
          </div>
          <p className="text-sm text-charcoal-300 max-w-xs leading-relaxed">
            Our menu celebrates authentic Nigerian flavours reimagined with
            contemporary precision. Seasonal. Intentional. Memorable.
          </p>
        </div>

        {/* Menu items — editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-charcoal-800">
          {menuHighlights.map((item, i) => (
            <article
              key={item.id}
              className="relative group bg-charcoal-950 overflow-hidden"
            >
              <div className="relative h-72 md:h-80 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal-950/20 to-charcoal-950/90" />
                {/* Category tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gold-500 text-charcoal-900 text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg text-cream-100 mb-2 leading-snug">
                  {item.name}
                </h3>
                <p className="text-sm text-charcoal-300 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/menu" className="btn-primary">
            View Full Menu
          </Link>
          <Link
            href="/reservations"
            className="flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors duration-200"
          >
            Reserve Your Table <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
