'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ArrowRight, Check, Palette, Code, Smartphone, ShoppingCart, Search, Database } from "lucide-react";
import { cn } from "@/app/lib/utils/cn";

const serviceDetails = [
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    description: "We create beautiful, intuitive interfaces that engage users and enhance their experience with your brand. Our design approach focuses on usability, accessibility, and creating emotional connections.",
    color: "bg-gradient-to-r from-purple-600 to-blue-600",
    benefits: [
      "User research and persona development",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Interactive prototypes",
      "Usability testing",
      "Design systems"
    ],
    caseStudyLink: "/case-studies/ui-ux-design"
  },
  {
    id: "web-development",
    icon: Code,
    title: "Web Development",
    description: "Our web development team builds custom websites and web applications with clean, efficient code. We focus on creating scalable solutions that are fast, secure, and easy to maintain.",
    color: "bg-gradient-to-r from-blue-600 to-indigo-600",
    benefits: [
      "Frontend development (React, Next.js)",
      "Backend development (Node.js, Python)",
      "Database design and implementation",
      "API development and integration",
      "Performance optimization",
      "Security best practices"
    ],
    caseStudyLink: "/case-studies/web-development"
  },
  {
    id: "mobile-development",
    icon: Smartphone,
    title: "Mobile Development",
    description: "We create native and cross-platform mobile applications that deliver seamless experiences across devices. Our mobile apps are built with performance, usability, and offline capabilities in mind.",
    color: "bg-gradient-to-r from-green-600 to-teal-600",
    benefits: [
      "iOS app development",
      "Android app development",
      "Cross-platform solutions (React Native, Flutter)",
      "Progressive Web Apps (PWAs)",
      "App Store optimization",
      "Mobile app analytics"
    ],
    caseStudyLink: "/case-studies/mobile-development"
  },
  {
    id: "ecommerce-solutions",
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "We build online stores that drive sales with seamless shopping and checkout experiences. Our e-commerce solutions are designed to convert visitors into customers and increase average order values.",
    color: "bg-gradient-to-r from-amber-600 to-orange-600",
    benefits: [
      "Custom e-commerce development",
      "Shopping cart and checkout optimization",
      "Payment gateway integration",
      "Inventory management",
      "Order fulfillment automation",
      "Customer account management"
    ],
    caseStudyLink: "/case-studies/ecommerce-solutions"
  },
  {
    id: "seo-marketing",
    icon: Search,
    title: "SEO & Marketing",
    description: "We help you improve search engine rankings and attract more qualified leads with our proven SEO and digital marketing strategies. Our data-driven approach focuses on sustainable, long-term results.",
    color: "bg-gradient-to-r from-red-600 to-pink-600",
    benefits: [
      "Technical SEO and site optimization",
      "Content strategy and creation",
      "Link building campaigns",
      "Local SEO optimization",
      "Conversion rate optimization",
      "Analytics and performance tracking"
    ],
    caseStudyLink: "/case-studies/seo-marketing"
  },
  {
    id: "cms-backend",
    icon: Database,
    title: "CMS & Backend",
    description: "We build robust backend systems and content management solutions that power your digital presence. Our CMS integrations make it easy for you to manage and update your website without technical knowledge.",
    color: "bg-gradient-to-r from-indigo-600 to-violet-600",
    benefits: [
      "Custom CMS development",
      "Headless CMS integration",
      "Database design and optimization",
      "API development",
      "Third-party integrations",
      "Cloud infrastructure setup"
    ],
    caseStudyLink: "/case-studies/cms-backend"
  },
];

export function ServicesList() {
  const [activeTab, setActiveTab] = useState(serviceDetails[0].id);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 relative" id="detailed-services">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full mb-4">
              Our Expertise
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Comprehensive Web Services
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            From initial concept to ongoing optimization, we provide end-to-end services to ensure your digital presence stands out from the competition.
          </motion.p>
        </div>
        
        {/* Services Tabs */}
        <div className="mb-8 flex justify-center">
          <div className="flex flex-wrap justify-center gap-2 p-1 bg-gray-100 dark:bg-gray-800/50 rounded-full max-w-4xl overflow-x-auto">
            {serviceDetails.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                  activeTab === service.id
                    ? "bg-white dark:bg-gray-700 shadow-sm text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
        
        {/* Service Details */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          layout
        >
          {serviceDetails.map((service) => (
            activeTab === service.id && (
              <React.Fragment key={service.id}>
                {/* Left Column - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  key={`content-${service.id}`}
                  className="p-6 md:p-10 rounded-3xl border border-border/30 bg-background/50 backdrop-blur-sm shadow-lg"
                >
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6",
                    service.color
                  )}>
                    <service.icon size={32} />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4">What we offer:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                            <Check size={12} className="text-green-500" />
                          </div>
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="gradient" 
                    className="rounded-full group"
                    asChild
                  >
                    <Link href={service.caseStudyLink} className="flex items-center gap-2">
                      View Case Studies
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
                
                {/* Right Column - Visual */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  key={`visual-${service.id}`}
                  className="lg:h-[400px] rounded-3xl overflow-hidden relative"
                >
                  <div className={cn(
                    "absolute inset-0 w-full h-full",
                    service.color
                  )}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_0.5px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
                  </div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-10 text-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h3>
                    <div className="flex flex-col items-center">
                      <service.icon size={64} className="mb-6 opacity-90" />
                      <p className="text-white/90 text-lg max-w-md">
                        Our {service.title.toLowerCase()} services are tailored to meet your specific business needs and goals.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </React.Fragment>
            )
          ))}
        </motion.div>
      </div>
    </section>
  );
} 