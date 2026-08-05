import { Fence, DoorOpen, Grid3x3, Blinds, Warehouse, Waves, Building2, Flame } from "lucide-react";
import { services } from "@/data/services";

const icons = {
  "automatic-gates": Fence,
  "doors-windows": DoorOpen,
  grills: Grid3x3,
  shutters: Blinds,
  "sheds-trusses": Warehouse,
  "flexible-gates": Waves,
  "structural-engineering": Building2,
  "welding-project-management": Flame,
};

export default function ServicesMarquee() {
  const items = [...services, ...services];

  return (
    <div className="relative overflow-hidden bg-[#0a090d]/90 backdrop-blur-md py-4 sm:py-5.5 shadow-[0_10px_40px_rgba(0,0,0,0.9)]">
      {/* Premium glowing top & bottom gradient lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent pointer-events-none" />

      {/* Background gold glow orb for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-12 bg-gold/5 rounded-full blur-[45px] pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] transition-all duration-300 py-1">
        {items.map((service, i) => {
          const Icon = icons[service.slug];
          return (
            <span
              key={`${service.slug}-${i}`}
              className="flex items-center gap-2.5 sm:gap-3.5 px-4.5 py-2 sm:px-6 sm:py-2.5 mx-2 sm:mx-4 rounded-full border border-gold/15 bg-surface/80 backdrop-blur-sm whitespace-nowrap group cursor-default transition-all duration-500 hover:border-gold/50 hover:bg-gold/[0.04] hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(212,175,55,0.18)]"
            >
              {Icon && (
                <Icon 
                  className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-gold transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" 
                  strokeWidth={1.5} 
                />
              )}
              <span className="text-xs sm:text-[0.8rem] font-display font-bold tracking-[0.22em] uppercase text-foreground/90 group-hover:text-gold-light group-hover:translate-x-0.5 transition-all duration-300">
                {service.title}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
