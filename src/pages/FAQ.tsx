// src/pages/FAQ.tsx
import React from 'react';
import { faqs } from '../data/faqs';
import FAQItem from '../components/FAQItem';

export default function FAQ() {
  return (
    <div className="bg-muted-green min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-heading font-black text-deep-black mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-deep-black/60 font-body max-w-2xl mx-auto">
            Everything you need to know about booking, playing, and clips at KhelClan.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm backdrop-blur-sm border border-white animate-slideUp">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        
        <div className="mt-12 text-center text-deep-black/50 font-body">
          <p>Don't see your question? <a href="/contact" className="text-brand-primary font-bold hover:underline">Contact us directly</a>.</p>
        </div>
      </div>
    </div>
  );
}
