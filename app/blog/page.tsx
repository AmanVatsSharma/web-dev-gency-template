import React from "react";
import { Metadata } from "next";
import { BlogHero } from "@/app/components/sections/blog-hero-section";
import { BlogList } from "@/app/components/sections/blog-list-section";
import { FeatureCta } from "@/app/components/sections/feature-cta-section";
import { Cta } from "@/app/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Blog | DevAgency - Web Development Insights & Trends",
  description: "Stay updated with the latest web development trends, tips, and insights from our expert team. Learn about modern technologies, design strategies, and more.",
  keywords: "web development blog, coding tips, design trends, technology insights, web dev tutorials, UX/UI guides",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogList />
      <FeatureCta />
      <Cta />
    </>
  );
} 