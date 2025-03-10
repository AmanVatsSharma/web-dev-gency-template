'use client'
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils/cn";

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  speed?: "slow" | "medium" | "fast";
  delay?: number;
  yOffset?: number;
  animation?: "float" | "pulse" | "breathe";
}

export function FloatingElement({
  children,
  className,
  speed = "medium",
  delay = 0,
  yOffset = 10,
  animation = "float",
}: FloatingElementProps) {
  // Define animation speeds based on the speed prop
  const speedMap = {
    slow: 8,
    medium: 5,
    fast: 3,
  };

  const duration = speedMap[speed];

  // Different animation variants
  const floatAnimation = {
    y: [-yOffset, 0, -yOffset],
    transition: {
      duration,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut",
      delay,
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut",
      delay,
    }
  };

  const breatheAnimation = {
    opacity: [0.8, 1, 0.8],
    scale: [0.95, 1, 0.95],
    transition: {
      duration,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut",
      delay,
    }
  };

  let animationProps = {};
  
  switch (animation) {
    case "float":
      animationProps = floatAnimation;
      break;
    case "pulse":
      animationProps = pulseAnimation;
      break;
    case "breathe":
      animationProps = breatheAnimation;
      break;
  }

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      initial={animation === "float" ? { y: 0 } : animation === "pulse" ? { scale: 1 } : { opacity: 0.8, scale: 0.95 }}
      animate={animationProps}
    >
      {children}
    </motion.div>
  );
} 