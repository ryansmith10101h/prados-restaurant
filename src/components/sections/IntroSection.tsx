import Image from "next/image";
import Link from "next/link";

export default function IntroSection() {
  return (
    <section
      id="about"
      className="section-pad bg-charcoal-900"
      aria-labelledby="intro-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text side */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="divider-gold" />
              <span className="eyebrow">Our Story</span>
            </div>
            <h2
              id="intro-heading"
              className="display-md text-cream-100 mb-6"
            >
              A New Kind of{" "}
              <em className="text-gold-400 not-italic">Lagos Dining</em>{" "}
              Experience
            </h2>
            <p className="text-base text-charcoal-300 leading-relaxed mb-5">
              Prados Restaurant & Bar is a sophisticated gathering place in
              Magodo Phase 2 — where the warmth of Nigerian hospitality meets an
              elevated culinary vision. Whether you are sharing a meal, raising
              a toast or hosting a private celebration, every visit is crafted to
              feel special.
            </p>
            <p className="text-base text-charcoal-300 leading-relaxed mb-8">
              Our kitchen brings together bold, authentic flavours with
              contemporary technique. Our bar curates experiences — from
              carefully mixed cocktails to a thoughtful selection of wines and
              spirits.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { label: "Cuisine", value: "Contemporary Nigerian" },
                { label: "Atmosphere", value: "Warm & Sophisticated" },
                { label: "Location", value: "Magodo Phase 2" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[9px] font-semibold tracking-[0.2em] uppercase text-gold-500 mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-cream-200 font-medium">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/reservations" className="btn-primary">
              Book Your Experience
            </Link>
          </div>

          {/* Image side — editorial asymmetric layout */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&auto=format&fit=crop"
                alt="Beautifully plated dish at Prados Restaurant & Bar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-charcoal-900/40" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 bg-gold-500 p-5 max-w-[160px]">
              <p className="font-display text-3xl font-bold text-charcoal-900 leading-none mb-1">
                51
              </p>
              <p className="text-xs font-semibold text-charcoal-800 leading-snug">
                Alh. Bashorun Shittu Avenue
              </p>
              <p className="text-[9px] font-medium text-charcoal-700 uppercase tracking-wide mt-1">
                Magodo Phase 2, Lagos
              </p>
            </div>
            {/* Second image — staggered */}
            <div className="absolute -top-6 -right-6 w-32 h-40 overflow-hidden border-2 border-charcoal-700 hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&q=80&auto=format&fit=crop"
                alt="Bar area at Prados"
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
