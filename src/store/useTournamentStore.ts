import { create } from 'zustand';

export interface Tournament {
  id: string;
  slug: string;
  name: string;
  sport: string;
  location: string;
  startDate: string;
  endDate: string;
  prizePool: string;
  entryFee: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  description: string;
  organizerId: string;
}

interface TournamentStore {
  tournaments: Tournament[];
  getTournament: (slug: string) => Tournament | undefined;
}

// Ponytail: Full backend tournament management (Brackets, Fixtures, Standings) 
// is deferred until real backend support exists.
export const useTournamentStore = create<TournamentStore>((set, get) => ({
  tournaments: [
    {
      id: 't1', slug: 'delhi-ncr-football-cup', name: 'Delhi NCR Football Cup',
      sport: 'Football', location: 'Delhi', startDate: '2026-08-15', endDate: '2026-08-20',
      prizePool: '₹50,000', entryFee: '₹2,000/team', status: 'upcoming',
      description: 'The biggest amateur football tournament in the NCR region.',
      organizerId: 'org1'
    },
    {
      id: 't2', slug: 'smash-badminton-open', name: 'Smash Badminton Open',
      sport: 'Badminton', location: 'Noida', startDate: '2026-09-01', endDate: '2026-09-05',
      prizePool: '₹20,000', entryFee: '₹500/player', status: 'upcoming',
      description: 'Singles and Doubles tournament for all skill levels.',
      organizerId: 'org2'
    }
  ],
  getTournament: (slug) => get().tournaments.find(t => t.slug === slug),
}));
