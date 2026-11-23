import Image from "next/image";
import Link from "next/link";

export default function AtmosphereSection() {
  return (
    <section
      className="section-pad bg-charcoal-950 overflow-hidden"
      aria-labelledby="atmosphere-heading"
    >
      <div className="container-site mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="divider-gold" />
            <span className="eyebrow">The Space</span>
            <div className="divider-gold" />
          </div>
          <h2
            id="atmosphere-heading"
            className="display-md text-cream-100 mb-4"
          >
            An Atmosphere That{" "}
            <em className="text-gold-400 not-italic">Sets the Mood</em>
          </h2>
          <p className="text-sm text-charcoal-300 leading-relaxed">
            Intimate enough for a date, vibrant enough for a celebration. Prados
            is designed to feel as good as it looks.
          </p>
        </div>
      </div>

      {/* Full-width editorial photo strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 h-[80vh] max-h-[700px]">
        {[
          {
            src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80&auto=format&fit=crop",
            alt: "Intimate dining tables at Prados Restaurant",
            label: "Intimate Dining",
            span: "md:col-span-2",
          },
          {
            src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop",
            alt: "Elegant bar setting at Prados",
            label: "Elegant Bar",
            span: "md:col-span-1",
          },
        ].map((photo) => (
          <div
            key={photo.label}
            className={`relative group overflow-hidden ${photo.span}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-[9px] font-semibold tracking-[0.25em] uppercase text-gold-400">
                {photo.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Second row */}
      <div className="grid grid-cols-1 md:grid-cols-3 h-[50vh] max-h-[400px]">
        {[
          {
            src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=80&auto=format&fit=crop",
            alt: "Prados Restaurant event setup",
            label: "Private Events",
            span: "md:col-span-1",
          },
          {
            src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80&auto=format&fit=crop",
            alt: "Food plating at Prados",
            label: "Culinary Excellence",
            span: "md:col-span-2",
          },
        ].map((photo) => (
          <div
            key={photo.label}
            className={`relative group overflow-hidden ${photo.span}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-[9px] font-semibold tracking-[0.25em] uppercase text-gold-400">
                {photo.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="container-site mt-12 text-center">
        <Link href="/gallery" className="btn-outline-gold">
          View Full Gallery
        </Link>
      </div>
    </section>
  );
}
