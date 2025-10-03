"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  Calendar,
  Clock,
  User,
  Eye,
  Phone,
  MapPin,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  AlertCircle,
  Brain,
  TrendingUp,
  Zap,
  Shield,
  Target,
  Activity,
  AlertTriangle,
  BarChart3,
  Filter,
  Settings
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// Mock data - will be replaced with real data from database
const mockAppointments = [
  {
    id: "1",
    patientName: "Sarah Chen",
    patientPhone: "(555) 123-4567",
    doctorName: "Dr. Smith",
    appointmentType: "COMPREHENSIVE_EXAM",
    startTime: "2024-01-20T09:00:00",
    endTime: "2024-01-20T10:00:00",
    status: "CONFIRMED",
    location: "Main Office",
    notes: "Annual eye exam with dilation",
    insurance: "Blue Cross Blue Shield",
    aiInsights: {
      noShowProbability: 12,
      optimalTimeSlot: "09:00-10:00",
      waitTimePrediction: "5 min",
      revenuePotential: 450,
      riskLevel: "Low",
      efficiencyScore: 94,
      patientSatisfactionPrediction: 4.8
    },
    patientHistory: {
      totalVisits: 8,
      noShowRate: 0.08,
      avgWaitTime: 6,
      lastVisit: "2023-12-15"
    }
  },
  {
    id: "2",
    patientName: "Michael Rodriguez",
    patientPhone: "(555) 234-5678",
    doctorName: "Dr. Johnson",
    appointmentType: "CONTACT_LENS_FITTING",
    startTime: "2024-01-20T10:30:00",
    endTime: "2024-01-20T11:30:00",
    status: "SCHEDULED",
    location: "Main Office",
    notes: "New contact lens fitting",
    insurance: "Aetna",
    aiInsights: {
      noShowProbability: 8,
      optimalTimeSlot: "10:30-11:30",
      waitTimePrediction: "3 min",
      revenuePotential: 320,
      riskLevel: "Low",
      efficiencyScore: 96,
      patientSatisfactionPrediction: 4.9
    },
    patientHistory: {
      totalVisits: 12,
      noShowRate: 0.05,
      avgWaitTime: 4,
      lastVisit: "2024-01-10"
    }
  },
  {
    id: "3",
    patientName: "Emily Johnson",
    patientPhone: "(555) 345-6789",
    doctorName: "Dr. Smith",
    appointmentType: "FOLLOW_UP",
    startTime: "2024-01-20T14:00:00",
    endTime: "2024-01-20T14:30:00",
    status: "IN_PROGRESS",
    location: "Main Office",
    notes: "Follow-up for myopia treatment",
    insurance: "Cigna",
    aiInsights: {
      noShowProbability: 5,
      optimalTimeSlot: "14:00-14:30",
      waitTimePrediction: "2 min",
      revenuePotential: 180,
      riskLevel: "Low",
      efficiencyScore: 98,
      patientSatisfactionPrediction: 4.9
    },
    patientHistory: {
      totalVisits: 15,
      noShowRate: 0.03,
      avgWaitTime: 3,
      lastVisit: "2023-12-20"
    }
  },
  {
    id: "4",
    patientName: "David Kim",
    patientPhone: "(555) 456-7890",
    doctorName: "Dr. Williams",
    appointmentType: "EMERGENCY",
    startTime: "2024-01-20T15:00:00",
    endTime: "2024-01-20T16:00:00",
    status: "SCHEDULED",
    location: "Main Office",
    notes: "Sudden vision changes",
    insurance: "Medicare",
    aiInsights: {
      noShowProbability: 25,
      optimalTimeSlot: "15:00-16:00",
      waitTimePrediction: "15 min",
      revenuePotential: 280,
      riskLevel: "High",
      efficiencyScore: 78,
      patientSatisfactionPrediction: 3.8
    },
    patientHistory: {
      totalVisits: 6,
      noShowRate: 0.18,
      avgWaitTime: 12,
      lastVisit: "2023-11-15"
    }
  },
  {
    id: "5",
    patientName: "Lisa Wang",
    patientPhone: "(555) 567-8901",
    doctorName: "Dr. Johnson",
    appointmentType: "DIAGNOSTIC_TESTING",
    startTime: "2024-01-20T16:30:00",
    endTime: "2024-01-20T17:30:00",
    status: "COMPLETED",
    location: "Main Office",
    notes: "OCT and visual field testing",
    insurance: "UnitedHealth",
    aiInsights: {
      noShowProbability: 3,
      optimalTimeSlot: "16:30-17:30",
      waitTimePrediction: "1 min",
      revenuePotential: 520,
      riskLevel: "Low",
      efficiencyScore: 99,
      patientSatisfactionPrediction: 5.0
    },
    patientHistory: {
      totalVisits: 20,
      noShowRate: 0.02,
      avgWaitTime: 2,
      lastVisit: "2024-01-20"
    }
  }
];

