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
    <div className="relative overflow-hidden border-y border-gold/15 bg-gradient-to-r from-transparent via-surface/40 to-transparent py-6.5 shadow-[inset_0_1px_0_rgba(212,175,55,0.06),inset_0_-1px_0_rgba(212,175,55,0.06)]">
      {/* Soft background gold glow orb for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-10 bg-gold/5 rounded-full blur-[40px] pointer-events-none" />

      {/* Side gradient fades for smooth visual integration */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] transition-all duration-300 py-1">
        {items.map((service, i) => {
          const Icon = icons[service.slug];
          return (
            <span
              key={`${service.slug}-${i}`}
              className="flex items-center gap-3 px-5 py-2.5 mx-3 rounded-full border border-gold/10 bg-surface/40 backdrop-blur-xs whitespace-nowrap group cursor-default transition-all duration-300 hover:border-gold/30 hover:bg-surface-2/70 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(212,175,55,0.08)]"
            >
              {Icon && (
                <Icon 
                  className="h-4 w-4 text-gold/60 group-hover:text-gold transition-colors" 
                  strokeWidth={1.5} 
                />
              )}
              <span className="text-xs font-display font-semibold tracking-[0.2em] uppercase text-muted group-hover:text-gold-light transition-colors duration-300">
                {service.title}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
