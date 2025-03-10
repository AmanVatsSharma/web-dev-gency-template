import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostDetail } from "@/app/components/sections/blog-post-detail-section";
import { RelatedPosts } from "@/app/components/sections/blog-related-posts-section";
import { Cta } from "@/app/components/sections/cta-section";

// Mock blog post data - must match with the data in blog-list-section.tsx
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
    image: "/images/blog/web-trends.jpg",
    content: `
      <p>The web development landscape is constantly evolving, with new technologies, frameworks, and methodologies emerging at a rapid pace. As we look ahead to 2025, several key trends are set to reshape how we build and experience the web.</p>
      
      <h2>1. AI-Assisted Development</h2>
      <p>Artificial intelligence is no longer just a buzzword in web development—it's becoming an integral part of the development workflow. AI tools now help developers write code, identify bugs, and optimize performance. By 2025, we expect to see AI assistants that can:</p>
      <ul>
        <li>Generate entire components based on natural language descriptions</li>
        <li>Automatically refactor code to improve performance and readability</li>
        <li>Predict potential UX issues before they occur</li>
        <li>Optimize database queries and suggest schema improvements</li>
      </ul>
      <p>These AI tools won't replace developers but will instead augment their capabilities, allowing them to focus on more creative and complex tasks.</p>
      
      <h2>2. Web Assembly (WASM) Goes Mainstream</h2>
      <p>Web Assembly has been around for a few years, but it's set to reach mainstream adoption by 2025. This technology allows code written in languages like C++, Rust, and Go to run at near-native speed in browsers. The implications are significant:</p>
      <ul>
        <li>Complex desktop-class applications running in browsers</li>
        <li>High-performance games without plugins</li>
        <li>Advanced image and video editing capabilities</li>
        <li>Scientific and data visualization tools with desktop-level performance</li>
      </ul>
      <p>As more developers become familiar with WASM, we'll see a surge in browser-based applications that previously would have required native installation.</p>
      
      <h2>3. Edge Computing Becomes Standard</h2>
      <p>The edge computing paradigm—running server-side code closer to users—is set to become standard practice by 2025. Major platforms are already investing heavily in edge infrastructure, and developers are adapting their architectures accordingly.</p>
      <p>Benefits of edge computing include:</p>
      <ul>
        <li>Dramatically reduced latency for users worldwide</li>
        <li>Lower bandwidth costs</li>
        <li>Improved reliability through geographical distribution</li>
        <li>Better compliance with data localization requirements</li>
      </ul>
      <p>Frameworks that make edge development more accessible, like Next.js and Remix, will continue to gain popularity as edge computing becomes the norm rather than the exception.</p>
      
      <h2>4. Component Marketplaces and Design Systems</h2>
      <p>As web applications grow in complexity, reusable components and comprehensive design systems will become even more crucial. By 2025, we expect to see:</p>
      <ul>
        <li>Thriving marketplaces for high-quality, customizable components</li>
        <li>Better tooling for creating and maintaining design systems</li>
        <li>Automated testing and accessibility verification for component libraries</li>
        <li>Design systems that adapt automatically to brand guidelines</li>
      </ul>
      <p>This trend will significantly reduce the time required to build consistent, accessible, and visually appealing interfaces.</p>
      
      <h2>5. Metaverse Integration</h2>
      <p>While the full vision of the metaverse may still be years away, by 2025 we'll see increasing integration between traditional web experiences and more immersive environments. This might include:</p>
      <ul>
        <li>3D product visualizations embedded in e-commerce sites</li>
        <li>Virtual meeting spaces accessible directly from browsers</li>
        <li>AR overlays that blend digital content with the physical world</li>
        <li>Web-based portals to more fully realized virtual environments</li>
      </ul>
      <p>These integrations will be made possible by improvements in WebGL, WebXR, and related technologies, and will gradually introduce users to more immersive online experiences.</p>
      
      <h2>Conclusion</h2>
      <p>The web development landscape of 2025 will offer exciting opportunities for developers willing to embrace new technologies and approaches. AI assistance, Web Assembly, edge computing, component marketplaces, and metaverse integration are all set to reshape how we build and experience the web.</p>
      <p>By staying informed about these trends and gradually incorporating relevant technologies into your skill set, you'll be well-positioned to create cutting-edge web experiences in the years to come.</p>
    `
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
    image: "/images/blog/react-nextjs.jpg",
    content: `
      <p>Choosing the right framework for your web application is a critical decision that impacts development speed, performance, and maintainability. React and Next.js are two popular options in the JavaScript ecosystem, but understanding their differences is essential for making an informed choice.</p>
      
      <h2>Understanding React</h2>
      <p>React is a JavaScript library for building user interfaces, primarily focused on the view layer of an application. Developed and maintained by Facebook (now Meta), React has become one of the most popular frontend libraries since its initial release in 2013.</p>
      
      <h3>Key Features of React</h3>
      <ul>
        <li><strong>Component-Based Architecture:</strong> React applications are built using components, which are reusable pieces of UI that manage their own state.</li>
        <li><strong>Virtual DOM:</strong> React uses a virtual representation of the DOM for efficient rendering and updates.</li>
        <li><strong>JSX:</strong> A syntax extension that allows you to write HTML-like code in JavaScript.</li>
        <li><strong>One-Way Data Binding:</strong> Data flows down from parent to child components, making applications more predictable and easier to debug.</li>
        <li><strong>Rich Ecosystem:</strong> A vast collection of libraries, tools, and extensions for nearly every use case.</li>
      </ul>
      
      <h2>Understanding Next.js</h2>
      <p>Next.js is a React framework that provides additional structure, features, and optimizations. Created by Vercel, Next.js has gained significant traction for production React applications because it addresses many challenges developers face when building with React alone.</p>
      
      <h3>Key Features of Next.js</h3>
      <ul>
        <li><strong>Server-Side Rendering (SSR):</strong> Renders pages on the server before sending them to the client, improving performance and SEO.</li>
        <li><strong>Static Site Generation (SSG):</strong> Pre-renders pages at build time for even faster performance.</li>
        <li><strong>Incremental Static Regeneration (ISR):</strong> Updates static pages after deployment without rebuilding the entire site.</li>
        <li><strong>File-Based Routing:</strong> Automatic routing based on the file structure in the pages directory.</li>
        <li><strong>API Routes:</strong> Built-in support for creating API endpoints within your Next.js application.</li>
        <li><strong>Image Optimization:</strong> Automatic image optimization for improved performance.</li>
        <li><strong>Built-in CSS Support:</strong> Various options for styling, including CSS Modules, Sass, and styled-jsx.</li>
      </ul>
      
      <h2>React vs Next.js: When to Use Each</h2>
      
      <h3>Choose React When:</h3>
      <ul>
        <li><strong>Building a Single-Page Application (SPA):</strong> If SEO isn't a primary concern and you're creating a highly interactive application.</li>
        <li><strong>Working on a Library or Component:</strong> When developing reusable components or a library that others will integrate.</li>
        <li><strong>Maximum Flexibility is Required:</strong> If you need complete control over your build configuration and routing.</li>
        <li><strong>Integrating with an Existing Backend:</strong> When your backend already handles routing and server-side rendering isn't necessary.</li>
      </ul>
      
      <h3>Choose Next.js When:</h3>
      <ul>
        <li><strong>SEO is Critical:</strong> For content-heavy sites where search engine visibility is important.</li>
        <li><strong>Performance is a Priority:</strong> When you need the fastest possible initial load times and improved Core Web Vitals.</li>
        <li><strong>Building a Large-Scale Application:</strong> Next.js provides more structure and conventions that help manage complexity in larger projects.</li>
        <li><strong>Creating a Hybrid Application:</strong> When you need both static pages and dynamic, server-rendered content.</li>
        <li><strong>Rapid Development:</strong> When you want to focus on building features rather than configuration.</li>
      </ul>
      
      <h2>Performance Considerations</h2>
      <p>Next.js generally offers better out-of-the-box performance than plain React applications because of its server-side rendering capabilities and optimizations. Key performance advantages include:</p>
      <ul>
        <li><strong>Faster Initial Page Load:</strong> SSR and SSG deliver complete HTML to the browser faster.</li>
        <li><strong>Improved SEO:</strong> Search engines can more easily index content that's rendered on the server.</li>
        <li><strong>Better Performance on Low-Powered Devices:</strong> Less JavaScript needs to be processed on the client-side.</li>
        <li><strong>Automatic Code Splitting:</strong> Only the JavaScript needed for each page is loaded.</li>
      </ul>
      
      <h2>Development Experience</h2>
      <p>Next.js provides a more opinionated and streamlined development experience compared to React:</p>
      <ul>
        <li><strong>Less Boilerplate:</strong> Next.js eliminates the need to set up routing, build configuration, and other common tasks.</li>
        <li><strong>Simplified Deployment:</strong> Especially when using Vercel, deployment is often as simple as connecting a repository.</li>
        <li><strong>Standardized Project Structure:</strong> Conventions like the pages directory make it easier for developers to understand the codebase.</li>
        <li><strong>Built-in Features:</strong> Image optimization, internationalization, and analytics require minimal setup.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The choice between React and Next.js ultimately depends on your project requirements:</p>
      <ul>
        <li>React gives you maximum flexibility and is ideal for SPAs and component libraries.</li>
        <li>Next.js provides structure, performance optimizations, and features that make it well-suited for production websites and applications that need SEO and fast initial loading.</li>
      </ul>
      <p>It's worth noting that Next.js is built on React, so the skills you develop with one are transferable to the other. Many developers start with React to learn the fundamentals and then adopt Next.js for production applications to leverage its additional features and optimizations.</p>
      <p>As web development continues to evolve, both React and Next.js remain excellent choices for modern applications, with Next.js increasingly becoming the preferred option for production-ready React applications.</p>
    `
  }
];

// This function would be replaced by actual data fetching in a real application
function getBlogPost(slug: string) {
  return blogPosts.find(post => post.id === slug);
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | DevAgency Blog',
      description: 'The requested blog post could not be found.'
    };
  }
  
  return {
    title: `${post.title} | DevAgency Blog`,
    description: post.description,
    keywords: `${post.category}, web development, blog, tutorials, tech articles, DevAgency`,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      images: [post.image],
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }
  
  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);
  
  return (
    <>
      <BlogPostDetail post={post} />
      <RelatedPosts posts={relatedPosts} category={post.category} />
      <Cta />
    </>
  );
} 