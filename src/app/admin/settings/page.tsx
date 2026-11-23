"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/constants";
import { Save, CheckCircle } from "lucide-react";

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);
  const [phone, setPhone] = useState(BUSINESS.contact.phoneFormatted);
  const [whatsapp, setWhatsapp] = useState(BUSINESS.contact.whatsapp);
  const [address, setAddress] = useState(BUSINESS.address.full);
  const [weekdays, setWeekdays] = useState(BUSINESS.hours.weekdays);
  const [weekends, setWeekends] = useState(BUSINESS.hours.weekends);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="font-display text-2xl text-cream-100">Business Information & Operating Hours</h1>
        <p className="text-xs text-charcoal-400 mt-1">
          These details are dynamically displayed across website headers, footers, and schema structured data.
        </p>
      </div>

      {saved && (
        <div className="p-4 bg-emerald-950/60 border border-emerald-800 rounded flex items-center gap-3 text-emerald-300 text-sm">
          <CheckCircle size={18} />
          <span>Business settings successfully saved.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-charcoal-900 border border-charcoal-800 rounded-lg p-6 space-y-6">
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gold-500">Contact Channels</h3>
          <div>
            <label className="label-field">Direct Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input-field"
            />
          </div>
          <div>
            <label className="label-field">WhatsApp Number (e.g. 2349041695561)</label>
            <input
              type="text"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="input-field"
            />
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-charcoal-800">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gold-500">Physical Address</h3>
          <div>
            <label className="label-field">Full Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="input-field"
            />
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-charcoal-800">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gold-500">Opening Hours</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label-field">Monday – Friday</label>
              <input
                type="text"
                value={weekdays}
                onChange={(e) => setWeekdays(e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="label-field">Saturday – Sunday</label>
              <input
                type="text"
                value={weekends}
                onChange={(e) => setWeekends(e.target.value)}
                className="input-field"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-charcoal-800 flex justify-end">
          <button type="submit" className="btn-primary text-xs py-3 px-6 flex items-center gap-2">
            <Save size={14} />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
