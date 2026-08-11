import React, { useState } from 'react';
import { Search, MapPin, CheckCircle, ChevronDown, Filter, ChevronLeft, ChevronRight, Star, Calendar, MessageCircle, Users, Trophy, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PlayersDirectory() {
  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80&w=2000" 
            alt="Players Hero" 
            className="w-full h-full object-cover opacity-20 object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05110a] via-[#05110a]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] via-[#05110a]/50 to-[#05110a]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-heading font-black text-5xl md:text-6xl mb-4 leading-tight">
                Find Players.<br/>
                <span className="text-brand-lime">Build Your Team.</span>
              </h1>
              <p className="text-gray-300 font-body text-base max-w-xl mb-8 leading-relaxed">
                Connect with athletes, make friends and play the sport you love. 
              </p>

              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 flex items-center justify-center text-brand-lime"><Users size={28}/></div>
                   <div>
                     <div className="font-heading font-black text-xl leading-none">2,840+</div>
                     <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Active Players</div>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 flex items-center justify-center text-brand-lime"><MapPin size={28}/></div>
                   <div>
                     <div className="font-heading font-black text-xl leading-none">120+</div>
                     <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Cities</div>
                   </div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 flex items-center justify-center text-brand-lime"><CheckCircle size={28}/></div>
                   <div>
                     <div className="font-heading font-black text-xl leading-none">50+</div>
                     <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Sports</div>
                   </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-end">
               <div className="bg-[#0a1a12] border border-brand-lime/20 rounded-2xl p-6 relative overflow-hidden w-80">
                 <div className="absolute right-0 top-0 opacity-10">
                   <Users size={100} className="text-brand-lime blur-sm transform translate-x-4 -translate-y-4" />
                 </div>
                 <div className="flex items-center gap-3 mb-4 relative z-10">
                   <div className="w-10 h-10 rounded-lg border border-brand-lime/30 flex items-center justify-center text-brand-lime"><Trophy size={20}/></div>
                   <h3 className="font-heading font-black text-lg leading-tight">Be Part of<br/>Something Bigger</h3>
                 </div>
                 <p className="text-sm text-gray-400 mb-6 relative z-10">Join a community of passionate players across the country.</p>
                 <button className="w-full bg-brand-lime text-[#05110a] py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors relative z-10 flex justify-center items-center gap-2">
                   CREATE PROFILE <Users size={14}/>
                 </button>
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
                placeholder="Search players by name, sport, skill..." 
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
                <option>All Locations</option>
                <option>Delhi NCR</option>
                <option>Mumbai</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <div className="relative flex-shrink-0">
              <select className="appearance-none bg-[#05110a] border border-white/10 text-white pl-4 pr-10 py-3 rounded-lg focus:outline-none focus:border-brand-lime transition-colors text-sm w-40 font-bold">
                <option>All Skill Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
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
                 <h4 className="font-bold text-xs text-gray-400 uppercase tracking-widest">SPORT</h4>
                 <label className="flex items-center gap-3 cursor-pointer group">
                   <div className="w-4 h-4 rounded border border-brand-lime bg-brand-lime flex items-center justify-center text-[#05110a]"><CheckCircle size={12}/></div>
                   <span className="text-sm font-bold text-white">All Sports</span>
                 </label>
                 {['Football', 'Cricket', 'Basketball', 'Badminton', 'Volleyball', 'Table Tennis'].map((item) => (
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
                 {['Delhi NCR', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad'].map((item) => (
                   <label key={item} className="flex items-center gap-3 cursor-pointer group">
                     <div className="w-4 h-4 rounded border border-white/20 group-hover:border-white/50 transition-colors"></div>
                     <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{item}</span>
                   </label>
                 ))}
                 <button className="text-xs text-brand-lime font-bold hover:underline flex items-center gap-1">+ More</button>
               </div>

               <div className="space-y-4 pt-4 border-t border-white/10">
                 <h4 className="font-bold text-xs text-gray-400 uppercase tracking-widest">SKILL LEVEL</h4>
                 <label className="flex items-center gap-3 cursor-pointer group">
                   <div className="w-4 h-4 rounded border border-brand-lime bg-brand-lime flex items-center justify-center text-[#05110a]"><CheckCircle size={12}/></div>
                   <span className="text-sm font-bold text-white">All Skill Levels</span>
                 </label>
                 {['Beginner', 'Intermediate', 'Advanced', 'Professional'].map((item) => (
                   <label key={item} className="flex items-center gap-3 cursor-pointer group">
                     <div className="w-4 h-4 rounded border border-white/20 group-hover:border-white/50 transition-colors"></div>
                     <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{item}</span>
                   </label>
                 ))}
               </div>

               <div className="space-y-4 pt-4 border-t border-white/10">
                 <h4 className="font-bold text-xs text-gray-400 uppercase tracking-widest">LOOKING FOR</h4>
                 {['Team', 'Matches', 'Tournaments', 'Friends'].map((item) => (
                   <label key={item} className="flex items-center gap-3 cursor-pointer group">
                     <div className="w-4 h-4 rounded border border-white/20 group-hover:border-white/50 transition-colors"></div>
                     <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{item}</span>
                   </label>
                 ))}
               </div>
               
               <button className="w-full bg-[#05110a] border border-white/20 py-3 rounded-lg text-xs font-bold uppercase tracking-widest hover:border-brand-lime hover:text-brand-lime transition-colors flex items-center justify-center mt-6">
                 RESET FILTERS
               </button>
            </div>
          </div>

          {/* MAIN COLUMN (Players Grid) */}
          <div className="lg:col-span-9">
             <div className="flex justify-between items-center mb-6">
               <h2 className="font-heading font-black text-xl">2,840+ Players Found</h2>
               <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2 text-sm text-gray-400">
                   Sort by: 
                   <select className="bg-transparent border-none text-white font-bold focus:outline-none cursor-pointer">
                     <option>Recently Active</option>
                     <option>Highest Rated</option>
                     <option>Nearest to me</option>
                   </select>
                 </div>
                 <div className="flex gap-1 border border-white/10 rounded-lg p-1">
                   <button className="bg-white/10 text-brand-lime p-1 rounded font-bold text-[10px] uppercase tracking-wider px-2">Grid View</button>
                   <button className="text-gray-500 hover:text-white p-1 rounded font-bold text-[10px] uppercase tracking-wider px-2 transition-colors">List View</button>
                 </div>
               </div>
             </div>

             <div className="grid grid-autofit gap-4">
               
               {/* Player Cards */}
               {[
                 { name: "Arjun Malhotra", role: "Midfielder", sport: "FOOTBALL", level: "Advanced", loc: "Delhi, India", rating: "4.6", img: "https://i.pravatar.cc/150?u=1", color: "brand-lime" },
                 { name: "Rohit Sharma", role: "Batsman", sport: "CRICKET", level: "Intermediate", loc: "Noida, India", rating: "4.4", img: "https://i.pravatar.cc/150?u=2", color: "blue-400" },
                 { name: "Karan Mehta", role: "Point Guard", sport: "BASKETBALL", level: "Advanced", loc: "Mumbai, India", rating: "4.5", img: "https://i.pravatar.cc/150?u=3", color: "orange-400" },
                 { name: "Priya Nair", role: "Singles Player", sport: "BADMINTON", level: "Beginner", loc: "Bangalore, India", rating: "4.2", img: "https://i.pravatar.cc/150?u=4", color: "brand-lime" },
                 { name: "Vikram Singh", role: "Defender", sport: "FOOTBALL", level: "Intermediate", loc: "Gurgaon, India", rating: "4.3", img: "https://i.pravatar.cc/150?u=5", color: "blue-400" },
                 { name: "Aditya Kapoor", role: "Outside Hitter", sport: "VOLLEYBALL", level: "Advanced", loc: "Chennai, India", rating: "4.7", img: "https://i.pravatar.cc/150?u=6", color: "purple-400" },
                 { name: "Sahil Verma", role: "Right Handed", sport: "TABLE TENNIS", level: "Intermediate", loc: "Pune, India", rating: "4.1", img: "https://i.pravatar.cc/150?u=7", color: "blue-400" },
                 { name: "Rahul Das", role: "Bowler", sport: "CRICKET", level: "Advanced", loc: "Kolkata, India", rating: "4.6", img: "https://i.pravatar.cc/150?u=8", color: "orange-400" },
                 { name: "Neha Iyer", role: "Doubles Player", sport: "BADMINTON", level: "Intermediate", loc: "Hyderabad, India", rating: "4.3", img: "https://i.pravatar.cc/150?u=9", color: "blue-400" },
                 { name: "Aryan Qureshi", role: "Shooting Guard", sport: "BASKETBALL", level: "Intermediate", loc: "Delhi, India", rating: "4.2", img: "https://i.pravatar.cc/150?u=10", color: "blue-400" },
                 { name: "Zaid Khan", role: "Forward", sport: "FOOTBALL", level: "Beginner", loc: "Lucknow, India", rating: "4.0", img: "https://i.pravatar.cc/150?u=11", color: "brand-lime" },
                 { name: "Meera Joshi", role: "Middle Blocker", sport: "VOLLEYBALL", level: "Advanced", loc: "Ahmedabad, India", rating: "4.6", img: "https://i.pravatar.cc/150?u=12", color: "purple-400" }
               ].map((p, i) => (
                 <div key={i} className="bg-[#0a1a12] border border-white/10 rounded-2xl p-5 flex flex-col items-center group hover:border-brand-lime/50 transition-colors relative">
                   <div className="absolute top-3 right-3 text-[8px] font-bold uppercase tracking-wider text-right">
                     <span className={`text-${p.color} bg-${p.color}/10 border border-${p.color}/20 px-1.5 py-0.5 rounded block mb-1`}>{p.sport}</span>
                     <span className="text-gray-400 bg-[#05110a] border border-white/5 px-1.5 py-0.5 rounded block">{p.level}</span>
                   </div>
                   
                   <div className="w-20 h-20 rounded-full border-2 border-transparent group-hover:border-brand-lime p-0.5 transition-colors mb-3 mt-4">
                     <img src={p.img} className="w-full h-full rounded-full object-cover" alt={p.name}/>
                   </div>
                   
                   <h3 className="font-bold text-white text-base text-center flex items-center justify-center gap-1">
                     {p.name} <CheckCircle size={12} className="text-brand-lime"/>
                   </h3>
                   <p className="text-xs text-gray-400 mb-1 text-center">{p.role}</p>
                   <p className="text-[10px] text-gray-500 mb-3 text-center">{p.loc}</p>
                   
                   <div className="flex items-center gap-1 text-sm mb-4">
                     <Star size={12} className="text-yellow-400" fill="currentColor"/>
                     <span className="font-bold">{p.rating}</span>
                   </div>

                   <div className="flex justify-center gap-3 mb-4 w-full">
                     <button className="text-gray-400 hover:text-brand-lime transition-colors"><MessageCircle size={16}/></button>
                     <button className="text-gray-400 hover:text-brand-lime transition-colors"><Users size={16}/></button>
                     <button className="text-gray-400 hover:text-brand-lime transition-colors"><Calendar size={16}/></button>
                   </div>
                   
                   <button className="w-full bg-[#05110a] border border-white/10 text-gray-400 py-2 rounded text-[10px] font-bold uppercase tracking-widest hover:border-brand-lime hover:text-brand-lime transition-colors mt-auto">
                     VIEW PROFILE
                   </button>
                 </div>
               ))}

             </div>
             
             {/* Pagination */}
             <div className="flex justify-center items-center gap-2 mt-12">
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 transition-colors"><ChevronLeft size={18}/></button>
               <button className="w-10 h-10 rounded border border-brand-lime bg-brand-lime flex items-center justify-center text-[#05110a] font-bold">1</button>
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 transition-colors font-bold">2</button>
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 transition-colors font-bold">3</button>
               <span className="text-gray-500">...</span>
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 transition-colors font-bold">47</button>
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"><ChevronRight size={18}/></button>
             </div>

             {/* Bottom CTA block */}
             <div className="mt-12 bg-[#0a1a12] border border-brand-lime/20 rounded-2xl p-8 flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden">
                <div className="flex-shrink-0 relative z-10 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start items-center gap-2 mb-2">
                    <Users size={24} className="text-brand-lime"/>
                    <h3 className="font-heading font-black text-2xl">Can't find the right player?</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">Create a post and let players reach out to you.</p>
                  <button className="bg-brand-lime text-[#05110a] px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">
                    CREATE A POST ↗
                  </button>
                </div>
                
                <div className="flex-grow flex flex-col sm:flex-row gap-6 relative z-10 lg:border-l border-white/10 lg:pl-8">
                  <div className="flex-1">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-lime mb-3"><FileText size={14}/></div>
                    <h4 className="font-bold text-sm mb-1">Post Your Requirements</h4>
                    <p className="text-[10px] text-gray-400">Share what you're looking for.</p>
                  </div>
                  <div className="flex-1">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-lime mb-3"><CheckCircle size={14}/></div>
                    <h4 className="font-bold text-sm mb-1">Get Notified</h4>
                    <p className="text-[10px] text-gray-400">Interested players will reach out.</p>
                  </div>
                  <div className="flex-1">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-lime mb-3"><Users size={14}/></div>
                    <h4 className="font-bold text-sm mb-1">Build Your Team</h4>
                    <p className="text-[10px] text-gray-400">Connect, communicate and start playing.</p>
                  </div>
                </div>

                <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                  <img src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=400" className="w-48 h-48 object-cover mask-image-fade" alt=""/>
                </div>
             </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}
