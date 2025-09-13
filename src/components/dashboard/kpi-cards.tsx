"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Users, 
  Calendar, 
  Eye, 
  TrendingUp, 
  TrendingDown,
  Activity,
  Target
} from "lucide-react";

const kpiData = [
  {
    title: "Today's Revenue",
    value: "$12,450",
    change: "+18.2%",
    changeType: "positive" as const,
    icon: DollarSign,
    description: "vs yesterday",
    color: "text-green-600"
  },
  {
    title: "Patients Today",
    value: "47",
    change: "+12.5%",
    changeType: "positive" as const,
    icon: Users,
    description: "vs yesterday",
    color: "text-blue-600"
  },
  {
    title: "Appointments",
    value: "23",
    change: "-2.1%",
    changeType: "negative" as const,
    icon: Calendar,
    description: "remaining today",
    color: "text-orange-600"
  },
  {
    title: "Optical Capture",
    value: "78%",
    change: "+5.3%",
    changeType: "positive" as const,
    icon: Eye,
    description: "vs last week",
    color: "text-purple-600"
  },
  {
    title: "AI Predictions",
    value: "94%",
    change: "+2.1%",
    changeType: "positive" as const,
    icon: Activity,
    description: "accuracy rate",
    color: "text-indigo-600"
  },
  {
    title: "Revenue Target",
    value: "87%",
    change: "+12%",
    changeType: "positive" as const,
    icon: Target,
    description: "of monthly goal",
    color: "text-emerald-600"
  }
];

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {kpiData.map((kpi, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {kpi.title}
            </CardTitle>
            <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-gray-900">
                {kpi.value}
              </div>
              <Badge 
                variant={kpi.changeType === "positive" ? "default" : "destructive"}
                className={`text-xs ${
                  kpi.changeType === "positive" 
                    ? "bg-green-100 text-green-800 hover:bg-green-200" 
                    : "bg-red-100 text-red-800 hover:bg-red-200"
                }`}
              >
                {kpi.changeType === "positive" ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {kpi.change}
              </Badge>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {kpi.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
