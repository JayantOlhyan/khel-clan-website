import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGroupStore } from '../../store/useGroupStore';
import { useAppStore } from '../../store/useAppStore';

export default function CreateGroup() {
  const nav = useNavigate();
  const { createGroup } = useGroupStore();
  const { user } = useAppStore();
  const [data, setData] = useState({ name: '', description: '', sport: 'Football', location: 'Delhi', privacy: 'public' as 'public' | 'private' });

  if (!user) return <div className="p-20 text-center">Please log in.</div>;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = createGroup(data, user.id, user.name);
    nav(`/groups/${slug}`);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-heading font-black mb-8">Create Group</h1>
      <form onSubmit={submit} className="space-y-4">
        <input required placeholder="Group Name" className="w-full border p-3 rounded-lg" onChange={e => setData({...data, name: e.target.value})} />
        <textarea required placeholder="Description" className="w-full border p-3 rounded-lg" onChange={e => setData({...data, description: e.target.value})} />
        <div className="grid grid-cols-2 gap-4">
          <input required placeholder="Sport" value={data.sport} className="w-full border p-3 rounded-lg" onChange={e => setData({...data, sport: e.target.value})} />
          <input required placeholder="Location" value={data.location} className="w-full border p-3 rounded-lg" onChange={e => setData({...data, location: e.target.value})} />
        </div>
        <select className="w-full border p-3 rounded-lg" value={data.privacy} onChange={e => setData({...data, privacy: e.target.value as 'public'|'private'})}>
          <option value="public">Public (Anyone can join)</option>
          <option value="private">Private (Request to join)</option>
        </select>
        <button type="submit" className="w-full bg-brand-forest text-white py-3 rounded-lg font-bold">Create</button>
      </form>
    </div>
  );
}
