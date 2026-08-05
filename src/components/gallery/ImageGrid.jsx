"use client";

import { useState, useCallback, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, ChevronDown } from "lucide-react";

const INITIAL_PAGE_SIZE = 12;

const emptySubscribe = () => () => {};

export default function ImageGrid({ images }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_PAGE_SIZE);
  const [activeIndex, setActiveIndex] = useState(null);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const isOpen = activeIndex !== null;

  const shownImages = images.slice(0, visibleCount);

  const close = useCallback(() => setActiveIndex(null), []);
  const showNext = useCallback(
    () => setActiveIndex((i) => (i + 1) % images.length),
    [images.length]
  );
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
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

  return (
    <>
      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 animate-fade-up">
        {shownImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="card-glow group relative aspect-square overflow-hidden rounded-2xl border border-gold-dark/15 hover:border-gold/30 hover:shadow-[0_12px_30px_rgba(212,175,55,0.15)] transition-all duration-500 cursor-zoom-in"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <span className="absolute top-3 left-3 rounded-full border border-gold/20 bg-background/60 backdrop-blur-sm px-2.5 py-1 text-[0.65rem] font-semibold tracking-wider text-gold-light opacity-0 group-hover:opacity-100 transition-all duration-300">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2">
              <div className="p-3 rounded-full bg-gold/10 text-gold shadow-[0_0_12px_rgba(212,175,55,0.2)]">
                <ZoomIn className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-semibold tracking-wider uppercase text-gold-light">
                View Full Size
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < images.length && (
        <div className="mt-12 flex justify-center animate-fade-up">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + INITIAL_PAGE_SIZE)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/30 bg-surface/30 backdrop-blur-xs px-7 py-3.5 text-xs font-semibold tracking-widest uppercase text-gold hover:bg-gold hover:text-[#12100a] transition-all hover:scale-105 cursor-pointer"
          >
            <span>Load More Work</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Lightbox Modal — portalled to <body> so it always renders above
          the navbar, regardless of any transformed/animated ancestor */}
      {isOpen && mounted && createPortal(
        <div
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md px-4 py-8 select-none"
          onClick={close}
        >
          {/* Close button */}
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute top-4 right-4 z-50 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-gold/30 bg-surface-2/80 text-gold hover:bg-gold hover:text-[#12100a] transition-all hover:scale-105"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev button */}
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

          {/* Active image content - aspect ratio constrained on mobile */}
          <div
            className="relative w-full max-w-4xl aspect-[4/5] sm:aspect-square md:aspect-video max-h-[65vh] sm:max-h-[75vh] rounded-2xl overflow-hidden border border-gold/15 bg-background/50 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              className="object-contain p-3"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>

          {/* Next button */}
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

          {/* Image index footer */}
          <div className="absolute bottom-4 sm:bottom-6 bg-surface-2/80 backdrop-blur-md border border-gold/15 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-gold-light">
            {activeIndex + 1} / {images.length}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
