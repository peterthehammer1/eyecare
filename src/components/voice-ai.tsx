"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, Phone, MessageCircle, Calendar, FileText, Shield } from "lucide-react";

const voiceFeatures = [
  {
    icon: Phone,
    title: "Natural Conversations",
    description: "Patients can book appointments, ask questions, and get care instructions through natural voice interactions.",
    example: "I need to schedule an eye exam for next week"
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI understands complex scheduling requests and finds optimal appointment times based on availability and patient needs.",
    example: "I need a comprehensive exam with dilation on a Tuesday morning"
  },
  {
    icon: FileText,
    title: "Prescription Management",
    description: "Voice agents can explain prescriptions, process refills, and provide detailed care instructions.",
    example: "Can you explain my new contact lens prescription?"
  },
  {
    icon: MessageCircle,
    title: "Multi-Channel Support",
    description: "Seamless integration across phone, chat, and website with consistent, intelligent responses.",
    example: "Same AI agent handles phone calls and website chat"
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Voice interactions are encrypted and secure, meeting all healthcare privacy requirements.",
    example: "End-to-end encryption for all conversations"
  },
  {
    icon: Mic,
    title: "Eyecare Specialized",
    description: "Trained specifically on ophthalmology and optometry terminology, procedures, and common patient questions.",
    example: "What&apos;s the difference between myopia and astigmatism?"
  }
];

export function VoiceAI() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            🎤 Powered by SightSync
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Voice AI That Understands Eyecare
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Transform patient interactions with AI voice agents trained specifically on eyecare terminology, 
            procedures, and common patient needs. Built on SightSync&apos;s advanced voice technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            {voiceFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <feature.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-3">
                    {feature.description}
                  </CardDescription>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <code className="text-sm text-gray-700 italic">
                      &ldquo;{feature.example}&rdquo;
                    </code>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="lg:pl-8">
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Try Our Voice AI</CardTitle>
                <CardDescription className="text-center">
                  Experience the future of patient communication
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Mic className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Voice Demo</h3>
                  <p className="text-gray-600 mb-4">
                    Click to start a conversation with our eyecare AI agent
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Mic className="mr-2 h-4 w-4" />
                    Start Voice Demo
                  </Button>
                </div>
                
                <div className="text-sm text-gray-500">
                  <p>• Trained on 100,000+ eyecare conversations</p>
                  <p>• Understands complex medical terminology</p>
                  <p>• Handles insurance and billing questions</p>
                  <p>• Available 24/7 for patient inquiries</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
