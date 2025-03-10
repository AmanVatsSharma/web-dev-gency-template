'use client'
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Cta() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 relative overflow-hidden" id="cta">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-background to-background"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-black/10 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border/10 shadow-xl relative overflow-hidden" ref={ref}>
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Digital <span className="text-gradient">Presence?</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with a tailored web solution that drives results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="gradient" 
                size="lg" 
                className="rounded-full group"
                asChild
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get in Touch
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 