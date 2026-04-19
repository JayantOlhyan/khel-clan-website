// src/components/Hero.tsx
import React from 'react';
import { Calendar, Users, MapPin, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-brand-forest min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Graphic (Mockup of Field) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[120%] opacity-20 hidden lg:block">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80')] bg-cover bg-center rounded-l-[100px] border-l-8 border-brand-lime shadow-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Booking Widget */}
        <div className="bg-white rounded-[32px] p-8 shadow-2xl max-w-md mx-auto lg:mx-0 animate-slideUp">
          <div className="bg-brand-forest rounded-2xl p-4 mb-8 text-center">
            <h3 className="text-brand-lime font-heading font-black text-xl uppercase tracking-widest">Book Your Slot</h3>
          </div>
          
          <form className="space-y-6">
            <div className="space-y-4">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest">Select Sport</label>
              <div className="grid grid-cols-3 gap-2">
                {['Football', 'Cricket', 'Tennis'].map((sport) => (
                  <button key={sport} type="button" className="py-3 px-2 rounded-xl border-2 border-gray-100 hover:border-brand-lime hover:bg-brand-lime/5 transition text-xs font-bold">
                    {sport}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center">
                  <Calendar size={12} className="mr-1" /> Date
                </label>
                <input type="date" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-lime transition" />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center">
                  <MapPin size={12} className="mr-1" /> Venue
                </label>
                <select className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-lime transition">
                  <option>Any Venue</option>
                  <option>Stadium Central</option>
                  <option>West Park Turf</option>
                </select>
              </div>
            </div>

            <button className="w-full bg-brand-lime text-brand-forest py-4 rounded-2xl font-heading font-black text-lg hover:shadow-[0_0_30px_rgba(200,249,2,0.4)] transition transform active:scale-95 flex items-center justify-center">
              CHECK AVAILABILITY <ChevronRight size={20} className="ml-2" />
            </button>
          </form>
        </div>

        {/* Hero Text */}
        <div className="text-white space-y-6 text-center lg:text-left">
          <span className="bg-brand-lime/10 border border-brand-lime/20 text-brand-lime px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest animate-fadeIn">
            #1 Sports Community in India
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-black leading-tight animate-fadeIn animation-delay-100">
            Claim Your Pitch.<br/>
            <span className="text-brand-lime underline decoration-wavy underline-offset-8">Play Your Game.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-body max-w-lg mx-auto lg:mx-0 animate-fadeIn animation-delay-200">
            Premium venues, professional equipment, and instant AI highlights. Your athletic journey starts here.
          </p>
          <div className="flex items-center space-x-6 justify-center lg:justify-start pt-4 animate-fadeIn animation-delay-300">
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-forest bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="" />
                  </div>
                ))}
             </div>
             <p className="text-sm font-bold"><span className="text-brand-lime">10,000+</span> Athletes Joined</p>
          </div>
        </div>
      </div>
    </section>
  );
}
