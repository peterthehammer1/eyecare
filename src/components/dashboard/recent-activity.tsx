"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, User, Calendar, Eye, DollarSign, AlertCircle } from "lucide-react";

const activities = [
  {
    time: "2 minutes ago",
    type: "appointment",
    description: "Dr. Smith completed comprehensive exam for Sarah Chen",
    icon: Calendar,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    time: "5 minutes ago",
    type: "revenue",
    description: "Optical sale completed: $485 - Progressive lenses",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    time: "8 minutes ago",
    type: "patient",
    description: "New patient registration: Michael Rodriguez",
    icon: User,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    time: "12 minutes ago",
    type: "ai",
    description: "AI detected high glaucoma risk in Emma Davis",
    icon: AlertCircle,
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    time: "15 minutes ago",
    type: "equipment",
    description: "OCT scan completed for James Wilson",
    icon: Eye,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    time: "18 minutes ago",
    type: "appointment",
    description: "Appointment rescheduled: Lisa Thompson to 3:30 PM",
    icon: Calendar,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  }
];

export function RecentActivity() {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Activity className="h-5 w-5 text-blue-600" />
          Recent Activity
        </CardTitle>
        <CardDescription>
          Live feed of clinic activities and AI insights
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                <activity.icon className={`h-4 w-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">{activity.description}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
              <Badge variant="outline" className="text-xs">
                {activity.type}
              </Badge>
            </div>
          ))}
        </div>
        
        <div className="pt-4 border-t border-gray-200 mt-4">
          <div className="text-center">
            <Badge variant="secondary" className="text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Live Updates
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
