'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils/cn";
import { ArrowRight, CheckCircle2, Mail, Phone, MessageSquare } from "lucide-react";
import { Spotlight } from "@/app/components/ui/spotlight";

export function BusinessContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="business-contact-cta">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 via-background to-background"></div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Gradient blobs */}
      <div className="absolute -z-10 top-20 left-0 w-72 h-72 bg-indigo-500/20 rounded-full filter blur-[100px] opacity-30"></div>
      <div className="absolute -z-10 bottom-20 right-0 w-72 h-72 bg-purple-500/20 rounded-full filter blur-[100px] opacity-30"></div>
      
      <div className="container mx-auto px-4" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="rgba(79, 70, 229, 0.15)"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 text-sm font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full mb-4 shadow-sm">
                Get Started Today
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready for a <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Website</span> That Grows Your Business?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                Contact us now for your free consultation and quote. Let's discuss how we can help your business succeed online.
              </p>
              
              {/* Contact options */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-indigo-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call us at</p>
                    <p className="font-medium">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-indigo-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email us at</p>
                    <p className="font-medium">hello@yourwebsiteagency.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-indigo-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Chat with us</p>
                    <p className="font-medium">Live chat available 9am-5pm EST</p>
                  </div>
                </div>
              </div>
              
              {/* Why choose us checklist */}
              <div className="space-y-2">
                <h3 className="font-semibold text-lg mb-3">Why businesses choose us:</h3>
                
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Fast 14-day delivery for most projects</span>
                </div>
                
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>100% satisfaction guarantee</span>
                </div>
                
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>250+ successful business websites launched</span>
                </div>
                
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Ongoing support and maintenance included</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right column - Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background border border-border/40 rounded-2xl p-6 md:p-8 shadow-lg backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6">
                Request Your Free Quote
              </h3>
              
              {success ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 text-center mb-4"
                >
                  <CheckCircle2 className="h-10 w-10 text-green-500 mx-auto mb-3" />
                  <h4 className="font-bold text-xl mb-2">Message Received!</h4>
                  <p className="text-muted-foreground mb-4">
                    Thank you for reaching out. We'll get back to you within 24 hours with your personalized website quote.
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="rounded-full"
                    onClick={() => setSuccess(false)}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500"
                      placeholder="you@example.com"
                    />
                  </div>
                  
                  {/* Phone field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 resize-none"
                      placeholder="Tell us about your website needs..."
                    />
                  </div>
                  
                  {/* Submit button */}
                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full rounded-lg group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Get Your Free Quote
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                  
                  <p className="text-center text-xs text-muted-foreground pt-2">
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 