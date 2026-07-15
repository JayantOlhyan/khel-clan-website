import React, { useState } from 'react';
import { Search as SearchIcon, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Stores
import { usePlayerStore } from '../../store/usePlayerStore';
import { useGameStore } from '../../store/useGameStore';
import { useGroupStore } from '../../store/useGroupStore';
import { useSportsStore } from '../../store/useSportsStore';
import { useVenueStore } from '../../store/useVenueStore';
import { useTournamentStore } from '../../store/useTournamentStore';

type Category = 'Players' | 'Games' | 'Groups' | 'Sports' | 'Venues' | 'Tournaments';

export default function Search() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('Players');
  const [location, setLocation] = useState('');
  const [sport, setSport] = useState('');

  // Pull data from stores
  const players = usePlayerStore(s => s.players);
  const games = useGameStore(s => s.games);
  const groups = useGroupStore(s => s.groups);
  const sports = useSportsStore(s => s.sports);
  const venues = useVenueStore(s => s.venues);
  const tournaments = useTournamentStore(s => s.tournaments);

  const renderResults = () => {
    if (!query && !location && !sport) return <p className="text-gray-500 text-center py-20">Enter a search term to begin.</p>;

    const q = query.toLowerCase();
    const l = location.toLowerCase();
    const s = sport.toLowerCase();

    if (category === 'Players') {
      const res = players.filter(p => 
        (p.name.toLowerCase().includes(q) || p.username.toLowerCase().includes(q)) &&
        (!l || (p.location && p.location.toLowerCase().includes(l))) &&
        (!s || (p.preferredSports && p.preferredSports.some(sp => sp.toLowerCase().includes(s))))
      );
      return res.map(p => (
        <Link key={p.id} to={`/players/${p.username}`} className="block border p-4 rounded-xl hover:shadow">
          <p className="font-bold">{p.name}</p>
          <p className="text-sm text-gray-500">{p.location}</p>
        </Link>
      ));
    }
    
    if (category === 'Games') {
      const res = games.filter(g => 
        (g.sport.toLowerCase().includes(q) || g.venue.toLowerCase().includes(q)) &&
        (!l || g.location.toLowerCase().includes(l)) &&
        (!s || g.sport.toLowerCase().includes(s))
      );
      return res.map(g => (
        <Link key={g.id} to={`/games/${g.id}`} className="block border p-4 rounded-xl hover:shadow">
          <p className="font-bold">{g.sport} Game at {g.venue}</p>
          <p className="text-sm text-gray-500">{g.date} • {g.location}</p>
        </Link>
      ));
    }

    if (category === 'Groups') {
      const res = groups.filter(g => 
        (g.name.toLowerCase().includes(q) || g.description.toLowerCase().includes(q)) &&
        (!l || g.location.toLowerCase().includes(l)) &&
        (!s || g.sport.toLowerCase().includes(s))
      );
      return res.map(g => (
        <Link key={g.id} to={`/groups/${g.slug}`} className="block border p-4 rounded-xl hover:shadow">
          <p className="font-bold">{g.name}</p>
          <p className="text-sm text-gray-500">{g.sport} • {g.location}</p>
        </Link>
      ));
    }

    if (category === 'Sports') {
      const res = sports.filter(sp => sp.name.toLowerCase().includes(q));
      return res.map(sp => (
        <Link key={sp.id} to={`/sports/${sp.name.toLowerCase()}`} className="block border p-4 rounded-xl hover:shadow">
          <p className="font-bold">{sp.name}</p>
        </Link>
      ));
    }

    if (category === 'Venues') {
      const res = venues.filter(v => 
        v.name.toLowerCase().includes(q) &&
        (!l || v.location.toLowerCase().includes(l)) &&
        (!s || v.sports.some(sp => sp.toLowerCase().includes(s)))
      );
      return res.map(v => (
        <Link key={v.id} to={`/venues/${v.slug}`} className="block border p-4 rounded-xl hover:shadow">
          <p className="font-bold">{v.name}</p>
          <p className="text-sm text-gray-500">{v.location}</p>
        </Link>
      ));
    }

    if (category === 'Tournaments') {
      const res = tournaments.filter(t => 
        t.name.toLowerCase().includes(q) &&
        (!l || t.location.toLowerCase().includes(l)) &&
        (!s || t.sport.toLowerCase().includes(s))
      );
      return res.map(t => (
        <Link key={t.id} to={`/tournaments/${t.slug}`} className="block border p-4 rounded-xl hover:shadow">
          <p className="font-bold">{t.name}</p>
          <p className="text-sm text-gray-500">{t.sport} • {t.location}</p>
        </Link>
      ));
    }

    return null;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pt-12 pb-24 px-4">
      <h1 className="text-3xl font-heading font-black text-brand-forest">Global Search</h1>
      
      <div className="flex gap-2 bg-white p-2 rounded-2xl shadow-sm border mb-4">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" value={query} onChange={e => setQuery(e.target.value)}
            placeholder="Search..." className="w-full py-3 pl-12 pr-4 outline-none font-bold" autoFocus
          />
        </div>
        <div className="w-1/3 relative border-l">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" value={location} onChange={e => setLocation(e.target.value)}
            placeholder="Location..." className="w-full py-3 pl-12 pr-4 outline-none"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 border-b pb-4">
        {(['Players', 'Games', 'Groups', 'Sports', 'Venues', 'Tournaments'] as Category[]).map(c => (
          <button 
            key={c} onClick={() => { setCategory(c); setSport(''); }}
            className={`px-4 py-2 rounded-full font-bold text-sm transition ${category === c ? 'bg-brand-forest text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
          >
            {c}
          </button>
        ))}
      </div>

      {category !== 'Sports' && (
        <div className="flex gap-4">
          <input 
            type="text" value={sport} onChange={e => setSport(e.target.value)}
            placeholder="Filter by sport..." className="border p-2 rounded-lg outline-none text-sm w-48"
          />
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        {renderResults()}
      </div>
    </div>
  );
}
