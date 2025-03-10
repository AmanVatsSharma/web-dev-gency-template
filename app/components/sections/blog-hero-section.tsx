'use client'
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils/cn";

export function BlogHero() {
  return (
    <div className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-blue-500/5 to-transparent" />
      
      {/* Animated grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_40%,transparent_100%)]" />
        </div>
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block mb-4"
          >
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Our Blog
            </span>
            <div className="absolute -left-2 -top-2 h-6 w-6 rounded-full bg-primary/30 blur-xl" />
            <div className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full bg-indigo-500/30 blur-xl" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              "background-animate mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-4xl font-bold text-transparent md:text-6xl",
              "tracking-tight leading-tight"
            )}
          >
            Insights & Perspectives on <br /> Modern Web Development
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground"
          >
            Explore our thoughts on design, development, strategy, and technology. 
            Stay ahead with the latest trends and best practices in the digital world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <a 
              href="#latest-posts" 
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Latest Posts
            </a>
            <a 
              href="#featured-tutorials" 
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Tutorials
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 