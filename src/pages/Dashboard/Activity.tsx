import React, { useState } from 'react';
import { Calendar, Users, Bookmark, Bell, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Tab = 'games' | 'groups' | 'saved' | 'invitations';

export default function Activity() {
  const [activeTab, setActiveTab] = useState<Tab>('games');

  const tabs: { id: Tab, label: string, icon: React.ElementType }[] = [
    { id: 'games', label: 'My Games', icon: Calendar },
    { id: 'groups', label: 'My Groups', icon: Users },
    { id: 'saved', label: 'Saved', icon: Bookmark },
    { id: 'invitations', label: 'Invitations', icon: Bell },
  ];

  return (
    <div className="max-w-5xl mx-auto pt-12 pb-24 px-4 space-y-6 animate-in fade-in duration-500">
      <h1 className="text-3xl font-heading font-black text-brand-forest mb-8">My Activity</h1>

      <div className="flex gap-2 border-b border-black/5 pb-4 mb-8 overflow-x-auto hide-scrollbar">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all ${
              activeTab === t.id 
                ? 'bg-brand-forest text-white shadow-md' 
                : 'bg-white text-gray-500 hover:bg-gray-50 border border-black/5'
            }`}
          >
            <t.icon size={18} />
            {t.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-[32px] p-8 border border-black/5 shadow-sm min-h-[400px]">
        {activeTab === 'games' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-brand-forest mb-6">Upcoming & Past Games</h2>
            {/* Mock Games */}
            {[1, 2].map(i => (
              <div key={i} className="flex justify-between items-center p-4 border rounded-2xl hover:border-brand-lime transition-colors">
                <div>
                  <h4 className="font-bold text-lg text-brand-forest">5v5 Turf War {i}</h4>
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <Calendar size={14} /> Tomorrow at 18:00
                    <span className="mx-2">•</span>
                    <MapPin size={14} /> Green Arena
                  </p>
                </div>
                <Link to="/games/1" className="bg-gray-100 p-3 rounded-xl hover:bg-brand-lime/20 text-brand-forest transition">
                  <ChevronRight size={20} />
                </Link>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'groups' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-brand-forest mb-6">Groups I'm In</h2>
            {/* Mock Groups */}
            <div className="flex justify-between items-center p-4 border rounded-2xl hover:border-brand-lime transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-forest text-white flex items-center justify-center rounded-xl font-bold">WW</div>
                <div>
                  <h4 className="font-bold text-lg text-brand-forest">Weekend Warriors</h4>
                  <p className="text-sm text-gray-500">24 Members • Football</p>
                </div>
              </div>
              <Link to="/groups/weekend-warriors" className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-brand-lime/20 text-brand-forest font-bold transition text-sm">
                View Group
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-brand-forest mb-6">Saved Items</h2>
            <div className="text-center py-12 text-gray-400">
              <Bookmark size={48} className="mx-auto mb-4 opacity-50" />
              <p>You haven't saved any venues, players, or games yet.</p>
            </div>
          </div>
        )}

        {activeTab === 'invitations' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-brand-forest mb-6">Pending Invitations</h2>
            <div className="p-4 border rounded-2xl bg-brand-lime/5 border-brand-lime/20 flex justify-between items-center">
              <div>
                <h4 className="font-bold text-brand-forest">Sunday Smashers</h4>
                <p className="text-sm text-gray-600">Rahul invited you to join this Badminton group.</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-brand-forest text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-flame transition">Accept</button>
                <button className="bg-white border px-4 py-2 rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-50 transition">Decline</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
