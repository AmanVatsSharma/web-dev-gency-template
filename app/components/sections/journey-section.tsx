'use client'
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const journeyMilestones = [
  {
    year: "2015",
    title: "The Beginning",
    description: "DevAgency was founded by a small team of designers and developers with a shared vision of creating outstanding digital experiences.",
    image: "/images/journey-2015.jpg",
  },
  {
    year: "2017",
    title: "Team Growth",
    description: "We expanded our team and capabilities, bringing in specialists in UX design, backend development, and digital marketing.",
    image: "/images/journey-2017.jpg",
  },
  {
    year: "2019",
    title: "Major Clients",
    description: "DevAgency secured partnerships with several Fortune 500 companies, establishing our reputation in the industry.",
    image: "/images/journey-2019.jpg",
  },
  {
    year: "2021",
    title: "Global Expansion",
    description: "We opened our second office and began serving clients internationally across Europe, Asia, and North America.",
    image: "/images/journey-2021.jpg",
  },
  {
    year: "2023",
    title: "Innovation Focus",
    description: "We launched our innovation lab to explore cutting-edge technologies like AI, blockchain, and extended reality.",
    image: "/images/journey-2023.jpg",
  },
];

export function JourneySection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 relative overflow-hidden" id="journey">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-background to-background"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm text-center font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full mb-4">
              Our Journey
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            From Vision to <span className="text-gradient">Reality</span>
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
        
        {/* Timeline */}
        <div className="relative">
          {/* Line Down Center (Hidden on Mobile) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-pink-500/30"></div>
          
          {journeyMilestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            const { ref, inView } = useInView({
              threshold: 0.1,
              triggerOnce: true,
              delay: 100,
            });
            
            return (
              <div key={milestone.year} ref={ref} className="mb-16 last:mb-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Timeline Dot (Hidden on Mobile) */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 border-purple-500 bg-background z-10"></div>
                  
                  {/* Content Block */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`${isEven ? 'md:order-1' : 'md:order-2'}`}
                  >
                    <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-lg">
                      <div className="inline-block mb-3 px-3 py-1 text-sm font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                      <p className="text-muted-foreground mb-2">{milestone.description}</p>
                    </div>
                  </motion.div>
                  
                  {/* Image Block */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`${isEven ? 'md:order-2' : 'md:order-1'}`}
                  >
                    <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                      <div className={`absolute inset-0 bg-gradient-to-r ${
                        index % 5 === 0
                          ? 'from-purple-600 to-blue-600'
                          : index % 5 === 1
                            ? 'from-blue-600 to-indigo-600'
                            : index % 5 === 2
                              ? 'from-indigo-600 to-violet-600'
                              : index % 5 === 3
                                ? 'from-violet-600 to-purple-600'
                                : 'from-purple-600 to-pink-600'
                      }`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <span className="text-4xl md:text-6xl font-bold text-white opacity-90">{milestone.year}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 