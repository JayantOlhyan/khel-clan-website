import React, { useState } from 'react';
import { Search, MapPin, Calendar, CheckCircle, ChevronDown, Filter, ChevronLeft, ChevronRight, Trophy, Users, Share2, Heart, Shield, ActivitySquare, MessageCircle, ArrowUpRight, Goal, Video, Play, ExternalLink, Star, FileText } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function TournamentDetails() {
  const { tournamentSlug } = useParams();

  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black pt-24">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/tournaments" className="hover:text-white transition-colors">Tournaments</Link>
          <ChevronRight size={10} />
          <span className="text-brand-lime">Khel Clan Football Championship 2025</span>
        </div>

        {/* HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Hero Content (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-16 h-20 rounded-xl overflow-hidden border-2 border-brand-lime bg-white flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(200,249,2,0.2)]">
                   <img src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=150" className="w-full h-full object-cover" alt="Poster"/>
                   <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-2 text-center text-[8px] font-black leading-tight border border-white/20">KHEL CLAN<br/>FOOTBALL<br/>CHAMPIONSHIP<br/><span className="text-brand-lime">2025</span></div>
                 </div>
                 
                 <div>
                   <div className="bg-white/10 border border-white/20 text-white text-[8px] font-bold px-2 py-1 rounded uppercase tracking-widest inline-flex mb-2">FEATURED</div>
                   <h1 className="font-heading font-black text-3xl md:text-4xl leading-tight">Khel Clan Football Championship 2025</h1>
                 </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 font-bold mb-4">
                 <span className="flex items-center gap-1.5"><div className="w-5 h-5 rounded-full bg-brand-lime/20 flex items-center justify-center border border-brand-lime/30 text-[10px]">⚽</div> Football</span>
                 <span className="flex items-center gap-1.5"><Trophy size={14} className="text-gray-500"/> Open • Knockout</span>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-6">
                <div className="flex items-center gap-1.5 text-xs">
                  <Star size={14} className="text-yellow-400" fill="currentColor"/> 
                  <span className="font-bold text-white text-sm">4.8</span> 
                  <span className="text-gray-500">(128 reviews)</span>
                </div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <span className="flex items-center gap-1.5 text-xs text-brand-lime font-bold"><Users size={14}/> 320+ Participants</span>
              </div>
              
              <p className="text-sm text-gray-300 leading-relaxed mb-8 max-w-md">
                The biggest amateur football tournament of the year. Compete with top teams from across the country, showcase your talent and become the champion!
              </p>
            </div>
            
            <div className="flex gap-4">
               <button className="flex-grow bg-brand-lime text-[#05110a] py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors flex justify-center items-center gap-2">
                 REGISTER TEAM ↗
               </button>
               <button className="w-14 flex-shrink-0 bg-transparent border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-colors"><Share2 size={20}/></button>
               <button className="w-14 flex-shrink-0 bg-transparent border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-colors"><Heart size={20}/></button>
            </div>
          </div>

          {/* Hero Image Slider (Right) */}
          <div className="lg:col-span-7 h-[300px] lg:h-[400px] relative rounded-3xl overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Tournament Main"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] via-transparent to-transparent"></div>

            {/* Thumbnail preview strip */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
              <div className="flex gap-2 overflow-x-auto hide-scrollbar flex-grow">
                <div className="w-24 h-16 rounded-lg border-2 border-brand-lime overflow-hidden flex-shrink-0 cursor-pointer relative">
                  <img src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="thumb"/>
                </div>
                <div className="w-24 h-16 rounded-lg border-2 border-transparent hover:border-white/50 overflow-hidden flex-shrink-0 cursor-pointer opacity-70 hover:opacity-100 transition-all relative">
                  <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="thumb"/>
                </div>
                <div className="w-24 h-16 rounded-lg border-2 border-transparent hover:border-white/50 overflow-hidden flex-shrink-0 cursor-pointer opacity-70 hover:opacity-100 transition-all relative">
                  <img src="https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="thumb"/>
                </div>
                <div className="w-24 h-16 rounded-lg border-2 border-transparent hover:border-white/50 overflow-hidden flex-shrink-0 cursor-pointer opacity-70 hover:opacity-100 transition-all relative">
                  <img src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="thumb"/>
                </div>
                <div className="w-24 h-16 rounded-lg border-2 border-transparent hover:border-white/50 overflow-hidden flex-shrink-0 cursor-pointer opacity-70 hover:opacity-100 transition-all relative">
                  <img src="https://images.unsplash.com/photo-1593789280629-87a2d8291410?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="thumb"/>
                </div>
              </div>
              <button className="w-8 h-16 rounded-lg bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors flex-shrink-0">
                <ChevronRight size={16}/>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* TABS */}
      <div className="border-y border-white/10 sticky top-0 bg-[#05110a]/90 backdrop-blur z-40 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto hide-scrollbar">
            {[
              { name: 'OVERVIEW', icon: Shield },
              { name: 'SCHEDULE', icon: Calendar },
              { name: 'TEAMS', icon: Users },
              { name: 'BRACKETS', icon: Trophy },
              { name: 'RULES', icon: FileText },
              { name: 'PRIZES', icon: Goal },
              { name: 'GALLERY (24)', icon: null },
              { name: 'SPONSORS', icon: Heart },
              { name: 'REVIEWS (128)', icon: Star }
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COL */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* About Block */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6 lg:p-8">
               <h3 className="font-heading font-black text-xl mb-4">About This Tournament</h3>
               <p className="text-sm text-gray-300 leading-relaxed mb-8">
                 Khel Clan Football Championship 2025 brings together the best amateur football teams from across the country for an epic battle on the field. Experience thrilling matches, sportsmanship, and unforgettable moments.
               </p>
               
               <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                 <div>
                   <div className="flex items-center gap-2 text-brand-lime mb-1"><Trophy size={16}/> <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tournament Type</span></div>
                   <div className="font-bold text-sm">Knockout</div>
                 </div>
                 <div>
                   <div className="flex items-center gap-2 text-brand-lime mb-1"><Users size={16}/> <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Team Size</span></div>
                   <div className="font-bold text-sm">11 Players</div>
                 </div>
                 <div>
                   <div className="flex items-center gap-2 text-brand-lime mb-1"><Calendar size={16}/> <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Matches</span></div>
                   <div className="font-bold text-sm">6+ Guaranteed</div>
                 </div>
                 <div>
                   <div className="flex items-center gap-2 text-brand-lime mb-1"><Shield size={16}/> <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Entry Fee</span></div>
                   <div className="font-bold text-sm">₹5,999 <span className="text-[10px] text-gray-500 font-normal">/ Team</span></div>
                 </div>
                 <div>
                   <div className="flex items-center gap-2 text-brand-lime mb-1"><Goal size={16}/> <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Prize Pool</span></div>
                   <div className="font-bold text-sm text-brand-lime">₹1,00,000</div>
                 </div>
               </div>

               <div className="grid grid-autofit gap-4 mt-8 pt-8 border-t border-white/10">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded border border-white/10 bg-[#05110a] flex items-center justify-center text-brand-lime"><Calendar size={20}/></div>
                   <div>
                     <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Dates</div>
                     <div className="font-bold text-sm leading-tight">May 25 – May 30, 2025</div>
                     <div className="text-[10px] text-gray-500">6 Days Tournament</div>
                   </div>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded border border-white/10 bg-[#05110a] flex items-center justify-center text-brand-lime"><MapPin size={20}/></div>
                   <div>
                     <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Venue</div>
                     <div className="font-bold text-sm leading-tight">Green Field Arena</div>
                     <div className="text-[10px] text-gray-500">New Delhi, India</div>
                   </div>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded border border-white/10 bg-[#05110a] flex items-center justify-center text-brand-lime"><Users size={20}/></div>
                   <div>
                     <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Teams</div>
                     <div className="font-bold text-sm leading-tight">32 Teams</div>
                     <div className="text-[10px] text-gray-500">Confirmed</div>
                   </div>
                 </div>
               </div>
            </div>

            {/* Schedule Timeline */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6 lg:p-8">
               <div className="flex justify-between items-end mb-8">
                 <h3 className="font-heading font-black text-xl">Tournament Schedule</h3>
                 <button className="text-brand-lime text-xs font-bold uppercase tracking-widest hover:underline">View Full Schedule</button>
               </div>
               
               <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4">
                 {[
                   { d: "25", m: "MAY", day: "Sun", title: "Team Check-in & Opening Ceremony", time: "9:00 AM – 12:00 PM" },
                   { d: "25", m: "MAY", day: "Sun", title: "Round of 32 Matches", time: "1:00 PM – 8:00 PM" },
                   { d: "26", m: "MAY", day: "Mon", title: "Round of 16 Matches", time: "1:00 PM – 8:00 PM" },
                   { d: "27", m: "MAY", day: "Tue", title: "Quarter Finals", time: "1:00 PM – 8:00 PM" },
                   { d: "28", m: "MAY", day: "Wed", title: "Semi Finals", time: "1:00 PM – 8:00 PM" },
                   { d: "30", m: "MAY", day: "Fri", title: "Finals & Prize Ceremony", time: "4:00 PM – 8:00 PM" }
                 ].map((s, i) => (
                   <div key={i} className="flex-shrink-0 w-48 bg-[#05110a] border border-white/10 rounded-xl p-4 flex flex-col hover:border-brand-lime/50 transition-colors cursor-pointer">
                     <div className="flex items-center gap-3 mb-4">
                       <div className="text-center">
                         <div className="text-[8px] text-brand-lime font-bold uppercase">{s.m}</div>
                         <div className="font-heading font-black text-2xl leading-none">{s.d}</div>
                       </div>
                       <div className="w-px h-8 bg-white/10"></div>
                       <div className="text-xs text-gray-400 font-bold uppercase">{s.day}</div>
                     </div>
                     <h4 className="font-bold text-xs mb-2 leading-tight flex-grow">{s.title}</h4>
                     <div className="text-[10px] text-gray-400 flex items-center gap-1 mb-1"><Calendar size={10}/> {s.time}</div>
                     <div className="text-[10px] text-gray-500 flex items-center gap-1"><MapPin size={10}/> Green Field Arena</div>
                   </div>
                 ))}
               </div>
               
               <div className="flex justify-center gap-2 mt-4">
                 <div className="w-2 h-2 rounded-full bg-brand-lime"></div>
                 <div className="w-2 h-2 rounded-full bg-white/20"></div>
                 <div className="w-2 h-2 rounded-full bg-white/20"></div>
               </div>
            </div>

            {/* Middle Grid (Prize, Highlights, Rules) */}
            <div className="grid grid-autofit gap-6">
               
               {/* Prize Pool */}
               <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6 flex flex-col">
                 <h3 className="font-heading font-black text-lg mb-4">Prize Pool</h3>
                 <div className="font-heading font-black text-3xl text-brand-lime leading-none mb-1">₹1,00,000</div>
                 <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-6">Total Prize Pool</div>
                 
                 <div className="w-full flex justify-center mb-6">
                   <Trophy size={60} className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]" />
                 </div>
                 
                 <div className="space-y-3 flex-grow text-xs">
                   <div className="flex justify-between items-center pb-2 border-b border-white/5">
                     <span className="flex items-center gap-1.5"><Trophy size={14} className="text-yellow-400"/> Winner</span>
                     <div className="text-right"><span className="text-brand-lime font-bold">₹50,000</span> <span className="text-[8px] text-gray-500">+ Trophy + Medals</span></div>
                   </div>
                   <div className="flex justify-between items-center pb-2 border-b border-white/5">
                     <span className="flex items-center gap-1.5"><Trophy size={14} className="text-gray-300"/> Runner Up</span>
                     <div className="text-right"><span className="text-brand-lime font-bold">₹25,000</span> <span className="text-[8px] text-gray-500">+ Medals</span></div>
                   </div>
                   <div className="flex justify-between items-center pb-2 border-b border-white/5">
                     <span className="flex items-center gap-1.5"><Trophy size={14} className="text-orange-400"/> 3rd Place</span>
                     <div className="text-right"><span className="text-brand-lime font-bold">₹15,000</span> <span className="text-[8px] text-gray-500">+ Medals</span></div>
                   </div>
                   <div className="flex justify-between items-center">
                     <span className="flex items-center gap-1.5"><Trophy size={14} className="text-gray-500"/> 4th Place</span>
                     <div className="text-right"><span className="text-brand-lime font-bold">₹10,000</span> <span className="text-[8px] text-gray-500">+ Medals</span></div>
                   </div>
                 </div>
                 
                 <div className="mt-6 text-[8px] text-gray-500 flex items-center gap-1">
                   <CheckCircle size={10} className="text-brand-lime"/> All participants will receive a participation certificate.
                 </div>
               </div>

               {/* Highlights */}
               <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
                 <h3 className="font-heading font-black text-lg mb-6">Tournament Highlights</h3>
                 <ul className="space-y-4 text-xs text-gray-300">
                   <li className="flex items-start gap-3"><CheckCircle size={14} className="text-brand-lime flex-shrink-0 mt-0.5"/> Professional match referees</li>
                   <li className="flex items-start gap-3"><CheckCircle size={14} className="text-brand-lime flex-shrink-0 mt-0.5"/> Live updates & match highlights</li>
                   <li className="flex items-start gap-3"><CheckCircle size={14} className="text-brand-lime flex-shrink-0 mt-0.5"/> Top teams from multiple cities</li>
                   <li className="flex items-start gap-3"><CheckCircle size={14} className="text-brand-lime flex-shrink-0 mt-0.5"/> Best player, top scorer & best goalkeeper awards</li>
                   <li className="flex items-start gap-3"><CheckCircle size={14} className="text-brand-lime flex-shrink-0 mt-0.5"/> Trophies, medals & exciting prizes</li>
                   <li className="flex items-start gap-3"><CheckCircle size={14} className="text-brand-lime flex-shrink-0 mt-0.5"/> Food & beverages available</li>
                   <li className="flex items-start gap-3"><CheckCircle size={14} className="text-brand-lime flex-shrink-0 mt-0.5"/> First aid & medical support</li>
                 </ul>
               </div>

               {/* Rules Summary */}
               <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6 flex flex-col">
                 <h3 className="font-heading font-black text-lg mb-6">Rules Summary</h3>
                 <ul className="space-y-4 text-xs text-gray-300 flex-grow">
                   <li className="flex items-start gap-3"><FileText size={14} className="text-gray-500 flex-shrink-0 mt-0.5"/> 11 Players per team (including 1 goalkeeper)</li>
                   <li className="flex items-start gap-3"><FileText size={14} className="text-gray-500 flex-shrink-0 mt-0.5"/> Team must report 30 mins before match time</li>
                   <li className="flex items-start gap-3"><FileText size={14} className="text-gray-500 flex-shrink-0 mt-0.5"/> Fair play is mandatory</li>
                   <li className="flex items-start gap-3"><FileText size={14} className="text-gray-500 flex-shrink-0 mt-0.5"/> Decisions by referees are final</li>
                   <li className="flex items-start gap-3"><FileText size={14} className="text-gray-500 flex-shrink-0 mt-0.5"/> Protests must be submitted within 15 mins of match</li>
                 </ul>
                 <button className="text-brand-lime text-[10px] font-bold uppercase tracking-widest mt-6 text-left hover:underline flex items-center gap-1">View All Rules <ArrowUpRight size={12}/></button>
               </div>
            </div>

            {/* Reviews Mini */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6 lg:p-8">
               <div className="flex justify-between items-end mb-6">
                 <div>
                   <h3 className="font-heading font-black text-xl mb-1">What People Say</h3>
                   <div className="flex items-center gap-4">
                     <span className="font-heading font-black text-4xl leading-none">4.8</span>
                     <div>
                       <div className="flex gap-1 mb-1">
                         <Star size={12} className="text-yellow-400" fill="currentColor"/>
                         <Star size={12} className="text-yellow-400" fill="currentColor"/>
                         <Star size={12} className="text-yellow-400" fill="currentColor"/>
                         <Star size={12} className="text-yellow-400" fill="currentColor"/>
                         <Star size={12} className="text-yellow-400" fill="currentColor"/>
                       </div>
                       <span className="text-[10px] text-gray-500">128 Reviews</span>
                     </div>
                   </div>
                 </div>
                 <button className="text-brand-lime text-[10px] font-bold uppercase hover:underline tracking-wider">View All Reviews</button>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                 {[
                   { name: "Rohit Sharma", text: "Amazing organization and excellent facilities. Highly recommended tournament!", time: "2 days ago", img: "https://i.pravatar.cc/150?u=12" },
                   { name: "Ankit Verma", text: "Very well managed. Great experience competing with strong teams.", time: "5 days ago", img: "https://i.pravatar.cc/150?u=15" },
                   { name: "Meera Joshi", text: "Loved the matches and the vibe! Will definitely participate again.", time: "1 week ago", img: "https://i.pravatar.cc/150?u=18" }
                 ].map((r, i) => (
                   <div key={i} className="bg-[#05110a] border border-white/5 rounded-xl p-4">
                     <div className="flex items-center gap-3 mb-3">
                       <img src={r.img} className="w-8 h-8 rounded-full" alt=""/>
                       <div>
                         <div className="flex items-center gap-1">
                           <h4 className="font-bold text-[10px] text-white">{r.name}</h4>
                           <span className="bg-brand-lime/10 text-brand-lime text-[6px] px-1 rounded uppercase font-bold border border-brand-lime/20">Verified</span>
                         </div>
                         <div className="flex gap-0.5 mt-0.5">
                           <Star size={8} className="text-yellow-400" fill="currentColor"/>
                           <Star size={8} className="text-yellow-400" fill="currentColor"/>
                           <Star size={8} className="text-yellow-400" fill="currentColor"/>
                           <Star size={8} className="text-yellow-400" fill="currentColor"/>
                           <Star size={8} className="text-yellow-400" fill="currentColor"/>
                         </div>
                       </div>
                       <span className="ml-auto text-[8px] text-gray-600">{r.time}</span>
                     </div>
                     <p className="text-[10px] text-gray-400 leading-relaxed">"{r.text}"</p>
                   </div>
                 ))}
               </div>
            </div>

          </div>

          {/* RIGHT COL (Widgets) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Registration Widget (Sticky) */}
            <div className="bg-[#0a1a12] border border-brand-lime/20 rounded-2xl p-6 sticky top-28 shadow-[0_0_30px_rgba(200,249,2,0.05)]">
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <h3 className="font-heading font-black text-xl">Registration</h3>
                <span className="text-[8px] font-bold text-brand-lime uppercase tracking-widest border border-brand-lime px-2 py-1 rounded bg-brand-lime/10">Registrations Open</span>
              </div>
              
              <div className="mb-6 border-b border-white/10 pb-6">
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-3 text-center">Registrations Ends In</p>
                <div className="flex justify-center gap-2 text-center">
                  <div className="w-14"><div className="font-heading font-black text-3xl text-brand-lime">08</div><div className="text-[8px] text-gray-500 uppercase">Days</div></div>
                  <div className="font-black text-gray-700 text-xl mt-1">:</div>
                  <div className="w-14"><div className="font-heading font-black text-3xl text-brand-lime">14</div><div className="text-[8px] text-gray-500 uppercase">Hours</div></div>
                  <div className="font-black text-gray-700 text-xl mt-1">:</div>
                  <div className="w-14"><div className="font-heading font-black text-3xl text-brand-lime">32</div><div className="text-[8px] text-gray-500 uppercase">Mins</div></div>
                  <div className="font-black text-gray-700 text-xl mt-1">:</div>
                  <div className="w-14"><div className="font-heading font-black text-3xl text-brand-lime">45</div><div className="text-[8px] text-gray-500 uppercase">Secs</div></div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-[#05110a] border border-white/10 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-sm">Team Registration</h4>
                    <div className="text-right">
                      <div className="font-bold text-lg leading-none">₹5,999</div>
                      <div className="text-[8px] text-gray-500">/team</div>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-400 mb-4">For one team (11-18 players)</p>
                  <button className="w-full bg-brand-lime text-[#05110a] py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">
                     REGISTER TEAM
                  </button>
                </div>
                
                <div className="bg-[#05110a] border border-white/10 rounded-xl p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-sm">Spectator Pass</h4>
                    <div className="text-right">
                      <div className="font-bold text-lg leading-none">₹199</div>
                      <div className="text-[8px] text-gray-500">/person</div>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-400 mb-4">Entry for per day</p>
                  <button className="w-full border border-white/20 text-white py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-colors">
                     GET PASS
                  </button>
                </div>
              </div>

              <div className="space-y-2 text-[10px] text-gray-400">
                <div className="flex items-center gap-2"><CheckCircle size={12} className="text-brand-lime"/> Secure Payment</div>
                <div className="flex items-center gap-2"><CheckCircle size={12} className="text-brand-lime"/> Instant Confirmation</div>
                <div className="flex items-center gap-2"><CheckCircle size={12} className="text-brand-lime"/> Cancellation up to 48 hrs</div>
              </div>
            </div>

            {/* Organizer Block */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
              <h3 className="font-heading font-black text-lg mb-4">Organized By</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full border-2 border-brand-lime flex items-center justify-center bg-[#05110a]">
                  <span className="font-heading font-black text-brand-lime text-lg">KC</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm flex items-center gap-1">Khel Clan Sports <CheckCircle size={12} className="text-brand-lime"/></h4>
                  <p className="text-[10px] text-gray-400">Community • Since Jan 2021</p>
                </div>
              </div>
              <p className="text-xs text-gray-300 mb-4">
                Building a strong sports community by connecting players, teams and fans.
              </p>
              <button className="w-full bg-[#05110a] border border-white/10 hover:border-white/30 text-xs font-bold py-2.5 rounded transition-colors text-white">
                VIEW ORGANIZER PROFILE
              </button>
            </div>

            {/* Venue Mini */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
              <h3 className="font-heading font-black text-lg mb-4">Venue</h3>
              <div className="flex items-center gap-3 mb-4 cursor-pointer group">
                <img src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=100" className="w-12 h-12 rounded-lg object-cover" alt="Venue"/>
                <div>
                  <h4 className="font-bold text-sm text-white group-hover:text-brand-lime transition-colors">Green Field Arena</h4>
                  <div className="flex items-center gap-1 text-[10px] mb-0.5">
                    <Star size={10} className="text-yellow-400" fill="currentColor"/> <span className="font-bold text-white">4.7</span> <span className="text-gray-500">(230 reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-gray-400"><MapPin size={10}/> Hauz Khas, New Delhi, Delhi 110016</div>
                  <span className="text-[10px] text-brand-lime hover:underline mt-1 block">View on Map</span>
                </div>
              </div>
              <div className="w-full h-32 rounded-lg bg-[#05110a] border border-white/10 overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-30" alt="Map"/>
                 <MapPin size={24} className="text-brand-lime absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg" />
              </div>
            </div>

          </div>

        </div>
      </div>
      
    </div>
  );
}
