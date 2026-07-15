import { create } from 'zustand';
import type { UserProfile } from './useAppStore';

// We reuse UserProfile structure for players in the directory
export interface Player extends UserProfile {
  connectionStatus: 'none' | 'pending' | 'connected';
}

interface PlayerStore {
  players: Player[];
  getPlayerByUsername: (username: string) => Player | undefined;
  connectWithPlayer: (username: string) => void;
  searchPlayers: (query: string, filters: { city?: string, sport?: string }) => Player[];
}

const mockPlayers: Player[] = [
  {
    id: 'p1',
    username: 'rahul_sharma',
    name: 'Rahul Sharma',
    phone: '+91 9876543210',
    email: 'rahul@example.com',
    bio: 'Passionate cricketer and weekend football warrior. Always up for a match in Delhi NCR!',
    balance: 0,
    location: 'Delhi',
    preferredSports: ['Cricket', 'Football'],
    skillLevels: { 'Cricket': 'Advanced', 'Football': 'Intermediate' },
    availability: 'Weekends & Friday Nights',
    playingPreferences: 'Competitive but friendly',
    gamesPlayedCount: 45,
    groupsJoinedCount: 4,
    teams: ['Delhi Smashers', 'Weekend FC'],
    achievements: ['MVP City Cup 2024'],
    privacySettings: {
      showPhone: false,
      showEmail: false,
      profileVisibility: 'public'
    },
    connectionStatus: 'none'
  },
  {
    id: 'p2',
    username: 'priya_patel',
    name: 'Priya Patel',
    phone: '+91 9876543211',
    bio: 'Badminton enthusiast. Looking for doubles partners in Gurugram.',
    balance: 0,
    location: 'Gurugram',
    preferredSports: ['Badminton', 'Tennis'],
    skillLevels: { 'Badminton': 'Advanced', 'Tennis': 'Beginner' },
    availability: 'Weekday Mornings',
    playingPreferences: 'Training & Fitness',
    gamesPlayedCount: 120,
    groupsJoinedCount: 2,
    teams: ['Gurugram Shuttle Squad'],
    achievements: ['100 Games Played'],
    privacySettings: {
      showPhone: false,
      showEmail: true,
      profileVisibility: 'public'
    },
    connectionStatus: 'connected'
  },
  {
    id: 'p3',
    username: 'vikram_rao',
    name: 'Vikram Rao',
    phone: '+91 9876543212',
    email: 'vikram.r@example.com',
    bio: 'Just here for fun and fitness.',
    balance: 0,
    location: 'Noida',
    preferredSports: ['Basketball'],
    skillLevels: { 'Basketball': 'Intermediate' },
    availability: 'Anytime',
    playingPreferences: 'Casual',
    gamesPlayedCount: 8,
    groupsJoinedCount: 1,
    teams: [],
    achievements: [],
    privacySettings: {
      showPhone: true, // This player allows phone visibility
      showEmail: false,
      profileVisibility: 'public'
    },
    connectionStatus: 'pending'
  }
];

export const usePlayerStore = create<PlayerStore>((set, get) => ({
  players: mockPlayers,
  
  getPlayerByUsername: (username) => {
    return get().players.find(p => p.username === username);
  },
  
  connectWithPlayer: (username) => {
    set(state => ({
      players: state.players.map(p => 
        p.username === username ? { ...p, connectionStatus: 'pending' } : p
      )
    }));
  },
  
  searchPlayers: (query, filters) => {
    let results = get().players.filter(p => p.privacySettings.profileVisibility !== 'private');
    
    if (query) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) || 
        p.username.toLowerCase().includes(lowerQuery) ||
        (p.bio && p.bio.toLowerCase().includes(lowerQuery))
      );
    }
    
    if (filters.city) {
      results = results.filter(p => p.location?.toLowerCase() === filters.city?.toLowerCase());
    }
    
    if (filters.sport) {
      results = results.filter(p => p.preferredSports?.includes(filters.sport as string));
    }
    
    return results;
  }
}));
