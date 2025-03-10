'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Spotlight } from "@/app/components/ui/spotlight";
import { ArrowRight, Code, Palette, ShoppingCart, Smartphone, Search, Database } from "lucide-react";
import { cn } from "@/app/lib/utils/cn";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Create intuitive and engaging user experiences that delight customers and drive conversions.",
    color: "from-purple-600 to-blue-600",
    href: "#ui-ux-design",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance.",
    color: "from-blue-600 to-indigo-600",
    href: "#web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that provide seamless experiences across devices.",
    color: "from-green-600 to-teal-600",
    href: "#mobile-development",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Online stores that drive sales with seamless shopping and checkout experiences.",
    color: "from-amber-600 to-orange-600",
    href: "#ecommerce-solutions",
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    description: "Boost your online visibility and attract more qualified leads with our proven strategies.",
    color: "from-red-600 to-pink-600",
    href: "#seo-marketing",
  },
  {
    icon: Database,
    title: "CMS & Backend",
    description: "Robust backend systems and content management solutions that power your digital presence.",
    color: "from-indigo-600 to-violet-600",
    href: "#cms-backend",
  },
];

export function ServicesHero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] opacity-70"></div>
      
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full">
              Our Services
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Expert Solutions for Your <span className="text-gradient">Digital Needs</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8"
          >
            We offer a comprehensive range of services to help your business establish a powerful online presence and achieve your digital goals.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              variant="gradient" 
              size="lg" 
              className="rounded-full group"
              asChild
            >
              <Link href="#services-list" className="flex items-center gap-2">
                Explore Our Services
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full"
              asChild
            >
              <Link href="/contact">
                Get a Free Consultation
              </Link>
            </Button>
          </motion.div>
        </div>
        
        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          id="services-list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <Spotlight
              key={service.title}
              className={cn(
                "relative rounded-3xl overflow-hidden p-0.5 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
                hoveredIndex === index ? "z-10 scale-[1.02]" : ""
              )}
              fill="rgba(120, 119, 198, 0.2)"
            >
              <Link 
                href={service.href}
                className="block h-full" 
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="bg-background/80 backdrop-blur-sm rounded-[calc(1.5rem-2px)] p-6 h-full">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl mb-5 flex items-center justify-center text-white",
                    `bg-gradient-to-r ${service.color}`
                  )}>
                    <service.icon size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="flex items-center text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </Spotlight>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 