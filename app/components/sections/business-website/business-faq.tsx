'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { cn } from "@/app/lib/utils/cn";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
  category: string;
};

// Business website focused questions
const faqs: FAQItem[] = [
  {
    id: 1,
    question: "How long does it take to build a business website?",
    answer: "Most of our business websites are completed within 2 weeks from the time we receive your content and approval on the design. Our streamlined process ensures you get a professional website quickly without sacrificing quality.",
    category: "process",
  },
  {
    id: 2,
    question: "What's included in the monthly price?",
    answer: "Our monthly fee includes website hosting, routine maintenance, security updates, SSL certificate, basic content updates, and technical support. This ensures your website remains secure, up-to-date, and functioning optimally at all times.",
    category: "pricing",
  },
  {
    id: 3,
    question: "Will my website work on mobile phones and tablets?",
    answer: "Absolutely! All our websites are fully responsive, meaning they automatically adjust to look and function perfectly on any device - smartphones, tablets, laptops, and desktop computers. Mobile optimization is a standard feature in all our packages.",
    category: "technical",
  },
  {
    id: 4,
    question: "Can I update the website myself?",
    answer: "Yes! We build our websites on user-friendly content management systems that allow you to easily make basic updates yourself. We also provide training to ensure you're comfortable with managing your site. For more complex changes, our support team is always available to help.",
    category: "maintenance",
  },
  {
    id: 5,
    question: "Do you help with website content and images?",
    answer: "We offer content development services to help craft compelling website copy and can source high-quality stock images for your site. We can also enhance and optimize any existing content and images you provide to ensure they look their best online.",
    category: "content",
  },
  {
    id: 6,
    question: "How will a website help my business grow?",
    answer: "A professional website increases your credibility, expands your reach to potential customers searching online, showcases your products/services 24/7, generates leads through contact forms, improves customer engagement, and provides valuable analytics about your audience.",
    category: "benefits",
  },
  {
    id: 7,
    question: "Will my website be optimized for search engines (SEO)?",
    answer: "Yes, all our websites include basic SEO setup to help you rank better in search results. This includes proper site structure, fast loading times, mobile optimization, meta tags, schema markup, and XML sitemaps. We also offer advanced SEO packages for businesses looking to maximize their online visibility.",
    category: "technical",
  },
  {
    id: 8,
    question: "What happens if I need help after my website launches?",
    answer: "Our support doesn't end at launch. Your monthly fee includes ongoing technical support for any issues that may arise. We're just an email or phone call away if you need assistance with your website.",
    category: "support",
  },
];

// FAQ Accordion Item Component
const FAQItem = ({ 
  faq, 
  isOpen, 
  toggleAccordion 
}: { 
  faq: FAQItem; 
  isOpen: boolean; 
  toggleAccordion: () => void;
}) => {
  return (
    <div
      className={cn(
        "border border-border/40 rounded-xl overflow-hidden mb-4 transition-all duration-200",
        isOpen 
          ? "bg-background/90 shadow-md"
          : "bg-background/50 hover:border-indigo-500/20"
      )}
    >
      <button
        onClick={toggleAccordion}
        className="flex items-center justify-between w-full p-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-lg">{faq.question}</span>
        <ChevronDown 
          className={cn(
            "h-5 w-5 text-indigo-500 transition-transform duration-200",
            isOpen ? "transform rotate-180" : ""
          )} 
        />
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 text-muted-foreground">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function BusinessFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(1);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const toggleAccordion = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden" id="business-faq">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute -z-10 top-1/3 right-0 w-72 h-72 bg-indigo-500/10 rounded-full filter blur-[120px] opacity-20"></div>
      <div className="absolute -z-10 bottom-1/3 left-0 w-72 h-72 bg-purple-500/10 rounded-full filter blur-[120px] opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full mb-4 shadow-sm">
              Common Questions
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">Questions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Get answers to common questions about our business website services, process, and pricing.
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* FAQ Items */}
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openItem === faq.id}
                toggleAccordion={() => toggleAccordion(faq.id)}
              />
            </motion.div>
          ))}
          
          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center p-6 rounded-xl border border-border/40 bg-background/50 backdrop-blur-sm"
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center">
                <MessageCircleQuestion className="h-6 w-6 text-indigo-500" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              We're here to help! Reach out and we'll respond as soon as possible.
            </p>
            <a 
              href="#business-contact-cta" 
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Contact us for answers
              <ChevronDown className="ml-1 h-4 w-4 rotate-270" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 