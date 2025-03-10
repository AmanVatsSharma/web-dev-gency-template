'use client'
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils/cn";
import { ArrowRight, Sparkles, CheckCircle2, Zap } from "lucide-react";

// 3D rotation card based on Aceternity UI
const Card3DRotate = ({ children }: { children: React.ReactNode }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (centerY - y) / 10;
    const rotateY = (x - centerX) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };
  
  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-all duration-200 will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

// Sparkles animation based on Aceternity UI
const SparklesAnimation = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 bg-indigo-500 rounded-full animate-sparkle opacity-0"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${(Math.random() * 2).toFixed(2)}s`,
              animationDuration: `${1 + Math.random() * 1}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export function BusinessCTA() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const features = [
    { text: "One-time payment, no recurring fees", icon: <Zap className="h-4 w-4" /> },
    { text: "14-day delivery guarantee", icon: <CheckCircle2 className="h-4 w-4" /> },
    { text: "Free post-launch support", icon: <CheckCircle2 className="h-4 w-4" /> },
    { text: "100% satisfaction or money back", icon: <CheckCircle2 className="h-4 w-4" /> },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-28 relative overflow-hidden" 
      id="business-cta"
    >
      {/* Background elements based on Aceternity UI */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_400px,rgba(120,119,198,0.15),transparent)]"></div>
      </div>
      
      {/* Foreground content */}
      <div className="container mx-auto px-4" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <Card3DRotate>
            <motion.div
              style={{ y, opacity }}
              className="bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl backdrop-blur-lg p-8 lg:p-12"
            >
              <SparklesAnimation className="absolute inset-0" />
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left column content */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/20">
                        <Sparkles className="h-3 w-3 text-indigo-500" />
                      </div>
                      <span className="text-sm font-medium text-indigo-500">Limited Time Offer</span>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
                      Get Your Professional Website for a <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">One-Time Payment</span>
                    </h2>
                    
                    <p className="text-muted-foreground text-lg mb-6">
                      Launch your business website without recurring fees or subscriptions. Pay once and own it forever. 
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {features.map((feature, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                          className="flex items-center gap-2 text-sm md:text-base"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                            {feature.icon}
                          </div>
                          <span>{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        variant="gradient" 
                        size="lg" 
                        className="rounded-full group relative overflow-hidden"
                        asChild
                      >
                        <a href="#business-contact-cta" className="flex items-center justify-center gap-1.5">
                          <span className="relative z-10">Get Started Today</span>
                          <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="rounded-full border-white/20 backdrop-blur-sm"
                        asChild
                      >
                        <a href="#business-pricing">View Pricing</a>
                      </Button>
                    </div>
                    
                    <div className="mt-6 flex items-center text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3 mr-1.5 text-green-500" />
                      <span>Starting at just $999 for a complete business website</span>
                    </div>
                  </motion.div>
                  
                  {/* Right column - testimonial */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative"
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 shadow-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-white/20">
                          <Image
                            src="/testimonial-3.jpg"
                            alt="Client"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">David Rodriguez</h4>
                          <p className="text-sm text-muted-foreground">Marketing Director, Elevate Inc</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      
                      <blockquote className="italic text-sm mb-4">
                        "The one-time payment option was perfect for our budget. We got a stunning website that has already paid for itself many times over through new client acquisitions. Highly recommend their service."
                      </blockquote>
                      
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Zap className="h-3 w-3 text-green-500" />
                          87% more leads
                        </span>
                        <span className="inline-block h-1 w-1 rounded-full bg-muted-foreground"></span>
                        <span>Delivered in 12 days</span>
                      </div>
                    </div>
                    
                    {/* Floating elements for visual interest */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-indigo-500/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500/20 rounded-full blur-xl"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Card3DRotate>
        </div>
      </div>
    </section>
  );
} 