import { create } from 'zustand';

export interface Coach {
  id: string;
  username: string;
  name: string;
  sport: string;
  location: string;
  experience: string;
  hourlyRate: string;
  bio: string;
  rating: number;
  certifications: string[];
}

interface CoachStore {
  coaches: Coach[];
  getCoach: (username: string) => Coach | undefined;
}

export const useCoachStore = create<CoachStore>((set, get) => ({
  coaches: [
    {
      id: 'c1', username: 'vijay-tennis', name: 'Vijay Sharma', sport: 'Tennis',
      location: 'Delhi', experience: '10 Years', hourlyRate: '₹1,500/hr',
      bio: 'Former national level player providing advanced technical coaching.',
      rating: 4.9, certifications: ['AITA Level 4', 'ITF Certified']
    },
    {
      id: 'c2', username: 'rohit-cricket', name: 'Rohit Kumar', sport: 'Cricket',
      location: 'Noida', experience: '5 Years', hourlyRate: '₹800/hr',
      bio: 'Specialist in fast bowling mechanics and batting technique.',
      rating: 4.6, certifications: ['BCCI Level B']
    }
  ],
  getCoach: (username) => get().coaches.find(c => c.username === username),
}));
