import React, { useState } from 'react';
import { User, Shield, Bell, Key, LogOut, Settings as SettingsIcon } from 'lucide-react';

type Tab = 'profile' | 'account' | 'privacy' | 'notifications' | 'security';

export default function Settings() {
  const [activeTab, setActiveTab] = useState<Tab>('profile');

  const tabs: { id: Tab, label: string, icon: React.ElementType }[] = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'account', label: 'Account', icon: SettingsIcon },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Key },
  ];

  return (
    <div className="max-w-6xl mx-auto pt-12 pb-24 px-4 flex gap-8 animate-in fade-in duration-500">
      
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0">
        <h1 className="text-3xl font-heading font-black text-brand-forest mb-8">Settings</h1>
        <nav className="space-y-2">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                activeTab === t.id 
                  ? 'bg-brand-forest text-white' 
                  : 'text-gray-500 hover:bg-gray-100 hover:text-brand-forest'
              }`}
            >
              <t.icon size={18} />
              {t.label}
            </button>
          ))}
          <div className="pt-8 mt-8 border-t">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-red-500 hover:bg-red-50 transition-all">
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-white rounded-[32px] p-8 md:p-12 border border-black/5 shadow-sm">
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-forest mb-6">Profile Settings</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-500 mb-1">Full Name</label>
                <input type="text" defaultValue="Jayant" className="w-full border rounded-lg p-3 outline-none focus:border-brand-lime" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-500 mb-1">Username</label>
                <input type="text" defaultValue="jayant" className="w-full border rounded-lg p-3 outline-none focus:border-brand-lime" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-500 mb-1">Bio</label>
              <textarea rows={3} className="w-full border rounded-lg p-3 outline-none focus:border-brand-lime" defaultValue="Looking for casual weekend games."></textarea>
            </div>
            <button className="bg-brand-forest text-white px-6 py-2 rounded-lg font-bold">Save Changes</button>
          </div>
        )}

        {activeTab === 'account' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-forest mb-6">Account & Preferences</h2>
            <div>
              <label className="block text-sm font-bold text-gray-500 mb-1">Location</label>
              <input type="text" defaultValue="Delhi" className="w-full border rounded-lg p-3 outline-none focus:border-brand-lime" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-500 mb-1">Preferred Sports (comma separated)</label>
              <input type="text" defaultValue="Football, Cricket" className="w-full border rounded-lg p-3 outline-none focus:border-brand-lime" />
            </div>
            <button className="bg-brand-forest text-white px-6 py-2 rounded-lg font-bold">Save Changes</button>
            
            <div className="mt-12 pt-8 border-t border-red-100">
              <h3 className="text-red-500 font-bold mb-2">Danger Zone</h3>
              <p className="text-sm text-gray-500 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
              <button className="border border-red-500 text-red-500 px-6 py-2 rounded-lg font-bold hover:bg-red-50">Delete Account</button>
            </div>
          </div>
        )}

        {activeTab === 'privacy' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-forest mb-6">Privacy Controls</h2>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-brand-lime" />
                <span className="font-bold text-gray-700">Make my profile public</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 accent-brand-lime" />
                <span className="font-bold text-gray-700">Show my email address to connections</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 accent-brand-lime" />
                <span className="font-bold text-gray-700">Show my phone number to connections</span>
              </label>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-forest mb-6">Notification Preferences</h2>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 border rounded-xl">
                <div>
                  <p className="font-bold">Game Invites</p>
                  <p className="text-sm text-gray-500">Notify when I am invited to a game.</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-brand-lime" />
              </label>
              <label className="flex items-center justify-between p-4 border rounded-xl">
                <div>
                  <p className="font-bold">Messages</p>
                  <p className="text-sm text-gray-500">Notify when I receive a direct message.</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-brand-lime" />
              </label>
              <label className="flex items-center justify-between p-4 border rounded-xl">
                <div>
                  <p className="font-bold">Group Updates</p>
                  <p className="text-sm text-gray-500">Notify when a group makes an announcement.</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-brand-lime" />
              </label>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-forest mb-6">Security & Password</h2>
            <div>
              <label className="block text-sm font-bold text-gray-500 mb-1">Current Password</label>
              <input type="password" placeholder="••••••••" className="w-full border rounded-lg p-3 outline-none focus:border-brand-lime" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-500 mb-1">New Password</label>
              <input type="password" placeholder="••••••••" className="w-full border rounded-lg p-3 outline-none focus:border-brand-lime" />
            </div>
            <button className="bg-brand-forest text-white px-6 py-2 rounded-lg font-bold">Update Password</button>
          </div>
        )}
      </div>

    </div>
  );
}
