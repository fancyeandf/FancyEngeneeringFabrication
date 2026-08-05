import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export default function ServicesGrid({ limit, showHeading = true, showCta = true }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Ambient background glows for visual depth */}
      <div className="absolute top-1/4 left-1/4 h-80 w-80 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 bg-gold-dark/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {showHeading && (
          <SectionHeading
            eyebrow="What We Do"
            title="Our Services"
            description="From automatic gates to full industrial sheds, every project is engineered with precision and built to endure."
          />
        )}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service, index) => (
            <div
              key={service.slug}
              className="card-glow group relative flex flex-col rounded-2xl border border-gold-dark/15 bg-surface/50 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-gold/30 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] overflow-hidden"
            >
              {/* Photo header */}
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface/90 via-surface/10 to-transparent" />

                {/* Index badge */}
                <span className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-gold/25 bg-background/60 backdrop-blur-md font-display text-xs font-semibold tracking-widest text-gold-light">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="relative flex flex-1 flex-col p-7">
                {/* Diagonal glassmorphic sheen sweep */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 pointer-events-none" />

                <h3 className="relative font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-gold-light transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-[0.95rem] sm:text-base text-muted/90 leading-relaxed">
                  {service.description}
                </p>

                {service.highlights && (
                  <ul className="relative mt-5 flex flex-wrap gap-2">
                    {service.highlights.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-gold/15 bg-gold/4 px-3 py-1 text-[0.72rem] sm:text-xs font-medium tracking-wide text-gold-light/80 group-hover:border-gold/25 group-hover:text-gold-light transition-colors duration-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href={`/contact#service=${service.slug}`}
                  className="relative mt-6 inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-gold/70 border-t border-gold/10 pt-5 group-hover:text-gold transition-colors duration-300"
                >
                  Get a Quote
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {showCta && (
          <div className="mt-14 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-gold/25 px-6 py-3 text-sm font-semibold text-gold hover:bg-gold hover:text-[#12100a] hover:border-transparent hover:shadow-[0_0_18px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-105"
            >
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
