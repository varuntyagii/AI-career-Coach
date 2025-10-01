"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { 
  HelpCircle, 
  Mail, 
  MessageCircle, 
  Phone, 
  Clock, 
  CheckCircle,
  Send,
  BookOpen,
  Video,
  Users,
  Zap
} from "lucide-react";

const Support = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
          to_name: "Varun Tyagi",
        },
        publicKey
      );

      if (result.status === 200) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const supportOptions = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      description: "Get instant help from our AI assistant",
      action: "Start Chat",
      available: "24/7 Available",
      onClick: () => {
        // Scroll to contact form
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Send Email",
      available: "Response within 24h",
      onClick: () => {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "Speak directly with our team",
      action: "Call Now",
      available: "Mon-Fri 9AM-6PM",
      onClick: () => {
        window.location.href = "tel:+916397011309";
      }
    }
  ];

  const faqItems = [
    {
      question: "How do I create an effective resume?",
      answer: "Use our AI-powered resume builder to get personalized suggestions based on your industry and experience level. The AI analyzes job descriptions and provides tailored recommendations."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use enterprise-grade encryption and follow industry best practices to protect your personal information. Your data is never shared with third parties without your consent."
    },
    {
      question: "How accurate are the AI recommendations?",
      answer: "Our AI is trained on millions of successful resumes and job postings. While we can't guarantee job placement, our recommendations are based on proven patterns and industry standards."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access to premium features until the end of your billing period."
    }
  ];

  const resources = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "User Guide",
      description: "Complete guide to using all features"
    },
    {
      icon: <Video className="h-5 w-5" />,
      title: "Video Tutorials",
      description: "Step-by-step video instructions"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Community Forum",
      description: "Connect with other users"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Feature Requests",
      description: "Suggest new features"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <HelpCircle className="h-12 w-12 text-primary mr-3" />
          <h1 className="text-4xl font-bold">Support Center</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          We're here to help you succeed in your career journey
        </p>
      </div>

      {/* Support Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {supportOptions.map((option, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  {option.icon}
                </div>
              </div>
              <CardTitle className="text-xl">{option.title}</CardTitle>
              <p className="text-muted-foreground text-sm">{option.description}</p>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full mb-2" onClick={option.onClick}>{option.action}</Button>
              <p className="text-xs text-muted-foreground flex items-center justify-center">
                <Clock className="h-3 w-3 mr-1" />
                {option.available}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form with Input Fields */}
        <Card id="contact-form">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Send className="h-5 w-5" />
              <span>Send us a Message</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="from_name" className="text-sm font-medium mb-2 block">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="text-sm font-medium mb-2 block">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="from_email"
                    name="from_email"
                    type="email"
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                  Subject <span className="text-red-500">*</span>
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Frequently Asked Questions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div key={index} className="border-b border-border pb-4 last:border-b-0">
                  <h4 className="font-semibold mb-2">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resources */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {resources.map((resource, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="text-primary">{resource.icon}</div>
                <div>
                  <h4 className="font-semibold text-sm">{resource.title}</h4>
                  <p className="text-xs text-muted-foreground">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="mt-8 bg-muted/50">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="font-semibold mb-4">Still need help?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <Mail className="h-4 w-4 mx-auto mb-1" />
                <p><strong>Email:</strong> varuntyagi0099@gmail.com</p>
              </div>
              <div>
                <Phone className="h-4 w-4 mx-auto mb-1" />
                <p><strong>Phone:</strong> +91 6397011309</p>
              </div>
              <div>
                <Clock className="h-4 w-4 mx-auto mb-1" />
                <p><strong>Hours:</strong> 24/7 AI Support</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Support;
