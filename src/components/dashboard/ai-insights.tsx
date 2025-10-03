"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  DollarSign,
  ArrowRight,
  Lightbulb,
  Eye,
  Shield,
  Zap,
  Heart,
  Target,
  Activity
} from "lucide-react";

const insights = [
  {
    type: "disease",
    title: "Early Glaucoma Detection",
    description: "OCT scan analysis detected subtle RNFL thinning in patient Michael Rodriguez. Recommend immediate specialist consultation.",
    impact: "Critical",
    priority: "high" as const,
    icon: Eye,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    type: "revenue",
    title: "Optical Revenue Opportunity",
    description: "AI identified 4 patients with high frame purchase probability (89% confidence). Recommend premium frame consultation.",
    impact: "+$2,400",
    priority: "high" as const,
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    type: "treatment",
    title: "Treatment Response Prediction",
    description: "Patient Sarah Chen shows 94% probability of positive response to new glaucoma medication based on genetic markers.",
    impact: "High Success",
    priority: "medium" as const,
    icon: Shield,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    type: "efficiency",
    title: "Schedule Optimization",
    description: "AI recommends moving 3:00 PM appointment to 2:45 PM to reduce patient wait time by 35%.",
    impact: "Save 18 min",
    priority: "medium" as const,
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    type: "prediction",
    title: "No-Show Risk Alert",
    description: "AI predicts 22% no-show probability for tomorrow&apos;s appointments. Consider automated reminders.",
    impact: "5 patients",
    priority: "medium" as const,
    icon: Zap,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    type: "satisfaction",
    title: "Patient Satisfaction Boost",
    description: "AI suggests personalized follow-up calls for 3 patients who rated experience below 4 stars.",
    impact: "Improve NPS",
    priority: "low" as const,
    icon: Heart,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200"
  }
];

export function AIInsights() {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Brain className="h-5 w-5 text-purple-600" />
          AI Insights
        </CardTitle>
        <CardDescription>
          Real-time AI recommendations and predictions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-lg border-l-4 ${insight.bgColor} ${insight.borderColor} hover:shadow-md transition-shadow duration-200`}
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
              <Badge 
                variant={insight.priority === "high" ? "destructive" : insight.priority === "medium" ? "default" : "secondary"}
                className="text-xs"
              >
                {insight.impact}
              </Badge>
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t border-gray-200">
          <Button variant="outline" className="w-full text-sm">
            <Lightbulb className="h-4 w-4 mr-2" />
            View All AI Insights
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
