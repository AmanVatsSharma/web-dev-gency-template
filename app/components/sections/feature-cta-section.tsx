'use client'
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Spotlight } from "@/app/components/ui/spotlight";

export function FeatureCta() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    "Custom Web Development",
    "Responsive UI/UX Design",
    "E-commerce Solutions",
    "SEO Optimization",
    "CMS Integration",
    "Performance Enhancements",
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="feature-cta">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4">
        <Spotlight className="max-w-6xl mx-auto bg-background rounded-3xl p-8 md:p-12 border border-border/10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center" ref={ref}>
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Take Your Business to the <span className="text-gradient">Next Level</span>
              </h2>
              
              <p className="text-muted-foreground text-lg mb-8">
                Partner with our expert team to create digital experiences that engage your audience and drive measurable results.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check size={12} className="text-green-500" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="gradient" 
                size="lg" 
                className="rounded-full group"
                asChild
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
            
            {/* Image/Graphics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-purple-600 to-indigo-600"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0.5px,transparent_1px)] bg-[size:16px_16px] opacity-20"></div>
                
                {/* Stats overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-5xl font-bold mb-1">98%</h3>
                      <p className="text-white/70 text-sm">Client Satisfaction</p>
                    </div>
                    
                    <div>
                      <h3 className="text-5xl font-bold mb-1">250+</h3>
                      <p className="text-white/70 text-sm">Projects Completed</p>
                    </div>
                    
                    <div>
                      <h3 className="text-5xl font-bold mb-1">8+</h3>
                      <p className="text-white/70 text-sm">Years of Experience</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-600/20 rounded-full blur-xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600/20 rounded-full blur-xl -z-10"></div>
            </motion.div>
          </div>
        </Spotlight>
      </div>
    </section>
  );
} 