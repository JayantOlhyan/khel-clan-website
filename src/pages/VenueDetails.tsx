import React, { useState } from 'react';
import { Search, MapPin, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, Star, Share2, Heart, MessageCircle, Phone, Info, Grid, FileText, Calendar } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function VenueDetails() {
  const { venueSlug } = useParams();

  return (
    <div className="bg-[#05110a] min-h-screen text-white font-body selection:bg-brand-lime selection:text-black pt-24">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/venues" className="hover:text-white transition-colors">Venues</Link>
          <ChevronRight size={10} />
          <span className="text-brand-lime">Green Field Arena</span>
        </div>

        {/* HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          
          {/* Hero Content (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between order-2 lg:order-1">
            <div>
              <div className="bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest inline-flex items-center gap-1 mb-4">
                <Star size={10} fill="currentColor"/> POPULAR
              </div>
              
              <h1 className="font-heading font-black text-4xl md:text-5xl mb-2">Green Field Arena</h1>
              
              <p className="text-xs text-brand-lime uppercase tracking-widest font-bold mb-4 flex items-center gap-1.5">
                 <div className="w-5 h-5 rounded bg-brand-lime/20 flex items-center justify-center border border-brand-lime/30 text-[10px]">⚽</div>
                 Football
              </p>
              
              <div className="flex items-center gap-4 text-sm text-gray-300 mb-2">
                <div className="flex items-center gap-1.5 text-xs">
                  <Star size={14} className="text-yellow-400" fill="currentColor"/> 
                  <span className="font-bold text-white text-sm">4.8</span> 
                  <span className="text-gray-500 underline">(230 reviews)</span>
                </div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <span className="font-bold text-white">120+ Bookings</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <MapPin size={16} className="text-gray-500 flex-shrink-0" />
                Hauz Khas, New Delhi, Delhi 110016
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-[#0a1a12] border border-white/10 text-gray-400 text-xs px-3 py-2 rounded flex items-center gap-2"><CheckCircle size={14} className="text-brand-lime"/> Flood Lights</span>
                <span className="bg-[#0a1a12] border border-white/10 text-gray-400 text-xs px-3 py-2 rounded flex items-center gap-2"><CheckCircle size={14} className="text-brand-lime"/> Parking</span>
                <span className="bg-[#0a1a12] border border-white/10 text-gray-400 text-xs px-3 py-2 rounded flex items-center gap-2"><CheckCircle size={14} className="text-brand-lime"/> Changing Room</span>
                <span className="bg-[#0a1a12] border border-white/10 text-gray-400 text-xs px-3 py-2 rounded flex items-center gap-2"><CheckCircle size={14} className="text-brand-lime"/> Cafeteria</span>
                <span className="bg-[#0a1a12] border border-white/10 text-gray-400 font-bold text-xs px-3 py-2 rounded">+3</span>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed max-w-md">
                Premium 11-a-side football turf with international standard artificial grass and excellent facilities for players of all levels.
              </p>
            </div>
            
            <div className="flex gap-4 mt-8">
               <button className="flex-grow bg-brand-lime text-[#05110a] py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors flex justify-center items-center gap-2">
                 <Calendar size={18} /> BOOK THIS VENUE ↗
               </button>
               <button className="w-14 flex-shrink-0 bg-transparent border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-colors"><Share2 size={20}/></button>
               <button className="w-14 flex-shrink-0 bg-transparent border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-colors"><Heart size={20}/></button>
            </div>
          </div>

          {/* Hero Image Slider (Right) */}
          <div className="lg:col-span-7 order-1 lg:order-2 h-[300px] lg:h-[450px] relative rounded-3xl overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Venue Main"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#05110a] via-transparent to-transparent"></div>
            
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur border border-white/10 rounded-lg px-3 py-1.5 text-xs font-bold flex items-center gap-2">
              <Grid size={14}/> 1 / 8
            </div>

            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center border border-white/10 hover:bg-brand-lime hover:text-[#05110a] transition-colors">
              <ChevronLeft size={20}/>
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center border border-white/10 hover:bg-brand-lime hover:text-[#05110a] transition-colors">
              <ChevronRight size={20}/>
            </button>

            {/* Thumbnail preview strip */}
            <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto hide-scrollbar">
              <div className="w-24 h-16 rounded-lg border-2 border-brand-lime overflow-hidden flex-shrink-0 cursor-pointer">
                <img src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="thumb"/>
              </div>
              <div className="w-24 h-16 rounded-lg border-2 border-transparent hover:border-white/50 overflow-hidden flex-shrink-0 cursor-pointer opacity-70 hover:opacity-100 transition-all">
                <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="thumb"/>
              </div>
              <div className="w-24 h-16 rounded-lg border-2 border-transparent hover:border-white/50 overflow-hidden flex-shrink-0 cursor-pointer opacity-70 hover:opacity-100 transition-all">
                <img src="https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="thumb"/>
              </div>
              <div className="w-24 h-16 rounded-lg border-2 border-transparent hover:border-white/50 overflow-hidden flex-shrink-0 cursor-pointer opacity-70 hover:opacity-100 transition-all">
                <img src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="thumb"/>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* TABS */}
      <div className="border-y border-white/10 sticky top-0 bg-[#05110a]/90 backdrop-blur z-40 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto hide-scrollbar">
            {[
              { name: 'OVERVIEW', icon: Info },
              { name: 'FACILITIES', icon: Grid },
              { name: 'GALLERY', icon: null },
              { name: 'PRICING', icon: null },
              { name: 'REVIEWS (230)', icon: Star },
              { name: 'RULES', icon: FileText },
              { name: 'LOCATION', icon: MapPin }
            ].map((tab, i) => (
              <button 
                key={i} 
                className={`py-4 font-heading font-bold text-xs tracking-widest uppercase whitespace-nowrap transition-colors relative ${i === 0 ? 'text-brand-lime' : 'text-gray-400 hover:text-white flex items-center gap-2'}`}
              >
                {tab.icon && <tab.icon size={14}/>}
                {tab.name}
                {i === 0 && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-lime"></div>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COL (Details) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* About Block */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6 lg:p-8">
               <h3 className="font-heading font-black text-xl mb-4">About This Venue</h3>
               <p className="text-sm text-gray-300 leading-relaxed mb-8">
                 Green Field Arena is one of New Delhi's most loved football turfs. Our 11-a-side turf is FIFA recommended and perfect for casual matches, tournaments and training sessions.
               </p>
               
               <div className="grid grid-autofit gap-6">
                 <div>
                   <div className="flex items-center gap-2 text-brand-lime mb-1"><MapPin size={16}/> <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Venue Type</span></div>
                   <div className="font-bold">Outdoor</div>
                 </div>
                 <div>
                   <div className="flex items-center gap-2 text-brand-lime mb-1"><Grid size={16}/> <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Ground Size</span></div>
                   <div className="font-bold">11-a-side</div>
                 </div>
                 <div>
                   <div className="flex items-center gap-2 text-brand-lime mb-1"><CheckCircle size={16}/> <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Surface</span></div>
                   <div className="font-bold">Artificial Turf</div>
                 </div>
                 <div>
                   <div className="flex items-center gap-2 text-brand-lime mb-1"><Calendar size={16}/> <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Established</span></div>
                   <div className="font-bold">2018</div>
                 </div>
               </div>

               <div className="grid grid-autofit gap-4 mt-8 pt-8 border-t border-white/10">
                 <div className="text-center">
                   <div className="font-heading font-black text-2xl text-brand-lime mb-1">1,250+</div>
                   <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Matches Played</div>
                 </div>
                 <div className="text-center">
                   <div className="font-heading font-black text-2xl text-brand-lime mb-1">85+</div>
                   <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Tournaments Hosted</div>
                 </div>
                 <div className="text-center">
                   <div className="font-heading font-black text-2xl text-brand-lime mb-1">10K+</div>
                   <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Players Hosted</div>
                 </div>
                 <div className="text-center">
                   <div className="font-heading font-black text-2xl text-brand-lime mb-1">68%</div>
                   <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Repeat Bookings</div>
                 </div>
               </div>
            </div>

            {/* Facilities Block */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6 lg:p-8">
               <h3 className="font-heading font-black text-xl mb-6">Facilities</h3>
               <div className="grid grid-cols-1 sm:grid-autofit gap-6">
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-lg bg-[#05110a] border border-white/10 flex items-center justify-center text-brand-lime flex-shrink-0"><CheckCircle size={20}/></div>
                   <div>
                     <h4 className="font-bold text-sm mb-1">Flood Lights</h4>
                     <p className="text-xs text-gray-400">High quality lights for night games</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-lg bg-[#05110a] border border-white/10 flex items-center justify-center text-brand-lime flex-shrink-0"><CheckCircle size={20}/></div>
                   <div>
                     <h4 className="font-bold text-sm mb-1">Parking</h4>
                     <p className="text-xs text-gray-400">Spacious parking available</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-lg bg-[#05110a] border border-white/10 flex items-center justify-center text-brand-lime flex-shrink-0"><CheckCircle size={20}/></div>
                   <div>
                     <h4 className="font-bold text-sm mb-1">Changing Room</h4>
                     <p className="text-xs text-gray-400">Clean & secure changing rooms</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-lg bg-[#05110a] border border-white/10 flex items-center justify-center text-brand-lime flex-shrink-0"><CheckCircle size={20}/></div>
                   <div>
                     <h4 className="font-bold text-sm mb-1">Cafeteria</h4>
                     <p className="text-xs text-gray-400">Snacks & beverages available</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-lg bg-[#05110a] border border-white/10 flex items-center justify-center text-brand-lime flex-shrink-0"><CheckCircle size={20}/></div>
                   <div>
                     <h4 className="font-bold text-sm mb-1">Water Cooler</h4>
                     <p className="text-xs text-gray-400">Cold drinking water available</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-lg bg-[#05110a] border border-white/10 flex items-center justify-center text-brand-lime flex-shrink-0"><CheckCircle size={20}/></div>
                   <div>
                     <h4 className="font-bold text-sm mb-1">First Aid</h4>
                     <p className="text-xs text-gray-400">Basic first aid support</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-lg bg-[#05110a] border border-white/10 flex items-center justify-center text-brand-lime flex-shrink-0"><CheckCircle size={20}/></div>
                   <div>
                     <h4 className="font-bold text-sm mb-1">Referee (On Request)</h4>
                     <p className="text-xs text-gray-400">Professional referee available</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-lg bg-[#05110a] border border-white/10 flex items-center justify-center text-brand-lime flex-shrink-0"><CheckCircle size={20}/></div>
                   <div>
                     <h4 className="font-bold text-sm mb-1">Equipment Rental</h4>
                     <p className="text-xs text-gray-400">Ball, bibs & more equipment</p>
                   </div>
                 </div>
               </div>
               
               <button className="w-full mt-6 bg-[#05110a] border border-white/10 py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors flex justify-center items-center gap-2">
                 VIEW ALL FACILITIES <ChevronDown size={14}/>
               </button>
            </div>

            {/* Gallery Block */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6 lg:p-8">
               <div className="flex justify-between items-end mb-6">
                 <h3 className="font-heading font-black text-xl">Gallery</h3>
                 <button className="text-brand-lime text-xs font-bold uppercase tracking-widest hover:underline">View All</button>
               </div>
               <div className="grid grid-autofit gap-4">
                 <img src="https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=400" className="w-full h-32 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer" alt="Gallery"/>
                 <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=400" className="w-full h-32 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer" alt="Gallery"/>
                 <img src="https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=400" className="w-full h-32 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer" alt="Gallery"/>
                 <img src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=400" className="w-full h-32 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer" alt="Gallery"/>
               </div>
            </div>

            {/* Reviews Block */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6 lg:p-8">
               <div className="flex justify-between items-end mb-8">
                 <h3 className="font-heading font-black text-xl">Reviews (230)</h3>
                 <button className="text-brand-lime text-xs font-bold uppercase tracking-widest hover:underline">View All</button>
               </div>
               
               <div className="flex flex-col md:flex-row gap-8 mb-8 pb-8 border-b border-white/10">
                 
                 <div className="flex-shrink-0 text-center w-32">
                   <div className="font-heading font-black text-5xl text-white mb-2 leading-none">4.8</div>
                   <div className="flex justify-center gap-1 mb-2">
                     <Star size={12} className="text-yellow-400" fill="currentColor"/>
                     <Star size={12} className="text-yellow-400" fill="currentColor"/>
                     <Star size={12} className="text-yellow-400" fill="currentColor"/>
                     <Star size={12} className="text-yellow-400" fill="currentColor"/>
                     <Star size={12} className="text-yellow-400" fill="currentColor"/>
                   </div>
                   <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">(230 reviews)</div>
                 </div>

                 <div className="flex-grow space-y-2">
                   {[
                     { star: 5, pct: "85%", count: 188 },
                     { star: 4, pct: "12%", count: 32 },
                     { star: 3, pct: "2%", count: 6 },
                     { star: 2, pct: "1%", count: 2 },
                     { star: 1, pct: "1%", count: 2 }
                   ].map((r, i) => (
                     <div key={i} className="flex items-center gap-3 text-xs">
                       <div className="flex items-center gap-1 w-8 font-bold text-gray-400">{r.star} <Star size={10}/></div>
                       <div className="flex-grow h-2 bg-[#05110a] rounded-full overflow-hidden">
                         <div className="h-full bg-brand-lime rounded-full" style={{width: r.pct}}></div>
                       </div>
                       <div className="w-8 text-right text-gray-500">{r.count}</div>
                     </div>
                   ))}
                 </div>
               </div>

               <div className="space-y-6">
                 <div className="bg-[#05110a] border border-white/5 rounded-xl p-6">
                   <div className="flex justify-between items-start mb-4">
                     <div className="flex gap-3">
                       <img src="https://i.pravatar.cc/150?u=2" className="w-10 h-10 rounded-full" alt=""/>
                       <div>
                         <h4 className="font-bold text-sm">Rohit Sharma</h4>
                         <div className="flex gap-0.5 mt-1">
                           <Star size={10} className="text-yellow-400" fill="currentColor"/>
                           <Star size={10} className="text-yellow-400" fill="currentColor"/>
                           <Star size={10} className="text-yellow-400" fill="currentColor"/>
                           <Star size={10} className="text-yellow-400" fill="currentColor"/>
                           <Star size={10} className="text-yellow-400" fill="currentColor"/>
                         </div>
                       </div>
                     </div>
                     <span className="text-xs text-gray-500">2 days ago</span>
                   </div>
                   <p className="text-sm text-gray-300">
                     Excellent turf and lighting. The ground is always well maintained. Perfect for weekend matches! Highly recommend booking in advance.
                   </p>
                 </div>
               </div>

            </div>

          </div>

          {/* RIGHT COL (Widgets) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Booking Widget (Sticky) */}
            <div className="bg-[#0a1a12] border border-brand-lime/20 rounded-2xl p-6 sticky top-28 shadow-[0_0_30px_rgba(200,249,2,0.05)]">
              <h3 className="font-heading font-black text-xl mb-4">Book This Venue</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Select Date</label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select className="w-full appearance-none bg-[#05110a] border border-white/10 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-brand-lime transition-colors text-sm font-bold">
                      <option>May 18, 2025</option>
                      <option>May 19, 2025</option>
                      <option>May 20, 2025</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1.5">Select Time</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-[#05110a] border border-white/10 hover:border-brand-lime text-xs font-bold py-2 rounded transition-colors text-gray-300">6:00 AM - 7:00 AM</button>
                    <button className="bg-[#05110a] border border-white/10 hover:border-brand-lime text-xs font-bold py-2 rounded transition-colors text-gray-300">7:00 AM - 8:00 AM</button>
                    <button className="bg-[#05110a] border border-white/10 hover:border-brand-lime text-xs font-bold py-2 rounded transition-colors text-gray-300">8:00 AM - 9:00 AM</button>
                    <button className="bg-brand-lime/10 border border-brand-lime text-brand-lime text-xs font-bold py-2 rounded transition-colors relative">
                      9:00 AM - 10:00 AM
                    </button>
                  </div>
                  <button className="w-full text-brand-lime text-xs font-bold mt-2 hover:underline">View All Slots</button>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-white/10 pt-4 mb-4">
                <span className="text-sm font-bold text-gray-400">Price</span>
                <div className="text-right">
                  <span className="font-heading font-black text-2xl text-brand-lime leading-none">₹1,200</span>
                  <span className="text-xs text-gray-500"> /hour</span>
                </div>
              </div>

              <button className="w-full bg-brand-lime text-[#05110a] py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors flex justify-center items-center gap-2 mb-3">
                 CONTINUE BOOKING ↗
              </button>
              <p className="text-[10px] text-gray-500 text-center flex justify-center items-center gap-1"><CheckCircle size={10}/> Free cancellation up to 2 hours before booking</p>
            </div>

            {/* Location block */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
              <h3 className="font-heading font-black text-lg mb-4">Location</h3>
              <p className="text-sm text-gray-300 mb-2">Hauz Khas, New Delhi, Delhi 110016</p>
              <button className="text-brand-lime text-xs font-bold uppercase tracking-widest hover:underline mb-4">View on Map</button>
              <div className="w-full h-32 rounded-lg bg-[#05110a] border border-white/10 flex items-center justify-center overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-30" alt="Map"/>
                 <MapPin size={24} className="text-brand-lime absolute drop-shadow-lg" />
              </div>
            </div>

            {/* Owner block */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
              <h3 className="font-heading font-black text-lg mb-4">Venue Owner</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full border-2 border-brand-lime flex items-center justify-center bg-[#05110a]">
                  <span className="font-heading font-black text-brand-lime text-lg">KC</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm flex items-center gap-1">Khel Clan Sports <CheckCircle size={12} className="text-brand-lime"/></h4>
                  <p className="text-[10px] text-gray-400">Member Since Jan 2021</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-grow bg-[#05110a] border border-white/10 hover:border-white/30 text-xs font-bold py-2.5 rounded transition-colors text-white flex justify-center items-center gap-2">
                  <MessageCircle size={14}/> MESSAGE OWNER
                </button>
                <button className="flex-grow bg-[#05110a] border border-white/10 hover:border-white/30 text-xs font-bold py-2.5 rounded transition-colors text-white flex justify-center items-center gap-2">
                  <Phone size={14}/> CALL OWNER
                </button>
              </div>
            </div>

            {/* Nearby Venues */}
            <div className="bg-[#0a1a12] border border-white/10 rounded-2xl p-6">
               <div className="flex justify-between items-end mb-4">
                 <h3 className="font-heading font-black text-lg">Nearby Venues</h3>
                 <button className="text-brand-lime text-[10px] font-bold uppercase hover:underline tracking-wider">View All</button>
               </div>
               
               <div className="space-y-4">
                 {[
                   { title: "Play Arena", loc: "0.8 km away • Saket", rating: "4.6 (120)", price: "₹1,100", img: "https://images.unsplash.com/photo-1518605368461-1ee51a4bbce4?auto=format&fit=crop&q=80&w=100" },
                   { title: "Victory Turf", loc: "1.2 km away • Malviya Nagar", rating: "4.5 (98)", price: "₹1,000", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=100" },
                   { title: "Kickoff Sports Hub", loc: "2.3 km away • Lajpat Nagar", rating: "4.4 (75)", price: "₹1,300", img: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=100" }
                 ].map((v, i) => (
                   <div key={i} className="flex gap-3 group cursor-pointer">
                     <img src={v.img} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" alt=""/>
                     <div className="flex-grow">
                       <h4 className="font-bold text-sm text-white group-hover:text-brand-lime truncate">{v.title}</h4>
                       <p className="text-[10px] text-gray-400 truncate mb-1">{v.loc}</p>
                       <div className="flex items-center gap-1 text-[10px]">
                         <Star size={10} className="text-yellow-400" fill="currentColor"/> <span className="font-bold text-white">{v.rating.split(' ')[0]}</span> <span className="text-gray-500">{v.rating.split(' ')[1]}</span>
                       </div>
                     </div>
                     <div className="text-right flex-shrink-0">
                       <div className="font-bold text-brand-lime text-sm">{v.price}</div>
                       <div className="text-[8px] text-gray-500 uppercase">/hour</div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

          </div>

        </div>
      </div>
      
    </div>
  );
}
