"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Eye, Plus } from "lucide-react";

const appointments = [
  {
    time: "9:00 AM",
    patient: "Sarah Chen",
    type: "Comprehensive Exam",
    doctor: "Dr. Smith",
    status: "in-progress" as const,
    duration: "60 min"
  },
  {
    time: "10:30 AM",
    patient: "Michael Rodriguez",
    type: "Contact Lens Fitting",
    doctor: "Dr. Johnson",
    status: "scheduled" as const,
    duration: "45 min"
  },
  {
    time: "11:15 AM",
    patient: "Emma Davis",
    type: "Follow-up",
    doctor: "Dr. Williams",
    status: "scheduled" as const,
    duration: "30 min"
  },
  {
    time: "2:00 PM",
    patient: "James Wilson",
    type: "Emergency",
    doctor: "Dr. Smith",
    status: "urgent" as const,
    duration: "90 min"
  },
  {
    time: "3:30 PM",
    patient: "Lisa Thompson",
    type: "Optical Consultation",
    doctor: "Dr. Johnson",
    status: "scheduled" as const,
    duration: "45 min"
  }
];

export function AppointmentSchedule() {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              Today&apos;s Schedule
            </CardTitle>
            <CardDescription>
              Upcoming appointments and current status
            </CardDescription>
          </div>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Appointment
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {appointments.map((appointment, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border-l-4 ${
                appointment.status === "in-progress" 
                  ? "bg-green-50 border-green-400" 
                  : appointment.status === "urgent"
                  ? "bg-red-50 border-red-400"
                  : "bg-gray-50 border-gray-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="font-medium text-gray-900">{appointment.time}</span>
                  <Badge 
                    variant={
                      appointment.status === "in-progress" 
                        ? "default" 
                        : appointment.status === "urgent"
                        ? "destructive"
                        : "secondary"
                    }
                    className="text-xs"
                  >
                    {appointment.status === "in-progress" ? "In Progress" : 
                     appointment.status === "urgent" ? "Urgent" : "Scheduled"}
                  </Badge>
                </div>
                <span className="text-sm text-gray-500">{appointment.duration}</span>
              </div>
              
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-gray-400" />
                  <span className="font-medium text-gray-900">{appointment.patient}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{appointment.type}</span>
                </div>
              </div>
              
              <div className="mt-1 text-sm text-gray-500">
                with {appointment.doctor}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
