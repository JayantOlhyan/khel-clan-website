import { create } from 'zustand';

// Phase 9: Teams - Data Architecture
// Designed for future competitive play implementation.

export interface TeamMember {
  id: string;
  userId: string;
  role: 'captain' | 'vice-captain' | 'player';
  status: 'active' | 'benched' | 'invited' | 'pending';
  joinedAt: string;
}

export interface TeamMatch {
  matchId: string;
  opponentTeamId?: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  result?: 'win' | 'loss' | 'draw';
  score?: string;
  date: string;
}

export interface TeamStats {
  matchesPlayed: number;
  wins: number;
  losses: number;
  draws: number;
}

export interface Team {
  id: string;
  slug: string;
  name: string;
  sport: string;
  city: string;
  logo?: string;
  captainId: string;
  members: TeamMember[];
  matches: TeamMatch[];
  stats: TeamStats;
  isRecruiting: boolean;
  createdAt: string;
}

interface TeamStore {
  teams: Team[];
  getTeam: (slug: string) => Team | undefined;
}

// Initial stub store. Full functionality to be implemented when competitive play is built.
export const useTeamStore = create<TeamStore>((set, get) => ({
  teams: [],
  getTeam: (slug) => get().teams.find(t => t.slug === slug),
}));
