'use client'
import React from "react";
import { motion } from "framer-motion";

export function PortfolioHero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 text-sm font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full mb-4"
          >
            Our Portfolio
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Showcasing Our <span className="text-gradient">Creative Work</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Explore our diverse collection of web development projects, spanning various industries and technologies.
          </motion.p>
        </div>
      </div>
    </section>
  );
} 