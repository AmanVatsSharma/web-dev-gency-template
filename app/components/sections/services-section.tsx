'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Palette, 
  Monitor, 
  Smartphone, 
  ShoppingCart, 
  Search, 
  Code, 
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils/cn";
import Link from "next/link";

// Service card component with hover effects
const ServiceCard = ({ 
  service, 
  index, 
  isLarge = false 
}: { 
  service: (typeof services)[0]; 
  index: number; 
  isLarge?: boolean;
}) => {
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
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border/40 bg-background/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        isLarge ? "md:col-span-2 md:row-span-2" : ""
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background gradient on hover */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-10", 
          service.gradientColor
        )}
      />
      
      {/* Blob in the corner */}
      <div 
        className={cn(
          "absolute -bottom-24 -right-24 h-40 w-40 rounded-full blur-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-20", 
          service.blobColor
        )}
      />
      
      <div className="relative z-10 h-full p-6 flex flex-col">
        {/* Icon */}
        <div className={cn(
          "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg",
          service.color
        )}>
          <service.icon className="h-6 w-6" />
        </div>
        
        {/* Title */}
        <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
        
        {/* Description */}
        <p className="mb-6 text-muted-foreground flex-grow">{service.description}</p>
        
        {/* Link */}
        <div className="mt-auto">
          <Link 
            href={service.link || "/services"} 
            className={cn(
              "inline-flex items-center gap-1 text-sm font-medium",
              service.textColor,
              "opacity-80 transition-opacity duration-300 hover:opacity-100"
            )}
          >
            Learn more
            <motion.span
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that engage users and enhance their experience with your brand. We focus on creating designs that not only look stunning but also convert visitors into customers.",
    color: "bg-purple-500/10 text-purple-500",
    textColor: "text-purple-500",
    gradientColor: "from-purple-600 to-indigo-600",
    blobColor: "bg-purple-600",
    link: "/services#design",
    featured: true
  },
  {
    icon: Monitor,
    title: "Web Development",
    description: "Custom websites with clean code that performs flawlessly across all devices. We build fast, responsive, and scalable web solutions tailored to your business needs.",
    color: "bg-blue-500/10 text-blue-500",
    textColor: "text-blue-500",
    gradientColor: "from-blue-600 to-sky-600",
    blobColor: "bg-blue-600",
    link: "/services#web-development"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that provide seamless experiences across iOS and Android devices.",
    color: "bg-green-500/10 text-green-500",
    textColor: "text-green-500",
    gradientColor: "from-green-600 to-emerald-600",
    blobColor: "bg-green-600",
    link: "/services#mobile-development"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "End-to-end online store development with secure payment processing, inventory management, and optimized checkout flows.",
    color: "bg-amber-500/10 text-amber-500",
    textColor: "text-amber-500",
    gradientColor: "from-amber-600 to-orange-600",
    blobColor: "bg-amber-600",
    link: "/services#ecommerce"
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Strategic optimization to improve your site's visibility in search results and drive more organic traffic to your business.",
    color: "bg-red-500/10 text-red-500",
    textColor: "text-red-500",
    gradientColor: "from-red-600 to-rose-600",
    blobColor: "bg-red-600",
    link: "/services#seo"
  },
  {
    icon: Code,
    title: "Custom Web Applications",
    description: "Tailor-made web applications that automate processes, improve efficiency, and solve your unique business challenges.",
    color: "bg-indigo-500/10 text-indigo-500",
    textColor: "text-indigo-500",
    gradientColor: "from-indigo-600 to-violet-600",
    blobColor: "bg-indigo-600",
    link: "/services#applications"
  },
];

export function ServicesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Find the featured service
  const featuredService = services.find(service => service.featured);
  const regularServices = services.filter(service => !service.featured);

  return (
    <section 
      id="services" 
      className="relative py-20 overflow-hidden bg-muted/20"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute -z-10 h-32 w-32 rounded-full bg-blue-500/20 blur-[100px] top-10 right-10"></div>
      <div className="absolute -z-10 h-32 w-32 rounded-full bg-purple-500/20 blur-[100px] bottom-10 left-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full mb-4 shadow-sm">
              Our Services
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            Elevate Your Digital Presence
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            From concept to deployment, we deliver end-to-end web solutions to help your business thrive in the digital landscape.
          </motion.p>
        </div>
        
        {/* Bento grid layout for services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredService && (
            <ServiceCard service={featuredService} index={0} isLarge={true} />
          )}
          
          {regularServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index + 1}
            />
          ))}
        </div>
        
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
              <Link href="/services">
                <span>View all services</span>
                <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 