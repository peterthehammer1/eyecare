"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Eye, Users, DollarSign, AlertTriangle, Target } from "lucide-react";

const analytics = [
  {
    icon: TrendingUp,
    title: "Disease Progression Prediction",
    description: "AI analyzes OCT scans and visual fields to predict glaucoma, macular degeneration, and diabetic retinopathy progression with 95%+ accuracy.",
    metric: "95% Accuracy",
    color: "text-green-600"
  },
  {
    icon: Users,
    title: "No-Show Prediction",
    description: "Machine learning models predict patient no-shows 48 hours in advance, allowing for proactive scheduling optimization.",
    metric: "40% Reduction",
    color: "text-blue-600"
  },
  {
    icon: DollarSign,
    title: "Revenue Optimization",
    description: "AI identifies missed revenue opportunities and suggests optimal pricing strategies for services and optical products.",
    metric: "30% Increase",
    color: "text-purple-600"
  },
  {
    icon: Eye,
    title: "Optical Capture Rate",
    description: "Predict which patients are likely to purchase eyewear and optimize frame recommendations to increase sales.",
    metric: "25% Higher",
    color: "text-orange-600"
  },
  {
    icon: Target,
    title: "Treatment Outcomes",
    description: "Track and predict treatment success rates, helping optimize care plans and improve patient satisfaction.",
    metric: "85% Success",
    color: "text-cyan-600"
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment",
    description: "Automated risk scoring for urgent referrals and emergency cases based on symptoms and history.",
    metric: "99% Detection",
    color: "text-red-600"
  }
];

export function AIAnalytics() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            🤖 AI-Powered Intelligence
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Predictive Analytics That Drive Results
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI doesn't just analyze data—it predicts outcomes, optimizes operations, 
            and helps you make decisions that improve patient care and grow your practice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {analytics.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <Badge variant="outline" className={item.color}>
                    {item.metric}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Explore AI Analytics Dashboard
            <TrendingUp className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
