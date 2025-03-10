import React from "react";
import { Metadata } from "next";
import { ContactHero } from "@/app/components/sections/contact-hero-section";
import { ContactForm } from "@/app/components/sections/contact-form-section";
import { ContactInfo } from "@/app/components/sections/contact-info-section";
import { Cta } from "@/app/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Contact Us | DevAgency - Premium Web Development Agency",
  description: "Get in touch with our team to discuss your project requirements. We'd love to hear from you and help bring your digital vision to life.",
  keywords: "contact web development agency, hire web developers, get a quote, web development consultation, project inquiry",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </div>
      <Cta />
    </>
  );
} 