// src/components/HowItWorks.tsx
import React from 'react';
import { Calendar, User, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Calendar className="w-10 h-10 text-brand-primary" />, 
    title: "Discover Venues",
    description: "Browse our elite catalog and pick the pitch, court, or turf that fits your game.",
  },
  {
    icon: <User className="w-10 h-10 text-brand-primary" />,
    title: "Reserve Your Slot",
    description: "Secure your game time with a seamless booking experience and instant confirmation.",
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-brand-primary" />,
    title: "Capture the Glory",
    description: "Walk off the field with your personalized, AI-powered highlight reel ready to share.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-muted-green" id="how-it-works">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-black text-deep-black mb-16 animate-fadeIn">Step Onto the Pitch</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 animate-fadeIn" style={{ animationDelay: `${idx * 150}ms` }}>
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-body font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-deep-black/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
