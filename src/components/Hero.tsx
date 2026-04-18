// src/components/Hero.tsx
import React from 'react';
import { Link } from 'react-router-dom';
// Import generated hero banner image (artifact path)
import heroImg from '/Users/jayantolhyan/.gemini/antigravity/brain/b12dc062-e79a-45c7-a6de-d2c293931980/hero_banner_1776481821937.png';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      <img src={heroImg} alt="Hero banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-brand-primary/30 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl md:text-6xl font-heading text-white mb-4 animate-fadeIn">
          Play. Compete. Capture.
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-6 animate-fadeIn animation-delay-200">
          Find games, book slots, and get your highlights instantly.
        </p>
        <Link
          to="/games"
          className="bg-brand-accent text-white px-6 py-3 rounded-full font-body hover:bg-brand-secondary transition"
        >
          Browse Games
        </Link>
      </div>
    </section>
  );
}
