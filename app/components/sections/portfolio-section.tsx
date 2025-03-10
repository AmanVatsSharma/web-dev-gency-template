'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils/cn";
import { ArrowRight } from "lucide-react";

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
    imageUrl: "/portfolio-1.jpg",
    link: "/portfolio/modern-saas-dashboard",
  },
  {
    id: 2,
    title: "Luxury E-commerce Store",
    category: "ecommerce",
    imageUrl: "/portfolio-2.jpg",
    link: "/portfolio/luxury-ecommerce-store",
  },
  {
    id: 3,
    title: "Financial Services Website",
    category: "webdesign",
    imageUrl: "/portfolio-3.jpg",
    link: "/portfolio/financial-services-website",
  },
  {
    id: 4,
    title: "Travel Booking App",
    category: "mobileapp",
    imageUrl: "/portfolio-4.jpg",
    link: "/portfolio/travel-booking-app",
  },
  {
    id: 5,
    title: "Fitness Tracking Platform",
    category: "saas",
    imageUrl: "/portfolio-5.jpg",
    link: "/portfolio/fitness-tracking-platform",
  },
  {
    id: 6,
    title: "Restaurant Ordering System",
    category: "webdesign",
    imageUrl: "/portfolio-6.jpg",
    link: "/portfolio/restaurant-ordering-system",
  },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 relative overflow-hidden" id="portfolio">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/10 via-background to-background"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm text-center font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full mb-4">
              Our Portfolio
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our <span className="text-gradient">Latest Work</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8"
          >
            Browse our most recent projects that showcase our expertise and creative approach.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
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
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredItems.map((item, index) => {
            const { ref, inView } = useInView({
              threshold: 0.1,
              triggerOnce: true,
              delay: 100,
            });
            
            return (
              <motion.div
                key={item.id}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                className="group"
              >
                <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div 
                      className={`w-full h-full ${
                        index % 2 === 0 
                          ? 'bg-gradient-to-br from-purple-600/90 via-blue-600/90 to-indigo-600/90' 
                          : 'bg-gradient-to-tr from-blue-600/90 via-indigo-600/90 to-purple-600/90'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6">
                        <h3 className="text-white text-xl font-bold">{item.title}</h3>
                        <p className="text-white/80 text-sm mt-2 capitalize">{item.category}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 capitalize">{item.category}</p>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto group-hover:text-primary group-hover:underline underline-offset-4"
                    >
                      <span>View Project</span>
                      <ArrowRight
                        size={16}
                        className="ml-1 transform translate-x-0 group-hover:translate-x-1 transition-transform"
                      />
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        <div className="mt-16 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
} 