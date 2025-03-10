'use client'
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { cn } from "@/app/lib/utils/cn";

const journeyMilestones = [
  {
    year: "2015",
    title: "The Beginning",
    description: "DevAgency was founded by a small team of designers and developers with a shared vision of creating outstanding digital experiences.",
    image: "/images/journey-2015.jpg",
    color: "from-blue-600 to-indigo-600",
    iconColor: "bg-blue-500"
  },
  {
    year: "2017",
    title: "Team Growth",
    description: "We expanded our team and capabilities, bringing in specialists in UX design, backend development, and digital marketing.",
    image: "/images/journey-2017.jpg",
    color: "from-indigo-600 to-violet-600",
    iconColor: "bg-indigo-500"
  },
  {
    year: "2019",
    title: "Major Clients",
    description: "DevAgency secured partnerships with several Fortune 500 companies, establishing our reputation in the industry.",
    image: "/images/journey-2019.jpg",
    color: "from-violet-600 to-purple-600",
    iconColor: "bg-violet-500"
  },
  {
    year: "2021",
    title: "Global Expansion",
    description: "We opened our second office and began serving clients internationally across Europe, Asia, and North America.",
    image: "/images/journey-2021.jpg",
    color: "from-purple-600 to-pink-600",
    iconColor: "bg-purple-500"
  },
  {
    year: "2023",
    title: "Innovation Focus",
    description: "We launched our innovation lab to explore cutting-edge technologies like AI, blockchain, and extended reality.",
    image: "/images/journey-2023.jpg",
    color: "from-pink-600 to-rose-600",
    iconColor: "bg-pink-500"
  },
];

// Tracing Beam component inspired by Aceternity UI
function TracingBeam({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const contentRef = useRef(null);

  return (
    <div ref={ref} className="relative w-full max-w-4xl mx-auto">
      <motion.div
        className="absolute left-9 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0"
        style={{
          scaleY: scrollYProgress
        }}
      />
      
      <motion.div
        className="absolute left-[calc(2.25rem-0.5px)] top-3 w-3 h-3 rounded-full bg-gradient-to-b from-blue-500 to-indigo-600 z-10 shadow-md shadow-blue-500/50"
        style={{
          top: "0.75rem",
          translateY: useTransform(scrollYProgress, [0, 1], ["0%", `${contentRef.current?.offsetHeight || 1000}px`])
        }}
      />
      
      <div ref={contentRef}>
        {children}
      </div>
    </div>
  );
}

export function JourneySection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 relative overflow-hidden" id="journey">
      {/* Background gradient and visual effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-background to-background"></div>
        <div className="absolute h-32 w-32 left-1/3 top-1/4 bg-blue-500/20 blur-[100px] rounded-full"></div>
        <div className="absolute h-32 w-32 right-1/4 bottom-1/3 bg-purple-500/20 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm text-center font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full mb-4 shadow-sm">
              Our Journey
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500"
          >
            From Vision to Reality
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            The story of our evolution from a small startup to a leading web development agency.
          </motion.p>
        </div>
        
        {/* Timeline with Tracing Beam */}
        <TracingBeam>
          {journeyMilestones.map((milestone, index) => {
            const { ref, inView } = useInView({
              threshold: 0.2,
              triggerOnce: true,
              delay: 100,
            });
            
            return (
              <motion.div 
                ref={ref}
                key={milestone.year} 
                className="ml-20 mb-16 last:mb-0 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Year marker dot (outside tracing beam) */}
                <div className={cn(
                  "absolute left-[-40px] h-5 w-5 rounded-full shadow-inner border-2 border-white/20", 
                  milestone.iconColor
                )}></div>
                
                {/* Content card with animated hover effect */}
                <div className="group relative rounded-xl overflow-hidden transform-gpu transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* Card background with gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
                       style={{ backgroundImage: `linear-gradient(to right, ${milestone.year === "2015" ? "#2563eb, #4f46e5" : 
                                               milestone.year === "2017" ? "#4f46e5, #7c3aed" :
                                               milestone.year === "2019" ? "#7c3aed, #9333ea" :
                                               milestone.year === "2021" ? "#9333ea, #db2777" : "#db2777, #e11d48"}` }}>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/90"></div>
                  
                  {/* Content overlay with year */}
                  <div className="relative p-8 text-white z-10">
                    {/* Year badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold">
                      {milestone.year}
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-white/90 transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-white/80 mb-4 max-w-lg group-hover:text-white/100 transition-colors">
                        {milestone.description}
                      </p>
                      
                      {/* Visual indicator for hover */}
                      <div className="w-12 h-1 bg-white/50 rounded group-hover:w-24 transition-all duration-300 group-hover:bg-white/90"></div>
                    </div>
                  </div>
                  
                  {/* Full-bleed background image - commented out since these are dummy images
                  <Image
                    src={milestone.image}
                    alt={milestone.title}
                    fill
                    className="object-cover mix-blend-overlay opacity-40 group-hover:opacity-50 transition-opacity duration-300 group-hover:scale-105"
                  />
                  */}
                </div>
              </motion.div>
            );
          })}
        </TracingBeam>
      </div>
    </section>
  );
} 