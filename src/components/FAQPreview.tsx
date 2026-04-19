// src/components/FAQPreview.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { faqs } from '../data/faqs';
import FAQItem from './FAQItem';

export default function FAQPreview() {
  const topFaqs = faqs.slice(0, 3);
  return (
    <section className="py-24 bg-white" id="faq-preview">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-forest mb-16 text-center animate-fadeIn">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2 mb-12 animate-slideUp">
          {topFaqs.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/faq"
            className="inline-block text-brand-primary font-body font-bold hover:underline transition"
          >
            View all FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}
