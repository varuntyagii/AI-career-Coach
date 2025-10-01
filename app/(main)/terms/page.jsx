"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, AlertTriangle, CheckCircle, XCircle, Users } from "lucide-react";

const TermsOfService = () => {
  const termsSections = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Acceptance of Terms",
      content: "By accessing and using AI Career Coach, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Use License",
      content: "Permission is granted to temporarily download one copy of AI Career Coach for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title."
    },
    {
      icon: <XCircle className="h-6 w-6" />,
      title: "Prohibited Uses",
      content: "You may not use our service for any unlawful purpose or to solicit others to perform unlawful acts. You may not violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances."
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Disclaimer",
      content: "The materials on AI Career Coach are provided on an 'as is' basis. AI Career Coach makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
    }
  ];

  const userResponsibilities = [
    "Provide accurate and truthful information",
    "Use the service for legitimate career development purposes",
    "Respect intellectual property rights",
    "Not attempt to reverse engineer our AI systems",
    "Maintain the confidentiality of your account credentials"
  ];

  const serviceLimitations = [
    "AI-generated content is for guidance purposes only",
    "We do not guarantee job placement or career success",
    "Service availability may be subject to maintenance windows",
    "Results may vary based on individual circumstances"
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Scale className="h-12 w-12 text-primary mr-3" />
          <h1 className="text-4xl font-bold">Terms of Service</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Please read these terms carefully before using our AI Career Coach service.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-8">
        {termsSections.map((section, index) => (
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
              <CheckCircle className="h-6 w-6 text-primary" />
              <span>User Responsibilities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {userResponsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{responsibility}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <AlertTriangle className="h-6 w-6 text-primary" />
              <span>Service Limitations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {serviceLimitations.map((limitation, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{limitation}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-3">Modifications</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI Career Coach reserves the right to revise these terms of service at any time without notice. 
              By using this service, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <FileText className="h-6 w-6 text-primary" />
              <span>Contact Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> varuntyagi0099@gmail.com</p>
              <p><strong>Address:</strong> Ghaziabad, Uttar Pradesh, India</p>
              <p><strong>Phone:</strong> +91 6397011309</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;
