'use client'
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Heart, 
  Lightbulb, 
  Star, 
  TrendingUp, 
  Users, 
  Shield 
} from "lucide-react";
import { cn } from "@/app/lib/utils/cn";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We're constantly exploring new technologies and approaches to deliver cutting-edge solutions.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe great work happens when clients and our team work together as true partners.",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We're committed to delivering exceptional quality in every project we undertake.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do, and that passion translates into enthusiasm and dedication.",
    color: "bg-red-500/10 text-red-500",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description: "We're dedicated to continuous learning and improvement in everything we do.",
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with transparency, honesty, and a strong ethical foundation.",
    color: "bg-indigo-500/10 text-indigo-500",
  },
];

export function ValuesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 relative" id="values">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm text-center font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full mb-4">
              Our Values
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What Drives Us Forward
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Our core values shape how we work, make decisions, and interact with our clients and each other.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const { ref, inView } = useInView({
              threshold: 0.1,
              triggerOnce: true,
              delay: 100,
            });
            
            return (
              <motion.div
                key={value.title}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 h-full">
                  <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", value.color)}>
                    <value.icon size={24} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 