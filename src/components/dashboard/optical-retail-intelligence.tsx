"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, 
  ShoppingCart, 
  TrendingUp, 
  Star,
  Users,
  DollarSign,
  Target,
  Lightbulb,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const opticalInsights = [
  {
    type: "upsell",
    title: "High-Value Frame Opportunity",
    description: "Patient Sarah Chen has high purchase probability for premium frames. Recommend designer collection.",
    potentialRevenue: "$485",
    confidence: "94%",
    priority: "high" as const,
    icon: Eye,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    type: "lens",
    title: "Progressive Lens Upgrade",
    description: "Michael Rodriguez is eligible for premium progressive lenses. Showcase anti-fatigue benefits.",
    potentialRevenue: "$320",
    confidence: "87%",
    priority: "medium" as const,
    icon: Lightbulb,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    type: "accessories",
    title: "Accessory Bundle",
    description: "Emma Davis likely to purchase cleaning kit and case. Suggest complete care package.",
    potentialRevenue: "$85",
    confidence: "78%",
    priority: "low" as const,
    icon: ShoppingCart,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  }
];

const frameRecommendations = [
  {
    name: "Ray-Ban Aviator Classic",
    price: "$185",
    matchScore: 96,
    reason: "Perfect for oval face shape and professional style",
    image: "/api/placeholder/150/100"
  },
  {
    name: "Oakley Holbrook",
    price: "$165",
    matchScore: 89,
    reason: "Great for active lifestyle and UV protection",
    image: "/api/placeholder/150/100"
  },
  {
    name: "Warby Parker Finch",
    price: "$95",
    matchScore: 92,
    reason: "Trendy acetate frame with excellent fit",
    image: "/api/placeholder/150/100"
  }
];

const retailMetrics = {
  todayRevenue: "$2,450",
  captureRate: "78%",
  avgOrderValue: "$185",
  upsellSuccess: "34%",
  topSellingFrame: "Ray-Ban Aviator",
  conversionRate: "68%"
};

export function OpticalRetailIntelligence() {
  return (
    <div className="space-y-6">
      {/* Retail Performance Metrics */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-blue-600" />
            Optical Retail Performance
          </CardTitle>
          <CardDescription>
            AI-powered retail insights and optimization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">{retailMetrics.todayRevenue}</div>
              <div className="text-sm text-gray-600">Today&apos;s Revenue</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{retailMetrics.captureRate}</div>
              <div className="text-sm text-gray-600">Capture Rate</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">{retailMetrics.avgOrderValue}</div>
              <div className="text-sm text-gray-600">Avg Order Value</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Star className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-600">{retailMetrics.upsellSuccess}</div>
              <div className="text-sm text-gray-600">Upsell Success</div>
            </div>
            <div className="text-center p-4 bg-indigo-50 rounded-lg">
              <Eye className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-indigo-600">{retailMetrics.conversionRate}</div>
              <div className="text-sm text-gray-600">Conversion Rate</div>
            </div>
            <div className="text-center p-4 bg-cyan-50 rounded-lg">
              <Users className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-cyan-600">{retailMetrics.topSellingFrame}</div>
              <div className="text-sm text-gray-600">Top Seller</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Retail Insights */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-600" />
            AI Retail Insights
          </CardTitle>
          <CardDescription>
            Real-time recommendations to maximize optical sales
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {opticalInsights.map((insight, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border-l-4 ${insight.bgColor} ${insight.borderColor}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${insight.bgColor}`}>
                    <insight.icon className={`h-4 w-4 ${insight.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm">
                      {insight.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1">
                      {insight.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={insight.priority === "high" ? "destructive" : insight.priority === "medium" ? "default" : "secondary"}
                    className="text-xs mb-1"
                  >
                    {insight.potentialRevenue}
                  </Badge>
                  <div className="text-xs text-gray-500">
                    {insight.confidence} confidence
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Frame Recommendations */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Eye className="h-5 w-5 text-blue-600" />
            AI Frame Recommendations
          </CardTitle>
          <CardDescription>
            Personalized frame suggestions based on face shape and style preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {frameRecommendations.map((frame, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center">
                  <Eye className="h-6 w-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{frame.name}</h4>
                  <p className="text-sm text-gray-600">{frame.reason}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">{frame.price}</div>
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    {frame.matchScore}% match
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  View
                </Button>
              </div>
            ))}
          </div>
          
          <div className="pt-4 border-t border-gray-200 mt-4">
            <Button variant="outline" className="w-full">
              <ArrowRight className="h-4 w-4 mr-2" />
              View All Recommendations
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
