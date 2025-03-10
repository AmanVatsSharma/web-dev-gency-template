'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/app/lib/utils/cn";

// Sample projects data
const projects = [
  {
    id: 1,
    title: "SaaS Dashboard",
    category: "web",
    tags: ["React", "Next.js", "Tailwind"],
    description: "Modern analytics dashboard for a SaaS platform",
    color: "bg-gradient-to-br from-purple-600 to-blue-600",
    height: "row-span-1", // Tailwind grid row span classes
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "ecommerce",
    tags: ["Next.js", "Stripe", "MongoDB"],
    description: "Full-featured online store with payment processing",
    color: "bg-gradient-to-br from-blue-600 to-cyan-600",
    height: "row-span-2", // Taller item
  },
  {
    id: 3,
    title: "Restaurant Website",
    category: "web",
    tags: ["React", "Framer Motion", "GSAP"],
    description: "Interactive website for a high-end restaurant",
    color: "bg-gradient-to-br from-amber-500 to-orange-600",
    height: "row-span-1",
  },
  {
    id: 4,
    title: "Fitness App",
    category: "mobile",
    tags: ["React Native", "Firebase", "Redux"],
    description: "Mobile application for workout tracking and nutrition",
    color: "bg-gradient-to-br from-green-600 to-emerald-600",
    height: "row-span-1",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    category: "web",
    tags: ["Next.js", "Mapbox", "Prisma"],
    description: "Property listing and search platform with map integration",
    color: "bg-gradient-to-br from-red-600 to-pink-600",
    height: "row-span-2",
  },
  {
    id: 6,
    title: "Crypto Dashboard",
    category: "web",
    tags: ["React", "D3.js", "WebSockets"],
    description: "Real-time cryptocurrency tracking and portfolio management",
    color: "bg-gradient-to-br from-indigo-600 to-violet-600",
    height: "row-span-1",
  },
  {
    id: 7,
    title: "Travel Booking App",
    category: "mobile",
    tags: ["Flutter", "Node.js", "GraphQL"],
    description: "Cross-platform travel booking and itinerary management app",
    color: "bg-gradient-to-br from-blue-600 to-indigo-600",
    height: "row-span-2",
  },
  {
    id: 8,
    title: "Fashion Store",
    category: "ecommerce",
    tags: ["Shopify", "Next.js", "Tailwind"],
    description: "Custom Shopify storefront for a fashion brand",
    color: "bg-gradient-to-br from-pink-600 to-rose-600",
    height: "row-span-1",
  },
  {
    id: 9,
    title: "Productivity Tool",
    category: "saas",
    tags: ["React", "Firebase", "TypeScript"],
    description: "Project management and team collaboration platform",
    color: "bg-gradient-to-br from-teal-600 to-green-600",
    height: "row-span-1",
  },
];

// Defined categories for filtering
const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "saas", label: "SaaS" },
];

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Filter projects based on active category
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 relative" id="portfolio-gallery">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4">
        {/* Category Filters */}
        <div ref={ref} className="mb-12 flex justify-center">
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-gray-100 dark:bg-gray-800/50 rounded-full max-w-4xl overflow-x-auto">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                  activeCategory === category.id
                    ? "bg-white dark:bg-gray-700 shadow-sm text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Portfolio Grid - Masonry-inspired layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={cn(
                "group relative rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300",
                project.height,
                hoveredProject === project.id ? "shadow-lg scale-[1.01] z-10" : ""
              )}
            >
              {/* Background gradient */}
              <div className={cn(
                "absolute inset-0 w-full h-full transition-all duration-500",
                project.color
              )}>
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,white_0.5px,transparent_1px)] bg-[size:12px_12px]"></div>
              </div>
              
              {/* Content overlay */}
              <div className="relative h-full z-10 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm md:text-base mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-block px-2 py-1 bg-white/10 backdrop-blur-sm text-white/90 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link 
                  href={`/case-studies/${project.id}`}
                  className="inline-flex items-center text-white font-medium group/link"
                >
                  <span>View Case Study</span>
                  <ArrowRight size={16} className="ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Pagination or Load More - Optional */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Showing {filteredProjects.length} of {filteredProjects.length} projects
          </p>
        </div>
      </div>
    </section>
  );
} 