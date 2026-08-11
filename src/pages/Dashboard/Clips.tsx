import React from 'react';

export default function Clips() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-end mb-8 border-b border-black/5 pb-6">
        <div>
           <h1 className="text-3xl font-heading font-extrabold text-deep-black mb-2">My Highlight Clips</h1>
           <p className="font-body text-deep-black/60">Download your best moments from recent games.</p>
        </div>
        <div className="hidden sm:block">
           <span className="bg-energy-gold/10 text-energy-gold px-4 py-2 rounded-full text-sm font-bold font-heading">3 New Unlocked</span>
        </div>
      </div>

      <div className="grid grid-autofit gap-6">
        {[1,2,3].map(i => (
          <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-black/5 group hover:shadow-xl transition-all duration-300">
             <div className="aspect-video bg-black/5 rounded-xl mb-5 relative overflow-hidden flex items-center justify-center ring-2 ring-transparent group-hover:ring-primary-green/20 transition-all">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
                   <div className="w-14 h-14 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:scale-110 shadow-lg transition-all drop-shadow-md">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-primary-green border-b-[8px] border-b-transparent ml-1"></div>
                   </div>
                </div>
                {/* Mock image thumbnail */}
                <img src={`https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&q=80`} className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out" alt="mock thumbnail" />
             </div>
             
             <div className="flex justify-between items-start px-1">
               <div>
                 <h3 className="font-heading font-bold text-lg leading-tight text-deep-black group-hover:text-primary-green transition-colors">Clutch Goal #{i}</h3>
                 <p className="font-mono text-xs text-deep-black/40 mt-1.5 flex items-center gap-1.5">
                   <span className="w-1.5 h-1.5 rounded-full bg-energy-gold block"></span>
                   12-Oct-2026 • Green Arena
                 </p>
               </div>
               <button className="bg-muted-green text-primary-green p-2.5 rounded-xl hover:bg-primary-green hover:text-white transition-colors border border-black/5" title="Download Clip">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
               </button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
