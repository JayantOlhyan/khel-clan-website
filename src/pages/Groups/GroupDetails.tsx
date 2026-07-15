import React from 'react';
import { MapPin, Shield, Users, Trophy, Star, Share2, MoreHorizontal, Calendar, CheckCircle, Mail, MessageCircle, Heart, ChevronRight } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';

export default function GroupDetails() {
  const { slug } = useParams();

  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=2000" 
            alt="Team Huddle" 
            className="w-full h-full object-cover opacity-40 object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05110a] via-[#05110a]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] via-[#05110a]/50 to-[#05110a]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            {/* Team Logo / Badge */}
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-[#0a1a12] border-2 border-brand-lime flex flex-col items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(200,249,2,0.15)] relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
               <Shield size={64} className="text-brand-lime relative z-10 mb-2" />
               <div className="font-heading font-black text-xs uppercase tracking-widest text-white text-center leading-none relative z-10">DELHI<br/>WARRIORS</div>
            </div>

            <div className="flex-grow pt-2">
               <div className="flex items-center gap-2 text-brand-lime mb-2 uppercase tracking-widest text-xs font-bold">
                 <div className="w-5 h-5 rounded bg-brand-lime/20 flex items-center justify-center border border-brand-lime/30">⚽</div>
                 FOOTBALL
               </div>
               
               <h1 className="font-heading font-black text-4xl md:text-5xl mb-4 flex items-center gap-3">
                 Delhi Football Warriors <CheckCircle size={28} className="text-brand-lime" />
               </h1>
               
               <p className="text-gray-300 font-body text-base max-w-2xl mb-6 leading-relaxed">
                 A passionate group of players who love the beautiful game. Weekly matches, tournaments & good vibes!
               </p>

               <div className="flex flex-wrap items-center gap-6 mb-8 text-sm font-bold text-gray-300">
                 <div className="flex items-center gap-2"><MapPin size={16} className="text-brand-lime" /> Delhi, India</div>
                 <div className="flex items-center gap-2"><Shield size={16} className="text-brand-lime" /> All Skill Levels</div>
                 <div className="flex items-center gap-2"><Users size={16} className="text-brand-lime" /> 32 Members</div>
                 <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full border-2 border-brand-lime text-brand-lime flex items-center justify-center text-[10px] font-black">18+</div> Age Group</div>
               </div>

               <div className="flex flex-wrap gap-4">
                 <button className="bg-brand-lime text-[#05110a] px-8 py-3 rounded-lg font-heading font-black hover:bg-white transition-colors flex items-center gap-2 uppercase text-sm tracking-widest">
                   JOIN GROUP <Users size={16} />
                 </button>
                 <button className="bg-transparent border border-white/20 text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center gap-2">
                   <Share2 size={16} /> SHARE GROUP
                 </button>
                 <button className="bg-transparent border border-white/20 text-white w-12 py-3 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                   <MoreHorizontal size={16} />
                 </button>
               </div>
            </div>

            {/* Stats Block */}
            <div className="hidden lg:grid grid-cols-2 gap-4 w-72 flex-shrink-0">
               <div className="bg-[#0a1a12]/80 backdrop-blur border border-white/10 rounded-xl p-4 flex flex-col justify-center">
                 <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest mb-1"><Trophy size={14} className="text-brand-lime"/> Games Played</div>
                 <div className="font-heading font-black text-3xl">24</div>
               </div>
               <div className="bg-[#0a1a12]/80 backdrop-blur border border-white/10 rounded-xl p-4 flex flex-col justify-center">
                 <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest mb-1"><Users size={14} className="text-brand-lime"/> Members</div>
                 <div className="font-heading font-black text-3xl">32</div>
               </div>
               <div className="bg-[#0a1a12]/80 backdrop-blur border border-white/10 rounded-xl p-4 flex flex-col justify-center">
                 <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest mb-1"><Calendar size={14} className="text-brand-lime"/> Upcoming</div>
                 <div className="font-heading font-black text-3xl">12</div>
               </div>
               <div className="bg-[#0a1a12]/80 backdrop-blur border border-white/10 rounded-xl p-4 flex flex-col justify-center">
                 <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest mb-1"><Star size={14} className="text-brand-lime"/> Rating</div>
                 <div className="font-heading font-black text-3xl">4.8</div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TABS */}
      <div className="border-b border-white/10 sticky top-0 bg-[#05110a]/90 backdrop-blur z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto hide-scrollbar">
            {['Overview', 'Members', 'Games', 'Gallery', 'Events', 'Discussion', 'Rules', 'Settings'].map((tab, i) => (
              <button 
                key={i} 
                className={`py-4 font-heading font-bold text-xs tracking-widest uppercase whitespace-nowrap transition-colors relative ${i === 0 ? 'text-brand-lime' : 'text-gray-400 hover:text-white flex items-center gap-2'}`}
              >
                {i === 1 && <Users size={14}/>}
                {i === 2 && <Calendar size={14}/>}
                {i === 5 && <MessageCircle size={14}/>}
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
          
          {/* LEFT COL (About, Recent Activity, Gallery, Discussion) */}
          <div className="md:col-span-5 space-y-6">
            
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
              <h3 className="font-heading font-black text-lg uppercase mb-4">ABOUT THIS GROUP</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                We are a community of football lovers from Delhi NCR. We play regularly, improve together and enjoy the game. All skill levels are welcome!
              </p>
              <div className="flex flex-wrap gap-2">
                 <span className="bg-[#05110a] border border-brand-lime/20 text-brand-lime px-3 py-1.5 rounded-full text-[10px] font-bold uppercase flex items-center gap-1"><CheckCircle size={12}/> Friendly Matches</span>
                 <span className="bg-[#05110a] border border-brand-lime/20 text-brand-lime px-3 py-1.5 rounded-full text-[10px] font-bold uppercase flex items-center gap-1"><CheckCircle size={12}/> Weekly Games</span>
                 <span className="bg-[#05110a] border border-brand-lime/20 text-brand-lime px-3 py-1.5 rounded-full text-[10px] font-bold uppercase flex items-center gap-1"><CheckCircle size={12}/> Tournaments</span>
                 <span className="bg-[#05110a] border border-brand-lime/20 text-brand-lime px-3 py-1.5 rounded-full text-[10px] font-bold uppercase flex items-center gap-1"><CheckCircle size={12}/> Positive Vibes</span>
              </div>
            </div>

            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
              <h3 className="font-heading font-black text-lg uppercase mb-6">RECENT ACTIVITY</h3>
              <div className="space-y-6 border-l-2 border-white/10 ml-3 pl-4 relative">
                 
                 {/* Activity 1 */}
                 <div className="relative">
                   <div className="absolute w-3 h-3 bg-brand-lime rounded-full -left-[23px] top-1"></div>
                   <div className="flex justify-between items-start mb-2">
                     <div className="flex items-center gap-2">
                       <img src="https://i.pravatar.cc/150?u=1" className="w-6 h-6 rounded-full" alt=""/>
                       <p className="text-sm text-gray-300"><span className="font-bold text-white">Arjun Malhotra</span> created a match</p>
                     </div>
                     <span className="text-xs text-gray-500">2h ago</span>
                   </div>
                   <div className="bg-[#05110a] border border-white/5 rounded-lg p-3">
                     <h4 className="font-bold text-sm text-brand-lime mb-1">Evening Football Match</h4>
                     <p className="text-[10px] text-gray-400 flex items-center gap-2">
                       <span><Calendar size={10} className="inline"/> Today, 7:00 PM</span>
                       <span><MapPin size={10} className="inline"/> Green Field Arena, Hauz Khas</span>
                     </p>
                   </div>
                 </div>

                 {/* Activity 2 */}
                 <div className="relative">
                   <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[23px] top-1"></div>
                   <div className="flex justify-between items-start mb-2">
                     <div className="flex items-center gap-2">
                       <img src="https://i.pravatar.cc/150?u=2" className="w-6 h-6 rounded-full" alt=""/>
                       <p className="text-sm text-gray-300"><span className="font-bold text-white">Rohit Sharma</span> uploaded 5 photos</p>
                     </div>
                     <span className="text-xs text-gray-500">5h ago</span>
                   </div>
                   <div className="flex gap-2">
                     <img src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=100" className="w-16 h-16 rounded-lg object-cover" alt=""/>
                     <img src="https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=100" className="w-16 h-16 rounded-lg object-cover" alt=""/>
                     <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=100" className="w-16 h-16 rounded-lg object-cover" alt=""/>
                     <div className="w-16 h-16 rounded-lg bg-white/5 flex items-center justify-center text-xs font-bold text-gray-400">+2</div>
                   </div>
                 </div>

                 {/* Activity 3 */}
                 <div className="relative">
                   <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[23px] top-1"></div>
                   <div className="flex justify-between items-start">
                     <div className="flex items-center gap-2">
                       <img src="https://i.pravatar.cc/150?u=12" className="w-6 h-6 rounded-full" alt=""/>
                       <p className="text-sm text-gray-300"><span className="font-bold text-white">Vikram S.</span> joined the group</p>
                     </div>
                     <span className="text-xs text-gray-500">1d ago</span>
                   </div>
                 </div>

              </div>
              
              <button className="w-full mt-6 text-brand-lime font-bold text-xs uppercase tracking-widest hover:underline flex justify-center items-center gap-1">
                VIEW ALL ACTIVITY ↗
              </button>
            </div>

            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
               <div className="flex justify-between items-end mb-4">
                 <h3 className="font-heading font-black text-lg uppercase">GALLERY</h3>
                 <button className="text-brand-lime text-xs font-bold uppercase tracking-widest hover:underline">View All</button>
               </div>
               <div className="grid grid-cols-2 gap-2">
                 <img src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=300" className="w-full h-24 object-cover rounded-lg" alt=""/>
                 <img src="https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=300" className="w-full h-24 object-cover rounded-lg" alt=""/>
                 <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=300" className="w-full h-24 object-cover rounded-lg" alt=""/>
                 <img src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80&w=300" className="w-full h-24 object-cover rounded-lg" alt=""/>
               </div>
            </div>

            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
               <div className="flex justify-between items-end mb-4">
                 <h3 className="font-heading font-black text-lg uppercase">DISCUSSION</h3>
                 <button className="text-brand-lime text-xs font-bold uppercase tracking-widest hover:underline">View All</button>
               </div>
               
               <div className="space-y-4">
                 {[
                   { title: "Best time for weekend matches?", user: "Rohit Sharma", replies: 3, time: "5h ago", img: "https://i.pravatar.cc/150?u=2" },
                   { title: "New jerseys for the team? Suggestions!", user: "Karan Mehta", replies: 8, time: "1d ago", img: "https://i.pravatar.cc/150?u=3" },
                   { title: "Need a goalkeeper for this Sunday's match.", user: "Vivaan Kapoor", replies: 2, time: "2d ago", img: "https://i.pravatar.cc/150?u=4" }
                 ].map((d, i) => (
                   <div key={i} className="flex gap-3 pb-3 border-b border-white/5 last:border-0 last:pb-0">
                     <img src={d.img} className="w-8 h-8 rounded-full" alt=""/>
                     <div className="flex-grow">
                       <h4 className="font-bold text-sm text-white mb-1 hover:text-brand-lime cursor-pointer">{d.title}</h4>
                       <p className="text-[10px] text-gray-500">{d.user} • {d.replies} replies • {d.time}</p>
                     </div>
                     <div className="flex items-center gap-1 text-gray-400 text-xs">
                       <MessageCircle size={14}/> {d.replies}
                     </div>
                   </div>
                 ))}
               </div>
               
               <button className="w-full mt-4 bg-[#05110a] border border-white/10 py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors flex items-center justify-center gap-2">
                 <MessageCircle size={14}/> START A DISCUSSION
               </button>
            </div>

          </div>

          {/* MIDDLE COL (Admin, Contributors) */}
          <div className="md:col-span-3 space-y-6">
            
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
              <h3 className="font-heading font-black text-lg uppercase mb-4">GROUP ADMIN</h3>
              <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/150?u=1" className="w-14 h-14 rounded-full border-2 border-brand-lime" alt="Admin"/>
                <div>
                  <h4 className="font-bold text-white text-base flex items-center gap-2">Arjun Malhotra <span className="bg-brand-lime/10 text-brand-lime border border-brand-lime/20 text-[8px] font-black px-1.5 py-0.5 rounded uppercase">Admin</span></h4>
                  <p className="text-xs text-gray-400 mb-1">Midfielder • ⭐ 4.6</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-lime hover:text-[#05110a] hover:border-brand-lime transition-colors"><Mail size={16}/></button>
                <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-lime hover:text-[#05110a] hover:border-brand-lime transition-colors"><MessageCircle size={16}/></button>
                <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-lime hover:text-[#05110a] hover:border-brand-lime transition-colors"><CheckCircle size={16}/></button>
              </div>
            </div>

            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
              <h3 className="font-heading font-black text-lg uppercase mb-4">TOP CONTRIBUTORS</h3>
              <div className="space-y-4">
                 {[
                   { name: "Rohit Sharma", role: "Forward", rating: "4.4", img: "https://i.pravatar.cc/150?u=2" },
                   { name: "Karan Mehta", role: "Defender", rating: "4.2", img: "https://i.pravatar.cc/150?u=3" },
                   { name: "Vivaan Kapoor", role: "Goalkeeper", rating: "4.7", img: "https://i.pravatar.cc/150?u=4" }
                 ].map((c, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <img src={c.img} className="w-10 h-10 rounded-full" alt=""/>
                     <div>
                       <h4 className="font-bold text-white text-sm">{c.name}</h4>
                       <p className="text-xs text-gray-400">{c.role} • ⭐ {c.rating}</p>
                     </div>
                   </div>
                 ))}
              </div>
              <button className="w-full mt-6 bg-[#05110a] border border-white/10 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:border-white/30 transition-colors">
                VIEW ALL MEMBERS
              </button>
            </div>

          </div>

          {/* RIGHT COL (Upcoming Games, Rules, CTA) */}
          <div className="md:col-span-4 space-y-6">
            
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
               <div className="flex justify-between items-end mb-6">
                 <h3 className="font-heading font-black text-lg uppercase">UPCOMING GAMES</h3>
                 <button className="text-brand-lime text-xs font-bold uppercase tracking-widest hover:underline">View All</button>
               </div>
               
               <div className="space-y-4">
                 {[
                   { type: "MATCH", title: "Evening Football Match", date: "Today, 7:00 PM", loc: "Green Field Arena, Hauz Khas", players: "8 / 14 Players", month: "MAY", day: "17" },
                   { type: "TOURNAMENT", title: "Weekend League Match", date: "Sunday, 8:00 AM", loc: "City Football Turf, Mayur Vihar", players: "10 / 16 Players", month: "MAY", day: "19" },
                   { type: "MATCH", title: "Night Football Game", date: "Friday, 9:00 PM", loc: "Urban Sports Hub, Malviya Nagar", players: "8 / 14 Players", month: "MAY", day: "24" }
                 ].map((g, i) => (
                   <div key={i} className="flex gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                     <div className="flex flex-col items-center justify-center bg-[#05110a] border border-white/10 rounded-lg w-12 h-14 flex-shrink-0">
                       <span className="text-[10px] text-gray-500 font-bold uppercase">{g.month}</span>
                       <span className="font-heading font-black text-lg leading-none">{g.day}</span>
                     </div>
                     <div className="flex-grow">
                       <span className="bg-white/10 text-white border border-white/10 text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider mb-1 inline-block">{g.type}</span>
                       <h4 className="font-bold text-white text-sm mb-1 leading-tight group-hover:text-brand-lime">{g.title}</h4>
                       <div className="text-[10px] text-gray-400 mb-2 space-y-0.5">
                         <div>{g.date}</div>
                         <div className="flex items-center gap-1"><MapPin size={8} className="text-gray-500"/> {g.loc}</div>
                       </div>
                       <div className="flex justify-between items-center text-xs">
                         <span className="text-gray-500 font-bold">{g.players}</span>
                         <button className="bg-brand-lime/10 text-brand-lime px-3 py-1 rounded text-[10px] font-bold uppercase hover:bg-brand-lime hover:text-[#05110a] transition-colors">JOIN</button>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
               
               <button className="w-full mt-4 text-brand-lime font-bold text-xs uppercase tracking-widest hover:underline flex justify-center items-center gap-1">
                 VIEW ALL GAMES ↗
               </button>
            </div>

            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
              <h3 className="font-heading font-black text-lg uppercase mb-4">GROUP RULES</h3>
              <ul className="space-y-3 text-xs text-gray-300">
                <li className="flex gap-3"><CheckCircle size={14} className="text-brand-lime flex-shrink-0 mt-0.5" /> Respect all members and opponents.</li>
                <li className="flex gap-3"><CheckCircle size={14} className="text-brand-lime flex-shrink-0 mt-0.5" /> Be on time for matches.</li>
                <li className="flex gap-3"><CheckCircle size={14} className="text-brand-lime flex-shrink-0 mt-0.5" /> No foul language or fights.</li>
                <li className="flex gap-3"><CheckCircle size={14} className="text-brand-lime flex-shrink-0 mt-0.5" /> Pay your share (if any) on time.</li>
                <li className="flex gap-3"><CheckCircle size={14} className="text-brand-lime flex-shrink-0 mt-0.5" /> Have fun and enjoy the game!</li>
              </ul>
              <button className="w-full mt-4 text-brand-lime font-bold text-xs uppercase tracking-widest hover:underline flex justify-center items-center gap-1">
                 VIEW ALL RULES ↗
              </button>
            </div>

            <div className="bg-gradient-to-br from-[#0a1a12] to-brand-forest/30 border border-brand-lime/20 rounded-2xl p-6 relative overflow-hidden">
               <div className="absolute right-0 bottom-0 opacity-10">
                 <img src="https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=200" className="w-48 h-48 rounded-full object-cover blur-sm" alt=""/>
               </div>
               <h3 className="font-heading font-black text-xl mb-2 relative z-10 leading-tight">BRING YOUR FRIENDS<br/>GROW OUR SQUAD!</h3>
               <p className="text-sm text-gray-400 mb-6 relative z-10 max-w-[200px]">Invite your friends and make our team stronger.</p>
               <button className="bg-brand-lime text-[#05110a] px-6 py-2.5 rounded font-bold text-xs uppercase tracking-widest relative z-10 hover:bg-white transition-colors flex items-center gap-2">
                 INVITE PLAYERS <Users size={14}/>
               </button>
            </div>

          </div>

        </div>
      </section>
      
    </div>
  );
}
