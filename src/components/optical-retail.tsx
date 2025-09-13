"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye, TrendingUp, Users, Target, Zap } from "lucide-react";

const retailFeatures = [
  {
    icon: Eye,
    title: "AI Frame Selection",
    description: "Analyze face shape, prescription, and preferences to recommend perfect frames that increase satisfaction and reduce remakes.",
    impact: "40% Fewer Remakes"
  },
  {
    icon: Target,
    title: "Capture Rate Optimization",
    description: "AI identifies patients likely to purchase eyewear and provides targeted recommendations to increase optical sales.",
    impact: "25% Higher Capture"
  },
  {
    icon: TrendingUp,
    title: "Revenue Intelligence",
    description: "Predict optimal pricing, identify upselling opportunities, and maximize revenue per patient visit.",
    impact: "30% Revenue Increase"
  },
  {
    icon: Users,
    title: "Customer Insights",
    description: "Understand patient preferences, buying patterns, and satisfaction drivers to improve the optical experience.",
    impact: "95% Satisfaction"
  },
  {
    icon: Zap,
    title: "Inventory Optimization",
    description: "AI predicts which frames and lenses will sell, optimizing inventory and reducing carrying costs.",
    impact: "20% Less Inventory"
  },
  {
    icon: ShoppingCart,
    title: "Smart Recommendations",
    description: "Personalized lens recommendations based on lifestyle, occupation, and visual needs.",
    impact: "60% More Add-ons"
  }
];

export function OpticalRetail() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            🛍️ Optical Retail Revolution
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transform Your Optical Department
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI doesn't just manage your optical inventory—it optimizes every aspect of the retail experience 
            to maximize revenue and patient satisfaction.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {retailFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <feature.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <Badge variant="outline" className="text-purple-600 border-purple-200">
                    {feature.impact}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">AI-Powered Frame Selection</CardTitle>
              <CardDescription>
                Watch how our AI analyzes patient preferences and facial features to recommend perfect frames
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <Eye className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">
                  Interactive demo showing AI frame recommendations based on:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Face shape analysis</li>
                  <li>• Prescription requirements</li>
                  <li>• Lifestyle preferences</li>
                  <li>• Style compatibility</li>
                </ul>
                <Button className="mt-4 w-full bg-purple-600 hover:bg-purple-700">
                  Try Frame Selection AI
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Revenue Optimization Dashboard</CardTitle>
              <CardDescription>
                Real-time insights into your optical performance and revenue opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Today's Capture Rate</span>
                  <Badge className="bg-green-600">78%</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">Average Transaction</span>
                  <Badge className="bg-blue-600">$485</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium">Revenue vs. Target</span>
                  <Badge className="bg-purple-600">+15%</Badge>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  View Full Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
