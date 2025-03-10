'use client'
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Palette, 
  Monitor, 
  Smartphone, 
  ShoppingCart, 
  Search, 
  Code, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils/cn";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that engage users and enhance their experience.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: Monitor,
    title: "Web Development",
    description: "Custom websites with clean code that performs flawlessly across all devices.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Online stores that drive sales with seamless shopping and checkout experiences.",
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Strategic optimization to improve your search rankings and drive organic traffic.",
    color: "bg-red-500/10 text-red-500",
  },
  {
    icon: Code,
    title: "API Development",
    description: "Robust backend APIs that connect your systems and enable powerful functionality.",
    color: "bg-indigo-500/10 text-indigo-500",
  },
];

export function ServicesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 relative overflow-hidden" id="services">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400/20 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm text-center font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full mb-4">
              Our Services
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Comprehensive Web Solutions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            We offer end-to-end digital services to help your business succeed online.
            From design to development to marketing.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { ref, inView } = useInView({
              threshold: 0.1,
              triggerOnce: true,
              delay: 100,
            });
            
            return (
              <motion.div
                key={service.title}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-background border border-border/40 rounded-xl overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 hover:border-purple-500/20">
                  <div className="p-6">
                    <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", service.color)}>
                      <service.icon size={24} />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    
                    <div className="mt-auto pt-2">
                      <Button 
                        variant="ghost" 
                        className="p-0 h-auto group-hover:text-primary group-hover:underline underline-offset-4"
                      >
                        <span>Learn more</span>
                        <ArrowRight 
                          size={16} 
                          className="ml-1 transform translate-x-0 group-hover:translate-x-1 transition-transform"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
} 