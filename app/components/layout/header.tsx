'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/app/lib/utils/cn";
import { Button } from "@/app/components/ui/button";
import { Menu, X } from "lucide-react";

// Spotlight component inspired by Aceternity UI
interface SpotlightProps {
  className?: string;
  fill?: string;
}

const Spotlight: React.FC<SpotlightProps> = ({ className, fill = "white" }) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] opacity-0 lg:opacity-100",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.64 2291.09)"
          fill={fill}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const { scrollY } = useScroll();
  
  // Update active menu item based on current path
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setActiveItem(window.location.pathname);
    }
  }, []);

  // Enhanced scroll effect with smoother transitions
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/40 shadow-md py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4">
        <div className={cn(
          "relative flex justify-between items-center",
          isScrolled ? "mx-auto max-w-7xl rounded-full border border-border/50 bg-background/80 px-4 py-2 shadow-[0_0_1px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.1)]" : ""
        )}>
          {/* Spotlight effect (only visible when scrolled) */}
          {isScrolled && <Spotlight className="left-0 top-[-150%] opacity-20" fill="blue" />}
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative z-10">
            <motion.span 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              DevAgency
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 relative z-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-all duration-300 px-3 py-2 rounded-full relative",
                  activeItem === item.href 
                    ? "text-primary font-medium" 
                    : "text-foreground/80 hover:text-foreground"
                )}
                onClick={() => setActiveItem(item.href)}
              >
                {activeItem === item.href && (
                  <motion.span
                    layoutId="navbar-active-item"
                    className="absolute inset-0 rounded-full bg-primary/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="gradient" 
                className="rounded-full shadow-[0_0_0_3px_rgba(79,70,229,0.1)] hover:shadow-[0_0_0_6px_rgba(79,70,229,0.2)] transition-all duration-300"
              >
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground relative z-10"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl min-h-screen pt-24 px-8"
            >
              <div className="absolute top-6 right-6">
                <motion.button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground rounded-full p-2 bg-muted"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              <nav className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: 0.1 + index * 0.1 } 
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: 10,
                      transition: { duration: 0.2, delay: (navItems.length - index) * 0.05 } 
                    }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "text-xl font-medium block py-4 border-b border-border/50",
                        activeItem === item.href ? "text-primary" : "text-foreground/80"
                      )}
                      onClick={() => {
                        setActiveItem(item.href);
                        setMobileMenuOpen(false);
                      }}
                    >
                      <div className="flex items-center">
                        <span>{item.label}</span>
                        {activeItem === item.href && (
                          <motion.div 
                            className="h-1.5 w-1.5 rounded-full bg-primary ml-2"
                            layoutId="mobile-nav-dot"
                          />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.1 + navItems.length * 0.1 } 
                  }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-6"
                >
                  <Button 
                    variant="gradient" 
                    className="w-full rounded-full py-6 shadow-lg"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 