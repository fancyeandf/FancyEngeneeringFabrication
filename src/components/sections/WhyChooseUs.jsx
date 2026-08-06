import { Users, ShieldCheck, Clock, BadgeIndianRupee, Headphones } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const points = [
  {
    title: "Experienced Team",
    description:
      "Skilled and certified fabricators with decades of experience handling complex engineering projects.",
    icon: Users,
  },
  {
    title: "Quality Materials",
    description:
      "We source premium-grade steel and raw materials to ensure maximum structural strength and durability.",
    icon: ShieldCheck,
  },
  {
    title: "On-Time Delivery",
    description:
      "Highly planned execution and commitment to project timelines, delivering on schedule.",
    icon: Clock,
  },
  {
    title: "Competitive Pricing",
    description:
      "Transparent quotes with zero hidden charges, offering the best value for your fabrication budget.",
    icon: BadgeIndianRupee,
  },
  {
    title: "24/7 Support",
    description:
      "Always available for customer inquiries, maintenance assistance, and immediate project updates.",
    icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 h-80 w-80 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 h-96 w-96 bg-gold-dark/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built On Quality &amp; Trust"
          description="What sets our engineering and fabrication work apart, project after project."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {points.map((point) => (
            <div
              key={point.title}
              className="card-glow group relative rounded-2xl border border-gold-dark/15 bg-surface/50 backdrop-blur-md p-8 text-center flex flex-col items-center transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:bg-[#0f0e12]/60 hover:border-gold/30 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.18)] overflow-hidden"
            >
              {/* Top edge gold glowing line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Background grid inside card */}
              <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
              
              {/* Diagonal glassmorphic sheen sweep */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1250ms] pointer-events-none" />

              <div className="absolute -bottom-10 -left-10 h-20 w-20 rounded-full bg-gold/5 blur-xl group-hover:bg-gold/10 transition-colors pointer-events-none" />

              <span className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-gold/20 text-gold mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-gold-light group-hover:text-[#12100a] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] shadow-[0_0_12px_rgba(212,175,55,0.1)]">
                <point.icon className="h-6 w-6 transition-transform duration-500 group-hover:rotate-6" strokeWidth={1.5} />
              </span>
              <h3 className="relative font-display text-[1.12rem] sm:text-lg font-bold text-foreground group-hover:text-gold-light transition-colors duration-300">
                {point.title}
              </h3>
              <p className="relative mt-3 text-[0.95rem] sm:text-base text-muted/90 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
