import React, { useState } from 'react';
import { MapPin, Star, ShieldCheck, Car, Coffee, Waves, Zap, ArrowUpRight } from 'lucide-react';

const venues = [
  {
    id: 1,
    name: 'KhelClan Green Arena',
    location: 'Sector 62, Noida',
    rating: 4.9,
    reviews: 128,
    price: '₹1,200/hr',
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=600&q=80',
    amenities: [Car, Coffee, Zap],
    sports: ['Football', 'Cricket'],
    tag: 'Popular'
  },
  {
    id: 2,
    name: 'The Arena Downtown',
    location: 'Connaught Place, New Delhi',
    rating: 4.8,
    reviews: 94,
    price: '₹1,500/hr',
    image: 'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=600&q=80',
    amenities: [Car, Zap, ShieldCheck],
    sports: ['Basketball', 'Tennis'],
    tag: 'Premium'
  },
  {
    id: 3,
    name: 'Skyhigh Roots Turf & Court',
    location: 'Gurugram, Phase 5',
    rating: 4.7,
    reviews: 156,
    price: '₹1,000/hr',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80',
    amenities: [Coffee, Zap, ShieldCheck, Waves],
    sports: ['Football', 'Badminton'],
    tag: 'Top Rated'
  },
  {
    id: 4,
    name: 'Apex Sports Club',
    location: 'Indiranagar, Bengaluru',
    rating: 4.9,
    reviews: 210,
    price: '₹1,800/hr',
    image: 'https://images.unsplash.com/photo-1577223625856-758c127df127?auto=format&fit=crop&w=600&q=80',
    amenities: [Car, Coffee, Zap, ShieldCheck, Waves],
    sports: ['Football', 'Basketball', 'Tennis'],
    tag: 'Elite'
  }
];

export default function VenueLocations() {
  const [selectedSport, setSelectedSport] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVenues = venues.filter(venue => {
    const matchesSport = selectedSport === 'All' || venue.sports.includes(selectedSport);
    const matchesSearch = venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          venue.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSport && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-brand-neutral/40 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6 animate-fadeIn">
          <span className="px-4 py-1.5 rounded-full bg-brand-lime/20 text-brand-forest font-heading font-bold text-xs uppercase tracking-widest">
            Locate Venues
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-brand-forest leading-tight">
            Our <span className="text-brand-flame underline decoration-wavy underline-offset-8">Locations</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-body leading-relaxed">
            Discover cutting-edge sports complexes and turf centers near you. All equipped with professional cameras, pristine lockrooms, and modern amenities.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 rounded-[32px] border border-black/5 shadow-sm">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {['All', 'Football', 'Basketball', 'Cricket', 'Tennis', 'Badminton'].map((sport) => (
              <button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                className={`px-5 py-2.5 rounded-full font-heading text-sm font-bold transition-all duration-300 ${
                  selectedSport === sport
                    ? 'bg-brand-forest text-white'
                    : 'bg-brand-neutral hover:bg-black/5 text-brand-forest/70'
                }`}
              >
                {sport}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search by name or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-3 rounded-full bg-brand-neutral border border-black/5 outline-none font-body text-sm text-brand-forest focus:border-brand-lime focus:bg-white transition-all"
            />
            <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVenues.map((venue) => (
            <div
              key={venue.id}
              className="bg-white rounded-[32px] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col md:flex-row h-full"
            >
              {/* Image side */}
              <div className="relative md:w-2/5 min-h-[220px] overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-brand-lime text-brand-forest font-heading font-black text-xs px-3.5 py-1.5 rounded-full shadow-md">
                  {venue.tag}
                </span>
              </div>

              {/* Content side */}
              <div className="p-8 md:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 mb-3 text-amber-500">
                    <Star size={16} fill="currentColor" />
                    <span className="font-heading font-bold text-sm text-brand-forest">{venue.rating}</span>
                    <span className="text-gray-400 font-body text-xs">({venue.reviews} reviews)</span>
                  </div>

                  <h3 className="text-2xl font-heading font-black text-brand-forest mb-2 group-hover:text-brand-flame transition-colors leading-snug">
                    {venue.name}
                  </h3>

                  <div className="flex items-center gap-1 text-gray-500 font-body text-sm mb-6">
                    <MapPin size={16} />
                    <span>{venue.location}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Amenities */}
                  <div className="flex gap-3">
                    {venue.amenities.map((Icon, i) => (
                      <span key={i} className="p-2.5 rounded-xl bg-brand-neutral text-brand-forest/60 hover:text-brand-forest transition-colors">
                        <Icon size={18} />
                      </span>
                    ))}
                  </div>

                  {/* Pricing and CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-black/5">
                    <div>
                      <p className="text-xs text-gray-400 font-body">Hourly rate</p>
                      <p className="font-heading font-black text-xl text-brand-forest">{venue.price}</p>
                    </div>
                    <a
                      href={`/contact?venue=${encodeURIComponent(venue.name)}`}
                      className="h-12 px-6 rounded-2xl bg-brand-forest hover:bg-brand-flame text-white font-heading font-bold text-sm flex items-center gap-2 group-hover:shadow-lg transition-all duration-300"
                    >
                      Book Turf <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
