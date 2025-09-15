"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, 
  MicOff, 
  Phone, 
  PhoneOff, 
  Volume2, 
  VolumeX,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  Brain,
  Activity
} from "lucide-react";

interface CallSession {
  id: string;
  patientName: string;
  status: 'active' | 'waiting' | 'completed';
  duration: string;
  transcription: string;
  aiInsights: {
    intent: string;
    urgency: string;
    confidence: number;
  };
  routing: {
    department: string;
    priority: string;
    suggestedAgent: string;
  };
}

export function VoiceAIDashboard() {
  const [isListening, setIsListening] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const [currentTranscription, setCurrentTranscription] = useState("");
  const [callSessions, setCallSessions] = useState<CallSession[]>([
    {
      id: "call_001",
      patientName: "Sarah Johnson",
      status: "active",
      duration: "3:45",
      transcription: "I'd like to schedule an appointment for my annual eye exam. I'm experiencing some blurry vision lately.",
      aiInsights: {
        intent: "appointment_booking",
        urgency: "medium",
        confidence: 0.95
      },
      routing: {
        department: "appointments",
        priority: "normal",
        suggestedAgent: "Dr. Smith"
      }
    },
    {
      id: "call_002",
      patientName: "Michael Rodriguez",
      status: "waiting",
      duration: "1:23",
      transcription: "I need to refill my contact lens prescription and I'm having some discomfort.",
      aiInsights: {
        intent: "prescription_refill",
        urgency: "high",
        confidence: 0.88
      },
      routing: {
        department: "clinical",
        priority: "urgent",
        suggestedAgent: "Dr. Johnson"
      }
    },
    {
      id: "call_003",
      patientName: "Emma Davis",
      status: "completed",
      duration: "8:12",
      transcription: "Thank you for the excellent service. My new glasses are perfect!",
      aiInsights: {
        intent: "satisfaction_feedback",
        urgency: "low",
        confidence: 0.92
      },
      routing: {
        department: "feedback",
        priority: "low",
        suggestedAgent: "Completed"
      }
    }
  ]);

  const [aiMetrics] = useState({
    totalCalls: 47,
    avgResponseTime: "1.2s",
    transcriptionAccuracy: "96.8%",
    aiConfidence: "94.2%",
    callsResolved: 42,
    escalationRate: "8.5%"
  });

  const handleStartCall = () => {
    setIsCallActive(true);
    setIsListening(true);
    // Simulate real-time transcription
    setTimeout(() => {
      setCurrentTranscription("Hello, I'd like to schedule an appointment...");
    }, 1000);
  };

  const handleEndCall = () => {
    setIsCallActive(false);
    setIsListening(false);
    setCurrentTranscription("");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'waiting': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Voice AI Control Panel */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600" />
            Voice AI Control Center
          </CardTitle>
          <CardDescription>
            Real-time voice AI with intelligent call routing and transcription
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Call Controls */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Active Call</h3>
                <Badge variant={isCallActive ? "default" : "secondary"}>
                  {isCallActive ? "Live" : "Standby"}
                </Badge>
              </div>
              
              <div className="flex space-x-3">
                <Button
                  onClick={isCallActive ? handleEndCall : handleStartCall}
                  className={isCallActive ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}
                >
                  {isCallActive ? (
                    <>
                      <PhoneOff className="h-4 w-4 mr-2" />
                      End Call
                    </>
                  ) : (
                    <>
                      <Phone className="h-4 w-4 mr-2" />
                      Start Call
                    </>
                  )}
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => setIsListening(!isListening)}
                  disabled={!isCallActive}
                >
                  {isListening ? (
                    <>
                      <MicOff className="h-4 w-4 mr-2" />
                      Stop Listening
                    </>
                  ) : (
                    <>
                      <Mic className="h-4 w-4 mr-2" />
                      Start Listening
                    </>
                  )}
                </Button>
              </div>

              {/* Real-time Transcription */}
              {isCallActive && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm text-gray-700 mb-2">Live Transcription</h4>
                  <p className="text-sm text-gray-900">
                    {currentTranscription || "Listening for speech..."}
                  </p>
                  {isListening && (
                    <div className="flex items-center mt-2 text-green-600 text-xs">
                      <Activity className="h-3 w-3 mr-1 animate-pulse" />
                      AI Processing...
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* AI Metrics */}
            <div className="space-y-4">
              <h3 className="font-medium">AI Performance</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{aiMetrics.totalCalls}</div>
                  <div className="text-xs text-gray-600">Total Calls</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{aiMetrics.avgResponseTime}</div>
                  <div className="text-xs text-gray-600">Avg Response</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{aiMetrics.transcriptionAccuracy}</div>
                  <div className="text-xs text-gray-600">Accuracy</div>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{aiMetrics.aiConfidence}</div>
                  <div className="text-xs text-gray-600">AI Confidence</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Call Sessions */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-600" />
            Call Sessions
          </CardTitle>
          <CardDescription>
            Real-time call monitoring and AI-powered routing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {callSessions.map((session) => (
              <div 
                key={session.id}
                className={`p-4 rounded-lg border-l-4 ${getStatusColor(session.status)}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{session.patientName}</h4>
                      <p className="text-sm text-gray-600">Call ID: {session.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {session.duration}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getUrgencyColor(session.aiInsights.urgency)}`}
                    >
                      {session.aiInsights.urgency}
                    </Badge>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Transcription:</strong> "{session.transcription}"
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-gray-600">
                    <span>Intent: {session.aiInsights.intent}</span>
                    <span>Confidence: {(session.aiInsights.confidence * 100).toFixed(1)}%</span>
                    <span>Department: {session.routing.department}</span>
                    <span>Agent: {session.routing.suggestedAgent}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {session.status === 'active' && (
                      <div className="flex items-center text-green-600 text-xs">
                        <Activity className="h-3 w-3 mr-1 animate-pulse" />
                        Live
                      </div>
                    )}
                    {session.status === 'waiting' && (
                      <div className="flex items-center text-yellow-600 text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        Waiting
                      </div>
                    )}
                    {session.status === 'completed' && (
                      <div className="flex items-center text-gray-600 text-xs">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Completed
                      </div>
                    )}
                  </div>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
