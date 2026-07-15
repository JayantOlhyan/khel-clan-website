import { create } from 'zustand';

export interface City {
  id: string;
  name: string;
  description: string;
  activeSports: string[]; // Sport IDs like 'cricket', 'football'
  popularVenues: string[];
  image: string;
  playerCount: string;
  isActive: boolean;
}

interface LocationState {
  cities: City[];
  updateCity: (id: string, updatedData: Partial<City>) => void;
}

const initialCities: City[] = [
  {
    id: 'delhi',
    name: 'Delhi',
    description: 'The capital city bursting with energy. From premier turf wars to elite box cricket leagues.',
    activeSports: ['football', 'cricket', 'badminton', 'basketball'],
    popularVenues: ['KhelClan Arena South Delhi', 'The Turf RK Puram', 'Smashers Hub'],
    image: 'https://images.unsplash.com/photo-1587474260580-c0379f8c0b43?auto=format&fit=crop&q=80&w=800',
    playerCount: '15,000+',
    isActive: true,
  },
  {
    id: 'gurugram',
    name: 'Gurugram',
    description: 'Corporate hubs meeting premium sports facilities. Top-tier courts and high intensity games.',
    activeSports: ['football', 'tennis', 'badminton', 'cricket', 'basketball'],
    popularVenues: ['Cyber City Sports Park', 'Golf Course Ext Arena', 'KhelClan Elite Gurugram'],
    image: 'https://images.unsplash.com/photo-1596484552834-6a58f850d0a5?auto=format&fit=crop&q=80&w=800',
    playerCount: '12,500+',
    isActive: true,
  },
  {
    id: 'noida',
    name: 'Noida',
    description: 'Spacious complexes and professional-grade academies ready for your next tournament.',
    activeSports: ['cricket', 'football', 'badminton', 'basketball'],
    popularVenues: ['Sector 62 Sports Complex', 'Noida Stadium Hub', 'The Pitch Sector 18'],
    image: 'https://images.unsplash.com/photo-1590050752117-238cb123e42b?auto=format&fit=crop&q=80&w=800',
    playerCount: '8,000+',
    isActive: true,
  }
];

export const useLocationStore = create<LocationState>((set) => ({
  cities: initialCities,
  updateCity: (id, updatedData) => 
    set((state) => ({
      cities: state.cities.map((city) => 
        city.id === id ? { ...city, ...updatedData } : city
      ),
    })),
}));
