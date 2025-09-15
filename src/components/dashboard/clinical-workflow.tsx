"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Stethoscope, 
  FileText, 
  Clock, 
  CheckCircle,
  AlertTriangle,
  Users,
  Calendar,
  Eye,
  Brain,
  Activity
} from "lucide-react";

const workflowSteps = [
  {
    id: "checkin",
    name: "Patient Check-in",
    status: "completed" as const,
    duration: "2 min",
    aiAssistance: "Auto-populated insurance verification",
    icon: Users,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    id: "preliminary",
    name: "Preliminary Testing",
    status: "in-progress" as const,
    duration: "8 min",
    aiAssistance: "AI-guided visual acuity testing",
    icon: Eye,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    id: "examination",
    name: "Doctor Examination",
    status: "pending" as const,
    duration: "25 min",
    aiAssistance: "AI diagnostic suggestions based on symptoms",
    icon: Stethoscope,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    id: "diagnostics",
    name: "Diagnostic Imaging",
    status: "pending" as const,
    duration: "15 min",
    aiAssistance: "AI-powered image analysis and flagging",
    icon: FileText,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    id: "consultation",
    name: "Treatment Consultation",
    status: "pending" as const,
    duration: "10 min",
    aiAssistance: "Personalized treatment recommendations",
    icon: Brain,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    id: "checkout",
    name: "Checkout & Scheduling",
    status: "pending" as const,
    duration: "5 min",
    aiAssistance: "Automated follow-up scheduling",
    icon: Calendar,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50"
  }
];

const aiAlerts = [
  {
    type: "diagnostic",
    title: "Glaucoma Risk Detected",
    description: "Patient shows early signs of glaucoma. Recommend immediate OCT scan.",
    priority: "high" as const,
    patient: "Sarah Chen",
    confidence: "94%"
  },
  {
    type: "medication",
    title: "Drug Interaction Alert",
    description: "Current medication may interact with prescribed eye drops.",
    priority: "medium" as const,
    patient: "Michael Rodriguez",
    confidence: "87%"
  },
  {
    type: "followup",
    title: "Follow-up Required",
    description: "Patient needs 3-month follow-up for diabetic retinopathy monitoring.",
    priority: "low" as const,
    patient: "Emma Davis",
    confidence: "92%"
  }
];

const workflowMetrics = {
  avgVisitTime: "65 min",
  efficiency: "94%",
  aiAssistance: "87%",
  patientSatisfaction: "4.8/5",
  diagnosticAccuracy: "96%",
  followUpRate: "89%"
};

export function ClinicalWorkflow() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'in-progress': return <Activity className="h-5 w-5 text-blue-600 animate-pulse" />;
      case 'pending': return <Clock className="h-5 w-5 text-gray-400" />;
      default: return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-50 border-green-200';
      case 'in-progress': return 'bg-blue-50 border-blue-200';
      case 'pending': return 'bg-gray-50 border-gray-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Workflow Progress */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Activity className="h-5 w-5 text-blue-600" />
            Clinical Workflow Automation
          </CardTitle>
          <CardDescription>
            AI-powered patient journey optimization and automation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {workflowSteps.map((step) => (
              <div 
                key={step.id}
                className={`p-4 rounded-lg border-l-4 ${getStatusColor(step.status)}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${step.bgColor}`}>
                      <step.icon className={`h-4 w-4 ${step.color}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{step.name}</h4>
                      <p className="text-sm text-gray-600">Duration: {step.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(step.status)}
                    <Badge 
                      variant={step.status === "completed" ? "default" : step.status === "in-progress" ? "secondary" : "outline"}
                      className="text-xs"
                    >
                      {step.status === "completed" ? "Completed" : 
                       step.status === "in-progress" ? "In Progress" : "Pending"}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-600 ml-11">
                  <strong>AI Assistance:</strong> {step.aiAssistance}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Clinical Alerts */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            AI Clinical Alerts
          </CardTitle>
          <CardDescription>
            Real-time diagnostic insights and patient safety alerts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {aiAlerts.map((alert, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border-l-4 ${
                alert.priority === "high" 
                  ? "bg-red-50 border-red-400" 
                  : alert.priority === "medium"
                  ? "bg-yellow-50 border-yellow-400"
                  : "bg-blue-50 border-blue-400"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className={`h-5 w-5 ${
                    alert.priority === "high" 
                      ? "text-red-600" 
                      : alert.priority === "medium"
                      ? "text-yellow-600"
                      : "text-blue-600"
                  }`} />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{alert.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                    <p className="text-xs text-gray-500 mt-1">Patient: {alert.patient}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={alert.priority === "high" ? "destructive" : alert.priority === "medium" ? "default" : "secondary"}
                    className="text-xs mb-1"
                  >
                    {alert.priority}
                  </Badge>
                  <div className="text-xs text-gray-500">
                    {alert.confidence} confidence
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Workflow Metrics */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-blue-600" />
            Workflow Performance
          </CardTitle>
          <CardDescription>
            AI-optimized clinical efficiency metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{workflowMetrics.avgVisitTime}</div>
              <div className="text-sm text-gray-600">Avg Visit Time</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Activity className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">{workflowMetrics.efficiency}</div>
              <div className="text-sm text-gray-600">Efficiency</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">{workflowMetrics.aiAssistance}</div>
              <div className="text-sm text-gray-600">AI Assistance</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-600">{workflowMetrics.patientSatisfaction}</div>
              <div className="text-sm text-gray-600">Patient Satisfaction</div>
            </div>
            <div className="text-center p-4 bg-indigo-50 rounded-lg">
              <Eye className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-indigo-600">{workflowMetrics.diagnosticAccuracy}</div>
              <div className="text-sm text-gray-600">Diagnostic Accuracy</div>
            </div>
            <div className="text-center p-4 bg-cyan-50 rounded-lg">
              <Calendar className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-cyan-600">{workflowMetrics.followUpRate}</div>
              <div className="text-sm text-gray-600">Follow-up Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
