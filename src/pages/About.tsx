import React from 'react';

export default function About() {
  return (
    <div className="p-8 max-w-3xl mx-auto w-full flex-grow flex flex-col justify-center space-y-12 py-20">
      
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-heading font-black text-deep-black">About <span className="text-primary-green">KhelClan</span></h1>
        <p className="text-xl text-deep-black/60 font-body">Elevating amateur sports to a pro experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
            <h3 className="text-2xl font-heading font-bold mb-4 text-primary-green">The Problem</h3>
            <p className="text-deep-black/70 font-body leading-relaxed">
              Finding competitive games is chaotic. Managing groups, tracking payments, and balancing teams take the fun out of playing. And when you do make an incredible play, nobody is there to record it.
            </p>
         </div>
         <div className="bg-primary-green text-white p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-heading font-bold mb-4 text-energy-gold">Our Solution</h3>
            <p className="font-body leading-relaxed opacity-90">
              KhelClan is a complete ecosystem. We organize the games, provide the referees, supply the gear, and most importantly, we capture your highlights. 
            </p>
         </div>
      </div>
      
    </div>
  );
}
