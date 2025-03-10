'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils/cn";
import { ArrowRight, ExternalLink, BarChart2, Users, Clock } from "lucide-react";

// Business website project examples
const portfolioProjects = [
  {
    id: 1,
    title: "Mountain View Dental",
    category: "Healthcare",
    industry: "Dental Practice",
    imageUrl: "/portfolio-1.jpg",
    description: "A modern website for a dental practice that increased appointment bookings by 45% within the first month.",
    results: [
      { icon: <BarChart2 className="h-4 w-4" />, text: "45% more appointment bookings" },
      { icon: <Users className="h-4 w-4" />, text: "62% increase in new patients" },
      { icon: <Clock className="h-4 w-4" />, text: "Delivered in 12 days" }
    ],
    link: "/case-studies/mountain-view-dental",
    featured: true,
  },
  {
    id: 2,
    title: "Artisan Bakery",
    category: "Food & Beverage",
    industry: "Bakery",
    imageUrl: "/portfolio-2.jpg",
    description: "An e-commerce enabled website for a local bakery, allowing online orders and special event bookings.",
    results: [
      { icon: <BarChart2 className="h-4 w-4" />, text: "128% increase in online sales" },
      { icon: <Users className="h-4 w-4" />, text: "1,200+ new subscribers" },
      { icon: <Clock className="h-4 w-4" />, text: "Delivered in 14 days" }
    ],
    link: "/case-studies/artisan-bakery",
    featured: false,
  },
  {
    id: 3,
    title: "Summit Financial Advisors",
    category: "Financial Services",
    industry: "Financial Advisory",
    imageUrl: "/portfolio-3.jpg",
    description: "A professional website for a financial advisory firm that established trust and generated qualified leads.",
    results: [
      { icon: <BarChart2 className="h-4 w-4" />, text: "87% more lead form submissions" },
      { icon: <Users className="h-4 w-4" />, text: "35% increase in consultation bookings" },
      { icon: <Clock className="h-4 w-4" />, text: "Delivered in 16 days" }
    ],
    link: "/case-studies/summit-financial",
    featured: true,
  },
  {
    id: 4,
    title: "Green Thumb Landscaping",
    category: "Home Services",
    industry: "Landscaping",
    imageUrl: "/portfolio-4.jpg",
    description: "A conversion-focused website for a landscaping company with gallery showcases and easy quote request forms.",
    results: [
      { icon: <BarChart2 className="h-4 w-4" />, text: "94% increase in quote requests" },
      { icon: <Users className="h-4 w-4" />, text: "4.6x more organic traffic" },
      { icon: <Clock className="h-4 w-4" />, text: "Delivered in 10 days" }
    ],
    link: "/case-studies/green-thumb",
    featured: false,
  },
];

const industryFilters = [
  { id: "all", label: "All Industries" },
  { id: "healthcare", label: "Healthcare" },
  { id: "food", label: "Food & Beverage" },
  { id: "financial", label: "Financial" },
  { id: "home", label: "Home Services" },
];

// Case study card component
const ProjectCard = ({ project }: { project: typeof portfolioProjects[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/30 bg-background/80 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg",
        project.featured ? "md:col-span-2" : "md:col-span-1"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project image with hover effect */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className={cn(
            "object-cover transition-transform duration-700 ease-in-out",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60"></div>
        
        {/* Industry label */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-black/20 backdrop-blur-sm text-white text-xs font-medium py-1 px-2 rounded-full">
            {project.industry}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* Results */}
        <div className="mb-5 space-y-2">
          {project.results.map((result, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-indigo-500">{result.icon}</span>
              <span>{result.text}</span>
            </div>
          ))}
        </div>
        
        <Button
          variant="outline"
          size="sm"
          className="rounded-full group/btn"
          asChild
        >
          <Link href={project.link} className="flex items-center gap-1.5">
            View Case Study 
            <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export function BusinessPortfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Filter projects
  const filteredProjects = activeFilter === "all"
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category.toLowerCase().includes(activeFilter));

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="business-portfolio">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute -z-10 top-1/4 right-0 w-72 h-72 bg-indigo-500/20 rounded-full filter blur-[100px] opacity-30"></div>
      <div className="absolute -z-10 bottom-1/4 left-0 w-72 h-72 bg-purple-500/20 rounded-full filter blur-[100px] opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full mb-4 shadow-sm">
              Our Work
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Business <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">Success Stories</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            See how we've helped businesses like yours achieve impressive results with their websites.
          </motion.p>
          
          {/* Industry filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {industryFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>
        
        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full group"
            asChild
          >
            <Link href="/portfolio" className="flex items-center gap-2">
              <span>View All Case Studies</span>
              <ExternalLink size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 