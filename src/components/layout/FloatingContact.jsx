import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { site } from "@/data/site";

export default function FloatingContact() {
  const primaryPhone = site.phones[0].replace(/\s/g, "");

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[9990] flex flex-col items-end gap-3.5">
      {/* Call */}
      <a
        href={`tel:+91${primaryPhone}`}
        aria-label="Call us"
        className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-linear-to-br from-gold-dark via-gold to-gold-light text-[#12100a] shadow-[0_8px_24px_rgba(212,175,55,0.4)] hover:scale-110 hover:shadow-[0_10px_30px_rgba(212,175,55,0.55)] transition-all duration-300"
      >
        <Phone className="h-5.5 w-5.5" strokeWidth={2} />
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-surface-2 border border-gold/20 px-3 py-1.5 text-xs font-semibold text-gold-light opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:block shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
          Call Now
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/91${primaryPhone}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_8px_24px_rgba(16,185,129,0.45)] hover:scale-110 hover:shadow-[0_10px_30px_rgba(16,185,129,0.6)] transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500/60 animate-ping" />
        <FaWhatsapp className="relative h-6.5 w-6.5" />
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-surface-2 border border-gold/20 px-3 py-1.5 text-xs font-semibold text-gold-light opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:block shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}
