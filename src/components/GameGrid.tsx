// src/components/GameGrid.tsx
import React from 'react';
import { games } from '../data/games';
import GameCard from './GameCard';

export default function GameGrid() {
  return (
    <section className="py-24 bg-brand-neutral" id="games-grid">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-brand-forest font-bold text-xs uppercase tracking-widest bg-brand-lime/20 px-3 py-1 rounded-full">Available Now</span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-forest">Featured Games</h2>
          </div>
          <p className="text-gray-500 max-w-md">Discover top-rated sports venues and join competitive games in your city.</p>
        </div>
        
        <div className="grid grid-autofit gap-6 sm:gap-8">
          {games.map((game, idx) => (
            <div key={game.id} className="animate-fadeIn h-full" style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'both' }}>
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
