// src/components/GameCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import type { GamePayment } from '../store/useAppStore';
import { MapPin, Clock, Star, ArrowUpRight } from 'lucide-react';

interface Props {
  game: GamePayment;
}

export default function GameCard({ game }: Props) {
  return (
    <div className="bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
      {/* Image Area */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={game.img || "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80"} 
          alt={game.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-brand-lime text-brand-forest px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
          {game.sport}
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-brand-forest px-2 py-1 rounded-lg text-xs font-bold flex items-center">
          <Star size={12} className="text-yellow-500 fill-yellow-500 mr-1" /> 4.9
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-heading font-black text-xl text-brand-forest truncate pr-2">{game.title}</h3>
          <span className="text-lg font-black text-brand-forest">₹{game.price}</span>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin size={14} className="mr-2 text-brand-lime" />
            <span className="truncate">{game.location}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock size={14} className="mr-2 text-brand-lime" />
            <span>Evening Slots Available</span>
          </div>
        </div>

        <Link 
          to={`/games/${game.id}`}
          className="w-full bg-brand-forest text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center hover:bg-black transition group/btn"
        >
          Book Now 
          <ArrowUpRight size={16} className="ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
