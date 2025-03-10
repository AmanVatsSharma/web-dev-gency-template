'use client'
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { 
  Smartphone, 
  Search, 
  Rocket, 
  BarChart2, 
  ShieldCheck, 
  Clock, 
  CreditCard, 
  FileEdit, 
  Layout
} from "lucide-react";
import { cn } from "@/app/lib/utils/cn";
import { Spotlight } from "@/app/components/ui/spotlight";

// Feature data
const features = [
  {
    id: 1,
    icon: <Layout className="h-8 w-8 text-indigo-500" />,
    title: "Professional Design",
    description: "Custom-designed websites that reflect your brand identity and impress your visitors.",
    gradient: "from-indigo-500/20 to-purple-500/20"
  },
  {
    id: 2,
    icon: <Smartphone className="h-8 w-8 text-purple-500" />,
    title: "Mobile Responsive",
    description: "Websites that look great and function perfectly on all devices - desktop, tablet, and mobile.",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    icon: <Rocket className="h-8 w-8 text-pink-500" />,
    title: "Fast Loading Speed",
    description: "Optimized for maximum performance to ensure visitors don't bounce due to slow loading times.",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    id: 4,
    icon: <Search className="h-8 w-8 text-blue-500" />,
    title: "SEO Optimization",
    description: "Built with search engines in mind to help your business rank higher in search results.",
    gradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    id: 5,
    icon: <BarChart2 className="h-8 w-8 text-emerald-500" />,
    title: "Conversion Focused",
    description: "Strategically designed to convert visitors into leads and customers with clear CTAs.",
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: 6,
    icon: <ShieldCheck className="h-8 w-8 text-violet-500" />,
    title: "Secure & Reliable",
    description: "SSL certificates, regular backups, and secure hosting included with every website.",
    gradient: "from-violet-500/20 to-indigo-500/20"
  },
  {
    id: 7,
    icon: <Clock className="h-8 w-8 text-amber-500" />,
    title: "Quick Turnaround",
    description: "Get your professional website up and running in as little as 14 days.",
    gradient: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: 8,
    icon: <CreditCard className="h-8 w-8 text-cyan-500" />,
    title: "Affordable Pricing",
    description: "Transparent pricing with flexible monthly plans to fit your budget.",
    gradient: "from-cyan-500/20 to-sky-500/20"
  },
  {
    id: 9,
    icon: <FileEdit className="h-8 w-8 text-rose-500" />,
    title: "Easy Content Updates",
    description: "User-friendly content management system to keep your website fresh and up-to-date.",
    gradient: "from-rose-500/20 to-red-500/20"
  }
];

export function BusinessFeatures() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="business-features">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute -z-10 top-1/3 left-0 w-72 h-72 bg-indigo-500/30 rounded-full filter blur-[120px] opacity-20"></div>
      <div className="absolute -z-10 bottom-1/3 right-0 w-72 h-72 bg-purple-500/30 rounded-full filter blur-[120px] opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full mb-4 shadow-sm">
              Premium Features
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Everything You Need for an <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">Effective Website</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Our business websites include all the essential features to help you establish a strong online presence and drive growth.
          </motion.p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className={cn(
                "h-full p-6 rounded-2xl border border-border/30 backdrop-blur-sm relative overflow-hidden group",
                "bg-background/80 hover:bg-background transition-colors duration-300",
                "hover:shadow-lg hover:border-indigo-500/20"
              )}>
                {/* Feature gradient background */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
                  `bg-gradient-to-br ${feature.gradient}`
                )} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center mb-5 shadow-sm border border-border/50">
                    {feature.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 p-8 md:p-10 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-indigo-500/20 relative overflow-hidden"
        >
          <Spotlight
            className="-top-10 left-0"
            fill="rgba(79, 70, 229, 0.15)"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Complete Website Solution
              </h3>
              
              <p className="text-lg text-muted-foreground mb-6">
                Every website comes with domain setup, hosting, SSL certificate, responsive design, SEO optimization, and ongoing support—all for one affordable monthly price.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
                  No Hidden Fees
                </span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                  Unlimited Updates
                </span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                  Technical Support
                </span>
              </div>
            </div>
            
            <div className="lg:col-span-2 relative h-60 md:h-72 overflow-hidden rounded-xl">
              {/* Replace with an actual screenshot of a business website */}
              <div className="w-full h-full bg-background rounded-xl flex items-center justify-center border border-border">
                <span className="text-xl font-bold">[Website Preview]</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 