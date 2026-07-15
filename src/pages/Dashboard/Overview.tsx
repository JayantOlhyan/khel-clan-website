import React from 'react';
import { useAppStore } from '../../store/useAppStore';
import { Link } from 'react-router-dom';
import { Calendar, Users, Shield, MapPin, Activity, Bell, ChevronRight, UserPlus } from 'lucide-react';

export default function Overview() {
  const { user } = useAppStore();
  
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
       {/* Welcome Banner */}
       <div className="bg-brand-forest text-white rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-xl border border-transparent">
         <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-lime opacity-20 rounded-full blur-3xl pointer-events-none"></div>
         <h1 className="text-3xl md:text-5xl font-heading font-black mb-2 relative z-10 drop-shadow-md">Welcome back, {user?.name.split(' ')[0]}!</h1>
         <p className="font-body opacity-90 max-w-xl relative z-10 leading-relaxed md:text-lg">You have 1 upcoming game and 2 new invitations. Prepare your gear and get ready!</p>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* LEFT COLUMN: Main Activity */}
         <div className="lg:col-span-2 space-y-8">
           
           {/* Upcoming Games */}
           <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-black/5">
             <div className="flex justify-between items-center mb-6 border-b border-black/5 pb-4">
                <h3 className="font-heading font-black text-2xl text-brand-forest flex items-center gap-2">
                  <Calendar className="text-brand-lime" size={24} /> Upcoming Games
                </h3>
                <Link to="/discover" className="text-sm font-bold font-body text-gray-500 hover:text-brand-lime flex items-center">View Calendar <ChevronRight size={16}/></Link>
             </div>
             
             <div className="space-y-4">
               <div className="p-5 rounded-2xl bg-gray-50 border border-black/5 hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer group">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-brand-lime/20 text-brand-forest px-3 py-1 rounded-full text-xs font-bold font-heading uppercase tracking-wider">Football</span>
                    <span className="text-xs font-heading font-black text-brand-forest bg-brand-lime px-3 py-1 rounded shadow-sm">TOMORROW</span>
                  </div>
                  <h4 className="font-heading font-black text-xl text-brand-forest mb-2 group-hover:text-brand-lime transition-colors">5v5 Turf War</h4>
                  <p className="font-body text-sm text-gray-500 flex flex-wrap gap-4">
                    <span className="flex items-center gap-1"><Calendar size={14}/> 18:00 - 19:30</span> 
                    <span className="flex items-center gap-1"><MapPin size={14}/> Green Arena Turf</span>
                  </p>
               </div>
             </div>
           </div>

           {/* Nearby Games & Recommended Groups */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-white rounded-3xl p-6 shadow-sm border border-black/5">
               <h3 className="font-heading font-black text-xl text-brand-forest mb-6 border-b border-black/5 pb-4 flex items-center gap-2">
                 <MapPin className="text-brand-flame" size={20} /> Nearby Games
               </h3>
               <div className="space-y-4">
                 {[1, 2].map((i) => (
                   <div key={i} className="flex gap-4 items-center p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors border border-transparent hover:border-gray-100">
                     <div className="w-12 h-12 rounded-xl bg-gray-100 flex-shrink-0 flex items-center justify-center text-xl">🏏</div>
                     <div>
                       <h4 className="font-heading font-bold text-brand-forest">Box Cricket Open</h4>
                       <p className="text-xs text-gray-500 font-body">Today, 20:00 • 2.5km away</p>
                     </div>
                   </div>
                 ))}
                 <Link to="/discover" className="block text-center w-full py-3 mt-2 font-heading font-bold text-brand-forest bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">Find More Games</Link>
               </div>
             </div>

             <div className="bg-white rounded-3xl p-6 shadow-sm border border-black/5">
               <h3 className="font-heading font-black text-xl text-brand-forest mb-6 border-b border-black/5 pb-4 flex items-center gap-2">
                 <Shield className="text-blue-500" size={20} /> Suggested Groups
               </h3>
               <div className="space-y-4">
                 {[1, 2].map((i) => (
                   <div key={i} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors border border-transparent hover:border-gray-100">
                     <div className="flex gap-3 items-center">
                       <div className="w-10 h-10 rounded-full bg-brand-forest text-white flex items-center justify-center font-bold">KC</div>
                       <div>
                         <h4 className="font-heading font-bold text-brand-forest leading-tight">Weekend Warriors</h4>
                         <p className="text-xs text-gray-500 font-body">24 members</p>
                       </div>
                     </div>
                     <button className="text-brand-lime bg-brand-forest p-2 rounded-lg hover:scale-110 transition-transform"><UserPlus size={16} /></button>
                   </div>
                 ))}
               </div>
             </div>
           </div>

         </div>

         {/* RIGHT COLUMN: Secondary Info */}
         <div className="space-y-8">
           
           {/* Invitations */}
           <div className="bg-brand-lime text-brand-forest rounded-3xl p-6 shadow-sm border border-black/5 relative overflow-hidden">
             <div className="absolute -right-10 -top-10 w-32 h-32 bg-white opacity-20 rounded-full blur-2xl"></div>
             <h3 className="font-heading font-black text-xl mb-4 flex items-center gap-2 relative z-10">
               <Bell size={20} /> Invitations (2)
             </h3>
             <div className="space-y-3 relative z-10">
               <div className="bg-white/90 p-4 rounded-2xl shadow-sm backdrop-blur-sm">
                 <p className="text-sm font-body font-bold mb-3">Rahul invited you to <span className="text-brand-flame">Sunday Smashers (Badminton)</span></p>
                 <div className="flex gap-2">
                   <button className="flex-1 bg-brand-forest text-white text-xs font-bold py-2 rounded-lg hover:bg-black transition-colors">Accept</button>
                   <button className="flex-1 bg-gray-200 text-gray-600 text-xs font-bold py-2 rounded-lg hover:bg-gray-300 transition-colors">Decline</button>
                 </div>
               </div>
             </div>
           </div>

           {/* Recommended Players */}
           <div className="bg-white rounded-3xl p-6 shadow-sm border border-black/5">
             <h3 className="font-heading font-black text-xl text-brand-forest mb-6 border-b border-black/5 pb-4 flex items-center gap-2">
               <Users className="text-purple-500" size={20} /> Player Matches
             </h3>
             <div className="space-y-4">
               {['Aman Singh', 'Priya Patel', 'Vikram Rao'].map((name, i) => (
                 <div key={i} className="flex justify-between items-center group">
                   <div className="flex gap-3 items-center">
                     <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-heading font-bold text-gray-500">{name.charAt(0)}</div>
                     <div>
                       <h4 className="font-body font-bold text-brand-forest text-sm">{name}</h4>
                       <p className="text-xs text-gray-400">Intermediate • Football</p>
                     </div>
                   </div>
                   <button className="text-brand-lime bg-white border border-brand-lime/30 px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-lime hover:text-brand-forest">Connect</button>
                 </div>
               ))}
             </div>
           </div>

           {/* Recent Activity */}
           <div className="bg-white rounded-3xl p-6 shadow-sm border border-black/5">
             <h3 className="font-heading font-black text-xl text-brand-forest mb-6 border-b border-black/5 pb-4 flex items-center gap-2">
               <Activity className="text-energy-gold" size={20} /> Recent Activity
             </h3>
             <div className="space-y-5 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
               
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                 <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-white bg-brand-lime text-brand-forest shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-[3px] md:ml-0"></div>
                 <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-3 rounded-xl bg-gray-50 border border-gray-100 shadow-sm ml-4 md:ml-0">
                   <div className="flex items-center justify-between mb-1">
                     <span className="font-bold font-body text-xs text-brand-forest">Won Match</span>
                     <span className="text-[10px] text-gray-400">Yesterday</span>
                   </div>
                   <div className="text-xs text-gray-500">You won 5v5 against Team Titans (3-1).</div>
                 </div>
               </div>

               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                 <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-white bg-gray-300 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-[3px] md:ml-0"></div>
                 <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-3 rounded-xl bg-gray-50 border border-gray-100 shadow-sm ml-4 md:ml-0">
                   <div className="flex items-center justify-between mb-1">
                     <span className="font-bold font-body text-xs text-brand-forest">Joined Group</span>
                     <span className="text-[10px] text-gray-400">2 days ago</span>
                   </div>
                   <div className="text-xs text-gray-500">Joined "Downtown Kickers".</div>
                 </div>
               </div>

             </div>
           </div>

         </div>
       </div>
    </div>
  );
}
