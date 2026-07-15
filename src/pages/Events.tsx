import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Filter, ChevronDown, CheckCircle, ChevronRight, Play, Trophy, Clock, Share2, Bell, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=2000" 
            alt="Events Hero" 
            className="w-full h-full object-cover opacity-30 object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05110a] via-[#05110a]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] via-[#05110a]/50 to-[#05110a]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-brand-lime mb-4 uppercase tracking-widest text-xs font-bold">
            <Calendar size={16} /> EVENTS
          </div>
          
          <h1 className="font-heading font-black text-5xl md:text-6xl mb-4 leading-tight">
            Find Events.<br/>
            <span className="text-brand-lime">Play. Compete. Connect.</span>
          </h1>
          
          <p className="text-gray-300 font-body text-base max-w-2xl mb-8 leading-relaxed">
            Explore exciting sports events, tournaments, and community meets near you or across the country.
          </p>

          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
               <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-lime"><Calendar size={24}/></div>
               <div>
                 <div className="font-heading font-black text-2xl leading-none">250+</div>
                 <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">Upcoming Events</div>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-lime"><Trophy size={24}/></div>
               <div>
                 <div className="font-heading font-black text-2xl leading-none">20+</div>
                 <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">Sports</div>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-lime"><MapPin size={24}/></div>
               <div>
                 <div className="font-heading font-black text-2xl leading-none">50+</div>
                 <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">Cities</div>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-lime"><Users size={24}/></div>
               <div>
                 <div className="font-heading font-black text-2xl leading-none">10K+</div>
                 <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">Participants</div>
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
                placeholder="Search events by name, sport, or location..." 
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
                <option>Delhi NCR</option>
                <option>Mumbai</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <div className="relative flex-shrink-0">
              <select className="appearance-none bg-[#05110a] border border-white/10 text-white pl-4 pr-10 py-3 rounded-lg focus:outline-none focus:border-brand-lime transition-colors text-sm w-48 font-bold">
                <option>All Event Types</option>
                <option>Tournament</option>
                <option>League</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <div className="relative flex-shrink-0">
              <select className="appearance-none bg-[#05110a] border border-white/10 text-white pl-4 pr-10 py-3 rounded-lg focus:outline-none focus:border-brand-lime transition-colors text-sm w-40 font-bold">
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
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 space-y-6">
               <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                 <h3 className="font-heading font-black text-sm uppercase tracking-widest text-white">FILTERS</h3>
                 <button className="text-brand-lime text-xs font-bold hover:underline">Clear All</button>
               </div>
               
               <div className="space-y-4">
                 <h4 className="font-bold text-xs text-gray-400 uppercase tracking-widest">EVENT TYPE</h4>
                 <label className="flex items-center gap-3 cursor-pointer group">
                   <div className="w-4 h-4 rounded border border-brand-lime bg-brand-lime flex items-center justify-center text-[#05110a]"><CheckCircle size={12}/></div>
                   <span className="text-sm font-bold text-white">All Types</span>
                 </label>
                 <label className="flex items-center gap-3 cursor-pointer group">
                   <div className="w-4 h-4 rounded border border-white/20 group-hover:border-white/50 transition-colors"></div>
                   <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Tournament</span>
                 </label>
                 <label className="flex items-center gap-3 cursor-pointer group">
                   <div className="w-4 h-4 rounded border border-white/20 group-hover:border-white/50 transition-colors"></div>
                   <span className="text-sm text-gray-400 group-hover:text-white transition-colors">League</span>
                 </label>
                 <label className="flex items-center gap-3 cursor-pointer group">
                   <div className="w-4 h-4 rounded border border-white/20 group-hover:border-white/50 transition-colors"></div>
                   <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Friendly Match</span>
                 </label>
                 <label className="flex items-center gap-3 cursor-pointer group">
                   <div className="w-4 h-4 rounded border border-white/20 group-hover:border-white/50 transition-colors"></div>
                   <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Camp / Training</span>
                 </label>
                 <label className="flex items-center gap-3 cursor-pointer group">
                   <div className="w-4 h-4 rounded border border-white/20 group-hover:border-white/50 transition-colors"></div>
                   <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Community Meet</span>
                 </label>
               </div>

               <div className="space-y-4 pt-4 border-t border-white/10">
                 <h4 className="font-bold text-xs text-gray-400 uppercase tracking-widest">SPORT</h4>
                 <label className="flex items-center gap-3 cursor-pointer group">
                   <div className="w-4 h-4 rounded border border-brand-lime bg-brand-lime flex items-center justify-center text-[#05110a]"><CheckCircle size={12}/></div>
                   <span className="text-sm font-bold text-white">All Sports</span>
                 </label>
                 {['Football', 'Cricket', 'Basketball', 'Badminton', 'Tennis'].map((item) => (
                   <label key={item} className="flex items-center gap-3 cursor-pointer group">
                     <div className="w-4 h-4 rounded border border-white/20 group-hover:border-white/50 transition-colors"></div>
                     <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{item}</span>
                   </label>
                 ))}
                 <button className="text-xs text-brand-lime font-bold hover:underline flex items-center gap-1">+ More Sports</button>
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
                 {['Delhi NCR', 'Mumbai', 'Bangalore', 'Hyderabad', 'Pune'].map((item) => (
                   <label key={item} className="flex items-center gap-3 cursor-pointer group">
                     <div className="w-4 h-4 rounded border border-white/20 group-hover:border-white/50 transition-colors"></div>
                     <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{item}</span>
                   </label>
                 ))}
               </div>
               
               <button className="w-full bg-brand-lime/10 text-brand-lime border border-brand-lime/20 py-3 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-brand-lime hover:text-[#05110a] transition-colors flex items-center justify-center gap-2">
                 APPLY FILTERS <Filter size={14}/>
               </button>
            </div>
          </div>

          {/* MAIN COLUMN (Event Grid) */}
          <div className="lg:col-span-6">
             <div className="flex justify-between items-center mb-6">
               <h2 className="font-heading font-black text-xl">250+ Events Found</h2>
               <div className="flex items-center gap-2 text-sm text-gray-400">
                 Sort by: 
                 <select className="bg-transparent border-none text-white font-bold focus:outline-none cursor-pointer">
                   <option>Newest First</option>
                   <option>Popular</option>
                   <option>Starting Soon</option>
                 </select>
               </div>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               
               {/* Event Card 1 */}
               <div className="bg-[#0a1a12] border border-white/10 rounded-2xl overflow-hidden group hover:border-brand-lime/50 transition-colors flex flex-col h-full relative">
                 <div className="absolute top-3 left-3 z-10 bg-[#05110a]/80 backdrop-blur border border-brand-lime/50 text-brand-lime text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">
                   FEATURED
                 </div>
                 <div className="relative h-48 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Event"/>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] to-transparent"></div>
                   <div className="absolute bottom-3 left-3 flex items-center gap-2">
                     <div className="bg-[#05110a] border border-white/20 rounded-lg p-1.5 flex flex-col items-center justify-center w-12 h-12">
                       <span className="text-[10px] text-brand-lime font-bold uppercase leading-none">MAY</span>
                       <span className="font-heading font-black text-lg text-white leading-none">25</span>
                     </div>
                   </div>
                 </div>
                 <div className="p-5 flex-grow flex flex-col">
                   <h3 className="font-heading font-black text-xl mb-1 group-hover:text-brand-lime transition-colors leading-tight">Khel Clan Football Championship 2025</h3>
                   <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-4">Football • Tournament</p>
                   
                   <div className="space-y-2 mb-6">
                     <div className="flex items-center gap-2 text-xs text-gray-300">
                       <MapPin size={14} className="text-gray-500 flex-shrink-0" />
                       <span className="truncate">Green Field Arena, New Delhi</span>
                     </div>
                     <div className="flex items-center gap-2 text-xs text-gray-300">
                       <Calendar size={14} className="text-gray-500 flex-shrink-0" />
                       <span>May 25 – May 30, 2025</span>
                     </div>
                     <div className="flex items-center gap-2 text-xs text-gray-300">
                       <Users size={14} className="text-gray-500 flex-shrink-0" />
                       <span>32 Teams • 320+ Players</span>
                     </div>
                   </div>
                   
                   <div className="mt-auto flex gap-2">
                     <button className="flex-grow bg-brand-lime text-[#05110a] py-2.5 rounded font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">VIEW DETAILS</button>
                     <button className="w-10 flex-shrink-0 bg-white/5 border border-white/10 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"><Share2 size={16}/></button>
                   </div>
                 </div>
               </div>

               {/* Event Card 2 */}
               <div className="bg-[#0a1a12] border border-white/10 rounded-2xl overflow-hidden group hover:border-brand-lime/50 transition-colors flex flex-col h-full relative">
                 <div className="absolute top-3 left-3 z-10 bg-blue-500/20 backdrop-blur border border-blue-500/50 text-blue-400 text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">
                   NEW
                 </div>
                 <div className="relative h-48 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Event"/>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] to-transparent"></div>
                   <div className="absolute bottom-3 left-3 flex items-center gap-2">
                     <div className="bg-[#05110a] border border-white/20 rounded-lg p-1.5 flex flex-col items-center justify-center w-12 h-12">
                       <span className="text-[10px] text-brand-lime font-bold uppercase leading-none">MAY</span>
                       <span className="font-heading font-black text-lg text-white leading-none">18</span>
                     </div>
                   </div>
                 </div>
                 <div className="p-5 flex-grow flex flex-col">
                   <h3 className="font-heading font-black text-xl mb-1 group-hover:text-brand-lime transition-colors leading-tight">Summer Cricket League</h3>
                   <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-4">Cricket • League</p>
                   
                   <div className="space-y-2 mb-6">
                     <div className="flex items-center gap-2 text-xs text-gray-300">
                       <MapPin size={14} className="text-gray-500 flex-shrink-0" />
                       <span className="truncate">Urban Sports Hub, Mumbai</span>
                     </div>
                     <div className="flex items-center gap-2 text-xs text-gray-300">
                       <Calendar size={14} className="text-gray-500 flex-shrink-0" />
                       <span>May 18 – Jun 15, 2025</span>
                     </div>
                     <div className="flex items-center gap-2 text-xs text-gray-300">
                       <Users size={14} className="text-gray-500 flex-shrink-0" />
                       <span>16 Teams • 180+ Players</span>
                     </div>
                   </div>
                   
                   <div className="mt-auto flex gap-2">
                     <button className="flex-grow bg-brand-lime text-[#05110a] py-2.5 rounded font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">VIEW DETAILS</button>
                     <button className="w-10 flex-shrink-0 bg-white/5 border border-white/10 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"><Share2 size={16}/></button>
                   </div>
                 </div>
               </div>

               {/* Event Card 3 */}
               <div className="bg-[#0a1a12] border border-white/10 rounded-2xl overflow-hidden group hover:border-brand-lime/50 transition-colors flex flex-col h-full relative">
                 <div className="absolute top-3 left-3 z-10 bg-purple-500/20 backdrop-blur border border-purple-500/50 text-purple-400 text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">
                   TRENDING
                 </div>
                 <div className="relative h-48 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Event"/>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] to-transparent"></div>
                   <div className="absolute bottom-3 left-3 flex items-center gap-2">
                     <div className="bg-[#05110a] border border-white/20 rounded-lg p-1.5 flex flex-col items-center justify-center w-12 h-12">
                       <span className="text-[10px] text-brand-lime font-bold uppercase leading-none">JUN</span>
                       <span className="font-heading font-black text-lg text-white leading-none">01</span>
                     </div>
                   </div>
                 </div>
                 <div className="p-5 flex-grow flex flex-col">
                   <h3 className="font-heading font-black text-xl mb-1 group-hover:text-brand-lime transition-colors leading-tight">3x3 Basketball Showdown</h3>
                   <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-4">Basketball • Tournament</p>
                   
                   <div className="space-y-2 mb-6">
                     <div className="flex items-center gap-2 text-xs text-gray-300">
                       <MapPin size={14} className="text-gray-500 flex-shrink-0" />
                       <span className="truncate">Hoop Arena, Bangalore</span>
                     </div>
                     <div className="flex items-center gap-2 text-xs text-gray-300">
                       <Calendar size={14} className="text-gray-500 flex-shrink-0" />
                       <span>Jun 1 – Jun 2, 2025</span>
                     </div>
                     <div className="flex items-center gap-2 text-xs text-gray-300">
                       <Users size={14} className="text-gray-500 flex-shrink-0" />
                       <span>24 Teams • 96+ Players</span>
                     </div>
                   </div>
                   
                   <div className="mt-auto flex gap-2">
                     <button className="flex-grow bg-brand-lime text-[#05110a] py-2.5 rounded font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">VIEW DETAILS</button>
                     <button className="w-10 flex-shrink-0 bg-white/5 border border-white/10 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"><Share2 size={16}/></button>
                   </div>
                 </div>
               </div>

               {/* Event Card 4 */}
               <div className="bg-[#0a1a12] border border-white/10 rounded-2xl overflow-hidden group hover:border-brand-lime/50 transition-colors flex flex-col h-full relative">
                 <div className="relative h-48 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Event"/>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] to-transparent"></div>
                   <div className="absolute bottom-3 left-3 flex items-center gap-2">
                     <div className="bg-[#05110a] border border-white/20 rounded-lg p-1.5 flex flex-col items-center justify-center w-12 h-12">
                       <span className="text-[10px] text-brand-lime font-bold uppercase leading-none">MAY</span>
                       <span className="font-heading font-black text-lg text-white leading-none">20</span>
                     </div>
                   </div>
                 </div>
                 <div className="p-5 flex-grow flex flex-col">
                   <h3 className="font-heading font-black text-xl mb-1 group-hover:text-brand-lime transition-colors leading-tight">Badminton Open Singles</h3>
                   <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-4">Badminton • Tournament</p>
                   
                   <div className="space-y-2 mb-6">
                     <div className="flex items-center gap-2 text-xs text-gray-300">
                       <MapPin size={14} className="text-gray-500 flex-shrink-0" />
                       <span className="truncate">Smash Arena, Hyderabad</span>
                     </div>
                     <div className="flex items-center gap-2 text-xs text-gray-300">
                       <Calendar size={14} className="text-gray-500 flex-shrink-0" />
                       <span>May 20 – May 21, 2025</span>
                     </div>
                     <div className="flex items-center gap-2 text-xs text-gray-300">
                       <Users size={14} className="text-gray-500 flex-shrink-0" />
                       <span>64 Players</span>
                     </div>
                   </div>
                   
                   <div className="mt-auto flex gap-2">
                     <button className="flex-grow bg-brand-lime text-[#05110a] py-2.5 rounded font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">VIEW DETAILS</button>
                     <button className="w-10 flex-shrink-0 bg-white/5 border border-white/10 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"><Share2 size={16}/></button>
                   </div>
                 </div>
               </div>

             </div>
             
             {/* Pagination */}
             <div className="flex justify-center items-center gap-2 mt-12">
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 transition-colors"><ChevronLeft size={18}/></button>
               <button className="w-10 h-10 rounded border border-brand-lime bg-brand-lime flex items-center justify-center text-[#05110a] font-bold">1</button>
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 transition-colors font-bold">2</button>
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 transition-colors font-bold">3</button>
               <span className="text-gray-500">...</span>
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 transition-colors font-bold">13</button>
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"><ChevronRight size={18}/></button>
             </div>
          </div>

          {/* RIGHT SIDEBAR (CTAs, Mini Lists) */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            
            <div className="bg-gradient-to-br from-[#0a1a12] to-brand-forest border border-brand-lime/20 rounded-2xl p-6 relative overflow-hidden">
               <div className="absolute right-0 top-0 opacity-10">
                 <Calendar size={100} className="text-brand-lime blur-sm transform translate-x-4 -translate-y-4" />
               </div>
               <div className="flex items-center gap-3 mb-4 relative z-10">
                 <div className="w-10 h-10 rounded-lg border border-brand-lime/30 flex items-center justify-center text-brand-lime"><Calendar size={20}/></div>
                 <h3 className="font-heading font-black text-lg uppercase leading-tight">Create Your<br/>Event</h3>
               </div>
               <p className="text-sm text-gray-400 mb-6 relative z-10">Organize tournaments, matches or sports meets and bring your community together.</p>
               <button className="w-full bg-brand-lime text-[#05110a] py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors relative z-10 flex justify-center items-center gap-2">
                 CREATE EVENT ↗
               </button>
            </div>

            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
              <div className="flex justify-between items-end mb-4">
                <h3 className="font-heading font-black text-sm uppercase tracking-widest text-white">UPCOMING EVENTS</h3>
                <Link to="#" className="text-brand-lime text-[10px] font-bold uppercase hover:underline tracking-wider">View All</Link>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: "Friendly Football Match", img: "https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=100", date: "MAY 17", loc: "Delhi, India", time: "Tomorrow" },
                  { title: "Corporate Cricket Cup", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=100", date: "MAY 19", loc: "Noida, India", time: "2 Days Left" },
                  { title: "Table Tennis Open", img: "https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&q=80&w=100", date: "MAY 21", loc: "Delhi, India", time: "4 Days Left" }
                ].map((e, i) => (
                  <div key={i} className="flex gap-3 items-center group cursor-pointer">
                    <img src={e.img} className="w-12 h-12 rounded object-cover flex-shrink-0" alt=""/>
                    <div className="flex-grow">
                      <h4 className="text-xs font-bold text-white group-hover:text-brand-lime truncate">{e.title}</h4>
                      <p className="text-[10px] text-gray-500 truncate mb-0.5">{e.loc}</p>
                      <p className="text-[10px] text-brand-lime font-bold">{e.time}</p>
                    </div>
                    <div className="flex-shrink-0 flex flex-col items-center justify-center bg-[#05110a] border border-white/5 rounded w-10 h-10">
                      <span className="text-[8px] text-gray-400 font-bold uppercase">{e.date.split(' ')[0]}</span>
                      <span className="font-heading font-black text-sm leading-none">{e.date.split(' ')[1]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
              <div className="flex justify-between items-end mb-4">
                <h3 className="font-heading font-black text-sm uppercase tracking-widest text-white">POPULAR SPORTS</h3>
                <Link to="#" className="text-brand-lime text-[10px] font-bold uppercase hover:underline tracking-wider">View All</Link>
              </div>
              <div className="space-y-3">
                {[
                  { sport: "Football", count: "85 Events" },
                  { sport: "Cricket", count: "62 Events" },
                  { sport: "Basketball", count: "34 Events" },
                  { sport: "Badminton", count: "28 Events" },
                  { sport: "Volleyball", count: "18 Events" }
                ].map((s, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-gray-300 font-bold flex items-center gap-2"><div className="w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center"></div> {s.sport}</span>
                    <span className="text-xs text-gray-500 font-bold">{s.count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto bg-brand-lime/10 rounded-full flex items-center justify-center text-brand-lime mb-3">
                <Bell size={20} />
              </div>
              <h3 className="font-heading font-black text-lg uppercase mb-2">Never Miss an Event!</h3>
              <p className="text-xs text-gray-400 mb-4">Enable notifications and get updates about matches, tournaments and more.</p>
              <button className="w-full bg-brand-lime text-[#05110a] py-2.5 rounded font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-colors">
                ENABLE NOTIFICATIONS
              </button>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}
