"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Home, Info, Wrench, Briefcase, Mail } from "lucide-react";
import { navLinks, site } from "@/data/site";

const emptySubscribe = () => () => {};

const linkIcons = {
  "/": Home,
  "/about": Info,
  "/services": Wrench,
  "/projects": Briefcase,
  "/contact": Mail,
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-[99999] w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#08080a]/90 backdrop-blur-md border-b border-gold/15 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-[#08080a]/60 backdrop-blur-md border-b border-gold/5"
      }`}
    >
      {/* Subtle bottom glowing accent line when scrolled */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/25 to-transparent pointer-events-none" />
      )}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="shrink-0 transition-transform duration-300 hover:scale-[1.02]">
          <Image
            src="/brand/logo.png"
            alt="Fancy Engineering &amp; Fabrication"
            width={140}
            height={69}
            className="object-contain w-35 h-17.25"
            priority
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition-colors py-1.5 ${
                    active ? "text-gold" : "text-foreground/80 hover:text-gold"
                  } group`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-gold-dark to-gold transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop spacer to keep the menu links perfectly centered (matching logo width) */}
        <div className="hidden md:block w-35" />

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-gold bg-background/20 backdrop-blur-xs hover:bg-gold/5"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile menu (backdrop + sliding sidebar) — portalled to <body> so it
          always overlays the full viewport. The header above uses
          backdrop-blur, which creates a containing block for `fixed`
          descendants; left in place, the sidebar would position itself
          relative to the header's own (short) box instead of the screen. */}
      {mounted && createPortal(
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 z-99998 bg-black/80 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
              open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setOpen(false)}
          />

          {/* Sidebar Panel (Slides from left) */}
          <div
            className={`fixed inset-y-0 left-0 z-[99999] w-[80%] max-w-[300px] bg-zinc-950 border-r border-gold/15 p-6 flex flex-col justify-between shadow-[10px_0_50px_rgba(0,0,0,0.95)] md:hidden transition-transform duration-300 ease-out pointer-events-auto ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div>
              {/* Header area in sidebar */}
              <div className="flex items-center justify-between pb-6 border-b border-gold/10 mb-8">
                <Link href="/" onClick={() => setOpen(false)} className="shrink-0">
                  <Image
                    src="/brand/logo.png"
                    alt="Fancy Engineering &amp; Fabrication"
                    width={120}
                    height={59}
                    className="object-contain w-30 h-14.75"
                    priority
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/15 text-gold hover:border-gold hover:bg-gold/5 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <ul className="flex flex-col gap-6">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href} className="group">
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-4 py-1 text-lg font-medium tracking-wider"
                      >
                        {(() => {
                          const IconComponent = linkIcons[link.href];
                          return IconComponent ? (
                            <IconComponent className="h-5 w-5 text-gold/60 group-hover:text-gold transition-colors" strokeWidth={1.5} />
                          ) : null;
                        })()}
                        <span className={`transition-all duration-300 group-hover:text-gold group-hover:translate-x-1 ${active ? "text-gold-light" : "text-foreground/80"
                          }`}>
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 pt-8 border-t border-gold/10">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-dark to-gold px-5 py-3 text-sm font-semibold tracking-wider uppercase text-[#12100a] hover:brightness-110 shadow-[0_4px_16px_rgba(212,175,55,0.25)] transition-all duration-300"
                >
                  Get a Quote
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Footer Area with contact info */}
            <div className="pt-6 border-t border-gold/10">
              <p className="text-[0.65rem] tracking-[0.25em] uppercase text-gold-dark font-bold mb-3">
                Quick Connect
              </p>
              {site.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:+91${phone.replace(/\s/g, "")}`}
                  className="block text-sm text-foreground/75 hover:text-gold transition-colors font-medium mb-1.5"
                >
                  +91 {phone}
                </a>
              ))}
              <a
                href="mailto:fancyeandf@gmail.com"
                className="block text-xs text-muted hover:text-gold transition-colors"
              >
                fancyeandf@gmail.com
              </a>
            </div>
          </div>
        </>,
        document.body
      )}
    </header>
  );
}
