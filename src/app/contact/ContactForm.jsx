"use client";

import { useState, useSyncExternalStore } from "react";
import { Send, CheckCircle2, AlertCircle, User, Mail, Phone, Wrench, MessageSquare, ChevronDown } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";

const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: "other", label: "Other / Custom Fabrication" },
];

const primaryPhone = site.phones[0].replace(/\s/g, "");

const emptySubscribe = () => () => {};

function getServiceFromHash() {
  return window.location.hash.match(/service=([\w-]+)/)?.[1] ?? null;
}

export default function ContactForm() {
  // Reads a `#service=<slug>` hash (e.g. linked from the services page) so the
  // dropdown can arrive pre-selected — done via useSyncExternalStore rather than
  // an effect+setState so the value is correct on first paint with no hydration flash.
  const hashService = useSyncExternalStore(emptySubscribe, getServiceFromHash, () => null);
  const defaultService = serviceOptions.some((opt) => opt.value === hashService)
    ? hashService
    : "automatic-gates";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [service, setService] = useState(null);
  const [phoneError, setPhoneError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const currentService = service ?? defaultService;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) {
      setPhoneError("Enter a valid 10-digit phone number");
      return;
    }
    setPhoneError("");
    setLoading(true);

    const formattedService =
      serviceOptions.find((s) => s.value === currentService)?.label ?? currentService;
    const formattedMessage = `Hello Fancy Engineering & Fabrication ,\n\nI would like to inquire about your services. Here are my details:\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Email:* ${form.email || "N/A"}\n*Service:* ${formattedService}\n\n*Message:* \n${form.message}`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/91${primaryPhone}?text=${encodedMessage}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(whatsappUrl, "_blank");
      setForm({ name: "", email: "", phone: "", message: "" });
      setService(null);
    }, 1000);
  };

  return (
    <div className="card-glow relative overflow-hidden rounded-3xl border border-gold/20 bg-surface/50 backdrop-blur-md p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
      {/* Decorative background glow orb */}
      <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-gold/5 blur-3xl group-hover:bg-gold/10 transition-all duration-700" />
      <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

      {!submitted && (
        <div className="relative z-10 mb-8 flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/5 text-gold">
            <MessageSquare className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-gold-gradient">
              Send Us a Message
            </h3>
            <p className="mt-1 text-sm text-muted">
              Share your requirements and we&apos;ll get back to you on WhatsApp shortly.
            </p>
          </div>
        </div>
      )}

      {submitted ? (
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-12 animate-fade-up">
          <div className="h-16 w-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <CheckCircle2 className="h-8 w-8 animate-bounce" />
          </div>
          <h3 className="font-display text-2xl font-bold text-gold-light">Message Sent!</h3>
          <p className="mt-3 text-muted max-w-sm">
            Thank you for reaching out. We will get back to you shortly regarding your fabrication needs.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 text-sm tracking-wide text-gold border-b border-gold-dark pb-0.5 hover:text-gold-light transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold tracking-wider uppercase text-gold-light mb-2">
                Your Name
              </label>
              <div className="relative">
                <User className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/50" strokeWidth={1.5} />
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="e.g. Irfan Syed"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-background/40 hover:bg-background/60 hover:border-gold/30 focus:bg-background/80 border border-gold/15 focus:border-gold focus:ring-1 focus:ring-gold text-foreground placeholder:text-muted/40 rounded-xl pl-10 pr-4 py-3 text-sm transition-all duration-300 outline-hidden focus:shadow-[0_0_12px_rgba(212,175,55,0.15)]"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold tracking-wider uppercase text-gold-light mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/50" strokeWidth={1.5} />
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="e.g. 98765 43210"
                  value={form.phone}
                  onChange={(e) => {
                    setForm({ ...form, phone: e.target.value });
                    if (phoneError) setPhoneError("");
                  }}
                  className={`w-full bg-background/40 hover:bg-background/60 hover:border-gold/30 focus:bg-background/80 border text-foreground placeholder:text-muted/40 rounded-xl pl-10 pr-4 py-3 text-sm transition-all duration-300 outline-hidden focus:shadow-[0_0_12px_rgba(212,175,55,0.15)] ${
                    phoneError
                      ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gold/15 focus:border-gold focus:ring-1 focus:ring-gold"
                  }`}
                />
              </div>
              {phoneError && (
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {phoneError}
                </p>
              )}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold tracking-wider uppercase text-gold-light mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/50" strokeWidth={1.5} />
                <input
                  type="email"
                  id="email"
                  placeholder="e.g. irfan@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-background/40 hover:bg-background/60 hover:border-gold/30 focus:bg-background/80 border border-gold/15 focus:border-gold focus:ring-1 focus:ring-gold text-foreground placeholder:text-muted/40 rounded-xl pl-10 pr-4 py-3 text-sm transition-all duration-300 outline-hidden focus:shadow-[0_0_12px_rgba(212,175,55,0.15)]"
                />
              </div>
            </div>
            <div>
              <label htmlFor="service" className="block text-xs font-semibold tracking-wider uppercase text-gold-light mb-2">
                Required Service
              </label>
              <div className="relative">
                <Wrench className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/50 z-10" strokeWidth={1.5} />
                <select
                  id="service"
                  value={currentService}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-background/85 hover:bg-background/95 hover:border-gold/30 focus:bg-background/95 border border-gold/15 focus:border-gold focus:ring-1 focus:ring-gold text-foreground rounded-xl pl-10 pr-4 py-3 text-sm transition-all duration-300 outline-hidden focus:shadow-[0_0_12px_rgba(212,175,55,0.15)] [&>option]:bg-surface [&>option]:text-foreground appearance-none"
                >
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gold/50" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold tracking-wider uppercase text-gold-light mb-2">
              Project Description / Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="Tell us about the size, material, or specifications of your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-background/40 hover:bg-background/60 hover:border-gold/30 focus:bg-background/80 border border-gold/15 focus:border-gold focus:ring-1 focus:ring-gold text-foreground placeholder:text-muted/40 rounded-xl px-4 py-3 text-sm transition-all duration-300 outline-hidden resize-none focus:shadow-[0_0_12px_rgba(212,175,55,0.15)]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group/btn relative w-full overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-dark via-gold to-gold-light px-6 py-4 text-sm font-semibold tracking-widest uppercase text-[#12100a] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] disabled:opacity-50 cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
            {loading ? (
              <span className="relative">Sending Message...</span>
            ) : (
              <>
                <span className="relative">Send Message</span>
                <Send className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
