'use client'
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { cn } from "@/app/lib/utils/cn";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

// Enhanced testimonial data with company logos and background preferences
const testimonials = [
  {
    id: 1,
    content: "DevAgency transformed our online presence completely. Their design expertise and technical prowess delivered a website that not only looks stunning but converts visitors at an impressive rate.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "/testimonial-1.jpg",
    rating: 5,
    bgColor: "from-blue-600/20 to-indigo-600/20",
    textColor: "text-blue-500",
  },
  {
    id: 2,
    content: "Working with DevAgency was a game-changer for our business. They understood our vision perfectly and built an e-commerce solution that has significantly increased our sales and streamlined operations.",
    author: "Michael Chen",
    role: "Founder, StyleHouse",
    avatar: "/testimonial-2.jpg",
    rating: 5,
    bgColor: "from-purple-600/20 to-pink-600/20",
    textColor: "text-purple-500",
  },
  {
    id: 3,
    content: "The team at DevAgency exceeded our expectations. They delivered our project ahead of schedule and remained responsive and supportive throughout the entire process and after launch.",
    author: "David Rodriguez",
    role: "Marketing Director, Elevate Inc",
    avatar: "/testimonial-3.jpg",
    rating: 5,
    bgColor: "from-emerald-600/20 to-teal-600/20",
    textColor: "text-emerald-500",
  },
  {
    id: 4,
    content: "I was blown away by the quality of work DevAgency produced. Their attention to detail and commitment to user experience resulted in a website that's received numerous compliments from our clients.",
    author: "Emma Thompson",
    role: "Operations Manager, GreenPath",
    avatar: "/testimonial-4.jpg",
    rating: 5,
    bgColor: "from-amber-600/20 to-orange-600/20",
    textColor: "text-amber-500",
  },
  {
    id: 5,
    content: "DevAgency helped us revitalize our digital strategy. Their insights on user behavior and conversion optimization transformed our website into a powerful lead generation tool.",
    author: "Robert Patel",
    role: "CTO, InnovateX",
    avatar: "/testimonial-5.jpg",
    rating: 5,
    bgColor: "from-sky-600/20 to-cyan-600/20",
    textColor: "text-sky-500",
  },
];

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={cn(
            "h-4 w-4",
            i < rating ? "fill-yellow-500 text-yellow-500" : "fill-none text-gray-400"
          )} 
        />
      ))}
    </div>
  );
};

// Testimonial card component
const TestimonialCard = ({ 
  testimonial, 
  isActive, 
  direction 
}: { 
  testimonial: typeof testimonials[0], 
  isActive: boolean,
  direction: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={cn(
        "flex flex-col justify-between h-full p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden",
        "border border-white/10 shadow-xl",
        `bg-gradient-to-br ${testimonial.bgColor}`
      )}
    >
      {/* Decorative elements */}
      <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/5 blur-xl" />
      <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-white/5 blur-xl" />
      
      <div className="relative z-10">
        <Quote className="text-white/20 w-12 h-12 mb-4" />
        <StarRating rating={testimonial.rating} />
        <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
          "{testimonial.content}"
        </p>
      </div>
      
      <div className="flex items-center gap-4 relative z-10">
        <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-white/20">
          <Image 
            src={testimonial.avatar} 
            alt={testimonial.author} 
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-white">{testimonial.author}</h4>
          <p className={cn("text-sm opacity-80", testimonial.textColor)}>
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay || isDragging) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, isDragging]);

  // Navigate to next testimonial
  const handleNext = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  // Navigate to previous testimonial
  const handlePrev = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  // Handle indicator click
  const handleIndicatorClick = (index: number) => {
    setDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  // Touch/drag handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setAutoplay(false);
    
    // Get the starting position
    if ('touches' in e) {
      dragStartX.current = e.touches[0].clientX;
    } else {
      dragStartX.current = e.clientX;
    }
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    let endX: number;
    if ('changedTouches' in e) {
      endX = e.changedTouches[0].clientX;
    } else {
      endX = e.clientX;
    }
    
    const diff = endX - dragStartX.current;
    
    // If the drag was significant enough (> 50px), change the slide
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    
    setIsDragging(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  return (
    <section 
      className="py-20 relative overflow-hidden bg-black text-white" 
      id="testimonials" 
      ref={ref}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Blob decorations */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-white/10 text-white rounded-full mb-4 backdrop-blur-sm">
              Client Testimonials
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white/80"
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            Don't just take our word for it. Hear from the businesses we've helped transform with our web development expertise.
          </motion.p>
        </div>
        
        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto relative px-4 md:px-0">
          {/* Navigation arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 md:ml-0 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 md:mr-0 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          {/* Carousel container with touch event handling */}
          <div 
            className="h-full"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseLeave={(e) => isDragging && handleDragEnd(e)}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
            style={{ touchAction: 'pan-y' }}
          >
            <div className="h-full relative">
              <AnimatePresence mode="wait" initial={false}>
                <TestimonialCard 
                  key={testimonials[currentTestimonial].id}
                  testimonial={testimonials[currentTestimonial]}
                  isActive={true}
                  direction={direction}
                />
              </AnimatePresence>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentTestimonial 
                    ? "bg-white scale-100" 
                    : "bg-white/30 scale-75 hover:bg-white/50"
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