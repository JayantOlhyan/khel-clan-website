// src/components/ContactCTA.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactCTA() {
  return (
    <section className="fixed bottom-4 left-0 right-0 flex justify-center pointer-events-none">
      <Link
        to="/contact"
        className="bg-brand-accent text-white px-6 py-3 rounded-full font-body shadow-lg hover:bg-brand-secondary transition pointer-events-auto"
      >
        Contact Us
      </Link>
    </section>
  );
}
