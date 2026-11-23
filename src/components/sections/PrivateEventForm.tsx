"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2, AlertCircle, Loader2, MessageSquare } from "lucide-react";
import { BUSINESS, WHATSAPP_PRIVATE_EVENT_URL } from "@/lib/constants";

type PrivateEventFormData = {
  name: string;
  phone: string;
  email: string;
  event_date: string;
  expected_guests: number;
  event_type: string;
  arrangement: string;
  catering_requirements: string;
  additional_notes?: string;
};

export default function PrivateEventForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<PrivateEventFormData>({
    defaultValues: {
      expected_guests: 15,
      event_type: "Birthday Celebration",
      arrangement: "Private Dining Area",
      catering_requirements: "Plated Multi-Course Dinner",
    },
  });

  const formValues = watch();

  const onSubmit = async (data: PrivateEventFormData) => {
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Re-use reservations endpoint with occasion mapped for seamless Supabase storage
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          date: data.event_date,
          time: "18:00", // Standard evening celebration placeholder
          guests: Number(data.expected_guests) || 15,
          occasion: `[PRIVATE EVENT] ${data.event_type} (${data.arrangement})`,
          special_request: `Catering: ${data.catering_requirements}. Notes: ${data.additional_notes || "None"}`,
        }),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
        setErrorMessage(resData.message || "Failed to submit enquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Something went wrong. Please connect with us directly via WhatsApp.");
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Prados, I want to enquire about hosting a Private Event:\n` +
      `Name: ${formValues.name || ""}\n` +
      `Date: ${formValues.event_date || ""}\n` +
      `Guests: ${formValues.expected_guests || 15}\n` +
      `Event Type: ${formValues.event_type || ""}\n` +
      `Arrangement: ${formValues.arrangement || ""}\n` +
      `Catering: ${formValues.catering_requirements || ""}\n` +
      `Notes: ${formValues.additional_notes || ""}`
  );

  return (
    <div className="bg-charcoal-900 border border-charcoal-800 rounded-lg p-6 sm:p-10 shadow-2xl">
      <div className="mb-6 pb-4 border-b border-charcoal-800">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gold-500">
          Enquiry Form
        </span>
        <h3 className="font-display text-2xl text-cream-100 mt-1">
          Tell Us About Your Event
        </h3>
        <p className="text-xs text-charcoal-400 mt-1 font-light">
          We will review your date and guest count and get back to you with custom menu options and pricing.
        </p>
      </div>

      {status === "success" ? (
        <div className="text-center py-10 space-y-6">
          <div className="w-16 h-16 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto">
            <CheckCircle2 size={36} />
          </div>
          <div>
            <h4 className="font-display text-2xl text-cream-100 mb-2">
              Private Event Enquiry Received
            </h4>
            <p className="text-charcoal-300 text-sm max-w-md mx-auto leading-relaxed font-light">
              Thank you! Our private event coordinator will review your specifications and reach out via phone or WhatsApp with availability and custom package proposals.
            </p>
          </div>

          <div className="pt-6 border-t border-charcoal-800 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setStatus("idle")}
              className="btn-secondary text-xs"
            >
              Submit Another Enquiry
            </button>
            <a
              href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs flex items-center justify-center gap-2"
            >
              <MessageSquare size={16} />
              Fast-Track on WhatsApp
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          {status === "error" && (
            <div className="p-4 bg-red-950/50 border border-red-800/80 rounded flex items-start gap-3 text-red-200 text-sm">
              <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-400" />
              <div className="flex-1">
                <p>{errorMessage}</p>
                <a
                  href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 underline text-xs block mt-2"
                >
                  Send details directly on WhatsApp instead &rarr;
                </a>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="evt-name" className="label-field">
                Your Name <span className="text-gold-500">*</span>
              </label>
              <input
                id="evt-name"
                type="text"
                placeholder="e.g. Chinelo Okonkwo"
                className="input-field"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="evt-phone" className="label-field">
                Phone Number (WhatsApp Preferred) <span className="text-gold-500">*</span>
              </label>
              <input
                id="evt-phone"
                type="tel"
                placeholder="0904 000 0000"
                className="input-field"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="sm:col-span-3">
              <label htmlFor="evt-email" className="label-field">
                Email Address <span className="text-gold-500">*</span>
              </label>
              <input
                id="evt-email"
                type="email"
                placeholder="your.email@example.com"
                className="input-field"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="evt-date" className="label-field">
                Event Date <span className="text-gold-500">*</span>
              </label>
              <input
                id="evt-date"
                type="date"
                className="input-field [color-scheme:dark]"
                min={new Date().toISOString().split("T")[0]}
                {...register("event_date", { required: "Event date is required" })}
              />
              {errors.event_date && (
                <p className="text-xs text-red-400 mt-1">{errors.event_date.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="evt-guests" className="label-field">
                Expected Guests <span className="text-gold-500">*</span>
              </label>
              <select id="evt-guests" className="input-field" {...register("expected_guests", { valueAsNumber: true })}>
                <option value={8}>8 - 12 Guests</option>
                <option value={15}>15 - 20 Guests</option>
                <option value={30}>25 - 40 Guests</option>
                <option value={50}>50 - 70 Guests</option>
                <option value={80}>80+ Guests (Full Lounge)</option>
              </select>
            </div>

            <div>
              <label htmlFor="evt-type" className="label-field">
                Event Type <span className="text-gold-500">*</span>
              </label>
              <select id="evt-type" className="input-field" {...register("event_type")}>
                <option value="Birthday Celebration">Birthday Celebration</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Corporate Celebration">Corporate Celebration</option>
                <option value="Bridal Shower">Bridal Shower</option>
                <option value="Private Dining">Private Dining</option>
                <option value="Full Lounge Buyout">Full Lounge Buyout</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="evt-arr" className="label-field">
                Preferred Arrangement
              </label>
              <select id="evt-arr" className="input-field" {...register("arrangement")}>
                <option value="Private Dining Section">Private Dining Section</option>
                <option value="Main Dining Hall Group Tables">Main Dining Hall Group Tables</option>
                <option value="Bar & Cocktail Lounge">Bar & Cocktail Lounge</option>
                <option value="Full Venue Buyout">Full Venue Buyout</option>
              </select>
            </div>

            <div>
              <label htmlFor="evt-catering" className="label-field">
                Catering Requirements
              </label>
              <select id="evt-catering" className="input-field" {...register("catering_requirements")}>
                <option value="Plated Multi-Course Dinner">Plated Multi-Course Dinner</option>
                <option value="Family Style Charcoal Grill Feast">Family Style Charcoal Grill Feast</option>
                <option value="Canapés & Cocktail Service">Canapés & Cocktail Service</option>
                <option value="Drinks & Bottle Service Only">Drinks & Bottle Service Only</option>
                <option value="Custom Chef Tasting Menu">Custom Chef Tasting Menu</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="evt-notes" className="label-field">
              Additional Requests or Special Instructions
            </label>
            <textarea
              id="evt-notes"
              rows={3}
              placeholder="Sound requirements, cake arrival time, decor setup preferences, dietary notes..."
              className="input-field"
              {...register("additional_notes")}
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-primary w-full py-4 text-center flex items-center justify-center gap-2"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Submitting Event Enquiry...
                </>
              ) : (
                "Submit Private Event Enquiry"
              )}
            </button>
            <p className="text-[11px] text-charcoal-400 text-center mt-3 font-light">
              * Note: Private bookings are confirmed following availability verification and deposit confirmation.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
