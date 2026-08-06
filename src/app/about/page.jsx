import {
  ShieldCheck,
  CheckCircle2,
  Award,
  GraduationCap,
  Flame,
  Clock,
  Users,
  Wrench,
  Quote,
  BadgeCheck,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import CountUp from "@/components/ui/CountUp";
import { site } from "@/data/site";
import { services } from "@/data/services";
import TeamShowcase from "@/components/sections/TeamShowcase";

export const metadata = {
  title: `About Us | ${site.name}`,
  description:
    "Fancy Engineering and Fabrication is a Hyderabad-based company with 25+ years of experience delivering industrial sheds, warehouse sheds, automatic gates, railings, structural steel work, roofing, and PEB structures.",
};

const stats = [
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Users, value: "100+", label: "Projects Delivered" },
  { icon: Wrench, value: `${services.length}+`, label: "Core Services" },
];

const coreValues = [
  {
    title: "Hard Work",
    desc: "Maximum effort and dedication behind every weld and structure we deliver.",
    icon: Flame,
  },
  {
    title: "Honesty",
    desc: "Fair pricing, transparent materials and honest communication, always.",
    icon: ShieldCheck,
  },
  {
    title: "Discipline",
    desc: "Strict adherence to fabrication safety codes and project deadlines.",
    icon: Clock,
  },
  {
    title: "Continuous Learning",
    desc: "Constantly adapting to new engineering codes and modern standards.",
    icon: GraduationCap,
  },
];

const expertise = [
  "Structural Engineering",
  "Steel Fabrication",
  "Industrial Fabrication",
  "Project Management",
  "Welding Solutions",
  "Custom Engineering Works",
];

