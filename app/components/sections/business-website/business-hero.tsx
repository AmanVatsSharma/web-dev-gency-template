'use client'
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimate, stagger, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils/cn";
import { CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import { Spotlight } from "@/app/components/ui/spotlight";

// Floating Images Component from Aceternity UI
const FloatingImages = ({ images }: { images: { src: string; width: number; height: number; className: string }[] }) => {
  return (
    <div className="relative h-full w-full">
      {images.map((image, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 0.5 + idx * 0.2,
            duration: 0.8
          }}
          className={cn("absolute", image.className)}
        >
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt="Website mockup"
            className="rounded-lg shadow-2xl object-cover border border-white/20"
          />
          {/* Reflection effect */}
          <div 
            className="absolute inset-0 rounded-lg bg-gradient-to-b from-black/20 to-transparent blur-[2px] opacity-40"
            style={{ transformOrigin: 'bottom', transform: 'scaleY(-0.4) translateY(-60%)' }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Text reveal component from Aceternity UI
const TextReveal = ({ text }: { text: string }) => {
  const words = text.split(" ");
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { opacity: 1, y: 0 },
        { duration: 0.5, delay: stagger(0.1) }
      );
    }
  }, [isInView, animate]);

  return (
    <span ref={scope} className="inline">
      {words.map((word, idx) => (
        <React.Fragment key={idx}>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 15 }}
          >
            {word}
          </motion.span>
          {idx !== words.length - 1 && " "}
        </React.Fragment>
      ))}
    </span>
  );
};

// Gradient Text component based on Aceternity UI
const GradientText = ({ text, gradient = "from-indigo-600 to-blue-600" }: { text: string; gradient?: string }) => {
  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>
      {text}
    </span>
  );
};

export function BusinessHero() {
  const [formData, setFormData] = useState({
    business: "",
    email: "",
    phone: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ business: "", email: "", phone: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  // Key benefits array for our business websites
  const keyBenefits = [
    "Modern, mobile-responsive design",
    "Built for conversions & results",
    "Quick 2-week delivery",
    "One-time payment, no subscriptions"
  ];

  const mockupImages = [
    { src: "/portfolio-1.jpg", width: 300, height: 200, className: "top-[5%] right-[5%] w-44 rotate-3 z-30" },
    { src: "/portfolio-2.jpg", width: 300, height: 200, className: "bottom-[15%] right-[20%] w-48 -rotate-6 z-20" },
    { src: "/portfolio-3.jpg", width: 300, height: 200, className: "top-[30%] right-[25%] w-56 rotate-6 z-10" },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28 relative overflow-hidden" id="business-hero">
      {/* Aceternity UI inspired background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-indigo-500/10 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(120,119,198,0.15),transparent)]"></div>
      </div>
      
      {/* Animated blobs based on Aceternity UI */}
      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[120px] opacity-50 animate-blob"></div>
      <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-purple-500/20 blur-[120px] opacity-50 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center" ref={ref}>
          {/* Left Column - Content */}
          <div className="relative z-10">
            <Spotlight
              className="hidden md:block top-0 left-0"
              fill="rgba(79, 70, 229, 0.25)"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 rounded-full mb-4 shadow-sm backdrop-blur-sm">
                <span className="animate-pulse">🔥</span>
                <span className="text-sm font-medium">One-Time Payment, No Subscriptions</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            >
              <TextReveal text="Your Business Deserves a" />
              <br />
              <span className="inline-block mt-2 relative">
                <GradientText text="Website" />
                <span className="ml-3 relative inline-flex">
                  <TextReveal text="That Converts" />
                  <motion.span 
                    className="absolute -bottom-3 left-0 right-0 h-[6px] bg-gradient-to-r from-indigo-600 to-blue-600"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                  ></motion.span>
                </span>
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              We build beautiful, high-performing business websites that attract customers, boost credibility, and grow your bottom line. One-time payment, no recurring fees.
            </motion.p>
            
            {/* Key benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
            >
              {keyBenefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Desktop CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden md:flex gap-4 mb-8"
            >
              <Button 
                variant="gradient" 
                size="lg" 
                className="rounded-full group relative overflow-hidden"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                asChild
              >
                <a href="#business-contact-cta" className="flex items-center gap-2">
                  <span className="relative z-10">Get Free Quote</span>
                  <motion.div
                    animate={{ x: hovered ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full group"
                asChild
              >
                <a href="#business-portfolio" className="flex items-center gap-2">
                  View Our Work
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>
          
          {/* Right Column - Form & Mockups */}
          <div className="relative">
            {/* Floating website mockups in background */}
            <div className="absolute inset-0 -z-10">
              <FloatingImages images={mockupImages} />
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background/80 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Form background effects */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-indigo-500/30 rounded-full blur-[80px]"></div>
              <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-purple-500/30 rounded-full blur-[80px]"></div>
              
              <div className="relative">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  Get Your Free Website Quote
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  Fill out this short form and we'll get back to you within 24 hours with a custom quote.
                </p>
                
                {success ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center mb-4 backdrop-blur-sm"
                  >
                    <CheckCircle2 className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <h4 className="font-medium text-lg mb-1">Quote Request Received!</h4>
                    <p className="text-muted-foreground">
                      We'll be in touch within 24 hours with your custom website quote.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="business" className="block text-sm font-medium mb-1">
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 backdrop-blur-sm"
                        placeholder="Your Business Name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 backdrop-blur-sm"
                        placeholder="you@company.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Phone Number (optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 backdrop-blur-sm"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      variant="gradient"
                      className="w-full rounded-lg py-2.5 h-auto text-base relative overflow-hidden group"
                      disabled={isSubmitting}
                    >
                      <span className="relative z-10">
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Processing...
                          </span>
                        ) : (
                          'Get Your Free Quote'
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                    
                    <p className="text-center text-xs text-muted-foreground pt-2">
                      No commitment. We respect your privacy.
                    </p>
                  </form>
                )}
                
                {/* Testimonial snippet */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image 
                        src="/testimonial-1.jpg" 
                        alt="Client" 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center text-yellow-500 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939
                            5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground italic mb-1">
                        "Their team delivered a website that doubled our leads within one month. Best investment we've made."
                      </p>
                      <p className="text-sm font-medium">
                        Sarah Johnson, CEO
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:hidden flex flex-col gap-4 mt-8 col-span-1"
            >
              <Button 
                variant="gradient" 
                size="lg" 
                className="rounded-full"
                asChild
              >
                <a href="#business-contact-cta" className="flex items-center justify-center gap-2">
                  Get Free Quote
                  <ArrowRight size={16} />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full"
                asChild
              >
                <a href="#business-portfolio" className="flex items-center justify-center">
                  View Our Work
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 