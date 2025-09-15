import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { audioData, sessionId } = await request.json();
    
    // Simulate real-time transcription with Nucleus AI
    const mockTranscription = {
      text: "Hello, I'd like to schedule an appointment for my annual eye exam. I'm experiencing some blurry vision lately.",
      confidence: 0.95,
      language: "en-US",
      timestamp: new Date().toISOString(),
      sessionId: sessionId || 'session_' + Date.now()
    };

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      transcription: mockTranscription,
      aiInsights: {
        intent: "appointment_booking",
        urgency: "medium",
        suggestedActions: [
          "Schedule comprehensive eye exam",
          "Check for available slots with Dr. Smith",
          "Send appointment confirmation"
        ],
        patientInfo: {
          name: "Sarah Johnson",
          lastVisit: "2023-08-15",
          insurance: "Blue Cross Blue Shield",
          riskFactors: ["diabetes", "family_history_glaucoma"]
        }
      }
    });
  } catch (error) {
    console.error('Transcription error:', error);
    return NextResponse.json(
      { success: false, error: 'Transcription failed' },
      { status: 500 }
    );
  }
}
