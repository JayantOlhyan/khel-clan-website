import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Trophy, Users, MapPin, Shield, Heart, CheckCircle, Quote, ChevronDown } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export default function Home() {
  const { openAuthModal } = useAppStore();

  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden border-b border-white/10">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbc18974bf?auto=format&fit=crop&q=80&w=3000" 
            alt="Khel Clan Sports" 
            className="w-full h-full object-cover object-[center_30%] opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05110a] via-[#05110a]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="uppercase tracking-widest text-brand-lime font-bold text-xs sm:text-sm mb-6 flex items-center gap-3">
              <div className="w-8 h-[2px] bg-brand-lime"></div>
              REAL PLAY. REAL PEOPLE. REAL COMMUNITY.
            </div>
            <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8">
              MORE THAN A CLUB,<br/>
              <span className="text-brand-lime">WE ARE A MOVEMENT.</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl font-body max-w-2xl leading-relaxed mb-10">
              Khel Clan is an offline sports community that brings people together through the power of sports, teamwork, discipline and sportsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={openAuthModal} className="bg-brand-lime text-[#05110a] px-8 py-4 rounded-lg font-heading font-black text-lg hover:bg-white transition-colors flex items-center justify-center gap-2 group">
                JOIN KHEL CLAN
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <Link to="/about" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                EXPLORE MORE
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-8 z-10 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs font-bold tracking-widest uppercase">SCROLL DOWN</span>
          <ChevronDown className="animate-bounce" size={20} />
        </div>
        
        {/* Right side floating text block */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 p-12 border-l border-white/10 bg-[#05110a]/50 backdrop-blur-sm">
           <div className="space-y-4 font-heading font-black text-2xl text-white/40">
             <div>Play.</div>
             <div>Connect.</div>
             <div>Grow.</div>
             <div>Together.</div>
             <div className="text-brand-lime mt-8 text-sm tracking-widest uppercase opacity-100">That's Khel Clan.</div>
           </div>
        </div>
      </section>

      {/* 2. STATS/PILLARS GRID */}
      <section className="border-b border-white/10 bg-[#0a1a12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-white/10 border-x border-white/10">
            {[
              { icon: Users, title: "OFFLINE SPORTS", sub: "Real experiences." },
              { icon: Trophy, title: "TOURNAMENTS", sub: "Regular competitions." },
              { icon: Shield, title: "COMMUNITY", sub: "A strong sports community." },
              { icon: MapPin, title: "LOCAL FOCUS", sub: "Building sports culture locally." },
              { icon: CheckCircle, title: "FAIR PLAY", sub: "Respect, discipline and sportsmanship." },
              { icon: Heart, title: "FOR EVERYONE", sub: "Open for all age groups." }
            ].map((stat, i) => (
              <div key={i} className="p-8 flex flex-col items-center text-center group hover:bg-white/5 transition-colors">
                <stat.icon className="text-brand-lime mb-4 group-hover:scale-110 transition-transform" size={32} strokeWidth={1.5} />
                <h3 className="font-heading font-bold text-sm tracking-widest uppercase mb-2">{stat.title}</h3>
                <p className="text-xs text-gray-400">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT KHEL CLAN */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="uppercase tracking-widest text-brand-lime font-bold text-xs mb-4">ABOUT KHEL CLAN</div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl mb-6 leading-tight">
              Building a strong<br/>sports culture together.
            </h2>
            <p className="text-gray-400 font-body text-lg leading-relaxed mb-8">
              We create opportunities for players to connect, compete and grow. From local matches to big tournaments, we bring the spirit of sports to every field.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime flex-shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white mb-1">Active Community</h4>
                  <p className="text-sm text-gray-400">Thousands of players ready to play.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime flex-shrink-0">
                  <Trophy size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white mb-1">Regular Tournaments</h4>
                  <p className="text-sm text-gray-400">Compete, win, and climb the ranks.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
            <img src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=1200" alt="Team Huddle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-8 left-8 right-8 bg-[#05110a]/80 backdrop-blur-md border border-white/10 rounded-xl p-6 flex items-center gap-4 transform translate-y-2 group-hover:translate-y-0 transition-all">
               <button className="w-14 h-14 bg-brand-lime rounded-full flex items-center justify-center text-[#05110a] pl-1 flex-shrink-0 hover:bg-white transition-colors">
                 <Play size={24} fill="currentColor" />
               </button>
               <div>
                 <h4 className="font-heading font-bold text-white mb-1">We don't just play.</h4>
                 <p className="text-sm text-gray-400">We build bonds that last a lifetime.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SPORTS WE PLAY */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10 text-center">
        <div className="uppercase tracking-widest text-brand-lime font-bold text-xs mb-4">SPORTS WE PLAY</div>
        <h2 className="font-heading font-black text-4xl sm:text-5xl mb-16">One Community. Many Sports.</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {[
            { name: "FOOTBALL", img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=600" },
            { name: "CRICKET", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600" },
            { name: "BASKETBALL", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600" },
            { name: "VOLLEYBALL", img: "https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&q=80&w=600" },
            { name: "BADMINTON", img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=600" },
            { name: "& MORE", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=600" },
          ].map((sport, i) => (
            <Link to={`/sports`} key={i} className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-[#0a1a12]">
              <img src={sport.img} alt={sport.name} className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-4 border-t border-white/10 bg-[#05110a]/90 backdrop-blur-sm flex items-center justify-center gap-2 group-hover:bg-brand-lime transition-colors">
                <span className="font-heading font-bold text-sm tracking-wider group-hover:text-[#05110a]">{sport.name}</span>
              </div>
            </Link>
          ))}
        </div>
        
        <Link to="/sports" className="inline-block border border-white/20 text-white px-8 py-4 rounded-lg font-heading font-bold text-sm tracking-widest hover:bg-white hover:text-[#05110a] transition-colors">
          VIEW ALL SPORTS
        </Link>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="uppercase tracking-widest text-brand-lime font-bold text-xs mb-16 text-center">HOW IT WORKS</div>
        
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-8 left-[10%] right-[10%] h-[1px] bg-white/10 border-t border-dashed border-white/20 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative z-10">
            {[
              { num: 1, title: "JOIN", desc: "Become a member of Khel Clan." },
              { num: 2, title: "PLAY", desc: "Join matches, practice sessions and events." },
              { num: 3, title: "COMPETE", desc: "Participate in tournaments and challenges." },
              { num: 4, title: "GROW", desc: "Improve, connect and grow together." },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#05110a] border-2 border-brand-lime text-brand-lime flex items-center justify-center font-heading font-black text-2xl mb-6 shadow-[0_0_15px_rgba(200,249,2,0.2)]">
                  {step.num}
                </div>
                <h4 className="font-heading font-bold text-xl mb-3">{step.title}</h4>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. UPCOMING TOURNAMENTS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="uppercase tracking-widest text-brand-lime font-bold text-xs mb-4 text-center">UPCOMING TOURNAMENTS</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          
          {[
            { sport: "FOOTBALL", title: "Khel Clan Football Cup", date: "25 MAY 2026", venue: "City Sports Arena", img: "https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=600" },
            { sport: "CRICKET", title: "Summer Cricket Championship", date: "06 JUN 2026", venue: "Green Field Ground", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600" },
            { sport: "BASKETBALL", title: "Khel Clan Basketball League", date: "22 JUN 2026", venue: "Indoor Stadium", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600" }
          ].map((t, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden bg-[#0a1a12] aspect-square flex flex-col justify-end p-6 border border-white/10 hover:border-brand-lime/50 transition-colors">
              <div className="absolute inset-0">
                <img src={t.img} alt={t.title} className="w-full h-full object-cover opacity-30 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] via-[#05110a]/80 to-transparent"></div>
              </div>
              <div className="relative z-10">
                <span className="bg-brand-lime text-[#05110a] px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-4 inline-block">{t.sport}</span>
                <h3 className="font-heading font-bold text-xl mb-4 line-clamp-2">{t.title}</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center gap-2"><MapPin size={14} className="text-brand-lime" /> {t.date}</div>
                  <div className="flex items-center gap-2"><MapPin size={14} className="text-brand-lime" /> {t.venue}</div>
                </div>
              </div>
            </div>
          ))}

          {/* More Tournaments CTA block */}
          <div className="rounded-2xl border border-dashed border-white/20 bg-[#0a1a12] flex flex-col items-center justify-center text-center p-8 hover:border-brand-lime transition-colors">
            <Trophy size={40} className="text-white/20 mb-4" />
            <h3 className="font-heading font-bold text-xl mb-2">More tournaments coming soon!</h3>
            <p className="text-gray-400 text-sm mb-6">Stay tuned and follow our updates.</p>
            <Link to="/tournaments" className="border border-white/20 px-6 py-2 rounded-lg font-heading font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#05110a] transition-colors">
              VIEW ALL
            </Link>
          </div>
        </div>
      </section>

      {/* 7. OUR COMMUNITY */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="uppercase tracking-widest text-brand-lime font-bold text-xs mb-4">OUR COMMUNITY</div>
            <h2 className="font-heading font-black text-4xl mb-6 leading-tight">Real People.<br/>Real Stories.</h2>
            <Quote className="text-white/10" size={64} />
          </div>
          
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Aarav Sharma", desc: "Khel Clan is not just about sports. It's about the people, the vibes and the memories." },
              { name: "Rohan Mehta", desc: "I have improved a lot and met amazing people through Khel Clan tournaments." },
              { name: "Vivek Singh", desc: "Best sports community in our city. Well organized and full of energy!" }
            ].map((review, i) => (
              <div key={i} className="bg-[#0a1a12] border border-white/10 p-8 rounded-2xl flex flex-col justify-between">
                <p className="text-gray-300 font-body leading-relaxed mb-8">"{review.desc}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold text-brand-lime">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">- {review.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-forest to-[#0a1a12] rounded-3xl p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between border border-brand-lime/20 shadow-[0_0_50px_rgba(200,249,2,0.1)]">
           <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
           
           <div className="relative z-10 text-center md:text-left mb-8 md:mb-0">
             <div className="uppercase tracking-widest text-brand-lime font-bold text-xs mb-4">READY TO BE A PART OF THE MOVEMENT?</div>
             <h2 className="font-heading font-black text-4xl sm:text-5xl text-white mb-4">JOIN KHEL CLAN TODAY!</h2>
             <p className="text-gray-300">Be a part of a community that plays, competes and grows together.</p>
           </div>
           
           <button onClick={openAuthModal} className="relative z-10 bg-brand-lime text-[#05110a] px-10 py-5 rounded-lg font-heading font-black text-xl hover:bg-white transition-all hover:scale-105 shadow-xl flex items-center gap-2">
             JOIN KHEL CLAN <ArrowRight size={20} />
           </button>
        </div>
      </section>

    </div>
  );
}
