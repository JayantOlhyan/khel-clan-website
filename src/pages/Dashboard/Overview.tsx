import React from 'react';
import { useAppStore } from '../../store/useAppStore';
import { Link } from 'react-router-dom';

export default function Overview() {
  const { user } = useAppStore();
  
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div className="bg-primary-green text-white rounded-3xl p-8 relative overflow-hidden shadow-lg border border-transparent">
         <div className="absolute -right-20 -top-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>
         <h1 className="text-3xl lg:text-4xl font-heading font-extrabold mb-2 relative z-10 drop-shadow-md">Welcome back, {user?.name.split(' ')[0]}!</h1>
         <p className="font-body opacity-90 max-w-md relative z-10 leading-relaxed">You have 1 upcoming game. Prepare your gear and get ready to secure your highlight clips.</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {/* Upcoming Games */}
         <div className="bg-white rounded-3xl p-6 shadow-sm border border-black/5">
           <h3 className="font-heading font-bold text-xl mb-6 text-deep-black border-b border-black/5 pb-4">Upcoming Matches</h3>
           <Link to="/games/1" className="block p-5 rounded-2xl bg-muted-green border border-black/5 hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-energy-gold/10 text-energy-gold px-3 py-1 rounded-full text-xs font-bold font-heading">Football</span>
                <span className="text-xs font-mono font-bold text-primary-green bg-primary-green/10 px-2 py-1 rounded">TOMORROW</span>
              </div>
              <h4 className="font-heading font-bold text-2xl text-deep-black mb-2">5v5 Turf War</h4>
              <p className="font-body text-sm text-deep-black/60 flex items-center gap-2"><span>🕒 18:00</span> <span>📍 Green Arena Turf</span></p>
           </Link>
         </div>

         {/* Stats */}
         <div className="bg-white rounded-3xl p-6 shadow-sm border border-black/5 flex flex-col">
           <h3 className="font-heading font-bold text-xl mb-6 text-deep-black border-b border-black/5 pb-4">Career Stats</h3>
           <div className="grid grid-cols-2 gap-4 flex-grow content-start">
             <div className="p-4 bg-muted-green rounded-2xl border border-black/5 flex flex-col justify-center gap-2">
               <div className="text-sm font-body font-medium text-deep-black/60">Total Games</div>
               <div className="text-4xl font-heading font-black text-primary-green drop-shadow-sm">12</div>
             </div>
             <div className="p-4 bg-muted-green rounded-2xl border border-black/5 flex flex-col justify-center gap-2">
               <div className="text-sm font-body font-medium text-deep-black/60">Total Clips</div>
               <div className="text-4xl font-heading font-black text-energy-gold drop-shadow-sm">3</div>
             </div>
             <div className="p-5 bg-muted-green rounded-2xl border border-black/5 col-span-2 flex justify-between items-center mt-2 group">
               <div>
                  <div className="text-sm font-body font-medium text-deep-black/60 mb-1">Referral Points</div>
                  <div className="text-3xl font-heading font-black text-deep-black">450 <span className="text-base font-normal opacity-50">pts</span></div>
               </div>
               <button className="bg-white px-4 py-2 rounded-xl text-sm font-heading font-bold border border-black/5 group-hover:bg-primary-green group-hover:text-white transition-colors">Redeem</button>
             </div>
           </div>
         </div>
       </div>
    </div>
  );
}
