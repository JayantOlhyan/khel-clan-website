import { create } from 'zustand';

interface AppState {
  isAuthenticated: boolean;
  user: { name: string; phone: string; balance: number } | null;
  authModalOpen: boolean;
  paymentModalOpen: boolean;
  activeGamePayment: any | null;
  
  openAuthModal: () => void;
  closeAuthModal: () => void;
  login: (phone: string, name: string) => void;
  logout: () => void;
  
  openPaymentModal: (game: any) => void;
  closePaymentModal: () => void;
  processPayment: () => Promise<void>;
}

export const useAppStore = create<AppState>((set) => ({
  isAuthenticated: false,
  user: null,
  authModalOpen: false,
  paymentModalOpen: false,
  activeGamePayment: null,

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
    })
  }
}));
