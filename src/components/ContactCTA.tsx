// src/components/ContactCTA.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactCTA() {
  return (
    <section className="fixed bottom-8 left-8 flex justify-center pointer-events-none z-50 animate-fadeIn animation-delay-500">
      <Link
        to="/contact"
        className="bg-brand-lime text-brand-forest px-8 py-4 rounded-2xl font-heading font-black shadow-[0_10px_40px_rgba(200,249,2,0.3)] hover:shadow-[0_10px_50px_rgba(200,249,2,0.5)] transition-all pointer-events-auto hover:-translate-y-1 active:scale-95 flex items-center tracking-widest text-sm"
      >
        REACH OUT
      </Link>
    </section>
  );
}
