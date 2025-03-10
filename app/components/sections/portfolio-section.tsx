'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils/cn";
import { ArrowRight, ExternalLink, Eye } from "lucide-react";

// Portfolio card with hover effects
const PortfolioCard = ({ item, index }: { item: (typeof portfolioItems)[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-500",
        item.aspectRatio
      )}
    >
      {/* Image with zoom effect */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        
        {/* Overlay gradient that appears on hover */}
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          )}
        />
      </div>
      
      {/* Category tag */}
      <div className="absolute top-4 left-4 z-10">
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : -10 }}
          transition={{ duration: 0.3 }}
          className="bg-black/20 backdrop-blur-sm text-white text-xs font-medium py-1 px-2 rounded-full inline-block"
        >
          {item.categoryLabel}
        </motion.span>
      </div>
      
      {/* Content that appears on hover */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="text-white text-xl md:text-2xl font-bold mb-2"
        >
          {item.title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-white/80 mb-4 line-clamp-2"
        >
          {item.description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex gap-3"
        >
          <Link 
            href={item.link} 
            className="bg-white/20 backdrop-blur-sm text-white text-sm font-medium py-1.5 px-3 rounded-full inline-flex items-center gap-1.5 hover:bg-white/30 transition-colors"
          >
            View project <Eye className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

const categories = [
  { id: "all", label: "All Work" },
  { id: "webdesign", label: "Web Design" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "saas", label: "SaaS" },
  { id: "mobileapp", label: "Mobile Apps" },
];

const portfolioItems = [
  {
    id: 1,
    title: "Modern SaaS Dashboard",
    category: "saas",
    categoryLabel: "SaaS",
    imageUrl: "/portfolio-1.jpg",
    link: "/portfolio/modern-saas-dashboard",
    description: "A comprehensive admin dashboard for a subscription-based analytics platform with intuitive UX and performance optimizations.",
    aspectRatio: "aspect-square md:col-span-1 md:row-span-1",
    featured: false,
  },
  {
    id: 2,
    title: "Luxury E-commerce Store",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    imageUrl: "/portfolio-2.jpg",
    link: "/portfolio/luxury-ecommerce-store",
    description: "High-end fashion retail platform with seamless checkout process and personalized shopping experience.",
    aspectRatio: "aspect-video md:col-span-2 md:row-span-1",
    featured: true,
  },
  {
    id: 3,
    title: "Travel Booking App",
    category: "mobileapp",
    categoryLabel: "Mobile App",
    imageUrl: "/portfolio-3.jpg",
    link: "/portfolio/travel-booking-app",
    description: "Cross-platform mobile application for booking flights, hotels, and experiences with offline capabilities.",
    aspectRatio: "aspect-square md:col-span-1 md:row-span-1",
    featured: false,
  },
  {
    id: 4,
    title: "Corporate Website Redesign",
    category: "webdesign",
    categoryLabel: "Web Design",
    imageUrl: "/portfolio-4.jpg",
    link: "/portfolio/corporate-website-redesign",
    description: "Complete overhaul of a financial services website focusing on accessibility and user engagement.",
    aspectRatio: "aspect-square md:col-span-1 md:row-span-1",
    featured: false,
  },
  {
    id: 5,
    title: "Health & Fitness Platform",
    category: "saas",
    categoryLabel: "SaaS",
    imageUrl: "/portfolio-5.jpg",
    link: "/portfolio/health-fitness-platform",
    description: "Subscription-based wellness platform with custom workout plans, nutrition tracking, and community features.",
    aspectRatio: "aspect-video md:col-span-1 md:row-span-1",
    featured: false,
  },
  {
    id: 6,
    title: "AR Shopping Experience",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    imageUrl: "/portfolio-6.jpg",
    link: "/portfolio/ar-shopping-experience",
    description: "Innovative e-commerce solution using augmented reality to visualize products in your space before purchasing.",
    aspectRatio: "aspect-square md:col-span-1 md:row-span-2",
    featured: true,
  },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Filter portfolio items based on active category
  const filteredItems = activeCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  // Find featured items for special placement
  const featuredItems = filteredItems.filter(item => item.featured);
  const regularItems = filteredItems.filter(item => !item.featured);
  
  const allItems = [...featuredItems, ...regularItems];

  return (
    <section className="py-20 relative overflow-hidden" id="portfolio">
      {/* Background decorations */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-muted/80 to-transparent"></div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute -z-10 h-32 w-32 rounded-full bg-indigo-500/20 blur-[100px] top-10 left-10"></div>
      <div className="absolute -z-10 h-32 w-32 rounded-full bg-green-500/20 blur-[100px] bottom-10 right-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full mb-4 shadow-sm">
              Our Portfolio
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            Showcasing Our Best Work
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8"
          >
            Explore our recent projects and discover how we've helped businesses across various industries achieve their digital goals.
          </motion.p>
          
          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
        
        {/* Masonry grid layout for portfolio items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {allItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* CTA button */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="group rounded-full px-6"
              asChild
            >
              <Link href="/portfolio">
                <span>View all projects</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 