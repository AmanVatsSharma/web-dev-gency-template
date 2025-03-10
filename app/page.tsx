import React from "react";
import { HeroSection } from "@/app/components/sections/hero-section";
import { ServicesSection } from "@/app/components/sections/services-section";
import { PortfolioSection } from "@/app/components/sections/portfolio-section";
import { TestimonialsSection } from "@/app/components/sections/testimonials-section";
import { ContactSection } from "@/app/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
