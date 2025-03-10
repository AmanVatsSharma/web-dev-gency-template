'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Linkedin, Twitter, Globe, ArrowRight, Mail } from "lucide-react";
import { cn } from "@/app/lib/utils/cn";
import { Spotlight } from "@/app/components/ui/spotlight";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "With over 15 years of experience in web development and digital strategy, Alex founded DevAgency with a vision to create digital experiences that truly make a difference.",
    image: "/images/team-alex.jpg",
    email: "alex@devagency.com",
    skills: ["Strategy", "Leadership", "Product Vision"],
    social: {
      twitter: "https://twitter.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson",
      website: "https://alexjohnson.com"
    }
  },
  {
    name: "Sarah Williams",
    role: "Creative Director",
    bio: "Sarah brings her exceptional eye for design and user experience to every project, ensuring our work is not just functional but beautiful and engaging.",
    image: "/images/team-sarah.jpg",
    email: "sarah@devagency.com",
    skills: ["UI/UX", "Brand Identity", "Design Systems"],
    social: {
      twitter: "https://twitter.com/sarahwilliams",
      linkedin: "https://linkedin.com/in/sarahwilliams",
    }
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    bio: "Michael is a full-stack wizard who loves solving complex problems. He has a passion for writing clean, efficient code and staying ahead of technology trends.",
    image: "/images/team-michael.jpg",
    email: "michael@devagency.com",
    skills: ["Full-Stack", "Architecture", "Performance"],
    social: {
      twitter: "https://twitter.com/michaelchen",
      linkedin: "https://linkedin.com/in/michaelchen",
      website: "https://michaelchen.dev"
    }
  },
  {
    name: "Emily Rodriguez",
    role: "UX/UI Designer",
    bio: "Emily combines her artistic background with a deep understanding of user psychology to create interfaces that are intuitive, accessible, and delightful to use.",
    image: "/images/team-emily.jpg",
    email: "emily@devagency.com",
    skills: ["User Research", "Wireframing", "Prototyping"],
    social: {
      twitter: "https://twitter.com/emilyrodriguez",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
    }
  },
  {
    name: "David Kim",
    role: "Backend Specialist",
    bio: "David is our database and server-side expert, ensuring that our applications are not just beautiful on the surface but robust and scalable underneath.",
    image: "/images/team-david.jpg",
    email: "david@devagency.com",
    skills: ["Database Design", "API Development", "Security"],
    social: {
      linkedin: "https://linkedin.com/in/davidkim",
    }
  },
  {
    name: "Lisa Patel",
    role: "Project Manager",
    bio: "Lisa keeps our projects running smoothly, ensuring we deliver on time and on budget while maintaining clear communication with our clients throughout the process.",
    image: "/images/team-lisa.jpg",
    email: "lisa@devagency.com",
    skills: ["Agile Methodology", "Client Relations", "Resource Planning"],
    social: {
      twitter: "https://twitter.com/lisapatel",
      linkedin: "https://linkedin.com/in/lisapatel",
    }
  },
];

// FlipCard component inspired by Aceternity UI
interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

function FlipCard({ frontContent, backContent }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-full perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={cn(
          "relative h-full w-full rounded-xl transition-all duration-500 preserve-3d",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden rounded-xl border border-border/40 bg-background/50 backdrop-blur-sm overflow-hidden">
          {frontContent}
        </div>
        
        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rounded-xl border border-border/40 bg-background/50 backdrop-blur-sm overflow-hidden rotate-y-180">
          {backContent}
        </div>
      </div>
    </div>
  );
}

export function TeamSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 relative overflow-hidden" id="team">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute -z-10 h-32 w-32 rounded-full bg-purple-500/20 blur-[100px] top-[20%] right-[20%]"></div>
      <div className="absolute -z-10 h-32 w-32 rounded-full bg-blue-500/20 blur-[100px] bottom-[30%] left-[10%]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 text-sm text-center font-medium bg-green-500/10 text-green-600 dark:text-green-400 rounded-full mb-4 shadow-sm">
              Our Team
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500"
          >
            Meet the Talented People Behind Our Success
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            We're a diverse team of designers, developers, and digital strategists united by our passion for creating exceptional digital experiences.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const { ref, inView } = useInView({
              threshold: 0.1,
              triggerOnce: true,
              delay: 100,
            });
            
            return (
              <motion.div
                key={member.name}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-[400px]"
              >
                <FlipCard 
                  frontContent={
                    <div className="p-6 h-full flex flex-col">
                      <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-purple-500/30 mx-auto group-hover:scale-105 transition-transform duration-300">
                        <div className={`absolute inset-0 bg-gradient-to-tr ${
                          index % 3 === 0 
                            ? 'from-purple-500 to-blue-500' 
                            : index % 3 === 1 
                              ? 'from-blue-500 to-green-500' 
                              : 'from-pink-500 to-purple-500'
                        } mix-blend-normal`}></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                          {member.name.charAt(0)}
                        </div>
                      </div>
                      
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">{member.name}</h3>
                        <p className="text-primary font-medium text-sm">{member.role}</p>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-6 text-center flex-grow">{member.bio}</p>
                      
                      <div className="text-center text-sm text-muted-foreground mt-auto">
                        <div className="flex items-center justify-center gap-2">
                          <span>Click to view more</span>
                          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  }
                  backContent={
                    <div className="p-6 h-full flex flex-col">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">{member.name}</h3>
                        <p className="text-primary font-medium text-sm">{member.role}</p>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-medium mb-2">Contact:</p>
                        <a href={`mailto:${member.email}`} className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2">
                          <Mail className="h-3.5 w-3.5" /> {member.email}
                        </a>
                      </div>
                      
                      <div className="mb-6">
                        <p className="text-sm font-medium mb-2">Expertise:</p>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill) => (
                            <span key={skill} className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <p className="text-sm font-medium mb-2">Connect:</p>
                        <div className="flex justify-start space-x-4">
                          {member.social.linkedin && (
                            <a 
                              href={member.social.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-foreground transition-colors"
                              aria-label={`${member.name}'s LinkedIn`}
                            >
                              <Linkedin size={18} />
                            </a>
                          )}
                          
                          {member.social.twitter && (
                            <a 
                              href={member.social.twitter} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-foreground transition-colors"
                              aria-label={`${member.name}'s Twitter`}
                            >
                              <Twitter size={18} />
                            </a>
                          )}
                          
                          {member.social.website && (
                            <a 
                              href={member.social.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-foreground transition-colors"
                              aria-label={`${member.name}'s Website`}
                            >
                              <Globe size={18} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  }
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 