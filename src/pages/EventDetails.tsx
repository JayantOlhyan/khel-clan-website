import React, { useState } from 'react';
import { Search, MapPin, Calendar, CheckCircle, ChevronDown, Filter, ChevronLeft, ChevronRight, Trophy, Users, Share2, Heart, Shield, ActivitySquare, MessageCircle, ArrowUpRight, Goal, Video, Play, ExternalLink, Star, FileText } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function EventDetails() {
  const { eventSlug } = useParams();

  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black pt-24">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/events" className="hover:text-white transition-colors">Events</Link>
          <ChevronRight size={10} />
          <span className="text-brand-lime">Khel Clan Football Meetup</span>
        </div>

        {/* HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Hero Content (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-16 h-16 rounded-xl overflow-hidden bg-brand-lime flex items-center justify-center flex-shrink-0">
                   <div className="text-[#05110a] text-center">
                     <div className="font-heading font-black text-2xl leading-none">17</div>
                     <div className="text-[10px] font-bold uppercase tracking-widest">May</div>
                   </div>
                 </div>
                 
                 <div>
                   <div className="bg-white/10 border border-white/20 text-white text-[8px] font-bold px-2 py-1 rounded uppercase tracking-widest inline-flex mb-2">FRIENDLY MATCH</div>
                   <h1 className="font-heading font-black text-3xl md:text-4xl leading-tight">Khel Clan Football Meetup</h1>
                 </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 font-bold mb-4">
                 <span className="flex items-center gap-1.5"><div className="w-5 h-5 rounded-full bg-brand-lime/20 flex items-center justify-center border border-brand-lime/30 text-[10px]">⚽</div> Football</span>
                 <span className="flex items-center gap-1.5"><MapPin size={14} className="text-gray-500"/> Green Field Arena, Delhi</span>
              </div>
              
              <p className="text-sm text-gray-300 leading-relaxed mb-8 max-w-md">
                Join us for a casual 11v11 football match this weekend. All skill levels are welcome. Great way to stay fit, meet new people, and enjoy the game!
              </p>

              {/* Host Mini Info */}
              <div className="flex items-center gap-3 mb-8 bg-[#0a1a12] border border-white/10 p-3 rounded-xl inline-flex group cursor-pointer hover:border-brand-lime/50 transition-colors">
                <img src="https://i.pravatar.cc/150?u=12" className="w-10 h-10 rounded-full" alt="Host"/>
                <div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-0.5">Hosted by</div>
                  <div className="font-bold text-sm text-white group-hover:text-brand-lime transition-colors">Rohit Sharma</div>
                </div>
                <div className="w-px h-8 bg-white/10 mx-2"></div>
                <button className="text-xs font-bold bg-[#05110a] border border-white/20 px-3 py-1 rounded hover:bg-white/5 transition-colors">Follow</button>
              </div>
            </div>
            
            <div className="flex gap-4">
               <button className="flex-grow bg-brand-lime text-[#05110a] py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(200,249,2,0.2)]">
                 JOIN EVENT ↗
               </button>
               <button className="w-14 flex-shrink-0 bg-transparent border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-colors"><Share2 size={20}/></button>
               <button className="w-14 flex-shrink-0 bg-transparent border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-colors"><Heart size={20}/></button>
            </div>
          </div>

          {/* Hero Image (Right) */}
          <div className="lg:col-span-7 h-[300px] lg:h-[400px] relative rounded-3xl overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Event Main"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] via-[#05110a]/20 to-transparent"></div>
            
            {/* Quick stats floating */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center gap-3">
                 <div className="w-8 h-8 rounded bg-brand-lime/20 flex items-center justify-center text-brand-lime"><Calendar size={16}/></div>
                 <div>
                   <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Date & Time</div>
                   <div className="font-bold text-sm">Sunday, 5:00 PM</div>
                 </div>
              </div>
              <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center gap-3">
                 <div className="w-8 h-8 rounded bg-brand-lime/20 flex items-center justify-center text-brand-lime"><Users size={16}/></div>
                 <div>
                   <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Attendees</div>
                   <div className="font-bold text-sm">18 / 22 Playing</div>
                 </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* TABS */}
      <div className="border-y border-white/10 sticky top-0 bg-[#05110a]/90 backdrop-blur z-40 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto hide-scrollbar">
            {[
              { name: 'ABOUT', icon: Shield },
              { name: 'ATTENDEES (18)', icon: Users },
              { name: 'DISCUSSION (5)', icon: MessageCircle },
              { name: 'VENUE', icon: MapPin },
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
               <h3 className="font-heading font-black text-xl mb-4">Event Details</h3>
               <p className="text-sm text-gray-300 leading-relaxed mb-6">
                 Hey everyone! We're organizing a friendly 11v11 football match this Sunday evening at Green Field Arena. 
                 <br/><br/>
                 It's a great opportunity to get some exercise, improve your skills, and meet other football enthusiasts in the area. We have booked the full ground for 2 hours.
                 <br/><br/>
                 <strong>Skill Level:</strong> Intermediate (but beginners are welcome too!)<br/>
                 <strong>What to bring:</strong> Football boots (studs/turf), proper sports attire, and a water bottle. We will provide the ball and bibs.
               </p>
               
               <div className="flex items-center gap-2 text-sm text-gray-400 font-bold border-t border-white/10 pt-4">
                 <CheckCircle size={16} className="text-brand-lime"/> Please arrive 15 minutes early for warm-up and team distribution.
               </div>
            </div>

            {/* Attendees / Roster */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6 lg:p-8">
               <div className="flex justify-between items-end mb-6">
                 <h3 className="font-heading font-black text-xl">Attendees (18)</h3>
                 <span className="text-xs text-brand-lime font-bold">4 Spots Left</span>
               </div>
               
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                 {/* Host */}
                 <div className="bg-[#05110a] border border-white/5 rounded-xl p-3 flex items-center gap-3">
                   <div className="relative">
                     <img src="https://i.pravatar.cc/150?u=12" className="w-10 h-10 rounded-full" alt=""/>
                     <div className="absolute -bottom-1 -right-1 bg-brand-lime text-[#05110a] rounded-full p-0.5"><Star size={8} fill="currentColor"/></div>
                   </div>
                   <div>
                     <h4 className="font-bold text-xs text-white">Rohit S.</h4>
                     <p className="text-[9px] text-brand-lime font-bold uppercase">Host</p>
                   </div>
                 </div>
                 
                 {/* Other Attendees */}
                 {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                   <div key={i} className="bg-[#05110a] border border-white/5 rounded-xl p-3 flex items-center gap-3">
                     <img src={`https://i.pravatar.cc/150?u=${i + 20}`} className="w-10 h-10 rounded-full" alt=""/>
                     <div>
                       <h4 className="font-bold text-xs text-white">Player {i}</h4>
                       <p className="text-[9px] text-gray-500 uppercase">Confirmed</p>
                     </div>
                   </div>
                 ))}
                 
                 {/* Empty Spots */}
                 {[1, 2].map((i) => (
                   <div key={`empty-${i}`} className="bg-[#05110a] border border-dashed border-white/20 rounded-xl p-3 flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full border border-dashed border-white/20 flex items-center justify-center text-gray-600"><Users size={16}/></div>
                     <div>
                       <h4 className="font-bold text-xs text-gray-500">Open Spot</h4>
                       <p className="text-[9px] text-gray-600 uppercase">Available</p>
                     </div>
                   </div>
                 ))}
               </div>
               
               <button className="w-full text-xs text-gray-400 font-bold hover:text-white transition-colors mt-6 py-2 border border-white/5 rounded-lg bg-[#05110a]">
                 View all attendees
               </button>
            </div>

            {/* Discussion / Comments */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6 lg:p-8">
               <div className="flex justify-between items-end mb-6">
                 <h3 className="font-heading font-black text-xl">Discussion</h3>
                 <span className="text-xs text-gray-400">5 Comments</span>
               </div>
               
               {/* Add Comment */}
               <div className="flex gap-4 mb-8">
                 <img src="https://i.pravatar.cc/150?u=1" className="w-10 h-10 rounded-full" alt="You"/>
                 <div className="flex-grow relative">
                   <textarea 
                     placeholder="Add a comment or ask a question..." 
                     className="w-full bg-[#05110a] border border-white/10 text-white p-3 rounded-lg focus:outline-none focus:border-brand-lime transition-colors text-sm min-h-[80px]"
                   ></textarea>
                   <button className="absolute bottom-3 right-3 text-brand-lime text-xs font-bold uppercase hover:underline">Post</button>
                 </div>
               </div>
               
               {/* Comments List */}
               <div className="space-y-6">
                 <div className="flex gap-4">
                   <img src="https://i.pravatar.cc/150?u=25" className="w-10 h-10 rounded-full" alt=""/>
                   <div>
                     <div className="flex items-baseline gap-2 mb-1">
                       <h4 className="font-bold text-sm text-white">Ankit V.</h4>
                       <span className="text-[10px] text-gray-500">2 days ago</span>
                     </div>
                     <p className="text-xs text-gray-300 leading-relaxed mb-2">Are we playing on turf or natural grass? Just need to know which boots to bring.</p>
                     <button className="text-[10px] text-gray-400 font-bold hover:text-white transition-colors">Reply</button>
                     
                     {/* Reply */}
                     <div className="flex gap-3 mt-4">
                       <img src="https://i.pravatar.cc/150?u=12" className="w-8 h-8 rounded-full" alt=""/>
                       <div>
                         <div className="flex items-baseline gap-2 mb-1">
                           <h4 className="font-bold text-xs text-white">Rohit S.</h4>
                           <span className="bg-brand-lime/10 text-brand-lime text-[6px] px-1 rounded uppercase font-bold border border-brand-lime/20">Host</span>
                           <span className="text-[10px] text-gray-500">1 day ago</span>
                         </div>
                         <p className="text-xs text-gray-300 leading-relaxed">It's a high-quality artificial turf. Both turf shoes and molded studs will work fine. Please avoid metal studs!</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
            </div>

          </div>

          {/* RIGHT COL (Widgets) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Action Widget (Sticky) */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6 sticky top-28 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              
              <div className="text-center mb-6 border-b border-white/10 pb-6">
                <div className="text-gray-400 text-xs mb-1 uppercase tracking-widest font-bold">Event Fee</div>
                <div className="font-heading font-black text-4xl text-brand-lime leading-none">₹200</div>
                <div className="text-[10px] text-gray-500 mt-1">per person</div>
              </div>

              <div className="space-y-4 mb-6 text-sm">
                <div className="flex items-start gap-3">
                  <Calendar size={18} className="text-gray-400 flex-shrink-0 mt-0.5"/>
                  <div>
                    <div className="font-bold">Sun, 17 May 2025</div>
                    <div className="text-gray-400 text-xs">5:00 PM – 7:00 PM</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gray-400 flex-shrink-0 mt-0.5"/>
                  <div>
                    <div className="font-bold">Green Field Arena</div>
                    <div className="text-gray-400 text-xs">Hauz Khas, New Delhi</div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-brand-lime text-[#05110a] py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors mb-3 shadow-[0_0_20px_rgba(200,249,2,0.2)]">
                 JOIN THIS EVENT
              </button>
              
              <p className="text-[10px] text-center text-gray-500 font-bold uppercase tracking-widest mb-4">
                4 spots remaining!
              </p>
              
              <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-400">
                <div className="bg-[#05110a] rounded flex items-center justify-center gap-1 p-2 border border-white/5"><CheckCircle size={10} className="text-brand-lime"/> Instant Approval</div>
                <div className="bg-[#05110a] rounded flex items-center justify-center gap-1 p-2 border border-white/5"><CheckCircle size={10} className="text-brand-lime"/> Easy Refund</div>
              </div>
            </div>

            {/* Map / Location Mini */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-white/10 flex justify-between items-center">
                <h3 className="font-heading font-black text-sm uppercase tracking-widest">Location</h3>
                <ExternalLink size={14} className="text-gray-400 hover:text-white cursor-pointer"/>
              </div>
              <div className="w-full h-40 bg-[#05110a] relative group cursor-pointer">
                 <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" alt="Map"/>
                 <MapPin size={32} className="text-brand-lime absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg" />
                 <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur rounded p-2 text-xs text-white">
                   Green Field Arena, Hauz Khas, ND
                 </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      
    </div>
  );
}
