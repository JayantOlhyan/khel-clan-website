import React, { useState, useEffect } from 'react';
import { X, Smartphone } from 'lucide-react';

export default function AppBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user previously dismissed the banner
    const dismissed = localStorage.getItem('khelclan_app_banner_dismissed');
    
    // Simple mobile detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (!dismissed && isMobile) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  const handleDismiss = () => {
    localStorage.setItem('khelclan_app_banner_dismissed', 'true');
    setIsVisible(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-forest text-white p-4 flex items-center justify-between z-50 border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] animate-in slide-in-from-bottom-full duration-300">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
          <Smartphone size={24} className="text-brand-forest" />
        </div>
        <div>
          <p className="font-heading font-black text-sm leading-tight">Get the KhelClan App</p>
          <p className="text-xs text-white/70">Better experience, instant notifications.</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <a 
          href="https://apps.apple.com/app/id000000000" // Replace with real URL
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-lime text-brand-forest px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider whitespace-nowrap hover:bg-white transition-colors"
          onClick={() => localStorage.setItem('khelclan_app_banner_dismissed', 'true')}
        >
          Open App
        </a>
        <button 
          onClick={handleDismiss}
          className="p-2 text-white/50 hover:text-white transition-colors"
          aria-label="Dismiss app banner"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
