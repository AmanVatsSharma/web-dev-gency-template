'use client'
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Star, Users, Clock, Trophy, Award, Shield } from "lucide-react";
import { cn } from "@/app/lib/utils/cn";

// Placeholder logos - replace with actual client logos
const clientLogos = [
  { id: 1, name: "Client 1", logo: "/client-logo-1.svg" },
  { id: 2, name: "Client 2", logo: "/client-logo-2.svg" },
  { id: 3, name: "Client 3", logo: "/client-logo-3.svg" },
  { id: 4, name: "Client 4", logo: "/client-logo-4.svg" },
  { id: 5, name: "Client 5", logo: "/client-logo-5.svg" },
];

// Stats to showcase experience and success
const stats = [
  { id: 1, value: "250+", label: "Websites Launched", icon: <Users className="h-6 w-6 text-indigo-500" /> },
  { id: 2, value: "14 Days", label: "Average Delivery", icon: <Clock className="h-6 w-6 text-indigo-500" /> },
  { id: 3, value: "99%", label: "Client Satisfaction", icon: <Star className="h-6 w-6 text-indigo-500" /> },
  { id: 4, value: "5+ Years", label: "Industry Experience", icon: <Trophy className="h-6 w-6 text-indigo-500" /> },
];

// Trust badges
const trustBadges = [
  { 
    id: 1, 
    icon: <Shield className="h-6 w-6 text-indigo-500" />,
    title: "Secure & Reliable",
    description: "SSL encryption and 99.9% uptime guarantee"
  },
  { 
    id: 2,
    icon: <Award className="h-6 w-6 text-indigo-500" />,
    title: "Award-Winning",
    description: "Recognized for design & development excellence" 
  },
];

export function BusinessTrustSignals() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-12 md:py-16 bg-muted/30 relative overflow-hidden" id="business-trust">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4" ref={ref}>
        {/* Trusted by companies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-lg font-medium text-muted-foreground mb-8">
            Trusted by businesses across industries
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {clientLogos.map((client) => (
              <div 
                key={client.id} 
                className="w-24 md:w-32 h-12 relative grayscale hover:grayscale-0 transition-all duration-300"
              >
                {/* Replace this with actual logos */}
                <div className="bg-background/80 rounded-md p-3 flex items-center justify-center h-full">
                  <span className="text-lg font-bold">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-background/80 backdrop-blur-sm border border-border/30 rounded-xl p-4 text-center"
            >
              <div className="flex justify-center mb-2">
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-1">
                {stat.value}
              </h3>
              <p className="text-sm text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.id}
              className="flex items-center gap-4 bg-background/80 backdrop-blur-sm border border-border/30 rounded-xl p-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center">
                {badge.icon}
              </div>
              <div>
                <h4 className="font-medium mb-0.5">{badge.title}</h4>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Guarantee seal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-block border-2 border-indigo-500/30 rounded-full p-6 bg-indigo-500/5 mx-auto mb-3">
            <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mx-auto">
              <Shield className="h-8 w-8 text-indigo-500" />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-1">100% Satisfaction Guarantee</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Not happy with your website? We'll revise it until you love it or give you a full refund.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 