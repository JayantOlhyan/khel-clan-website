import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Trophy, Calendar, MapPin, Users, FileText, ArrowUpRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState('football tournament');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative z-10 w-full max-w-5xl bg-[#05110a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Search Header */}
        <div className="p-4 border-b border-white/10 flex items-center gap-4 bg-[#0a1a12]">
          <div className="flex-grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-lime" size={20} />
            <input 
              ref={inputRef}
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tournaments, events, venues, players..."
              className="w-full bg-[#05110a] border border-brand-lime/50 text-white pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:border-brand-lime transition-colors text-lg font-bold"
            />
          </div>
          <button 
            onClick={onClose}
            className="w-14 h-14 bg-[#05110a] border border-white/10 hover:border-white/30 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Search Body */}
        <div className="flex-grow overflow-y-auto flex flex-col md:flex-row">
          
          {/* Left Sidebar - Categories */}
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/10 p-4 space-y-1 bg-[#0a1a12]/50">
             <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-3 px-3">SEARCH RESULTS</div>
             
             <button className="w-full flex items-center justify-between px-3 py-2.5 bg-brand-lime/10 text-brand-lime rounded-lg font-bold text-sm">
               <span className="flex items-center gap-3"><Trophy size={16}/> All Results</span>
               <span className="text-xs">62</span>
             </button>
             
             <button className="w-full flex items-center justify-between px-3 py-2.5 text-gray-400 hover:bg-white/5 hover:text-white rounded-lg font-bold text-sm transition-colors">
               <span className="flex items-center gap-3"><Trophy size={16}/> Tournaments</span>
               <span className="text-xs">18</span>
             </button>

             <button className="w-full flex items-center justify-between px-3 py-2.5 text-gray-400 hover:bg-white/5 hover:text-white rounded-lg font-bold text-sm transition-colors">
               <span className="flex items-center gap-3"><Calendar size={16}/> Events</span>
               <span className="text-xs">14</span>
             </button>
             
             <button className="w-full flex items-center justify-between px-3 py-2.5 text-gray-400 hover:bg-white/5 hover:text-white rounded-lg font-bold text-sm transition-colors">
               <span className="flex items-center gap-3"><MapPin size={16}/> Venues</span>
               <span className="text-xs">9</span>
             </button>
             
             <button className="w-full flex items-center justify-between px-3 py-2.5 text-gray-400 hover:bg-white/5 hover:text-white rounded-lg font-bold text-sm transition-colors">
               <span className="flex items-center gap-3"><Users size={16}/> Groups</span>
               <span className="text-xs">7</span>
             </button>

             <button className="w-full flex items-center justify-between px-3 py-2.5 text-gray-400 hover:bg-white/5 hover:text-white rounded-lg font-bold text-sm transition-colors">
               <span className="flex items-center gap-3"><Users size={16}/> Players</span>
               <span className="text-xs">6</span>
             </button>
             
             <button className="w-full flex items-center justify-between px-3 py-2.5 text-gray-400 hover:bg-white/5 hover:text-white rounded-lg font-bold text-sm transition-colors">
               <span className="flex items-center gap-3"><FileText size={16}/> News & Articles</span>
               <span className="text-xs">3</span>
             </button>
             
             <div className="pt-4 mt-2 border-t border-white/5">
               <button className="w-full border border-white/10 text-white px-3 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                 VIEW ALL RESULTS <ArrowUpRight size={14} className="text-brand-lime" />
               </button>
             </div>
          </div>

          {/* Main Results Area */}
          <div className="flex-grow p-6 space-y-8 overflow-y-auto hide-scrollbar relative">
             
             {/* Tournaments Section */}
             <div>
               <div className="flex justify-between items-end mb-4">
                 <h3 className="font-heading font-black text-sm uppercase tracking-widest text-white">TOURNAMENTS</h3>
                 <button className="text-brand-lime text-[10px] font-bold uppercase hover:underline">View all (18)</button>
               </div>
               
               <div className="space-y-3">
                 {[
                   { name: "Khel Clan Football Championship 2025", tag: "FEATURED", date: "May 25 – May 30, 2025", loc: "Green Field Arena, Delhi", teams: "32 Teams", img: "https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=100" },
                   { name: "Summer Football League", tag: null, date: "Jun 10 – Jun 25, 2025", loc: "Urban Sports Hub, Mumbai", teams: "16 Teams", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=100" },
                   { name: "Corporate Football Cup 2025", tag: null, date: "Jul 5 – Jul 15, 2025", loc: "Kickoff Ground, Gurgaon", teams: "24 Teams", img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=100" }
                 ].map((t, i) => (
                   <div key={i} className="flex gap-4 p-3 bg-[#0a1a12] border border-white/5 rounded-xl hover:border-brand-lime/30 transition-colors group cursor-pointer">
                     <img src={t.img} className="w-16 h-16 rounded-lg object-cover" alt="" />
                     <div className="flex-grow">
                       <h4 className="font-bold text-sm text-white group-hover:text-brand-lime transition-colors mb-2">
                         {t.name.split('Football').map((part, idx, arr) => (
                           <React.Fragment key={idx}>
                             {part}{idx < arr.length - 1 && <span className="text-brand-lime">Football</span>}
                           </React.Fragment>
                         ))}
                         {t.tag && <span className="ml-2 bg-yellow-400/10 border border-yellow-400 text-yellow-400 text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">{t.tag}</span>}
                       </h4>
                       <div className="flex flex-wrap gap-4 text-[10px] text-gray-400 font-bold">
                         <span className="flex items-center gap-1"><Calendar size={12}/> {t.date}</span>
                         <span className="flex items-center gap-1"><MapPin size={12}/> {t.loc}</span>
                         <span className="flex items-center gap-1"><Users size={12}/> {t.teams}</span>
                       </div>
                     </div>
                     <div className="flex items-center">
                       <button className="border border-white/10 text-brand-lime px-4 py-2 rounded text-[10px] font-bold uppercase tracking-wider group-hover:border-brand-lime transition-colors">VIEW DETAILS</button>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Events Section */}
             <div>
               <div className="flex justify-between items-end mb-4">
                 <h3 className="font-heading font-black text-sm uppercase tracking-widest text-white">EVENTS</h3>
                 <button className="text-brand-lime text-[10px] font-bold uppercase hover:underline">View all (14)</button>
               </div>
               
               <div className="space-y-3">
                 {[
                   { name: "Friendly Football Match", date: "May 17, 2025", loc: "Saket Sports Complex, Delhi", teams: "2 Teams", img: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80&w=100" },
                   { name: "Football Skills Training Camp", date: "May 28 – May 30, 2025", loc: "Kickoff Ground, Gurgaon", teams: "30 Participants", img: "https://images.unsplash.com/photo-1431324155629-1a6fc1d20e29?auto=format&fit=crop&q=80&w=100" }
                 ].map((t, i) => (
                   <div key={i} className="flex gap-4 p-3 bg-[#0a1a12] border border-white/5 rounded-xl hover:border-brand-lime/30 transition-colors group cursor-pointer">
                     <img src={t.img} className="w-16 h-16 rounded-lg object-cover" alt="" />
                     <div className="flex-grow">
                       <h4 className="font-bold text-sm text-white group-hover:text-brand-lime transition-colors mb-2">
                         {t.name.split('Football').map((part, idx, arr) => (
                           <React.Fragment key={idx}>
                             {part}{idx < arr.length - 1 && <span className="text-brand-lime">Football</span>}
                           </React.Fragment>
                         ))}
                       </h4>
                       <div className="flex flex-wrap gap-4 text-[10px] text-gray-400 font-bold">
                         <span className="flex items-center gap-1"><Calendar size={12}/> {t.date}</span>
                         <span className="flex items-center gap-1"><MapPin size={12}/> {t.loc}</span>
                         <span className="flex items-center gap-1"><Users size={12}/> {t.teams}</span>
                       </div>
                     </div>
                     <div className="flex items-center">
                       <button className="border border-white/10 text-brand-lime px-4 py-2 rounded text-[10px] font-bold uppercase tracking-wider group-hover:border-brand-lime transition-colors">VIEW DETAILS</button>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Venues Section */}
             <div>
               <div className="flex justify-between items-end mb-4">
                 <h3 className="font-heading font-black text-sm uppercase tracking-widest text-white">VENUES</h3>
                 <button className="text-brand-lime text-[10px] font-bold uppercase hover:underline">View all (9)</button>
               </div>
               
               <div className="space-y-3">
                 {[
                   { name: "Green Field Arena", rating: "4.7", reviews: "230 reviews", loc: "Hauz Khas, New Delhi", img: "https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=100" },
                   { name: "Kickoff Ground", rating: "4.6", reviews: "180 reviews", loc: "Gurgaon, Haryana", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=100" }
                 ].map((t, i) => (
                   <div key={i} className="flex gap-4 p-3 bg-[#0a1a12] border border-white/5 rounded-xl hover:border-brand-lime/30 transition-colors group cursor-pointer">
                     <img src={t.img} className="w-16 h-16 rounded-lg object-cover" alt="" />
                     <div className="flex-grow">
                       <h4 className="font-bold text-sm text-white group-hover:text-brand-lime transition-colors mb-2">{t.name}</h4>
                       <div className="flex flex-wrap gap-4 text-[10px] text-gray-400 font-bold">
                         <span className="flex items-center gap-1 text-white"><Star size={12} className="text-yellow-400" fill="currentColor"/> {t.rating} <span className="text-gray-500 font-normal">({t.reviews})</span></span>
                         <span className="flex items-center gap-1"><MapPin size={12}/> {t.loc}</span>
                       </div>
                     </div>
                     <div className="flex items-center">
                       <button className="border border-white/10 text-brand-lime px-4 py-2 rounded text-[10px] font-bold uppercase tracking-wider group-hover:border-brand-lime transition-colors">VIEW VENUE</button>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

          </div>

          {/* Right Sidebar - Suggestions / Spotlights */}
          <div className="hidden lg:block w-72 border-l border-white/10 p-6 space-y-6 bg-[#0a1a12]/30">
            
            {/* Player Spotlight */}
            <div>
              <h3 className="font-bold text-xs text-gray-400 mb-4">Player Spotlight</h3>
              <div className="bg-[#05110a] border border-white/10 rounded-xl p-4 text-center group cursor-pointer hover:border-brand-lime/50 transition-colors">
                 <div className="w-20 h-20 rounded-full border-2 border-brand-lime mx-auto mb-3 p-0.5 relative">
                   <img src="https://i.pravatar.cc/150?u=12" className="w-full h-full rounded-full object-cover" alt="Rohit"/>
                 </div>
                 <h4 className="font-bold text-white text-sm">Rohit Sharma</h4>
                 <p className="text-[10px] text-gray-400 mb-2">Football • Forward</p>
                 <div className="flex justify-center items-center gap-1 text-[10px] mb-4">
                   <Star size={10} className="text-yellow-400" fill="currentColor"/> <span className="font-bold text-white">4.8</span> <span className="text-gray-500">(56 reviews)</span>
                 </div>
                 <button className="w-full border border-white/10 text-brand-lime py-2 rounded text-[10px] font-bold uppercase tracking-wider group-hover:border-brand-lime transition-colors">VIEW PROFILE</button>
              </div>
            </div>

            {/* Trending Groups */}
            <div>
              <div className="flex justify-between items-end mb-4">
                 <h3 className="font-bold text-xs text-gray-400">Trending Groups</h3>
                 <button className="text-[10px] text-gray-500 hover:text-white">View all</button>
              </div>
              <div className="space-y-3">
                 {[
                   { name: "Strikers FC", sport: "Football Club", mem: "2.1K Members", img: "https://i.pravatar.cc/150?u=21" },
                   { name: "Delhi Titans", sport: "Cricket Club", mem: "1.8K Members", img: "https://i.pravatar.cc/150?u=22" }
                 ].map((g, i) => (
                   <div key={i} className="bg-[#05110a] border border-white/10 rounded-xl p-3 flex items-center gap-3 group cursor-pointer hover:border-brand-lime/50 transition-colors">
                     <img src={g.img} className="w-10 h-10 rounded-lg" alt=""/>
                     <div className="flex-grow">
                       <h4 className="font-bold text-xs text-white group-hover:text-brand-lime transition-colors">{g.name}</h4>
                       <p className="text-[9px] text-gray-500">{g.sport} • {g.mem}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#0a1a12] flex justify-between items-center text-xs text-gray-400">
          <span>Can't find what you're looking for?</span>
          <button className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-lg hover:bg-white/5 transition-colors">
            <Search size={14} /> Search the entire Khel Clan <ArrowUpRight size={14} className="text-brand-lime"/>
          </button>
        </div>

      </div>
    </div>
  );
}
