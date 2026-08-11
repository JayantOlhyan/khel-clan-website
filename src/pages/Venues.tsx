import React from 'react';
import { Search, MapPin, CheckCircle, ChevronDown, Filter, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Venues() {
  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=2000" 
            alt="Venues Hero" 
            className="w-full h-full object-cover opacity-20 object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] via-[#05110a]/50 to-[#05110a]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-black text-5xl md:text-6xl mb-4 leading-tight">
            Find the <span className="text-brand-lime">Perfect Venue.</span>
          </h1>
          <p className="text-gray-300 font-body text-base max-w-2xl mb-8 leading-relaxed">
            Discover and book the best venues for your favorite sports. Play anywhere, anytime.
          </p>

          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 flex items-center justify-center text-brand-lime"><MapPin size={28}/></div>
               <div>
                 <div className="font-heading font-black text-xl leading-none">1,250+</div>
                 <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Venues</div>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 flex items-center justify-center text-brand-lime"><MapPin size={28}/></div>
               <div>
                 <div className="font-heading font-black text-xl leading-none">120+</div>
                 <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Cities</div>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 flex items-center justify-center text-brand-lime"><CheckCircle size={28}/></div>
               <div>
                 <div className="font-heading font-black text-xl leading-none">20+</div>
                 <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Sports</div>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 flex items-center justify-center text-brand-lime"><Star size={28}/></div>
               <div>
                 <div className="font-heading font-black text-xl leading-none">4.7</div>
                 <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Avg. Rating</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEARCH BAR */}
      <div className="border-b border-white/10 bg-[#0a1a12] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-4 overflow-x-auto hide-scrollbar">
            <div className="relative flex-grow min-w-[200px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search venues by name, sport, or location..." 
                className="w-full bg-[#05110a] border border-white/10 text-white pl-11 pr-4 py-3 rounded-lg focus:outline-none focus:border-brand-lime transition-colors text-sm"
              />
            </div>
            <div className="relative flex-shrink-0">
              <select className="appearance-none bg-[#05110a] border border-white/10 text-white pl-4 pr-10 py-3 rounded-lg focus:outline-none focus:border-brand-lime transition-colors text-sm w-40 font-bold">
                <option>All Sports</option>
                <option>Football</option>
                <option>Cricket</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <div className="relative flex-shrink-0">
              <select className="appearance-none bg-[#05110a] border border-white/10 text-white pl-4 pr-10 py-3 rounded-lg focus:outline-none focus:border-brand-lime transition-colors text-sm w-40 font-bold">
                <option>All Cities</option>
                <option>Delhi NCR</option>
                <option>Mumbai</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <div className="relative flex-shrink-0">
              <select className="appearance-none bg-[#05110a] border border-white/10 text-white pl-4 pr-10 py-3 rounded-lg focus:outline-none focus:border-brand-lime transition-colors text-sm w-40 font-bold">
                <option>All Venue Types</option>
                <option>Outdoor</option>
                <option>Indoor</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <div className="relative flex-shrink-0">
              <select className="appearance-none bg-[#05110a] border border-white/10 text-white pl-4 pr-10 py-3 rounded-lg focus:outline-none focus:border-brand-lime transition-colors text-sm w-40 font-bold">
                <option>All Facilities</option>
                <option>Flood Lights</option>
                <option>Parking</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <button className="flex-shrink-0 bg-[#05110a] border border-white/10 text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:border-brand-lime hover:text-brand-lime transition-colors flex items-center gap-2">
              <Filter size={16} /> MORE FILTERS
            </button>
          </div>
        </div>
      </div>

      {/* 3. MAIN CONTENT GRID */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT SIDEBAR (Filters) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 space-y-6">
               <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                 <h3 className="font-heading font-black text-sm uppercase tracking-widest text-white">FILTERS</h3>
                 <button className="text-brand-lime text-xs font-bold hover:underline">Clear All</button>
               </div>
               
               <div className="space-y-4">
                 <h4 className="font-bold text-xs text-gray-400 uppercase tracking-widest">SPORT</h4>
                 <label className="flex items-center gap-3 cursor-pointer group">
                   <div className="w-4 h-4 rounded border border-brand-lime bg-brand-lime flex items-center justify-center text-[#05110a]"><CheckCircle size={12}/></div>
                   <span className="text-sm font-bold text-white">All Sports</span>
                 </label>
                 {['Football', 'Cricket', 'Basketball', 'Badminton', 'Volleyball', 'Table Tennis', 'Tennis'].map((item) => (
                   <label key={item} className="flex items-center gap-3 cursor-pointer group">
                     <div className="w-4 h-4 rounded border border-white/20 group-hover:border-white/50 transition-colors"></div>
                     <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{item}</span>
                   </label>
                 ))}
                 <button className="text-xs text-brand-lime font-bold hover:underline flex items-center gap-1">+ More Sports</button>
               </div>

               <div className="space-y-4 pt-4 border-t border-white/10">
                 <h4 className="font-bold text-xs text-gray-400 uppercase tracking-widest">LOCATION</h4>
                 <div className="relative mb-2">
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                   <input type="text" placeholder="Search city or area..." className="w-full bg-[#0a1a12] border border-white/10 text-white pl-9 pr-3 py-2 rounded text-xs focus:outline-none focus:border-brand-lime" />
                 </div>
                 <label className="flex items-center gap-3 cursor-pointer group">
                   <div className="w-4 h-4 rounded border border-brand-lime bg-brand-lime flex items-center justify-center text-[#05110a]"><CheckCircle size={12}/></div>
                   <span className="text-sm font-bold text-white">All Locations</span>
                 </label>
                 {['Delhi NCR', 'Mumbai', 'Bangalore', 'Hyderabad', 'Pune'].map((item) => (
                   <label key={item} className="flex items-center gap-3 cursor-pointer group">
                     <div className="w-4 h-4 rounded border border-white/20 group-hover:border-white/50 transition-colors"></div>
                     <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{item}</span>
                   </label>
                 ))}
                 <button className="text-xs text-brand-lime font-bold hover:underline flex items-center gap-1">+ More</button>
               </div>

               <div className="space-y-4 pt-4 border-t border-white/10">
                 <h4 className="font-bold text-xs text-gray-400 uppercase tracking-widest">VENUE TYPE</h4>
                 <label className="flex items-center gap-3 cursor-pointer group">
                   <div className="w-4 h-4 rounded border border-brand-lime bg-brand-lime flex items-center justify-center text-[#05110a]"><CheckCircle size={12}/></div>
                   <span className="text-sm font-bold text-white">All Types</span>
                 </label>
                 {['Outdoor', 'Indoor', 'Ground', 'Stadium', 'Court', 'Academy'].map((item) => (
                   <label key={item} className="flex items-center gap-3 cursor-pointer group">
                     <div className="w-4 h-4 rounded border border-white/20 group-hover:border-white/50 transition-colors"></div>
                     <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{item}</span>
                   </label>
                 ))}
               </div>

               <div className="space-y-4 pt-4 border-t border-white/10">
                 <h4 className="font-bold text-xs text-gray-400 uppercase tracking-widest">AMENITIES</h4>
                 {['Parking', 'Changing Room', 'Flood Lights', 'Cafeteria', 'Equipment Rental', 'First Aid'].map((item) => (
                   <label key={item} className="flex items-center gap-3 cursor-pointer group">
                     <div className="w-4 h-4 rounded border border-white/20 group-hover:border-white/50 transition-colors"></div>
                     <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{item}</span>
                   </label>
                 ))}
               </div>
               
               <button className="w-full bg-brand-lime/10 text-brand-lime border border-brand-lime/20 py-3 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-brand-lime hover:text-[#05110a] transition-colors flex items-center justify-center gap-2 mt-6">
                 APPLY FILTERS <Filter size={14}/>
               </button>
            </div>
          </div>

          {/* MAIN COLUMN (Venues Grid) */}
          <div className="lg:col-span-9">
             <div className="flex justify-between items-center mb-6">
               <h2 className="font-heading font-black text-xl">1,250+ Venues Found</h2>
               <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2 text-sm text-gray-400">
                   Sort by: 
                   <select className="bg-transparent border-none text-white font-bold focus:outline-none cursor-pointer">
                     <option>Popular</option>
                     <option>Top Rated</option>
                     <option>Price: Low to High</option>
                   </select>
                 </div>
                 <div className="flex gap-1 border border-white/10 rounded-lg p-1">
                   <button className="bg-white/10 text-brand-lime p-1 rounded font-bold text-[10px] uppercase tracking-wider px-2">Grid View</button>
                   <button className="text-gray-500 hover:text-white p-1 rounded font-bold text-[10px] uppercase tracking-wider px-2 transition-colors">List View</button>
                 </div>
               </div>
             </div>

             <div className="grid grid-autofit gap-6">
               
               {/* Venue Card 1 */}
               <div className="bg-[#0a1a12] border border-white/10 rounded-2xl overflow-hidden group hover:border-brand-lime/50 transition-colors flex flex-col h-full relative">
                 <div className="absolute top-3 left-3 z-10 bg-[#05110a]/80 backdrop-blur border border-brand-lime/50 text-brand-lime text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">
                   POPULAR
                 </div>
                 <div className="relative h-48 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Venue"/>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] via-transparent to-transparent"></div>
                 </div>
                 <div className="p-5 flex-grow flex flex-col">
                   <h3 className="font-heading font-black text-xl mb-1 group-hover:text-brand-lime transition-colors leading-tight">Green Field Arena</h3>
                   <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-3 flex items-center gap-1">
                     <div className="w-3 h-3 border border-brand-lime/50 rounded-sm"></div> Football
                   </p>
                   
                   <div className="flex items-start justify-between mb-4">
                     <div>
                       <div className="flex items-center gap-1.5 text-xs text-gray-300 mb-1">
                         <MapPin size={12} className="text-gray-500" /> Hauz Khas, New Delhi
                       </div>
                       <div className="flex items-center gap-1.5 text-xs">
                         <Star size={12} className="text-yellow-400" fill="currentColor"/> <span className="font-bold text-white">4.8</span> <span className="text-gray-500">(230)</span>
                       </div>
                     </div>
                     <div className="text-right">
                       <span className="font-heading font-black text-lg text-brand-lime">₹1,200</span>
                       <span className="text-[10px] text-gray-500 block">/hour</span>
                     </div>
                   </div>

                   <div className="flex flex-wrap gap-2 mt-auto mb-5">
                     <span className="bg-[#05110a] border border-white/5 text-gray-400 text-[10px] px-2 py-1 rounded flex items-center gap-1"><CheckCircle size={10}/> Flood Lights</span>
                     <span className="bg-[#05110a] border border-white/5 text-gray-400 text-[10px] px-2 py-1 rounded flex items-center gap-1"><CheckCircle size={10}/> Parking</span>
                     <span className="bg-[#05110a] border border-white/5 text-gray-400 text-[10px] px-2 py-1 rounded flex items-center gap-1"><CheckCircle size={10}/> Changing Room</span>
                   </div>
                   
                   <button className="w-full bg-brand-lime text-[#05110a] py-2.5 rounded font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors mt-auto">VIEW DETAILS</button>
                 </div>
               </div>

               {/* Venue Card 2 */}
               <div className="bg-[#0a1a12] border border-white/10 rounded-2xl overflow-hidden group hover:border-brand-lime/50 transition-colors flex flex-col h-full relative">
                 <div className="absolute top-3 left-3 z-10 bg-[#05110a]/80 backdrop-blur border border-yellow-500/50 text-yellow-400 text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">
                   TOP RATED
                 </div>
                 <div className="relative h-48 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Venue"/>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] via-transparent to-transparent"></div>
                 </div>
                 <div className="p-5 flex-grow flex flex-col">
                   <h3 className="font-heading font-black text-xl mb-1 group-hover:text-brand-lime transition-colors leading-tight">Urban Sports Hub</h3>
                   <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-3 flex items-center gap-1">
                     <div className="w-3 h-3 border border-brand-lime/50 rounded-sm"></div> Basketball
                   </p>
                   
                   <div className="flex items-start justify-between mb-4">
                     <div>
                       <div className="flex items-center gap-1.5 text-xs text-gray-300 mb-1">
                         <MapPin size={12} className="text-gray-500" /> Andheri West, Mumbai
                       </div>
                       <div className="flex items-center gap-1.5 text-xs">
                         <Star size={12} className="text-yellow-400" fill="currentColor"/> <span className="font-bold text-white">4.9</span> <span className="text-gray-500">(186)</span>
                       </div>
                     </div>
                     <div className="text-right">
                       <span className="font-heading font-black text-lg text-brand-lime">₹1,500</span>
                       <span className="text-[10px] text-gray-500 block">/hour</span>
                     </div>
                   </div>

                   <div className="flex flex-wrap gap-2 mt-auto mb-5">
                     <span className="bg-[#05110a] border border-white/5 text-gray-400 text-[10px] px-2 py-1 rounded flex items-center gap-1"><CheckCircle size={10}/> Indoor</span>
                     <span className="bg-[#05110a] border border-white/5 text-gray-400 text-[10px] px-2 py-1 rounded flex items-center gap-1"><CheckCircle size={10}/> Parking</span>
                     <span className="bg-[#05110a] border border-white/5 text-gray-400 text-[10px] px-2 py-1 rounded flex items-center gap-1"><CheckCircle size={10}/> Cafeteria</span>
                     <span className="bg-white/5 text-gray-400 text-[10px] px-1.5 py-1 rounded font-bold">+1</span>
                   </div>
                   
                   <button className="w-full bg-brand-lime text-[#05110a] py-2.5 rounded font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors mt-auto">VIEW DETAILS</button>
                 </div>
               </div>

               {/* Venue Card 3 */}
               <div className="bg-[#0a1a12] border border-white/10 rounded-2xl overflow-hidden group hover:border-brand-lime/50 transition-colors flex flex-col h-full relative">
                 <div className="absolute top-3 left-3 z-10 bg-[#05110a]/80 backdrop-blur border border-purple-500/50 text-purple-400 text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">
                   TRENDING
                 </div>
                 <div className="relative h-48 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Venue"/>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] via-transparent to-transparent"></div>
                 </div>
                 <div className="p-5 flex-grow flex flex-col">
                   <h3 className="font-heading font-black text-xl mb-1 group-hover:text-brand-lime transition-colors leading-tight">Pitch Perfect Nets</h3>
                   <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-3 flex items-center gap-1">
                     <div className="w-3 h-3 border border-brand-lime/50 rounded-sm"></div> Cricket
                   </p>
                   
                   <div className="flex items-start justify-between mb-4">
                     <div>
                       <div className="flex items-center gap-1.5 text-xs text-gray-300 mb-1">
                         <MapPin size={12} className="text-gray-500" /> Sector 62, Noida
                       </div>
                       <div className="flex items-center gap-1.5 text-xs">
                         <Star size={12} className="text-yellow-400" fill="currentColor"/> <span className="font-bold text-white">4.7</span> <span className="text-gray-500">(152)</span>
                       </div>
                     </div>
                     <div className="text-right">
                       <span className="font-heading font-black text-lg text-brand-lime">₹900</span>
                       <span className="text-[10px] text-gray-500 block">/hour</span>
                     </div>
                   </div>

                   <div className="flex flex-wrap gap-2 mt-auto mb-5">
                     <span className="bg-[#05110a] border border-white/5 text-gray-400 text-[10px] px-2 py-1 rounded flex items-center gap-1"><CheckCircle size={10}/> Nets</span>
                     <span className="bg-[#05110a] border border-white/5 text-gray-400 text-[10px] px-2 py-1 rounded flex items-center gap-1"><CheckCircle size={10}/> Flood Lights</span>
                     <span className="bg-[#05110a] border border-white/5 text-gray-400 text-[10px] px-2 py-1 rounded flex items-center gap-1"><CheckCircle size={10}/> Parking</span>
                     <span className="bg-white/5 text-gray-400 text-[10px] px-1.5 py-1 rounded font-bold">+1</span>
                   </div>
                   
                   <button className="w-full bg-brand-lime text-[#05110a] py-2.5 rounded font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors mt-auto">VIEW DETAILS</button>
                 </div>
               </div>

             </div>
             
             {/* Pagination */}
             <div className="flex justify-center items-center gap-2 mt-12">
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 transition-colors"><ChevronLeft size={18}/></button>
               <button className="w-10 h-10 rounded border border-brand-lime bg-brand-lime flex items-center justify-center text-[#05110a] font-bold">1</button>
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 transition-colors font-bold">2</button>
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 transition-colors font-bold">3</button>
               <span className="text-gray-500">...</span>
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 transition-colors font-bold">62</button>
               <button className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"><ChevronRight size={18}/></button>
             </div>

             {/* Bottom CTA block */}
             <div className="mt-12 bg-gradient-to-r from-[#0a1a12] to-brand-forest/30 border border-brand-lime/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
                <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
                  <img src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=400" className="w-64 h-64 object-cover mask-image-fade" alt=""/>
                </div>
                <div className="flex items-center gap-6 relative z-10 mb-6 md:mb-0">
                  <div className="w-16 h-16 rounded-full border-2 border-brand-lime flex items-center justify-center text-brand-lime bg-[#05110a]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" y1="22" x2="12" y2="12"></line></svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-2xl mb-1">Do you own a venue?</h3>
                    <p className="text-sm text-gray-400">List your venue on Khel Clan and reach thousands of players.</p>
                  </div>
                </div>
                <button className="bg-brand-lime text-[#05110a] px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors relative z-10 w-full md:w-auto">
                  LIST YOUR VENUE ↗
                </button>
             </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}
