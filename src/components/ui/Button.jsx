import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-4 sm:px-6 py-3 text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-gold-dark via-gold to-gold-light text-[#12100a] hover:brightness-110 hover:shadow-[0_0_24px_rgba(212,175,55,0.35)]",
    outline:
      "border border-gold-dark text-gold hover:bg-gold hover:text-[#12100a]",
    whatsapp:
      "border border-emerald-500/40 bg-emerald-950/15 text-emerald-400 hover:bg-emerald-500 hover:text-[#0b1411] hover:border-transparent hover:shadow-[0_0_18px_rgba(16,185,129,0.35)]",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
