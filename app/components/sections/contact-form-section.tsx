'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import { Send, Check } from "lucide-react";
import { Spotlight } from "@/app/components/ui/spotlight";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Form submission would normally happen here
    console.log("Form submitted:", formState);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        message: "",
      });
    }, 3000);
  };
  
  const projectTypes = [
    { value: "", label: "Select project type" },
    { value: "website", label: "Website Development" },
    { value: "webapp", label: "Web Application" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "mobile", label: "Mobile App" },
    { value: "design", label: "UI/UX Design" },
    { value: "consulting", label: "Consulting" },
    { value: "other", label: "Other" },
  ];

  return (
    <Spotlight className="rounded-2xl p-8 border border-border/40 bg-background/80 backdrop-blur-sm shadow-xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
        <p className="text-muted-foreground">
          Tell us about your project and we'll get back to you within 24 hours.
        </p>
      </div>
      
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-6 rounded-xl border border-green-200 dark:border-green-800/30 text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-800/30 flex items-center justify-center">
              <Check size={32} className="text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
          <p className="mb-0">
            Your message has been sent successfully. We'll get back to you shortly.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background/70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-background/70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background/70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="+1 (123) 456-7890"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formState.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background/70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Your Company"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium mb-2">
              Project Type <span className="text-red-500">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formState.projectType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background/70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none"
            >
              {projectTypes.map((type) => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background/70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
              placeholder="Tell us about your project or inquiry..."
            ></textarea>
          </div>
          
          <Button
            type="submit"
            variant="gradient"
            className="w-full py-6 rounded-lg flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send size={16} />
              </>
            )}
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our <a href="/privacy-policy" className="underline">Privacy Policy</a> and <a href="/terms-of-service" className="underline">Terms of Service</a>.
          </p>
        </form>
      )}
    </Spotlight>
  );
} 