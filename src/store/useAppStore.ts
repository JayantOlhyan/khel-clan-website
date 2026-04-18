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

interface AppState {
  isAuthenticated: boolean;
  user: { name: string; phone: string; balance: number } | null;
  authModalOpen: boolean;
  paymentModalOpen: boolean;
  activeGamePayment: GamePayment | null;
  newsletterSubscribed: boolean;

  openAuthModal: () => void;
  closeAuthModal: () => void;
  login: (phone: string, name: string) => void;
  logout: () => void;

  openPaymentModal: (game: GamePayment) => void;
  closePaymentModal: () => void;
  processPayment: () => Promise<void>;
  subscribeNewsletter: (email: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isAuthenticated: false,
  user: null,
  authModalOpen: false,
  paymentModalOpen: false,
  activeGamePayment: null,
  newsletterSubscribed: false,

  openAuthModal: () => set({ authModalOpen: true }),
  closeAuthModal: () => set({ authModalOpen: false }),
  login: (phone, name) => set({ isAuthenticated: true, user: { name, phone, balance: 120 }, authModalOpen: false }),
  logout: () => set({ isAuthenticated: false, user: null }),

  openPaymentModal: (game) => set({ paymentModalOpen: true, activeGamePayment: game }),
  closePaymentModal: () => set({ paymentModalOpen: false, activeGamePayment: null }),
  processPayment: async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });
  },
  subscribeNewsletter: (email) => {
    console.log('Subscribed newsletter with', email);
    set({ newsletterSubscribed: true });
  },
}));

