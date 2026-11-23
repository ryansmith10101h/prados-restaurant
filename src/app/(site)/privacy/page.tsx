import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Prados Restaurant & Bar",
  description:
    "Privacy Policy for Prados Restaurant & Bar, Magodo Phase 2, Lagos, Nigeria. Information on customer data protection and reservations.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-charcoal-950 min-h-screen">
      <div className="container-site max-w-3xl">
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="divider-gold" />
            <span className="eyebrow">Customer Trust & Security</span>
          </div>
          <h1 className="display-lg text-cream-100 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-charcoal-400">
            Last Updated: November 2026 • Prados Restaurant & Bar
          </p>
        </div>

        <div className="space-y-8 text-sm text-charcoal-300 font-light leading-relaxed">
          <section className="bg-charcoal-900 border border-charcoal-800 p-6 rounded-lg">
            <h2 className="font-display text-lg text-cream-100 mb-3">1. Information We Collect</h2>
            <p>
              When you submit a table reservation or private event enquiry through our website, we collect your name, phone number, email address, requested date and time, guest count, and any special dining or dietary requests.
            </p>
          </section>

          <section className="bg-charcoal-900 border border-charcoal-800 p-6 rounded-lg">
            <h2 className="font-display text-lg text-cream-100 mb-3">2. How We Use Your Information</h2>
            <p>
              Your contact details are strictly used to coordinate and confirm your dining reservation, facilitate private event planning, communicate changes to your booking, or respond to enquiries submitted via phone, email, or WhatsApp. We never sell or share your personal data with third-party marketers.
            </p>
          </section>

          <section className="bg-charcoal-900 border border-charcoal-800 p-6 rounded-lg">
            <h2 className="font-display text-lg text-cream-100 mb-3">3. Data Security & Storage</h2>
            <p>
              We implement industry-standard database encryption, secure server-side processing, and row-level security protocols. Your reservation details are accessible solely to authorized front-of-house staff for service fulfillment.
            </p>
          </section>

          <section className="bg-charcoal-900 border border-charcoal-800 p-6 rounded-lg">
            <h2 className="font-display text-lg text-cream-100 mb-3">4. Contact & Inquiries</h2>
            <p>
              If you have any questions regarding your reservation data or this Privacy Policy, please contact our management team:
            </p>
            <div className="mt-3 text-xs text-cream-200">
              <p><strong>Business:</strong> {BUSINESS.name}</p>
              <p><strong>Address:</strong> {BUSINESS.address.full}</p>
              <p><strong>Phone:</strong> {BUSINESS.contact.phoneFormatted}</p>
              <p><strong>Email:</strong> {BUSINESS.contact.email}</p>
            </div>
          </section>

          <div className="pt-4 text-center">
            <Link href="/" className="btn-secondary text-xs">
              &larr; Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
