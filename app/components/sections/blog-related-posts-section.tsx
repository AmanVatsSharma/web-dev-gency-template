'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { cn } from "@/app/lib/utils/cn";

export function RelatedPosts({ posts, category }) {
  // If there are no related posts, don't render anything
  if (!posts || posts.length === 0) {
    return null;
  }
  
  return (
    <div className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block mb-3"
            >
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                More from {category}
              </span>
              <div className="absolute -left-2 -top-2 h-6 w-6 rounded-full bg-primary/20 blur-xl" />
              <div className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full bg-indigo-500/20 blur-xl" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold tracking-tight mb-2"
            >
              Related Articles
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Continue exploring more insights and resources related to this topic
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <RelatedPostCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Individual related post card
function RelatedPostCard({ post }) {
  return (
    <Link 
      href={`/blog/${post.id}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card hover:shadow-md transition-all duration-300 h-full"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2 z-20">
          <span className="inline-flex items-center rounded-full bg-black/20 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-white">
            {post.category}
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-4">
        <div className="flex items-center text-xs text-muted-foreground mb-2">
          <Calendar className="mr-1 h-3 w-3" />
          {post.date}
          <span className="mx-1">•</span>
          <Clock className="mr-1 h-3 w-3" />
          {post.readTime}
        </div>
        <h3 className={cn(
          "font-semibold line-clamp-2 mb-2 group-hover:text-primary transition-colors",
          "text-base sm:text-lg"
        )}>
          {post.title}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{post.description}</p>
      </div>
    </Link>
  );
} 