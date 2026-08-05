import OrnateDivider from "@/components/ui/OrnateDivider";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignClass = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignClass} gap-4`}>
      {eyebrow && (
        <span className="text-sm sm:text-base tracking-[0.3em] uppercase text-gold-dark font-semibold">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-gold-gradient pb-2">
        {title}
      </h2>
      <OrnateDivider />
      {description && (
        <p className="max-w-2xl text-muted text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
