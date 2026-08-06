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
              className="group relative flex flex-col rounded-3xl p-[1px] bg-gradient-to-b from-gold/20 via-gold-dark/5 to-gold/30 hover:from-gold hover:via-gold/30 hover:to-gold-light transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_70px_-10px_rgba(212,175,55,0.45)] overflow-hidden"
            >
              {/* Inner container containing the actual card details */}
              <div className="flex flex-1 flex-col rounded-[23px] bg-gradient-to-b from-[#141210] to-[#0a0807] overflow-hidden h-full">
                
                {/* Dynamic Golden Aura on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/0 via-gold/[0.04] to-gold/[0.12] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Glowing Corner Accents */}
                <div className="absolute top-3.5 left-3.5 w-3 h-3 border-t-2 border-l-2 border-gold/25 group-hover:border-gold/70 transition-all duration-500 z-20 pointer-events-none" />
                <div className="absolute top-3.5 right-3.5 w-3 h-3 border-t-2 border-r-2 border-gold/25 group-hover:border-gold/70 transition-all duration-500 z-20 pointer-events-none" />
                <div className="absolute bottom-3.5 left-3.5 w-3 h-3 border-b-2 border-l-2 border-gold/25 group-hover:border-gold/70 transition-all duration-500 z-20 pointer-events-none" />
                <div className="absolute bottom-3.5 right-3.5 w-3 h-3 border-b-2 border-r-2 border-gold/25 group-hover:border-gold/70 transition-all duration-500 z-20 pointer-events-none" />

                {/* Image Frame with Metallic Border */}
                <Link href={`/services/${service.slug}`} className="relative aspect-16/10 overflow-hidden block border-b border-gold/15">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Deluxe Gold Medal Index Badge */}
                  <span className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl border border-gold/30 bg-black/85 backdrop-blur-md font-display text-sm font-black tracking-widest text-gold shadow-[0_0_15px_rgba(212,175,55,0.25)] group-hover:border-gold-light group-hover:text-gold-light group-hover:shadow-[0_0_25px_rgba(212,175,55,0.65)] transition-all duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>

                {/* Content Panel */}
                <div className="relative flex flex-1 flex-col p-6 sm:p-8">
                  {/* Glassmorphic sheen sweep */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1800ms] pointer-events-none" />

                  <Link href={`/services/${service.slug}`}>
                    <h3 className="relative font-display text-xl sm:text-2xl font-black text-gold-light group-hover:text-gold transition-colors duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]">
                      {service.title}
                    </h3>
                  </Link>
                  <p className="relative mt-3 text-sm sm:text-base text-muted/80 leading-relaxed min-h-[3.25rem]">
                    {service.description}
                  </p>

                  {/* Glowing Spec Tags */}
                  {service.highlights && (
                    <ul className="relative mt-5 mb-8 flex flex-wrap gap-2">
                      {service.highlights.map((tag) => (
                        <li
                          key={tag}
                          className="flex items-center gap-1 rounded-full border border-gold/20 bg-gradient-to-r from-gold/5 to-transparent px-3.5 py-1 text-[0.7rem] sm:text-xs font-semibold tracking-wide text-gold-light/90 hover:border-gold-light/45 hover:bg-gold/10 transition-all duration-300"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_6px_var(--gold)]" />
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Interactive Action Row */}
                  <div className="relative mt-auto pt-6 flex items-center justify-between border-t border-gold/15">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/5 px-5 py-2.5 text-xs font-extrabold tracking-widest uppercase text-gold hover:bg-gradient-to-r hover:from-gold hover:to-gold-light hover:text-[#12100a] hover:border-transparent hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300 scale-100 hover:scale-102"
                    >
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300" />
                    </Link>
                    <Link
                      href={`/contact#service=${service.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold tracking-widest uppercase text-muted hover:text-gold transition-colors duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
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
