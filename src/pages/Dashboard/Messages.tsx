import React from 'react';
import { Search, Send, Image, Plus } from 'lucide-react';

export default function Messages() {
  return (
    <div className="flex flex-col gap-4 animate-in fade-in duration-500">
      <div className="bg-brand-lime/20 border border-brand-forest/20 text-brand-forest px-4 py-3 rounded-xl font-bold text-sm flex items-center justify-between">
        <span>These messages will automatically sync with your KhelClan WhatsApp groups.</span>
        <a href="/admin" className="underline">Configure in Admin Block</a>
      </div>
      <div className="h-[calc(100vh-200px)] flex gap-6">
      {/* Inbox List */}
      <div className="w-1/3 bg-white rounded-3xl shadow-sm border border-black/5 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-black/5">
          <h2 className="text-xl font-heading font-black text-brand-forest mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input type="text" placeholder="Search chats..." className="w-full bg-gray-50 border border-transparent focus:border-brand-lime rounded-xl py-2 pl-10 pr-4 text-sm outline-none" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className={`p-4 flex gap-3 cursor-pointer hover:bg-gray-50 border-b border-black/5 ${i===1 ? 'bg-brand-lime/10 border-l-4 border-l-brand-lime' : ''}`}>
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                {i === 1 && <div className="absolute bottom-0 right-0 w-3 h-3 bg-brand-flame rounded-full border-2 border-white"></div>}
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-heading font-bold text-sm text-brand-forest truncate">{i===1 ? 'Sunday Smashers' : `Player Name ${i}`}</h4>
                  <span className="text-[10px] text-gray-400 flex-shrink-0">12:30 PM</span>
                </div>
                <p className={`text-xs truncate font-body ${i===1 ? 'font-bold text-brand-forest' : 'text-gray-500'}`}>
                  {i===1 ? 'Are we still on for tomorrow?' : 'Thanks for the game!'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 bg-white rounded-3xl shadow-sm border border-black/5 flex flex-col overflow-hidden">
        {/* Chat Header */}
        <div className="p-4 border-b border-black/5 flex justify-between items-center bg-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            <div>
              <h3 className="font-heading font-bold text-brand-forest">Sunday Smashers</h3>
              <p className="text-xs text-gray-500 font-body">12 members • Badminton</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div className="bg-white p-3 rounded-2xl rounded-tl-sm border border-black/5 shadow-sm max-w-[70%]">
              <p className="text-sm font-body text-gray-700">Hey everyone! Are we still on for tomorrow at 6 PM?</p>
              <span className="text-[10px] text-gray-400 mt-1 block">12:30 PM</span>
            </div>
          </div>
          <div className="flex gap-3 flex-row-reverse">
            <div className="bg-brand-lime/20 p-3 rounded-2xl rounded-tr-sm max-w-[70%]">
              <p className="text-sm font-body text-brand-forest font-medium">Yes! I've already booked the court.</p>
              <span className="text-[10px] text-brand-forest/60 mt-1 block text-right">12:35 PM</span>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-black/5 bg-white flex gap-2 items-center">
          <button className="p-2 text-gray-400 hover:text-brand-forest transition-colors rounded-full hover:bg-gray-100"><Plus size={20}/></button>
          <button className="p-2 text-gray-400 hover:text-brand-forest transition-colors rounded-full hover:bg-gray-100"><Image size={20}/></button>
          <div className="flex-1 relative">
            <input type="text" placeholder="Type a message..." className="w-full bg-gray-50 border border-transparent focus:border-brand-lime rounded-full py-3 pl-4 pr-12 font-body outline-none" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-forest text-white rounded-full flex items-center justify-center hover:bg-brand-flame transition-colors">
              <Send size={14} className="-ml-0.5" />
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
