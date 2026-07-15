import { create } from 'zustand';

export type GameState = 'draft' | 'open' | 'full' | 'ongoing' | 'completed' | 'cancelled';

export interface GameParticipant {
  id: string;
  username: string;
  name: string;
  status: 'approved' | 'pending' | 'invited';
}

export interface Game {
  id: string;
  title: string;
  sport: string;
  date: string; // YYYY-MM-DD
  startTime: string; // HH:mm
  duration: number; // minutes
  venue: string;
  location: string; // City
  requiredPlayers: number;
  currentPlayers: GameParticipant[];
  skillRequirement: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  ageRestrictions?: string;
  genderPreference?: 'Men only' | 'Women only' | 'Mixed' | 'No preference';
  isPublic: boolean;
  description: string;
  costPerPlayer: number;
  equipmentRequired: string[];
  organizerId: string;
  status: GameState;
  createdAt: string;
}

interface GameStore {
  games: Game[];
  getGameById: (id: string) => Game | undefined;
  getGamesByCityAndSport: (city?: string, sport?: string) => Game[];
  createGame: (game: Omit<Game, 'id' | 'createdAt' | 'status' | 'currentPlayers'>) => string;
  updateGame: (id: string, updates: Partial<Game>) => void;
  updateGameStatus: (id: string, status: GameState) => void;
  requestToJoin: (gameId: string, participant: Omit<GameParticipant, 'status'>) => void;
  manageJoinRequest: (gameId: string, participantId: string, action: 'approve' | 'reject' | 'remove') => void;
  leaveGame: (gameId: string, participantId: string) => void;
  invitePlayer: (gameId: string, participant: Omit<GameParticipant, 'status'>) => void;
}

const mockGames: Game[] = [
  {
    id: 'g1',
    title: 'Sunday Morning 5v5 Turf Football',
    sport: 'Football',
    date: '2026-07-20',
    startTime: '07:00',
    duration: 90,
    venue: 'Green Arena Turf',
    location: 'Delhi',
    requiredPlayers: 10,
    currentPlayers: [
      { id: 'u1', username: 'user_1', name: 'Rahul S.', status: 'approved' },
      { id: 'u2', username: 'user_2', name: 'Aman P.', status: 'approved' }
    ],
    skillRequirement: 'Intermediate',
    genderPreference: 'No preference',
    isPublic: true,
    description: 'Regular weekend game. Need 8 more players. We play competitive but friendly.',
    costPerPlayer: 250,
    equipmentRequired: ['Turf shoes', 'Water bottle'],
    organizerId: 'u1', // Rahul S. is organizer
    status: 'open',
    createdAt: '2026-07-10T10:00:00Z'
  },
  {
    id: 'g2',
    title: 'Advanced Badminton Doubles',
    sport: 'Badminton',
    date: '2026-07-18',
    startTime: '19:00',
    duration: 60,
    venue: 'City Club Indoor Courts',
    location: 'Gurugram',
    requiredPlayers: 4,
    currentPlayers: [
      { id: 'p2', username: 'priya_patel', name: 'Priya Patel', status: 'approved' },
      { id: 'p4', username: 'kavita_s', name: 'Kavita S.', status: 'approved' },
      { id: 'p5', username: 'amit_v', name: 'Amit V.', status: 'pending' }
    ],
    skillRequirement: 'Advanced',
    isPublic: true,
    description: 'Looking for 2 advanced players for high-intensity doubles.',
    costPerPlayer: 150,
    equipmentRequired: ['Non-marking shoes', 'Own racquet'],
    organizerId: 'p2',
    status: 'open',
    createdAt: '2026-07-12T14:30:00Z'
  }
];

export const useGameStore = create<GameStore>((set, get) => ({
  games: mockGames,
  
  getGameById: (id) => get().games.find(g => g.id === id),
  
  getGamesByCityAndSport: (city, sport) => {
    let result = get().games;
    if (city) result = result.filter(g => g.location.toLowerCase() === city.toLowerCase());
    if (sport) result = result.filter(g => g.sport.toLowerCase() === sport.toLowerCase());
    return result;
  },

  createGame: (gameData) => {
    const id = `g${Date.now()}`;
    const newGame: Game = {
      ...gameData,
      id,
      status: gameData.isPublic ? 'open' : 'draft',
      currentPlayers: [{ id: gameData.organizerId, username: 'organizer', name: 'You', status: 'approved' }], // Organizer is in by default
      createdAt: new Date().toISOString()
    };
    set(state => ({ games: [...state.games, newGame] }));
    return id;
  },

  updateGame: (id, updates) => {
    set(state => ({
      games: state.games.map(g => g.id === id ? { ...g, ...updates } : g)
    }));
  },

  updateGameStatus: (id, status) => {
    set(state => ({
      games: state.games.map(g => g.id === id ? { ...g, status } : g)
    }));
  },

  requestToJoin: (gameId, participant) => {
    set(state => ({
      games: state.games.map(g => {
        if (g.id === gameId) {
          return {
            ...g,
            currentPlayers: [...g.currentPlayers, { ...participant, status: 'pending' }]
          };
        }
        return g;
      })
    }));
  },

  manageJoinRequest: (gameId, participantId, action) => {
    set(state => ({
      games: state.games.map(g => {
        if (g.id === gameId) {
          if (action === 'remove' || action === 'reject') {
            return {
              ...g,
              currentPlayers: g.currentPlayers.filter(p => p.id !== participantId),
              status: g.status === 'full' ? 'open' : g.status
            };
          } else if (action === 'approve') {
            const updatedPlayers = g.currentPlayers.map(p => p.id === participantId ? { ...p, status: 'approved' as const } : p);
            const approvedCount = updatedPlayers.filter(p => p.status === 'approved').length;
            return {
              ...g,
              currentPlayers: updatedPlayers,
              status: approvedCount >= g.requiredPlayers ? 'full' : g.status
            };
          }
        }
        return g;
      })
    }));
  },

  leaveGame: (gameId, participantId) => {
    set(state => ({
      games: state.games.map(g => {
        if (g.id === gameId) {
          return {
            ...g,
            currentPlayers: g.currentPlayers.filter(p => p.id !== participantId),
            status: g.status === 'full' ? 'open' : g.status
          };
        }
        return g;
      })
    }));
  },

  invitePlayer: (gameId, participant) => {
    set(state => ({
      games: state.games.map(g => {
        if (g.id === gameId) {
           // Prevent duplicate invites
           if (!g.currentPlayers.find(p => p.id === participant.id)) {
             return {
               ...g,
               currentPlayers: [...g.currentPlayers, { ...participant, status: 'invited' }]
             };
           }
        }
        return g;
      })
    }));
  }
}));
