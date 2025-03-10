'use client'
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { cn } from "@/app/lib/utils/cn";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

// Testimonials from business clients
const testimonials = [
  {
    id: 1,
    content: "Our new website has completely transformed our business. Within the first month, our leads increased by 150% and we've been able to convert these leads at a much higher rate than before.",
    author: "Sarah Johnson",
    role: "Owner, Mountain View Dental",
    avatar: "/testimonial-1.jpg",
    rating: 5,
    bgGradient: "from-indigo-500/10 to-blue-500/10",
  },
  {
    id: 2,
    content: "The team delivered exactly what we needed - a beautiful, user-friendly website that actually drives sales. Our online orders have doubled since the new site launched, and customers constantly compliment our website.",
    author: "Michael Chen",
    role: "Founder, Artisan Bakery",
    avatar: "/testimonial-2.jpg",
    rating: 5,
    bgGradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    id: 3,
    content: "In our industry, establishing trust is crucial. Our new website does exactly that with its professional design and easy-to-navigate structure. Client inquiries have increased by 87% since launch.",
    author: "David Rodriguez",
    role: "Principal, Summit Financial Advisors",
    avatar: "/testimonial-3.jpg",
    rating: 5,
    bgGradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    id: 4,
    content: "The redesign of our website has made our landscaping business stand out from competitors. The investment paid for itself in just 3 weeks with the increase in new project requests we've received.",
    author: "Emma Thompson",
    role: "CEO, Green Thumb Landscaping",
    avatar: "/testimonial-4.jpg",
    rating: 5,
    bgGradient: "from-amber-500/10 to-orange-500/10",
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

export function BusinessTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay || isDragging) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoplay, isDragging]);

  // Handle next testimonial
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  // Handle previous testimonial
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  // Handle indicator click
  const handleIndicatorClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
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
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden" id="business-testimonials" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute -z-10 top-1/3 left-0 w-72 h-72 bg-indigo-500/10 rounded-full filter blur-[120px] opacity-30"></div>
      <div className="absolute -z-10 bottom-1/3 right-0 w-72 h-72 bg-purple-500/10 rounded-full filter blur-[120px] opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full mb-4 shadow-sm">
              Client Success
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">Clients Say</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Don't just take our word for it. Hear directly from business owners who have transformed their online presence with our websites.
          </motion.p>
        </div>
        
        {/* Testimonials carousel */}
        <div 
          className="max-w-4xl mx-auto relative"
          ref={containerRef}
        >
          {/* Navigation arrows */}
          <button 
            onClick={handlePrev}
            className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-10 md:-ml-6 lg:-ml-12 bg-background/80 hover:bg-background text-foreground p-2 rounded-full backdrop-blur-sm border border-border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-10 md:-mr-6 lg:-mr-12 bg-background/80 hover:bg-background text-foreground p-2 rounded-full backdrop-blur-sm border border-border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
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
            <div className="relative px-4 md:px-0">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={testimonials[currentIndex].id}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={cn(
                    "flex flex-col md:flex-row items-center gap-8 p-6 md:p-8 rounded-2xl border border-border/40 backdrop-blur-sm shadow-lg relative overflow-hidden",
                    "bg-gradient-to-br",
                    testimonials[currentIndex].bgGradient
                  )}
                >
                  {/* Testimonial image */}
                  <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                      <Image 
                        src={testimonials[currentIndex].avatar} 
                        alt={testimonials[currentIndex].author} 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Testimonial content */}
                  <div className="w-full md:w-2/3 lg:w-3/4">
                    <Quote className="h-10 w-10 text-indigo-500/20 mb-4" />
                    
                    <StarRating rating={testimonials[currentIndex].rating} />
                    
                    <p className="text-lg md:text-xl mb-6 italic">
                      "{testimonials[currentIndex].content}"
                    </p>
                    
                    <div>
                      <h4 className="font-bold text-lg">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
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
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "bg-indigo-500 scale-100" 
                    : "bg-indigo-300/30 scale-75 hover:bg-indigo-300/50"
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