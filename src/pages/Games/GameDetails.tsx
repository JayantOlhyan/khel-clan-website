import React from 'react';
import { Calendar, Users, MapPin, Clock, Share2, Bookmark, CheckCircle, Shield, AlertCircle, ChevronRight, MessageCircle } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

export default function GameDetails() {
  const { id } = useParams();

  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=2000" 
            alt="Game Hero" 
            className="w-full h-full object-cover opacity-40 object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05110a] via-[#05110a]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-brand-lime mb-4 uppercase tracking-widest text-xs font-bold">
               <div className="w-5 h-5 rounded bg-brand-lime/20 flex items-center justify-center">⚽</div>
               FOOTBALL
            </div>
            
            <h1 className="font-heading font-black text-5xl md:text-6xl mb-4 leading-tight">
              Evening Football Match
            </h1>
            
            <div className="flex items-center gap-2 text-gray-300 text-lg mb-8">
               <MapPin className="text-brand-lime" size={18} /> Green Field Arena, Hauz Khas, Delhi
            </div>

            <div className="flex flex-wrap items-center gap-8 mb-8">
               <div className="flex items-center gap-3">
                 <Calendar className="text-brand-lime" size={24} />
                 <div>
                   <div className="font-bold text-white text-sm">Today, 7:00 PM</div>
                   <div className="text-xs text-gray-500 uppercase tracking-widest">17 May 2025</div>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <Users className="text-brand-lime" size={24} />
                 <div>
                   <div className="font-bold text-white text-sm">8 / 14 Players</div>
                   <div className="text-xs text-gray-500 uppercase tracking-widest">7 v 7</div>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <div className="text-brand-lime font-heading font-black text-2xl">₹120</div>
                 <div>
                   <div className="font-bold text-white text-sm">per player</div>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <Shield className="text-brand-lime" size={24} />
                 <div>
                   <div className="font-bold text-white text-sm">All Skill Levels</div>
                   <div className="text-xs text-gray-500 uppercase tracking-widest">Welcome</div>
                 </div>
               </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {['Outdoor', 'Grass', '7 v 7', '90 min'].map((tag, i) => (
                <span key={i} className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-gray-300">{tag}</span>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="bg-brand-lime text-[#05110a] px-8 py-4 rounded-lg font-heading font-black hover:bg-white transition-colors flex items-center gap-2 uppercase tracking-widest text-sm">
                JOIN THIS GAME ↗
              </button>
              <button className="bg-transparent border border-white/20 text-white px-6 py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center gap-2">
                <Share2 size={16} /> SHARE
              </button>
              <button className="bg-transparent border border-white/20 text-white px-6 py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center gap-2">
                <Bookmark size={16} /> SAVE
              </button>
            </div>
            <p className="mt-6 text-sm text-gray-400 max-w-2xl leading-relaxed">
              Join us for an exciting evening of football! Friendly match, good vibes and real competition. All skill levels welcome.
            </p>
          </div>
        </div>

        {/* BOOK YOUR SPOT WIDGET */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-80">
           <div className="bg-[#05110a]/90 backdrop-blur border border-white/10 rounded-2xl p-6 shadow-2xl">
              <h3 className="font-heading font-black text-xl uppercase mb-6">BOOK YOUR SPOT</h3>
              
              <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                <span className="text-sm text-gray-400 font-bold">Price per player</span>
                <span className="font-heading font-black text-3xl text-white">₹120</span>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
                  <span className="text-gray-400">Spots Left</span>
                  <span className="text-brand-lime">6 Spots Left</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-brand-lime w-[57%]"></div>
                </div>
                <div className="text-[10px] text-gray-500 uppercase">8 / 14 Players joined</div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">SELECT TEAM (Optional)</label>
                <select className="w-full bg-[#0a1a12] border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-brand-lime appearance-none">
                  <option>No Team / Free Agent</option>
                  <option>Team A</option>
                  <option>Team B</option>
                </select>
              </div>
              
              <button className="w-full bg-brand-lime text-[#05110a] py-4 rounded-lg font-heading font-black hover:bg-white transition-colors mb-4 uppercase text-sm tracking-widest">
                JOIN THIS GAME ↗
              </button>

              <div className="flex gap-2 text-[10px] text-gray-500 uppercase">
                <Shield className="text-brand-lime flex-shrink-0" size={14} />
                <p>Safe & Secure Payments. Cancel up to 2 hours before the game.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 2. TABS */}
      <div className="border-b border-white/10 sticky top-0 bg-[#05110a]/90 backdrop-blur z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto hide-scrollbar">
            {['Overview', 'Players (8)', 'Details', 'Venue', 'Rules', 'Reviews (12)'].map((tab, i) => (
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

      {/* 3. MAIN CONTENT GRID */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* LEFT COL (About, Bring) */}
          <div className="md:col-span-4 space-y-6">
            
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
              <h3 className="font-heading font-black text-lg uppercase mb-6">ABOUT THIS GAME</h3>
              <div className="space-y-4">
                {[
                  { icon: <Users size={16}/>, label: "Game Format", val: "7 v 7" },
                  { icon: <Users size={16}/>, label: "Total Players", val: "14 (8 Joined)" },
                  { icon: <Clock size={16}/>, label: "Game Duration", val: "90 Minutes" },
                  { icon: <Shield size={16}/>, label: "Skill Level", val: "All Skill Levels" },
                  { icon: <Calendar size={16}/>, label: "Game Type", val: "Friendly Match" },
                  { icon: <CheckCircle size={16}/>, label: "Organized By", val: "Khel Clan Community" },
                  { icon: <AlertCircle size={16}/>, label: "Game ID", val: "KC-FTB-17MAY-001" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-3 text-gray-400">
                      <span className="text-brand-lime">{item.icon}</span> {item.label}
                    </div>
                    <span className="font-bold text-white">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
              <h3 className="font-heading font-black text-lg uppercase mb-6">WHAT TO BRING</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex gap-3"><CheckCircle size={16} className="text-brand-lime flex-shrink-0 mt-0.5" /> Football Shoes / Studs</li>
                <li className="flex gap-3"><CheckCircle size={16} className="text-brand-lime flex-shrink-0 mt-0.5" /> Shin Guards (Recommended)</li>
                <li className="flex gap-3"><CheckCircle size={16} className="text-brand-lime flex-shrink-0 mt-0.5" /> Water Bottle</li>
                <li className="flex gap-3"><CheckCircle size={16} className="text-brand-lime flex-shrink-0 mt-0.5" /> Sportswear / Comfortable Clothes</li>
              </ul>
              <div className="mt-6 bg-[#05110a] border border-brand-lime/20 rounded-lg p-4 flex gap-3 text-xs text-brand-lime font-bold">
                <Shield size={16} className="flex-shrink-0" />
                Let's keep the game clean and fun for everyone!
              </div>
            </div>
            
          </div>

          {/* MIDDLE COL (Players List) */}
          <div className="md:col-span-4">
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
              <div className="flex justify-between items-end mb-6">
                <h3 className="font-heading font-black text-lg uppercase">PLAYERS <span className="text-gray-500 font-bold text-sm">(8 / 14)</span></h3>
                <Link to="#" className="text-brand-lime font-bold text-xs uppercase tracking-widest hover:underline">View All</Link>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Arjun Malhotra", role: "Midfielder", rating: "4.6", time: "2 hours ago", img: "https://i.pravatar.cc/150?u=1", org: true },
                  { name: "Rohit Sharma", role: "Forward", rating: "4.4", time: "3 hours ago", img: "https://i.pravatar.cc/150?u=2", org: false },
                  { name: "Karan Mehta", role: "Defender", rating: "4.2", time: "5 hours ago", img: "https://i.pravatar.cc/150?u=3", org: false },
                  { name: "Vivaan Kapoor", role: "Goalkeeper", rating: "4.7", time: "6 hours ago", img: "https://i.pravatar.cc/150?u=4", org: false },
                  { name: "Aditya Singh", role: "Midfielder", rating: "4.3", time: "7 hours ago", img: "https://i.pravatar.cc/150?u=5", org: false },
                  { name: "Sahil Verma", role: "Forward", rating: "4.1", time: "8 hours ago", img: "https://i.pravatar.cc/150?u=6", org: false },
                  { name: "Yash Patel", role: "Defender", rating: "4.0", time: "9 hours ago", img: "https://i.pravatar.cc/150?u=7", org: false },
                  { name: "Rishabh Arya", role: "Midfielder", rating: "4.5", time: "10 hours ago", img: "https://i.pravatar.cc/150?u=8", org: false },
                ].map((p, i) => (
                  <div key={i} className="flex items-center justify-between pb-4 border-b border-white/5 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <img src={p.img} alt={p.name} className={`w-10 h-10 rounded-full object-cover ${p.org ? 'border-2 border-brand-lime' : ''}`} />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm text-white">{p.name}</h4>
                          {p.org && <span className="bg-brand-lime/10 text-brand-lime border border-brand-lime/30 text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">Organizer</span>}
                        </div>
                        <div className="text-xs text-gray-400">{p.role} • ⭐ {p.rating}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-gray-500 uppercase">Joined</div>
                      <div className="text-xs text-gray-400">{p.time}</div>
                    </div>
                  </div>
                ))}

                <button className="w-full mt-4 border border-dashed border-white/20 rounded-xl py-4 flex items-center justify-center gap-2 text-gray-400 hover:text-white hover:border-brand-lime transition-colors group">
                  <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center group-hover:text-brand-lime">+</div>
                  <div className="text-left">
                    <div className="font-bold text-sm text-white group-hover:text-brand-lime">6 Spots Left</div>
                    <div className="text-xs">Join and be a part of the game!</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COL (Venue, Org, Reviews) */}
          <div className="md:col-span-4 space-y-6">
            
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
              <h3 className="font-heading font-black text-lg uppercase mb-4">VENUE</h3>
              <div className="flex gap-4 mb-4">
                 <div>
                   <h4 className="font-bold text-white text-base">Green Field Arena</h4>
                   <p className="text-xs text-gray-400 mb-2">Hauz Khas, Delhi</p>
                   <div className="text-xs text-brand-lime font-bold mb-2">⭐ 4.6 <span className="text-gray-500 font-normal">(128 Reviews)</span></div>
                   <p className="text-[11px] text-gray-500">Aurobindo Marg, Behind Deer Park, Hauz Khas, New Delhi - 110016</p>
                 </div>
                 <img src="https://images.unsplash.com/photo-1522778523315-976451e59275?auto=format&fit=crop&q=80&w=150" alt="Venue" className="w-24 h-20 rounded-lg object-cover flex-shrink-0" />
              </div>
              <button className="w-full bg-transparent border border-white/20 text-white py-2.5 rounded text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors flex justify-center items-center gap-2 mb-4">
                <MapPin size={14} /> VIEW ON MAP
              </button>
              <div className="w-full h-32 bg-[#05110a] rounded-lg border border-white/10 relative overflow-hidden flex items-center justify-center">
                 {/* Map Placeholder Graphic */}
                 <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                 <MapPin className="text-brand-lime z-10" size={24} />
              </div>
            </div>

            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
              <h3 className="font-heading font-black text-lg uppercase mb-4">ORGANIZER</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-lime flex items-center justify-center font-heading font-black text-2xl text-[#05110a]">
                  KC
                </div>
                <div>
                  <h4 className="font-bold text-white text-base flex items-center gap-1">Khel Clan Community <CheckCircle size={14} className="text-brand-lime"/></h4>
                  <p className="text-xs text-gray-400">Verified Organizer</p>
                </div>
              </div>
              <div className="flex justify-between text-center mb-6">
                 <div>
                   <div className="font-bold text-brand-lime">125+</div>
                   <div className="text-[10px] text-gray-500 uppercase">Games Organized</div>
                 </div>
                 <div>
                   <div className="font-bold text-brand-lime">2.3k+</div>
                   <div className="text-[10px] text-gray-500 uppercase">Players</div>
                 </div>
                 <div>
                   <div className="font-bold text-brand-lime">4.8</div>
                   <div className="text-[10px] text-gray-500 uppercase">Rating</div>
                 </div>
              </div>
              <button className="w-full bg-transparent border border-white/20 text-white py-2.5 rounded text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
                VIEW ORGANIZER PROFILE
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. MORE GAMES LIKES THIS */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <h3 className="font-heading font-black text-2xl uppercase mb-8">MORE GAMES LIKE THIS</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {[
             { title: "Night Football Match", loc: "City Football Turf, Mayur Vihar", date: "Today, 9:30 PM", format: "7 v 7", price: "₹120", img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=400" },
             { title: "Sunday Football Game", loc: "Play Arena, Lajpat Nagar", date: "Tomorrow, 8:00 AM", format: "7 v 7", price: "₹100", img: "https://images.unsplash.com/photo-1574629810360-7efbc18974bf?auto=format&fit=crop&q=80&w=400" },
             { title: "Weekend Football Match", loc: "Football Hub, Sector 62", date: "18 May, 8:00 PM", format: "7 v 7", price: "₹120", img: "https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=400" }
           ].map((g, i) => (
             <div key={i} className="bg-[#0a1a12] border border-white/10 rounded-xl p-4 flex gap-4 hover:border-brand-lime/30 transition-colors cursor-pointer group">
               <img src={g.img} className="w-20 h-20 rounded-lg object-cover group-hover:scale-105 transition-transform" alt=""/>
               <div className="flex flex-col justify-between flex-grow py-1">
                 <div>
                   <h4 className="font-bold text-sm text-white group-hover:text-brand-lime leading-tight mb-1">{g.title}</h4>
                   <p className="text-[10px] text-gray-400 leading-tight mb-1">{g.loc}</p>
                   <p className="text-[10px] text-gray-500 font-bold">{g.date} • {g.format}</p>
                 </div>
                 <div className="flex justify-between items-center text-xs mt-2">
                   <div className="font-bold text-brand-lime">{g.price} <span className="font-normal text-[10px] text-gray-500">per player</span></div>
                   <ChevronRight size={14} className="text-gray-500" />
                 </div>
               </div>
             </div>
           ))}
        </div>
      </section>

    </div>
  );
}
