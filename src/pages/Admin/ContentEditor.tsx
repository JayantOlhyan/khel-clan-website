// src/pages/Admin/ContentEditor.tsx
import React from 'react';
import { Plus, Edit2, Trash2, Tag } from 'lucide-react';
import { games } from '../../data/games';
import { blogPosts } from '../../data/blogPosts';

export default function ContentEditor() {
  return (
    <div className="space-y-12">
      {/* Games Management */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center space-x-2">
            <Tag className="text-brand-lime" />
            <span>Manage Games</span>
          </h2>
          <button className="flex items-center space-x-2 bg-brand-forest text-white px-4 py-2 rounded-lg hover:bg-black transition">
            <Plus size={18} />
            <span>Add New Game</span>
          </button>
        </div>

        <div className="grid gap-4">
          {games.map((game) => (
            <div key={game.id} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center justify-between group hover:bg-white hover:shadow-md transition">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center font-bold text-gray-400">
                  {game.sport[0]}
                </div>
                <div>
                  <h4 className="font-bold">{game.title}</h4>
                  <p className="text-sm text-gray-500">{game.location} • ₹{game.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition">
                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600"><Edit2 size={16} /></button>
                <button className="p-2 hover:bg-red-50 rounded-lg text-red-600"><Trash2 size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Management */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center space-x-2">
            <Tag className="text-brand-lime" />
            <span>Blog Posts</span>
          </h2>
          <button className="flex items-center space-x-2 bg-brand-forest text-white px-4 py-2 rounded-lg hover:bg-black transition">
            <Plus size={18} />
            <span>New Post</span>
          </button>
        </div>

        <div className="grid gap-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center justify-between group hover:bg-white hover:shadow-md transition">
              <div className="flex items-center space-x-4">
                <img src={post.img} alt="" className="w-12 h-12 rounded-lg object-cover" />
                <div>
                  <h4 className="font-bold">{post.title}</h4>
                  <p className="text-sm text-gray-500">{post.author} • {post.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition">
                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600"><Edit2 size={16} /></button>
                <button className="p-2 hover:bg-red-50 rounded-lg text-red-600"><Trash2 size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
