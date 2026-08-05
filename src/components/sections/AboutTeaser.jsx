import Link from "next/link";
import Image from "next/image";
import { Quote, ArrowRight, CalendarDays, Layers, Trophy } from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import { site } from "@/data/site";

const inIndustrySince = new Date().getFullYear() - 25;

const stats = [
  { icon: CalendarDays, value: `${inIndustrySince}`, label: "In The Industry Since" },
  { icon: Layers, value: "6+", label: "Areas of Expertise" },
  { icon: Trophy, value: "100+", label: "Projects Delivered" },
];

export default function AboutTeaser() {
  return (
    <section className="py-20 sm:py-28 bg-surface/30 backdrop-blur-sm border-y border-gold/10 relative overflow-hidden">
      {/* Background structural grid & soft light orbs */}
      <div className="absolute inset-0 bg-grid opacity-[0.07] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-80 w-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 h-72 w-72 bg-gold-dark/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-14 lg:grid-cols-2 items-center relative z-10">
        <div className="flex justify-center lg:justify-start">
          {/* Director photo, shown at its native 3:2 ratio — no crop */}
          <div className="group relative w-full max-w-lg lg:max-w-xl rounded-2xl overflow-hidden border border-gold/20 shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-700 hover:border-gold/35">
            <div className="relative aspect-3/2">
              <Image
                src="/team/Director.jpeg"
                alt={site.founderName}
                fill
                className="object-cover transition-transform duration-750 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 90vw, 512px"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent pointer-events-none" />

            <span className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-surface-2 text-gold shadow-[0_10px_25px_-5px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-300">
              <Quote className="h-5 w-5" fill="currentColor" />
            </span>
          </div>
        </div>

        <div>
          <span className="text-xs sm:text-sm tracking-[0.35em] uppercase text-gold-dark font-medium">
            Meet The Founder
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-gold-gradient">
            {site.founderName}
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm tracking-wide text-muted uppercase font-medium">
            {site.founderTitle}
          </p>
          <p className="mt-6 text-base sm:text-lg text-muted/95 leading-relaxed">
            With nearly 25 years of experience in structural engineering and
            fabrication, Irfan Syed has built a reputation for quality,
            integrity, and timely project execution across India. His
            expertise spans structural engineering, steel and industrial
            fabrication, welding solutions, and custom engineering works.
          </p>
          <div className="mt-6 border-l-2 border-gold-dark pl-4 py-2.5 bg-gold/5 rounded-r-lg max-w-xl">
            <p className="font-display text-base sm:text-[1.05rem] text-gold-light/95 italic leading-relaxed">
              &ldquo;Success is built on quality, trust, hard work, and the blessings of our parents.&rdquo;
            </p>
          </div>

          {/* Stats strip */}
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {stats.map((stat) => (
              <div key={stat.label} className="group/stat">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/5 border border-gold/10 text-gold mb-2.5 group-hover/stat:border-gold/30 transition-all duration-300">
                  <stat.icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                </span>
                <div className="font-display text-2xl sm:text-3xl font-bold text-gold-gradient">
                  <CountUp value={stat.value} />
                </div>
                <div className="mt-1 text-[0.65rem] sm:text-xs text-muted/80 uppercase tracking-widest leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-12 inline-flex items-center gap-2 rounded-full border border-gold/25 px-5 py-2.5 text-sm font-semibold text-gold hover:bg-gold hover:text-[#12100a] hover:border-transparent hover:shadow-[0_0_18px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-105"
          >
            Read Full Story
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
