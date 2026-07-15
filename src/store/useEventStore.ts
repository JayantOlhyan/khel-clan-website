import { create } from 'zustand';

export interface Event {
  id: string;
  slug: string;
  name: string;
  type: 'meetup' | 'workshop' | 'screening' | 'charity';
  location: string;
  date: string;
  time: string;
  description: string;
  attendeesCount: number;
}

interface EventStore {
  events: Event[];
  getEvent: (slug: string) => Event | undefined;
}

export const useEventStore = create<EventStore>((set, get) => ({
  events: [
    {
      id: 'e1', slug: 'sunday-morning-run-club', name: 'Sunday Morning Run Club',
      type: 'meetup', location: 'India Gate, Delhi', date: '2026-07-20', time: '06:00 AM',
      description: 'Join us for a casual 5k run followed by breakfast.',
      attendeesCount: 45
    },
    {
      id: 'e2', slug: 'pro-tennis-clinic', name: 'Pro Tennis Coaching Clinic',
      type: 'workshop', location: 'DLF Phase 3, Gurugram', date: '2026-07-25', time: '10:00 AM',
      description: 'Improve your serve and backhand with certified ATP coaches.',
      attendeesCount: 12
    }
  ],
  getEvent: (slug) => get().events.find(e => e.slug === slug),
}));
