'use client'
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { Spotlight } from "@/app/components/ui/spotlight";

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@devagency.com",
        "support@devagency.com"
      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+1 (555) 123-4567",
        "+1 (555) 765-4321"
      ],
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "123 Innovation Drive",
        "Tech City, CA 94103",
        "United States"
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9AM - 6PM",
        "Saturday: 10AM - 2PM",
        "Sunday: Closed"
      ],
    },
  ];

  const socialLinks = [
    { name: "Twitter", url: "https://twitter.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Facebook", url: "https://facebook.com" },
  ];

  return (
    <div className="space-y-8">
      <Spotlight className="rounded-2xl p-8 border border-border/40 bg-background/80 backdrop-blur-sm shadow-xl mb-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-muted-foreground">
            Reach out to us through any of the following channels:
          </p>
        </div>
        
        <div className="space-y-6">
          {contactDetails.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="bg-purple-500/10 text-purple-600 dark:text-purple-400 p-3 rounded-lg">
                <item.icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-sm text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Spotlight>
      
      <Spotlight className="rounded-2xl p-8 border border-border/40 bg-background/80 backdrop-blur-sm shadow-xl">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-500/10 text-blue-600 dark:text-blue-400 p-3 rounded-lg">
              <MessageSquare size={20} />
            </div>
            <h2 className="text-2xl font-bold">Let's Connect</h2>
          </div>
          <p className="text-muted-foreground">
            Follow us on social media to stay updated with our latest projects and insights:
          </p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              className="px-4 py-2 rounded-full bg-background border border-border/60 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </Spotlight>
    </div>
  );
} 