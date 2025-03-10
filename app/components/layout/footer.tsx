import React from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Spotlight } from "@/app/components/ui/spotlight";
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Mobile Apps", href: "/services/mobile-apps" },
      { label: "E-commerce", href: "/services/ecommerce" },
      { label: "SEO", href: "/services/seo" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "GDPR", href: "/gdpr" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="mb-16">
          <Spotlight className="rounded-2xl bg-zinc-900 p-8 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                  Subscribe to our newsletter
                </h3>
                <p className="text-zinc-400 mb-6 max-w-md">
                  Stay updated with the latest trends, insights, and updates in web development and design.
                </p>
              </div>
              <div className="flex flex-col md:items-end justify-center">
                <div className="flex w-full max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow bg-zinc-800 rounded-l-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <Button
                    variant="gradient"
                    className="rounded-l-none rounded-r-lg flex items-center gap-2"
                  >
                    Subscribe <ArrowRight size={16} />
                  </Button>
                </div>
                <p className="text-xs text-zinc-500 mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </Spotlight>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                DevAgency
              </span>
            </Link>
            <p className="text-zinc-400 mb-6 max-w-xs">
              We craft stunning digital experiences that convert visitors into loyal customers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DevAgency. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              <Mail size={16} />
              hello@devagency.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 