import React from 'react';
import { Search, MapPin, Calendar, Clock, Filter, List, Map, ChevronDown, CheckCircle, ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Games() {
  const games = [
    { id: 1, title: "Evening Football Match", sport: "FOOTBALL", loc: "Green Field Arena, Hauz Khas, Delhi", date: "Today, 7:00 PM", format: "7 v 7", players: "8 / 14 Players", price: "₹120", img: "https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=400", dist: "1.2 km", featured: true, tags: ["All Levels", "Outdoor", "Grass"] },
    { id: 2, title: "Weekend Cricket Match", sport: "CRICKET", loc: "Playground, Saket Sports Complex, Delhi", date: "Tomorrow, 8:00 AM", format: "11 v 11", players: "11 / 22 Players", price: "₹150", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=400", dist: "2.4 km", featured: false, tags: ["All Levels", "Outdoor", "Turf"] },
    { id: 3, title: "Half Court Basketball", sport: "BASKETBALL", loc: "Urban Sports Hub, Malviya Nagar, Delhi", date: "Today, 6:00 PM", format: "3 v 3", players: "6 / 12 Players", price: "₹80", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=400", dist: "2.7 km", featured: false, tags: ["All Levels", "Indoor", "Wooden"] },
    { id: 4, title: "Evening Badminton Game", sport: "BADMINTON", loc: "Smash Arena, Lajpat Nagar, Delhi", date: "Today, 8:30 PM", format: "Doubles", players: "3 / 8 Players", price: "₹100", img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=400", dist: "3.6 km", featured: false, tags: ["All Levels", "Indoor", "Synthetic"] },
    { id: 5, title: "Night Football Game", sport: "FOOTBALL", loc: "City Football Turf, Mayur Vihar, Delhi", date: "Friday, 9:00 PM", format: "8 v 8", players: "10 / 16 Players", price: "₹150", img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=400", dist: "4.1 km", featured: false, tags: ["Intermediate", "Outdoor", "Turf"] }
  ];

  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black pt-20">
      
      {/* 1. HERO */}
      <section className="relative py-16 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbc18974bf?auto=format&fit=crop&q=80&w=2000" 
            alt="Football Action" 
            className="w-full h-full object-cover opacity-20 object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05110a] via-[#05110a]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2 text-brand-lime mb-4 uppercase tracking-widest text-xs font-bold">
               <div className="w-5 h-5 rounded bg-brand-lime/20 flex items-center justify-center">🎯</div>
               GAMES
            </div>
            <h1 className="font-heading font-black text-5xl md:text-7xl leading-none mb-4 uppercase">
              FIND YOUR<br/>
              <span className="text-brand-lime">NEXT GAME.</span>
            </h1>
            <p className="text-gray-400 font-body text-lg">
              Real games. Real players. Real locations.
            </p>
          </div>
          
          <div className="hidden lg:flex flex-col gap-6">
            <div className="flex gap-4 items-center bg-[#0a1a12] p-4 rounded-xl border border-white/5">
              <Calendar className="text-brand-lime" size={24} />
              <div>
                <div className="font-heading font-black text-xl">1,250+</div>
                <div className="text-xs text-gray-500">Games this week</div>
              </div>
            </div>
            <div className="flex gap-4 items-center bg-[#0a1a12] p-4 rounded-xl border border-white/5">
              <MapPin className="text-brand-lime" size={24} />
              <div>
                <div className="font-heading font-black text-xl">120+</div>
                <div className="text-xs text-gray-500">Locations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEARCH BAR */}
      <section className="border-b border-white/10 bg-[#0a1a12] sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4 flex-wrap">
          <div className="flex-grow flex items-center bg-[#05110a] border border-white/10 rounded-lg px-4 h-12 min-w-[200px]">
            <Search className="text-gray-500 mr-2" size={18} />
            <input type="text" placeholder="Search games, venues, teams..." className="bg-transparent border-none text-white focus:ring-0 placeholder-gray-600 text-sm w-full" />
          </div>
          
          <div className="flex gap-4 overflow-x-auto hide-scrollbar">
            {['Sport', 'Location', 'Date', 'Time'].map((f, i) => (
              <button key={i} className="flex items-center justify-between bg-[#05110a] border border-white/10 rounded-lg px-4 h-12 min-w-[140px] text-sm text-gray-300 hover:border-brand-lime/50 transition-colors">
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] text-gray-500 uppercase">{f}</span>
                  <span className="font-bold">All {f}s</span>
                </div>
                <ChevronDown size={14} className="text-gray-500" />
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2 bg-[#05110a] border border-white/10 rounded-lg px-4 h-12">
            <span className="text-xs text-gray-500 uppercase">Sort by:</span>
            <span className="text-sm font-bold">Nearest</span>
            <ChevronDown size={14} className="text-gray-500 ml-2" />
          </div>

          <button className="bg-brand-lime text-[#05110a] px-6 h-12 rounded-lg font-bold text-sm hover:bg-white transition-colors uppercase tracking-widest">
            FIND GAMES ↗
          </button>
        </div>
      </section>

      {/* 3. MAIN LAYOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
        
        {/* Left Sidebar Filters */}
        <aside className="w-64 flex-shrink-0 hidden lg:block space-y-8">
          <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
            <h3 className="font-heading font-black text-lg">FILTERS</h3>
            <button className="text-brand-lime text-xs font-bold hover:underline">Clear all</button>
          </div>

          {/* Sport Filter */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex justify-between cursor-pointer">SPORT <ChevronDown size={14}/></h4>
            <div className="space-y-3">
              {['All Sports', 'Football', 'Cricket', 'Basketball', 'Badminton', 'Volleyball', 'Table Tennis'].map((s, i) => (
                <label key={i} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded flex items-center justify-center border ${i === 0 ? 'bg-brand-lime border-brand-lime' : 'border-white/20 group-hover:border-brand-lime/50'}`}>
                    {i === 0 && <CheckCircle size={12} className="text-[#05110a]" />}
                  </div>
                  <span className={`text-sm ${i === 0 ? 'font-bold text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>{s}</span>
                </label>
              ))}
              <button className="text-xs text-brand-lime font-bold mt-2">More Sports +</button>
            </div>
          </div>

          {/* Date Filter */}
          <div className="border-t border-white/10 pt-6">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex justify-between cursor-pointer">DATE <ChevronDown size={14}/></h4>
            <div className="space-y-3">
              {['Today', 'Tomorrow', 'This Week', 'This Weekend', 'Custom Range'].map((d, i) => (
                <label key={i} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded flex items-center justify-center border ${i === 2 ? 'border-brand-lime bg-brand-lime/20' : 'border-white/20 group-hover:border-brand-lime/50'}`}>
                    {i === 2 && <div className="w-2 h-2 bg-brand-lime rounded-sm"></div>}
                  </div>
                  <span className={`text-sm flex-grow ${i === 2 ? 'font-bold text-brand-lime' : 'text-gray-400 group-hover:text-gray-200'}`}>{d}</span>
                  {i === 4 && <Calendar size={14} className="text-gray-500" />}
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="border-t border-white/10 pt-6">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex justify-between cursor-pointer">PRICE RANGE <ChevronDown size={14}/></h4>
            <div className="space-y-3">
              {['Free', '₹0 - ₹100', '₹100 - ₹200', '₹200+'].map((p, i) => (
                <label key={i} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded flex items-center justify-center border ${i === 1 ? 'bg-brand-lime border-brand-lime' : 'border-white/20 group-hover:border-brand-lime/50'}`}>
                    {i === 1 && <CheckCircle size={12} className="text-[#05110a]" />}
                  </div>
                  <span className={`text-sm ${i === 1 ? 'font-bold text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>{p}</span>
                </label>
              ))}
            </div>
          </div>

          <button className="w-full border border-white/20 rounded-lg py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#05110a] transition-colors">
            RESET FILTERS
          </button>
        </aside>

        {/* Main Content Area */}
        <main className="flex-grow">
          
          <div className="flex justify-between items-center mb-6">
            <div className="text-gray-400 text-sm font-bold"><span className="text-white">1,250+</span> games found</div>
            
            <div className="flex bg-[#0a1a12] border border-white/10 rounded-lg p-1">
              <button className="flex items-center gap-2 px-4 py-1.5 rounded bg-brand-lime text-[#05110a] font-bold text-xs uppercase">
                <List size={14} /> List View
              </button>
              <button className="flex items-center gap-2 px-4 py-1.5 rounded text-gray-400 hover:text-white font-bold text-xs uppercase transition-colors">
                <Map size={14} /> Map View
              </button>
            </div>
          </div>

          {/* Game List */}
          <div className="space-y-4">
            {games.map(game => (
              <div key={game.id} className="bg-[#0a1a12] border border-white/10 rounded-2xl p-4 flex flex-col md:flex-row gap-6 hover:border-brand-lime/50 transition-colors cursor-pointer group relative">
                
                {/* Image */}
                <div className="w-full md:w-64 h-48 rounded-xl overflow-hidden relative flex-shrink-0">
                  <img src={game.img} alt={game.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {game.featured && (
                    <div className="absolute top-2 left-2 bg-brand-lime text-[#05110a] text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider">
                      FEATURED
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2 bg-[#05110a]/80 backdrop-blur border border-white/10 text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                    <MapPin size={10} className="text-brand-lime" /> {game.dist}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col justify-between py-1">
                  <div>
                    <div className="flex items-start justify-between mb-1">
                      <span className="bg-brand-lime/10 text-brand-lime border border-brand-lime/20 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider inline-block mb-2">{game.sport}</span>
                      <button className="text-gray-500 hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                      </button>
                    </div>
                    
                    <h3 className="font-heading font-black text-2xl mb-3 group-hover:text-brand-lime transition-colors">{game.title}</h3>
                    
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                      <MapPin size={14} className="text-brand-lime" /> {game.loc}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm mb-4 font-bold">
                      <div className="flex items-center gap-1"><Calendar size={14} /> {game.date}</div>
                      <div className="flex items-center gap-1"><Users size={14} /> {game.players}</div>
                      <div className="flex items-center gap-1"><Users size={14} /> {game.format}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex gap-2">
                      {game.tags.map((tag, i) => (
                        <span key={i} className="bg-white/5 text-gray-400 px-2 py-1 rounded text-xs font-bold border border-white/5">{tag}</span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-heading font-black text-xl text-brand-lime leading-none">{game.price}</div>
                        <div className="text-[10px] text-gray-500 uppercase">per player</div>
                      </div>
                      <Link to={`/games/${game.id}`} className="bg-transparent border border-white/20 text-white hover:bg-brand-lime hover:text-[#05110a] hover:border-brand-lime px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-1">
                        VIEW DETAILS ↗
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
             <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/5 disabled:opacity-50"><ChevronLeft size={16}/></button>
             <button className="w-10 h-10 rounded-lg bg-brand-lime text-[#05110a] font-bold text-sm">1</button>
             <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 font-bold text-sm hover:text-white hover:bg-white/5">2</button>
             <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 font-bold text-sm hover:text-white hover:bg-white/5">3</button>
             <span className="text-gray-500 px-2">...</span>
             <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 font-bold text-sm hover:text-white hover:bg-white/5">25</button>
             <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/5"><ChevronRight size={16}/></button>
          </div>

        </main>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
        <div className="bg-gradient-to-r from-brand-forest to-[#0a1a12] rounded-2xl p-8 md:p-12 border border-brand-lime/20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
             <img src="https://images.unsplash.com/photo-1574629810360-7efbc18974bf?auto=format&fit=crop&q=80&w=800" className="w-[600px] h-[600px] object-cover rounded-full blur-xl" alt="" />
          </div>
          
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-16 h-16 rounded-xl bg-brand-lime/10 flex items-center justify-center text-brand-lime flex-shrink-0">
              <Users size={32} />
            </div>
            <div>
              <h3 className="font-heading font-black text-2xl mb-2">CAN'T FIND THE PERFECT GAME?</h3>
              <p className="text-gray-300 font-body mb-6">Create your own game and invite players.</p>
              <button className="bg-brand-lime text-[#05110a] px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">
                CREATE A GAME ↗
              </button>
            </div>
          </div>

          <div className="hidden md:flex gap-8 relative z-10 opacity-70">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-brand-lime" size={24} />
              <div className="text-sm"><span className="font-bold text-white block">Set your rules</span>You decide the format.</div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-brand-lime" size={24} />
              <div className="text-sm"><span className="font-bold text-white block">Invite your people</span>Bring your team.</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
