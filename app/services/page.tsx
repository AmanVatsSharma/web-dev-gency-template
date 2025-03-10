import React from "react";
import { Metadata } from "next";
import { ServicesHero } from "@/app/components/sections/services-hero-section";
import { ServicesList } from "@/app/components/sections/services-list-section";
import { ProcessSection } from "@/app/components/sections/process-section";
import { TechnologiesSection } from "@/app/components/sections/technologies-section";
import { FeatureCta } from "@/app/components/sections/feature-cta-section";
import { Cta } from "@/app/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Our Services | DevAgency - Premium Web Development Agency",
  description: "Explore our comprehensive range of web development, design, and digital marketing services tailored to help your business succeed online.",
  keywords: "web development services, UI/UX design, mobile app development, digital marketing, SEO services, custom web development",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <TechnologiesSection />
      <FeatureCta />
      <Cta />
    </>
  );
} 