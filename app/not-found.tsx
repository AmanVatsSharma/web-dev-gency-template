'use client'
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500/20 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]" />
      </div>
      
      {/* Content */}
      <div className="text-center relative z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 8" className="text-primary" />
              <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 6" className="text-primary/70" />
              <circle cx="60" cy="60" r="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 4" className="text-primary/40" />
            </svg>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="mt-8 text-2xl font-bold tracking-tight">Page not found</h2>
          <p className="mt-4 text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed in the first place.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/">
                <Home className="h-4 w-4" /> Go to Home
              </Link>
            </Button>
            <Button asChild variant="ghost" className="gap-2">
              <Link href="javascript:history.back()">
                <ArrowLeft className="h-4 w-4" /> Go Back
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 