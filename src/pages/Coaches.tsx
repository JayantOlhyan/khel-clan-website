import React from 'react';
import { Link } from 'react-router-dom';
import { useCoachStore } from '../store/useCoachStore';
import { Star } from 'lucide-react';

export default function Coaches() {
  const { coaches } = useCoachStore();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-heading font-black text-brand-forest mb-8">Coaches</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl font-body">
          Elevate your game with top-tier coaches in your area.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {coaches.map(c => (
            <Link key={c.id} to={`/coaches/${c.username}`} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-brand-lime/20 text-brand-forest px-3 py-1 rounded font-bold text-xs uppercase tracking-wide">{c.sport}</span>
                <span className="flex items-center gap-1 text-amber-500 font-bold text-sm"><Star size={14} fill="currentColor"/> {c.rating}</span>
              </div>
              <h2 className="text-xl font-bold text-brand-forest mb-1">{c.name}</h2>
              <p className="text-gray-500 text-sm mb-4">{c.location} • {c.experience}</p>
              <p className="text-brand-forest font-bold mb-4">{c.hourlyRate}</p>
              <p className="text-gray-600 line-clamp-2 text-sm">{c.bio}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
