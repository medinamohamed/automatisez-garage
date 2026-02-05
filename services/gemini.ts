
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getAIDemoResponse(userInput: string, chatHistory: any[]) {
  const model = "gemini-3-flash-preview";
  
  const systemInstruction = `
    You are the AI assistant for "automatisez.ca", providing a professional, friendly automated receptionist service for a high-end auto shop called "Precision Auto MTL".
    Your goal is to handle incoming calls and book appointments.
    Tone: Professional, helpful, concise.
    Capabilities:
    1. Answer FAQs about services (oil changes, brakes, tires, engine work).
    2. Collect name, phone number, vehicle type, and desired appointment date.
    3. Always confirm details before saying "I've booked that for you."
    
    Current scenario: You are talking to a potential customer who just called "Precision Auto MTL". 
    Keep responses short (1-3 sentences) like a real phone conversation.
  `;

  try {
    const chat = ai.chats.create({
      model,
      config: {
        systemInstruction,
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      }
    });

    // Note: In a real implementation, we would pass historical messages.
    // For this demo, we'll just send the current message.
    const response = await chat.sendMessage({ message: userInput });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having a slight technical connection issue. Could you repeat that or would you like me to have an owner call you back?";
  }
}
