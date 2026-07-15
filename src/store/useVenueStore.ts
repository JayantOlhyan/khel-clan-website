import { create } from 'zustand';
import { Car, Coffee, Waves, Zap, ShieldCheck } from 'lucide-react';

export interface Venue {
  id: string;
  slug: string;
  name: string;
  location: string;
  address: string;
  rating: number;
  reviews: number;
  price: string;
  image: string;
  amenities: any[]; // Lucide icons
  sports: string[];
  tag: string;
  timings: string;
  description: string;
}

interface VenueStore {
  venues: Venue[];
  getVenue: (slug: string) => Venue | undefined;
}

export const useVenueStore = create<VenueStore>((set, get) => ({
  venues: [
    {
      id: '1', slug: 'khelclan-green-arena', name: 'KhelClan Green Arena', location: 'Sector 62, Noida',
      address: '123 Sports Road, Sector 62, Noida, UP',
      rating: 4.9, reviews: 128, price: '₹1,200/hr',
      image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=600&q=80',
      amenities: [Car, Coffee, Zap], sports: ['Football', 'Cricket'], tag: 'Popular',
      timings: '06:00 AM - 11:00 PM', description: 'Premier sports arena featuring high-quality FIFA certified artificial turf.'
    },
    {
      id: '2', slug: 'the-arena-downtown', name: 'The Arena Downtown', location: 'Connaught Place, New Delhi',
      address: 'Block C, CP, New Delhi',
      rating: 4.8, reviews: 94, price: '₹1,500/hr',
      image: 'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=600&q=80',
      amenities: [Car, Zap, ShieldCheck], sports: ['Basketball', 'Tennis'], tag: 'Premium',
      timings: '05:00 AM - 12:00 AM', description: 'Centrally located multi-sport complex with premium lighting and courts.'
    },
    {
      id: '3', slug: 'skyhigh-roots', name: 'Skyhigh Roots Turf & Court', location: 'Gurugram, Phase 5',
      address: 'Phase 5, Golf Course Road, Gurugram',
      rating: 4.7, reviews: 156, price: '₹1,000/hr',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80',
      amenities: [Coffee, Zap, ShieldCheck, Waves], sports: ['Football', 'Badminton'], tag: 'Top Rated',
      timings: '24/7', description: 'State-of-the-art courts with a café and shower facilities.'
    },
    {
      id: '4', slug: 'apex-sports-club', name: 'Apex Sports Club', location: 'Indiranagar, Bengaluru',
      address: '100ft Road, Indiranagar, Bengaluru',
      rating: 4.9, reviews: 210, price: '₹1,800/hr',
      image: 'https://images.unsplash.com/photo-1577223625856-758c127df127?auto=format&fit=crop&w=600&q=80',
      amenities: [Car, Coffee, Zap, ShieldCheck, Waves], sports: ['Football', 'Basketball', 'Tennis'], tag: 'Elite',
      timings: '06:00 AM - 10:00 PM', description: 'The absolute best in class sports club for serious athletes and recreational play alike.'
    }
  ],
  getVenue: (slug) => get().venues.find(v => v.slug === slug),
}));
