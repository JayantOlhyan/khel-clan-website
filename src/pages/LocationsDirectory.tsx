import React, { useState } from 'react';
import { Search, MapPin, Calendar, CheckCircle, ChevronDown, Filter, ChevronLeft, ChevronRight, Trophy, Users, Share2, Heart, Shield, ActivitySquare, MessageCircle, ArrowUpRight, Goal, Video, Play, ExternalLink, Star, FileText, Target, Crosshair, Navigation, Plus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function LocationsDirectory() {
  const navigate = useNavigate();
  const [radius, setRadius] = useState('5 km');

  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black pt-24">
      
      {/* 1. HERO SECTION (Map Concept) */}
      <section className="relative pb-12 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#05110a] opacity-80 z-10"></div>
          {/* Stylized Abstract Map Background */}
          <div className="absolute inset-0 z-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at center, transparent 0, #05110a 70%), url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'hue-rotate(90deg) saturate(0.5) brightness(0.8)'
          }}></div>
          
          {/* Radar Circles */}
          <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 z-10 w-[200vw] lg:w-[800px] aspect-square border border-brand-lime/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 z-10 w-[150vw] lg:w-[600px] aspect-square border border-brand-lime/20 rounded-full"></div>
          <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 z-10 w-[100vw] lg:w-[400px] aspect-square border border-brand-lime/30 rounded-full"></div>
          <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 z-10 w-[50vw] lg:w-[200px] aspect-square border border-brand-lime/40 rounded-full bg-brand-lime/5"></div>
          
          {/* User Location Node */}
          <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-6 h-6 rounded-full bg-[#05110a] border-4 border-blue-400 flex items-center justify-center relative shadow-[0_0_20px_rgba(96,165,250,0.5)]">
              <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-50"></div>
            </div>
          </div>
          
          {/* Game Nodes */}
          <div className="absolute top-[35%] left-[60%] z-20"><div className="w-8 h-8 rounded-full bg-brand-lime/20 border border-brand-lime flex items-center justify-center text-brand-lime shadow-[0_0_15px_rgba(200,249,2,0.3)]"><div className="w-2 h-2 rounded-full bg-brand-lime"></div></div></div>
          <div className="absolute top-[60%] left-[80%] z-20"><div className="w-8 h-8 rounded-full bg-brand-lime/20 border border-brand-lime flex items-center justify-center text-brand-lime shadow-[0_0_15px_rgba(200,249,2,0.3)]"><div className="w-2 h-2 rounded-full bg-brand-lime"></div></div></div>
          <div className="absolute top-[65%] left-[65%] z-20"><div className="w-8 h-8 rounded-full bg-brand-lime/20 border border-brand-lime flex items-center justify-center text-brand-lime shadow-[0_0_15px_rgba(200,249,2,0.3)]"><div className="w-2 h-2 rounded-full bg-brand-lime"></div></div></div>
          <div className="absolute top-[40%] left-[85%] z-20"><div className="w-8 h-8 rounded-full bg-brand-lime/20 border border-brand-lime flex items-center justify-center text-brand-lime shadow-[0_0_15px_rgba(200,249,2,0.3)]"><div className="w-2 h-2 rounded-full bg-brand-lime"></div></div></div>
          
          {/* Inactive Nodes */}
          <div className="absolute top-[20%] left-[65%] z-10"><div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-50"><div className="w-1 h-1 rounded-full bg-white/50"></div></div></div>
          <div className="absolute top-[75%] left-[85%] z-10"><div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-50"><div className="w-1 h-1 rounded-full bg-white/50"></div></div></div>
          <div className="absolute top-[30%] left-[95%] z-10"><div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-50"><div className="w-1 h-1 rounded-full bg-white/50"></div></div></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="text-xs text-gray-500 mb-8 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={10} />
            <span className="text-brand-lime">Play Near You</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest mb-3">
                <Trophy size={14}/> LOCATION-BASED DISCOVERY
              </div>
              <h1 className="font-heading font-black text-5xl md:text-6xl mb-4 leading-tight drop-shadow-lg">
                Play <span className="text-brand-lime">Near You</span>
              </h1>
              <p className="text-gray-300 font-body text-sm max-w-md mb-6 leading-relaxed">
                Find games, players, and venues happening near your location.
              </p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 bg-[#05110a]/80 backdrop-blur border border-brand-lime/50 text-brand-lime px-4 py-2 rounded-xl text-xs font-bold hover:bg-brand-lime hover:text-[#05110a] transition-colors">
                  <MapPin size={14} /> India Gate, New Delhi
                </button>
                <button className="text-xs text-gray-400 font-bold hover:text-white transition-colors uppercase tracking-widest border border-white/10 px-4 py-2 rounded-xl bg-[#05110a]/80 backdrop-blur flex items-center gap-2">
                  <Crosshair size={14}/> CHANGE LOCATION
                </button>
              </div>
            </div>

            <div className="bg-[#05110a]/80 backdrop-blur border border-white/10 p-4 rounded-xl flex items-center gap-4 min-w-[250px]">
               <div className="flex-grow">
                 <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Search Radius</div>
                 <select 
                   value={radius} 
                   onChange={(e) => setRadius(e.target.value)}
                   className="w-full bg-transparent text-white font-bold text-lg focus:outline-none appearance-none cursor-pointer"
                 >
                   <option>3 km</option>
                   <option>5 km</option>
                   <option>10 km</option>
                   <option>20 km</option>
                 </select>
               </div>
               <ChevronDown size={20} className="text-gray-500 pointer-events-none"/>
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
                Within {radius} <ChevronDown size={14} className="text-gray-500 group-hover:text-brand-lime"/>
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
                Games Near You 
                <span className="text-[10px] font-bold text-brand-lime border border-brand-lime/30 bg-brand-lime/10 px-2 py-1 rounded uppercase tracking-widest font-body">12 Games Found</span>
              </h2>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                Sort by: 
                <select className="bg-transparent border-none text-white font-bold focus:outline-none cursor-pointer">
                  <option>Nearest</option>
                  <option>Starting Soon</option>
                  <option>Most Players</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { title: "5v5 Evening Football", sport: "FOOTBALL", date: "Today, 6:30 PM – 8:00 PM", loc: "Astroturf Arena, Pragati Maidan", dist: "2.1 km", pCur: 7, pMax: 10, price: "₹100 / Player", img: "https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=400", tagColor: "brand-lime" },
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

          {/* RIGHT COL (Map Widget) */}
          <div className="lg:col-span-5 h-[600px] lg:h-auto lg:sticky lg:top-28">
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-4 lg:p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-heading font-black text-lg">Explore on Map</h3>
                <button className="text-brand-lime text-[10px] font-bold uppercase tracking-widest hover:underline flex items-center gap-1">
                  Full Screen <ExternalLink size={12}/>
                </button>
              </div>
              
              <div className="flex-grow rounded-xl bg-[#05110a] border border-white/10 relative overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-30" alt="Map" style={{ filter: 'invert(1) hue-rotate(180deg) saturate(0.5) contrast(1.5)' }}/>
                 
                 {/* Radar UI on Map */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full max-w-[400px] aspect-square border border-brand-lime/10 rounded-full"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full max-w-[250px] aspect-square border border-brand-lime/20 rounded-full"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[30%] max-w-[100px] aspect-square border border-brand-lime/30 rounded-full bg-brand-lime/5"></div>
                 
                 {/* Center Dot */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>

                 {/* Map Pins */}
                 <div className="absolute top-[30%] left-[35%] group cursor-pointer z-10 hover:z-30">
                   <div className="relative">
                     <div className="w-6 h-8 -translate-x-1/2 -translate-y-full">
                       <svg viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-brand-lime drop-shadow-[0_0_8px_rgba(200,249,2,0.5)]">
                         <path d="M12 0C5.37258 0 0 5.37258 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37258 18.6274 0 12 0Z" fill="currentColor"/>
                         <circle cx="12" cy="12" r="6" fill="#05110a"/>
                       </svg>
                       <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px]">⚽</div>
                     </div>
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-14 bg-[#0a1a12] border border-brand-lime text-xs font-bold px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-40">
                       5v5 Evening Football <span className="text-gray-400 block text-[8px] font-normal">2.1 km away</span>
                     </div>
                   </div>
                 </div>

                 <div className="absolute top-[45%] left-[70%] group cursor-pointer z-10 hover:z-30">
                   <div className="relative">
                     <div className="w-6 h-8 -translate-x-1/2 -translate-y-full">
                       <svg viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-brand-lime drop-shadow-[0_0_8px_rgba(200,249,2,0.5)]">
                         <path d="M12 0C5.37258 0 0 5.37258 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37258 18.6274 0 12 0Z" fill="currentColor"/>
                         <circle cx="12" cy="12" r="6" fill="#05110a"/>
                       </svg>
                       <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px]">🏏</div>
                     </div>
                   </div>
                 </div>

                 <div className="absolute top-[70%] left-[45%] group cursor-pointer z-10 hover:z-30">
                   <div className="relative">
                     <div className="w-6 h-8 -translate-x-1/2 -translate-y-full">
                       <svg viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-brand-lime drop-shadow-[0_0_8px_rgba(200,249,2,0.5)]">
                         <path d="M12 0C5.37258 0 0 5.37258 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37258 18.6274 0 12 0Z" fill="currentColor"/>
                         <circle cx="12" cy="12" r="6" fill="#05110a"/>
                       </svg>
                       <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px]">🏀</div>
                     </div>
                   </div>
                 </div>

                 {/* Zoom Controls */}
                 <div className="absolute right-4 bottom-24 bg-[#0a1a12] border border-white/10 rounded-lg flex flex-col z-20">
                    <button className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 rounded-t-lg border-b border-white/10">+</button>
                    <button className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 rounded-b-lg">-</button>
                 </div>

                 {/* Bottom Info Bar inside map */}
                 <div className="absolute bottom-4 left-4 right-4 bg-[#0a1a12]/90 backdrop-blur border border-white/10 rounded-xl p-3 flex justify-between items-center z-20">
                   <div className="flex items-center gap-3">
                     <MapPin size={16} className="text-brand-lime"/>
                     <div>
                       <div className="font-bold text-xs text-white">India Gate, New Delhi</div>
                       <div className="text-[10px] text-gray-400">Showing games within <span className="text-brand-lime font-bold">{radius}</span> radius</div>
                     </div>
                   </div>
                   <button className="text-[10px] text-gray-400 font-bold uppercase tracking-widest hover:text-white">Change Location</button>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. WHY PLAY NEAR YOU */}
      <section className="py-12 border-t border-white/10 bg-[#0a1a12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="font-heading font-black text-2xl mb-8">Why Play Near You?</h2>
           <div className="grid grid-autofit gap-6">
             
             <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime flex-shrink-0 bg-brand-lime/5">
                 <MapPin size={20}/>
               </div>
               <div>
                 <h3 className="font-bold text-sm mb-1 text-white">Find Nearby Games</h3>
                 <p className="text-xs text-gray-400 leading-relaxed">Discover games happening around your location right now.</p>
               </div>
             </div>

             <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime flex-shrink-0 bg-brand-lime/5">
                 <Users size={20}/>
               </div>
               <div>
                 <h3 className="font-bold text-sm mb-1 text-white">Meet Local Players</h3>
                 <p className="text-xs text-gray-400 leading-relaxed">Connect with players in your community and build your team.</p>
               </div>
             </div>

             <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime flex-shrink-0 bg-brand-lime/5">
                 <Calendar size={20}/>
               </div>
               <div>
                 <h3 className="font-bold text-sm mb-1 text-white">Play Anytime</h3>
                 <p className="text-xs text-gray-400 leading-relaxed">Find games that fit your schedule, whether morning or night.</p>
               </div>
             </div>

             <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime flex-shrink-0 bg-brand-lime/5">
                 <Shield size={20}/>
               </div>
               <div>
                 <h3 className="font-bold text-sm mb-1 text-white">Safe & Trusted</h3>
                 <p className="text-xs text-gray-400 leading-relaxed">All players are verified for a safe and competitive playing experience.</p>
               </div>
             </div>

           </div>
        </div>
      </section>
      
    </div>
  );
}
