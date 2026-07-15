import React from 'react';
import { Users, Trophy, Target, Heart, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

export default function About() {
  const { openAuthModal } = useAppStore();

  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=2000" 
            alt="Khel Clan Team" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05110a] via-[#05110a]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="uppercase tracking-widest text-brand-lime font-bold text-xs mb-6">ABOUT US</div>
            <h1 className="font-heading font-black text-6xl md:text-8xl leading-none mb-6">
              WE ARE<br/>
              <span className="text-brand-lime">KHEL CLAN</span>
            </h1>
            <p className="text-xl md:text-2xl font-heading font-bold text-white mb-6 uppercase tracking-wider">
              A MOVEMENT. NOT JUST A CLUB.
            </p>
            <p className="text-gray-400 font-body text-lg leading-relaxed max-w-xl mb-8">
              Khel Clan is an offline sports community that brings people together through the power of sports, teamwork, discipline and sportsmanship.
            </p>
            <div className="inline-flex items-center gap-4 bg-[#0a1a12] border border-white/10 px-6 py-4 rounded-xl">
              <Users className="text-brand-lime" size={24} />
              <span className="text-sm font-bold text-gray-300">We don't just organize games,<br/>we build bonds that last.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="uppercase tracking-widest text-brand-lime font-bold text-xs mb-4">OUR STORY</div>
              <h2 className="font-heading font-black text-4xl sm:text-5xl mb-8 leading-tight">
                WHERE PASSION<br/>TURNED INTO PURPOSE.
              </h2>
              <p className="text-gray-300 font-body text-lg leading-relaxed mb-6">
                Khel Clan started with a simple idea - make sports more accessible, more fun and more meaningful for everyone.
              </p>
              <p className="text-gray-400 font-body leading-relaxed">
                From casual weekend games to competitive tournaments, we've built a space where players of all ages and skill levels can connect, compete and grow together.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 relative">
              <img src="https://images.unsplash.com/photo-1574629810360-7efbc18974bf?auto=format&fit=crop&q=80&w=800" alt="Football" className="w-full h-[400px] object-cover rounded-2xl" />
              <div className="flex flex-col gap-4">
                <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=400" alt="Cricket" className="w-full h-[192px] object-cover rounded-2xl" />
                <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=400" alt="Basketball" className="w-full h-[192px] object-cover rounded-2xl" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-12 bg-[#05110a] border border-white/10 p-6 rounded-2xl shadow-xl flex flex-col items-center gap-2">
                 <div className="w-12 h-12 bg-[#0a1a12] rounded-xl flex items-center justify-center text-brand-lime">
                   <Target size={24} />
                 </div>
                 <div className="text-xs font-bold text-white text-center">Rooted locally.<br/>Growing together.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "COMMUNITY FIRST", desc: "We believe sports bring people together and create stronger communities." },
              { icon: Trophy, title: "FAIR PLAY", desc: "Respect, discipline and sportsmanship are at the heart of everything we do." },
              { icon: ArrowUpRight, title: "GROWTH MINDSET", desc: "We encourage individuals to improve, learn and achieve their best." },
              { icon: Heart, title: "FOR EVERYONE", desc: "Sports is for all. We create opportunities for every age, every skill level." }
            ].map((v, i) => (
              <div key={i} className="bg-[#0a1a12] border border-white/10 p-10 rounded-3xl flex flex-col items-center text-center group hover:border-brand-lime/30 transition-colors">
                <div className="w-16 h-16 rounded-full border border-brand-lime/30 flex items-center justify-center text-brand-lime mb-6 group-hover:scale-110 transition-transform">
                  <v.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-bold text-lg mb-4">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Mission / Vision Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-[#0a1a12] border border-white/10 p-10 rounded-3xl flex items-start gap-6">
               <div className="w-20 h-20 bg-[#05110a] border border-white/5 rounded-2xl flex items-center justify-center text-brand-lime flex-shrink-0 shadow-[0_0_20px_rgba(200,249,2,0.05)]">
                 <Target size={32} />
               </div>
               <div>
                 <h4 className="uppercase tracking-widest text-brand-lime font-bold text-xs mb-2">OUR MISSION</h4>
                 <p className="text-gray-300 font-body leading-relaxed">To build the most connected and trusted offline sports community where every player finds a game, a team and a family.</p>
               </div>
            </div>
            <div className="bg-[#0a1a12] border border-white/10 p-10 rounded-3xl flex items-start gap-6">
               <div className="w-20 h-20 bg-[#05110a] border border-white/5 rounded-2xl flex items-center justify-center text-brand-lime flex-shrink-0 shadow-[0_0_20px_rgba(200,249,2,0.05)]">
                 <Heart size={32} />
               </div>
               <div>
                 <h4 className="uppercase tracking-widest text-brand-lime font-bold text-xs mb-2">OUR VISION</h4>
                 <p className="text-gray-300 font-body leading-relaxed">To make sports a daily part of lives and create a culture of health, happiness and togetherness through offline play.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS ROW */}
      <section className="py-12 border-b border-white/10 bg-[#0a1a12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
             {[
               { val: "500+", label: "Active Members" },
               { val: "25+", label: "Teams & Groups" },
               { val: "20+", label: "Weekly Games" },
               { val: "10+", label: "Sports We Play" }
             ].map((stat, i) => (
               <div key={i}>
                 <div className="font-heading font-black text-4xl text-brand-lime mb-2">{stat.val}</div>
                 <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="uppercase tracking-widest text-brand-lime font-bold text-xs mb-4">THE PEOPLE BEHIND KHEL CLAN</div>
            <h2 className="font-heading font-black text-4xl">BUILT BY PLAYERS, FOR PLAYERS.</h2>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 border border-white/20 px-6 py-3 rounded-lg font-heading font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#05110a] transition-colors">
            MEET THE TEAM <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Aman Verma", role: "Founder", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
            { name: "Rohan Mehta", role: "Co-Founder", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
            { name: "Vivek Singh", role: "Community Lead", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
            { name: "Arjun Rawat", role: "Operations Lead", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" }
          ].map((member, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#0a1a12]">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-500 grayscale" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] via-[#05110a]/50 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h4 className="font-heading font-bold text-xl text-white mb-1">{member.name}</h4>
                <p className="text-brand-lime text-xs font-bold uppercase tracking-wider mb-4">{member.role}</p>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-brand-lime hover:text-[#05110a] transition-colors cursor-pointer"><ArrowUpRight size={14} /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          <div className="relative z-10 mb-8 md:mb-0">
            <div className="uppercase tracking-widest text-brand-lime font-bold text-xs mb-2">BE A PART OF THE MOVEMENT</div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">PLAY. CONNECT. GROW.</h2>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
            <p className="text-gray-400 text-sm hidden lg:block border-l border-white/10 pl-6">Join a community that<br/>loves sports as much as you do.</p>
            <button onClick={openAuthModal} className="bg-brand-lime text-[#05110a] px-8 py-4 rounded-lg font-heading font-black hover:bg-white transition-colors flex items-center gap-2">
              JOIN KHEL CLAN <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
