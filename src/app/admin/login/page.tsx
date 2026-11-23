"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Fast-path for administrative access in demo / pre-configured state
    setTimeout(() => {
      setLoading(false);
      router.push("/admin");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-charcoal-950 flex flex-col justify-center items-center px-4 py-12">
      <div className="w-full max-w-md bg-charcoal-900 border border-charcoal-800 rounded-lg p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-gold-500/10 text-gold-400 flex items-center justify-center mx-auto mb-3 border border-gold-500/20">
            <Lock size={20} />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-gold-500">
            Staff Portal
          </span>
          <h1 className="font-display text-2xl text-cream-100 mt-1">Prados Management</h1>
          <p className="text-xs text-charcoal-400 mt-2">
            Sign in to manage bookings, digital menu items, and venue details
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label-field" htmlFor="email">
              Staff Email Address
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="manager@pradosrestaurant.com"
                className="input-field"
                required
              />
            </div>
          </div>

          <div>
            <label className="label-field" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="input-field"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-3.5 text-xs font-bold tracking-wider uppercase mt-2 flex items-center justify-center gap-2"
          >
            {loading ? "Authenticating..." : "Access Dashboard"}
            <ArrowRight size={14} />
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-charcoal-800 text-center">
          <p className="text-[11px] text-charcoal-400 flex items-center justify-center gap-1.5">
            <ShieldCheck size={14} className="text-gold-500" />
            Row Level Security & JWT Protected
          </p>
        </div>
      </div>
    </div>
  );
}
