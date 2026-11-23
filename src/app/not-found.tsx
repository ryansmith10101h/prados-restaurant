import Link from "next/link";
import { ArrowLeft, Utensils } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-charcoal-950 flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-gold-500/10 text-gold-400 flex items-center justify-center mx-auto border border-gold-500/20">
          <Utensils size={28} />
        </div>
        <span className="eyebrow">404 — Page Not Found</span>
        <h1 className="display-sm text-cream-100">
          Table Not Located
        </h1>
        <p className="text-sm text-charcoal-300 leading-relaxed">
          The page you are looking for may have been moved, renamed, or is temporarily unavailable. Let us escort you back to the main room.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary text-xs">
            <ArrowLeft size={14} />
            Back to Homepage
          </Link>
          <Link href="/menu" className="btn-secondary text-xs">
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
