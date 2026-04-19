import React from 'react';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto w-full flex-grow flex flex-col justify-center py-24 px-4 space-y-20">
      
      <div className="text-center space-y-6 animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-heading font-black text-brand-forest">The <span className="text-brand-lime underline decoration-wavy underline-offset-8">Clan</span> Story</h1>
        <p className="text-xl md:text-2xl text-gray-500 font-body max-w-2xl mx-auto leading-relaxed">Elevating amateur sports to a pro experience through community and technology.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
         <div className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl transition-all animate-slideUp">
            <h3 className="text-3xl font-heading font-black mb-6 text-brand-forest">The Problem</h3>
            <p className="text-gray-500 font-body leading-relaxed text-lg">
              Finding competitive games is chaotic. Managing groups, tracking payments, and balancing teams take the fun out of playing. And when you do make an incredible play, nobody is there to record it.
            </p>
         </div>
         <div className="bg-brand-forest text-white p-10 rounded-[32px] shadow-2xl relative overflow-hidden animate-slideUp animation-delay-200">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime opacity-10 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-3xl font-heading font-black mb-6 text-brand-lime">Our Vision</h3>
            <p className="font-body leading-relaxed text-lg opacity-90">
              KhelClan is a complete ecosystem. We organize the games, provide the referees, supply the gear, and most importantly, we capture your highlights. We turn every player into a star.
            </p>
         </div>
      </div>
      
    </div>
  );
}
