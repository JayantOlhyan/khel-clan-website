import React from 'react';
import { Link } from 'react-router-dom';
import { useAcademyStore } from '../store/useAcademyStore';

export default function Academies() {
  const { academies } = useAcademyStore();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-heading font-black text-brand-forest mb-8">Academies</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl font-body">
          Find elite sports academies for comprehensive youth and adult development.
        </p>
        <div className="grid grid-autofit gap-6">
          {academies.map(a => (
            <Link key={a.id} to={`/academies/${a.slug}`} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h2 className="text-2xl font-bold text-brand-forest mb-2">{a.name}</h2>
              <p className="text-gray-500 text-sm mb-4">{a.location}</p>
              <div className="flex gap-2 mb-4">
                {a.sports.map(s => <span key={s} className="bg-brand-lime/20 text-brand-forest px-3 py-1 rounded font-bold text-xs uppercase tracking-wide">{s}</span>)}
              </div>
              <p className="text-gray-600 line-clamp-2 text-sm">{a.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
