"use client";

import { useState, useCallback, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, Play, ChevronDown } from "lucide-react";

const PAGE_SIZE = 9;

const emptySubscribe = () => () => {};

export default function VideoGrid({ videos }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [activeIndex, setActiveIndex] = useState(null);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const isOpen = activeIndex !== null;

  const shown = videos.slice(0, visible);

  const close = useCallback(() => setActiveIndex(null), []);
  const showNext = useCallback(
    () => setActiveIndex((i) => (i + 1) % videos.length),
    [videos.length]
  );
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i - 1 + videos.length) % videos.length),
    [videos.length]
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up">
        {shown.map((video, index) => (
          <button
            key={video.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="card-glow group relative overflow-hidden rounded-2xl border border-gold-dark/15 bg-[#0b0b0d] p-1.5 text-left transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/35 hover:shadow-[0_15px_35px_rgba(212,175,55,0.12)] cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl bg-black aspect-video">
              <span className="absolute top-3 left-3 z-10 rounded-full border border-gold/20 bg-background/70 backdrop-blur-sm px-2.5 py-1 text-[0.65rem] font-semibold tracking-wider text-gold-light">
                {String(index + 1).padStart(2, "0")}
              </span>
              <video
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full bg-black object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25 opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
            </div>
          </button>
        ))}
      </div>

      {/* Load More Button */}
      {visible < videos.length && (
        <div className="mt-10 flex justify-center animate-fade-up">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/30 bg-surface/30 backdrop-blur-xs px-7 py-3.5 text-xs font-semibold tracking-widest uppercase text-gold hover:bg-gold hover:text-[#12100a] transition-all hover:scale-105 cursor-pointer"
          >
            <span>Load More Videos</span>
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
            aria-label="Previous video"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 sm:left-6 z-50 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-gold/30 bg-surface-2/80 text-gold hover:bg-gold hover:text-[#12100a] transition-all hover:scale-105"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Active video content */}
          <div
            className="relative w-full max-w-4xl aspect-video max-h-[75vh] rounded-2xl overflow-hidden border border-gold/15 bg-background/50 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              key={videos[activeIndex].id}
              src={videos[activeIndex].src}
              controls
              autoPlay
              muted
              playsInline
              className="h-full w-full bg-black"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Next button */}
          <button
            type="button"
            aria-label="Next video"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 sm:right-6 z-50 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-gold/30 bg-surface-2/80 text-gold hover:bg-gold hover:text-[#12100a] transition-all hover:scale-105"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Video index footer */}
          <div className="absolute bottom-4 sm:bottom-6 bg-surface-2/80 backdrop-blur-md border border-gold/15 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-gold-light">
            {activeIndex + 1} / {videos.length}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
