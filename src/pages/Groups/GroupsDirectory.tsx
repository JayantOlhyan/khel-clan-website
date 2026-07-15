import React, { useState } from 'react';
import { Search, MapPin, Users, Trophy, Star, ChevronDown, CheckCircle, ChevronRight, Shield, Calendar, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Groups() {
  const groups = [
    { id: 'delhi-football-warriors', name: "Delhi Football Warriors", sport: "FOOTBALL", desc: "A passionate group of players who love the beautiful game. Weekly matches, tournaments & good vibes!", loc: "Delhi, India", level: "All Skill Levels", members: 32, img: "https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=400", verified: true, joinStatus: "JOIN", rating: 4.8 },
    { id: 'noida-cricket-club', name: "Noida Cricket Club", sport: "CRICKET", desc: "From gully cricket to tournament wins. All skill levels welcome. Let's grow together!", loc: "Noida, Uttar Pradesh", level: "Intermediate", members: 24, img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=400", verified: true, joinStatus: "REQUEST TO JOIN", rating: 4.6 },
    { id: 'hoop-dreams-delhi', name: "Hoop Dreams Delhi", sport: "BASKETBALL", desc: "Basketball lovers unite! We play, we compete, we improve together.", loc: "Delhi, India", level: "All Skill Levels", members: 18, img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=400", verified: true, joinStatus: "JOIN", rating: 4.9 },
    { id: 'smash-squad', name: "Smash Squad", sport: "BADMINTON", desc: "Play hard, smash harder! Join for regular games and friendly tournaments.", loc: "Gurgaon, Haryana", level: "Beginner Friendly", members: 16, img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=400", verified: true, joinStatus: "REQUEST TO JOIN", rating: 4.5 },
    { id: 'net-set-go', name: "Net Set Go", sport: "VOLLEYBALL", desc: "Volleyball is more fun when we do it together. All are welcome!", loc: "Mumbai, Maharashtra", level: "All Skill Levels", members: 22, img: "https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&q=80&w=400", verified: true, joinStatus: "JOIN", rating: 4.7 }
  ];

  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black pt-20">
      
      {/* 1. HERO */}
      <section className="relative py-16 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80&w=2000" 
            alt="Team Huddle" 
            className="w-full h-full object-cover opacity-30 object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05110a] via-[#05110a]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading font-black text-5xl md:text-7xl leading-none mb-6 uppercase">
              STRONGER TOGETHER.<br/>
              <span className="text-brand-lime">PLAY AS A TEAM.</span>
            </h1>
            <p className="text-gray-300 font-body text-lg mb-8 max-w-xl">
              Join existing groups or create your own. Build connections, play more, grow together.
            </p>

            <div className="flex flex-wrap gap-6 md:gap-12">
               <div className="flex items-center gap-3">
                 <Users className="text-brand-lime" size={24} />
                 <div><div className="font-bold text-white text-lg leading-none">1,250+</div><div className="text-[10px] text-gray-500 uppercase">Active Groups</div></div>
               </div>
               <div className="flex items-center gap-3">
                 <Trophy className="text-brand-lime" size={24} />
                 <div><div className="font-bold text-white text-lg leading-none">18K+</div><div className="text-[10px] text-gray-500 uppercase">Members</div></div>
               </div>
               <div className="flex items-center gap-3">
                 <Calendar className="text-brand-lime" size={24} />
                 <div><div className="font-bold text-white text-lg leading-none">3,200+</div><div className="text-[10px] text-gray-500 uppercase">Games Played</div></div>
               </div>
               <div className="flex items-center gap-3">
                 <MapPin className="text-brand-lime" size={24} />
                 <div><div className="font-bold text-white text-lg leading-none">120+</div><div className="text-[10px] text-gray-500 uppercase">Cities</div></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & FILTERS BAR */}
      <section className="border-b border-white/10 bg-[#0a1a12] sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center gap-4">
          <div className="flex-grow flex items-center bg-[#05110a] border border-white/10 rounded-lg px-4 h-12 w-full">
            <Search className="text-gray-500 mr-2" size={18} />
            <input type="text" placeholder="Search groups by name, sport, location..." className="bg-transparent border-none text-white focus:ring-0 placeholder-gray-600 text-sm w-full" />
          </div>
          
          <div className="flex gap-3 overflow-x-auto hide-scrollbar w-full md:w-auto">
            {['All Sports', 'All Locations', 'All Skill Levels', 'Members'].map((f, i) => (
              <button key={i} className="flex items-center justify-between bg-[#05110a] border border-white/10 rounded-lg px-4 h-12 min-w-[140px] text-sm text-gray-300 hover:border-brand-lime/50 transition-colors">
                <span className="font-bold whitespace-nowrap">{f}</span>
                <ChevronDown size={14} className="text-gray-500 ml-2" />
              </button>
            ))}
            <button className="flex items-center gap-2 bg-transparent border border-white/20 rounded-lg px-4 h-12 text-sm text-white hover:bg-white/10 transition-colors font-bold whitespace-nowrap">
               <Filter size={14}/> More Filters
            </button>
          </div>
        </div>

        {/* Categories Scroller */}
        <div className="border-t border-white/5 py-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
           <div className="flex gap-2 overflow-x-auto hide-scrollbar flex-grow">
             <button className="px-4 py-2 rounded-full bg-brand-lime text-[#05110a] font-bold text-xs uppercase tracking-widest flex items-center gap-2 whitespace-nowrap">
               <Users size={14}/> All Groups
             </button>
             {['Football', 'Cricket', 'Basketball', 'Badminton', 'Volleyball', 'Table Tennis'].map(s => (
               <button key={s} className="px-4 py-2 rounded-full bg-transparent border border-white/10 text-gray-400 hover:text-white hover:border-white/30 font-bold text-xs uppercase tracking-widest flex items-center gap-2 whitespace-nowrap transition-colors">
                 {s === 'Football' ? '⚽' : s === 'Cricket' ? '🏏' : s === 'Basketball' ? '🏀' : s === 'Badminton' ? '🏸' : s === 'Volleyball' ? '🏐' : '🏓'} {s}
               </button>
             ))}
           </div>
           
           <div className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest pl-4 ml-4 border-l border-white/10 text-gray-400">
             Sort by: <span className="text-white flex items-center cursor-pointer">Recently Active <ChevronDown size={14} className="ml-1"/></span>
           </div>
        </div>
      </section>

      {/* 3. MAIN LAYOUT */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="text-gray-400 text-sm font-bold mb-2"><span className="text-white">1,250+</span> Groups Found</div>
            
            <div className="space-y-4">
              {groups.map((group, i) => (
                <div key={i} className="bg-[#0a1a12] border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-6 hover:border-brand-lime/30 transition-colors group relative">
                  
                  <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden relative flex-shrink-0 border border-white/5">
                    <img src={group.img} alt={group.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>

                  <div className="flex-grow flex flex-col justify-between">
                     <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="bg-brand-lime/10 text-brand-lime border border-brand-lime/20 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider inline-block mb-2">{group.sport}</span>
                          <h3 className="font-heading font-black text-xl flex items-center gap-2">
                             <Link to={`/groups/${group.id}`} className="hover:text-brand-lime transition-colors">{group.name}</Link> 
                             {group.verified && <CheckCircle size={16} className="text-brand-lime" />}
                          </h3>
                        </div>
                        <button className="text-gray-500 hover:text-white">⋮</button>
                     </div>

                     <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2 max-w-lg">{group.desc}</p>
                     
                     <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-400 mb-4">
                       <span className="flex items-center gap-1"><MapPin size={14}/> {group.loc}</span>
                       <span className="flex items-center gap-1"><Shield size={14}/> {group.level}</span>
                       <span className="flex items-center gap-1"><Users size={14}/> {group.members} Members</span>
                     </div>

                     <div className="flex items-center justify-between border-t border-white/5 pt-4">
                        <div className="flex items-center -space-x-2">
                          {[1,2,3,4,5].map(j => (
                            <img key={j} src={`https://i.pravatar.cc/150?u=${i}${j}`} className="w-8 h-8 rounded-full border-2 border-[#0a1a12]" alt="" />
                          ))}
                          <div className="w-8 h-8 rounded-full border-2 border-[#0a1a12] bg-white/10 flex items-center justify-center text-[10px] font-bold text-white">+{group.members - 5}</div>
                        </div>

                        <div className="flex gap-2">
                          <Link to={`/groups/${group.id}`} className="bg-transparent border border-white/20 text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors hidden sm:block">
                            VIEW GROUP
                          </Link>
                          <button className={`${group.joinStatus === 'JOIN' ? 'bg-brand-lime text-[#05110a] hover:bg-white' : 'bg-transparent border border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-[#05110a]'} px-4 py-2 rounded text-xs font-bold uppercase tracking-widest transition-colors`}>
                            {group.joinStatus}
                          </button>
                        </div>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            <div className="bg-[#05110a] border border-brand-lime/20 rounded-2xl p-6 flex flex-col items-center text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="w-16 h-16 rounded-full bg-brand-lime/10 flex items-center justify-center text-brand-lime mb-4 relative z-10">
                 <Users size={32} />
               </div>
               <h3 className="font-heading font-black text-xl mb-2 relative z-10">CREATE YOUR GROUP</h3>
               <p className="text-sm text-gray-400 mb-6 relative z-10">Build your own team, invite players and start playing together.</p>
               <button className="w-full bg-brand-lime text-[#05110a] py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors relative z-10">
                 CREATE GROUP ↗
               </button>
            </div>

            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
               <div className="flex justify-between items-end mb-4">
                 <h3 className="font-heading font-black text-lg uppercase">POPULAR GROUPS</h3>
                 <button className="text-brand-lime text-xs font-bold uppercase tracking-widest hover:underline">View All</button>
               </div>
               
               <div className="space-y-4">
                 {[
                   { name: "Kickoff Kings", sport: "Football", members: 45, img: "https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=150" },
                   { name: "Boundary Bashers", sport: "Cricket", members: 38, img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=150" },
                   { name: "Court Hustlers", sport: "Basketball", members: 31, img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=150" },
                   { name: "Shuttle Kings", sport: "Badminton", members: 29, img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=150" },
                   { name: "Spike Society", sport: "Volleyball", members: 27, img: "https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&q=80&w=150" }
                 ].map((g, i) => (
                   <div key={i} className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                       <img src={g.img} className="w-10 h-10 rounded-full object-cover border border-white/10" alt=""/>
                       <div>
                         <h4 className="font-bold text-white text-sm hover:text-brand-lime cursor-pointer">{g.name}</h4>
                         <p className="text-xs text-gray-500">{g.sport} • {g.members} Members</p>
                       </div>
                     </div>
                     <button className="bg-transparent border border-white/20 text-white px-3 py-1 rounded text-[10px] font-bold uppercase hover:bg-white hover:text-[#05110a] transition-colors">
                       JOIN
                     </button>
                   </div>
                 ))}
               </div>
            </div>

            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
               <div className="flex justify-between items-end mb-4">
                 <h3 className="font-heading font-black text-lg uppercase">UPCOMING GAMES</h3>
                 <button className="text-brand-lime text-xs font-bold uppercase tracking-widest hover:underline">View All</button>
               </div>
               
               <div className="space-y-4">
                 {[
                   { name: "DFW vs Ball Busters", sport: "Football", date: "Today, 7:00 PM", loc: "Green Field Arena" },
                   { name: "NCC vs Titans", sport: "Cricket", date: "Tomorrow, 8:00 AM", loc: "Noida Stadium" },
                   { name: "Hoop Dreams Match", sport: "Basketball", date: "18 May, 6:00 PM", loc: "Urban Sports Hub" }
                 ].map((g, i) => (
                   <div key={i} className="flex gap-3 pb-3 border-b border-white/5 last:border-0 last:pb-0">
                     <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center flex-shrink-0 text-brand-lime mt-1">⚽</div>
                     <div>
                       <h4 className="font-bold text-white text-sm mb-1">{g.name}</h4>
                       <p className="text-[10px] text-gray-500 uppercase font-bold">{g.sport}</p>
                       <div className="flex flex-wrap gap-x-2 text-[10px] text-gray-400 mt-1">
                         <span className="flex items-center gap-1"><Calendar size={10}/> {g.date}</span>
                         <span className="flex items-center gap-1"><MapPin size={10}/> {g.loc}</span>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
               
               <button className="w-full bg-[#05110a] border border-white/10 mt-4 py-2.5 rounded text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:border-white/30 transition-colors flex items-center justify-center gap-1">
                 VIEW ALL GAMES ↗
               </button>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}
