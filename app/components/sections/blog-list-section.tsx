'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  Tag,
  ChevronRight,
  Search
} from "lucide-react";
import { cn } from "@/app/lib/utils/cn";

// Mock blog post data
const blogPosts = [
  {
    id: "modern-web-dev-trends-2025",
    title: "Modern Web Development Trends for 2025",
    description: "Explore the cutting-edge technologies and approaches that will shape web development in the coming year.",
    category: "Technology",
    date: "Mar 8, 2025",
    readTime: "8 min read",
    author: {
      name: "Alex Morgan",
      image: "/images/team/team-1.jpg"
    },
    featured: true,
    image: "/images/blog/web-trends.jpg"
  },
  {
    id: "react-vs-nextjs-comparison",
    title: "React vs Next.js: A Comprehensive Comparison",
    description: "Understand the key differences between React and Next.js to make informed decisions for your projects.",
    category: "Development",
    date: "Mar 5, 2025",
    readTime: "12 min read",
    author: {
      name: "Sarah Johnson",
      image: "/images/team/team-2.jpg"
    },
    featured: true,
    image: "/images/blog/react-nextjs.jpg"
  },
  {
    id: "ai-in-web-development",
    title: "The Impact of AI on Modern Web Development",
    description: "Discover how artificial intelligence is revolutionizing the way we build and interact with web applications.",
    category: "AI & Technology",
    date: "Feb 28, 2025",
    readTime: "10 min read",
    author: {
      name: "Michael Chen",
      image: "/images/team/team-3.jpg"
    },
    featured: false,
    image: "/images/blog/ai-development.jpg"
  },
  {
    id: "design-systems-guide",
    title: "Building Robust Design Systems: A Practical Guide",
    description: "Learn how to create and implement design systems that scale across products and teams.",
    category: "Design",
    date: "Feb 20, 2025",
    readTime: "15 min read",
    author: {
      name: "Emma Wilson",
      image: "/images/team/team-4.jpg"
    },
    featured: false,
    image: "/images/blog/design-systems.jpg"
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices for Large-Scale Applications",
    description: "Discover proven patterns and approaches for managing complex TypeScript codebases.",
    category: "Development",
    date: "Feb 15, 2025",
    readTime: "11 min read",
    author: {
      name: "James Roberts",
      image: "/images/team/team-5.jpg"
    },
    featured: false,
    image: "/images/blog/typescript.jpg"
  },
  {
    id: "accessibility-web-development",
    title: "Making Web Accessibility a Priority: Techniques and Tools",
    description: "Explore practical approaches to building inclusive web experiences for all users.",
    category: "Accessibility",
    date: "Feb 10, 2025",
    readTime: "9 min read",
    author: {
      name: "Priya Sharma",
      image: "/images/team/team-6.jpg"
    },
    featured: false,
    image: "/images/blog/accessibility.jpg"
  }
];

// Categories for filtering
const categories = [
  "All",
  "Technology",
  "Development",
  "Design",
  "AI & Technology",
  "Accessibility"
];

export function BlogList() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter posts based on category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);
  
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Featured posts section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Featured Articles</h2>
            <Link href="#all-posts" className="flex items-center text-primary hover:underline mt-2 md:mt-0">
              View all posts <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <FeaturedPostCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* All posts section */}
        <div id="all-posts">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-6">All Posts</h2>
            
            {/* Search and filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-2 w-full rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0 -mx-1 px-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap",
                      activeCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
              >
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No posts found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Featured Post Card component with spotlight effect
function FeaturedPostCard({ post }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={cardRef}
      className="group relative overflow-hidden rounded-xl bg-card hover:shadow-xl transition-all duration-300 border border-border h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.1), transparent 40%)`,
          }}
        />
      )}
      
      <div className="flex flex-col h-full md:flex-row">
        <div className="aspect-video md:aspect-auto relative w-full md:w-2/5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-flex items-center rounded-full bg-primary/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-primary">
              {post.category}
            </span>
          </div>
          <Image
            src={post.image}
            alt={post.title}
            width={600}
            height={340}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col flex-1 relative">
          <Link href={`/blog/${post.id}`}>
            <h3 className="mb-4 text-xl md:text-2xl font-bold tracking-tight hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
          </Link>
          <p className="mb-6 text-muted-foreground line-clamp-3">{post.description}</p>
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-medium">{post.author.name}</span>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="mr-1 h-3 w-3" />
              {post.date}
              <span className="mx-1">•</span>
              <Clock className="mr-1 h-3 w-3" />
              {post.readTime}
            </div>
          </div>
          
          {/* Read more button that appears on hover */}
          <div 
            className={cn(
              "absolute bottom-6 right-6 bg-primary text-primary-foreground rounded-full py-1.5 px-3 text-xs font-medium transition-all duration-300 flex items-center",
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            )}
          >
            Read post <ChevronRight className="ml-1 h-3 w-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Blog Post Card component with 3D hover effect
function BlogPostCard({ post }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-border hover:shadow-xl transition-all duration-300 h-full bg-card">
      {/* Card shine effect */}
      <div className="absolute -inset-px rounded-lg bg-gradient-to-tr from-transparent via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
      <div className="absolute -inset-px rounded-lg bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
      
      {/* Card content with 3D effect */}
      <div className="relative flex flex-col w-full h-full group-hover:scale-[0.98] transition-all duration-500">
        <div className="relative aspect-video w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={225}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-2 left-2 z-20">
            <span className="inline-flex items-center rounded-full bg-black/20 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-white">
              {post.category}
            </span>
          </div>
        </div>
        <div className="flex flex-col flex-1 p-5 z-10 bg-card group-hover:bg-card/95 transition-colors duration-300">
          <div className="flex items-center text-xs text-muted-foreground mb-2">
            <Calendar className="mr-1 h-3 w-3" />
            {post.date}
            <span className="mx-1">•</span>
            <Clock className="mr-1 h-3 w-3" />
            {post.readTime}
          </div>
          <Link href={`/blog/${post.id}`} className="group-hover:text-primary transition-colors">
            <h3 className="mb-2 font-semibold line-clamp-2">{post.title}</h3>
          </Link>
          <p className="line-clamp-2 text-sm text-muted-foreground mb-4">{post.description}</p>
          <div className="mt-auto flex items-center">
            <div className="relative h-6 w-6 rounded-full overflow-hidden mr-2">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs font-medium">{post.author.name}</span>
          </div>
        </div>
        
        {/* Read more link that appears on hover */}
        <div className="absolute bottom-4 right-4 z-20 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full p-1.5 shadow-lg">
            <ChevronRight className="h-3 w-3" />
          </div>
        </div>
      </div>
    </div>
  );
} 