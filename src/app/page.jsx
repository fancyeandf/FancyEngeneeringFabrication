import Hero from "@/components/sections/Hero";
import ServicesMarquee from "@/components/sections/ServicesMarquee";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AboutTeaser from "@/components/sections/AboutTeaser";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesMarquee />
      <ServicesGrid limit={4} />
      <div className="section-divider" />
      <WhyChooseUs />
      <div className="section-divider" />
      <AboutTeaser />
      <div className="section-divider" />
      <GalleryPreview />
      <div className="section-divider" />
      <Testimonials />
    </>
  );
}
