import React, { useState } from 'react';
import { Search, MapPin, Calendar, CheckCircle, ChevronDown, Filter, ChevronLeft, ChevronRight, Trophy, Users, Share2, Heart, Shield, ActivitySquare, MessageCircle, ArrowUpRight, Goal, Video, Play, ExternalLink, Star, FileText, Target, Crosshair, Navigation, Plus, Bookmark } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function CityDetail() {
  const { city } = useParams();
  const navigate = useNavigate();

  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black pt-24">
      
      {/* 1. HERO SECTION (City Image) */}
      <section className="relative pb-12 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30"
            alt="New Delhi"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] via-[#05110a]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#05110a] via-[#05110a]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Weather */}
          <div className="flex justify-between items-start mb-8">
            <div className="text-xs text-gray-400 flex items-center gap-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={10} />
              <Link to="/play" className="hover:text-white transition-colors">Play Near You</Link>
              <ChevronRight size={10} />
              <span className="text-brand-lime">New Delhi</span>
            </div>
            
            <div className="bg-[#05110a]/60 backdrop-blur border border-white/10 rounded-xl p-3 flex items-center gap-3">
               <div className="text-yellow-400">☀️</div>
               <div>
                 <div className="font-bold text-lg leading-none">32°C</div>
                 <div className="text-[10px] text-gray-400 flex items-center gap-2">
                   <span>Clear</span>
                   <span className="text-brand-lime font-bold">AQI 78</span>
                 </div>
               </div>
            </div>
          </div>

          <div className="mb-10 max-w-2xl">
            <div className="flex items-center gap-2 text-brand-lime text-[10px] font-black uppercase tracking-widest mb-3">
              <MapPin size={14}/> PLAY IN
            </div>
            <h1 className="font-heading font-black text-5xl md:text-6xl mb-4 leading-tight flex items-center gap-2">
              New Delhi <ChevronDown size={32} className="text-gray-500 cursor-pointer hover:text-white transition-colors"/>
            </h1>
            <p className="text-gray-300 font-body text-sm leading-relaxed mb-8">
              Discover games, players, and venues happening across New Delhi. Join, play, and grow together.
            </p>
            
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime bg-brand-lime/5"><Trophy size={18}/></div>
                 <div>
                   <div className="font-heading font-black text-xl leading-none">1.2K+</div>
                   <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Games this week</div>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime bg-brand-lime/5"><Users size={18}/></div>
                 <div>
                   <div className="font-heading font-black text-xl leading-none">8.4K+</div>
                   <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Players</div>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime bg-brand-lime/5"><MapPin size={18}/></div>
                 <div>
                   <div className="font-heading font-black text-xl leading-none">320+</div>
                   <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Venues</div>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime bg-brand-lime/5"><Target size={18}/></div>
                 <div>
                   <div className="font-heading font-black text-xl leading-none">25+</div>
                   <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Sports</div>
                 </div>
              </div>
            </div>
          </div>

          {/* Quick Filters - Sports */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
             <button className="flex-shrink-0 flex items-center gap-2 bg-brand-lime text-[#05110a] px-6 py-3 rounded-xl font-bold text-sm transition-colors border border-brand-lime">
               <div className="grid grid-cols-2 gap-0.5 w-4 h-4"><div className="bg-[#05110a] rounded-sm"/><div className="bg-[#05110a] rounded-sm"/><div className="bg-[#05110a] rounded-sm"/><div className="bg-[#05110a] rounded-sm"/></div>
               All Sports
             </button>
             {['Football', 'Cricket', 'Basketball', 'Badminton', 'Tennis', 'Volleyball'].map((sport) => (
               <button 
                 key={sport} 
                 onClick={() => navigate(`/play/new-delhi/${sport.toLowerCase()}`)}
                 className="flex-shrink-0 flex items-center gap-2 bg-[#05110a]/80 backdrop-blur border border-white/10 text-gray-300 hover:text-white hover:border-white/30 px-6 py-3 rounded-xl font-bold text-sm transition-colors"
               >
                 <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center opacity-70">⚽</div>
                 {sport}
               </button>
             ))}
             <button className="flex-shrink-0 flex items-center gap-2 bg-[#05110a]/80 backdrop-blur border border-white/10 text-gray-300 hover:text-white hover:border-white/30 px-6 py-3 rounded-xl font-bold text-sm transition-colors">
               <Plus size={16}/> More
             </button>
          </div>
        </div>
      </section>

      {/* 2. ADVANCED FILTERS BAR */}
      <div className="border-b border-white/10 bg-[#0a1a12] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center overflow-x-auto hide-scrollbar">
            
            <div className="flex-shrink-0 w-40 bg-[#05110a] border border-white/10 rounded-lg p-2 relative cursor-pointer group hover:border-brand-lime/50 transition-colors">
              <div className="text-[8px] text-gray-500 font-bold uppercase tracking-widest px-2">Distance</div>
              <div className="flex items-center justify-between px-2 text-xs font-bold text-white">
                Within 10 km <ChevronDown size={14} className="text-gray-500 group-hover:text-brand-lime"/>
              </div>
            </div>
            
            <div className="flex-shrink-0 w-40 bg-[#05110a] border border-white/10 rounded-lg p-2 relative cursor-pointer group hover:border-brand-lime/50 transition-colors">
              <div className="text-[8px] text-gray-500 font-bold uppercase tracking-widest px-2">Date</div>
              <div className="flex items-center justify-between px-2 text-xs font-bold text-white">
                Today <ChevronDown size={14} className="text-gray-500 group-hover:text-brand-lime"/>
              </div>
            </div>
            
            <div className="flex-shrink-0 w-40 bg-[#05110a] border border-white/10 rounded-lg p-2 relative cursor-pointer group hover:border-brand-lime/50 transition-colors">
              <div className="text-[8px] text-gray-500 font-bold uppercase tracking-widest px-2">Time</div>
              <div className="flex items-center justify-between px-2 text-xs font-bold text-white">
                Anytime <ChevronDown size={14} className="text-gray-500 group-hover:text-brand-lime"/>
              </div>
            </div>

            <div className="flex-shrink-0 w-40 bg-[#05110a] border border-white/10 rounded-lg p-2 relative cursor-pointer group hover:border-brand-lime/50 transition-colors">
              <div className="text-[8px] text-gray-500 font-bold uppercase tracking-widest px-2">Gender</div>
              <div className="flex items-center justify-between px-2 text-xs font-bold text-white">
                All <ChevronDown size={14} className="text-gray-500 group-hover:text-brand-lime"/>
              </div>
            </div>

            <div className="flex-shrink-0 w-40 bg-[#05110a] border border-white/10 rounded-lg p-2 relative cursor-pointer group hover:border-brand-lime/50 transition-colors">
              <div className="text-[8px] text-gray-500 font-bold uppercase tracking-widest px-2">Players</div>
              <div className="flex items-center justify-between px-2 text-xs font-bold text-white">
                Any <ChevronDown size={14} className="text-gray-500 group-hover:text-brand-lime"/>
              </div>
            </div>

            <div className="ml-auto flex gap-4">
              <button className="text-gray-400 hover:text-white text-[10px] font-bold uppercase tracking-widest">CLEAR</button>
              <button className="bg-brand-lime text-[#05110a] px-6 py-2 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2">
                APPLY FILTERS <Filter size={14}/>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 3. MAIN CONTENT */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* GAMES LIST (Left) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex justify-between items-end mb-2">
              <h2 className="font-heading font-black text-xl flex items-center gap-3">
                Games Happening in New Delhi 
                <span className="text-[10px] font-bold text-brand-lime border border-brand-lime/30 bg-brand-lime/10 px-2 py-1 rounded uppercase tracking-widest font-body">18 Games Found</span>
              </h2>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                Sort by: 
                <select className="bg-transparent border-none text-white font-bold focus:outline-none cursor-pointer">
                  <option>Nearest</option>
                  <option>Starting Soon</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { title: "5v5 Football Match", sport: "FOOTBALL", date: "Today, 6:30 PM – 8:00 PM", loc: "Astroturf Arena, Pragati Maidan", dist: "2.1 km", pCur: 7, pMax: 10, price: "₹100 / Player", img: "https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=400", tagColor: "brand-lime" },
                { title: "Weekend Cricket Match", sport: "CRICKET", date: "Today, 7:00 PM – 10:00 PM", loc: "Lodhi Colony Ground", dist: "2.4 km", pCur: 9, pMax: 14, price: "₹150 / Player", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=400", tagColor: "yellow-400" },
                { title: "Pickup Basketball", sport: "BASKETBALL", date: "Today, 5:30 PM – 7:30 PM", loc: "Siri Fort Sports Complex", dist: "3.2 km", pCur: 6, pMax: 10, price: "₹80 / Player", img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=400", tagColor: "orange-400" },
                { title: "Badminton Doubles", sport: "BADMINTON", date: "Today, 8:00 PM – 10:00 PM", loc: "PlayAll Sports Arena", dist: "3.8 km", pCur: 3, pMax: 4, price: "₹120 / Player", img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=400", tagColor: "blue-400" },
              ].map((g, i) => (
                <div key={i} className="bg-[#0a1a12] border border-white/10 rounded-2xl overflow-hidden flex flex-col sm:flex-row group hover:border-brand-lime/30 transition-colors">
                  <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
                    <img src={g.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt=""/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] sm:bg-gradient-to-r sm:from-transparent sm:to-[#0a1a12] to-transparent"></div>
                    <div className={`absolute bottom-3 left-3 bg-${g.tagColor}/10 border border-${g.tagColor}/30 text-${g.tagColor} text-[8px] font-black px-2 py-1 rounded uppercase tracking-widest backdrop-blur-sm`}>
                      {g.sport}
                    </div>
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-lg mb-1 group-hover:text-brand-lime transition-colors leading-tight">{g.title}</h3>
                        <div className="flex items-center gap-1.5 text-brand-lime font-bold text-[10px] uppercase tracking-widest">
                           <MapPin size={10}/> {g.dist}
                        </div>
                      </div>
                      <button className="border border-brand-lime text-brand-lime px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-brand-lime hover:text-[#05110a] transition-colors">
                        JOIN
                      </button>
                    </div>
                    
                    <div className="space-y-1.5 mb-4">
                       <div className="flex items-center gap-2 text-xs text-gray-300">
                         <Calendar size={12} className="text-gray-500"/> {g.date}
                       </div>
                       <div className="flex items-center gap-2 text-xs text-gray-300">
                         <MapPin size={12} className="text-gray-500"/> {g.loc}
                       </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                       <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400">
                         <span>{g.pCur} / {g.pMax} Players</span>
                         <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                         <span>{g.price}</span>
                       </div>
                       <div className="flex -space-x-2">
                         {[1,2,3].map((u) => (
                           <img key={u} src={`https://i.pravatar.cc/150?u=${i*10 + u}`} className="w-6 h-6 rounded-full border border-[#0a1a12]" alt=""/>
                         ))}
                         <div className="w-6 h-6 rounded-full border border-[#0a1a12] bg-[#05110a] flex items-center justify-center text-[8px] text-gray-400 font-bold">+{g.pMax - g.pCur - 3 > 0 ? g.pMax - g.pCur - 3 : 1}</div>
                       </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-[#0a1a12] border border-white/10 text-brand-lime py-4 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white/5 transition-colors flex justify-center items-center gap-2">
              VIEW MORE GAMES <ChevronDown size={14}/>
            </button>
          </div>

          {/* RIGHT COL (Widgets) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Explore Venues */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
              <div className="flex justify-between items-end mb-6">
                <h3 className="font-heading font-black text-xl">Explore Venues in New Delhi</h3>
                <button className="text-brand-lime text-[10px] font-bold uppercase tracking-widest hover:underline">View all</button>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Astroturf Arena, Pragati Maidan", rating: "4.6", reviews: "235", dist: "2.1 km", type: "Astroturf", img: "https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=200" },
                  { name: "Lodhi Colony Ground", rating: "4.3", reviews: "187", dist: "2.4 km", type: "Outdoor", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=200" },
                  { name: "Siri Fort Sports Complex", rating: "4.5", reviews: "312", dist: "3.2 km", type: "Indoor", img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=200" },
                  { name: "PlayAll Sports Arena", rating: "4.4", reviews: "156", dist: "3.8 km", type: "Indoor", img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=200" },
                ].map((v, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <img src={v.img} className="w-20 h-16 rounded-xl object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt=""/>
                    <div className="flex-grow flex flex-col justify-center">
                      <h4 className="font-bold text-xs text-white mb-1 group-hover:text-brand-lime transition-colors">{v.name}</h4>
                      <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mb-1">
                        <Star size={10} className="text-yellow-400" fill="currentColor"/>
                        <span className="text-white font-bold">{v.rating}</span>
                        <span>({v.reviews} reviews)</span>
                      </div>
                      <div className="text-[10px] text-gray-500 font-bold">
                        {v.dist} • {v.type}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 text-brand-lime font-bold text-[10px] uppercase tracking-widest hover:underline flex items-center justify-center gap-2">
                VIEW ALL VENUES <ArrowUpRight size={14}/>
              </button>
            </div>

            {/* Popular Sports */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
              <div className="flex justify-between items-end mb-6">
                <h3 className="font-heading font-black text-xl">Popular Sports in New Delhi</h3>
                <button className="text-brand-lime text-[10px] font-bold uppercase tracking-widest hover:underline">View all</button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                 {[
                   { sport: "Football", count: "892", icon: "⚽" },
                   { sport: "Cricket", count: "623", icon: "🏏" },
                   { sport: "Badminton", count: "412", icon: "🏸" },
                   { sport: "Basketball", count: "289", icon: "🏀" },
                   { sport: "Tennis", count: "176", icon: "🎾" },
                   { sport: "Volleyball", count: "154", icon: "🏐" },
                 ].map((s, i) => (
                   <div key={i} className="bg-[#05110a] border border-white/5 p-4 rounded-xl flex items-center gap-3 group cursor-pointer hover:border-brand-lime/30 transition-colors">
                     <div className="text-2xl grayscale group-hover:grayscale-0 transition-all">{s.icon}</div>
                     <div>
                       <div className="font-bold text-xs group-hover:text-brand-lime transition-colors">{s.sport}</div>
                       <div className="text-[10px] text-gray-500">{s.count} Games</div>
                     </div>
                   </div>
                 ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHY PLAY NEAR YOU */}
      <section className="py-12 border-t border-white/10 bg-[#0a1a12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="font-heading font-black text-2xl mb-8">Why Play in New Delhi?</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             
             <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime flex-shrink-0 bg-brand-lime/5">
                 <Users size={20}/>
               </div>
               <div>
                 <h3 className="font-bold text-sm mb-1 text-white">Active Community</h3>
                 <p className="text-xs text-gray-400 leading-relaxed">Join thousands of players across the city.</p>
               </div>
             </div>

             <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime flex-shrink-0 bg-brand-lime/5">
                 <MapPin size={20}/>
               </div>
               <div>
                 <h3 className="font-bold text-sm mb-1 text-white">Top Venues</h3>
                 <p className="text-xs text-gray-400 leading-relaxed">Play at the best indoor and outdoor venues.</p>
               </div>
             </div>

             <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime flex-shrink-0 bg-brand-lime/5">
                 <Calendar size={20}/>
               </div>
               <div>
                 <h3 className="font-bold text-sm mb-1 text-white">Daily Games</h3>
                 <p className="text-xs text-gray-400 leading-relaxed">New games and players every single day.</p>
               </div>
             </div>

             <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime flex-shrink-0 bg-brand-lime/5">
                 <Shield size={20}/>
               </div>
               <div>
                 <h3 className="font-bold text-sm mb-1 text-white">Safe & Trusted</h3>
                 <p className="text-xs text-gray-400 leading-relaxed">Verified players and secure environment.</p>
               </div>
             </div>

           </div>
        </div>
      </section>
      
    </div>
  );
}
