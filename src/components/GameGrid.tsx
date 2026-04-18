// src/components/GameGrid.tsx
import React from 'react';
import { games } from '../data/games';
import GameCard from './GameCard';

export default function GameGrid() {
  return (
    <section className="py-12 bg-muted-green" id="games-grid">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-heading text-deep-black mb-8 text-center animate-fadeIn">Featured Games</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}
