'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Tag, ChevronLeft, Share2, Facebook, Twitter, Linkedin, List } from "lucide-react";
import { cn } from "@/app/lib/utils/cn";

// Extract headings from HTML content
function extractHeadings(content) {
  if (typeof window === 'undefined') return [];
  
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'text/html');
  const headings = Array.from(doc.querySelectorAll('h2, h3'));
  
  return headings.map((heading, index) => {
    // Create an ID if none exists
    const id = heading.id || `heading-${index}`;
    heading.id = id;
    
    return {
      id,
      text: heading.textContent,
      level: parseInt(heading.tagName.substring(1)), // Extract the heading level (2 or 3)
    };
  });
}

// Table of Contents component
function TableOfContents({ headings, activeId }) {
  if (!headings || headings.length === 0) return null;
  
  return (
    <div className="w-64 hidden xl:block">
      <div className="sticky top-32 border border-border/50 rounded-xl p-5 bg-card/60 backdrop-blur-sm">
        <h4 className="font-medium text-sm mb-4 flex items-center">
          <List className="w-4 h-4 mr-2" />
          Table of Contents
        </h4>
        <nav className="space-y-2 text-sm">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={cn(
                "block transition-colors hover:text-primary",
                heading.level === 2 ? "font-medium" : "pl-4 text-muted-foreground",
                activeId === heading.id ? "text-primary" : "text-foreground/80"
              )}
            >
              {heading.text}
              {activeId === heading.id && (
                <motion.div 
                  layoutId="toc-indicator"
                  className="absolute left-0 w-1 h-5 bg-primary rounded-full"
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

// Text highlight effect from Aceternity UI
function TextRevealCard({ post }) {
  const [headings, setHeadings] = useState([]);
  const [activeHeading, setActiveHeading] = useState("");
  const textContainerRef = React.useRef(null);
  
  // Extract headings when component mounts
  useEffect(() => {
    if (typeof window !== 'undefined' && post?.content) {
      const extracted = extractHeadings(post.content);
      setHeadings(extracted);
      
      // Add IDs to the actual rendered headings
      setTimeout(() => {
        const contentHeadings = textContainerRef.current?.querySelectorAll('h2, h3');
        contentHeadings?.forEach((heading, index) => {
          if (extracted[index]) {
            heading.id = extracted[index].id;
          }
        });
      }, 100);
    }
  }, [post?.content]);
  
  // Observe headings for intersection
  useEffect(() => {
    if (!headings.length) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add animation class
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            setActiveHeading(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-100px 0px -100px 0px" }
    );
    
    const headingElements = textContainerRef.current?.querySelectorAll('h2, h3');
    headingElements?.forEach((heading) => {
      observer.observe(heading);
    });
    
    return () => {
      headingElements?.forEach((heading) => {
        observer.unobserve(heading);
      });
    };
  }, [headings]);

  return (
    <div className="relative max-w-4xl mx-auto flex flex-col xl:flex-row gap-10">
      {/* Table of Contents - left sidebar */}
      <TableOfContents headings={headings} activeId={activeHeading} />
      
      {/* Main content */}
      <div className="flex-1" ref={textContainerRef}>
        <div 
          className="blog-content prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      
      <style jsx global>{`
        .blog-content h2, .blog-content h3 {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          position: relative;
          scroll-margin-top: 100px;
        }
        
        .blog-content h2.animate-in, .blog-content h3.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .blog-content h2:before, .blog-content h3:before {
          content: "";
          position: absolute;
          left: -20px;
          top: 50%;
          width: 10px;
          height: 10px;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          border-radius: 50%;
          transform: translateY(-50%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .blog-content h2.animate-in:before, .blog-content h3.animate-in:before {
          opacity: 1;
        }
        
        .blog-content ul {
          list-style-type: none;
          padding-left: 1.5em;
        }
        
        .blog-content ul li {
          position: relative;
          margin-bottom: 0.5em;
        }
        
        .blog-content ul li:before {
          content: "";
          position: absolute;
          left: -1.5em;
          top: 0.6em;
          width: 6px;
          height: 6px;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}

export function BlogPostDetail({ post }) {
  const containerRef = React.useRef(null);
  
  // Progress bar effect
  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateProgressBar = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      const progressBar = document.querySelector('.progress-bar');
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    };
    
    window.addEventListener('scroll', updateProgressBar);
    return () => window.removeEventListener('scroll', updateProgressBar);
  }, []);

  return (
    <div className="bg-background" ref={containerRef}>
      {/* Progress reading bar */}
      <div className="fixed top-0 left-0 z-50 w-full h-1 bg-gray-200">
        <div className="progress-bar h-full bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600"></div>
      </div>
      
      {/* Hero section with featured image */}
      <div className="relative w-full h-[60vh] max-h-[600px] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <Link href="/blog" className="inline-flex items-center mb-6 text-white/90 hover:text-white bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl">{post.title}</h1>
          </div>
        </div>
      </div>
      
      {/* Content section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article metadata */}
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b">
            <div className="flex items-center">
              <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-3 w-3" />
                  {post.date}
                  <span className="mx-1">•</span>
                  <Clock className="mr-1 h-3 w-3" />
                  {post.readTime}
                  <span className="mx-1">•</span>
                  <Tag className="mr-1 h-3 w-3" />
                  {post.category}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground mr-2">Share:</span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white p-2 rounded-full"
              >
                <Facebook className="h-4 w-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-sky-500 text-white p-2 rounded-full"
              >
                <Twitter className="h-4 w-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-700 text-white p-2 rounded-full"
              >
                <Linkedin className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
          
          {/* Article content with text reveal effect */}
          <TextRevealCard post={post} />
          
          {/* Author bio card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 rounded-xl p-6 bg-card border border-border relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]" />
            
            <div className="relative flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative h-20 w-20 rounded-full overflow-hidden shrink-0">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">About {post.author.name}</h3>
                <p className="text-muted-foreground mb-4">
                  {post.author.name} is a senior developer and technical writer with over 10 years of experience in web development. 
                  They specialize in frontend technologies and are passionate about creating performant, accessible web applications.
                </p>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  View all posts by {post.author.name}
                  <ChevronLeft className="ml-1 h-3 w-3 rotate-180" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 