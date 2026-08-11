import React from 'react';
import { Download as DownloadIcon, Smartphone, Target, Users, MapPin, Trophy, MessageCircle, CheckCircle, Apple, Play, Search, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DownloadApp() {
  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-3/4 h-[100vw] lg:h-[800px] bg-brand-forest/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-[75vw] lg:h-[600px] bg-brand-lime/5 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/3"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-gray-500 mb-6 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-700">/</span>
            <span className="text-brand-lime">Download App</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5">
              <div className="text-brand-lime text-[10px] font-black uppercase tracking-widest mb-4">DOWNLOAD THE KHEL CLAN APP</div>
              
              <h1 className="font-heading font-black text-5xl md:text-6xl mb-6 leading-tight">
                Your Game.<br/>
                <span className="text-brand-lime">Anywhere.</span>
              </h1>
              
              <p className="text-gray-300 font-body text-base max-w-lg mb-10 leading-relaxed">
                Join games, find players, book venues, and stay updated with everything sports – right from your pocket.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button className="flex items-center justify-center gap-3 bg-[#0a1a12] border border-white/20 hover:border-white/50 py-3 px-6 rounded-xl transition-all w-full sm:w-auto">
                  <Play size={24} className="fill-current" />
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400 font-bold uppercase">GET IT ON</div>
                    <div className="font-bold text-lg leading-tight">Google Play</div>
                  </div>
                </button>
                <button className="flex items-center justify-center gap-3 bg-[#0a1a12] border border-white/20 hover:border-white/50 py-3 px-6 rounded-xl transition-all w-full sm:w-auto">
                  <Apple size={28} className="fill-current" />
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400 font-bold uppercase">Download on the</div>
                    <div className="font-bold text-lg leading-tight">App Store</div>
                  </div>
                </button>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-white p-2 rounded-xl">
                  {/* Fake QR Code */}
                  <div className="w-full h-full border-[6px] border-black border-dashed flex items-center justify-center">
                     <div className="w-1/2 h-1/2 bg-black"></div>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-sm mb-1">Scan to download</div>
                  <p className="text-xs text-gray-400">Scan the QR code with your<br/>phone camera to get the app.</p>
                  <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-2 text-brand-lime">
                    <path d="M1 1C10 20 30 20 38 5M38 5L30 5M38 5L38 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Mockups */}
            <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-[5/6]">
                {/* Back Phone */}
                <div className="absolute right-0 top-12 w-[60%] aspect-[280/580] bg-[#111] rounded-[40px] border-8 border-[#222] shadow-2xl overflow-hidden transform rotate-6 z-0">
                  <img src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-50" alt="App Screen 2"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] to-transparent"></div>
                  {/* Fake UI Overlay */}
                  <div className="absolute top-12 left-0 right-0 px-4">
                     <div className="w-16 h-16 rounded-full border-2 border-brand-lime mx-auto mb-2"><img src="https://i.pravatar.cc/150?u=12" className="w-full h-full rounded-full" alt=""/></div>
                     <div className="text-center font-bold text-white mb-6">Rohit Sharma</div>
                     <div className="grid grid-cols-3 gap-2 mb-4">
                       <div className="text-center"><div className="font-bold text-xl">24</div><div className="text-[10px] text-gray-400">Events</div></div>
                       <div className="text-center"><div className="font-bold text-xl text-brand-lime">156</div><div className="text-[10px] text-gray-400">Followers</div></div>
                       <div className="text-center"><div className="font-bold text-xl">89</div><div className="text-[10px] text-gray-400">Following</div></div>
                     </div>
                  </div>
                </div>
                
                {/* Front Phone */}
                <div className="absolute left-0 lg:left-12 top-0 w-[65%] aspect-[300/620] bg-[#05110a] rounded-[45px] border-[10px] border-[#1a1a1a] shadow-[-20px_20px_60px_rgba(0,0,0,0.8)] overflow-hidden z-10">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-xl z-20"></div>
                  {/* App UI */}
                  <div className="h-full w-full bg-[#05110a] flex flex-col">
                    <div className="px-4 pt-10 pb-4 border-b border-white/10 flex justify-between items-center">
                      <div className="font-heading font-black text-brand-lime flex items-center gap-1"><span className="text-2xl">KC</span> <span className="text-xs">KHEL CLAN</span></div>
                      <div className="w-8 h-8 rounded-full border border-white/20"><img src="https://i.pravatar.cc/150?u=1" className="w-full h-full rounded-full" alt=""/></div>
                    </div>
                    <div className="p-4 flex-grow overflow-hidden">
                      <h2 className="text-xl font-bold mb-1">Hi, Jayant 👋</h2>
                      <p className="text-xs text-gray-400 mb-4">Ready to play today?</p>
                      <div className="bg-[#0a1a12] border border-white/10 p-3 rounded-lg flex items-center gap-2 mb-6">
                        <Search size={14} className="text-gray-400"/>
                        <span className="text-xs text-gray-500">Search for games, players, venues...</span>
                      </div>
                      
                      <div className="flex justify-between mb-6 px-2">
                        <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded-full bg-brand-lime/10 text-brand-lime flex items-center justify-center"><Calendar size={16}/></div><span className="text-[8px] text-gray-400">Games</span></div>
                        <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded-full bg-brand-lime/10 text-brand-lime flex items-center justify-center"><Trophy size={16}/></div><span className="text-[8px] text-gray-400">Events</span></div>
                        <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded-full bg-brand-lime/10 text-brand-lime flex items-center justify-center"><MapPin size={16}/></div><span className="text-[8px] text-gray-400">Venues</span></div>
                        <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 rounded-full bg-brand-lime/10 text-brand-lime flex items-center justify-center"><Users size={16}/></div><span className="text-[8px] text-gray-400">Groups</span></div>
                      </div>

                      <div className="mb-4">
                        <h3 className="font-bold text-sm mb-3">Upcoming Events</h3>
                        <div className="bg-[#0a1a12] rounded-xl border border-white/5 overflow-hidden">
                          <div className="h-24 bg-gray-800"><img src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-50" alt=""/></div>
                          <div className="p-3">
                            <h4 className="font-bold text-xs mb-1">Khel Clan Football Championship</h4>
                            <p className="text-[8px] text-brand-lime mb-1">May 25 - May 30, 2025</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Bottom Nav */}
                    <div className="h-16 border-t border-white/10 bg-[#05110a] flex justify-around items-center px-2 pb-2">
                      <div className="flex flex-col items-center text-brand-lime"><div className="text-xl">⌂</div><span className="text-[8px] font-bold">Home</span></div>
                      <div className="flex flex-col items-center text-gray-500"><Search size={16}/><span className="text-[8px]">Explore</span></div>
                      <div className="flex flex-col items-center -mt-6"><div className="w-12 h-12 bg-brand-lime rounded-full flex items-center justify-center text-[#05110a] text-2xl font-bold">+</div></div>
                      <div className="flex flex-col items-center text-gray-500"><MessageCircle size={16}/><span className="text-[8px]">Chats</span></div>
                      <div className="flex flex-col items-center text-gray-500"><Users size={16}/><span className="text-[8px]">Profile</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="text-center mb-12">
          <h2 className="font-heading font-black text-3xl">Everything You Need. All in One App.</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl border border-brand-lime/30 flex items-center justify-center text-brand-lime mb-4 group hover:bg-brand-lime hover:text-[#05110a] transition-all">
              <Calendar size={28} />
            </div>
            <h3 className="font-bold text-sm mb-2">Join Events</h3>
            <p className="text-xs text-gray-400">Discover and join exciting events & tournaments.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl border border-brand-lime/30 flex items-center justify-center text-brand-lime mb-4 group hover:bg-brand-lime hover:text-[#05110a] transition-all">
              <Users size={28} />
            </div>
            <h3 className="font-bold text-sm mb-2">Find Players</h3>
            <p className="text-xs text-gray-400">Connect with players near you.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl border border-brand-lime/30 flex items-center justify-center text-brand-lime mb-4 group hover:bg-brand-lime hover:text-[#05110a] transition-all">
              <MapPin size={28} />
            </div>
            <h3 className="font-bold text-sm mb-2">Book Venues</h3>
            <p className="text-xs text-gray-400">Find and book the best sports venues.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl border border-brand-lime/30 flex items-center justify-center text-brand-lime mb-4 group hover:bg-brand-lime hover:text-[#05110a] transition-all">
              <Trophy size={28} />
            </div>
            <h3 className="font-bold text-sm mb-2">Track & Compete</h3>
            <p className="text-xs text-gray-400">Track your performance and compete on leaderboards.</p>
          </div>
          <div className="flex flex-col items-center text-center col-span-2 md:col-span-1">
            <div className="w-16 h-16 rounded-2xl border border-brand-lime/30 flex items-center justify-center text-brand-lime mb-4 group hover:bg-brand-lime hover:text-[#05110a] transition-all">
              <MessageCircle size={28} />
            </div>
            <h3 className="font-bold text-sm mb-2">Stay Connected</h3>
            <p className="text-xs text-gray-400">Chat with players and teams in real time.</p>
          </div>
        </div>
      </section>

      {/* HOW TO DOWNLOAD */}
      <section className="py-20 bg-[#0a1a12] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-3xl">How to Download</h2>
          </div>
          
          <div className="grid grid-autofit gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-px bg-white/10 -translate-y-1/2"></div>
            
            <div className="bg-[#05110a] border border-white/10 rounded-2xl p-8 relative z-10 flex flex-col items-center text-center hover:border-brand-lime/50 transition-colors">
              <div className="w-12 h-12 bg-brand-lime text-[#05110a] font-black text-xl rounded-full flex items-center justify-center mb-6 border-4 border-[#0a1a12] -mt-14">1</div>
              <Smartphone size={32} className="text-white mb-4" />
              <h3 className="font-bold text-lg mb-2">Open Play Store<br/>or App Store</h3>
              <p className="text-sm text-gray-400">Go to Google Play Store or Apple App Store on your device.</p>
            </div>
            
            <div className="bg-[#05110a] border border-white/10 rounded-2xl p-8 relative z-10 flex flex-col items-center text-center hover:border-brand-lime/50 transition-colors">
              <div className="w-12 h-12 bg-brand-lime text-[#05110a] font-black text-xl rounded-full flex items-center justify-center mb-6 border-4 border-[#0a1a12] -mt-14">2</div>
              <Search size={32} className="text-white mb-4" />
              <h3 className="font-bold text-lg mb-2">Search "Khel Clan"</h3>
              <p className="text-sm text-gray-400">Type "Khel Clan" in the search bar. Find our official app.</p>
            </div>
            
            <div className="bg-[#05110a] border border-white/10 rounded-2xl p-8 relative z-10 flex flex-col items-center text-center hover:border-brand-lime/50 transition-colors">
              <div className="w-12 h-12 bg-brand-lime text-[#05110a] font-black text-xl rounded-full flex items-center justify-center mb-6 border-4 border-[#0a1a12] -mt-14">3</div>
              <DownloadIcon size={32} className="text-white mb-4" />
              <h3 className="font-bold text-lg mb-2">Download & Install</h3>
              <p className="text-sm text-gray-400">Tap on Install and get the app on your phone.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center flex items-center justify-center gap-2 text-sm text-gray-400 font-bold">
            <CheckCircle size={16} className="text-brand-lime" /> Secure, fast & reliable. Join thousands of players already on Khel Clan.
          </div>
        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0a1a12] to-[#122c1d] border border-white/10 flex flex-col md:flex-row items-center p-8 lg:p-12 gap-8">
           <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-10" alt=""/>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a12] via-[#0a1a12]/90 to-transparent"></div>
           </div>
           
           <div className="relative z-10 flex-1">
             <h2 className="font-heading font-black text-4xl mb-4 leading-tight">
               Take Your Game<br/>
               <span className="text-brand-lime">To The Next Level!</span>
             </h2>
             <p className="text-gray-300 mb-8 max-w-md">
               Download the Khel Clan App and be part of India's fastest growing sports community.
             </p>
             <div className="flex flex-wrap gap-4">
                <button className="flex items-center justify-center gap-2 bg-[#05110a] border border-white/20 hover:border-brand-lime text-white py-2 px-4 rounded-lg transition-colors">
                  <Play size={18} className="fill-current" /> Google Play
                </button>
                <button className="flex items-center justify-center gap-2 bg-[#05110a] border border-white/20 hover:border-brand-lime text-white py-2 px-4 rounded-lg transition-colors">
                  <Apple size={18} className="fill-current" /> App Store
                </button>
             </div>
           </div>
           
           <div className="relative z-10 w-full max-w-[300px] aspect-square flex-shrink-0 hidden md:block">
              {/* Fake phone tilted */}
              <div className="absolute inset-0 bg-[#111] rounded-[40px] border-8 border-[#222] shadow-2xl overflow-hidden transform rotate-12 -translate-y-8">
                <div className="h-full w-full bg-[#05110a] flex items-center justify-center">
                   <div className="font-heading font-black text-brand-lime text-4xl flex flex-col items-center">
                     KC
                     <span className="text-xs text-white uppercase tracking-widest mt-2">Khel Clan</span>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </section>
      
    </div>
  );
}
