import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, PhoneCall, CheckCircle2, MessageSquare, Shield, Clock, Sparkles, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";
import { site } from "@/data/site";
import OrnateDivider from "@/components/ui/OrnateDivider";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | Premium Fabrication in Hyderabad`,
    description: `${service.description} Get high-quality, durable, and precision-engineered ${service.title} from Fancy Engineering.`,
    keywords: [
      service.title,
      `${service.title} Hyderabad`,
      "industrial sheds hyderabad",
      "best fabricator hyderabad",
      site.name,
    ],
  };
}

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 5);
  const primaryPhone = site.phones[0].replace(/\s/g, "");

  return (
    <div className="relative min-h-screen bg-[#08080a] text-foreground overflow-hidden pt-12 sm:pt-24 pb-16 sm:pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 h-[500px] w-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 h-[600px] w-[600px] bg-gold-dark/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex flex-wrap items-center gap-2 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-widest text-muted mb-6">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
          <span>/</span>
          <span className="text-gold-light">{service.title}</span>
        </nav>

        {/* Back Link */}
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold/70 hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to all services
        </Link>

        {/* Title */}
        <div className="mb-10">
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-gold-gradient leading-tight tracking-tight text-balance">
            {service.title}
          </h1>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Image, Content, Features */}
          <div className="lg:col-span-8 space-y-12">
            {/* Showcased Image with Elegant Gradient Frame */}
            <div className="relative group rounded-3xl p-[1.5px] bg-gradient-to-b from-gold/30 via-gold-dark/5 to-gold/40 hover:from-gold hover:to-gold-light transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
              <div className="relative aspect-16/10 rounded-[23px] overflow-hidden bg-surface-dark">
                {/* Subtle gold line on top */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50 z-10" />

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-103"
                  sizes="(max-width: 1024px) 100vw, 820px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Deep Description with 1.5px Gradient Wrap */}
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-gold/15 via-gold-dark/5 to-gold/15 overflow-hidden shadow-xl">
              <div className="rounded-[23px] bg-gradient-to-b from-[#141210] to-[#0a0807] p-6 sm:p-8 relative space-y-6">
                <div className="absolute top-3.5 left-3.5 w-3 h-3 border-t-2 border-l-2 border-gold/15 pointer-events-none" />
                <div className="absolute top-3.5 right-3.5 w-3 h-3 border-t-2 border-r-2 border-gold/15 pointer-events-none" />
                
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gold-gradient drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  Overview &amp; Project Engineering
                </h2>
                <OrnateDivider className="w-36" />
                <p className="text-base sm:text-lg text-muted/95 leading-relaxed">
                  At <strong>{site.name}</strong>, our <strong>{service.title}</strong> is designed and built to the highest structural standards. We deliver custom solutions for industrial sheds, warehouses, luxury residences, and commercial establishments in Hyderabad.
                </p>
                <p className="text-sm sm:text-base text-muted/80 leading-relaxed">
                  Every structure is planned using advanced engineering calculations, selecting high-tensile steel, premium grade materials, and protective coatings to combat extreme weather conditions. Our certified team works closely with site planners to ensure flawless execution and on-time commissioning.
                </p>
              </div>
            </div>

            {/* Premium Highlights Grid with 1.5px Gradient Wrap */}
            {service.highlights && (
              <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-gold/25 via-gold-dark/5 to-gold/25 overflow-hidden shadow-xl">
                <div className="rounded-[23px] bg-gradient-to-b from-[#141210] to-[#0a0807] p-6 sm:p-8 relative">
                  <div className="absolute top-3.5 left-3.5 w-3 h-3 border-t-2 border-l-2 border-gold/25 pointer-events-none" />
                  <div className="absolute top-3.5 right-3.5 w-3 h-3 border-t-2 border-r-2 border-gold/25 pointer-events-none" />
                  <div className="absolute bottom-3.5 left-3.5 w-3 h-3 border-b-2 border-l-2 border-gold/25 pointer-events-none" />
                  <div className="absolute bottom-3.5 right-3.5 w-3 h-3 border-b-2 border-r-2 border-gold/25 pointer-events-none" />

                  <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-gold mb-6">
                    Key Specifications &amp; Features
                  </h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {service.highlights.map((tag) => (
                      <div key={tag} className="flex items-center gap-3 group">
                        <span className="flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-lg bg-gold/5 border border-gold/20 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-sm sm:text-base text-foreground font-semibold tracking-wide">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 border-t border-gold/15 pt-8">
              <div className="text-center p-4 rounded-2xl bg-surface/20 border border-gold/5 hover:border-gold/15 hover:shadow-[0_4px_15px_rgba(212,175,55,0.05)] transition-all">
                <Shield className="h-6 w-6 text-gold mx-auto mb-2" strokeWidth={1.5} />
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold-light">100% Quality Steel</h4>
              </div>
              <div className="text-center p-4 rounded-2xl bg-surface/20 border border-gold/5 hover:border-gold/15 hover:shadow-[0_4px_15px_rgba(212,175,55,0.05)] transition-all">
                <Clock className="h-6 w-6 text-gold mx-auto mb-2" strokeWidth={1.5} />
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold-light">On-Time Erection</h4>
              </div>
              <div className="text-center p-4 rounded-2xl bg-surface/20 border border-gold/5 hover:border-gold/15 hover:shadow-[0_4px_15px_rgba(212,175,55,0.05)] transition-all">
                <Star className="h-6 w-6 text-gold mx-auto mb-2" strokeWidth={1.5} />
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold-light">Expert Welders</h4>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Quote Card & Other Services */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            {/* Sexy Interactive Quote Card */}
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-gold/30 via-gold-dark/5 to-gold/35 overflow-hidden shadow-2xl group">
              <div className="rounded-[23px] bg-gradient-to-b from-[#141210] to-[#0a0807] p-8 text-center space-y-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
                {/* Corner accents */}
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-gold/35" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-gold/35" />

                <h3 className="font-display text-2xl font-extrabold text-gold-gradient drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  Inquire Now
                </h3>
                <p className="text-xs sm:text-sm text-muted/90 leading-relaxed">
                  Connect with Irfan Syed and the engineering team to get a detailed quotation for {service.title}.
                </p>

                <div className="flex flex-col gap-3.5">
                  <Button
                    href={`tel:+91${primaryPhone}`}
                    className="w-full justify-center py-4 text-xs font-bold uppercase tracking-widest shadow-[0_4px_18px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_24px_rgba(212,175,55,0.45)] hover:scale-[1.01]"
                  >
                    <PhoneCall className="h-4 w-4" />
                    Call +91 {site.phones[0]}
                  </Button>

                  <Button
                    href={`https://wa.me/91${primaryPhone}?text=${encodeURIComponent(
                      `Hello Fancy Engineering, I am looking for a quotation for "${service.title}". Please assist.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    className="w-full justify-center py-4 text-xs font-bold uppercase tracking-widest border-emerald-500/25 hover:border-emerald-500 hover:bg-emerald-500/10 text-emerald-400 hover:text-emerald-300 transition-all duration-300 hover:scale-[1.01]"
                  >
                    <FaWhatsapp className="h-4.5 w-4.5" />
                    Chat on WhatsApp
                  </Button>

                  <Link
                    href={`/contact#service=${service.slug}`}
                    className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase text-gold/70 hover:text-gold mt-3 transition-colors duration-300"
                  >
                    Submit Inquiry Form
                    <MessageSquare className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Other Services sidebar */}
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-gold/15 via-gold-dark/5 to-gold/15 overflow-hidden shadow-lg">
              <div className="rounded-[23px] bg-gradient-to-b from-[#141210] to-[#0a0807] p-6 space-y-4">
                <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-gold px-1 mb-2">
                  Explore Services
                </h3>
                <div className="space-y-1">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center justify-between group p-3 rounded-xl border border-transparent hover:border-gold/15 hover:bg-background/40 transition-all duration-300"
                    >
                      <span className="text-sm font-semibold text-muted group-hover:text-gold transition-colors duration-300">
                        {s.title}
                      </span>
                      <span className="text-xs text-gold/0 group-hover:text-gold/80 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
