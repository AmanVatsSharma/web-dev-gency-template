'use client'
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Sample client logos (these would be replaced with actual client logos)
const clientLogos = [
  {
    name: "TechCorp",
    logoColor: "bg-gradient-to-r from-blue-500 to-blue-600"
  },
  {
    name: "Innovate",
    logoColor: "bg-gradient-to-r from-purple-500 to-purple-600"
  },
  {
    name: "EcoSystems",
    logoColor: "bg-gradient-to-r from-green-500 to-green-600"
  },
  {
    name: "MediaFlow",
    logoColor: "bg-gradient-to-r from-pink-500 to-pink-600"
  },
  {
    name: "FinancePlus",
    logoColor: "bg-gradient-to-r from-amber-500 to-amber-600"
  },
  {
    name: "HealthGroup",
    logoColor: "bg-gradient-to-r from-emerald-500 to-emerald-600"
  },
  {
    name: "RetailMart",
    logoColor: "bg-gradient-to-r from-orange-500 to-orange-600"
  },
  {
    name: "TravelGo",
    logoColor: "bg-gradient-to-r from-cyan-500 to-cyan-600"
  },
  {
    name: "EduLearn",
    logoColor: "bg-gradient-to-r from-indigo-500 to-indigo-600"
  },
  {
    name: "FoodDelight",
    logoColor: "bg-gradient-to-r from-red-500 to-red-600"
  },
  {
    name: "SportZone",
    logoColor: "bg-gradient-to-r from-violet-500 to-violet-600"
  },
  {
    name: "CloudTech",
    logoColor: "bg-gradient-to-r from-teal-500 to-teal-600"
  },
];

export function ClientsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 relative overflow-hidden" id="clients">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-background to-background"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full mb-4">
              Our Clients
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Trusted by <span className="text-gradient">Leading Brands</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            We've had the pleasure of working with amazing organizations across various industries.
          </motion.p>
        </div>
        
        {/* Clients Logo Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className="aspect-video flex items-center justify-center rounded-xl border border-border/30 bg-background/50 backdrop-blur-sm p-6 hover:shadow-md transition-shadow duration-300"
              >
                {/* Replace with actual client logo images */}
                <div className="relative w-full h-full">
                  <div className={`absolute inset-0 rounded-lg opacity-10 ${client.logoColor}`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-bold text-lg">{client.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Testimonial Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <p className="text-xl italic text-muted-foreground">
            "Working with DevAgency has been a game-changer for our business. Their attention to detail and commitment to quality is unmatched."
          </p>
          <p className="mt-4 font-semibold">— Sarah Johnson, CEO at TechCorp</p>
        </motion.div>
      </div>
    </section>
  );
} 