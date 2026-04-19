// src/pages/FAQ.tsx
import React from 'react';
import { faqs } from '../data/faqs';
import FAQItem from '../components/FAQItem';

export default function FAQ() {
  return (
    <div className="bg-muted-green min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-brand-forest mb-6">
            Player Support
          </h1>
          <p className="text-xl text-gray-500 font-body max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about booking, playing, and capturing the glory at KhelClan.
          </p>
        </div>
        
        <div className="bg-white rounded-[32px] p-10 shadow-xl border border-gray-100 animate-slideUp">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center text-gray-500 font-body">
          <p className="text-lg">Don't see your question? <a href="/contact" className="text-brand-forest font-black hover:text-brand-lime transition underline underline-offset-4 decoration-brand-lime/30">Connect with us directly</a>.</p>
        </div>
      </div>
    </div>
  );
}
