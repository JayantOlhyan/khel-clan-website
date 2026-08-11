import React, { useState } from 'react';
import { Search, MapPin, Calendar, CheckCircle, ChevronDown, Filter, ChevronLeft, ChevronRight, Trophy, Users, Share2, Heart, Shield, ActivitySquare, MessageCircle, ArrowUpRight, Goal, Video, Play, ExternalLink, Star, FileText, Target, Crosshair, Navigation, Plus, Bookmark } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function CitySportDetail() {
  const { city, sport } = useParams();
  const navigate = useNavigate();

  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black pt-24">
      
      {/* 1. HERO SECTION (Sport in City Image) */}
      <section className="relative pb-12 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 object-center"
            alt="Football in New Delhi"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] via-[#05110a]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#05110a] via-[#05110a]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb & Actions */}
          <div className="flex justify-between items-start mb-8">
            <div className="text-xs text-gray-400 flex items-center gap-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={10} />
              <Link to="/play" className="hover:text-white transition-colors">Play Near You</Link>
              <ChevronRight size={10} />
              <Link to="/play/new-delhi" className="hover:text-white transition-colors">New Delhi</Link>
              <ChevronRight size={10} />
              <span className="text-brand-lime">Football</span>
            </div>
            
            <button className="bg-[#05110a]/60 backdrop-blur border border-white/10 rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-bold hover:bg-white/10 transition-colors">
              <MapPin size={14}/> Change City
            </button>
          </div>

          <div className="mb-10 max-w-2xl">
            <div className="flex items-center gap-2 text-brand-lime text-[10px] font-black uppercase tracking-widest mb-3">
              <div className="w-5 h-5 rounded-full border border-brand-lime flex items-center justify-center">⚽</div> PLAY FOOTBALL IN
            </div>
            <h1 className="font-heading font-black text-5xl md:text-6xl mb-4 leading-tight flex items-center gap-2">
              New Delhi <ChevronDown size={32} className="text-gray-500 cursor-pointer hover:text-white transition-colors"/>
            </h1>
            <p className="text-gray-300 font-body text-sm leading-relaxed mb-8">
              Find and join football games, meet players, and book the best venues across New Delhi.
            </p>
            
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime bg-brand-lime/5">⚽</div>
                 <div>
                   <div className="font-heading font-black text-xl leading-none">423</div>
                   <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Games this week</div>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime bg-brand-lime/5"><Users size={18}/></div>
                 <div>
                   <div className="font-heading font-black text-xl leading-none">2.1K+</div>
                   <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Players</div>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime bg-brand-lime/5"><MapPin size={18}/></div>
                 <div>
                   <div className="font-heading font-black text-xl leading-none">86</div>
                   <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Venues</div>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime bg-brand-lime/5"><Trophy size={18}/></div>
                 <div>
                   <div className="font-heading font-black text-xl leading-none">12+</div>
                   <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Tournaments</div>
                 </div>
              </div>
            </div>
          </div>

          {/* Quick Filters - Sports */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
             <button onClick={() => navigate('/play/new-delhi')} className="flex-shrink-0 flex items-center gap-2 bg-[#05110a]/80 backdrop-blur border border-white/10 text-gray-300 hover:text-white hover:border-white/30 px-6 py-3 rounded-xl font-bold text-sm transition-colors">
               <div className="grid grid-cols-2 gap-0.5 w-4 h-4"><div className="bg-gray-400 rounded-sm"/><div className="bg-gray-400 rounded-sm"/><div className="bg-gray-400 rounded-sm"/><div className="bg-gray-400 rounded-sm"/></div>
               All Sports
             </button>
             <button className="flex-shrink-0 flex items-center gap-2 bg-brand-lime text-[#05110a] px-6 py-3 rounded-xl font-bold text-sm transition-colors border border-brand-lime">
               <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center">⚽</div>
               Football
             </button>
             {['Cricket', 'Basketball', 'Badminton', 'Tennis', 'Volleyball'].map((sportItem) => (
               <button 
                 key={sportItem}
                 onClick={() => navigate(`/play/new-delhi/${sportItem.toLowerCase()}`)}
                 className="flex-shrink-0 flex items-center gap-2 bg-[#05110a]/80 backdrop-blur border border-white/10 text-gray-300 hover:text-white hover:border-white/30 px-6 py-3 rounded-xl font-bold text-sm transition-colors"
               >
                 {sportItem}
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
            
            <div className="flex-shrink-0 w-36 bg-[#05110a] border border-white/10 rounded-lg p-2 relative cursor-pointer group hover:border-brand-lime/50 transition-colors">
              <div className="text-[8px] text-gray-500 font-bold uppercase tracking-widest px-2">Date</div>
              <div className="flex items-center justify-between px-2 text-xs font-bold text-white">
                Today <ChevronDown size={14} className="text-gray-500 group-hover:text-brand-lime"/>
              </div>
            </div>
            
            <div className="flex-shrink-0 w-36 bg-[#05110a] border border-white/10 rounded-lg p-2 relative cursor-pointer group hover:border-brand-lime/50 transition-colors">
              <div className="text-[8px] text-gray-500 font-bold uppercase tracking-widest px-2">Time</div>
              <div className="flex items-center justify-between px-2 text-xs font-bold text-white">
                Anytime <ChevronDown size={14} className="text-gray-500 group-hover:text-brand-lime"/>
              </div>
            </div>

            <div className="flex-shrink-0 w-36 bg-[#05110a] border border-white/10 rounded-lg p-2 relative cursor-pointer group hover:border-brand-lime/50 transition-colors">
              <div className="text-[8px] text-gray-500 font-bold uppercase tracking-widest px-2">Distance</div>
              <div className="flex items-center justify-between px-2 text-xs font-bold text-white">
                Within 10 km <ChevronDown size={14} className="text-gray-500 group-hover:text-brand-lime"/>
              </div>
            </div>

            <div className="flex-shrink-0 w-36 bg-[#05110a] border border-white/10 rounded-lg p-2 relative cursor-pointer group hover:border-brand-lime/50 transition-colors">
              <div className="text-[8px] text-gray-500 font-bold uppercase tracking-widest px-2">Players</div>
              <div className="flex items-center justify-between px-2 text-xs font-bold text-white">
                Any <ChevronDown size={14} className="text-gray-500 group-hover:text-brand-lime"/>
              </div>
            </div>
            
            <div className="flex-shrink-0 w-36 bg-[#05110a] border border-white/10 rounded-lg p-2 relative cursor-pointer group hover:border-brand-lime/50 transition-colors">
              <div className="text-[8px] text-gray-500 font-bold uppercase tracking-widest px-2">Level</div>
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
                Upcoming Football Games 
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
                { title: "5v5 Evening Match", format: "5v5", surface: "Astroturf", level: "All Levels", date: "Today, 6:30 PM – 8:00 PM", loc: "Astroturf Arena, Pragati Maidan", dist: "2.1 km", pCur: 7, pMax: 10, price: "₹100 / Player", img: "https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=400" },
                { title: "6v6 Night Football", format: "6v6", surface: "Turf", level: "Intermediate", date: "Today, 8:00 PM – 10:00 PM", loc: "PlayAll Sports Arena, Hauz Khas", dist: "2.3 km", pCur: 8, pMax: 12, price: "₹150 / Player", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=400" },
                { title: "4v4 Quick Game", format: "4v4", surface: "Ground", level: "Beginner", date: "Today, 7:00 PM – 8:00 PM", loc: "Lodhi Colony Ground", dist: "2.6 km", pCur: 6, pMax: 8, price: "₹80 / Player", img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=400" },
                { title: "7v7 Weekend Football", format: "7v7", surface: "Turf", level: "Advanced", date: "Tomorrow, 6:00 PM – 7:30 PM", loc: "Siri Fort Sports Complex", dist: "3.2 km", pCur: 9, pMax: 14, price: "₹200 / Player", img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=400" },
              ].map((g, i) => (
                <div key={i} className="bg-[#0a1a12] border border-white/10 rounded-2xl overflow-hidden flex flex-col sm:flex-row group hover:border-brand-lime/30 transition-colors">
                  <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
                    <img src={g.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt=""/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] sm:bg-gradient-to-r sm:from-transparent sm:to-[#0a1a12] to-transparent"></div>
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-lg mb-1 group-hover:text-brand-lime transition-colors leading-tight">{g.title}</h3>
                        <div className="flex items-center gap-1.5 text-brand-lime font-bold text-[10px] uppercase tracking-widest mb-1.5">
                           <MapPin size={10}/> {g.dist}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-300 mb-1">
                           <MapPin size={12} className="text-gray-500"/> {g.loc}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-300">
                           <Calendar size={12} className="text-gray-500"/> {g.date}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                         <div className="flex items-center gap-1 text-[10px] font-bold">
                           <span className={g.pCur >= g.pMax ? "text-red-400" : "text-brand-lime"}>{g.pCur}</span>
                           <span className="text-gray-500">/ {g.pMax} Players</span>
                         </div>
                         <button className="border border-brand-lime text-brand-lime px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-brand-lime hover:text-[#05110a] transition-colors w-full">
                           JOIN GAME
                         </button>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-between pt-4 border-t border-white/5 gap-2">
                       <div className="flex flex-wrap gap-2 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                         <span className="bg-[#05110a] border border-white/10 px-2 py-1 rounded">{g.format}</span>
                         <span className="bg-[#05110a] border border-white/10 px-2 py-1 rounded">{g.surface}</span>
                         <span className="bg-[#05110a] border border-white/10 px-2 py-1 rounded">{g.price}</span>
                         <span className="bg-[#05110a] border border-white/10 px-2 py-1 rounded">{g.level}</span>
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

            {/* Players Looking for Team/Game Widget */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6 mt-8">
              <div className="flex justify-between items-end mb-6">
                <h3 className="font-heading font-black text-xl">Players Looking to Play</h3>
                <button className="text-brand-lime text-[10px] font-bold uppercase tracking-widest hover:underline">View all</button>
              </div>
              
              <div className="grid grid-autofit gap-4">
                 {[
                   { name: "Arjun Mehta", pos: "Forward", level: "Intermediate", availability: "Looking for game • Anytime", rating: "4.7", img: "https://i.pravatar.cc/150?u=41" },
                   { name: "Rohan Singh", pos: "Midfielder", level: "Advanced", availability: "Available after 6 PM", rating: "4.6", img: "https://i.pravatar.cc/150?u=42" },
                   { name: "Kabir Malhotra", pos: "Defender", level: "Beginner", availability: "Weekends Preferred", rating: "4.5", img: "https://i.pravatar.cc/150?u=43" }
                 ].map((p, i) => (
                   <div key={i} className="flex gap-3 bg-[#05110a] border border-white/5 rounded-xl p-3">
                     <img src={p.img} className="w-10 h-10 rounded-full" alt=""/>
                     <div>
                       <div className="flex items-center gap-2 mb-0.5">
                         <h4 className="font-bold text-xs text-white leading-none">{p.name}</h4>
                         <span className="flex items-center gap-0.5 text-[8px] text-yellow-400 font-bold"><Star size={8} fill="currentColor"/> {p.rating}</span>
                       </div>
                       <div className="text-[10px] text-gray-400 mb-1">{p.pos} <span className="text-gray-600">•</span> {p.level}</div>
                       <div className="text-[8px] text-brand-lime font-bold uppercase">{p.availability}</div>
                     </div>
                   </div>
                 ))}
              </div>
            </div>

            {/* Create CTA */}
            <div className="bg-brand-lime/10 border border-brand-lime/30 rounded-2xl p-6 flex items-center justify-between mt-8">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-brand-lime text-[#05110a] rounded-xl flex items-center justify-center"><Users size={24}/></div>
                 <div>
                   <h3 className="font-bold text-lg text-white leading-tight mb-1">Create a team or group and never miss a game!</h3>
                   <p className="text-xs text-gray-400">Invite players, manage games, and grow your football community.</p>
                 </div>
               </div>
               <button className="bg-brand-lime text-[#05110a] px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors flex-shrink-0">
                 CREATE GROUP
               </button>
            </div>

          </div>

          {/* RIGHT COL (Widgets) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Explore Venues */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
              <div className="flex justify-between items-end mb-6">
                <h3 className="font-heading font-black text-xl">Explore Venues</h3>
                <button className="text-brand-lime text-[10px] font-bold uppercase tracking-widest hover:underline">View all</button>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Astroturf Arena, Pragati Maidan", rating: "4.6", reviews: "235", dist: "2.1 km", type: "Astroturf", img: "https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=200" },
                  { name: "PlayAll Sports Arena, Hauz Khas", rating: "4.4", reviews: "156", dist: "2.3 km", type: "Turf", img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=200" },
                  { name: "Lodhi Colony Ground", rating: "4.3", reviews: "187", dist: "2.6 km", type: "Ground", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=200" },
                ].map((v, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer border-b border-white/5 pb-4 last:border-0 last:pb-0 relative">
                    <img src={v.img} className="w-20 h-16 rounded-xl object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt=""/>
                    <div className="flex-grow flex flex-col justify-center">
                      <h4 className="font-bold text-xs text-white mb-1 group-hover:text-brand-lime transition-colors pr-6">{v.name}</h4>
                      <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mb-1">
                        <Star size={10} className="text-yellow-400" fill="currentColor"/>
                        <span className="text-white font-bold">{v.rating}</span>
                        <span>({v.reviews})</span>
                      </div>
                      <div className="text-[10px] text-gray-500 font-bold">
                        {v.dist} • {v.type}
                      </div>
                    </div>
                    <button className="absolute right-0 top-0 text-gray-500 hover:text-brand-lime transition-colors"><Bookmark size={16}/></button>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 text-brand-lime font-bold text-[10px] uppercase tracking-widest hover:underline flex items-center justify-center gap-2">
                VIEW ALL VENUES <ArrowUpRight size={14}/>
              </button>
            </div>

            {/* Mini Map */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6 aspect-square sm:h-[400px] flex flex-col">
              <h3 className="font-heading font-black text-xl mb-4">Games Near You</h3>
              
              <div className="flex-grow rounded-xl bg-[#05110a] border border-white/10 relative overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-30" alt="Map" style={{ filter: 'invert(1) hue-rotate(180deg) saturate(0.5) contrast(1.5)' }}/>
                 
                 {/* Radar UI on Map */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[60%] max-w-[250px] aspect-square border border-brand-lime/10 rounded-full"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[40%] max-w-[150px] aspect-square border border-brand-lime/20 rounded-full bg-brand-lime/5"></div>
                 
                 {/* Center Dot */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-3 h-3 rounded-full bg-blue-500 border border-white shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>

                 {/* Map Pins */}
                 <div className="absolute top-[20%] left-[20%] group cursor-pointer z-10 hover:z-30">
                   <div className="relative">
                     <div className="w-5 h-7 -translate-x-1/2 -translate-y-full">
                       <svg viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-brand-lime drop-shadow-[0_0_8px_rgba(200,249,2,0.5)]">
                         <path d="M12 0C5.37258 0 0 5.37258 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37258 18.6274 0 12 0Z" fill="currentColor"/>
                         <circle cx="12" cy="12" r="6" fill="#05110a"/>
                       </svg>
                       <div className="absolute top-1.5 left-1/2 -translate-x-1/2 text-[8px]">⚽</div>
                     </div>
                   </div>
                 </div>

                 <div className="absolute top-[35%] left-[80%] group cursor-pointer z-10 hover:z-30">
                   <div className="relative">
                     <div className="w-5 h-7 -translate-x-1/2 -translate-y-full">
                       <svg viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-brand-lime drop-shadow-[0_0_8px_rgba(200,249,2,0.5)]">
                         <path d="M12 0C5.37258 0 0 5.37258 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37258 18.6274 0 12 0Z" fill="currentColor"/>
                         <circle cx="12" cy="12" r="6" fill="#05110a"/>
                       </svg>
                       <div className="absolute top-1.5 left-1/2 -translate-x-1/2 text-[8px]">⚽</div>
                     </div>
                   </div>
                 </div>

                 <div className="absolute top-[75%] left-[30%] group cursor-pointer z-10 hover:z-30">
                   <div className="relative">
                     <div className="w-5 h-7 -translate-x-1/2 -translate-y-full">
                       <svg viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-brand-lime drop-shadow-[0_0_8px_rgba(200,249,2,0.5)]">
                         <path d="M12 0C5.37258 0 0 5.37258 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37258 18.6274 0 12 0Z" fill="currentColor"/>
                         <circle cx="12" cy="12" r="6" fill="#05110a"/>
                       </svg>
                       <div className="absolute top-1.5 left-1/2 -translate-x-1/2 text-[8px]">⚽</div>
                     </div>
                   </div>
                 </div>

                 {/* Bottom Info Bar inside map */}
                 <div className="absolute bottom-3 left-3 right-3 bg-[#0a1a12]/90 backdrop-blur border border-white/10 rounded-xl p-2 flex justify-between items-center z-20">
                   <div className="flex items-center gap-2">
                     <MapPin size={12} className="text-brand-lime"/>
                     <div>
                       <div className="font-bold text-[10px] text-white">Game Location</div>
                     </div>
                   </div>
                   <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                     <div className="font-bold text-[10px] text-white">You (India Gate)</div>
                   </div>
                 </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      
    </div>
  );
}
