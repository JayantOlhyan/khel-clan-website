import React, { useState } from 'react';
import { Search, MapPin, Calendar, CheckCircle, ChevronDown, Filter, ChevronLeft, ChevronRight, Trophy, Users, Share2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Tournaments() {
  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=2000" 
            alt="Tournaments Hero" 
            className="w-full h-full object-cover opacity-20 object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05110a] via-[#05110a]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] via-[#05110a]/50 to-[#05110a]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-brand-lime text-[10px] font-black uppercase tracking-widest mb-4">
            <Trophy size={14}/> TOURNAMENTS
          </div>
          <h1 className="font-heading font-black text-5xl md:text-6xl mb-4 leading-tight">
            Compete. Conquer.<br/>
            <span className="text-brand-lime">Celebrate.</span>
          </h1>
          <p className="text-gray-300 font-body text-base max-w-xl mb-10 leading-relaxed">
            Discover tournaments across multiple sports. Join, compete and become a champion with Khel Clan.
          </p>

          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 flex items-center justify-center text-brand-lime"><Trophy size={28}/></div>
               <div>
                 <div className="font-heading font-black text-xl leading-none">120+</div>
                 <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Tournaments</div>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 flex items-center justify-center text-brand-lime"><CheckCircle size={28}/></div>
               <div>
                 <div className="font-heading font-black text-xl leading-none">15+</div>
                 <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Sports</div>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 flex items-center justify-center text-brand-lime"><MapPin size={28}/></div>
               <div>
                 <div className="font-heading font-black text-xl leading-none">25+</div>
                 <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Cities</div>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 flex items-center justify-center text-brand-lime"><Users size={28}/></div>
               <div>
                 <div className="font-heading font-black text-xl leading-none">5K+</div>
                 <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Teams</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEARCH BAR */}
      <div className="border-b border-white/10 bg-[#0a1a12] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-4 overflow-x-auto hide-scrollbar">
            <div className="relative flex-grow min-w-[200px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search tournaments by name, sport, or location..." 
                className="w-full bg-[#05110a] border border-white/10 text-white pl-11 pr-4 py-3 rounded-lg focus:outline-none focus:border-brand-lime transition-colors text-sm"
              />
            </div>
            <div className="relative flex-shrink-0">
              <select className="appearance-none bg-[#05110a] border border-white/10 text-white pl-4 pr-10 py-3 rounded-lg focus:outline-none focus:border-brand-lime transition-colors text-sm w-40 font-bold">
                <option>All Sports</option>
                <option>Football</option>
                <option>Cricket</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <div className="relative flex-shrink-0">
              <select className="appearance-none bg-[#05110a] border border-white/10 text-white pl-4 pr-10 py-3 rounded-lg focus:outline-none focus:border-brand-lime transition-colors text-sm w-40 font-bold">
                <option>All Cities</option>
                <option>Delhi</option>
                <option>Mumbai</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <div className="relative flex-shrink-0">
              <select className="appearance-none bg-[#05110a] border border-white/10 text-white pl-4 pr-10 py-3 rounded-lg focus:outline-none focus:border-brand-lime transition-colors text-sm w-48 font-bold">
                <option>All Tournament Types</option>
                <option>Knockout</option>
                <option>League</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <div className="relative flex-shrink-0">
              <select className="appearance-none bg-[#05110a] border border-white/10 text-white pl-4 pr-10 py-3 rounded-lg focus:outline-none focus:border-brand-lime transition-colors text-sm w-36 font-bold">
                <option>All Dates</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <button className="flex-shrink-0 bg-[#05110a] border border-white/10 text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:border-brand-lime hover:text-brand-lime transition-colors flex items-center gap-2">
              <Filter size={16} /> MORE FILTERS
            </button>
          </div>
        </div>
      </div>

      {/* 3. MAIN CONTENT GRID */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT SIDEBAR (Filters) */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="sticky top-28 space-y-6">
               <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                 <h3 className="font-heading font-black text-sm uppercase tracking-widest text-white">FILTERS</h3>
                 <button className="text-brand-lime text-xs font-bold hover:underline">Clear All</button>
               </div>
               
               <div className="space-y-4">
                 <h4 className="font-bold text-xs text-gray-400 uppercase tracking-widest">SPORT</h4>
                 <label className="flex items-center gap-3 cursor-pointer group">
                   <div className="w-4 h-4 rounded border border-brand-lime bg-brand-lime flex items-center justify-center text-[#05110a]"><CheckCircle size={12}/></div>
                   <span className="text-sm font-bold text-white">All Sports</span>
                 </label>
                 {['Football', 'Cricket', 'Basketball', 'Badminton', 'Volleyball', 'Table Tennis', 'Tennis'].map((item) => (
                   <label key={item} className="flex items-center gap-3 cursor-pointer group">
                     <div className="w-4 h-4 rounded border border-white/20 group-hover:border-white/50 transition-colors"></div>
                     <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{item}</span>
                   </label>
                 ))}
                 <button className="text-xs text-brand-lime font-bold hover:underline flex items-center gap-1">+ More Sports</button>
               </div>

               <div className="space-y-4 pt-4 border-t border-white/10">
                 <h4 className="font-bold text-xs text-gray-400 uppercase tracking-widest">TOURNAMENT TYPE</h4>
                 <label className="flex items-center gap-3 cursor-pointer group">
                   <div className="w-4 h-4 rounded border border-brand-lime bg-brand-lime flex items-center justify-center text-[#05110a]"><CheckCircle size={12}/></div>
                   <span className="text-sm font-bold text-white">All Types</span>
                 </label>
                 {['Open', 'Invite Only', 'League', 'Knockout', 'Championship', 'Friendly'].map((item) => (
                   <label key={item} className="flex items-center gap-3 cursor-pointer group">
                     <div className="w-4 h-4 rounded border border-white/20 group-hover:border-white/50 transition-colors"></div>
                     <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{item}</span>
                   </label>
                 ))}
               </div>

               <div className="space-y-4 pt-4 border-t border-white/10">
                 <h4 className="font-bold text-xs text-gray-400 uppercase tracking-widest">LOCATION</h4>
                 <div className="relative mb-2">
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                   <input type="text" placeholder="Search city or area..." className="w-full bg-[#0a1a12] border border-white/10 text-white pl-9 pr-3 py-2 rounded text-xs focus:outline-none focus:border-brand-lime" />
                 </div>
                 <label className="flex items-center gap-3 cursor-pointer group">
                   <div className="w-4 h-4 rounded border border-brand-lime bg-brand-lime flex items-center justify-center text-[#05110a]"><CheckCircle size={12}/></div>
                   <span className="text-sm font-bold text-white">All Locations</span>
                 </label>
                 {['Delhi NCR', 'Mumbai', 'Bangalore', 'Hyderabad', 'Pune', 'Chennai'].map((item) => (
                   <label key={item} className="flex items-center gap-3 cursor-pointer group">
                     <div className="w-4 h-4 rounded border border-white/20 group-hover:border-white/50 transition-colors"></div>
                     <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{item}</span>
                   </label>
                 ))}
                 <button className="text-xs text-brand-lime font-bold hover:underline flex items-center gap-1">+ More</button>
               </div>

               <div className="space-y-4 pt-4 border-t border-white/10">
                 <h4 className="font-bold text-xs text-gray-400 uppercase tracking-widest">DATE</h4>
                 <label className="flex items-center gap-3 cursor-pointer group">
                   <div className="w-4 h-4 rounded border border-brand-lime bg-brand-lime flex items-center justify-center text-[#05110a]"><CheckCircle size={12}/></div>
                   <span className="text-sm font-bold text-white">All Dates</span>
                 </label>
                 {['This Week', 'This Month', 'Next Month'].map((item) => (
                   <label key={item} className="flex items-center gap-3 cursor-pointer group">
                     <div className="w-4 h-4 rounded border border-white/20 group-hover:border-white/50 transition-colors"></div>
                     <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{item}</span>
                   </label>
                 ))}
                 <label className="flex items-center gap-3 cursor-pointer group">
                     <div className="w-4 h-4 rounded border border-white/20 group-hover:border-white/50 transition-colors flex items-center justify-center"><Calendar size={10}/></div>
                     <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Custom Range</span>
                 </label>
               </div>

               <button className="w-full bg-[#05110a] border border-white/20 py-3 rounded-lg text-xs font-bold uppercase tracking-widest hover:border-brand-lime hover:text-brand-lime transition-colors flex items-center justify-center mt-6">
                 APPLY FILTERS
               </button>
            </div>
          </div>

          {/* MAIN COLUMN (Grid) */}
          <div className="lg:col-span-7">
             <div className="flex justify-between items-center mb-6">
               <h2 className="font-heading font-black text-xl">120+ Tournaments Found</h2>
               <div className="flex items-center gap-2 text-sm text-gray-400">
                 Sort by: 
                 <select className="bg-transparent border-none text-white font-bold focus:outline-none cursor-pointer">
                   <option>Upcoming First</option>
                   <option>Prize Pool: High to Low</option>
                   <option>Recently Added</option>
                 </select>
               </div>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               
               {/* Tournament Cards */}
               {[
                 { title: "Khel Clan Football Championship 2025", tag: "FEATURED", sport: "FOOTBALL", format: "Open • Knockout", date: "May 25 – May 30, 2025", loc: "Green Field Arena, Delhi", teams: "32 Teams • 320+ Players", prize: "₹1,00,000", img: "https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=600", tagColor: "yellow-400" },
                 { title: "Urban Cricket League Season 2", tag: "NEW", sport: "CRICKET", format: "Open • League", date: "May 18 – Jun 15, 2025", loc: "Urban Sports Hub, Mumbai", teams: "16 Teams • 160+ Players", prize: "₹75,000", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600", tagColor: "brand-lime" },
                 { title: "3x3 Basketball Showdown", tag: "TRENDING", sport: "BASKETBALL", format: "Open • Knockout", date: "Jun 1 – Jun 2, 2025", loc: "Hoop Arena, Bangalore", teams: "24 Teams • 96+ Players", prize: "₹50,000", img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=600", tagColor: "orange-400" },
                 { title: "Badminton Open Singles", tag: null, sport: "BADMINTON", format: "Open • Knockout", date: "May 20 – May 21, 2025", loc: "Smash Arena, Hyderabad", teams: "64 Players", prize: "₹25,000", img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=600", tagColor: "" },
                 { title: "Volleyball Night League", tag: null, sport: "VOLLEYBALL", format: "Open • League", date: "Jun 8 – Jul 6, 2025", loc: "Ace Sports Center, Pune", teams: "12 Teams • 144+ Players", prize: "₹40,000", img: "https://images.unsplash.com/photo-1593789280629-87a2d8291410?auto=format&fit=crop&q=80&w=600", tagColor: "" },
                 { title: "Table Tennis Cup 2025", tag: null, sport: "TABLE TENNIS", format: "Open • Knockout", date: "May 27 – May 28, 2025", loc: "TT Arena, Delhi", teams: "128 Players", prize: "₹15,000", img: "https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&q=80&w=600", tagColor: "" }
               ].map((t, i) => (
                 <div key={i} className="bg-[#0a1a12] border border-white/10 rounded-2xl overflow-hidden group hover:border-brand-lime/30 transition-colors flex flex-col h-full">
                   <div className="relative h-48 overflow-hidden">
                     <img src={t.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt=""/>
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] to-transparent"></div>
                     {t.tag && <div className={`absolute top-4 left-4 bg-${t.tagColor}/10 border border-${t.tagColor}/30 text-${t.tagColor} text-[8px] font-black px-2 py-1 rounded uppercase tracking-widest backdrop-blur-sm`}>{t.tag}</div>}
                     <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:text-brand-lime transition-colors"><Heart size={14}/></button>
                     <div className="absolute bottom-4 left-4 border border-brand-lime/30 bg-brand-lime/10 text-brand-lime text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded backdrop-blur-sm">{t.sport}</div>
                   </div>
                   <div className="p-5 flex-grow flex flex-col">
                     <h3 className="font-bold text-lg mb-1 leading-tight group-hover:text-brand-lime transition-colors">{t.title}</h3>
                     <p className="text-[10px] text-gray-400 mb-4">{t.format}</p>
                     
                     <div className="space-y-2 text-[10px] text-gray-300 font-bold mb-6 flex-grow">
                       <div className="flex items-start gap-2">
                         <Calendar size={14} className="text-gray-500 mt-0.5" />
                         <span>{t.date}</span>
                       </div>
                       <div className="flex items-start gap-2">
                         <MapPin size={14} className="text-gray-500 mt-0.5" />
                         <span>{t.loc}</span>
                       </div>
                       <div className="flex items-start gap-2">
                         <Users size={14} className="text-gray-500 mt-0.5" />
                         <span>{t.teams}</span>
                       </div>
                     </div>
                     
                     <div className="flex justify-between items-end border-t border-white/10 pt-4 mb-4">
                       <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Prize Pool</span>
                       <span className="font-heading font-black text-brand-lime text-lg leading-none">{t.prize}</span>
                     </div>
                     
                     <div className="flex gap-2">
                       <Link to="/tournaments/demo" className="flex-grow bg-brand-lime text-[#05110a] py-3 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center text-center">
                         VIEW DETAILS
                       </Link>
                       <button className="flex-shrink-0 w-12 border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/5 transition-colors"><Share2 size={16}/></button>
                     </div>
                   </div>
                 </div>
               ))}

             </div>
             
             {/* Pagination */}
             <div className="flex justify-center items-center gap-2 mt-12">
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 transition-colors"><ChevronLeft size={18}/></button>
               <button className="w-10 h-10 rounded border border-brand-lime bg-brand-lime flex items-center justify-center text-[#05110a] font-bold">1</button>
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 transition-colors font-bold">2</button>
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 transition-colors font-bold">3</button>
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 transition-colors font-bold">4</button>
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 transition-colors font-bold">5</button>
               <span className="text-gray-500">..</span>
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 transition-colors font-bold">8</button>
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"><ChevronRight size={18}/></button>
             </div>

          </div>

          {/* RIGHT SIDEBAR (Widgets) */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
             
             {/* Upcoming Tournaments List */}
             <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6 sticky top-28">
               <div className="flex justify-between items-end mb-6">
                 <h3 className="font-heading font-black text-sm uppercase tracking-widest">UPCOMING TOURNAMENTS</h3>
                 <button className="text-brand-lime text-[10px] font-bold uppercase hover:underline">View All</button>
               </div>
               
               <div className="space-y-4">
                 {[
                   { dateM: "MAY", dateD: "17", title: "Friendly Football Match", loc: "Delhi, India", time: "Tomorrow", tag: "Friendly", sport: "BASKETBALL", img: "https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=100" },
                   { dateM: "MAY", dateD: "18", title: "Summer Cricket League", loc: "Mumbai, India", time: "2 Days Left", tag: "League", sport: "CRICKET", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=100" },
                   { dateM: "MAY", dateD: "20", title: "Badminton Open Singles", loc: "Hyderabad, India", time: "4 Days Left", tag: "Knockout", sport: "BADMINTON", img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=100" },
                   { dateM: "MAY", dateD: "24", title: "Basketball League", loc: "Bangalore, India", time: "1 Week Left", tag: "League", sport: "BASKETBALL", img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=100" },
                   { dateM: "MAY", dateD: "27", title: "Tennis Weekend Cup", loc: "Pune, India", time: "1 Week Left", tag: "Knockout", sport: "TENNIS", img: "https://images.unsplash.com/photo-1593789280629-87a2d8291410?auto=format&fit=crop&q=80&w=100" }
                 ].map((g, i) => (
                   <div key={i} className="flex gap-3 group cursor-pointer border-b border-white/5 pb-4 last:border-0 last:pb-0">
                     <div className="relative w-14 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-white/10">
                       <img src={g.img} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" alt=""/>
                       <div className="absolute inset-0 bg-[#05110a]/60 group-hover:bg-transparent transition-colors"></div>
                       <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                         <span className="text-[8px] text-brand-lime font-bold uppercase">{g.dateM}</span>
                         <span className="font-heading font-black text-white leading-none text-lg">{g.dateD}</span>
                       </div>
                       <div className="absolute bottom-0 left-0 right-0 bg-brand-lime text-[#05110a] text-[5px] font-black uppercase text-center">{g.sport}</div>
                     </div>
                     <div className="flex-grow flex flex-col justify-between py-0.5">
                       <div>
                         <h4 className="font-bold text-white text-xs leading-tight mb-0.5 group-hover:text-brand-lime transition-colors">{g.title}</h4>
                         <p className="text-[10px] text-gray-500">{g.loc}</p>
                       </div>
                       <div className="flex items-center justify-between text-[8px] font-bold uppercase">
                         <span className="text-yellow-400">{g.time}</span>
                         <span className="text-gray-400">{g.tag}</span>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Popular Sports */}
             <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
               <div className="flex justify-between items-end mb-4">
                 <h3 className="font-heading font-black text-sm uppercase tracking-widest">POPULAR SPORTS</h3>
                 <button className="text-brand-lime text-[10px] font-bold uppercase hover:underline">View All</button>
               </div>
               <div className="space-y-2 text-xs">
                 <div className="flex justify-between text-gray-400 hover:text-white transition-colors cursor-pointer py-1"><span>⚽ Football</span> <span>45 Tournaments</span></div>
                 <div className="flex justify-between text-gray-400 hover:text-white transition-colors cursor-pointer py-1"><span>🏏 Cricket</span> <span>28 Tournaments</span></div>
                 <div className="flex justify-between text-gray-400 hover:text-white transition-colors cursor-pointer py-1"><span>🏀 Basketball</span> <span>18 Tournaments</span></div>
                 <div className="flex justify-between text-gray-400 hover:text-white transition-colors cursor-pointer py-1"><span>🏸 Badminton</span> <span>12 Tournaments</span></div>
                 <div className="flex justify-between text-gray-400 hover:text-white transition-colors cursor-pointer py-1"><span>🏐 Volleyball</span> <span>8 Tournaments</span></div>
                 <div className="flex justify-between text-gray-400 hover:text-white transition-colors cursor-pointer py-1"><span>🏓 Table Tennis</span> <span>6 Tournaments</span></div>
               </div>
             </div>

             {/* CTA Block */}
             <div className="bg-gradient-to-br from-[#0a1a12] to-[#122c1d] border border-brand-lime/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute right-0 bottom-0 opacity-10">
                  <Trophy size={100} className="text-brand-lime transform translate-x-4 translate-y-4"/>
                </div>
                <h3 className="font-heading font-black text-lg mb-2 relative z-10">Organize a Tournament</h3>
                <p className="text-xs text-gray-400 mb-6 relative z-10 max-w-[200px]">Create and manage your own tournament with Khel Clan.</p>
                <button className="w-full bg-brand-lime text-[#05110a] py-3 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-colors relative z-10 flex items-center justify-center gap-2">
                  CREATE TOURNAMENT ↗
                </button>
             </div>

          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-[#0a1a12] border border-brand-lime/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
           <div className="absolute right-0 bottom-0 opacity-40 pointer-events-none w-1/3">
              <img src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover mask-image-fade" alt=""/>
           </div>
           
           <div className="relative z-10 flex items-center gap-6">
             <div className="w-16 h-16 bg-brand-lime rounded-full flex items-center justify-center text-[#05110a] flex-shrink-0">
               <Users size={32}/>
             </div>
             <div>
               <h3 className="font-heading font-black text-2xl mb-1">Find your next challenge</h3>
               <p className="text-sm text-gray-400">Join tournaments, meet new players, and showcase your skills.</p>
             </div>
           </div>
           
           <button className="bg-brand-lime text-[#05110a] px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors relative z-10 whitespace-nowrap">
             EXPLORE EVENTS ↗
           </button>
        </div>
      </section>
      
    </div>
  );
}
