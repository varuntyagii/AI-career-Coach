"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { 
  Target, 
  Users, 
  Lightbulb, 
  Award, 
  Heart, 
  Zap,
  Globe,
  Shield,
  TrendingUp,
  Star,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const About = () => {
  const teamMembers = [
    {
      name: "Varun Tyagi",
      role: "Founder & Full Stack Developer",
      image: "/avatar1.jpg",
      description: "B.Tech CSE Graduate | MERN Stack Expert | AI Integration Specialist | Building AI-powered career development solutions."
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Mission-Driven",
      description: "We believe everyone deserves access to world-class career guidance, regardless of their background or circumstances."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We continuously push the boundaries of AI technology to provide cutting-edge career development tools."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "User-Centric",
      description: "Every feature we build is designed with our users' success in mind, backed by extensive research and feedback."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Privacy",
      description: "We maintain the highest standards of data security and privacy, ensuring your information is always protected."
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "AI Career Coach Launched",
      description: "Revolutionary AI-powered career development platform goes live"
    },
    {
      year: "2024",
      title: "10,000+ Users",
      description: "Reached our first major milestone of helping thousands of professionals"
    },
    {
      year: "2024",
      title: "AI Enhancement",
      description: "Launched advanced AI features for personalized career guidance"
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Featured in top career development and tech publications"
    }
  ];

  const stats = [
    { number: "50+", label: "Industries Covered" },
    { number: "1000+", label: "Interview Questions" },
    { number: "95%", label: "User Satisfaction" },
    { number: "24/7", label: "AI Support" }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-6">
          <div className="p-4 rounded-full bg-primary/10">
            <Heart className="h-12 w-12 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About AI Career Coach</h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
          We're on a mission to democratize career development by making world-class career guidance 
          accessible to everyone through the power of artificial intelligence.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Our Story */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center space-x-2">
            <Globe className="h-6 w-6" />
            <span>Our Story</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            AI Career Coach was born from a simple observation: career development resources were either 
            too expensive, too generic, or too difficult to access for most people. We saw an opportunity 
            to leverage cutting-edge AI technology to provide personalized, affordable, and accessible 
            career guidance to everyone.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Founded in 2024 by a team of career development experts and AI researchers, we've built a 
            platform that combines the best of human expertise with the scalability and personalization 
            of artificial intelligence. Our AI has been trained on millions of successful resumes, 
            cover letters, and career trajectories to provide insights that were previously only 
            available to those who could afford expensive career coaches.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today, we're proud to serve thousands of professionals across 50+ industries, helping them 
            land their dream jobs and advance their careers with confidence.
          </p>
        </CardContent>
      </Card>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary flex-shrink-0">{value.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center space-x-2">
            <TrendingUp className="h-6 w-6" />
            <span>Our Journey</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">{milestone.year}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-4">
            <Star className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who are already using AI Career Coach to advance their careers. 
            Start your journey today with our AI-powered tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Link href="/support">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
