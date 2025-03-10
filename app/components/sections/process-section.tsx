'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FileText, 
  PenTool, 
  Code as CodeIcon, 
  Terminal, 
  Zap, 
  BarChart3 
} from "lucide-react";
import { cn } from "@/app/lib/utils/cn";

const processSteps = [
  {
    step: 1,
    icon: FileText,
    title: "Discovery & Strategy",
    description: "We start by understanding your business goals, target audience, and requirements. This phase involves research, planning, and creating a roadmap for your project.",
    color: "bg-gradient-to-r from-purple-600 to-blue-600"
  },
  {
    step: 2,
    icon: PenTool,
    title: "UX/UI Design",
    description: "Our design team creates wireframes, mockups, and prototypes that visualize your website's structure and appearance, ensuring an optimal user experience.",
    color: "bg-gradient-to-r from-blue-600 to-indigo-600"
  },
  {
    step: 3,
    icon: CodeIcon,
    title: "Front-end Development",
    description: "We transform designs into responsive, interactive interfaces using modern web technologies like React and Next.js to create a seamless user experience.",
    color: "bg-gradient-to-r from-indigo-600 to-violet-600"
  },
  {
    step: 4,
    icon: Terminal,
    title: "Back-end Development",
    description: "Our developers build robust server-side applications, databases, and APIs that power your website's functionality and manage your data securely.",
    color: "bg-gradient-to-r from-violet-600 to-purple-600"
  },
  {
    step: 5,
    icon: Zap,
    title: "Testing & Deployment",
    description: "We rigorously test your website for functionality, performance, and security before deploying it to a production environment with optimal configuration.",
    color: "bg-gradient-to-r from-pink-600 to-red-600"
  },
  {
    step: 6,
    icon: BarChart3,
    title: "Maintenance & Growth",
    description: "Our relationship continues after launch with ongoing support, monitoring, updates, and data-driven optimization to ensure your website continues to perform.",
    color: "bg-gradient-to-r from-orange-600 to-amber-600"
  }
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 relative overflow-hidden" id="process">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-900/10 via-background to-background"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full mb-4">
              Our Process
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            How We <span className="text-gradient">Work</span> With You
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Our structured approach ensures we deliver quality results on time and on budget, while keeping you involved at every step.
          </motion.p>
        </div>
        
        {/* Process Timeline */}
        <div className="max-w-5xl mx-auto">
          {/* Line Down Center - Desktop Only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/30 via-blue-500/30 to-indigo-500/30 transform -translate-x-1/2"></div>
          
          {processSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            const { ref, inView } = useInView({
              threshold: 0.1,
              triggerOnce: true,
              delay: 100,
            });
            
            return (
              <div 
                key={step.step} 
                ref={ref} 
                className="mb-16 last:mb-0"
                onMouseEnter={() => setActiveStep(step.step)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="grid grid-cols-1 md:grid-cols-11 gap-8 items-center">
                  {/* Step Number - Desktop Only */}
                  <div className="hidden md:flex col-span-1 justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.5 }}
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 transition-all duration-300",
                        activeStep === step.step ? "scale-110 shadow-lg" : "",
                        step.color
                      )}
                    >
                      {step.step}
                    </motion.div>
                  </div>
                  
                  {/* Content - Left Side on Even Steps */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -30 : 30 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={cn(
                      "col-span-5",
                      !isEven && "md:order-3"
                    )}
                  >
                    <div className={cn(
                      "p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg transform transition-all duration-300",
                      activeStep === step.step && "shadow-xl scale-[1.02]"
                    )}>
                      <div className="flex items-start gap-4">
                        <div className="md:hidden">
                          <div className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center text-white",
                            step.color
                          )}>
                            <span className="font-bold text-sm">{step.step}</span>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground text-sm">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Icon - Center Step */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="hidden md:flex col-span-1 justify-center"
                  >
                    <div className={cn(
                      "w-14 h-14 rounded-full flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border/50 transform transition-all duration-300",
                      activeStep === step.step && "shadow-lg scale-110"
                    )}>
                      <step.icon 
                        size={24} 
                        className={cn(
                          "transition-colors duration-300",
                          activeStep === step.step ? "text-primary" : "text-muted-foreground"
                        )}
                      />
                    </div>
                  </motion.div>
                  
                  {/* Empty Div for Grid Structure */}
                  <div className={cn(
                    "hidden md:block col-span-5",
                    isEven && "md:order-3"
                  )} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 