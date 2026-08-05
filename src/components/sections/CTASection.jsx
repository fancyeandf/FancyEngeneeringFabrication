import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export default function CTASection({
  title = "Have a project in mind?",
  description = `Reach out to ${site.founderName} and the ${site.shortName} team for a consultation on gates, doors, grills, sheds and custom fabrication work.`,
}) {
  const primaryPhone = site.phones[0].replace(/\s/g, "");

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Glassmorphic premium card with gradient borders */}
        <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-surface/40 backdrop-blur-lg px-8 py-16 sm:px-16 sm:py-20 text-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
          {/* Subtle gold grid pattern inside CTA card */}
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
          
          {/* Background glowing blob */}
          <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-gold/10 blur-3xl group-hover:bg-gold/15 transition-all duration-700" />
          <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-gold-dark/10 blur-3xl group-hover:bg-gold-dark/15 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold-dark/5" />
          
          <div className="relative z-10">
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-gold-gradient pb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              {title}
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-muted/95 text-base sm:text-lg leading-relaxed">
              {description}
            </p>
            <div className="mt-10 flex flex-row items-center justify-center gap-2.5 sm:gap-4">
              <Button href={`tel:+91${primaryPhone}`} className="shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:scale-105">
                <Phone className="h-4.5 w-4.5" />
                Call Now
              </Button>
              <Button
                href={`https://wa.me/91${primaryPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                className="hover:scale-105"
              >
                <FaWhatsapp className="h-4.5 w-4.5 shrink-0" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
