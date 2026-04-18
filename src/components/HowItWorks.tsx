// src/components/HowItWorks.tsx
import React from 'react';
import { Calendar, User, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Calendar className="w-10 h-10 text-brand-primary" />, // choose date
    title: "Find a Game",
    description: "Browse our game catalog and pick the sport, location, and time that fits you.",
  },
  {
    icon: <User className="w-10 h-10 text-brand-primary" />, // book slot
    title: "Book & Pay",
    description: "Reserve your slot and complete a secure Razorpay payment in seconds.",
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-brand-primary" />, // get highlights
    title: "Get Highlights",
    description: "After the match, download your personalized highlight reel instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-muted-green" id="how-it-works">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-heading text-deep-black mb-8 animate-fadeIn">How It Works</h2>
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
