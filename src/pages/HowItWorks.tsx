import React from 'react';
import { Search, CalendarCheck, MapPin, Trophy, Shield, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

export default function HowItWorks() {
  const { openAuthModal } = useAppStore();

  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbc18974bf?auto=format&fit=crop&q=80&w=2000" 
            alt="Sports Action" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05110a] via-[#05110a]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="uppercase tracking-widest text-brand-lime font-bold text-xs mb-6">HOW IT WORKS</div>
            <h1 className="font-heading font-black text-5xl md:text-7xl leading-none mb-6">
              YOUR GAME,<br/>
              <span className="text-brand-lime">JUST 4 STEPS AWAY.</span>
            </h1>
            <p className="text-gray-400 font-body text-lg leading-relaxed max-w-xl mb-8">
              Khel Clan makes it simple for sports lovers to connect, organize, and play. No more endless planning, just show up and play.
            </p>
            <div className="flex gap-4">
              <button onClick={openAuthModal} className="bg-brand-lime text-[#05110a] px-8 py-4 rounded-lg font-heading font-black hover:bg-white transition-colors flex items-center gap-2">
                GET STARTED <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <div className="relative hidden lg:block h-[500px]">
            <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800" alt="Cricket Match" className="w-[80%] h-[80%] object-cover rounded-2xl absolute bottom-0 right-0 border border-white/10" />
            <img src="https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=600" alt="Football Team" className="w-[60%] h-[60%] object-cover rounded-2xl absolute top-0 left-0 border-4 border-[#05110a] shadow-2xl" />
          </div>
        </div>
      </section>

      {/* 2. THE 4 STEPS */}
      <section className="py-24 border-b border-white/10 relative">
        {/* Background graphic */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl sm:text-5xl">4 SIMPLE STEPS.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", icon: Search, title: "DISCOVER", desc: "Find games happening near you. Filter by sport, location, and skill level.", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=400" },
              { num: "02", icon: CalendarCheck, title: "JOIN", desc: "RSVP to a game or tournament. Secure your spot instantly.", img: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80&w=400" },
              { num: "03", icon: MapPin, title: "PLAY", desc: "Show up at the venue. Meet your team, warm up, and play hard.", img: "https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=400" },
              { num: "04", icon: Trophy, title: "GROW", desc: "Track your progress, build your reputation, and make lasting friends.", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=400" },
            ].map((step, i) => (
              <div key={i} className="group relative bg-[#0a1a12] border border-white/10 rounded-3xl p-6 overflow-hidden hover:border-brand-lime/30 transition-colors">
                <div className="absolute top-0 right-0 text-7xl font-heading font-black text-white/[0.02] -mr-4 -mt-4 group-hover:text-brand-lime/[0.05] transition-colors">{step.num}</div>
                
                <div className="w-full h-40 rounded-xl overflow-hidden mb-6 relative">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] to-transparent"></div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime group-hover:bg-brand-lime group-hover:text-[#05110a] transition-colors">
                    <step.icon size={20} />
                  </div>
                  <h3 className="font-heading font-bold text-xl">{step.title}</h3>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PILLARS / WHY CHOOSE US */}
      <section className="py-24 border-b border-white/10 bg-[#0a1a12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <div className="uppercase tracking-widest text-brand-lime font-bold text-xs mb-4">BUILT FOR PLAYERS, BY PLAYERS</div>
                <h2 className="font-heading font-black text-4xl sm:text-5xl mb-10 leading-tight">
                  MORE PLAY.<br/>LESS PLANNING.
                </h2>
                
                <div className="space-y-8">
                  {[
                    { icon: Shield, title: "Safe & Trusted", desc: "Verified players and moderated games ensure a safe environment for everyone." },
                    { icon: MapPin, title: "Local & Accessible", desc: "Find games in your neighborhood. We partner with top local venues." },
                    { icon: Heart, title: "Community Driven", desc: "It's not just about winning. It's about fitness, mental health, and belonging." }
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-14 h-14 bg-[#05110a] border border-white/10 rounded-xl flex items-center justify-center text-brand-lime flex-shrink-0">
                        <feature.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg mb-2">{feature.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>

             <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4 pt-12">
                 <img src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=400" alt="Badminton" className="w-full aspect-[4/5] object-cover rounded-2xl border border-white/10" />
                 <div className="bg-[#05110a] border border-white/10 p-6 rounded-2xl text-center">
                   <div className="font-heading font-black text-3xl text-brand-lime mb-1">100%</div>
                   <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Hassle Free</div>
                 </div>
               </div>
               <div className="space-y-4">
                 <div className="bg-gradient-to-br from-brand-forest to-[#05110a] border border-white/10 p-6 rounded-2xl text-center">
                   <div className="font-heading font-black text-3xl text-white mb-1">20+</div>
                   <div className="text-xs font-bold text-brand-lime uppercase tracking-wider">Active Cities</div>
                 </div>
                 <img src="https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&q=80&w=400" alt="Volleyball" className="w-full aspect-[4/5] object-cover rounded-2xl border border-white/10" />
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-black text-4xl sm:text-6xl mb-6">WHAT ARE YOU WAITING FOR?</h2>
        <p className="text-gray-400 font-body text-xl max-w-2xl mx-auto mb-10">
          The field is set. The players are ready. Join Khel Clan and find your next game today.
        </p>
        <button onClick={openAuthModal} className="bg-brand-lime text-[#05110a] px-12 py-5 rounded-lg font-heading font-black text-xl hover:bg-white transition-transform hover:scale-105 inline-flex items-center gap-2 shadow-[0_0_30px_rgba(200,249,2,0.2)]">
          START PLAYING <ArrowRight size={20} />
        </button>
      </section>

    </div>
  );
}
