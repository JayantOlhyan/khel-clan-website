import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';

export default function AuthModal() {
  const { authModalOpen, closeAuthModal, login } = useAppStore();
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  if (!authModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-in fade-in zoom-in duration-200">
        <h2 className="text-3xl font-heading font-black text-deep-black mb-2">Join the Clan</h2>
        <p className="text-deep-black/60 font-body text-sm mb-6">Enter your details to receive an OTP and manage your games.</p>
        
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold font-body text-deep-black/50 uppercase tracking-wider mb-1 block">Full Name</label>
            <input 
              type="text" 
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full bg-muted-green border-2 border-transparent focus:border-primary-green rounded-xl p-3 font-body outline-none transition-all"
              placeholder="e.g. Rahul Sharma"
            />
          </div>
          <div>
            <label className="text-xs font-bold font-body text-deep-black/50 uppercase tracking-wider mb-1 block">Phone Number</label>
            <input 
              type="tel" 
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full bg-muted-green border-2 border-transparent focus:border-primary-green rounded-xl p-3 font-body outline-none transition-all"
              placeholder="+91 99999 00000"
            />
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <button 
             onClick={closeAuthModal}
             className="flex-1 bg-black/5 text-deep-black font-heading font-bold rounded-xl py-3 hover:bg-black/10 transition-colors"
          >
            Cancel
          </button>
          <button 
             onClick={() => login(phone || '9999999999', name || 'Player 1')}
             className="flex-1 bg-primary-green text-white font-heading font-bold rounded-xl py-3 shadow-lg hover:bg-green-800 hover:-translate-y-0.5 transition-all"
          >
            Send OTP
          </button>
        </div>
      </div>
    </div>
  );
}
