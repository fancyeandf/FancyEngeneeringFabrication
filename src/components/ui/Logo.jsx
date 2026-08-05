import Image from "next/image";
import { site } from "@/data/site";

function CrestMark({ className = "h-10 w-10" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 38 L28 20 L38 34 L50 16 L62 34 L72 20 L80 38 L74 40 L26 40 Z"
        fill="url(#crownGrad)"
        stroke="var(--gold-dark)"
        strokeWidth="1"
      />
      <rect x="24" y="40" width="52" height="8" rx="1.5" fill="url(#crownGrad)" />
      <circle cx="28" cy="20" r="3" fill="var(--gold-light)" />
      <circle cx="50" cy="16" r="3" fill="var(--gold-light)" />
      <circle cx="72" cy="20" r="3" fill="var(--gold-light)" />
      <path
        d="M50 48 C50 58 40 56 36 62 C33 66 36 70 41 68 M50 48 C50 58 60 56 64 62 C67 66 64 70 59 68"
        stroke="var(--gold)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="crownGrad" x1="20" y1="16" x2="80" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9c7a22" />
          <stop offset="0.5" stopColor="#f1d98b" />
          <stop offset="1" stopColor="#d4af37" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Logo({ withTagline = true, size = "md", logoSrc = "/brand/logo.png" }) {
  const textSize = size === "lg" ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl";
  const crestSize = size === "lg" ? "h-16 w-16" : "h-9 w-9";

  if (logoSrc) {
    const isLg = size === "lg";
    return (
      <span className="inline-flex items-center">
        <Image
          src={logoSrc}
          alt={site.name}
          width={isLg ? 220 : 105}
          height={isLg ? 110 : 52}
          className={`object-contain ${isLg ? "w-[220px] h-[110px]" : "w-[105px] h-[52px]"}`}
          priority
        />
      </span>
    );
  }

  return (
    <span className="inline-flex flex-col items-center leading-none">
      <span className="inline-flex items-center gap-2">
        <CrestMark className={crestSize} />
      </span>
      <span
        className={`font-display font-semibold tracking-[0.15em] text-gold-gradient ${textSize}`}
      >
        FANCY
      </span>
      {withTagline && (
        <span className="mt-1 text-[0.55rem] sm:text-[0.6rem] tracking-[0.3em] text-muted uppercase">
          Engineering &amp; Fabrication
        </span>
      )}
    </span>
  );
}
