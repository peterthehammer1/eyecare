"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  Brain, 
  Target,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  PieChart,
  Activity,
  DollarSign,
  Users,
  Calendar,
  Eye,
  Lightbulb,
  ArrowRight
} from "lucide-react";

interface RevenueForecast {
  currentMonth: {
    actual: number;
    predicted: number;
    confidence: number;
    trend: string;
  };
  nextMonth: {
    predicted: number;
    confidence: number;
    factors: string[];
  };
  nextQuarter: {
    predicted: number;
    confidence: number;
    breakdown: {
      examinations: number;
      optical: number;
      procedures: number;
    };
  };
  nextYear: {
    predicted: number;
    confidence: number;
    growthRate: number;
    keyDrivers: string[];
  };
  aiInsights: {
    recommendations: string[];
    risks: string[];
    opportunities: string[];
  };
}

interface NoShowPrediction {
  appointmentId: string;
  patientName: string;
  appointmentTime: string;
  noShowProbability: number;
  confidence: number;
  riskLevel: string;
  riskFactors: any;
  recommendations: string[];
}

export function AdvancedAnalytics() {
  const [revenueForecast, setRevenueForecast] = useState<RevenueForecast | null>(null);
  const [noShowPredictions, setNoShowPredictions] = useState<NoShowPrediction[]>([]);
  const [diseaseProgression, setDiseaseProgression] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API calls
    const loadAnalytics = async () => {
      setLoading(true);
      
      // Simulate revenue forecast
      setTimeout(() => {
        setRevenueForecast({
          currentMonth: {
            actual: 125000,
            predicted: 128500,
            confidence: 0.95,
            trend: "increasing"
          },
          nextMonth: {
            predicted: 142000,
            confidence: 0.92,
            factors: [
              "Seasonal increase in eye exams (+15%)",
              "New optical products launch (+8%)",
              "Insurance coverage changes (+3%)"
            ]
          },
          nextQuarter: {
            predicted: 425000,
            confidence: 0.88,
            breakdown: {
              examinations: 180000,
              optical: 195000,
              procedures: 50000
            }
          },
          nextYear: {
            predicted: 1650000,
            confidence: 0.85,
            growthRate: 0.12,
            keyDrivers: [
              "Patient volume increase: +18%",
              "Average transaction value: +8%",
              "Optical capture rate: +12%",
              "New service lines: +5%"
            ]
          },
          aiInsights: {
            recommendations: [
              "Focus on optical sales - highest growth potential",
              "Schedule more comprehensive exams in Q2",
              "Consider expanding telemedicine services",
              "Optimize appointment scheduling for peak hours"
            ],
            risks: [
              "Economic downturn could reduce elective procedures",
              "Insurance changes may affect reimbursement",
              "Competition from online retailers"
            ],
            opportunities: [
              "Diabetic retinopathy screening program",
              "Premium lens upgrade initiative",
              "Senior care package development"
            ]
          }
        });
      }, 1000);

      // Simulate no-show predictions
      setTimeout(() => {
        setNoShowPredictions([
          {
            appointmentId: "apt_001",
            patientName: "Sarah Chen",
            appointmentTime: "9:00 AM",
            noShowProbability: 0.75,
            confidence: 0.90,
            riskLevel: "high",
            riskFactors: { weather: "high", dayOfWeek: "high" },
            recommendations: ["Send reminder 24 hours before", "Call patient to confirm"]
          },
          {
            appointmentId: "apt_002",
            patientName: "Michael Rodriguez",
            appointmentTime: "2:30 PM",
            noShowProbability: 0.35,
            confidence: 0.90,
            riskLevel: "medium",
            riskFactors: { weather: "low", dayOfWeek: "low" },
            recommendations: ["Send text reminder", "Confirm appointment details"]
          },
          {
            appointmentId: "apt_003",
            patientName: "Emma Davis",
            appointmentTime: "4:15 PM",
            noShowProbability: 0.15,
            confidence: 0.90,
            riskLevel: "low",
            riskFactors: { weather: "low", dayOfWeek: "low" },
            recommendations: ["Standard reminder process"]
          }
        ]);
      }, 1500);

      // Simulate disease progression
      setTimeout(() => {
        setDiseaseProgression({
          glaucoma: {
            currentStage: "early",
            progressionRate: 0.15,
            predictions: {
              next6Months: { stage: "early", confidence: 0.85 },
              nextYear: { stage: "moderate", confidence: 0.72 }
            }
          },
          diabetic_retinopathy: {
            currentStage: "mild",
            progressionRate: 0.22,
            predictions: {
              next6Months: { stage: "mild", confidence: 0.88 },
              nextYear: { stage: "moderate", confidence: 0.75 }
            }
          }
        });
        setLoading(false);
      }, 2000);
    };

    loadAnalytics();
  }, []);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="p-8">
            <div className="flex items-center justify-center">
              <Activity className="h-8 w-8 animate-spin text-blue-600 mr-3" />
              <span className="text-lg">Loading AI Analytics...</span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Revenue Forecasting */}
      {revenueForecast && (
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-green-600" />
              AI Revenue Forecasting
            </CardTitle>
            <CardDescription>
              Predictive revenue analysis with 95% accuracy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">
                  ${(revenueForecast.currentMonth.actual / 1000).toFixed(0)}k
                </div>
                <div className="text-sm text-gray-600">Current Month</div>
                <div className="text-xs text-green-600 mt-1">
                  +${((revenueForecast.currentMonth.predicted - revenueForecast.currentMonth.actual) / 1000).toFixed(0)}k predicted
                </div>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600">
                  ${(revenueForecast.nextMonth.predicted / 1000).toFixed(0)}k
                </div>
                <div className="text-sm text-gray-600">Next Month</div>
                <div className="text-xs text-gray-500 mt-1">
                  {(revenueForecast.nextMonth.confidence * 100).toFixed(0)}% confidence
                </div>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">
                  ${(revenueForecast.nextQuarter.predicted / 1000).toFixed(0)}k
                </div>
                <div className="text-sm text-gray-600">Next Quarter</div>
                <div className="text-xs text-gray-500 mt-1">
                  {(revenueForecast.nextQuarter.confidence * 100).toFixed(0)}% confidence
                </div>
              </div>
              
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600">
                  ${(revenueForecast.nextYear.predicted / 1000000).toFixed(1)}M
                </div>
                <div className="text-sm text-gray-600">Next Year</div>
                <div className="text-xs text-gray-500 mt-1">
                  +{(revenueForecast.nextYear.growthRate * 100).toFixed(0)}% growth
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Recommendations
                </h4>
                <ul className="text-sm text-green-700 space-y-1">
                  {revenueForecast.aiInsights.recommendations.map((rec, index) => (
                    <li key={index}>• {rec}</li>
                  ))}
                </ul>
              </div>
              
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Risks
                </h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  {revenueForecast.aiInsights.risks.map((risk, index) => (
                    <li key={index}>• {risk}</li>
                  ))}
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Opportunities
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  {revenueForecast.aiInsights.opportunities.map((opp, index) => (
                    <li key={index}>• {opp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* No-Show Predictions */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Calendar className="h-6 w-6 text-blue-600" />
            No-Show Predictions
          </CardTitle>
          <CardDescription>
            AI-powered appointment risk analysis with 90% accuracy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {noShowPredictions.map((prediction) => (
              <div 
                key={prediction.appointmentId}
                className={`p-4 rounded-lg border-l-4 ${getRiskColor(prediction.riskLevel)}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{prediction.patientName}</h4>
                      <p className="text-sm text-gray-600">{prediction.appointmentTime}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={prediction.riskLevel === "high" ? "destructive" : prediction.riskLevel === "medium" ? "default" : "secondary"}
                      className="text-sm"
                    >
                      {(prediction.noShowProbability * 100).toFixed(0)}% risk
                    </Badge>
                    <div className="text-xs text-gray-500 mt-1">
                      {(prediction.confidence * 100).toFixed(0)}% confidence
                    </div>
                  </div>
                </div>
                
                <div className="mt-3">
                  <h5 className="font-medium text-sm text-gray-700 mb-1">Recommendations:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {prediction.recommendations.map((rec, index) => (
                      <li key={index}>• {rec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Disease Progression Modeling */}
      {diseaseProgression && (
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <Eye className="h-6 w-6 text-purple-600" />
              Disease Progression Modeling
            </CardTitle>
            <CardDescription>
              AI-powered disease progression predictions for better patient care
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(diseaseProgression).map(([condition, data]: [string, any]) => (
                <div key={condition} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 capitalize mb-3">
                    {condition.replace('_', ' ')} Progression
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Current Stage:</span>
                      <Badge variant="outline" className="text-xs">
                        {data.currentStage}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Progression Rate:</span>
                      <span className="text-sm font-medium">
                        {(data.progressionRate * 100).toFixed(1)}% per year
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <h5 className="font-medium text-sm text-gray-700">Predictions:</h5>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>6 months:</span>
                          <span className="font-medium">{data.predictions.next6Months.stage}</span>
                          <span className="text-gray-500">
                            ({(data.predictions.next6Months.confidence * 100).toFixed(0)}%)
                          </span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>1 year:</span>
                          <span className="font-medium">{data.predictions.nextYear.stage}</span>
                          <span className="text-gray-500">
                            ({(data.predictions.nextYear.confidence * 100).toFixed(0)}%)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* AI Performance Metrics */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Brain className="h-6 w-6 text-indigo-600" />
            AI Performance Metrics
          </CardTitle>
          <CardDescription>
            Real-time AI model performance and accuracy metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">95%</div>
              <div className="text-sm text-gray-600">Revenue Forecast Accuracy</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">90%</div>
              <div className="text-sm text-gray-600">No-Show Prediction</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">88%</div>
              <div className="text-sm text-gray-600">Disease Progression</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600">92%</div>
              <div className="text-sm text-gray-600">Overall AI Accuracy</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
