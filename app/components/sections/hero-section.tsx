'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Spotlight } from "@/app/components/ui/spotlight";
import { FloatingElement } from "@/app/components/ui/floating-element";
import { ArrowRight, Check } from "lucide-react";

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const features = [
    "Stunning UI/UX Design",
    "Performance Optimization",
    "Mobile Responsiveness",
    "SEO Best Practices",
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
      
      {/* Abstract shapes */}
      {isMounted && (
        <>
          <div className="hidden md:block absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          <div className="hidden md:block absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[500px] rounded-full opacity-20 -z-10">
            <Spotlight fill="rgba(120, 119, 198, 0.15)" className="w-full h-full">
              <div className="w-full h-full"></div>
            </Spotlight>
          </div>
        </>
      )}
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full mb-4">
                Web Development Agency
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              We Build <span className="text-gradient">Stunning</span> Websites That <span className="text-gradient">Convert</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8 max-w-xl"
            >
              Transform your online presence with our premium web development services. We create beautiful, high-performing websites that drive results.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button variant="gradient" size="lg" className="rounded-full group flex items-center gap-2">
                Get Started
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                View Our Work
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check size={12} className="text-green-500" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Image/Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <FloatingElement speed="slow" className="relative z-10 w-full max-w-lg mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl glow-border">
                <Image
                  src="/hero-dashboard.png"
                  alt="Dashboard Preview"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6">
                    <p className="text-white font-medium">Modern dashboard design for a SaaS company</p>
                  </div>
                </div>
              </div>
            </FloatingElement>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-10 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-10 -left-4 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl -z-10" />
            
            {/* Floating badge/stats */}
            <FloatingElement
              className="absolute -top-8 -left-16 z-20 hidden lg:block"
              speed="medium"
              delay={0.5}
              yOffset={15}
            >
              <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-3 flex items-center gap-2 border border-border/50">
                <div className="bg-green-500/20 w-10 h-10 rounded-full flex items-center justify-center text-green-500 font-bold">
                  <span>✓</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Projects Delivered</p>
                  <p className="font-semibold">175+</p>
                </div>
              </div>
            </FloatingElement>
            
            <FloatingElement
              className="absolute -bottom-10 -right-10 z-20 hidden lg:block"
              speed="medium"
              delay={0.8}
              yOffset={15}
            >
              <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-3 flex items-center gap-2 border border-border/50">
                <div className="bg-blue-500/20 w-10 h-10 rounded-full flex items-center justify-center text-blue-500 font-bold">
                  <span>⭐</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Client Rating</p>
                  <p className="font-semibold">4.9/5</p>
                </div>
              </div>
            </FloatingElement>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 