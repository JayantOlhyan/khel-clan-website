// src/components/ContactCTA.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ContactCTA() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`fixed bottom-8 left-8 flex justify-center pointer-events-none z-50 transition-all duration-300 ${
        hidden ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0 animate-fadeIn animation-delay-500'
      }`}
    >
      <Link
        to="/contact"
        className="bg-brand-lime text-brand-forest px-8 py-4 rounded-2xl font-heading font-black shadow-[0_10px_40px_rgba(200,249,2,0.3)] hover:shadow-[0_10px_50px_rgba(200,249,2,0.5)] transition-all pointer-events-auto hover:-translate-y-1 active:scale-95 flex items-center tracking-widest text-sm min-h-[48px]"
      >
        REACH OUT
      </Link>
    </section>
  );
}
