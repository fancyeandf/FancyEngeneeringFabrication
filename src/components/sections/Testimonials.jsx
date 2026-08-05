"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const avgRating = (
  testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
).toFixed(1);

function TestimonialCard({ t }) {
  return (
    <div
      className="card-glow group relative flex h-full shrink-0 flex-col rounded-2xl border border-gold-dark/15 bg-surface/90 p-6 sm:p-7 transition-all duration-500 hover:border-gold/35 hover:shadow-[0_20px_45px_-15px_rgba(212,175,55,0.2)] overflow-hidden w-full sm:w-95"
    >
      <div className="relative flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < t.rating ? "text-gold" : "text-gold/15"}`}
            fill="currentColor"
            strokeWidth={0}
          />
        ))}
      </div>

      <p className="relative mt-4 text-sm text-foreground/85 leading-relaxed flex-1">
        {t.quote}
      </p>

      <div className="relative mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-gold/10 pt-5">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/5 font-display text-xs font-bold text-gold-gradient transition-transform duration-300 group-hover:scale-110">
            {initials(t.name)}
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground leading-tight">{t.name}</p>
            <p className="text-xs text-muted leading-tight mt-0.5">{t.location}</p>
          </div>
        </div>
        <span className="shrink-0 rounded-full border border-gold/15 bg-gold/5 px-2.5 py-1 text-[0.6rem] font-medium tracking-wide text-gold-light/80 group-hover:border-gold/30 group-hover:text-gold transition-colors duration-300">
          {t.service}
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [currentDot, setCurrentDot] = useState(0);

  const handleScroll = useCallback((direction) => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth > 640 ? 404 : clientWidth + 16;

      if (direction === "right") {
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollTo({
            left: scrollLeft + scrollAmount,
            behavior: "smooth",
          });
        }
      } else {
        if (scrollLeft <= 20) {
          scrollRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
        } else {
          scrollRef.current.scrollTo({
            left: scrollLeft - scrollAmount,
            behavior: "smooth",
          });
        }
      }
    }
  }, []);

  const updateActiveDot = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth > 640 ? 404 : clientWidth + 16;
      const index = Math.round(scrollLeft / scrollAmount);
      setCurrentDot(index % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleScroll("right");
    }, 4800);

    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener("scroll", updateActiveDot);
    }

    return () => {
      clearInterval(timer);
      if (scrollEl) {
        scrollEl.removeEventListener("scroll", updateActiveDot);
      }
    };
  }, [handleScroll]);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.06] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 h-72 w-72 bg-gold/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 h-72 w-72 bg-gold-dark/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading
            align="left"
            eyebrow="Client Feedback"
            title="What Our Clients Say"
            description="Feedback from homeowners, shop owners and site managers we've worked with across Hyderabad."
          />

          <div className="flex items-center gap-4 self-start md:self-auto">
            {/* Rating Display */}
            <span className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-gold/20 bg-gold/5 px-4 py-2.5 shadow-[0_8px_20px_-8px_rgba(212,175,55,0.25)]">
              <span className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${i < Math.round(avgRating) ? "text-gold" : "text-gold/15"}`}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </span>
              <span className="font-display text-sm font-bold text-gold-gradient">{avgRating}</span>
              <span className="text-xs text-muted">client rating</span>
            </span>
          </div>
        </div>

        {/* Controlled Scroll Testimonials container — stays within the section's own padding so the gap either side of a snapped card is always equal */}
        <div className="relative mt-8 sm:mt-14 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-4 items-stretch"
          >
            {testimonials.map((t, i) => (
              <div key={`${t.name}-${i}`} className="snap-center w-full sm:w-auto shrink-0">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation underneath the cards with dynamic indicators */}
        <div className="mt-6 sm:mt-8 flex justify-center items-center gap-10">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/20 bg-[#121115] text-gold hover:bg-gold hover:text-[#12100a] transition-all duration-300 shadow-md cursor-pointer hover:scale-105"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentDot === i ? "w-4 bg-gold" : "w-1.5 bg-gold/30"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/20 bg-[#121115] text-gold hover:bg-gold hover:text-[#12100a] transition-all duration-300 shadow-md cursor-pointer hover:scale-105"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
