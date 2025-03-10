'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";
import { cn } from "@/app/lib/utils/cn";

export function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(1);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const toggleAccordion = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  const faqs = [
    {
      id: 1,
      question: "What services does your web development agency offer?",
      answer: "We offer a comprehensive range of web development services including custom website design, e-commerce development, web application development, CMS implementation, responsive design, UI/UX design, website maintenance, and performance optimization."
    },
    {
      id: 2,
      question: "How long does it typically take to complete a website project?",
      answer: "Project timelines vary depending on complexity and scope. A simple website might take 1-2 weeks, while more complex projects with custom functionality can take 2-3 months. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements."
    },
    {
      id: 3,
      question: "What is your pricing structure for web development projects?",
      answer: "Our pricing is project-based and depends on the complexity, features, and timeline. We provide detailed quotes after understanding your requirements. We also offer flexible payment plans, typically with a deposit to begin work and milestone payments throughout the project."
    },
    {
      id: 4,
      question: "Do you provide ongoing support after the website is launched?",
      answer: "Yes, we offer various maintenance and support packages to keep your website secure, updated, and performing optimally. These include regular updates, security monitoring, content updates, performance optimization, and technical support."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="faq">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Find answers to common questions about our web development services
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={cn(
                "border border-border rounded-xl overflow-hidden mb-4",
                openItem === faq.id ? "bg-muted/50" : "bg-background"
              )}
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="flex items-center justify-between w-full p-5 text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 transition-transform duration-300",
                    openItem === faq.id ? "transform rotate-180" : ""
                  )} 
                />
              </button>
              
              {openItem === faq.id && (
                <div className="p-5 pt-0 text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 