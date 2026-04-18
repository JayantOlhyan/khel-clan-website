import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function GameDetails() {
  const { id } = useParams();

  return (
    <div className="p-8 max-w-5xl mx-auto w-full space-y-8 mt-4">
      <Link to="/games" className="text-primary-green hover:underline font-body font-medium flex items-center gap-2">
         ← Back to games
      </Link>
      
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-black/5 flex flex-col md:flex-row gap-12">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-4">
             <span className="bg-energy-gold/10 text-energy-gold px-4 py-2 rounded-full text-sm font-bold font-heading">Football</span>
             <span className="text-primary-green font-mono font-bold">3 slots left</span>
          </div>
          <h1 className="text-5xl font-heading font-black text-deep-black">5v5 Turf War</h1>
          
          <div className="space-y-4 text-lg font-body text-deep-black/80">
            <div className="flex items-center gap-3">
              <span className="w-8">📅</span> Tuesday, 24th Oct • 18:00 - 19:00
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8">📍</span> Green Arena Turf, South Extension
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8">💵</span> ₹250 per player
            </div>
          </div>

          <div className="pt-8">
             <button className="w-full bg-primary-green text-white py-4 rounded-xl font-heading font-bold text-xl hover:bg-green-800 transition-all shadow-lg hover:-translate-y-1">
               Book Slot Now
             </button>
             <p className="text-center font-mono text-xs text-black/40 mt-4">Secure payment via Razorpay</p>
          </div>
        </div>
        
        <div className="flex-1 bg-muted-green rounded-2xl min-h-[300px] border border-black/5 flex flex-col items-center justify-center p-8 text-center gap-4 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-energy-gold opacity-10 rounded-bl-full pointer-events-none"></div>
           <h3 className="font-heading font-bold text-xl text-deep-black relative z-10">Location Map</h3>
           <p className="text-deep-black/50 font-body text-sm relative z-10">Map integration placeholder. Will display Google Maps embed here.</p>
        </div>
      </div>
    </div>
  );
}
