import React, { useState } from 'react';
import { useSportsStore, type Sport } from '../../store/useSportsStore';
import { Save, AlertCircle, Search, Edit2 } from 'lucide-react';

export default function SportsManager() {
  const { sports, updateSport } = useSportsStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [editingSport, setEditingSport] = useState<Sport | null>(null);

  const filteredSports = sports.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingSport) {
      updateSport(editingSport.id, editingSport);
      setEditingSport(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-heading font-black text-brand-forest">Sports Manager</h2>
          <p className="text-gray-500 text-sm font-body">Manage active sports, pricing, and venues.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Sports List */}
        <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-[600px]">
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search sports..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-lime outline-none"
              />
            </div>
          </div>
          <div className="overflow-y-auto flex-grow p-2">
            {filteredSports.map(sport => (
              <button 
                key={sport.id}
                onClick={() => setEditingSport(sport)}
                className={`w-full text-left p-3 rounded-xl mb-1 flex items-center justify-between transition-colors ${editingSport?.id === sport.id ? 'bg-brand-forest text-white' : 'hover:bg-gray-50 text-gray-700'}`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${sport.isActive ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="font-bold text-sm">{sport.name}</span>
                </div>
                <Edit2 size={14} className={editingSport?.id === sport.id ? 'text-brand-lime' : 'text-gray-400'} />
              </button>
            ))}
          </div>
        </div>

        {/* Edit Form */}
        <div className="lg:col-span-2">
          {editingSport ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-heading font-black text-brand-forest flex items-center">
                  Editing: <span className="text-brand-lime ml-2">{editingSport.name}</span>
                </h3>
              </div>
              
              <form onSubmit={handleSave} className="space-y-5">
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <input 
                    type="checkbox" 
                    id="isActive"
                    checked={editingSport.isActive}
                    onChange={(e) => setEditingSport({...editingSport, isActive: e.target.checked})}
                    className="w-5 h-5 text-brand-forest focus:ring-brand-lime rounded"
                  />
                  <div>
                    <label htmlFor="isActive" className="font-bold text-brand-forest cursor-pointer">Active Status</label>
                    <p className="text-xs text-gray-500">If unchecked, the sport will show as unavailable to users.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Pricing Configuration</label>
                    <input 
                      type="text" 
                      value={editingSport.pricing}
                      onChange={(e) => setEditingSport({...editingSport, pricing: e.target.value})}
                      className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-lime outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Venues (comma separated)</label>
                    <input 
                      type="text" 
                      value={editingSport.venues.join(', ')}
                      onChange={(e) => setEditingSport({...editingSport, venues: e.target.value.split(',').map(v => v.trim())})}
                      className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-lime outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Overview Details</label>
                  <textarea 
                    rows={4}
                    value={editingSport.overview}
                    onChange={(e) => setEditingSport({...editingSport, overview: e.target.value})}
                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-lime outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Skill Levels (comma separated)</label>
                  <input 
                    type="text" 
                    value={editingSport.skillLevels.join(', ')}
                    onChange={(e) => setEditingSport({...editingSport, skillLevels: e.target.value.split(',').map(s => s.trim())})}
                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-lime outline-none"
                  />
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-end">
                  <button type="submit" className="bg-brand-forest text-white px-6 py-2 rounded-xl font-bold flex items-center space-x-2 hover:bg-black transition min-h-[48px]">
                    <Save size={18} />
                    <span>Save Changes</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 flex flex-col items-center justify-center text-center h-[600px]">
              <AlertCircle size={48} className="text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-400 mb-2">No Sport Selected</h3>
              <p className="text-sm text-gray-400">Select a sport from the list to view and edit its details.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
