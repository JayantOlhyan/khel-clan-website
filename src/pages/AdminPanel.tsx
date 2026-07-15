import React, { useState } from 'react';
import { Settings, MessageCircle, AlertTriangle } from 'lucide-react';

export default function AdminPanel() {
  const [waEnabled, setWaEnabled] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pt-12 pb-24 px-4 animate-in fade-in duration-500">
      <h1 className="text-3xl font-heading font-black text-brand-forest mb-8">Admin Dashboard</h1>

      <div className="bg-white rounded-[32px] p-8 border border-black/5 shadow-sm space-y-8">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4"><Settings size={20}/> Platform Settings</h2>
          <p className="text-gray-500 text-sm mb-4">Manage global platform configurations.</p>
        </div>

        <div className="border-t pt-8">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4"><MessageCircle size={20} className="text-green-500"/> WhatsApp Integration</h2>
          <div className="flex items-start justify-between bg-gray-50 p-6 rounded-2xl border">
            <div>
              <h3 className="font-bold text-brand-forest mb-1">WhatsApp Group Sync</h3>
              <p className="text-sm text-gray-500 mb-4 max-w-md">
                Connect the platform messaging system directly to existing WhatsApp groups for automated roster updates, announcements, and chat mirroring.
              </p>
              
              <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-2 rounded-lg text-sm font-bold">
                <AlertTriangle size={16} /> Beta: API Keys Required
              </div>
            </div>

            <label className="relative inline-flex items-center cursor-pointer mt-2">
              <input type="checkbox" className="sr-only peer" checked={waEnabled} onChange={() => setWaEnabled(!waEnabled)} />
              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-500"></div>
            </label>
          </div>

          {waEnabled && (
            <div className="mt-4 space-y-4 animate-in fade-in slide-in-from-top-2">
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1">WhatsApp Business API Token</label>
                <input type="password" placeholder="Enter API Token..." className="w-full border p-3 rounded-lg outline-none" />
              </div>
              <button className="bg-brand-forest text-white px-6 py-2 rounded-lg font-bold">Save Configuration</button>
            </div>
          )}
        </div>

        <div className="border-t pt-8">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4 text-brand-flame"><AlertTriangle size={20}/> Trust & Safety / Moderation Queue</h2>
          <div className="bg-white border rounded-2xl overflow-hidden">
            <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
              <span className="font-bold text-gray-700">Open Reports (2)</span>
              <button className="text-sm text-brand-forest font-bold">View All</button>
            </div>
            <div className="p-4 border-b flex justify-between items-center">
              <div>
                <p className="font-bold">Player Report: @vikram_rao</p>
                <p className="text-sm text-gray-500">Reason: No-show for 3 consecutive games.</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-red-50 text-red-600 px-3 py-1 rounded font-bold text-sm hover:bg-red-100">Suspend User</button>
                <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded font-bold text-sm hover:bg-gray-200">Dismiss</button>
              </div>
            </div>
            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="font-bold">Group Report: Downtown Kickers</p>
                <p className="text-sm text-gray-500">Reason: Spam / Unrelated links posted in chat.</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-amber-50 text-amber-600 px-3 py-1 rounded font-bold text-sm hover:bg-amber-100">Warn Admin</button>
                <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded font-bold text-sm hover:bg-gray-200">Dismiss</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
