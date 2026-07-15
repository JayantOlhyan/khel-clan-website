import { create } from 'zustand';

export interface Academy {
  id: string;
  slug: string;
  name: string;
  sports: string[];
  location: string;
  description: string;
  contactEmail: string;
}

interface AcademyStore {
  academies: Academy[];
  getAcademy: (slug: string) => Academy | undefined;
}

export const useAcademyStore = create<AcademyStore>((set, get) => ({
  academies: [
    {
      id: 'a1', slug: 'elite-cricket-academy', name: 'Elite Cricket Academy',
      sports: ['Cricket'], location: 'Gurugram', 
      description: 'The premier cricket academy for youth development in NCR.',
      contactEmail: 'contact@elitecricket.com'
    },
    {
      id: 'a2', slug: 'smash-badminton-hub', name: 'Smash Badminton Hub',
      sports: ['Badminton', 'Table Tennis'], location: 'Delhi',
      description: 'Professional indoor training center for racket sports.',
      contactEmail: 'info@smashhub.in'
    }
  ],
  getAcademy: (slug) => get().academies.find(a => a.slug === slug),
}));
