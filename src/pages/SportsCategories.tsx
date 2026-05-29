import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Compass, Trophy, Users, Shield, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'football',
    name: 'Football',
    count: '14 Active Hubs',
    desc: '5v5 & 7v7 fast-paced turf wars. Professional grade goals and FIFA-approved turf grounds.',
    icon: Flame,
    color: 'from-emerald-500 to-brand-forest',
    bgLight: 'bg-emerald-50',
    intensity: 'High Intensity',
    players: '10-14 Players'
  },
  {
    id: 'basketball',
    name: 'Basketball',
    count: '8 Active Hubs',
    desc: 'Full-court pickup games and 3v3 half-court showdowns. Premium wooden and acrylic indoor courts.',
    icon: Compass,
    color: 'from-orange-500 to-amber-600',
    bgLight: 'bg-orange-50',
    intensity: 'Medium to High',
    players: '6-10 Players'
  },
  {
    id: 'cricket',
    name: 'Box Cricket',
    count: '22 Active Hubs',
    desc: 'High-energy box cricket with standard net setups, professional soft-balls, and umpire assistance.',
    icon: Trophy,
    color: 'from-blue-500 to-indigo-600',
    bgLight: 'bg-blue-50',
    intensity: 'Medium Intensity',
    players: '12-16 Players'
  },
  {
    id: 'badminton',
    name: 'Badminton',
    count: '16 Active Hubs',
    desc: 'Singles and doubles court matches. Synthetic non-slip mats with stellar shadowless LED lighting.',
    icon: Users,
    color: 'from-purple-500 to-pink-600',
    bgLight: 'bg-purple-50',
    intensity: 'Reflex & Speed',
    players: '2-4 Players'
  },
  {
    id: 'tennis',
    name: 'Lawn Tennis',
    count: '6 Active Hubs',
    desc: 'Clay and synthetic hard courts. Perfect for working on your volleys, serves, and baseline rallies.',
    icon: Shield,
    color: 'from-lime-500 to-green-600',
    bgLight: 'bg-lime-50',
    intensity: 'High Endurance',
    players: '2-4 Players'
  }
];

export default function SportsCategories() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-brand-neutral/40 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6 animate-fadeIn">
          <span className="px-4 py-1.5 rounded-full bg-brand-lime/20 text-brand-forest font-heading font-bold text-xs uppercase tracking-widest">
            Explore Arenas
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-brand-forest leading-tight">
            Sports <span className="text-brand-flame underline decoration-wavy underline-offset-8">Categories</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-body leading-relaxed">
            Choose your battlefield. From high-octane turf football matches to precise badminton rallies, we supply the premium gear and elite venues.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto pt-4">
            <input
              type="text"
              placeholder="Search your favorite sport..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-full border-2 border-black/10 outline-none font-body text-brand-forest shadow-sm focus:border-brand-lime transition-all"
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="bg-white rounded-[32px] border border-black/5 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Background Accent glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cat.color} opacity-5 group-hover:opacity-10 rounded-bl-full transition-all duration-300`}></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${cat.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} />
                    </div>
                    <span className="font-heading font-bold text-xs text-brand-forest/60 bg-black/5 px-3 py-1 rounded-full">
                      {cat.count}
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading font-black text-brand-forest mb-3 group-hover:text-brand-flame transition-colors">
                    {cat.name}
                  </h3>

                  <p className="text-gray-500 font-body text-sm leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-black/5">
                  <div className="flex justify-between text-xs font-heading font-bold text-brand-forest/70">
                    <span>⚡ {cat.intensity}</span>
                    <span>👥 {cat.players}</span>
                  </div>

                  <Link
                    to="/games"
                    className="w-full py-3.5 rounded-2xl bg-brand-forest hover:bg-brand-flame text-white font-heading font-bold text-sm flex items-center justify-center gap-2 group-hover:shadow-lg transition-all duration-300"
                  >
                    Explore Games <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
