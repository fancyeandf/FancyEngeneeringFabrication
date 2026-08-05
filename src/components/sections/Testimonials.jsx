import { Star } from "lucide-react";
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
      className="card-glow group relative flex shrink-0 flex-col rounded-2xl border border-gold-dark/15 bg-surface/50 backdrop-blur-md p-7 transition-all duration-500 hover:border-gold/35 hover:shadow-[0_20px_45px_-15px_rgba(212,175,55,0.2)] overflow-hidden w-[82vw] sm:w-95"
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

      <p className="relative mt-4 text-sm text-foreground/85 leading-relaxed">
        {t.quote}
      </p>

      <div className="relative mt-6 flex items-center gap-3 border-t border-gold/10 pt-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/5 font-display text-sm font-bold text-gold-gradient transition-transform duration-300 group-hover:scale-110">
          {initials(t.name)}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">{t.name}</p>
          <p className="text-xs text-muted truncate">{t.location}</p>
        </div>
        <span className="ml-auto shrink-0 rounded-full border border-gold/15 bg-gold/5 px-2.5 py-1 text-[0.6rem] font-medium tracking-wide text-gold-light/80 group-hover:border-gold/30 group-hover:text-gold transition-colors duration-300">
          {t.service}
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const track = [...testimonials, ...testimonials];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.06] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 h-72 w-72 bg-gold/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 h-72 w-72 bg-gold-dark/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Client Feedback"
            title="What Our Clients Say"
            description="Feedback from homeowners, shop owners and site managers we've worked with across Hyderabad."
          />

          <span className="inline-flex shrink-0 items-center gap-2.5 self-start sm:self-auto rounded-full border border-gold/20 bg-gold/5 px-4 py-2.5 shadow-[0_8px_20px_-8px_rgba(212,175,55,0.25)]">
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

        {/* Infinite swiping testimonial marquee */}
        <div className="relative mt-14">
          <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div
              className="flex w-max gap-6 animate-marquee [animation-play-state:running] hover:[animation-play-state:paused]"
              style={{ animationDuration: "48s" }}
            >
              {track.map((t, i) => (
                <TestimonialCard key={`${t.name}-${i}`} t={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
