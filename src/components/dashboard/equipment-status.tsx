"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, AlertTriangle, CheckCircle, Clock } from "lucide-react";

const equipment = [
  {
    name: "OCT Scanner",
    status: "active" as const,
    lastUsed: "2 min ago",
    efficiency: "95%",
    nextMaintenance: "30 days"
  },
  {
    name: "Visual Field Analyzer",
    status: "active" as const,
    lastUsed: "15 min ago",
    efficiency: "88%",
    nextMaintenance: "45 days"
  },
  {
    name: "Autorefractor",
    status: "maintenance" as const,
    lastUsed: "1 hour ago",
    efficiency: "92%",
    nextMaintenance: "In Progress"
  },
  {
    name: "Fundus Camera",
    status: "active" as const,
    lastUsed: "5 min ago",
    efficiency: "98%",
    nextMaintenance: "60 days"
  }
];

export function EquipmentStatus() {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Activity className="h-5 w-5 text-blue-600" />
          Equipment Status
        </CardTitle>
        <CardDescription>
          Real-time equipment monitoring and efficiency
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {equipment.map((item, index) => (
            <div 
              key={index}
              className={`p-3 rounded-lg border-l-4 ${
                item.status === "active" 
                  ? "bg-green-50 border-green-400" 
                  : "bg-orange-50 border-orange-400"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {item.status === "active" ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-orange-600" />
                  )}
                  <span className="font-medium text-gray-900">{item.name}</span>
                </div>
                <Badge 
                  variant={item.status === "active" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {item.status === "active" ? "Active" : "Maintenance"}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Last Used:</span>
                  <span className="ml-1 text-gray-900">{item.lastUsed}</span>
                </div>
                <div>
                  <span className="text-gray-500">Efficiency:</span>
                  <span className="ml-1 text-gray-900">{item.efficiency}</span>
                </div>
              </div>
              
              <div className="mt-2 text-sm">
                <span className="text-gray-500">Next Maintenance:</span>
                <span className="ml-1 text-gray-900">{item.nextMaintenance}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="pt-4 border-t border-gray-200 mt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Overall Efficiency</span>
            <div className="flex items-center space-x-2">
              <div className="w-16 bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "93%" }}></div>
              </div>
              <span className="font-medium text-gray-900">93%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
