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
  Lightbulb
} from "lucide-react";

const insights = [
  {
    type: "revenue",
    title: "Revenue Optimization Opportunity",
    description: "AI detected 3 patients with high optical purchase probability. Recommend frame consultation.",
    impact: "Potential +$1,200",
    priority: "high" as const,
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    type: "efficiency",
    title: "Schedule Optimization",
    description: "Moving Dr. Johnson&apos;s 2:30 PM appointment to 3:15 PM could reduce wait times by 40%.",
    impact: "Save 12 min",
    priority: "medium" as const,
    icon: TrendingUp,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    type: "risk",
    title: "Patient Risk Alert",
    description: "Sarah Chen shows early signs of glaucoma progression. Recommend immediate follow-up.",
    impact: "High Priority",
    priority: "high" as const,
    icon: AlertTriangle,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    type: "prediction",
    title: "No-Show Prediction",
    description: "AI predicts 15% no-show rate for tomorrow&apos;s appointments. Consider overbooking.",
    impact: "3 patients",
    priority: "low" as const,
    icon: Users,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
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
