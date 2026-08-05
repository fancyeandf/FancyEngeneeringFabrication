import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  Timer,
  Wrench,
  Navigation,
} from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";
import { site } from "@/data/site";
import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";

export const metadata = {
  title: `Contact | ${site.name}`,
  description:
    "Get in touch with Fancy Engineering and Fabrication in Hyderabad — call, email or visit for a consultation on your next project.",
};

const socialLabels = {
  instagram: {
    label: "Instagram",
    icon: <FaInstagram className="h-4.5 w-4.5" />,
    baseClass: "bg-[#e52e71]/8 text-[#f1a5c2] border-[#e52e71]/20",
    hoverClass: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e52e71] hover:to-[#9b30ff] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(229,46,113,0.45)]"
  },
  facebook: {
    label: "Facebook",
    icon: <FaFacebookF className="h-4.5 w-4.5" />,
    baseClass: "bg-[#1877f2]/8 text-[#8cb4f5] border-[#1877f2]/20",
    hoverClass: "hover:bg-[#1877f2] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(24,119,242,0.45)]"
  },
  linkedin: {
    label: "LinkedIn",
    icon: <FaLinkedinIn className="h-4.5 w-4.5" />,
    baseClass: "bg-[#0077b5]/8 text-[#7abce0] border-[#0077b5]/20",
    hoverClass: "hover:bg-[#0077b5] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(0,119,181,0.45)]"
  },
  x: {
    label: "X (Twitter)",
    icon: <FaXTwitter className="h-4.5 w-4.5" />,
    baseClass: "bg-white/5 text-[#e5e5e5] border-white/10",
    hoverClass: "hover:bg-foreground hover:text-background hover:border-foreground hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
  },
};

const primaryPhone = site.phones[0].replace(/\s/g, "");

const trustStats = [
  { icon: Timer, value: "< 2 Hr", label: "Avg. Response Time" },
];

const iconClass = "h-4.5 w-4.5";

const infoCards = [
  {
    icon: <Mail className={iconClass} strokeWidth={1.5} />,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    copyValue: site.email,
  },
  {
    icon: <Phone className={iconClass} strokeWidth={1.5} />,
    label: "Phone",
    value: site.phones.map((p) => `+91 ${p}`).join(" / "),
    href: `tel:+91${primaryPhone}`,
    copyValue: `+91 ${site.phones[0]}`,
  },
  {
    icon: <MapPin className={iconClass} strokeWidth={1.5} />,
    label: "Address",
    value: `${site.address.line1}, ${site.address.line2}, ${site.address.line3}`,
  },
  {
    icon: <Clock className={iconClass} strokeWidth={1.5} />,
    label: "Working Hours",
    value: (
      <>
        {site.hours.weekdays}
        <br />
        {site.hours.sunday}
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* ambient gold glows, scoped to the header so they don't bleed into the cards below on tall layouts */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-[100px] animate-glow-pulse pointer-events-none" />
      <div
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold-dark/10 blur-[100px] animate-glow-pulse pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="absolute inset-x-0 top-0 h-160 bg-noise opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Us"
          description="Reach out for quotes, site visits or consultations on gates, doors, grills, shutters, sheds and custom fabrication."
        />

        <div
          className="animate-fade-up mt-10 flex flex-row items-center justify-center gap-2.5 sm:gap-4"
          style={{ animationDelay: "0.1s" }}
        >
          <Button href={`tel:+91${primaryPhone}`} className="group">
            <Phone className="h-4 w-4" />
            Call Now
          </Button>
          <Button
            href={`https://wa.me/91${primaryPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
          >
            <FaWhatsapp className="h-4.5 w-4.5 shrink-0" />
            WhatsApp Us
          </Button>
        </div>



        {/* Trust stat strip */}
        <div
          className="animate-fade-up relative mx-auto mt-12 flex flex-col items-center justify-center max-w-xs rounded-2xl border border-gold-dark/15 bg-surface/40 backdrop-blur-md px-6 py-5 group"
          style={{ animationDelay: "0.12s" }}
        >
          {trustStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center gap-1.5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/5 text-gold mb-0.5">
                <stat.icon className="h-4 w-4" strokeWidth={1.5} />
              </span>
              <div className="font-display text-xl sm:text-2xl font-semibold text-gold-gradient">
                <CountUp value={stat.value} />
              </div>
              <div className="text-[0.6rem] sm:text-xs text-muted uppercase tracking-wide leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 items-start">
          {/* Left Column: Contact Info Cards & Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {infoCards.map((card, i) => (
              <ContactInfoCard
                key={card.label}
                icon={card.icon}
                label={card.label}
                value={card.value}
                href={card.href}
                copyValue={card.copyValue}
                delay={`${0.2 + i * 0.06}s`}
              />
            ))}

            {/* Social Media Link Cards */}
            <div
              className="card-glow animate-fade-up rounded-2xl border border-gold-dark/15 bg-surface/50 backdrop-blur-md p-5"
              style={{ animationDelay: "0.45s" }}
            >
              <h3 className="text-[0.65rem] tracking-[0.25em] uppercase text-gold-dark mb-3.5 font-bold">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {Object.entries(site.social).map(([key, href]) => {
                  const social = socialLabels[key];
                  return (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-medium transition-all duration-300 hover:scale-105 ${social.baseClass} ${social.hoverClass}`}
                    >
                      {social.icon}
                      {social.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Contact Form */}
          <div className="lg:col-span-7 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <ContactForm />
          </div>
        </div>

        {/* Colorful Interactive Google Map (Full Width) */}
        <div
          className="card-glow animate-fade-up rounded-2xl border border-gold/25 bg-surface/50 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group relative mt-10"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="flex items-center gap-2 px-3 pt-2.5 pb-2">
            <Navigation className="h-4 w-4 text-gold" strokeWidth={1.5} />
            <h3 className="text-[0.65rem] tracking-[0.25em] uppercase text-gold-dark font-bold">
              Find Us Here
            </h3>
          </div>
          <div className="relative h-96 w-full rounded-xl overflow-hidden">
            <iframe
              title="Fancy Engineering and Fabrication location"
              src="https://maps.google.com/maps?q=Errakunta%2C%20Sadat%20Nagar%2C%20Hyderabad%2C%20Telangana%20500005&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://maps.google.com/maps?q=Errakunta%2C%20Sadat%20Nagar%2C%20Hyderabad%2C%20Telangana%20500005"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-background/80 backdrop-blur px-3 py-1.5 text-xs text-gold hover:bg-gold hover:text-[#12100a] transition-all hover:scale-105"
            >
              Open in Maps
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