const statusColors = {
  SCHEDULED: "bg-blue-100 text-blue-800",
  CONFIRMED: "bg-green-100 text-green-800",
  IN_PROGRESS: "bg-yellow-100 text-yellow-800",
  COMPLETED: "bg-gray-100 text-gray-800",
  CANCELLED: "bg-red-100 text-red-800",
  NO_SHOW: "bg-orange-100 text-orange-800"
};

const statusIcons = {
  SCHEDULED: Clock,
  CONFIRMED: CheckCircle,
  IN_PROGRESS: AlertCircle,
  COMPLETED: CheckCircle,
  CANCELLED: XCircle,
  NO_SHOW: XCircle
};

export default function AppointmentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const filteredAppointments = mockAppointments.filter(appointment => {
    const matchesSearch = 
      appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.patientPhone.includes(searchTerm);
    
    const matchesFilter = filterStatus === "all" || appointment.status === filterStatus;
    
    const appointmentDate = new Date(appointment.startTime).toISOString().split('T')[0];
    const matchesDate = appointmentDate === selectedDate;
    
    return matchesSearch && matchesFilter && matchesDate;
  });

  const getStatusIcon = (status: string) => {
    const Icon = statusIcons[status as keyof typeof statusIcons];
    return Icon ? <Icon className="h-4 w-4" /> : null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">AI-Powered Appointment Management</h1>
            <p className="text-gray-600 mt-1">Smart scheduling with no-show prediction and optimization</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              AI Insights
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Schedule Appointment
            </Button>
          </div>
        </div>

        {/* AI Analytics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">No-Show Risk</p>
                  <p className="text-2xl font-bold text-red-600">
                    {mockAppointments.filter(a => a.aiInsights.noShowProbability >= 20).length}
                  </p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">AI Accuracy</p>
                  <p className="text-2xl font-bold text-purple-600">94%</p>
                </div>
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Wait Time</p>
                  <p className="text-2xl font-bold text-green-600">5.2 min</p>
                </div>
                <Clock className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Revenue Potential</p>
                  <p className="text-2xl font-bold text-blue-600">
                    ${mockAppointments.reduce((sum, a) => sum + a.aiInsights.revenuePotential, 0).toLocaleString()}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Scheduling Optimization Panel */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-600" />
              AI Scheduling Optimization
            </CardTitle>
            <CardDescription>
              Smart recommendations for optimal appointment scheduling
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-green-800">Optimal Slots</span>
                </div>
                <div className="text-sm text-green-700">
                  AI recommends moving 2 appointments to reduce wait times by 40%
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span className="font-medium text-blue-800">Risk Mitigation</span>
                </div>
                <div className="text-sm text-blue-700">
                  Send automated reminders to 1 high-risk patient
                </div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="h-4 w-4 text-purple-600" />
                  <span className="font-medium text-purple-800">Efficiency Boost</span>
                </div>
                <div className="text-sm text-purple-700">
                  Current efficiency: 93% (Target: 95%)
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search appointments by patient name, doctor, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-auto"
                />
                <Button
                  variant={filterStatus === "all" ? "default" : "outline"}
                  onClick={() => setFilterStatus("all")}
                  size="sm"
                >
                  All
                </Button>
                <Button
                  variant={filterStatus === "SCHEDULED" ? "default" : "outline"}
                  onClick={() => setFilterStatus("SCHEDULED")}
                  size="sm"
                >
                  Scheduled
                </Button>
                <Button
                  variant={filterStatus === "CONFIRMED" ? "default" : "outline"}
                  onClick={() => setFilterStatus("CONFIRMED")}
                  size="sm"
                >
                  Confirmed
                </Button>
                <Button
                  variant={filterStatus === "IN_PROGRESS" ? "default" : "outline"}
                  onClick={() => setFilterStatus("IN_PROGRESS")}
                  size="sm"
                >
                  In Progress
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Appointment Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Today&apos;s Appointments</p>
                  <p className="text-2xl font-bold text-gray-900">{mockAppointments.length}</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Confirmed</p>
                  <p className="text-2xl font-bold text-green-600">
                    {mockAppointments.filter(a => a.status === "CONFIRMED").length}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">In Progress</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {mockAppointments.filter(a => a.status === "IN_PROGRESS").length}
                  </p>
                </div>
                <AlertCircle className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-600">
                    {mockAppointments.filter(a => a.status === "COMPLETED").length}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-gray-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Appointments List */}
        <Card>
          <CardHeader>
            <CardTitle>Today&apos;s Schedule</CardTitle>
            <CardDescription>
              {filteredAppointments.length} appointments for {new Date(selectedDate).toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredAppointments.map((appointment) => (
                <Card key={appointment.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-semibold">
                            {appointment.patientName.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-gray-900">
                              {appointment.patientName}
                            </h3>
                            <Badge className={statusColors[appointment.status as keyof typeof statusColors]}>
                              {getStatusIcon(appointment.status)}
                              <span className="ml-1">{appointment.status.replace('_', ' ')}</span>
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                            <div className="space-y-1 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <User className="h-3 w-3" />
                                <span>{appointment.doctorName}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Phone className="h-3 w-3" />
                                <span>{appointment.patientPhone}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-3 w-3" />
                                <span>{appointment.location}</span>
                              </div>
                            </div>
                            
                            <div className="space-y-1 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" />
                                <span>
                                  {new Date(appointment.startTime).toLocaleTimeString([], { 
                                    hour: '2-digit', 
                                    minute: '2-digit' 
                                  })} - {new Date(appointment.endTime).toLocaleTimeString([], { 
                                    hour: '2-digit', 
                                    minute: '2-digit' 
                                  })}
                                </span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="h-3 w-3" />
                                <span>{appointment.appointmentType.replace('_', ' ')}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-3 w-3" />
                                <span>{appointment.patientHistory.totalVisits} visits</span>
                              </div>
                            </div>
                          </div>

                          {/* AI Insights Panel */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
                            <div className="p-2 bg-gray-50 rounded text-center">
                              <div className="text-xs text-gray-600">No-Show Risk</div>
                              <Badge 
                                variant={appointment.aiInsights.noShowProbability >= 20 ? "destructive" : 
                                        appointment.aiInsights.noShowProbability >= 10 ? "default" : "secondary"}
                                className="text-xs"
                              >
                                {appointment.aiInsights.noShowProbability}%
                              </Badge>
                            </div>
                            <div className="p-2 bg-gray-50 rounded text-center">
                              <div className="text-xs text-gray-600">Wait Time</div>
                              <div className="text-sm font-medium text-green-600">
                                {appointment.aiInsights.waitTimePrediction}
                              </div>
                            </div>
                            <div className="p-2 bg-gray-50 rounded text-center">
                              <div className="text-xs text-gray-600">Revenue</div>
                              <div className="text-sm font-medium text-blue-600">
                                ${appointment.aiInsights.revenuePotential}
                              </div>
                            </div>
                            <div className="p-2 bg-gray-50 rounded text-center">
                              <div className="text-xs text-gray-600">Efficiency</div>
                              <div className="text-sm font-medium text-purple-600">
                                {appointment.aiInsights.efficiencyScore}%
                              </div>
                            </div>
                          </div>

                          {/* Patient History */}
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>No-show rate: {(appointment.patientHistory.noShowRate * 100).toFixed(1)}%</span>
                            <span>Avg wait: {appointment.patientHistory.avgWaitTime} min</span>
                            <span>Last visit: {new Date(appointment.patientHistory.lastVisit).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Calendar className="h-4 w-4 mr-2" />
                              Reschedule
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Mark Complete
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Brain className="h-4 w-4 mr-2" />
                              AI Analysis
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <XCircle className="h-4 w-4 mr-2" />
                              Cancel
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
