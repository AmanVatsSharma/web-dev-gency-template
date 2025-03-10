'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils/cn";
import { CheckCircle2, HelpCircle, X, Info, Sparkles, Zap } from "lucide-react";
import { Spotlight } from "@/app/components/ui/spotlight";

// Pricing plan features
const basicFeatures = [
  { included: true, text: "5-Page Responsive Website" },
  { included: true, text: "Mobile Optimization" },
  { included: true, text: "Basic SEO Setup" },
  { included: true, text: "Contact Form" },
  { included: true, text: "Google Maps Integration" },
  { included: true, text: "Social Media Links" },
  { included: false, text: "Content Management System" },
  { included: false, text: "E-commerce Functionality" },
  { included: false, text: "Custom Animations" },
];

const standardFeatures = [
  { included: true, text: "10-Page Responsive Website" },
  { included: true, text: "Mobile Optimization" },
  { included: true, text: "Advanced SEO Setup" },
  { included: true, text: "Contact Form & Booking System" },
  { included: true, text: "Google Maps Integration" },
  { included: true, text: "Social Media Integration" },
  { included: true, text: "Content Management System" },
  { included: true, text: "Basic Analytics Dashboard" },
  { included: false, text: "E-commerce Functionality" },
];

const premiumFeatures = [
  { included: true, text: "Unlimited Pages" },
  { included: true, text: "Mobile Optimization" },
  { included: true, text: "Comprehensive SEO Strategy" },
  { included: true, text: "Advanced Contact & Booking" },
  { included: true, text: "Google Maps & Integration" },
  { included: true, text: "Social Media Integration & Feed" },
  { included: true, text: "Advanced CMS with Training" },
  { included: true, text: "E-commerce Functionality" },
  { included: true, text: "Custom Animations & Effects" },
];

// Pricing plans with one-time fees
const pricingPlans = [
  {
    id: "basic",
    name: "Starter",
    description: "Perfect for small businesses just getting started online",
    oneTimeFee: 999,
    supportFee: 49,
    features: basicFeatures,
    popular: false,
    accentColor: "from-blue-500 to-indigo-500",
    textColor: "text-blue-500",
    buttonVariant: "outline" as const,
    icon: <Sparkles className="h-5 w-5" />,
    deliveryTime: "7-14 days",
  },
  {
    id: "standard",
    name: "Professional",
    description: "Our most popular package for established businesses",
    oneTimeFee: 1999,
    supportFee: 89,
    features: standardFeatures,
    popular: true,
    accentColor: "from-indigo-500 to-purple-500",
    textColor: "text-indigo-600",
    buttonVariant: "gradient" as const,
    icon: <Zap className="h-5 w-5" />,
    deliveryTime: "14-21 days",
  },
  {
    id: "premium",
    name: "Enterprise",
    description: "For businesses that need advanced features and e-commerce",
    oneTimeFee: 3999,
    supportFee: 149,
    features: premiumFeatures,
    popular: false,
    accentColor: "from-purple-500 to-pink-500",
    textColor: "text-purple-500",
    buttonVariant: "outline" as const,
    icon: <Sparkles className="h-5 w-5" />,
    deliveryTime: "21-28 days",
  }
];

// Card with 3D hover effect from Aceternity UI
const Card3D = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div
      className={cn(
        "group relative w-full h-full rounded-2xl p-px",
        "before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-20 before:z-10 before:blur-[100px] before:origin-center",
        "after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:group-hover:opacity-20 after:z-10 after:blur-[100px] after:origin-center",
        className
      )}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
        e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
      }}
    >
      {children}
    </div>
  );
};

