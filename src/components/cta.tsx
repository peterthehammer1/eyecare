"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Shield, Zap, Users } from "lucide-react";

const benefits = [
  "30-day free trial",
  "No setup fees",
  "HIPAA compliant",
  "24/7 support",
  "Easy migration",
  "Cancel anytime"
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    description: "Perfect for small practices",
    features: [
      "Up to 2 providers",
      "Basic AI features",
      "Voice AI integration",
      "Patient management",
      "Basic analytics"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$599",
    period: "/month",
    description: "Most popular for growing practices",
    features: [
      "Up to 10 providers",
      "Full AI analytics",
      "Advanced voice AI",
      "Optical retail AI",
      "Predictive analytics",
      "Insurance optimization"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large multi-location practices",
    features: [
      "Unlimited providers",
      "Custom AI models",
      "White-label options",
      "Advanced integrations",
      "Dedicated support",
      "Custom training"
    ],
    popular: false
  }
];

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            🚀 Ready to Transform Your Practice?
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Start Your AI-Powered Eyecare Journey Today
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Join hundreds of eyecare professionals who are already using AI to provide better care, 
            increase revenue, and streamline operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-yellow-400 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-yellow-400 text-yellow-900">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-yellow-400 text-yellow-900 hover:bg-yellow-300' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Why Choose Our Platform?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-green-300" />
                  <span>HIPAA compliant with enterprise-grade security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-6 w-6 text-yellow-300" />
                  <span>Deploy in 48 hours with zero downtime</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-blue-300" />
                  <span>Dedicated success manager for onboarding</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Get Started Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Free 30-day trial</span>
                  <CheckCircle className="h-5 w-5 text-green-300" />
                </div>
                <div className="flex items-center justify-between">
                  <span>No credit card required</span>
                  <CheckCircle className="h-5 w-5 text-green-300" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Full feature access</span>
                  <CheckCircle className="h-5 w-5 text-green-300" />
                </div>
                <Button className="w-full mt-6 bg-white text-blue-600 hover:bg-gray-100">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-blue-100 mb-4">
            Questions? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Schedule Demo
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Contact Sales
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
