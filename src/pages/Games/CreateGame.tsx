import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../../store/useGameStore';
import { useAppStore } from '../../store/useAppStore';
import { useLocationStore } from '../../store/useLocationStore';
import { useSportsStore } from '../../store/useSportsStore';
import { ArrowLeft } from 'lucide-react';

export default function CreateGame() {
  const navigate = useNavigate();
  const { createGame } = useGameStore();
  const { user } = useAppStore();
  const { cities } = useLocationStore();
  const { sports } = useSportsStore();

  const [formData, setFormData] = useState({
    title: '',
    sport: '',
    date: '',
    startTime: '',
    duration: 60,
    venue: '',
    location: '',
    requiredPlayers: 10,
    skillRequirement: 'All Levels' as any,
    ageRestrictions: '',
    genderPreference: 'No preference' as any,
    isPublic: true,
    description: '',
    costPerPlayer: 0,
    equipmentRequired: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const gameId = createGame({
      ...formData,
      equipmentRequired: formData.equipmentRequired.split(',').map(s => s.trim()).filter(Boolean),
      organizerId: user.id
    });

    navigate(`/games/${gameId}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (!user) {
    return <div className="p-20 text-center font-heading font-bold text-brand-forest">Please log in to host a game.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-in fade-in duration-500">
      <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-forest font-bold transition-colors mb-6">
        <ArrowLeft size={20} /> Back
      </button>

      <div className="bg-white rounded-3xl shadow-sm border border-black/5 p-8">
        <h1 className="text-3xl font-heading font-black text-brand-forest mb-8">Host a New Game</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl text-brand-forest border-b border-black/5 pb-2">Basic Info</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-1">Game Title</label>
                <input required type="text" name="title" value={formData.title} onChange={handleChange} className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-3 font-body outline-none focus:border-brand-lime transition-colors" placeholder="e.g. Sunday Morning 5v5" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Sport</label>
                <select required name="sport" value={formData.sport} onChange={handleChange} className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-3 font-body outline-none focus:border-brand-lime transition-colors">
                  <option value="">Select Sport</option>
                  {sports.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">City</label>
                <select required name="location" value={formData.location} onChange={handleChange} className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-3 font-body outline-none focus:border-brand-lime transition-colors">
                  <option value="">Select City</option>
                  {cities.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-1">Venue</label>
                <input required type="text" name="venue" value={formData.venue} onChange={handleChange} className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-3 font-body outline-none focus:border-brand-lime transition-colors" placeholder="e.g. Green Arena Turf" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl text-brand-forest border-b border-black/5 pb-2 mt-8">Timing & Capacity</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Date</label>
                <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-3 font-body outline-none focus:border-brand-lime transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Start Time</label>
                <input required type="time" name="startTime" value={formData.startTime} onChange={handleChange} className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-3 font-body outline-none focus:border-brand-lime transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Duration (minutes)</label>
                <input required type="number" min="30" step="15" name="duration" value={formData.duration} onChange={handleChange} className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-3 font-body outline-none focus:border-brand-lime transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Total Players Required</label>
                <input required type="number" min="2" name="requiredPlayers" value={formData.requiredPlayers} onChange={handleChange} className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-3 font-body outline-none focus:border-brand-lime transition-colors" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl text-brand-forest border-b border-black/5 pb-2 mt-8">Requirements & Preferences</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Skill Requirement</label>
                <select name="skillRequirement" value={formData.skillRequirement} onChange={handleChange} className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-3 font-body outline-none focus:border-brand-lime transition-colors">
                  <option value="All Levels">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Gender Preference</label>
                <select name="genderPreference" value={formData.genderPreference} onChange={handleChange} className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-3 font-body outline-none focus:border-brand-lime transition-colors">
                  <option value="No preference">No preference</option>
                  <option value="Men only">Men only</option>
                  <option value="Women only">Women only</option>
                  <option value="Mixed">Mixed</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Cost Per Player (₹)</label>
                <input required type="number" min="0" name="costPerPlayer" value={formData.costPerPlayer} onChange={handleChange} className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-3 font-body outline-none focus:border-brand-lime transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Age Restrictions (Optional)</label>
                <input type="text" name="ageRestrictions" value={formData.ageRestrictions} onChange={handleChange} className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-3 font-body outline-none focus:border-brand-lime transition-colors" placeholder="e.g. 18+, Under 16" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Equipment Needed (Comma separated)</label>
              <input type="text" name="equipmentRequired" value={formData.equipmentRequired} onChange={handleChange} className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-3 font-body outline-none focus:border-brand-lime transition-colors" placeholder="e.g. Non-marking shoes, Racquet" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Description</label>
              <textarea required rows={4} name="description" value={formData.description} onChange={handleChange} className="w-full bg-gray-50 border border-black/10 rounded-xl px-4 py-3 font-body outline-none focus:border-brand-lime transition-colors" placeholder="Tell players what to expect..."></textarea>
            </div>
            
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-black/5">
               <input type="checkbox" id="isPublic" name="isPublic" checked={formData.isPublic} onChange={handleChange} className="w-5 h-5 accent-brand-forest" />
               <div>
                 <label htmlFor="isPublic" className="font-bold text-brand-forest block">Make this game public</label>
                 <span className="text-sm text-gray-500 font-body">Public games are visible on the open directory. Private games require a direct invite link.</span>
               </div>
            </div>
          </div>

          <div className="pt-8 border-t border-black/5 flex justify-end gap-4">
            <button type="button" onClick={() => navigate(-1)} className="px-6 py-3 font-heading font-bold text-gray-500 hover:text-brand-forest transition-colors">Cancel</button>
            <button type="submit" className="bg-brand-forest text-white px-8 py-3 rounded-xl font-heading font-black hover:bg-brand-lime hover:text-brand-forest transition-all">Publish Game</button>
          </div>

        </form>
      </div>
    </div>
  );
}
