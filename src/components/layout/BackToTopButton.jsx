"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/20 bg-background/30 text-gold hover:border-gold hover:bg-gold hover:text-[#12100a] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(212,175,55,0.35)] transition-all duration-300"
    >
      <ArrowUp className="h-3.5 w-3.5" strokeWidth={2} />
    </button>
  );
}
