import React from 'react';
import { Search, MapPin, Calendar, Users, Trophy, ChevronRight, Shield, Play } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function SportsDetails() {
  const { sport = 'football' } = useParams();
  
  const sportName = sport.charAt(0).toUpperCase() + sport.slice(1);

  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black">
      
      {/* 1. HERO */}
      <section className="relative pt-32 pb-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=2000" 
            alt="Football Action" 
            className="w-full h-full object-cover opacity-30 object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05110a] via-[#05110a]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-brand-lime mb-6 uppercase tracking-widest text-xs font-bold">
               <div className="w-6 h-6 rounded-full bg-brand-lime/20 flex items-center justify-center">⚽</div>
               {sportName}
            </div>
            <h1 className="font-heading font-black text-6xl md:text-8xl leading-none mb-6 uppercase">
              {sportName}<br/>
              <span className="text-brand-lime">THE WORLD'S GAME.</span>
            </h1>
            <p className="text-gray-400 font-body text-xl leading-relaxed max-w-xl mb-10">
              Join local matches, leagues and tournaments. Find your team, your ground and your game.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
               <div>
                 <div className="font-heading font-black text-2xl text-white">45+</div>
                 <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Games every week</div>
               </div>
               <div>
                 <div className="font-heading font-black text-2xl text-white">230+</div>
                 <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Teams active</div>
               </div>
               <div>
                 <div className="font-heading font-black text-2xl text-white">3.2K+</div>
                 <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Players playing</div>
               </div>
               <div>
                 <div className="font-heading font-black text-2xl text-white">All Ages</div>
                 <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">All skill levels welcome</div>
               </div>
            </div>

            <div className="flex gap-4">
              <Link to="/games" className="bg-brand-lime text-[#05110a] px-8 py-4 rounded-lg font-heading font-black hover:bg-white transition-colors flex items-center gap-2">
                FIND {sportName.toUpperCase()} GAMES <Search size={18} />
              </Link>
              <Link to="/groups" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-lg font-heading font-black hover:bg-white/10 transition-colors flex items-center gap-2">
                JOIN A TEAM <Users size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Side Panel */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 space-y-6">
           <div className="bg-[#05110a]/80 backdrop-blur border border-white/10 rounded-2xl p-6 w-64">
             <div className="flex gap-4 mb-4">
               <Shield className="text-brand-lime flex-shrink-0" size={20} />
               <div>
                 <h4 className="font-bold text-sm mb-1">100% OFFLINE</h4>
                 <p className="text-xs text-gray-400">No online play. Just real matches.</p>
               </div>
             </div>
             <div className="flex gap-4 mb-4">
               <Users className="text-brand-lime flex-shrink-0" size={20} />
               <div>
                 <h4 className="font-bold text-sm mb-1">REAL PLAYERS</h4>
                 <p className="text-xs text-gray-400">Real people. Real sports.</p>
               </div>
             </div>
             <div className="flex gap-4">
               <Trophy className="text-brand-lime flex-shrink-0" size={20} />
               <div>
                 <h4 className="font-bold text-sm mb-1">FAIR PLAY</h4>
                 <p className="text-xs text-gray-400">Respect, discipline and sportsmanship.</p>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* 2. TABS */}
      <div className="border-b border-white/10 sticky top-0 bg-[#05110a]/90 backdrop-blur z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto hide-scrollbar">
            {['Overview', 'Games Near You', 'Leagues & Tournaments', 'Teams', 'Top Venues', 'Rules & Format', 'Gallery'].map((tab, i) => (
              <button 
                key={i} 
                className={`py-4 font-heading font-bold text-xs tracking-widest uppercase whitespace-nowrap transition-colors relative ${i === 0 ? 'text-brand-lime' : 'text-gray-400 hover:text-white'}`}
              >
                {tab}
                {i === 0 && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-lime"></div>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. MAIN CONTENT */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COL: Games Near You */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex justify-between items-end">
              <h2 className="font-heading font-black text-2xl uppercase">GAMES NEAR YOU</h2>
              <Link to="/games" className="text-brand-lime font-bold text-xs uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1">
                View All <ChevronRight size={16} />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                { title: "Evening Football Match", loc: "Green Field Arena, Hauz Khas", date: "Today, 7:00 PM", format: "7 v 7", players: "8 / 14 Players", price: "₹120 per player", img: "https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=400", dist: "1.2 km" },
                { title: "Sunday Morning Game", loc: "Playground, Saket Sports Complex", date: "Tomorrow, 8:00 AM", format: "11 v 11", players: "12 / 22 Players", price: "₹150 per player", img: "https://images.unsplash.com/photo-1574629810360-7efbc18974bf?auto=format&fit=crop&q=80&w=400", dist: "2.4 km" },
                { title: "Night Football", loc: "Urban Sports Hub, Malviya Nagar", date: "Tomorrow, 9:30 PM", format: "7 v 7", players: "6 / 14 Players", price: "₹100 per player", img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=400", dist: "2.7 km" }
              ].map((g, i) => (
                <div key={i} className="bg-[#0a1a12] border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row gap-6 hover:border-brand-lime/30 transition-colors group cursor-pointer relative">
                  <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden relative flex-shrink-0">
                    <img src={g.img} alt={g.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="bg-brand-lime/20 text-brand-lime text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2 inline-block">MATCH</span>
                          <h3 className="font-heading font-bold text-lg group-hover:text-brand-lime transition-colors leading-tight">{g.title}</h3>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400 font-bold"><MapPin size={12}/> {g.dist}</div>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
                        <MapPin size={14} className="text-brand-lime" /> {g.loc}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1"><Calendar size={14} /> {g.date}</div>
                        <div className="flex items-center gap-1"><Users size={14} /> {g.format}</div>
                        <div className="flex items-center gap-1"><Users size={14} /> {g.players}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-3">
                       <div className="font-bold text-brand-lime">{g.price}</div>
                       <button className="bg-transparent border border-white/20 text-white hover:bg-white hover:text-[#05110a] px-4 py-1.5 rounded font-bold text-xs uppercase tracking-widest transition-colors">
                         VIEW DETAILS
                       </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-[#0a1a12] border border-white/10 rounded-xl py-4 font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-colors">
              VIEW ALL {sportName.toUpperCase()} GAMES <ChevronRight size={16} className="inline ml-1 mb-0.5" />
            </button>
          </div>

          {/* RIGHT COL: Popular Venues */}
          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <h2 className="font-heading font-black text-xl uppercase">POPULAR VENUES</h2>
              <Link to="/venues" className="text-brand-lime font-bold text-xs uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1">
                View All <ChevronRight size={16} />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                { name: "Green Field Arena", loc: "Hauz Khas, Delhi", rating: "4.6", reviews: "128", img: "https://images.unsplash.com/photo-1522778523315-976451e59275?auto=format&fit=crop&q=80&w=200", dist: "1.2 km" },
                { name: "Saket Sports Complex", loc: "Saket, Delhi", rating: "4.5", reviews: "96", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=200", dist: "2.4 km" },
                { name: "Playground", loc: "Lajpat Nagar, Delhi", rating: "4.4", reviews: "72", img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=200", dist: "3.1 km" },
                { name: "Urban Sports Hub", loc: "Malviya Nagar, Delhi", rating: "4.5", reviews: "88", img: "https://images.unsplash.com/photo-1566324209584-3bd3283287db?auto=format&fit=crop&q=80&w=200", dist: "2.7 km" }
              ].map((v, i) => (
                <div key={i} className="flex gap-4 p-4 bg-[#0a1a12] border border-white/10 rounded-xl hover:border-white/20 transition-colors cursor-pointer group">
                  <img src={v.img} alt={v.name} className="w-20 h-20 rounded-lg object-cover group-hover:scale-105 transition-transform" />
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-white text-sm mb-1">{v.name}</h4>
                    <p className="text-xs text-gray-400 mb-2">{v.loc}</p>
                    <div className="flex gap-4 text-xs text-brand-lime font-bold">
                      <span>⭐ {v.rating} <span className="text-gray-500 font-normal">({v.reviews})</span></span>
                      <span><MapPin size={12} className="inline mb-0.5"/> {v.dist}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#0a1a12] to-brand-forest/20 border border-brand-lime/20 rounded-2xl p-6 relative overflow-hidden">
               <div className="absolute right-0 bottom-0 opacity-10">
                 <Users size={150} />
               </div>
               <h3 className="font-heading font-black text-xl mb-2 relative z-10">LOOKING TO CREATE A GAME?</h3>
               <p className="text-sm text-gray-400 mb-6 relative z-10 max-w-[200px]">Create your own football game and invite players to join.</p>
               <button className="bg-brand-lime text-[#05110a] px-6 py-2.5 rounded font-bold text-xs uppercase tracking-widest relative z-10 hover:bg-white transition-colors">
                 CREATE A GAME ↗
               </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. ACTIVE LEAGUES */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="flex justify-between items-end mb-8">
          <h2 className="font-heading font-black text-2xl uppercase">ACTIVE LEAGUES & TOURNAMENTS</h2>
          <Link to="/tournaments" className="text-brand-lime font-bold text-xs uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1">
            View All <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { tag: "LEAGUE", name: "Khel Clan Sunday League", format: "11 v 11", teams: "32 Teams", date: "Starts 25 May 2025" },
            { tag: "TOURNAMENT", name: "Summer Football Cup 2025", format: "7 v 7", teams: "16 Teams", date: "Starts 06 Jun 2025" },
            { tag: "LEAGUE", name: "Weeknight Warriors League", format: "7 v 7", teams: "24 Teams", date: "Starts 05 Jun 2025" },
            { tag: "TOURNAMENT", name: "Monsoon Kickoff Championship", format: "11 v 11", teams: "24 Teams", date: "Starts 20 Jul 2025" }
          ].map((l, i) => (
            <div key={i} className="bg-[#0a1a12] border border-white/10 rounded-2xl p-5 hover:border-brand-lime/30 transition-colors cursor-pointer relative group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
               <div className="relative z-10">
                 <span className="bg-white/10 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-4 inline-block">{l.tag}</span>
                 <h4 className="font-heading font-black text-lg mb-4 h-14 leading-tight">{l.name}</h4>
                 <div className="flex gap-4 text-xs text-gray-400 font-bold mb-4">
                   <span className="flex items-center gap-1"><Users size={14}/> {l.format}</span>
                   <span className="flex items-center gap-1"><Trophy size={14}/> {l.teams}</span>
                 </div>
                 <div className="text-brand-lime text-xs font-bold pt-4 border-t border-white/10">
                   {l.date}
                 </div>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BOTTOM BANNER */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[url('https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#05110a] via-[#05110a]/80 to-transparent"></div>
          <div className="relative z-10 p-12 md:p-16 max-w-2xl">
            <h2 className="font-heading font-black text-4xl mb-4">MORE THAN A GAME.<br/><span className="text-brand-lime">IT'S A COMMUNITY.</span></h2>
            <p className="text-gray-300 font-body mb-8">Football brings people together. From weekend games to competitive leagues, find your place on the field.</p>
            <Link to="/about" className="bg-transparent border border-white/20 text-white px-6 py-3 rounded font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#05110a] transition-colors inline-block">
              LEARN MORE ABOUT US ↗
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