export function BusinessPricing() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="business-pricing">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute -z-10 top-1/4 left-0 w-72 h-72 bg-indigo-500/10 rounded-full filter blur-[100px] opacity-30"></div>
      <div className="absolute -z-10 bottom-1/4 right-0 w-72 h-72 bg-purple-500/10 rounded-full filter blur-[100px] opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="rgba(79, 70, 229, 0.15)"
        />
        
        <div className="text-center mb-12 md:mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full mb-4 shadow-sm">
              Transparent Pricing
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">One-Time Payment</span>, Lifetime Value
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            No hidden fees or surprise charges. Pay once for your website, with optional maintenance if you need it.
          </motion.p>
        </div>
        
        {/* Pricing cards with 3D hover effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="h-full"
            >
              <Card3D>
                <div
                  className={cn(
                    "relative h-full rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-300",
                    "bg-background/90 border border-border/40 hover:border-indigo-500/20",
                    plan.popular ? "shadow-lg" : ""
                  )}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <div className={cn(
                        "py-1 px-3 text-xs font-medium text-white rounded-bl-lg",
                        `bg-gradient-to-r ${plan.accentColor}`
                      )}>
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  {/* Plan header */}
                  <div className="p-6 md:p-8 border-b border-border/40">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center",
                        `bg-gradient-to-r ${plan.accentColor}`
                      )}>
                        {plan.icon}
                      </div>
                      <h3 className={cn("text-2xl font-bold", plan.textColor)}>
                        {plan.name}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      {plan.description}
                    </p>
                    
                    <div className="mb-2">
                      <div className="text-xs text-muted-foreground uppercase font-semibold tracking-wider mb-1">One-time payment</div>
                      <div className="flex items-baseline">
                        <span className="text-3xl md:text-4xl font-bold">
                          ${plan.oneTimeFee}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                      <Info className="h-4 w-4" />
                      <span>Optional maintenance: ${plan.supportFee}/month</span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                      <Info className="h-4 w-4" />
                      <span>Delivery in {plan.deliveryTime}</span>
                    </div>
                    
                    <Button 
                      variant={plan.buttonVariant}
                      size="lg"
                      className={cn(
                        "w-full rounded-lg backdrop-blur-sm relative overflow-hidden group",
                        plan.buttonVariant === "outline" ? plan.textColor : ""
                      )}
                      asChild
                    >
                      <a href="#business-contact-cta">
                        <span className="relative z-10">Choose {plan.name}</span>
                        <div className={cn(
                          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10",
                          `bg-gradient-to-r ${plan.accentColor}`
                        )}></div>
                      </a>
                    </Button>
                  </div>
                  
                  {/* Features list */}
                  <div className="p-6 md:p-8">
                    <h4 className="font-semibold mb-4">What's included:</h4>
                    
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          {feature.included ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          )}
                          <span className={feature.included ? "" : "text-muted-foreground"}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
        
        {/* Pricing highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 p-8 md:p-10 rounded-2xl border border-indigo-500/20 relative overflow-hidden max-w-3xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 -z-10"></div>
          <div className="absolute inset-0 -z-10 blur-[200px] bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.3),transparent_65%)]"></div>
          
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-indigo-500" />
            100% Satisfaction Guarantee
          </h3>
          
          <p className="text-lg text-muted-foreground mb-6">
            Not happy with your website? We'll revise it until you love it or give you a full refund within 30 days of delivery.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
              No Risk
            </span>
            <span className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm">
              Unlimited Revisions
            </span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm">
              30-Day Money Back
            </span>
          </div>
        </motion.div>
        
        {/* Pricing FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 max-w-3xl mx-auto p-6 md:p-8 bg-muted/50 rounded-2xl"
        >
          <div className="flex items-start gap-4">
            <HelpCircle className="h-6 w-6 text-indigo-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg mb-2">
                Common Questions About Our Pricing
              </h4>
              <ul className="space-y-4">
                <li>
                  <h5 className="font-medium mb-1">What's included in the one-time fee?</h5>
                  <p className="text-muted-foreground text-sm">
                    The one-time fee includes custom design, development, content integration, basic SEO setup, testing across all devices, and 30 days of post-launch support.
                  </p>
                </li>
                <li>
                  <h5 className="font-medium mb-1">Is the monthly maintenance fee required?</h5>
                  <p className="text-muted-foreground text-sm">
                    No, it's completely optional. The monthly maintenance includes hosting, security updates, content changes, and technical support. If you prefer to handle these yourself, you can skip this fee.
                  </p>
                </li>
                <li>
                  <h5 className="font-medium mb-1">Can I upgrade my plan later?</h5>
                  <p className="text-muted-foreground text-sm">
                    Yes, you can upgrade to a higher tier at any time. You'll only pay the difference between your current plan and the new one.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 