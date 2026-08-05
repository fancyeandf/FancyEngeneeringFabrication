"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import CountUp from "@/components/ui/CountUp";
import CTASection from "@/components/sections/CTASection";
import ImageGrid from "@/components/gallery/ImageGrid";
import VideoGrid from "@/components/gallery/VideoGrid";
import { galleryImages, galleryVideos } from "@/data/gallery";
import { Image as ImageIcon, Video as VideoIcon, ShieldCheck, Wrench, Camera, Clapperboard } from "lucide-react";

const stats = [
  { icon: ShieldCheck, value: "25+", label: "Years Experience" },
  { icon: Wrench, value: "100+", label: "Projects Delivered" },
  { icon: Camera, value: `${galleryImages.length}+`, label: "Site Photos" },
  { icon: Clapperboard, value: `${galleryVideos.length}+`, label: "Project Videos" },
];

// 2-col grid on mobile (right border on col 1, bottom border on row 1),
// 4-col grid on desktop (right border on every item but the last).
const statDividers = [
  "border-r border-b pb-4 sm:border-b-0 sm:pb-0",
  "border-b pb-4 sm:border-b-0 sm:pb-0 sm:border-r",
  "border-r pt-4 sm:pt-0",
  "pt-4 sm:pt-0",
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("photos");

  return (
    <>
      <section className="relative pt-20 sm:pt-28 pb-14 min-h-[70vh]">
        {/* ambient gold glows — pinned to the hero area only, so they don't
            drift into the gallery on pages with a lot of photos/videos */}
        <div className="absolute inset-x-0 top-0 h-160 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grid opacity-60 mask-[linear-gradient(to_bottom,black,transparent)]" />
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-[100px] animate-glow-pulse" />
          <div
            className="absolute top-20 -right-24 h-80 w-80 rounded-full bg-gold-dark/10 blur-[110px] animate-glow-pulse"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute top-64 left-1/3 h-64 w-64 rounded-full bg-gold/5 blur-[100px] animate-glow-pulse"
            style={{ animationDelay: "3s" }}
          />
          <div className="absolute inset-0 bg-noise opacity-40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Work"
            title="Sites &amp; Projects"
            description="A complete look at the gates, grills, doors, shutters, sheds and custom fabrication work delivered on site."
          />

          {/* Trust stat strip */}
          <div
            className="animate-fade-up mx-auto mt-12 grid max-w-3xl grid-cols-2 sm:grid-cols-4 gap-0 rounded-2xl border border-gold-dark/15 bg-surface/40 backdrop-blur-md px-4 py-6 sm:px-8"
            style={{ animationDelay: "0.1s" }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center gap-1.5 border-gold/10 ${statDividers[i]}`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/5 text-gold mb-0.5">
                  <stat.icon className="h-4.5 w-4.5" strokeWidth={1.5} />
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

          {/* Premium Tab Selector Bar */}
          <div className="mt-12 flex justify-center animate-fade-up">
            <div className="card-glow inline-flex rounded-2xl border border-gold/15 bg-surface/40 backdrop-blur-md p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
              <button
                type="button"
                onClick={() => setActiveTab("photos")}
                className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeTab === "photos"
                    ? "bg-gradient-to-r from-gold-dark to-gold text-[#12100a] shadow-[0_4px_16px_rgba(212,175,55,0.25)]"
                    : "text-foreground/80 hover:text-gold"
                }`}
              >
                <ImageIcon className="h-4 w-4" />
                <span>Photos ({galleryImages.length})</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("videos")}
                className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeTab === "videos"
                    ? "bg-gradient-to-r from-gold-dark to-gold text-[#12100a] shadow-[0_4px_16px_rgba(212,175,55,0.25)]"
                    : "text-foreground/80 hover:text-gold"
                }`}
              >
                <VideoIcon className="h-4 w-4" />
                <span>Videos ({galleryVideos.length})</span>
              </button>
            </div>
          </div>

          {/* Dynamic Tab Panel */}
          <div className="mt-14 sm:mt-16">
            {activeTab === "photos" ? (
              <div className="animate-fade-up">
                <ImageGrid images={galleryImages} />
              </div>
            ) : (
              <div className="animate-fade-up">
                <VideoGrid videos={galleryVideos} />
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection
        title="Like what you see?"
        description="These are just a few of the 100+ projects we've delivered. Let's discuss how we can bring the same craftsmanship to your site."
      />
    </>
  );
}
