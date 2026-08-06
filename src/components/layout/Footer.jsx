import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import OrnateDivider from "@/components/ui/OrnateDivider";
import BackToTopButton from "@/components/layout/BackToTopButton";
import { navLinks, site } from "@/data/site";
import { services } from "@/data/services";

const socialIcons = {
  instagram: <FaInstagram className="h-4 w-4" />,
  facebook: <FaFacebookF className="h-4 w-4" />,
  linkedin: <FaLinkedinIn className="h-4 w-4" />,
  x: <FaXTwitter className="h-4 w-4" />,
  youtube: <FaYoutube className="h-4 w-4" />,
};

const featuredServices = services.slice(0, 5);

export default function Footer() {
  return (
    <footer className="relative border-t border-gold/10 bg-surface overflow-hidden">
      <div className="section-divider" />

      {/* ambient gold glows, contained to the footer only */}
      <div className="absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-gold-dark/5 blur-[110px] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      {/* Giant ghost wordmark for depth */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center overflow-hidden pointer-events-none select-none">
        <span className="font-display font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gold/10 to-transparent text-[22vw] sm:text-[16rem] translate-y-[28%] whitespace-nowrap">
          FANCY
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Image
            src="/brand/logo.png"
            alt="Fancy Engineering &amp; Fabrication"
            width={220}
            height={110}
            className="object-contain w-[220px] h-[110px]"
            priority
          />
          <p className="mt-5 max-w-sm text-sm text-muted leading-relaxed">
            {site.description}
          </p>

          <OrnateDivider className="mt-6 w-32 sm:w-40" />

          <div className="mt-6 flex items-center gap-3">
            {Object.entries(site.social).map(([key, href]) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/15 bg-background/30 text-gold hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-[#12100a] hover:shadow-[0_8px_20px_rgba(212,175,55,0.3)] transition-all duration-300"
              >
                {socialIcons[key]}
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-5">
            Navigate
          </h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-muted hover:text-gold transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-gold/40 group-hover:bg-gold group-hover:shadow-[0_0_6px_var(--gold)] transition-all" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-5">
            Our Services
          </h3>
          <ul className="space-y-3">
            {featuredServices.map((service) => (
              <li key={service.slug}>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 text-sm text-muted hover:text-gold transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-gold/40 group-hover:bg-gold group-hover:shadow-[0_0_6px_var(--gold)] transition-all" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {service.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-5">
            Get In Touch
          </h3>
          <ul className="space-y-4 text-sm text-muted">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-start gap-3 hover:text-gold transition-colors"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/15 bg-background/30 text-gold/70 group-hover:border-gold group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <span className="break-words pt-2">{site.email}</span>
              </a>
            </li>
            {site.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:+91${phone.replace(/\s/g, "")}`}
                  className="group flex items-start gap-3 hover:text-gold transition-colors"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/15 bg-background/30 text-gold/70 group-hover:border-gold group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                    <Phone className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <span className="pt-2">+91 {phone}</span>
                </a>
              </li>
            ))}
            <li className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/15 bg-background/30 text-gold/70">
                <MapPin className="h-4 w-4" strokeWidth={1.5} />
              </span>
              <span className="pt-2">{site.address.line3}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/15 bg-background/30 text-gold/70">
                <Clock className="h-4 w-4" strokeWidth={1.5} />
              </span>
              <span className="pt-2">{site.hours.weekdays}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <span className="text-center sm:text-left text-sm font-medium tracking-wide text-muted/80 transition-colors duration-300">
            © {new Date().getFullYear()}{" "}
            <span className="text-gold-light font-semibold hover:text-gold transition-colors duration-300">
              {site.name}
            </span>
            . All rights reserved.
          </span>

          <div className="flex items-center gap-5">
            <BackToTopButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
