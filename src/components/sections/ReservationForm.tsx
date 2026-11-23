"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2, AlertCircle, Loader2, MessageSquare, Phone } from "lucide-react";
import { BUSINESS, CALL_URL, WHATSAPP_URL } from "@/lib/constants";

type ReservationFormData = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  occasion?: string;
  special_request?: string;
};

export default function ReservationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ReservationFormData>({
    defaultValues: {
      guests: 2,
      time: "19:00",
    },
  });

  const formValues = watch();

  const onSubmit = async (data: ReservationFormData) => {
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
        setErrorMessage(resData.message || "Something went wrong — please try again");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Something went wrong — please try again or reach us via WhatsApp.");
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Prados, I would like to book a table:\nName: ${formValues.name || ""}\nDate: ${formValues.date || ""}\nTime: ${formValues.time || ""}\nGuests: ${formValues.guests || 2}\nOccasion: ${formValues.occasion || "Dining"}`
  );

  return (
    <div className="bg-charcoal-900 border border-charcoal-800 rounded-lg p-6 sm:p-10 shadow-2xl">
      {status === "success" ? (
        <div className="text-center py-10 space-y-6">
          <div className="w-16 h-16 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto">
            <CheckCircle2 size={36} />
          </div>
          <div>
            <h3 className="font-display text-2xl text-cream-100 mb-2">
              Reservation request received
            </h3>
            <p className="text-charcoal-300 text-sm max-w-md mx-auto leading-relaxed">
              Thank you! Our host team will review your request and contact you shortly via phone or WhatsApp to confirm table availability.
            </p>
          </div>

          <div className="pt-6 border-t border-charcoal-800 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setStatus("idle")}
              className="btn-secondary text-xs"
            >
              Submit Another Request
            </button>
            <a
              href={`https://wa.me/${BUSINESS.contact.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs"
            >
              <MessageSquare size={16} />
              Follow up on WhatsApp
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
                <p className="mt-2 text-xs text-charcoal-300">
                  Prefer direct assistance?{" "}
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-gold-400 underline">
                    Chat directly with our host on WhatsApp
                  </a>
                </p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="label-field">
                Full Name <span className="text-gold-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="e.g. Babatunde Adeleke"
                className="input-field"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="label-field">
                Phone Number (WhatsApp Preferred) <span className="text-gold-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="0904 000 0000"
                className="input-field"
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: { value: 8, message: "Valid phone number required" },
                })}
              />
              {errors.phone && (
                <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Email */}
            <div className="sm:col-span-3">
              <label htmlFor="email" className="label-field">
                Email Address <span className="text-gold-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="input-field"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Valid email format required",
                  },
                })}
              />
              {errors.email && (
                <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="label-field">
                Date <span className="text-gold-500">*</span>
              </label>
              <input
                id="date"
                type="date"
                className="input-field [color-scheme:dark]"
                min={new Date().toISOString().split("T")[0]}
                {...register("date", { required: "Date is required" })}
              />
              {errors.date && (
                <p className="text-xs text-red-400 mt-1">{errors.date.message}</p>
              )}
            </div>

            {/* Time */}
            <div>
              <label htmlFor="time" className="label-field">
                Preferred Time <span className="text-gold-500">*</span>
              </label>
              <select id="time" className="input-field" {...register("time", { required: "Time is required" })}>
                <option value="12:00">12:00 PM (Lunch)</option>
                <option value="13:00">01:00 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="16:00">04:00 PM</option>
                <option value="18:00">06:00 PM</option>
                <option value="19:00">07:00 PM (Dinner)</option>
                <option value="20:00">08:00 PM</option>
                <option value="21:00">09:00 PM</option>
                <option value="22:00">10:00 PM (Late Lounge)</option>
              </select>
              {errors.time && (
                <p className="text-xs text-red-400 mt-1">{errors.time.message}</p>
              )}
            </div>

            {/* Number of Guests */}
            <div>
              <label htmlFor="guests" className="label-field">
                Guests <span className="text-gold-500">*</span>
              </label>
              <select id="guests" className="input-field" {...register("guests", { valueAsNumber: true })}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Occasion */}
            <div>
              <label htmlFor="occasion" className="label-field">
                Occasion (Optional)
              </label>
              <select id="occasion" className="input-field" {...register("occasion")}>
                <option value="">Casual Dining</option>
                <option value="Birthday">Birthday Celebration</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Business Dinner">Business Dinner</option>
                <option value="Date Night">Date Night</option>
                <option value="Private Gathering">Private Gathering</option>
              </select>
            </div>

            {/* Special Request */}
            <div>
              <label htmlFor="special_request" className="label-field">
                Special Requests / Dietary Notes
              </label>
              <input
                id="special_request"
                type="text"
                placeholder="Seating preference, allergies, etc."
                className="input-field"
                {...register("special_request")}
              />
            </div>
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
                  Submitting Request...
                </>
              ) : (
                "Request Table Reservation"
              )}
            </button>
            <p className="text-[11px] text-charcoal-400 text-center mt-3">
              * Note: Reservations are confirmed upon verification by our team via phone or WhatsApp.
            </p>
          </div>
        </form>
      )}

      {/* Instant fallback contact card */}
      <div className="mt-8 pt-6 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-300">
        <span className="flex items-center gap-2">
          <Phone size={14} className="text-gold-500" />
          Urgent bookings: <a href={CALL_URL} className="text-gold-400 font-semibold hover:underline">{BUSINESS.contact.phoneFormatted}</a>
        </span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-300 flex items-center gap-1.5 font-medium"
        >
          <MessageSquare size={14} />
          Fast WhatsApp booking
        </a>
      </div>
    </div>
  );
}
