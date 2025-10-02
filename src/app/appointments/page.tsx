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
  AlertCircle
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
    insurance: "Blue Cross Blue Shield"
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
    insurance: "Aetna"
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
    insurance: "Cigna"
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
    insurance: "Medicare"
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
    insurance: "UnitedHealth"
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
            <h1 className="text-3xl font-bold text-gray-900">Appointment Management</h1>
            <p className="text-gray-600 mt-1">Schedule and manage patient appointments</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Schedule Appointment
          </Button>
        </div>

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
                <div
                  key={appointment.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        {appointment.patientName.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {appointment.patientName}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
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
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge className={statusColors[appointment.status as keyof typeof statusColors]}>
                          {getStatusIcon(appointment.status)}
                          <span className="ml-1">{appointment.status.replace('_', ' ')}</span>
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {appointment.appointmentType.replace('_', ' ')}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right text-sm text-gray-600">
                      <p className="font-medium">
                        {new Date(appointment.startTime).toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })} - {new Date(appointment.endTime).toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                      <p className="text-xs">{appointment.insurance}</p>
                    </div>
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
                          <XCircle className="h-4 w-4 mr-2" />
                          Cancel
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
