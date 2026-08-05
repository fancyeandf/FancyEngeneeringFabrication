import { MessageSquare, Ruler, Flame, Truck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description:
      "We visit your site or hear out your requirement to understand scope, budget and timeline.",
  },
  {
    icon: Ruler,
    title: "Design & Planning",
    description:
      "Precise measurements and structural planning tailored to your space and load requirements.",
  },
  {
    icon: Flame,
    title: "Fabrication",
    description:
      "Skilled welders and fabricators build every piece in-house to exact specifications.",
  },
  {
    icon: Truck,
    title: "Installation & Support",
    description:
      "On-site installation with a clean finish, backed by after-sales support when you need it.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title="From Consultation to Installation"
          description="A straightforward process that keeps every fabrication project on track, start to finish."
        />

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line for desktop */}
          <div className="pointer-events-none absolute top-7 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-gold-dark/20 to-transparent lg:block" />

          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center text-center gap-4">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-gold/25 bg-background text-gold shadow-[0_0_12px_rgba(212,175,55,0.1)]">
                <step.icon className="h-6 w-6" strokeWidth={1.5} />
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[0.6rem] font-bold text-[#12100a]">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted/90 leading-relaxed max-w-[220px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
