// src/components/GameCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { GamePayment } from '../store/useAppStore'; // type for game

interface Props {
  game: GamePayment;
}

export default function GameCard({ game }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 animate-fadeIn">
      <img src={game.img as string} alt={game.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-heading font-semibold mb-2">{game.title}</h3>
        <p className="text-sm text-deep-black/70 mb-2">{game.sport} • {game.location}</p>
        <p className="text-sm font-body font-medium mb-4">{game.date} @ {game.time}</p>
        <div className="flex items-center justify-between">
          <span className="text-brand-accent font-bold text-lg">₹{game.price}</span>
          <Link
            to={`/games/${game.id}`}
            className="bg-brand-primary text-white px-3 py-1 rounded hover:bg-brand-secondary transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
