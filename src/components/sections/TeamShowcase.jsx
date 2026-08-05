"use client";

import { useState, useCallback, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, BadgeCheck } from "lucide-react";
import { team, teamPhotos } from "@/data/team";

const emptySubscribe = () => () => {};

const allImages = [
  ...team.map((m) => ({ id: m.name, src: m.photo, alt: m.name, caption: m.name, sub: m.title })),
  ...teamPhotos.map((p) => ({ id: p.id, src: p.src, alt: p.alt })),
];

export default function TeamShowcase() {
  const [activeIndex, setActiveIndex] = useState(null);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const showNext = useCallback(
    () => setActiveIndex((i) => (i + 1) % allImages.length),
    []
  );
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i - 1 + allImages.length) % allImages.length),
    []
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, showNext, showPrev]);

  const active = isOpen ? allImages[activeIndex] : null;

  return (
    <>
      {/* Profile cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {team.map((member, i) => (
          <button
            type="button"
            key={member.name}
            onClick={() => setActiveIndex(i)}
            className="card-glow group relative w-full max-w-90 overflow-hidden rounded-2xl border border-gold-dark/15 bg-surface/40 backdrop-blur-md flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:border-gold/30 hover:shadow-[0_25px_50px_-15px_rgba(212,175,55,0.2)] cursor-zoom-in"
          >
            <div className="relative w-full aspect-3/2 overflow-hidden">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                <div className="p-3 rounded-full bg-gold/10 text-gold shadow-[0_0_12px_rgba(212,175,55,0.2)]">
                  <ZoomIn className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-gold-light">
                  View Photo
                </span>
              </div>
              <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-light text-[#12100a] border-2 border-surface shadow-[0_10px_20px_-5px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-300">
                <BadgeCheck className="h-5 w-5" strokeWidth={2} />
              </span>
            </div>
            <div className="relative w-full p-6 flex flex-col items-center">
              <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
              <h4 className="relative font-display text-xl font-bold text-gold-gradient">
                {member.name}
              </h4>
              <span className="relative mt-2.5 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                {member.title}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Team moments */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {teamPhotos.map((photo, i) => (
          <button
            type="button"
            key={photo.id}
            onClick={() => setActiveIndex(team.length + i)}
            className="card-glow group relative aspect-square overflow-hidden rounded-2xl border border-gold-dark/15 hover:border-gold/30 hover:shadow-[0_12px_30px_rgba(212,175,55,0.15)] transition-all duration-500 cursor-zoom-in"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div className="p-3 rounded-full bg-gold/10 text-gold shadow-[0_0_12px_rgba(212,175,55,0.2)]">
                <ZoomIn className="h-5 w-5" strokeWidth={1.5} />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal — portalled to <body>, same pattern as the projects gallery */}
      {isOpen && mounted && createPortal(
        <div
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md px-4 py-8 select-none"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute top-4 right-4 z-50 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-gold/30 bg-surface-2/80 text-gold hover:bg-gold hover:text-[#12100a] transition-all hover:scale-105"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 sm:left-6 z-50 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-gold/30 bg-surface-2/80 text-gold hover:bg-gold hover:text-[#12100a] transition-all hover:scale-105"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            className="relative w-full max-w-4xl aspect-[4/5] sm:aspect-square md:aspect-video max-h-[65vh] sm:max-h-[75vh] rounded-2xl overflow-hidden border border-gold/15 bg-background/50 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              className="object-contain p-3"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>

          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 sm:right-6 z-50 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-gold/30 bg-surface-2/80 text-gold hover:bg-gold hover:text-[#12100a] transition-all hover:scale-105"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 sm:bottom-6 flex flex-col items-center gap-1.5">
            {active.caption && (
              <span className="bg-surface-2/80 backdrop-blur-md border border-gold/15 px-4 py-1.5 rounded-full text-xs font-semibold text-gold-light">
                {active.caption}
                {active.sub && <span className="text-muted font-normal"> — {active.sub}</span>}
              </span>
            )}
            <span className="bg-surface-2/80 backdrop-blur-md border border-gold/15 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-gold-light">
              {activeIndex + 1} / {allImages.length}
            </span>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
