'use client'
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/app/lib/utils/cn";

export function AnimatedBannerCta() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Text tracking animation
  const glowText = "ELEVATE YOUR DIGITAL PRESENCE";
  const [glowPosition, setGlowPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowPosition((prev) => (prev + 1) % glowText.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      
      {/* Animated blobs */}
      <div className="absolute -left-32 top-1/3 w-64 h-64 rounded-full bg-indigo-600/20 blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute -right-32 bottom-1/3 w-64 h-64 rounded-full bg-purple-600/20 blur-[100px] animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={cn(
            "relative mx-auto rounded-3xl p-1 transition-all duration-500",
            "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient",
            "shadow-xl hover:shadow-2xl"
          )}
        >
          {/* Main content container */}
          <div className="rounded-[calc(1.5rem-4px)] bg-background/95 backdrop-blur-sm p-8 md:p-12 relative overflow-hidden">
            {/* Moving light effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className={cn(
                "absolute inset-x-0 -top-40 -bottom-40",
                "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]",
                "from-purple-500/20 via-transparent to-transparent",
                "opacity-0 transition-opacity duration-500",
                hovered ? "opacity-100" : ""
              )} style={{ transform: `translateY(${hovered ? '30%' : '0%'}) rotate(${hovered ? '5deg' : '0deg'})`, transition: 'transform 0.8s ease-out, opacity 0.5s ease-out' }} />
            </div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              {/* Eyebrow text */}
              <motion.div 
                variants={itemVariants}
                className="mb-4 flex justify-center"
              >
                <div className="bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-full px-4 py-1.5 text-sm font-medium inline-flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Limited Time Offer</span>
                </div>
              </motion.div>
              
              {/* Headline */}
              <motion.h2 
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              >
                Ready to Create Your <br className="hidden sm:inline" />
                <span className="inline-block relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                    Dream Website?
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></span>
                </span>
              </motion.h2>
              
              {/* Animated text ticker */}
              <motion.div 
                variants={itemVariants}
                className="mb-8 overflow-hidden"
              >
                <div className="inline-flex gap-2 overflow-hidden py-2 font-mono text-xs sm:text-sm tracking-wider text-muted-foreground">
                  {glowText.split('').map((char, index) => (
                    <span 
                      key={index} 
                      className={cn(
                        "transition-colors duration-300",
                        index === glowPosition ? "text-indigo-500 font-bold" : ""
                      )}
                    >
                      {char}
                    </span>
                  ))}
                  <ChevronRight className="h-4 w-4 text-indigo-500 animate-pulse" />
                </div>
              </motion.div>
              
              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto"
              >
                Get 20% off your first project when you book a consultation this month.
                Our expert team is ready to bring your vision to life.
              </motion.p>
              
              {/* CTA buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  variant="gradient" 
                  size="lg" 
                  className="rounded-full group relative overflow-hidden"
                  asChild
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <span className="relative z-10">Get Started Today</span>
                    <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full"
                  asChild
                >
                  <Link href="/portfolio">
                    View Our Work
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 