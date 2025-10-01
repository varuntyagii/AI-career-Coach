"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Database, Users, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  const privacySections = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Collection",
      content: "We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes your name, email address, resume data, and career preferences."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Data Security",
      content: "We implement industry-standard security measures to protect your personal information. All data is encrypted in transit and at rest, and we regularly audit our security practices."
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Data Usage",
      content: "Your data is used to provide personalized career coaching, generate resumes and cover letters, and improve our AI algorithms. We never sell your personal information to third parties."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Data Sharing",
      content: "We may share anonymized, aggregated data for research purposes. Your personal information is only shared with your explicit consent or as required by law."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Shield className="h-12 w-12 text-primary mr-3" />
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Your privacy is important to us. Learn how we collect, use, and protect your information.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-8">
        {privacySections.map((section, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="text-primary">{section.icon}</div>
                <span>{section.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-primary" />
              <span>Contact Us</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> varuntyagi0099@gmail.com</p>
              <p><strong>Address:</strong> Ghaziabad, Uttar Pradesh, India</p>
              <p><strong>Phone:</strong> +91 6397011309</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-3">Your Rights</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Access your personal data</li>
              <li>• Correct inaccurate information</li>
              <li>• Delete your account and data</li>
              <li>• Export your data</li>
              <li>• Opt-out of marketing communications</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
