'use client'
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Spotlight } from "@/app/components/ui/spotlight";
import { ArrowRight, Check, ArrowDown, Code, Server, Layout, Globe } from "lucide-react";
import { cn } from "@/app/lib/utils/cn";

// Animated background component with moving particles
const ParticlesBackground = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-background">
            <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
              <div className="particles-container absolute inset-0 flex items-center justify-center">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div 
                    key={i}
                    className="absolute rounded-full bg-slate-400/10 mix-blend-overlay"
                    style={{
                      width: `${Math.random() * 40 + 10}px`,
                      height: `${Math.random() * 40 + 10}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                      animationDelay: `-${Math.random() * 5}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3D floating website mockup component
const WebsiteMockup = () => {
  const mockupRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mockupRef,
    offset: ["start end", "end start"],
  });
  
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });
  
  const springConfig = { stiffness: 100, damping: 30, bounce: 0 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [-50, 50]), springConfig);
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [2, -2]), springConfig);

  const setRefs = (node: HTMLDivElement | null) => {
    if (mockupRef) mockupRef.current = node;
    inViewRef(node);
  };

  return (
    <div ref={setRefs} className="relative w-full max-w-3xl mx-auto">
      {/* Floating UI mockup */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{ y, rotateX: 5, rotateY: rotate, rotateZ: 0 }}
        className="w-full h-full perspective-1000"
      >
        <div className="relative rounded-xl overflow-hidden bg-background shadow-2xl border border-border/50 transform-style-3d">
          {/* Browser toolbar */}
          <div className="bg-muted/50 backdrop-blur-sm p-2 flex gap-2 items-center">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
            </div>
            <div className="flex-1 bg-background/30 backdrop-blur-sm text-xs rounded-md h-6 flex items-center justify-center px-3 text-muted-foreground overflow-hidden">
              devagency.com
            </div>
          </div>
          
          {/* Website preview */}
          <div className="w-full aspect-[16/9] bg-gradient-to-b from-background to-muted/30 relative">
            <div className="absolute inset-4 rounded-lg bg-background/90 backdrop-blur-sm border border-border/50 flex flex-col">
              {/* Mini hero area */}
              <div className="p-4 h-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 opacity-30"></div>
                <div className="h-1.5 w-12 bg-primary/50 rounded-full mb-2"></div>
                <div className="h-2 w-20 bg-foreground/90 rounded-full mb-2"></div>
                <div className="h-1.5 w-32 bg-foreground/70 rounded-full mb-1"></div>
                <div className="h-1.5 w-24 bg-foreground/70 rounded-full mb-3"></div>
                <div className="h-2 w-12 bg-primary rounded-full"></div>
              </div>
              
              {/* Mini content blocks */}
              <div className="p-4 flex flex-1 gap-2">
                <div className="w-1/3 flex flex-col gap-1.5">
                  <div className="h-8 bg-muted/80 rounded-md"></div>
                  <div className="h-6 bg-muted/80 rounded-md"></div>
                  <div className="h-6 bg-muted/80 rounded-md"></div>
                </div>
                <div className="w-1/3 flex flex-col gap-1.5">
                  <div className="h-8 bg-muted/80 rounded-md"></div>
                  <div className="h-6 bg-muted/80 rounded-md"></div>
                  <div className="h-6 bg-muted/80 rounded-md"></div>
                </div>
                <div className="w-1/3 flex flex-col gap-1.5">
                  <div className="h-8 bg-muted/80 rounded-md"></div>
                  <div className="h-6 bg-muted/80 rounded-md"></div>
                  <div className="h-6 bg-muted/80 rounded-md"></div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute right-8 top-10 p-2 bg-card shadow-lg border border-border/80 rounded-lg z-10 animate-float">
              <Code className="h-4 w-4 text-blue-500" />
            </div>
            <div className="absolute left-8 bottom-10 p-2 bg-card shadow-lg border border-border/80 rounded-lg z-10 animate-float-delayed">
              <Server className="h-4 w-4 text-purple-500" />
            </div>
            <div className="absolute right-20 bottom-20 p-2 bg-card shadow-lg border border-border/80 rounded-lg z-10 animate-float-slow">
              <Layout className="h-4 w-4 text-green-500" />
            </div>
            <div className="absolute left-20 top-16 p-2 bg-card shadow-lg border border-border/80 rounded-lg z-10 animate-float-slower">
              <Globe className="h-4 w-4 text-amber-500" />
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Shadow reflection */}
      <div className="absolute inset-x-0 bottom-0 h-[60px] bg-background shadow-sm blur-2xl w-4/5 mx-auto rounded-[100%] z-0"></div>
    </div>
  );
};

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [heroRef, heroInView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

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
    <section className="relative pt-80 py-20 md:py-32 overflow-hidden" ref={heroRef}>
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
        
        {/* Animated gradient blobs */}
        <div className="absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-purple-600/20 blur-[100px] animate-blob"></div>
        <div className="absolute -right-20 top-1/3 h-[250px] w-[250px] rounded-full bg-blue-600/20 blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute left-1/4 -bottom-20 h-[350px] w-[350px] rounded-full bg-indigo-600/20 blur-[100px] animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Content Container */}
      <Spotlight
        className="-top-40 left-0 md:left-60"
        fill="white"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Left Column: Text Content */}
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block"
              >
                <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  Web Development Agency
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 leading-tight"
              >
                We Build <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">Stunning</span> Websites That Convert
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-muted-foreground"
              >
                Transform your online presence with our expert web development services. 
                We craft beautiful, high-performance websites that drive results.
              </motion.p>
              
              {/* Feature bullets */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-2 gap-3"
              >
                {features.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2"
                  >
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 sm:items-center pt-4"
              >
                <Button 
                  size="lg" 
                  className="group relative overflow-hidden rounded-full px-8 shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/40"
                >
                  <div className="absolute inset-0 h-full w-full translate-y-[100%] rounded-full bg-gradient-to-b from-blue-600 to-primary transition-transform duration-300 group-hover:translate-y-[0%]" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Get Started</span>
                  <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-colors duration-300 group-hover:text-white" />
                </Button>
                
                <a 
                  href="#learn-more" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span>See our work</span>
                  <ArrowDown className="h-4 w-4" />
                </a>
              </motion.div>
            </div>
            
            {/* Right Column: Interactive UI Mockup */}
            <div className="lg:w-1/2">
              <WebsiteMockup />
            </div>
          </div>
        </div>
      </Spotlight>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="h-8 w-5 rounded-full border border-border flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="h-1.5 w-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
} 