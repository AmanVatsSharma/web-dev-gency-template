'use client'
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/app/lib/utils/cn";

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
  fill?: string;
}

export function Spotlight({
  children,
  className = "",
  fill = "rgba(120, 119, 198, 0.15)",
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      mousePosition.current = { x, y };
      
      // Update CSS variables
      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    };

    // Add event listeners
    container.addEventListener("mousemove", handleMouseMove);
    
    // Clean up
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMounted]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-md",
        className
      )}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 spotlight"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${fill}, transparent 40%)`,
        }}
      />
    </div>
  );
} 