import { create } from 'zustand';

export interface Sport {
  id: string;
  name: string;
  isActive: boolean;
  pricing: string;
  venues: string[];
  overview: string;
  skillLevels: string[];
}

interface SportsState {
  sports: Sport[];
  updateSport: (id: string, data: Partial<Sport>) => void;
}

const initialSports: Sport[] = [
  { id: 'cricket', name: 'Cricket', isActive: true, pricing: '₹500/hour', venues: ['Green Park, KhelClan Arena'], overview: 'Play the gentleman\'s game with local enthusiasts.', skillLevels: ['Beginner', 'Intermediate', 'Advanced'] },
  { id: 'football', name: 'Football', isActive: true, pricing: '₹1000/hour', venues: ['Turf City, City Stadium'], overview: 'Join local matches or tournaments. Great for fitness and teamwork.', skillLevels: ['Beginner', 'Intermediate', 'Advanced'] },
  { id: 'badminton', name: 'Badminton', isActive: true, pricing: '₹300/hour', venues: ['Indoor Court A, Smash Zone'], overview: 'Fast-paced indoor courts available for doubles and singles.', skillLevels: ['Beginner', 'Intermediate', 'Advanced'] },
  { id: 'basketball', name: 'Basketball', isActive: true, pricing: '₹800/hour', venues: ['Hoop Club'], overview: 'Full courts available for 5v5 pickups.', skillLevels: ['Beginner', 'Intermediate', 'Advanced'] },
  { id: 'tennis', name: 'Tennis', isActive: true, pricing: '₹600/hour', venues: ['Grand Slam Courts'], overview: 'Clay and hard courts available.', skillLevels: ['Beginner', 'Intermediate', 'Advanced'] },
  { id: 'table-tennis', name: 'Table Tennis', isActive: true, pricing: '₹150/hour', venues: ['TT Lounge'], overview: 'Indoor tables with equipment rental.', skillLevels: ['Beginner', 'Intermediate'] },
  { id: 'volleyball', name: 'Volleyball', isActive: true, pricing: '₹400/hour', venues: ['Beach Arena, Indoor Hall'], overview: 'Spike and block with local communities.', skillLevels: ['Beginner', 'Intermediate', 'Advanced'] },
  { id: 'running', name: 'Running', isActive: true, pricing: 'Free', venues: ['City Park Trail, Stadium Track'], overview: 'Join group runs and marathons.', skillLevels: ['All Levels'] },
  { id: 'cycling', name: 'Cycling', isActive: true, pricing: 'Free', venues: ['Mountain Trail, Highway Route'], overview: 'Weekend rides and daily commute groups.', skillLevels: ['All Levels'] },
  { id: 'swimming', name: 'Swimming', isActive: true, pricing: '₹200/session', venues: ['Blue Wave Pool'], overview: 'Olympic size pools for training and leisure.', skillLevels: ['Beginner', 'Intermediate', 'Advanced'] },
  { id: 'chess', name: 'Chess', isActive: true, pricing: '₹50/hour', venues: ['Mind Gym Cafe'], overview: 'Quiet environments for strategic gameplay.', skillLevels: ['Beginner', 'Intermediate', 'Advanced'] },
  { id: 'pickleball', name: 'Pickleball', isActive: true, pricing: '₹400/hour', venues: ['Paddle Court B'], overview: 'The fastest growing sport. Easy to learn, hard to master.', skillLevels: ['Beginner', 'Intermediate', 'Advanced'] },
  { id: 'padel', name: 'Padel', isActive: true, pricing: '₹800/hour', venues: ['Premium Padel Club'], overview: 'Exciting mix of tennis and squash.', skillLevels: ['Beginner', 'Intermediate'] },
  { id: 'hockey', name: 'Hockey', isActive: true, pricing: '₹1200/hour', venues: ['National Turf'], overview: 'Field hockey for competitive play.', skillLevels: ['Intermediate', 'Advanced'] },
  { id: 'kabaddi', name: 'Kabaddi', isActive: true, pricing: 'Free', venues: ['Local Ground'], overview: 'Traditional contact sport. High energy.', skillLevels: ['Beginner', 'Intermediate', 'Advanced'] },
];

export const useSportsStore = create<SportsState>((set) => ({
  sports: initialSports,
  updateSport: (id, data) => set((state) => ({
    sports: state.sports.map(sport => sport.id === id ? { ...sport, ...data } : sport)
  }))
}));
