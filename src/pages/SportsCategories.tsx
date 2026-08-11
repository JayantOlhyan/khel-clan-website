import React, { useState } from 'react';
import { Search, MapPin, ChevronRight, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SportsCategories() {
  const [searchTerm, setSearchTerm] = useState('');

  const sports = [
    { name: "FOOTBALL", games: "45+", teams: "230+", img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800" },
    { name: "CRICKET", games: "32+", teams: "180+", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800" },
    { name: "BASKETBALL", games: "28+", teams: "120+", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800" },
    { name: "VOLLEYBALL", games: "15+", teams: "85+", img: "https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&q=80&w=800" },
    { name: "BADMINTON", games: "50+", teams: "300+", img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=800" },
    { name: "TENNIS", games: "12+", teams: "45+", img: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80&w=800" }
  ];

  const locations = [
    { name: "MUMBAI", games: "120+", img: "https://images.unsplash.com/photo-1522778523315-976451e59275?auto=format&fit=crop&q=80&w=600" },
    { name: "NEW DELHI", games: "95+", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=600" },
    { name: "BANGALORE", games: "150+", img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=600" },
    { name: "PUNE", games: "60+", img: "https://images.unsplash.com/photo-1566324209584-3bd3283287db?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black">
      
      {/* 1. HERO & SEARCH */}
      <section className="pt-32 pb-16 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="uppercase tracking-widest text-brand-lime font-bold text-xs mb-4">SPORTS DIRECTORY</div>
          <h1 className="font-heading font-black text-5xl md:text-7xl mb-12 leading-tight">
            ONE COMMUNITY.<br/>MANY SPORTS.
          </h1>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-[#0a1a12] border border-white/10 rounded-full p-2 flex items-center shadow-2xl">
             <div className="flex-grow flex items-center px-6">
               <Search className="text-gray-400 mr-4" size={24} />
               <input 
                 type="text" 
                 placeholder="Find a sport, team, or location..." 
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 className="w-full bg-transparent border-none text-white focus:ring-0 placeholder-gray-500 font-body text-lg h-12"
               />
             </div>
             <button className="bg-brand-lime text-[#05110a] px-8 h-12 rounded-full font-heading font-black hover:bg-white transition-colors">
               SEARCH
             </button>
          </div>
        </div>
      </section>

      {/* 2. BROWSE BY SPORT */}
      <section className="py-24 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-6">
            <h2 className="font-heading font-black text-3xl sm:text-4xl">BROWSE BY SPORT</h2>
            <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
              {['ALL SPORTS', 'TEAM SPORTS', 'RACKET SPORTS', 'FITNESS'].map((tab, i) => (
                <button key={i} className={`whitespace-nowrap px-6 py-2 rounded-full font-heading font-bold text-xs uppercase tracking-widest transition-colors ${i === 0 ? 'bg-brand-lime text-[#05110a]' : 'bg-[#0a1a12] border border-white/10 text-gray-400 hover:text-white'}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-autofit gap-6">
            {sports.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase())).map((sport, i) => (
              <Link to={`/discover?sport=${sport.name.toLowerCase()}`} key={i} className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#0a1a12] border border-white/10 hover:border-brand-lime/50 transition-colors">
                <img src={sport.img} alt={sport.name} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] via-[#05110a]/50 to-transparent"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="font-heading font-black text-3xl mb-4 group-hover:text-brand-lime transition-colors">{sport.name}</h3>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Trophy size={16} className="text-brand-lime" />
                      <span className="font-bold">{sport.games} <span className="font-normal text-xs uppercase tracking-widest text-gray-500">Games</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Users size={16} className="text-brand-lime" />
                      <span className="font-bold">{sport.teams} <span className="font-normal text-xs uppercase tracking-widest text-gray-500">Teams</span></span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. POPULAR LOCATIONS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase">POPULAR LOCATIONS</h2>
            <Link to="/discover" className="text-gray-400 hover:text-brand-lime transition-colors flex items-center gap-1 font-bold text-sm tracking-widest uppercase">
              View All <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.map((loc, i) => (
              <Link to={`/discover?location=${loc.name.toLowerCase()}`} key={i} className="group relative rounded-2xl overflow-hidden h-48 bg-[#0a1a12]">
                <img src={loc.img} alt={loc.name} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 group-hover:opacity-50 transition-all duration-500 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] to-transparent"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-xl mb-1">{loc.name}</h4>
                    <div className="flex items-center gap-1 text-xs font-bold text-brand-lime uppercase tracking-widest">
                      <MapPin size={12} /> {loc.games} Active Games
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
