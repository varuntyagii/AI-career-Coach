"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp, 
  Moon, 
  Sun,
  Shield,
  CreditCard,
  Users,
  ChevronUp,
  ChevronDown,
  MessageSquare
} from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import ContactForm from "./contact-form";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll indicator logic
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
        setShowScrollIndicator(false);
      } else {
        setIsVisible(false);
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/varuntyagii", label: "GitHub", isExternal: true },
    { icon: Twitter, href: "https://x.com/varun_tyagi0", label: "Twitter", isExternal: true },
    { icon: Linkedin, href: "https://www.linkedin.com/in/varuntyagi09/", label: "LinkedIn", isExternal: true },
    { icon: Instagram, href: "https://instagram.com/vaarun_tyagi", label: "Instagram", isExternal: true },
    { icon: Mail, href: "#", label: "Email", isExternal: false },
  ];

  const quickLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Resume Builder", href: "/resume" },
    { name: "Cover Letter", href: "/ai-cover-letter" },
    { name: "Interview Prep", href: "/interview" },
  ];

  const certifications = [
    { icon: Shield, text: "SSL Secure", color: "text-green-500" },
    { icon: CreditCard, text: "Payment Certified", color: "text-blue-500" },
    { icon: Users, text: "Trusted by Users", color: "text-purple-500" },
  ];

  return (
    <>
      {/* Animated Scroll Indicator */}
      {showScrollIndicator && (
        <div className="fixed bottom-20 right-6 z-40 animate-bounce-slow">
          <div className="flex flex-col items-center text-muted-foreground">
            <ChevronDown className="h-6 w-6 animate-pulse" />
            <span className="text-xs">Scroll</span>
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in-scale"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />

      {/* Main Footer */}
      <footer className="bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="AI Career Coach"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="font-semibold text-lg text-foreground">AI Career Coach</span>
              </div>
              <p className="text-sm text-foreground/70">
                Your personal AI-powered career development companion.
              </p>
              
              {/* Social Icons */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  social.isExternal ? (
                    <Link
                      key={index}
                      href={social.href}
                      className="social-icon p-2 rounded-full bg-background/50 hover:bg-primary/10 group"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="h-4 w-4 text-foreground/70 group-hover:text-primary transition-colors" />
                    </Link>
                  ) : (
                    <button
                      key={index}
                      onClick={() => setIsContactFormOpen(true)}
                      className="social-icon p-2 rounded-full bg-background/50 hover:bg-primary/10 group"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4 text-foreground/70 group-hover:text-primary transition-colors" />
                    </button>
                  )
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <Mail className="h-4 w-4" />
                  <span>varuntyagi0099@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <span>+91 6397011309</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-foreground/70">
                  <span>Ghaziabad, UP, India</span>
                </div>
              </div>
              
              {/* Send Message Button */}
              <Button
                variant="default"
                size="sm"
                onClick={() => setIsContactFormOpen(true)}
                className="w-full justify-start gap-2 hover:scale-105 transition-transform"
              >
                <MessageSquare className="h-4 w-4" />
                Send us a Message
              </Button>
            </div>

            {/* Theme Toggle & Certifications */}
            <div className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground">Settings</h3>
              
              {/* Theme Toggle */}
              {mounted ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-full justify-start hover:scale-105 transition-transform"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="h-4 w-4 mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4 mr-2" />
                      Dark Mode
                    </>
                  )}
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start hover:scale-105 transition-transform opacity-0"
                  aria-hidden="true"
                >
                  <span className="invisible">Theme Toggle</span>
                </Button>
              )}

              {/* Certifications */}
              <div className="space-y-2">
                <h4 className="text-xs font-medium text-foreground/60 uppercase tracking-wider">
                  Certifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-1 px-2 py-1 rounded-full bg-background/50 text-xs hover:scale-105 transition-transform"
                    >
                      <cert.icon className={`h-3 w-3 ${cert.color}`} />
                      <span className="text-foreground/70">{cert.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-sm text-foreground/70">
                © {new Date().getFullYear()} AI Career Coach. All rights reserved.
              </div>

              {/* Made with Love */}
              <div className="flex items-center space-x-2 text-sm text-foreground/70">
                <span>Made with</span>
                <span className="text-red-500 animate-heart-beat">❤️</span>
                <span>by Varun Tyagi</span>
              </div>

              {/* Mini Sitemap */}
              <div className="flex flex-wrap gap-4 text-xs">
                <Link href="/privacy" className="text-foreground/70 hover:text-primary transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-foreground/70 hover:text-primary transition-colors">
                  Terms
                </Link>
                <Link href="/support" className="text-foreground/70 hover:text-primary transition-colors">
                  Support
                </Link>
                <Link href="/about" className="text-foreground/70 hover:text-primary transition-colors">
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
