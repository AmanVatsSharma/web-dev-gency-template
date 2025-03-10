'use client'
import React, { useState } from "react";
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
    gradient: "from-blue-500/20 via-transparent to-transparent",
    iconGradient: "from-blue-600 to-blue-400"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe great work happens when clients and our team work together as true partners.",
    color: "bg-green-500/10 text-green-500",
    gradient: "from-green-500/20 via-transparent to-transparent",
    iconGradient: "from-green-600 to-green-400"
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We're committed to delivering exceptional quality in every project we undertake.",
    color: "bg-purple-500/10 text-purple-500",
    gradient: "from-purple-500/20 via-transparent to-transparent",
    iconGradient: "from-purple-600 to-purple-400"
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do, and that passion translates into enthusiasm and dedication.",
    color: "bg-red-500/10 text-red-500",
    gradient: "from-red-500/20 via-transparent to-transparent",
    iconGradient: "from-red-600 to-red-400"
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description: "We're dedicated to continuous learning and improvement in everything we do.",
    color: "bg-amber-500/10 text-amber-500",
    gradient: "from-amber-500/20 via-transparent to-transparent",
    iconGradient: "from-amber-600 to-amber-400"
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with transparency, honesty, and a strong ethical foundation.",
    color: "bg-indigo-500/10 text-indigo-500",
    gradient: "from-indigo-500/20 via-transparent to-transparent",
    iconGradient: "from-indigo-600 to-indigo-400"
  },
];

// 3D Card component inspired by Aceternity UI
function Card3D({ children, className, gradientClass }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const posX = e.clientX - centerX;
    const posY = e.clientY - centerY;
    
    // Calculate rotation based on mouse position
    // Dividing by a higher number reduces the rotation effect
    const rotateX = posY / -20;
    const rotateY = posX / 20;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className={cn(
        "relative h-full rounded-xl transition-all duration-300 ease-out",
        isHovered ? "z-10" : "z-0",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D effect with background gradients */}
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-100 blur transition duration-300 ease-in-out" />
      
      {/* Background gradient that appears on hover */}
      <div 
        className={cn(
          "absolute -inset-0.5 rounded-xl bg-gradient-to-br opacity-0 transition duration-300 ease-in-out",
          gradientClass,
          isHovered ? "opacity-50" : "opacity-0"
        )} 
      />
      
      {/* Main card content with 3D transform */}
      <div
        className="bg-background/90 backdrop-blur-sm border border-border/50 rounded-xl p-6 h-full relative overflow-hidden transform-gpu transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovered ? 1.02 : 1})`,
          transition: "all 0.15s ease",
        }}
      >
        {/* Subtle light reflection */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-300 transition-opacity"
          style={{
            background: `radial-gradient(circle at ${isHovered ? 50 + rotate.y * 2 : 50}% ${isHovered ? 50 + rotate.x * 2 : 50}%, rgba(255,255,255,0.1) 0%, transparent 60%)`,
          }}
        />
        
        {children}
      </div>
    </div>
  );
}

export function ValuesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 relative" id="values">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute left-0 top-[30%] -z-10 h-32 w-32 rounded-full bg-purple-500/30 blur-[100px]" />
      <div className="absolute right-0 bottom-[20%] -z-10 h-32 w-32 rounded-full bg-blue-500/30 blur-[100px]" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm text-center font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full mb-4 shadow-sm">
              Our Values
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80"
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
                className="group"
              >
                <Card3D gradientClass={`bg-gradient-to-br ${value.gradient}`}>
                  <div className="z-10 relative">
                    <div className={cn(
                      "w-14 h-14 rounded-lg flex items-center justify-center mb-5",
                      "bg-gradient-to-br", 
                      value.iconGradient,
                      "shadow-lg"
                    )}>
                      <value.icon size={24} className="text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300" style={{
                      backgroundImage: `linear-gradient(to right, ${value.title === "Innovation" ? "#3b82f6" : 
                                      value.title === "Collaboration" ? "#22c55e" :
                                      value.title === "Excellence" ? "#8b5cf6" :
                                      value.title === "Passion" ? "#ef4444" :
                                      value.title === "Growth Mindset" ? "#f59e0b" : "#6366f1"}, transparent)`
                    }}>
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 