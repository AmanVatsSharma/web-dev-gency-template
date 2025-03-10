'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/app/lib/utils/cn";

const technologies = [
  {
    category: "Frontend",
    techs: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 88 },
      { name: "Angular", level: 85 },
      { name: "Vue.js", level: 82 },
      { name: "Redux", level: 85 },
    ],
    color: "bg-gradient-to-r from-blue-600 to-cyan-600"
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 88 },
      { name: "Python", level: 85 },
      { name: "Django", level: 82 },
      { name: "PHP", level: 80 },
      { name: "Laravel", level: 78 },
      { name: "Ruby on Rails", level: 75 },
      { name: "Java Spring", level: 75 },
    ],
    color: "bg-gradient-to-r from-green-600 to-emerald-600"
  },
  {
    category: "Database",
    techs: [
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 88 },
      { name: "Firebase", level: 85 },
      { name: "Redis", level: 80 },
      { name: "ElasticSearch", level: 78 },
      { name: "SQLite", level: 85 },
      { name: "GraphQL", level: 85 },
    ],
    color: "bg-gradient-to-r from-amber-600 to-orange-600"
  },
  {
    category: "DevOps",
    techs: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "AWS", level: 85 },
      { name: "Google Cloud", level: 82 },
      { name: "Azure", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Jenkins", level: 78 },
      { name: "GitHub Actions", level: 85 },
    ],
    color: "bg-gradient-to-r from-indigo-600 to-violet-600"
  },
  {
    category: "Mobile",
    techs: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 82 },
      { name: "Swift", level: 78 },
      { name: "Kotlin", level: 78 },
      { name: "Ionic", level: 80 },
      { name: "PWA", level: 88 },
      { name: "Android", level: 75 },
      { name: "iOS", level: 75 },
    ],
    color: "bg-gradient-to-r from-purple-600 to-pink-600"
  },
  {
    category: "Tools",
    techs: [
      { name: "Git", level: 95 },
      { name: "Webpack", level: 85 },
      { name: "Vite", level: 88 },
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 85 },
      { name: "Jira", level: 85 },
      { name: "Slack", level: 90 },
      { name: "Notion", level: 88 },
    ],
    color: "bg-gradient-to-r from-red-600 to-rose-600"
  },
];

export function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState(technologies[0].category);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Find the current active category
  const activeTechs = technologies.find(t => t.category === activeCategory)?.techs || [];
  const activeColor = technologies.find(t => t.category === activeCategory)?.color || '';

  return (
    <section className="py-20 relative" id="technologies">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full mb-4">
              Technologies
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Technical <span className="text-gradient">Expertise</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            We leverage cutting-edge technologies to build scalable, high-performance web applications tailored to your specific needs.
          </motion.p>
        </div>
        
        {/* Technology Categories */}
        <div className="mb-12 flex justify-center">
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-gray-100 dark:bg-gray-800/50 rounded-full max-w-4xl overflow-x-auto">
            {technologies.map((tech) => (
              <button
                key={tech.category}
                onClick={() => setActiveCategory(tech.category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                  activeCategory === tech.category
                    ? "bg-white dark:bg-gray-700 shadow-sm text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tech.category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Technology Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {activeTechs.map((tech, index) => {
            const isHovered = hoveredTech === tech.name;
            
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                className={cn(
                  "relative rounded-2xl p-6 border border-border/40 overflow-hidden transition-all duration-300 cursor-pointer group",
                  isHovered ? "shadow-lg scale-[1.02]" : "bg-background/50 backdrop-blur-sm"
                )}
              >
                {/* Background Gradient - Only visible on hover */}
                <div 
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300",
                    activeColor
                  )}
                />
                
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-3">{tech.name}</h3>
                  
                  {/* Skill Level Bar */}
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={cn(
                        "h-full rounded-full",
                        activeColor
                      )}
                    />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium">Expertise</span>
                    <span className="text-xs font-semibold">{tech.level}%</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Tech Description */}
        <motion.div 
          layout
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <p className="text-muted-foreground">
            Our team stays up-to-date with the latest industry trends and best practices to deliver cutting-edge solutions that meet your business needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 