import React, { useState } from 'react';
import { Search, MapPin, Calendar, Clock, Filter, CheckCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Discover() {
  const [activeTab, setActiveTab] = useState('GAMES');

  const games = [
    { title: "Weekend Football 5v5", sport: "FOOTBALL", location: "Andheri Sports Complex", date: "Today", time: "18:00", spots: 2, price: "₹250", img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=400" },
    { title: "Corporate Cricket League Practice", sport: "CRICKET", location: "Bandra Kurla Complex", date: "Tomorrow", time: "07:00", spots: 5, price: "₹150", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=400" },
    { title: "Open Court Basketball", sport: "BASKETBALL", location: "Juhu Beach Courts", date: "Tomorrow", time: "17:30", spots: 4, price: "Free", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=400" },
    { title: "Sunday Morning Badminton", sport: "BADMINTON", location: "Goregaon Sports Club", date: "Sunday", time: "08:00", spots: 1, price: "₹200", img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black pt-20">
      
      {/* 1. HERO / SEARCH BANNER */}
      <section className="relative py-12 border-b border-white/10">
        <div className="absolute inset-0 z-0">
           <img src="https://images.unsplash.com/photo-1574629810360-7efbc18974bf?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-10" alt="bg" />
           <div className="absolute inset-0 bg-gradient-to-b from-[#05110a] via-[#05110a]/90 to-[#05110a]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-heading font-black text-4xl md:text-5xl mb-8">DISCOVER YOUR NEXT GAME</h1>
          
          <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-4 flex flex-col md:flex-row gap-4 max-w-5xl mx-auto shadow-2xl">
             <div className="flex-1 flex items-center bg-[#05110a] rounded-xl px-4 h-14 border border-white/5 focus-within:border-brand-lime/50 transition-colors">
               <Search className="text-gray-400 mr-3" size={20} />
               <input type="text" placeholder="Sport (e.g. Football)" className="w-full bg-transparent border-none text-white focus:ring-0 placeholder-gray-600" />
             </div>
             <div className="flex-1 flex items-center bg-[#05110a] rounded-xl px-4 h-14 border border-white/5 focus-within:border-brand-lime/50 transition-colors">
               <MapPin className="text-gray-400 mr-3" size={20} />
               <input type="text" placeholder="Location" className="w-full bg-transparent border-none text-white focus:ring-0 placeholder-gray-600" />
             </div>
             <div className="flex-1 flex items-center bg-[#05110a] rounded-xl px-4 h-14 border border-white/5 focus-within:border-brand-lime/50 transition-colors">
               <Calendar className="text-gray-400 mr-3" size={20} />
               <input type="text" placeholder="Date & Time" className="w-full bg-transparent border-none text-white focus:ring-0 placeholder-gray-600" />
             </div>
             <button className="bg-brand-lime text-[#05110a] px-8 h-14 rounded-xl font-heading font-black hover:bg-white transition-colors">
               SEARCH
             </button>
          </div>
        </div>
      </section>

      {/* 2. MAIN LAYOUT */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Column */}
          <div className="lg:col-span-2">
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-6 border-b border-white/10 w-full">
                {['GAMES', 'TEAMS', 'TOURNAMENTS'].map(tab => (
                  <button 
                    key={tab} 
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 font-heading font-bold text-sm tracking-widest uppercase transition-colors relative ${activeTab === tab ? 'text-brand-lime' : 'text-gray-500 hover:text-white'}`}
                  >
                    {tab}
                    {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-lime"></div>}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading font-black text-2xl">GAMES NEAR YOU</h2>
              <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">
                <Filter size={16} /> Filters
              </button>
            </div>

            {/* List */}
            <div className="space-y-4">
              {games.map((game, i) => (
                <div key={i} className="bg-[#0a1a12] border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row gap-6 hover:border-brand-lime/30 transition-colors group cursor-pointer">
                  <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden relative flex-shrink-0">
                    <img src={game.img} alt={game.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-2 left-2 bg-[#05110a]/80 backdrop-blur text-brand-lime text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                      {game.sport}
                    </div>
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-heading font-black text-xl group-hover:text-brand-lime transition-colors">{game.title}</h3>
                        <div className="font-bold text-brand-lime">{game.price}</div>
                      </div>
                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                        <div className="flex items-center gap-1"><MapPin size={14} className="text-brand-lime" /> {game.location}</div>
                        <div className="flex items-center gap-1"><Calendar size={14} className="text-brand-lime" /> {game.date}</div>
                        <div className="flex items-center gap-1"><Clock size={14} className="text-brand-lime" /> {game.time}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                       <div className="text-sm">
                         <span className="font-bold text-white">{game.spots} spots left</span> <span className="text-gray-500">• 10/12 joined</span>
                       </div>
                       <button className="bg-transparent border border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-[#05110a] px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-colors">
                         JOIN GAME
                       </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Map Placeholder */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-4 sticky top-24">
              <div className="w-full h-64 bg-[#05110a] rounded-xl border border-white/5 mb-4 relative overflow-hidden flex items-center justify-center">
                 {/* Decorative radar lines */}
                 <div className="absolute inset-0 border-[0.5px] border-brand-lime/10 rounded-full scale-150"></div>
                 <div className="absolute inset-0 border-[0.5px] border-brand-lime/20 rounded-full scale-100"></div>
                 <div className="absolute inset-0 border-[0.5px] border-brand-lime/30 rounded-full scale-50"></div>
                 <div className="w-4 h-4 bg-brand-lime rounded-full shadow-[0_0_15px_#c8f902] animate-pulse relative z-10"></div>
                 
                 {/* Map Points */}
                 <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"></div>
                 <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white rounded-full"></div>
                 <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest">
                <MapPin size={14} className="inline mr-1 text-brand-lime" /> SEARCH NEAR THIS LOCATION
              </p>
            </div>

            {/* How Discover Works */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
               <h3 className="font-heading font-black text-lg mb-6 uppercase">How Discover Works</h3>
               <div className="space-y-6">
                 {[
                   { title: "Find your game", desc: "Filter by sport, location, skill level and time." },
                   { title: "Book a spot", desc: "Secure your place in the game immediately." },
                   { title: "Play & Review", desc: "Show up, play, and build your player reputation." }
                 ].map((step, i) => (
                   <div key={i} className="flex gap-4">
                     <div className="w-6 h-6 rounded-full bg-brand-lime/20 text-brand-lime flex items-center justify-center flex-shrink-0 mt-0.5">
                       <CheckCircle size={14} />
                     </div>
                     <div>
                       <h4 className="font-bold text-sm mb-1 text-white">{step.title}</h4>
                       <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
