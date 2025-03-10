import React from "react";
import { BusinessHero } from "@/app/components/sections/business-website/business-hero";
import { BusinessFeatures } from "@/app/components/sections/business-website/business-features";
import { BusinessPortfolio } from "@/app/components/sections/business-website/business-portfolio";
import { BusinessTestimonials } from "@/app/components/sections/business-website/business-testimonials";
import { BusinessPricing } from "@/app/components/sections/business-website/business-pricing";
import { BusinessFAQ } from "@/app/components/sections/business-website/business-faq";
import { BusinessContactCTA } from "@/app/components/sections/business-website/business-contact-cta";
import { BusinessTrustSignals } from "@/app/components/sections/business-website/business-trust-signals";
import { BusinessProcess } from "@/app/components/sections/business-website/business-process";
import { BusinessCTA } from "@/app/components/sections/business-website/business-cta";

export const metadata = {
  title: "Professional Business Websites | One-Time Payment, No Subscriptions",
  description: "Get a professional, conversion-focused business website with a single one-time payment. No monthly fees. Mobile-responsive designs, SEO optimization, and ongoing support included. Request a free quote today!",
};

export default function BusinessWebsitePage() {
  return (
    <>
      <BusinessHero />
      <BusinessTrustSignals />
      <BusinessFeatures />
      <BusinessProcess />
      <BusinessCTA />
      <BusinessPortfolio />
      <BusinessTestimonials />
      <BusinessPricing />
      <BusinessFAQ />
      <BusinessContactCTA />
    </>
  );
} 