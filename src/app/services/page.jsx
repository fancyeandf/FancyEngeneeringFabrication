import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CTASection from "@/components/sections/CTASection";
import CountUp from "@/components/ui/CountUp";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { Wrench, Award, Timer } from "lucide-react";

export const metadata = {
  title: `Services | ${site.name}`,
  description:
    "Automatic gates, doors, windows, grills, shutters, sheds, trusses, flexible gates and structural engineering — Fancy Engineering and Fabrication, Hyderabad.",
};

const stats = [
  { icon: Wrench, value: `${services.length}+`, label: "Core Services" },
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Timer, value: "< 2 Hr", label: "Avg. Response Time" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-20 sm:pt-28 pb-4 overflow-hidden">
        {/* ambient gold glows + blueprint watermark — pinned to the hero area only */}
        <div className="absolute inset-x-0 top-0 h-160 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grid opacity-60 mask-[linear-gradient(to_bottom,black,transparent)]" />
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-[100px] animate-glow-pulse" />
          <div
            className="absolute top-20 -right-24 h-80 w-80 rounded-full bg-gold-dark/10 blur-[110px] animate-glow-pulse"
            style={{ animationDelay: "1.5s" }}
          />
          <div className="absolute inset-0 bg-noise opacity-40" />
        </div>

        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <span className="text-xs sm:text-sm tracking-[0.35em] uppercase text-gold-dark">
            What We Do
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-semibold text-gold-gradient">
            All Kinds of Engineering &amp; Fabrication
          </h1>
          <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed">
            Automatic gates, doors, windows, grills, shutters, sheds, trusses
            and flexible gates — engineered and fabricated with precision for
            homes, shops and industrial sites across Hyderabad.
          </p>

          {/* Trust stat strip */}
          <div className="card-glow animate-fade-up mx-auto mt-12 grid max-w-xl grid-cols-3 gap-3 sm:gap-6 rounded-2xl border border-gold-dark/15 bg-surface/40 backdrop-blur-md px-4 py-6 sm:px-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center gap-1.5 border-gold/10 ${
                  i !== stats.length - 1 ? "border-r" : ""
                }`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/5 text-gold mb-0.5">
                  <stat.icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                </span>
                <div className="font-display text-xl sm:text-2xl font-semibold text-gold-gradient">
                  <CountUp value={stat.value} />
                </div>
                <div className="text-[0.6rem] sm:text-xs text-muted uppercase tracking-wide leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid showHeading={false} showCta={false} />
      <div className="section-divider" />
      <ProcessSteps />
      <CTASection
        title="Found the service you need?"
        description="Whether it's automatic gates, shutters or a full industrial shed, get in touch for a free consultation and quote on your fabrication project."
      />
    </>
  );
}
