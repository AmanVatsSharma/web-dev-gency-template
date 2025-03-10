import React from "react";
import { Metadata } from "next";
import { PortfolioHero } from "@/app/components/sections/portfolio-hero-section";
import { PortfolioGallery } from "@/app/components/sections/portfolio-gallery-section";
import { ClientsSection } from "@/app/components/sections/clients-section";
import { FeatureCta } from "@/app/components/sections/feature-cta-section";
import { Cta } from "@/app/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Our Portfolio | DevAgency - Premium Web Development Agency",
  description: "Explore our diverse portfolio of web development projects including websites, web applications, e-commerce solutions, and mobile apps.",
  keywords: "web development portfolio, case studies, website projects, UI/UX design, web applications, client work",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGallery />
      <ClientsSection />
      <FeatureCta />
      <Cta />
    </>
  );
} 