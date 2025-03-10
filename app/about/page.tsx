import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { AboutHero } from "@/app/components/sections/about-hero-section";
import { TeamSection } from "@/app/components/sections/team-section";
import { ValuesSection } from "@/app/components/sections/values-section";
import { JourneySection } from "@/app/components/sections/journey-section";
import { FaqSection } from "@/app/components/sections/faq-section";
import { FeatureCta } from "@/app/components/sections/feature-cta-section";
import { Cta } from "@/app/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About Us | DevAgency - Premium Web Development Agency",
  description: "Learn about our team, values, and the journey that made DevAgency a leader in web development and digital experiences.",
  keywords: "web agency, about us, team, values, mission, vision, web development history",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ValuesSection />
      <JourneySection />
      <TeamSection />
      <FaqSection />
      <FeatureCta />
      <Cta />
    </>
  );
} 