"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, PhoneCall, Sparkles, Award, Users, Wrench, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";
import { site } from "@/data/site";

const stats = [
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Users, value: "100+", label: "Projects Delivered" },
  { icon: Wrench, value: "8+", label: "Core Services" },
];

const heroSlides = [
  { id: "hero-1", src: "/hero/hero-1.png", alt: "Fancy Engineering and Fabrication showcase" },
  { id: "hero-2", src: "/hero/hero-2.png", alt: "Fancy Engineering and Fabrication showcase" },
  { id: "hero-3", src: "/hero/hero-3.png", alt: "Fancy Engineering and Fabrication showcase" },
];
const SLIDE_DURATION_MS = 6000;

export default function Hero() {
  const slides = heroSlides;
  const [active, setActive] = useState(0);
  const primaryPhone = site.phones[0].replace(/\s/g, "");

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    // min-h (not a fixed height) so it fills one 16:9 screen on normal
    // viewports without a scroll, but still degrades to scroll — never to
    // clipped/hidden content — on unusually short windows. The content is
    // split into a flexible centered block (heading/copy/CTAs) and fixed
    // blocks (stats/badges/dots/scroll-cue) so it always fits the budget.
    <section className="relative -mt-21 min-h-[82svh] sm:min-h-svh flex flex-col overflow-hidden bg-grid">
      {/* 1. Bottom Layer: Banner Slides */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-1500 ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <div className="absolute inset-0 animate-kenburns">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                className="object-cover scale-105"
                style={{ filter: "saturate(1.1) contrast(1.05) brightness(1)" }}
                sizes="100vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 2. Middle Layer: Subtle Translucent Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black/18 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_75%_at_50%_40%,transparent,rgba(8,8,10,0.2))]" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/10 to-transparent" />
        <div className="absolute inset-0 bg-noise opacity-5" />
      </div>

      {/* 3. Top Layer: Text content block (z-20) */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-8 pt-28 pb-8 mx-auto w-full max-w-5xl">
        <span
          className="animate-fade-up inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-gold-light/20 bg-background/60 backdrop-blur-md px-3.5 py-1.5 sm:px-5 sm:py-2 text-[0.62rem] xs:text-[0.7rem] sm:text-xs tracking-[0.2em] sm:tracking-[0.35em] uppercase text-gold-light shadow-[0_4px_12px_rgba(0,0,0,0.5)] whitespace-nowrap"
        >
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          {site.tagline}
        </span>

        <h1
          className="animate-fade-up mt-5 font-display text-[1.75rem] xs:text-[2.25rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-balance text-gold-gradient drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] pb-2"
        >
          Premium Engineering &amp; Fabrication Services in Hyderabad
        </h1>

        <p
          className="animate-fade-up mt-5 max-w-3xl text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
        >
          We specialize in <span className="text-gold-light font-bold">Sheds Fabrication, Industrial Shed Fabrication, Structural Work, Automatic Gates, Brass &amp; Aluminium Railings, Spiral Staircases, and Custom Fabrication</span> with quality workmanship, competitive pricing, and on-time delivery.
        </p>

        <div
          className="animate-fade-up mt-8 flex flex-row flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.15s" }}
        >
          <Button 
            href={`tel:+91${primaryPhone}`} 
            className="group hover:scale-[1.02] bg-gradient-to-r from-gold-dark via-gold to-gold-light text-[#12100a] font-bold border-none px-7 py-3.5 shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_24px_rgba(212,175,55,0.45)] transition-all duration-300"
          >
            <PhoneCall className="h-4.5 w-4.5" />
            Call Now
          </Button>
          <a 
            href={`https://wa.me/91${primaryPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-[1.02] inline-flex items-center justify-center gap-2 rounded-full border-2 border-emerald-500/50 bg-emerald-950/20 backdrop-blur-xs text-emerald-400 hover:text-black hover:bg-emerald-500 hover:border-transparent font-bold px-7 py-3.5 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.45)] transition-all duration-300 text-sm tracking-wide"
          >
            <FaWhatsapp className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Fixed-size blocks pinned toward the bottom of the fold */}
      <div className="animate-fade-up relative z-20 shrink-0 mx-auto w-full max-w-3xl px-5 sm:px-8 pb-10 sm:pb-12 hidden sm:block" style={{ animationDelay: "0.3s" }}>
        {/* Stats card with custom glassmorphism and industrial corner borders */}
        <div className="relative group rounded-2xl glass-panel-heavy shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
          {/* Subtle gold shine overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 pointer-events-none" />

          {/* Decorative corner accents */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gold/40" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gold/40" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gold/40" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gold/40" />

          <div className="grid grid-cols-3 divide-x divide-gold/15 py-1">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1.5 py-3.5 sm:py-5 px-2 hover:bg-gold/5 transition-colors duration-300">
                <div className="p-1.5 rounded-full bg-gold/5 text-gold">
                  <stat.icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
                </div>
                <div className="font-display text-xl sm:text-2xl font-bold text-gold-light tracking-tight">
                  <CountUp value={stat.value} />
                </div>
                <div className="text-[0.55rem] sm:text-[0.65rem] text-muted tracking-widest uppercase text-center leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-5 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 px-4">
          <span className="flex items-center gap-1.5 text-[0.65rem] sm:text-xs text-muted/80 font-medium uppercase tracking-widest">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} /> Premium Grade Steel
          </span>
          <span className="h-1 w-1 rounded-full bg-gold/40 hidden sm:inline-block" />
          <span className="flex items-center gap-1.5 text-[0.65rem] sm:text-xs text-muted/80 font-medium uppercase tracking-widest">
            <Award className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} /> Certified Welders
          </span>
          <span className="h-1 w-1 rounded-full bg-gold/40 hidden sm:inline-block" />
          <span className="flex items-center gap-1.5 text-[0.65rem] sm:text-xs text-muted/80 font-medium uppercase tracking-widest">
            <Wrench className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} /> Custom Precision
          </span>
        </div>

        {/* Slide Indicator dots */}
        {slides.length > 1 && (
          <div className="mt-2.5 flex justify-center gap-2.5">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-gold shadow-[0_0_8px_var(--gold)]" : "w-2 bg-gold-dark/30 hover:bg-gold-dark/65"
                  }`}
              />
            ))}
          </div>
        )}
      </div>

    </section>
  );
}
