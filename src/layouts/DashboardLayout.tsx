import React, { useEffect } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

export default function DashboardLayout() {
  const { isAuthenticated, user, logout } = useAppStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated || !user) return null;

  const isActive = (path: string) => location.pathname === path ? 'bg-primary-green text-white shadow-md' : 'text-deep-black/60 hover:bg-black/5';

  return (
    <div className="min-h-screen flex bg-muted-green text-deep-black font-body">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-black/5 p-6 flex flex-col flex-shrink-0 relative z-20">
        <Link to="/" className="text-3xl font-heading font-extrabold text-primary-green tracking-tight mb-12 block">Khel<span className="text-deep-black">Clan</span></Link>
        
        <div className="flex items-center gap-3 mb-10 pb-6 border-b border-black/5">
           <div className="w-12 h-12 rounded-full bg-energy-gold/20 flex items-center justify-center font-heading font-bold text-energy-gold text-lg">
             {user.name.charAt(0)}
           </div>
           <div>
             <div className="font-bold font-heading text-sm text-deep-black leading-tight">{user.name}</div>
             <div className="font-mono text-xs text-black/50">{user.phone}</div>
           </div>
        </div>

        <nav className="flex flex-col gap-2 flex-grow">
           <Link to="/dashboard" className={`p-3 rounded-xl font-heading font-bold transition-all ${isActive('/dashboard')}`}>Overview</Link>
           <Link to="/dashboard/clips" className={`p-3 rounded-xl font-heading font-bold transition-all ${isActive('/dashboard/clips')}`}>My Clips</Link>
           <Link to="/games" className="p-3 rounded-xl font-heading font-bold text-deep-black/60 hover:bg-black/5 transition-all mt-4 border border-transparent hover:border-black/5">Browse Games</Link>
        </nav>
        
        <button onClick={logout} className="mt-auto p-3 text-left font-heading font-bold text-red-500 hover:bg-red-50 rounded-xl transition-colors">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 h-screen overflow-auto relative">
        <header className="bg-white border-b border-black/5 px-10 py-6 sticky top-0 z-10 flex justify-between items-center backdrop-blur-md bg-white/80">
            <h2 className="text-xl font-heading font-bold">Player Area</h2>
            <div className="flex gap-4 items-center">
              <span className="font-mono text-sm bg-muted-green px-4 py-2 rounded-lg border border-black/5 shadow-sm">Wallet: <span className="font-bold text-primary-green">₹{user.balance}</span></span>
            </div>
        </header>
        <div className="p-10 max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
