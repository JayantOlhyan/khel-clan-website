import React, { useState } from 'react';
import { MapPin, CheckCircle, Star, MessageCircle, UserPlus, Calendar, Trophy, Share2, Camera, Video, MessageSquare, Link as LinkIcon, Shield, Activity, Users, StarHalf, Goal, ActivitySquare } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function PlayerProfile() {
  const { username } = useParams();

  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-0 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=2000" 
            alt="Player Hero" 
            className="w-full h-full object-cover opacity-10 object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] via-[#05110a]/80 to-[#05110a]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="text-xs text-gray-500 mb-6 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-700">/</span>
            <Link to="/players" className="hover:text-white transition-colors">Players</Link>
            <span className="text-gray-700">/</span>
            <span className="text-brand-lime">arjunplayz</span>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start pb-8">
            
            {/* Avatar */}
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-brand-lime p-1 relative flex-shrink-0">
              <img src="https://i.pravatar.cc/300?u=1" className="w-full h-full rounded-full object-cover" alt="Arjun"/>
              <div className="absolute bottom-2 right-2 w-8 h-8 md:w-12 md:h-12 bg-brand-lime rounded-full border-4 border-[#05110a] flex items-center justify-center">
                <span className="font-heading font-black text-[#05110a] text-[10px] md:text-sm">KC</span>
              </div>
            </div>

            {/* Main Info */}
            <div className="flex-grow pt-2">
               <h1 className="font-heading font-black text-4xl md:text-5xl mb-2 flex items-center gap-3">
                 arjunplayz <CheckCircle size={28} className="text-brand-lime" />
               </h1>
               
               <div className="flex items-center gap-4 mb-4">
                 <h2 className="text-xl font-bold text-gray-300">Arjun Malhotra</h2>
                 <span className="bg-white/10 border border-white/20 text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest">Midfielder</span>
                 <span className="bg-brand-lime/10 border border-brand-lime/20 text-brand-lime text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest flex items-center gap-1"><CheckCircle size={10}/> Verified Player</span>
               </div>
               
               <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                 <div className="flex items-center gap-1.5"><MapPin size={14}/> Delhi, India</div>
                 <div className="flex items-center gap-1.5"><Calendar size={14}/> Joined Apr 2024</div>
               </div>

               <p className="text-sm text-gray-300 max-w-xl mb-6 leading-relaxed">
                 Football is not just a game, it's my passion. Always up for a challenge and love playing with a great team!
               </p>

               <div className="flex gap-3">
                 <button className="w-10 h-10 rounded border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors"><Camera size={16}/></button>
                 <button className="w-10 h-10 rounded border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors"><Video size={16}/></button>
                 <button className="w-10 h-10 rounded border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors"><MessageSquare size={16}/></button>
                 <button className="w-10 h-10 rounded border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors"><LinkIcon size={16}/></button>
               </div>
            </div>

            {/* Score & Actions */}
            <div className="w-full md:w-72 flex-shrink-0">
               <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-5 mb-4 relative overflow-hidden">
                 <div className="absolute right-[-20px] top-[-20px] opacity-10">
                   <Shield size={120} className="text-brand-lime"/>
                 </div>
                 <div className="flex justify-between items-start mb-2 relative z-10">
                   <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Khel Clan Score</span>
                   <Shield size={14} className="text-gray-500"/>
                 </div>
                 <div className="font-heading font-black text-4xl text-brand-lime mb-1 relative z-10">4,850</div>
                 <div className="flex items-center gap-2 relative z-10">
                   <span className="text-[10px] text-yellow-400 uppercase font-bold flex items-center gap-1"><Star size={10} fill="currentColor"/> Elite Player</span>
                   <span className="text-[10px] text-gray-500">• Top 8% of players</span>
                 </div>
               </div>

               <div className="flex gap-2">
                 <button className="flex-1 bg-transparent border border-white/20 text-white py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                   <MessageCircle size={14}/> MESSAGE
                 </button>
                 <button className="flex-1 bg-transparent border border-white/20 text-white py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                   <UserPlus size={14}/> ADD FRIEND
                 </button>
               </div>
               <button className="w-full mt-2 bg-brand-lime text-[#05110a] py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2">
                 <UserPlus size={14}/> FOLLOW
               </button>
            </div>
          </div>
          
          {/* Top Stats Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-white/10 border border-white/10 rounded-t-2xl overflow-hidden mt-4">
             <div className="bg-[#05110a] p-4 flex flex-col items-center justify-center text-center">
               <div className="flex items-center gap-1.5 text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1"><Calendar size={12} className="text-brand-lime"/> Matches Played</div>
               <div className="font-heading font-black text-3xl">128</div>
             </div>
             <div className="bg-[#05110a] p-4 flex flex-col items-center justify-center text-center">
               <div className="flex items-center gap-1.5 text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1"><Goal size={12} className="text-brand-lime"/> Goals Scored</div>
               <div className="font-heading font-black text-3xl">46</div>
             </div>
             <div className="bg-[#05110a] p-4 flex flex-col items-center justify-center text-center">
               <div className="flex items-center gap-1.5 text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1"><ActivitySquare size={12} className="text-brand-lime"/> Assists</div>
               <div className="font-heading font-black text-3xl">38</div>
             </div>
             <div className="bg-[#05110a] p-4 flex flex-col items-center justify-center text-center">
               <div className="flex items-center gap-1.5 text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1"><Trophy size={12} className="text-brand-lime"/> MOTM Awards</div>
               <div className="font-heading font-black text-3xl">12</div>
             </div>
             <div className="bg-[#05110a] p-4 flex flex-col items-center justify-center text-center">
               <div className="flex items-center gap-1.5 text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1"><Activity size={12} className="text-brand-lime"/> Win Rate</div>
               <div className="font-heading font-black text-3xl">68%</div>
             </div>
             <div className="bg-[#05110a] p-4 flex flex-col items-center justify-center text-center">
               <div className="flex items-center gap-1.5 text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1"><Star size={12} className="text-brand-lime"/> Avg Rating</div>
               <div className="font-heading font-black text-3xl">4.6</div>
             </div>
          </div>
          
        </div>
      </section>

      {/* TABS */}
      <div className="border-b border-white/10 sticky top-0 bg-[#05110a]/90 backdrop-blur z-40 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto hide-scrollbar">
            {[
              { name: 'OVERVIEW', icon: Shield },
              { name: 'STATS', icon: Activity },
              { name: 'ACTIVITY', icon: ActivitySquare },
              { name: 'GAMES', icon: Calendar },
              { name: 'TEAMS', icon: Users },
              { name: 'GALLERY', icon: null },
              { name: 'REVIEWS', icon: Star }
            ].map((tab, i) => (
              <button 
                key={i} 
                className={`py-4 font-heading font-bold text-xs tracking-widest uppercase whitespace-nowrap transition-colors relative ${i === 0 ? 'text-brand-lime' : 'text-gray-400 hover:text-white flex items-center gap-2'}`}
              >
                {tab.icon && <tab.icon size={14}/>}
                {tab.name}
                {i === 0 && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-lime"></div>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COL */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* About Me & Cover Image */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row gap-8">
               <div className="flex-1">
                 <h3 className="font-heading font-black text-lg uppercase mb-6">ABOUT ME</h3>
                 <div className="space-y-4 text-sm">
                   <div className="flex justify-between border-b border-white/5 pb-2">
                     <span className="text-gray-400 flex items-center gap-2"><UserPlus size={14}/> Full Name</span>
                     <span className="font-bold text-white">Arjun Malhotra</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-2">
                     <span className="text-gray-400 flex items-center gap-2"><UserPlus size={14}/> Username</span>
                     <span className="font-bold text-white">@arjunplayz</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-2">
                     <span className="text-gray-400 flex items-center gap-2"><Calendar size={14}/> Age</span>
                     <span className="font-bold text-white">22</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-2">
                     <span className="text-gray-400 flex items-center gap-2"><Calendar size={14}/> Date of Birth</span>
                     <span className="font-bold text-white">12 Mar 2002</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-2">
                     <span className="text-gray-400 flex items-center gap-2"><Activity size={14}/> Height</span>
                     <span className="font-bold text-white">5'10" (178 cm)</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-2">
                     <span className="text-gray-400 flex items-center gap-2"><Activity size={14}/> Preferred Foot</span>
                     <span className="font-bold text-white">Right</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-2">
                     <span className="text-gray-400 flex items-center gap-2"><Trophy size={14}/> Sports</span>
                     <span className="font-bold text-white">Football, Cricket</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-2">
                     <span className="text-gray-400 flex items-center gap-2"><Star size={14}/> Skill Level</span>
                     <span className="font-bold text-white">Advanced</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-gray-400 flex items-center gap-2"><MapPin size={14}/> Current City</span>
                     <span className="font-bold text-white">Delhi, India</span>
                   </div>
                 </div>
               </div>
               
               <div className="flex-1">
                 <div className="h-full rounded-xl overflow-hidden relative min-h-[250px]">
                   <img src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Cover"/>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                   <div className="absolute bottom-4 left-4 right-4">
                     <p className="font-serif italic text-sm text-gray-300 leading-relaxed">
                       "Alone we can do so little; together we can do so much."
                     </p>
                     <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest font-bold">– Helen Keller</p>
                   </div>
                 </div>
               </div>
            </div>

            {/* Skills & Positions */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row gap-8">
               <div className="flex-1">
                 <h3 className="font-heading font-black text-lg uppercase mb-6">SKILLS & POSITIONS</h3>
                 
                 <div className="mb-6">
                   <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Primary Position</p>
                   <p className="font-bold text-brand-lime">Midfielder (CM)</p>
                 </div>
                 <div className="mb-8">
                   <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">Other Positions</p>
                   <p className="font-bold text-white text-sm">Attacking Midfielder, Central Midfielder</p>
                 </div>

                 <div className="space-y-4">
                   {[
                     { name: 'Passing', val: '4.7', pct: '94%' },
                     { name: 'Dribbling', val: '4.6', pct: '92%' },
                     { name: 'Shooting', val: '4.3', pct: '86%' },
                     { name: 'Defending', val: '4.1', pct: '82%' },
                     { name: 'Pace', val: '4.5', pct: '90%' },
                     { name: 'Stamina', val: '4.6', pct: '92%' }
                   ].map((s, i) => (
                     <div key={i}>
                       <div className="flex justify-between text-xs mb-1">
                         <span className="text-gray-300 font-bold">{s.name}</span>
                         <span className="font-bold text-white">{s.val}</span>
                       </div>
                       <div className="h-1.5 bg-[#05110a] rounded-full overflow-hidden">
                         <div className="h-full bg-brand-lime rounded-full" style={{width: s.pct}}></div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
               
               <div className="flex-1 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 pl-0 md:pl-8">
                  {/* Fake Pitch Heatmap visualization */}
                  <div className="w-full max-w-[250px] aspect-[2/3] border-2 border-white/20 rounded-lg relative overflow-hidden bg-brand-forest/20 p-2 flex flex-col justify-between">
                     {/* Pitch Lines */}
                     <div className="absolute inset-0 border-2 border-white/10 rounded-lg m-2 pointer-events-none"></div>
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/6 border-2 border-white/10 rounded-b-lg pointer-events-none"></div>
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/6 border-2 border-white/10 rounded-t-lg pointer-events-none"></div>
                     <div className="absolute top-1/2 left-0 right-0 border-t-2 border-white/10 pointer-events-none"></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-white/10 rounded-full pointer-events-none"></div>
                     
                     {/* Heatmap spots */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-brand-lime/40 blur-xl rounded-full"></div>
                     <div className="absolute top-[40%] left-[30%] w-16 h-16 bg-yellow-400/30 blur-xl rounded-full"></div>
                     <div className="absolute top-[60%] left-[60%] w-20 h-20 bg-brand-lime/30 blur-xl rounded-full"></div>
                     
                     {/* Position Dot */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-lime rounded-full shadow-[0_0_15px_rgba(200,249,2,0.8)] border-2 border-white z-10"></div>
                  </div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-4">Preferred Zones</p>
               </div>
            </div>

            {/* Bottom Split (Recent Activity & Achievements) */}
            <div className="flex flex-col md:flex-row gap-8">
              
              <div className="flex-1 bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
                 <h3 className="font-heading font-black text-lg uppercase mb-6">RECENT ACTIVITY</h3>
                 
                 <div className="space-y-6 border-l-2 border-white/10 ml-3 pl-4 relative">
                   {/* Activity 1 */}
                   <div className="relative">
                     <div className="absolute w-3 h-3 bg-brand-lime rounded-full -left-[23px] top-1"></div>
                     <div className="flex justify-between items-start mb-1">
                       <p className="text-sm font-bold text-white leading-tight">Scored 2 goals in the match <span className="bg-white/10 border border-white/10 text-[8px] px-1.5 py-0.5 rounded ml-1 text-brand-lime">MATCH</span></p>
                       <span className="text-[10px] text-gray-500 flex-shrink-0">2 days ago</span>
                     </div>
                     <p className="text-[10px] text-gray-400">Delhi Football Warriors vs Kings United</p>
                   </div>
                   {/* Activity 2 */}
                   <div className="relative">
                     <div className="absolute w-3 h-3 bg-brand-lime rounded-full -left-[23px] top-1"></div>
                     <div className="flex justify-between items-start mb-1">
                       <p className="text-sm font-bold text-white leading-tight">Received Player of the Match <span className="bg-white/10 border border-white/10 text-[8px] px-1.5 py-0.5 rounded ml-1 text-brand-lime">MATCH</span></p>
                       <span className="text-[10px] text-gray-500 flex-shrink-0">5 days ago</span>
                     </div>
                     <p className="text-[10px] text-gray-400">Delhi Football Warriors vs Blue Tigers</p>
                   </div>
                   {/* Activity 3 */}
                   <div className="relative">
                     <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[23px] top-1"></div>
                     <div className="flex justify-between items-start mb-1">
                       <p className="text-sm font-bold text-white leading-tight">Joined the group <span className="text-brand-lime">Delhi Football Warriors</span> <span className="bg-white/10 border border-white/10 text-[8px] px-1.5 py-0.5 rounded ml-1 text-gray-400">GROUP</span></p>
                       <span className="text-[10px] text-gray-500 flex-shrink-0">1 week ago</span>
                     </div>
                   </div>
                   {/* Activity 4 */}
                   <div className="relative">
                     <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[23px] top-1"></div>
                     <div className="flex justify-between items-start mb-1">
                       <p className="text-sm font-bold text-white leading-tight">Commented on <span className="text-brand-lime">Rohit Sharma's post</span> <span className="bg-white/10 border border-white/10 text-[8px] px-1.5 py-0.5 rounded ml-1 text-gray-400">ACTIVITY</span></p>
                       <span className="text-[10px] text-gray-500 flex-shrink-0">1 week ago</span>
                     </div>
                   </div>
                 </div>
              </div>

              <div className="flex-1 bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
                 <div className="flex justify-between items-end mb-6">
                   <h3 className="font-heading font-black text-lg uppercase">ACHIEVEMENTS</h3>
                   <button className="text-brand-lime text-[10px] font-bold uppercase hover:underline tracking-wider">View All</button>
                 </div>
                 
                 <div className="space-y-4">
                   {[
                     { title: "Top Scorer", sub: "Inter-Collegiate Tournament 2024", icon: Trophy, color: "text-yellow-400" },
                     { title: "Winning Goal", sub: "State Championship Final 2024", icon: Goal, color: "text-brand-lime" },
                     { title: "Most Assists", sub: "Khel Clan League Season 2", icon: ActivitySquare, color: "text-blue-400" },
                     { title: "Best Midfielder", sub: "Summer League 2024", icon: Shield, color: "text-purple-400" }
                   ].map((a, i) => (
                     <div key={i} className="flex items-center gap-3 bg-[#05110a] border border-white/5 rounded-lg p-3">
                       <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                         <a.icon size={20} className={a.color}/>
                       </div>
                       <div>
                         <h4 className="font-bold text-sm text-white">{a.title}</h4>
                         <p className="text-[10px] text-gray-500">{a.sub}</p>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>

            </div>

            {/* Reviews */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6 lg:p-8">
               <div className="flex justify-between items-end mb-8">
                 <h3 className="font-heading font-black text-xl">REVIEWS (24)</h3>
                 <button className="text-brand-lime text-xs font-bold uppercase tracking-widest hover:underline">View All</button>
               </div>
               
               <div className="flex flex-col md:flex-row gap-8">
                 
                 <div className="flex-shrink-0 text-center w-32 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
                   <div className="font-heading font-black text-5xl text-white mb-2 leading-none">4.7</div>
                   <div className="flex justify-center gap-1 mb-2">
                     <Star size={12} className="text-yellow-400" fill="currentColor"/>
                     <Star size={12} className="text-yellow-400" fill="currentColor"/>
                     <Star size={12} className="text-yellow-400" fill="currentColor"/>
                     <Star size={12} className="text-yellow-400" fill="currentColor"/>
                     <StarHalf size={12} className="text-yellow-400" fill="currentColor"/>
                   </div>
                   <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-4">(24 Reviews)</div>
                   
                   <div className="space-y-1 text-[10px]">
                     {[
                       { star: 5, pct: "75%", count: 18 },
                       { star: 4, pct: "16%", count: 4 },
                       { star: 3, pct: "4%", count: 1 },
                       { star: 2, pct: "0%", count: 0 },
                       { star: 1, pct: "0%", count: 0 }
                     ].map((r, i) => (
                       <div key={i} className="flex items-center gap-1">
                         <div className="w-2 font-bold text-gray-400">{r.star}</div>
                         <Star size={6} className="text-gray-500 mr-1"/>
                         <div className="flex-grow h-1.5 bg-[#05110a] rounded-full overflow-hidden">
                           <div className="h-full bg-brand-lime rounded-full" style={{width: r.pct}}></div>
                         </div>
                         <div className="w-4 text-right text-gray-500">{r.count}</div>
                       </div>
                     ))}
                   </div>
                 </div>

                 <div className="flex-grow grid grid-cols-1 sm:grid-cols-3 gap-4">
                   {[
                     { user: "Rohit Sharma", level: "Advanced", rating: "5.0", text: "Amazing player! Great vision on the field and gives his 100%.", time: "1 week ago", img: "https://i.pravatar.cc/150?u=2" },
                     { user: "Karan Mehta", level: "Advanced", rating: "4.5", text: "Very consistent performance and a true team player.", time: "2 weeks ago", img: "https://i.pravatar.cc/150?u=3" },
                     { user: "Vikram Singh", level: "Intermediate", rating: "4.0", text: "Good skills and attitude. Keep up great work!", time: "3 weeks ago", img: "https://i.pravatar.cc/150?u=5" }
                   ].map((r, i) => (
                     <div key={i} className="bg-[#05110a] border border-white/5 rounded-xl p-4 flex flex-col h-full">
                       <div className="flex gap-2 items-center mb-3">
                         <img src={r.img} className="w-8 h-8 rounded-full" alt=""/>
                         <div>
                           <h4 className="font-bold text-[10px] text-white leading-tight">{r.user}</h4>
                           <span className="text-[8px] bg-white/10 px-1 rounded text-brand-lime">{r.level}</span>
                         </div>
                         <div className="ml-auto text-[10px] font-bold text-yellow-400 flex items-center gap-0.5"><Star size={8} fill="currentColor"/> {r.rating}</div>
                       </div>
                       <p className="text-[10px] text-gray-400 flex-grow mb-3 leading-relaxed">"{r.text}"</p>
                       <div className="text-[8px] text-gray-600 uppercase font-bold">{r.time}</div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>

          </div>

          {/* RIGHT COL */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Badges */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
               <div className="flex justify-between items-end mb-6">
                 <h3 className="font-heading font-black text-lg uppercase">BADGES (7)</h3>
                 <button className="text-brand-lime text-[10px] font-bold uppercase hover:underline tracking-wider">View All</button>
               </div>
               
               <div className="grid grid-cols-3 gap-4">
                 {[
                   { name: "Top Scorer", icon: Trophy, color: "text-yellow-400", border: "border-yellow-400/30", bg: "bg-yellow-400/10", val: "10" },
                   { name: "Playmaker", icon: ActivitySquare, color: "text-blue-400", border: "border-blue-400/30", bg: "bg-blue-400/10", val: "5" },
                   { name: "Iron Man", icon: Shield, color: "text-purple-400", border: "border-purple-400/30", bg: "bg-purple-400/10", val: "50" },
                   { name: "Team Player", icon: Users, color: "text-brand-lime", border: "border-brand-lime/30", bg: "bg-brand-lime/10", val: null },
                   { name: "Fair Play", icon: CheckCircle, color: "text-emerald-400", border: "border-emerald-400/30", bg: "bg-emerald-400/10", val: null },
                   { name: "Consistent", icon: Star, color: "text-yellow-400", border: "border-yellow-400/30", bg: "bg-yellow-400/10", val: null },
                   { name: "Rising Star", icon: StarHalf, color: "text-orange-400", border: "border-orange-400/30", bg: "bg-orange-400/10", val: null }
                 ].map((b, i) => (
                   <div key={i} className="flex flex-col items-center group cursor-pointer">
                     <div className={`w-14 h-16 clip-hex flex items-center justify-center flex-col ${b.bg} border-2 ${b.border} mb-2 relative group-hover:scale-110 transition-transform`}>
                       <b.icon size={18} className={`${b.color} mb-1`} />
                       {b.val && <span className={`text-[10px] font-black ${b.color}`}>{b.val}</span>}
                     </div>
                     <span className="text-[10px] text-gray-400 font-bold text-center leading-tight">{b.name}</span>
                   </div>
                 ))}
               </div>
            </div>

            {/* Upcoming Games */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
               <div className="flex justify-between items-end mb-6">
                 <h3 className="font-heading font-black text-lg uppercase">UPCOMING GAMES</h3>
                 <button className="text-brand-lime text-[10px] font-bold uppercase hover:underline tracking-wider">View All</button>
               </div>
               
               <div className="space-y-4">
                 {[
                   { dateM: "MAY", dateD: "18", type: "MATCH", t1: "Delhi Football Warriors", t2: "Young Challengers FC", time: "Today, 7:00 PM", loc: "Green Field Arena" },
                   { dateM: "MAY", dateD: "25", type: "TOURNAMENT", title: "Summer League 2025", sub: "Quarter Final", time: "Sun, 10:00 AM", loc: "Rajiv Gandhi Stadium" }
                 ].map((g, i) => (
                   <div key={i} className="flex gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                     <div className="flex flex-col items-center justify-center bg-[#05110a] border border-white/10 rounded-lg w-12 h-14 flex-shrink-0">
                       <span className="text-[10px] text-gray-500 font-bold uppercase">{g.dateM}</span>
                       <span className="font-heading font-black text-lg leading-none">{g.dateD}</span>
                     </div>
                     <div className="flex-grow">
                       <span className="bg-white/10 text-white border border-white/10 text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider mb-2 inline-block">{g.type}</span>
                       
                       {g.title ? (
                         <>
                           <h4 className="font-bold text-white text-xs leading-tight mb-1">{g.title}</h4>
                           <p className="text-[10px] text-brand-lime font-bold mb-2">{g.sub}</p>
                         </>
                       ) : (
                         <div className="flex items-center gap-2 mb-2">
                           <Shield size={16} className="text-brand-lime"/>
                           <span className="text-[10px] font-bold text-gray-400">vs</span>
                           <Shield size={16} className="text-purple-400"/>
                         </div>
                       )}

                       <div className="text-[10px] text-gray-400 flex items-center gap-3">
                         <div className="flex items-center gap-1"><Calendar size={10} className="text-gray-500"/> {g.time}</div>
                         <div className="flex items-center gap-1"><MapPin size={10} className="text-gray-500"/> {g.loc}</div>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
               
               <button className="w-full mt-4 bg-[#05110a] border border-white/10 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:border-brand-lime hover:text-brand-lime transition-colors flex items-center justify-center gap-2">
                 VIEW ALL GAMES ↗
               </button>
            </div>

            {/* My Teams */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
               <h3 className="font-heading font-black text-lg uppercase mb-6">MY TEAMS (3)</h3>
               <div className="space-y-4">
                 {[
                   { name: "Delhi Football Warriors", sport: "Football", role: "Captain", roleColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20" },
                   { name: "Khel Clan All Stars", sport: "Football", role: "Member", roleColor: "text-brand-lime bg-brand-lime/10 border-brand-lime/20" },
                   { name: "North Delhi United", sport: "Football", role: "Member", roleColor: "text-brand-lime bg-brand-lime/10 border-brand-lime/20" }
                 ].map((t, i) => (
                   <div key={i} className="flex items-center gap-3 group cursor-pointer">
                     <div className="w-10 h-10 rounded-lg bg-[#05110a] border border-brand-lime/20 flex items-center justify-center group-hover:border-brand-lime transition-colors">
                       <Shield size={16} className="text-brand-lime"/>
                     </div>
                     <div className="flex-grow">
                       <h4 className="font-bold text-sm text-white group-hover:text-brand-lime transition-colors">{t.name}</h4>
                       <p className="text-[10px] text-gray-500">{t.sport}</p>
                     </div>
                     <span className={`text-[8px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${t.roleColor}`}>{t.role}</span>
                   </div>
                 ))}
               </div>
            </div>

            {/* Grow Together block */}
            <div className="mt-6 bg-gradient-to-r from-[#0a1a12] to-brand-forest/30 border border-brand-lime/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute right-0 bottom-0 opacity-40 pointer-events-none">
                  <img src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=200" className="w-32 h-32 object-cover mask-image-fade" alt=""/>
                </div>
                <h3 className="font-heading font-black text-xl mb-1 relative z-10 leading-tight">GROW TOGETHER.<br/>ACHIEVE MORE.</h3>
                <p className="text-xs text-gray-400 mb-4 relative z-10 max-w-[200px]">Connect with players, build your team and win together.</p>
                <button className="bg-brand-lime text-[#05110a] px-6 py-2.5 rounded font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors relative z-10">
                  JOIN KHEL CLAN ↗
                </button>
             </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}
