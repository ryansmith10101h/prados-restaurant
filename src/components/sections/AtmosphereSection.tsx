import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const atmosphereMoments = [
  {
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1000&q=80",
    alt: "Intimate dining tables and warm candlelight at Prados Restaurant Magodo",
    label: "Intimate Dining & Date Nights",
    description: "Candlelit tables and curated quiet corners designed for meaningful connection.",
    span: "lg:col-span-8",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Sophisticated bar counter with bartenders crafting cocktails at Prados",
    label: "Elegant Bar & Mixology",
    description: "An inviting counter where conversation flows with artisanal spirits and wines.",
    span: "lg:col-span-4",
  },
  {
    src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
    alt: "Contemporary culinary presentation of Nigerian dishes at Prados",
    label: "Culinary Presentation",
    description: "Every plate is an intentional composition of authentic Nigerian aromatics.",
    span: "lg:col-span-4",
  },
  {
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80",
    alt: "Private celebration setup with floral decor and celebration service at Prados",
    label: "Private Events & Milestones",
    description: "Birthdays, bridal showers, and corporate buyouts with tailored setups.",
    span: "lg:col-span-4",
  },
  {
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    alt: "Group dining and Sunday family brunch sharing platters at Prados",
    label: "Group Dining & Family Experiences",
    description: "Spacious communal tables, Sunday grill roasts, and laughter across generations.",
    span: "lg:col-span-4",
  },
];

export default function AtmosphereSection() {
  return (
    <section
      className="section-pad bg-charcoal-950 overflow-hidden border-t border-charcoal-800"
      aria-labelledby="atmosphere-heading"
    >
      <div className="container-site mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="divider-gold" />
              <span className="eyebrow">The Atmosphere</span>
            </div>
            <h2
              id="atmosphere-heading"
              className="display-md text-cream-100 max-w-xl"
            >
              An Atmosphere That{" "}
              <span className="text-gold-400 font-normal italic">Sets the Mood</span>
            </h2>
          </div>
          <p className="text-sm text-charcoal-300 max-w-md leading-relaxed font-light">
            Whether an intimate dinner for two, a lively weekend cocktail reunion, or a family Sunday brunch, Prados offers spaces tailored to every memory.
          </p>
        </div>
      </div>

      {/* Editorial Asymmetric Grid */}
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {atmosphereMoments.map((moment) => (
            <div
              key={moment.label}
              className={`relative group rounded-lg overflow-hidden border border-charcoal-800 bg-charcoal-900 min-h-[300px] sm:min-h-[360px] ${moment.span}`}
            >
              <Image
                src={moment.src}
                alt={moment.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold-400 block mb-1.5">
                  {moment.label}
                </span>
                <p className="text-xs text-cream-200/90 leading-relaxed font-light max-w-md">
                  {moment.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/gallery" className="btn-secondary inline-flex items-center gap-2">
            View Full Atmosphere & Food Gallery <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
