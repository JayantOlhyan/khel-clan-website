// src/components/FAQPreview.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { faqs } from '../data/faqs';
import FAQItem from './FAQItem';

export default function FAQPreview() {
  const topFaqs = faqs.slice(0, 3);
  return (
    <section className="py-20 bg-white" id="faq-preview">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-black text-deep-black mb-12 text-center animate-fadeIn">
          Common Questions
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
