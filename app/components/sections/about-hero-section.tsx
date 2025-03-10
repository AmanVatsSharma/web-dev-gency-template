'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Spotlight } from "@/app/components/ui/spotlight";

export function AboutHero() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full">
              About Us
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl"
          >
            Crafting Digital Excellence Since <span className="text-gradient">2015</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-12 max-w-3xl"
          >
            We're a team of passionate designers, developers, and digital strategists dedicated to creating exceptional digital experiences that drive business growth.
          </motion.p>
        </div>
        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-20"
        >
          <Spotlight className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-black/5 dark:bg-white/5 rounded-2xl p-8 md:p-10 border border-border/10">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-2 text-gradient">250+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-2 text-gradient">15+</h3>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-2 text-gradient">8</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-2 text-gradient">98%</h3>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </Spotlight>
        </motion.div>
        
        {/* About Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0.5px,transparent_1px)] bg-[size:16px_16px] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
            <div className="p-6 md:p-10 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">DevAgency Team</h3>
              <p className="text-white/80 max-w-2xl">
                A diverse group of creative minds united by our passion for digital excellence.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 