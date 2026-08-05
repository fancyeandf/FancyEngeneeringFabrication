import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { galleryImages } from "@/data/gallery";

export default function GalleryPreview() {
  const preview = [
    galleryImages[13],
    galleryImages[2],
    galleryImages[3],
    galleryImages[9],
    galleryImages[5],
    galleryImages[6],
    galleryImages[7],
    galleryImages[10],
  ];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background structural grid & ambient glows */}
      <div className="absolute inset-0 bg-grid opacity-[0.06] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-80 w-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-72 w-72 bg-gold-dark/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Sites &amp; Projects"
          description="A glimpse of the gates, grills, sheds and fabrication work delivered across Hyderabad."
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {[0, 1, 2, 3].map((colIdx) => {
            const firstItem = preview[colIdx];
            const secondItem = preview[colIdx + 4];
            const itemsInCol = [
              { item: firstItem, aspect: colIdx % 2 === 0 ? "aspect-[3/4]" : "aspect-square" },
              { item: secondItem, aspect: colIdx % 2 === 0 ? "aspect-square" : "aspect-[3/4]" }
            ];

            return (
              <div key={colIdx} className="flex flex-col gap-4 sm:gap-5">
                {itemsInCol.map(({ item, aspect }) => (
                  <Link
                    key={item.id}
                    href="/projects"
                    className={`group relative overflow-hidden rounded-2xl border border-gold-dark/15 ${aspect} shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.18)] hover:border-gold/30 transition-all duration-500 block`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-750 ease-out group-hover:scale-110 group-hover:rotate-[0.5deg]"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                    
                    {/* Overlay with rich glassmorphism backdrop-blur and metadata */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/95 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5 backdrop-blur-[2px]">
                      <p className="text-[0.7rem] sm:text-xs text-muted/90 font-medium translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-50 line-clamp-1">
                        {item.alt}
                      </p>
                      <span className="flex items-center gap-2 mt-1 text-xs font-semibold tracking-[0.2em] uppercase text-gold-light translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        View Details
                        <ArrowRight className="h-3.5 w-3.5 text-gold transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/projects"
            className="group/btn relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light px-7 py-3 text-sm font-semibold text-[#12100a] hover:shadow-[0_0_24px_rgba(212,175,55,0.45)] transition-all duration-300 hover:scale-105"
          >
            {/* Shimmer sweep effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-[1000ms] pointer-events-none" />
            <span className="relative z-10 flex items-center gap-2">
              <Images className="h-4.5 w-4.5 text-[#12100a]" strokeWidth={1.5} />
              View Full Gallery
              <ArrowRight className="h-4 w-4 text-[#12100a] transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
