"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function ContactInfoCard({
  icon,
  label,
  value,
  href,
  copyValue,
  delay = "0s",
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — silently ignore
    }
  };

  const Content = (
    <>
      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/25 bg-gold/5 text-gold shrink-0 transition-colors group-hover:bg-gold group-hover:text-[#12100a] group-hover:border-gold">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <h3 className="text-[0.65rem] tracking-[0.25em] uppercase text-gold-dark mb-1 font-bold">
          {label}
        </h3>
        <p className="text-sm text-foreground/90 leading-relaxed break-words">
          {value}
        </p>
      </span>
    </>
  );

  return (
    <div
      className="card-glow group animate-fade-up relative rounded-2xl border border-gold-dark/15 bg-surface/50 backdrop-blur-md p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/20"
      style={{ animationDelay: delay }}
    >
      {copyValue && (
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy ${label}`}
          className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full border border-gold/15 bg-background/40 text-muted hover:text-gold hover:border-gold/40 transition-all duration-300 cursor-pointer"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-gold" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      )}

      {href ? (
        <a
          href={href}
          className="flex items-start gap-4 hover:text-gold transition-colors pr-6"
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {Content}
        </a>
      ) : (
        <div className="flex items-start gap-4 pr-6">{Content}</div>
      )}
    </div>
  );
}
