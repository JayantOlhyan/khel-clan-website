import { create } from 'zustand';

export interface GamePayment {
  id?: string | number;
  title?: string;
  price?: string | number;
  img?: string;
  sport?: string;
  location?: string;
  date?: string;
  time?: string;
}

export interface PrivacySettings {
  showPhone: boolean;
  showEmail: boolean;
  profileVisibility: 'public' | 'private' | 'connections';
}

export interface UserProfile {
  id: string;
  username: string;
  name: string;
  phone: string;
  email?: string;
  bio?: string;
  balance: number;
  location?: string; // City
  profilePhoto?: string;
  preferredSports?: string[];
  skillLevels?: Record<string, string>;
  availability?: string;
  playingPreferences?: string; // e.g., "Weekends only", "Competitive"
  gamesPlayedCount: number;
  groupsJoinedCount: number;
  teams: string[];
  achievements: string[];
  privacySettings: PrivacySettings;
}

interface AppState {
  isAuthenticated: boolean;
  isAdmin: boolean;
  hasCompletedOnboarding: boolean;
  user: UserProfile | null;
  authModalOpen: boolean;
  paymentModalOpen: boolean;
  activeGamePayment: GamePayment | null;
  newsletterSubscribed: boolean;

  openAuthModal: () => void;
  closeAuthModal: () => void;
  login: (phone: string, name: string) => void;
  logout: () => void;
  completeOnboarding: (data: Partial<UserProfile>) => void;

  openPaymentModal: (game: GamePayment) => void;
  closePaymentModal: () => void;
  processPayment: () => Promise<void>;
  subscribeNewsletter: (phone: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isAuthenticated: false,
  isAdmin: true, // Default to true for prototype testing
  hasCompletedOnboarding: false,
  user: null,
  authModalOpen: false,
  paymentModalOpen: false,
  activeGamePayment: null,
  newsletterSubscribed: false,

  openAuthModal: () => set({ authModalOpen: true }),
  closeAuthModal: () => set({ authModalOpen: false }),
  login: (phone, name) => set({ 
    isAuthenticated: true, 
    user: { 
      id: 'u1',
      username: name.toLowerCase().replace(' ', '_'),
      name, 
      phone, 
      balance: 120,
      gamesPlayedCount: 12,
      groupsJoinedCount: 3,
      teams: ['Sunday Smashers'],
      achievements: ['Early Bird'],
      privacySettings: {
        showPhone: false,
        showEmail: false,
        profileVisibility: 'public'
      }
    }, 
    authModalOpen: false 
  }),
  logout: () => set({ isAuthenticated: false, hasCompletedOnboarding: false, user: null, isAdmin: false }),
  completeOnboarding: (data) => set((state) => ({ 
    hasCompletedOnboarding: true, 
    user: state.user ? { ...state.user, ...data } : null 
  })),

  openPaymentModal: (game) => set({ paymentModalOpen: true, activeGamePayment: game }),
  closePaymentModal: () => set({ paymentModalOpen: false, activeGamePayment: null }),
  processPayment: async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });
  },
  subscribeNewsletter: (phone) => {
    console.log('Subscribed newsletter with WhatsApp:', phone);
    set({ newsletterSubscribed: true });
  },
}));

