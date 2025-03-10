'use client'
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { cn } from "@/app/lib/utils/cn";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "DevAgency transformed our online presence completely. Their design expertise and technical prowess delivered a website that not only looks stunning but converts visitors at an impressive rate.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "/testimonial-1.jpg",
    rating: 5,
  },
  {
    id: 2,
    content: "Working with DevAgency was a game-changer for our business. They understood our vision perfectly and built an e-commerce solution that has significantly increased our sales and streamlined operations.",
    author: "Michael Chen",
    role: "Founder, StyleHouse",
    avatar: "/testimonial-2.jpg",
    rating: 5,
  },
  {
    id: 3,
    content: "The team at DevAgency exceeded our expectations. They delivered our project ahead of schedule and remained responsive and supportive throughout the entire process and after launch.",
    author: "David Rodriguez",
    role: "Marketing Director, Elevate Inc",
    avatar: "/testimonial-3.jpg",
    rating: 5,
  },
  {
    id: 4,
    content: "I was blown away by the quality of work DevAgency produced. Their attention to detail and commitment to user experience resulted in a website that's received numerous compliments from our clients.",
    author: "Emma Thompson",
    role: "Operations Manager, GreenPath",
    avatar: "/testimonial-4.jpg",
    rating: 5,
  },
  {
    id: 5,
    content: "DevAgency helped us revitalize our digital strategy. Their insights on user behavior and conversion optimization transformed our website into a powerful lead generation tool.",
    author: "Robert Patel",
    role: "CTO, InnovateX",
    avatar: "/testimonial-5.jpg",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  // Pause autoplay when user interacts
  const handleIndicatorClick = (index: number) => {
    setCurrentTestimonial(index);
    setAutoplay(false);
    
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-black text-white" id="testimonials" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm text-center font-medium bg-white/10 text-white rounded-full mb-4">
              Testimonials
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </motion.p>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-purple-500/40"
          >
            <Quote size={60} />
          </motion.div>
          
          {/* Testimonials */}
          <div className="overflow-hidden relative rounded-2xl p-8 md:p-12 mt-4 bg-zinc-900/70 border border-white/5 backdrop-blur-sm">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: currentTestimonial === index ? 1 : 0,
                  x: currentTestimonial === index ? 0 : 100,
                  display: currentTestimonial === index ? "block" : "none"
                }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-lg md:text-xl mb-8 text-zinc-300 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-purple-500/30">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h4 className="text-lg font-semibold">{testimonial.author}</h4>
                  <p className="text-zinc-400 text-sm">{testimonial.role}</p>
                  
                  <div className="flex space-x-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={cn(
                          "text-lg",
                          i < testimonial.rating ? "text-yellow-400" : "text-zinc-600"
                        )}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  currentTestimonial === index
                    ? "bg-purple-500 w-8"
                    : "bg-zinc-600 hover:bg-zinc-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 