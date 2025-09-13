"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, CheckCircle, AlertCircle } from "lucide-react";

const flowData = [
  {
    stage: "Waiting Room",
    count: 8,
    status: "normal" as const,
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    stage: "In Examination",
    count: 5,
    status: "normal" as const,
    icon: Clock,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    stage: "Optical Consultation",
    count: 3,
    status: "normal" as const,
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    stage: "Checkout",
    count: 2,
    status: "normal" as const,
    icon: AlertCircle,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  }
];

const waitTimes = [
  { doctor: "Dr. Smith", avgWait: "8 min", patients: 12 },
  { doctor: "Dr. Johnson", avgWait: "5 min", patients: 8 },
  { doctor: "Dr. Williams", avgWait: "12 min", patients: 15 }
];

export function PatientFlow() {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-600" />
          Patient Flow
        </CardTitle>
        <CardDescription>
          Real-time patient status and wait times
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Flow Stages */}
        <div className="space-y-3">
          {flowData.map((stage, index) => (
            <div 
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg border-l-4 ${stage.bgColor} ${stage.borderColor}`}
            >
              <div className="flex items-center space-x-3">
                <stage.icon className={`h-5 w-5 ${stage.color}`} />
                <span className="font-medium text-gray-900">{stage.stage}</span>
              </div>
              <Badge variant="outline" className="text-lg font-bold">
                {stage.count}
              </Badge>
            </div>
          ))}
        </div>

        {/* Wait Times by Doctor */}
        <div className="pt-4 border-t border-gray-200">
          <h4 className="font-medium text-gray-900 mb-3">Average Wait Times</h4>
          <div className="space-y-2">
            {waitTimes.map((doctor, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{doctor.doctor}</span>
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant={doctor.avgWait === "12 min" ? "destructive" : "secondary"}
                    className="text-xs"
                  >
                    {doctor.avgWait}
                  </Badge>
                  <span className="text-gray-500">({doctor.patients} patients)</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="pt-4 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">18</div>
              <div className="text-xs text-gray-500">Total Patients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">7.2 min</div>
              <div className="text-xs text-gray-500">Avg Wait Time</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