function SubHeading({ n, title }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-10">
      <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-gold-dark/40" />
      <span className="flex items-center gap-2.5 text-sm sm:text-base tracking-[0.3em] uppercase text-gold-dark font-semibold whitespace-nowrap">
        <span className="font-display text-gold/50 mr-0.5">{n}</span>
        {title}
      </span>
      <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-gold-dark/40" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Ambient gold glows */}
        <div className="absolute inset-x-0 top-0 h-160 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-[100px] animate-glow-pulse" />
          <div
            className="absolute top-20 -right-24 h-80 w-80 rounded-full bg-gold-dark/10 blur-[110px] animate-glow-pulse"
            style={{ animationDelay: "1.5s" }}
          />
          <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Story"
            title="About Fancy Engineering &amp; Fabrication"
            description="A Hyderabad-based structural engineering and fabrication company, built on quality, integrity and timely execution."
          />

          {/* Company narrative + stat sidebar */}
          <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_320px] items-start">
            {/* Narrative panel */}
            <div className="card-glow relative overflow-hidden rounded-3xl border border-gold/20 bg-surface/40 backdrop-blur-md p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6 text-muted/95 text-[1.05rem] sm:text-lg leading-relaxed">
                <p>
                  <span className="text-foreground font-semibold">
                    {site.name}
                  </span>{" "}
                  designs and fabricates automatic gates, doors, windows,
                  grills, shutters, industrial sheds, trusses and flexible
                  gates for homes, shops and industrial sites across
                  Hyderabad. Every project is engineered in-house — from
                  first measurement to final installation — so what we build
                  is precise, durable and built to last.
                </p>
                <p>
                  With over 25 years of hands-on experience in structural
                  engineering and fabrication, we&apos;ve earned the trust of
                  residential, commercial and industrial clients through
                  consistent quality, fair pricing and on-time delivery. Our
                  team combines skilled welding, structural design and
                  hands-on project management to take every job from concept
                  to completion without compromise.
                </p>
                <p>
                  From a single balcony grill to a full industrial shed,
                  every enquiry is met with the same process — a site visit
                  or consultation, accurate measurements, transparent
                  pricing, and fabrication carried out in-house so quality
                  stays consistent from the first piece of steel to the
                  final installation. It&apos;s this approach that has kept
                  clients coming back and referring us across Hyderabad and
                  beyond.
                </p>
              </div>
            </div>

            {/* Individual Stat Cards Sidebar */}
            <div className="grid gap-4.5 w-full">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-glow group relative overflow-hidden rounded-2xl border border-gold-dark/15 bg-surface/40 backdrop-blur-md p-6 flex items-center gap-4.5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/25 hover:bg-[#0f0e12]/60 hover:shadow-[0_12px_24px_rgba(212,175,55,0.08)]"
                >
                  <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
                  
                  {/* Decorative orbital rotate light */}
                  <div className="absolute -bottom-10 -right-10 h-16 w-16 rounded-full bg-gold/5 blur-lg group-hover:bg-gold/10 transition-colors pointer-events-none" />

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 text-gold group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-gold-light group-hover:text-[#12100a] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.35)] transition-all duration-300">
                    <stat.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  
                  <div>
                    <div className="font-display text-2xl sm:text-3xl font-extrabold text-gold-gradient tracking-wide">
                      <CountUp value={stat.value} />
                    </div>
                    <div className="text-[0.65rem] sm:text-xs text-muted/80 uppercase tracking-widest font-semibold mt-0.5 leading-snug">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values Section */}
          <div className="mt-20">
            <SubHeading n="02" title="What We Stand For" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((val, idx) => (
                <div
                  key={val.title}
                  className="card-glow relative overflow-hidden rounded-2xl border border-gold-dark/10 bg-surface/30 p-6 flex flex-col gap-3 group transition-all duration-500 hover:-translate-y-2 hover:border-gold/25 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.12)]"
                >
                  <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
                  <span className="absolute top-4 right-4 font-display text-[0.65rem] font-semibold tracking-widest text-gold-dark/40 group-hover:text-gold/60 transition-colors duration-300">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="relative h-11 w-11 rounded-xl border border-gold/20 flex items-center justify-center text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-gold-light group-hover:text-[#12100a] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                    <val.icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-display text-base sm:text-[1.05rem] font-bold text-gold-light group-hover:text-gold transition-colors duration-300">
                      {val.title}
                    </h4>
                    <p className="mt-1.5 text-[0.92rem] sm:text-[0.95rem] text-muted leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="mt-20">
            <SubHeading n="03" title="Areas of Expertise" />
            <div className="card-glow relative overflow-hidden rounded-2xl border border-gold-dark/15 bg-surface/50 backdrop-blur-md p-8 sm:p-10">
              <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
              <p className="relative mb-6 max-w-2xl text-base text-muted/80 leading-relaxed">
                Core capabilities our team brings to every engagement — from
                the first site visit to the final piece of steel.
              </p>
              <div className="relative flex flex-wrap gap-3">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-gold/15 bg-gold/5 px-4 py-2.5 text-base font-medium text-foreground/85 hover:border-gold/30 hover:bg-gold/10 hover:text-gold-light transition-colors duration-300"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-gold shrink-0" strokeWidth={1.5} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div className="mt-20">
            <SubHeading n="04" title="Leadership" />
            <div className="card-glow group relative overflow-hidden rounded-3xl border border-gold/20 bg-surface/40 backdrop-blur-md p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
              <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-gold/10 blur-3xl group-hover:bg-gold/15 transition-all duration-700 pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-gold-dark/10 blur-3xl group-hover:bg-gold-dark/15 transition-all duration-700 pointer-events-none" />

              {/* Shine sweep on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] pointer-events-none" />

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-gold/40" />
              <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-gold/40" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-gold/40" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-gold/40" />

              <div className="relative z-10 grid gap-10 sm:grid-cols-[384px_1fr] items-center sm:items-start">
                {/* Avatar column */}
                <div className="flex flex-col items-center gap-4">
                  <div className="group relative w-full sm:w-96 rounded-2xl overflow-hidden border border-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-700 hover:border-gold/35">
                    {/* Photo shown at its native 3:2 ratio — no crop */}
                    <div className="relative aspect-3/2">
                      <Image
                        src="/team/Director.jpeg"
                        alt={site.founderName}
                        fill
                        className="object-cover transition-transform duration-750 ease-out group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 320px"
                        priority
                      />
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent pointer-events-none" />

                    <span className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-light text-[#12100a] border-2 border-surface shadow-[0_10px_25px_-5px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-300">
                      <BadgeCheck className="h-5 w-5" strokeWidth={2} />
                    </span>
                  </div>

                  <div className="text-center mt-6">
                    <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-gold-gradient tracking-wide">
                      {site.founderName}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-gold-dark/95">
                      {site.founderTitle}
                    </p>
                    <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-muted/75">
                      <MapPin className="h-4 w-4 text-gold/40" strokeWidth={1.5} />
                      Hyderabad, India
                    </p>
                  </div>

                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/5 px-4.5 py-2 text-xs sm:text-[0.85rem] font-bold text-gold-light shadow-[0_4px_15px_rgba(212,175,55,0.08)] hover:border-gold/45 hover:shadow-[0_4px_20px_rgba(212,175,55,0.15)] hover:scale-102 transition-all duration-300">
                      <Award className="h-4 w-4 text-gold" strokeWidth={1.5} />
                      25+ Years Experience
                    </span>
                  </div>
                </div>

                {/* Bio column */}
                <div className="space-y-4 text-[1.05rem] sm:text-lg text-muted/95 leading-relaxed">
                  <p>
                    {site.founderName} founded {site.name} and leads it as
                    Founder &amp; Managing Director. With nearly 25 years of
                    hands-on experience in structural engineering and
                    fabrication, he has built the company&apos;s reputation
                    for quality, integrity and timely execution across
                    Hyderabad.
                  </p>
                  <p>
                    Under his leadership, the company has grown into a
                    trusted name for engineering and fabrication work —
                    from automatic gates and industrial sheds to full
                    structural design — with a continued focus on becoming
                    one of India&apos;s most reliable engineering and
                    fabrication companies.
                  </p>
                  <p>
                    He continues to lead every project personally, from
                    the first site visit through to final handover,
                    ensuring the standards of quality and discipline the
                    company was built on are carried through in every
                    piece of work it delivers.
                  </p>

                  <div className="relative mt-6 rounded-2xl border border-gold/15 bg-gold/5 px-6 py-6 sm:px-8 overflow-hidden">
                    <Quote className="absolute top-4 left-4 h-9 w-9 text-gold/15" strokeWidth={1.5} />
                    <blockquote className="relative pl-8 font-display text-lg sm:text-xl text-gold italic leading-snug">
                      &ldquo;Success is built on quality, trust, hard work,
                      and the blessings of our parents.&rdquo;
                    </blockquote>
                    <p className="relative mt-3 pl-8 text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-gold-dark/80">
                      — {site.founderName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Team */}
          <div className="mt-20">
            <SubHeading n="05" title="Our Team" />
            <TeamShowcase />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to build with us?"
        description={`After 25+ years of hands-on experience, ${site.founderName} and the ${site.shortName} team bring the same quality, integrity and precision to every project — big or small.`}
      />
    </>
  );
}
