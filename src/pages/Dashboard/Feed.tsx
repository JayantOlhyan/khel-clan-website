import React from 'react';
import { MessageSquare, Heart, Share2, MoreHorizontal } from 'lucide-react';

export default function Feed() {
  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-heading font-black text-brand-forest">Feed</h1>
        <button className="bg-brand-lime text-brand-forest px-4 py-2 rounded-xl font-heading font-bold text-sm hover:bg-brand-flame hover:text-white transition-colors">Create Post</button>
      </div>

      {/* Post Box */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-black/5 flex gap-4">
        <div className="w-10 h-10 rounded-full bg-brand-forest text-white flex items-center justify-center font-bold flex-shrink-0">You</div>
        <div className="flex-1">
          <input type="text" placeholder="Share a highlight, ask for players, or post an update..." className="w-full bg-gray-50 border border-transparent focus:border-brand-lime rounded-xl p-3 font-body outline-none transition-all" />
        </div>
      </div>

      {/* Posts */}
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-white rounded-3xl p-6 shadow-sm border border-black/5">
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <div>
                <h4 className="font-heading font-bold text-brand-forest text-sm">Player Name {i}</h4>
                <p className="text-xs text-gray-400 font-body">2 hours ago</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-brand-forest"><MoreHorizontal size={20}/></button>
          </div>
          
          <p className="font-body text-gray-700 mb-4">Just had an amazing 5v5 match at Turf Arena! Looking for more players to join our regular weekend group. Hit me up if interested! ⚽️🔥</p>
          
          {i === 1 && (
            <div className="w-full h-64 bg-gray-100 rounded-2xl mb-4 flex items-center justify-center border border-black/5 text-gray-400 font-heading font-bold">
              [Image / Video Attachment]
            </div>
          )}

          <div className="flex items-center gap-6 pt-4 border-t border-black/5 text-gray-500">
            <button className="flex items-center gap-2 hover:text-brand-flame transition-colors"><Heart size={18}/> <span className="text-sm font-bold">24</span></button>
            <button className="flex items-center gap-2 hover:text-brand-forest transition-colors"><MessageSquare size={18}/> <span className="text-sm font-bold">5</span></button>
            <button className="flex items-center gap-2 hover:text-brand-lime transition-colors"><Share2 size={18}/></button>
          </div>
        </div>
      ))}
    </div>
  );
}
