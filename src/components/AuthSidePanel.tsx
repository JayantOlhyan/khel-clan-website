import React from 'react';
import { Users, Calendar, MapPin, Shield } from 'lucide-react';

export default function AuthSidePanel() {
  return (
    <div className="hidden lg:flex lg:flex-col lg:w-1/2 bg-[#05110a] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=1200" 
          alt="Football Player" 
          className="w-full h-full object-cover opacity-40 object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] via-[#05110a]/80 to-[#05110a]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#05110a] to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full p-12 lg:p-16 xl:p-20">
        
        {/* Logo */}
        <div className="flex items-center gap-3 mb-16">
          <div className="text-brand-lime font-black text-3xl italic tracking-tighter">KC</div>
          <div>
            <div className="text-white font-black text-xl leading-none tracking-tight">KHEL CLAN</div>
            <div className="text-brand-lime text-[8px] font-bold uppercase tracking-widest mt-0.5">Play Together. Grow Together.</div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="mb-12 max-w-md">
          <h1 className="text-5xl xl:text-6xl font-heading font-black text-white leading-[1.1] mb-6">
            Play Together.<br />
            <span className="text-brand-lime">Grow Together.</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Join India's fastest growing sports community. Find games, connect with players, and compete in tournaments.
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-8 max-w-md mb-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime shrink-0">
              <Users size={20} />
            </div>
            <div>
              <h3 className="text-white font-bold mb-1">Find Players & Teams</h3>
              <p className="text-gray-400 text-sm">Connect with players near you</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime shrink-0">
              <Calendar size={20} />
            </div>
            <div>
              <h3 className="text-white font-bold mb-1">Join Games & Tournaments</h3>
              <p className="text-gray-400 text-sm">Play, compete and win</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="text-white font-bold mb-1">Explore Venues</h3>
              <p className="text-gray-400 text-sm">Discover top sports venues</p>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 inline-flex items-center gap-4 bg-[#0a1a12]/80 backdrop-blur border border-white/10 rounded-2xl p-4 max-w-md">
          <div className="w-10 h-10 rounded-full bg-brand-lime/10 flex items-center justify-center text-brand-lime shrink-0">
            <Shield size={20} />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm mb-0.5">Safe & Trusted Community</h4>
            <p className="text-gray-400 text-xs">Verified players. Secure environment.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
