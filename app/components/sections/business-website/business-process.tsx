'use client'
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  MessageSquare, 
  Palette, 
  Code2, 
  HardDrive,
  ArrowRight
} from "lucide-react";
import { cn } from "@/app/lib/utils/cn";

// Process steps data
const processSteps = [
  {
    id: 1,
    icon: <MessageSquare className="h-7 w-7 text-white" />,
    iconBackground: "bg-indigo-500",
    title: "Discovery & Planning",
    description: "We start with a consultation to understand your business, goals, and website requirements.",
    details: [
      "Initial consultation call",
      "Business needs assessment",
      "Website goals and objectives",
      "Content and resource planning",
    ]
  },
  {
    id: 2,
    icon: <Palette className="h-7 w-7 text-white" />,
    iconBackground: "bg-purple-500",
    title: "Design & Content",
    description: "We create a visual design that reflects your brand and prepare engaging content.",
    details: [
      "Custom website design mockups",
      "Content writing and structuring",
      "Brand alignment and styling",
      "Revision and feedback rounds",
    ]
  },
  {
    id: 3,
    icon: <Code2 className="h-7 w-7 text-white" />,
    iconBackground: "bg-blue-500",
    title: "Development & Testing",
    description: "We build your website with clean code, integrate features, and thoroughly test everything.",
    details: [
      "Responsive development",
      "Feature implementation",
      "SEO optimization",
      "Cross-browser compatibility testing",
    ]
  },
  {
    id: 4,
    icon: <HardDrive className="h-7 w-7 text-white" />,
    iconBackground: "bg-pink-500",
    title: "Launch & Support",
    description: "We deploy your website, provide training, and offer ongoing support to ensure success.",
    details: [
      "Website deployment",
      "CMS training",
      "Post-launch optimization",
      "Ongoing maintenance and support",
    ]
  },
];

export function BusinessProcess() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden" id="business-process">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full mb-4 shadow-sm">
              Our Approach
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            How We <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">Create Your Website</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Our streamlined process ensures we deliver a high-quality website on time and within budget.
          </motion.p>
        </div>
        
        {/* Process timeline */}
        <div className="max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={cn(
                "flex flex-col md:flex-row gap-6 md:gap-10 mb-12 md:mb-16 relative",
                index < processSteps.length - 1 ? "pb-12 md:pb-16" : ""
              )}
            >
              {/* Connecting line for all but the last step */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-6 md:left-8 top-16 bottom-0 w-px bg-border"></div>
              )}
              
              {/* Step number and icon */}
              <div className="flex-shrink-0 flex flex-col items-center z-10">
                <div className={cn(
                  "w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center",
                  step.iconBackground
                )}>
                  {step.icon}
                </div>
                <div className="w-8 text-center mt-2 text-sm font-bold text-muted-foreground">
                  Step {step.id}
                </div>
              </div>
              
              {/* Step content */}
              <div className="flex-grow">
                <div className="bg-background rounded-2xl p-6 md:p-8 border border-border/30 shadow-sm">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {step.description}
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-indigo-500 mt-1" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Process highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center max-w-3xl mx-auto mt-8"
        >
          <div className="p-6 bg-indigo-500/10 rounded-xl inline-block mb-4">
            <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">14</span>
            <span className="text-lg font-semibold text-muted-foreground ml-2">Days Average Delivery</span>
          </div>
          
          <p className="text-lg text-muted-foreground">
            From consultation to launch, we deliver most business websites in just 2 weeks, getting you online and generating leads faster.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 