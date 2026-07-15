import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useGameStore } from '../../store/useGameStore';
import type { GameState } from '../../store/useGameStore';
import { useAppStore } from '../../store/useAppStore';
import { ArrowLeft, Users, ShieldAlert, Check, X, Bell, Clock, AlertTriangle } from 'lucide-react';

export default function ManageGame() {
  const { gameId } = useParams<{ gameId: string }>();
  const navigate = useNavigate();
  const { getGameById, manageJoinRequest, updateGameStatus } = useGameStore();
  const { user } = useAppStore();
  
  const game = gameId ? getGameById(gameId) : undefined;
  
  // Announcement state (UI only for mock)
  const [announcement, setAnnouncement] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  if (!game || !user) {
    return <div className="p-20 text-center font-heading font-bold text-brand-forest">Game not found or unauthorized.</div>;
  }

  // Security check: Only organizer can manage
  if (game.organizerId !== user.id) {
    return (
      <div className="p-20 text-center">
        <ShieldAlert size={48} className="mx-auto text-red-500 mb-4" />
        <h1 className="text-3xl font-heading font-black text-brand-forest mb-4">Unauthorized</h1>
        <p className="text-gray-500 font-body mb-8">You are not the organizer of this game.</p>
        <Link to={`/games/${game.id}`} className="bg-brand-forest text-white px-6 py-3 rounded-xl font-heading font-bold">Back to Game</Link>
      </div>
    );
  }

  const pendingPlayers = game.currentPlayers.filter(p => p.status === 'pending');
  const approvedPlayers = game.currentPlayers.filter(p => p.status === 'approved' && p.id !== user.id); // Exclude organizer from list of removable players

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateGameStatus(game.id, e.target.value as GameState);
  };

  const handleSendAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (announcement.trim()) {
      setShowNotification(true);
      setAnnouncement('');
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 animate-in fade-in duration-500">
      
      <div className="flex justify-between items-center mb-8">
        <Link to={`/games/${game.id}`} className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-forest font-bold transition-colors">
          <ArrowLeft size={20} /> Back to Game
        </Link>
        <div className="flex gap-4">
          <select 
            value={game.status} 
            onChange={handleStatusChange}
            className="bg-white border-2 border-brand-lime rounded-xl px-4 py-2 font-heading font-bold text-brand-forest outline-none cursor-pointer"
          >
            <option value="draft">Draft (Hidden)</option>
            <option value="open">Open (Accepting Players)</option>
            <option value="full">Full (No new requests)</option>
            <option value="ongoing">Ongoing (Live)</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <Link to={`/games/${game.id}/edit`} className="bg-brand-forest text-white px-6 py-2 rounded-xl font-heading font-bold hover:bg-brand-flame transition-colors flex items-center justify-center">
            Edit Details
          </Link>
        </div>
      </div>

      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-heading font-black text-brand-forest mb-2">Manage: {game.title}</h1>
        <p className="text-gray-500 font-body text-lg">Control participants, announcements, and game status.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Player Management */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Pending Requests */}
          <div className="bg-white rounded-3xl shadow-sm border border-black/5 overflow-hidden">
            <div className="bg-brand-flame/10 px-6 py-4 border-b border-brand-flame/20 flex items-center justify-between">
              <h3 className="font-heading font-black text-brand-flame flex items-center gap-2">
                <Clock size={18} /> Pending Requests ({pendingPlayers.length})
              </h3>
            </div>
            <div className="p-0">
              {pendingPlayers.length === 0 ? (
                <div className="p-8 text-center text-gray-400 font-body text-sm">No pending join requests.</div>
              ) : (
                <ul className="divide-y divide-black/5">
                  {pendingPlayers.map(player => (
                    <li key={player.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-flame text-white flex items-center justify-center font-bold">
                          {player.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-heading font-bold text-brand-forest">{player.name}</p>
                          <Link to={`/players/${player.username}`} className="text-xs text-brand-flame hover:underline">View Profile</Link>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => manageJoinRequest(game.id, player.id, 'reject')}
                          className="w-10 h-10 rounded-full bg-red-100 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
                          title="Reject"
                        >
                          <X size={18} />
                        </button>
                        <button 
                          onClick={() => manageJoinRequest(game.id, player.id, 'approve')}
                          className="w-10 h-10 rounded-full bg-brand-lime/30 text-brand-forest flex items-center justify-center hover:bg-brand-lime transition-colors"
                          title="Approve"
                        >
                          <Check size={18} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Approved Players */}
          <div className="bg-white rounded-3xl shadow-sm border border-black/5 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-black/5 flex items-center justify-between">
              <h3 className="font-heading font-black text-brand-forest flex items-center gap-2">
                <Users size={18} /> Roster ({approvedPlayers.length + 1}/{game.requiredPlayers})
              </h3>
            </div>
            <div className="p-0">
              <ul className="divide-y divide-black/5">
                {/* Organizer (Immutable) */}
                <li className="p-4 flex items-center justify-between bg-brand-forest/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-forest text-brand-lime flex items-center justify-center font-bold">You</div>
                    <div>
                      <p className="font-heading font-bold text-brand-forest">{user.name}</p>
                      <span className="text-[10px] font-bold text-brand-forest uppercase tracking-wider">Organizer</span>
                    </div>
                  </div>
                </li>
                
                {approvedPlayers.length === 0 ? (
                  <li className="p-8 text-center text-gray-400 font-body text-sm">No other players have joined yet.</li>
                ) : (
                  approvedPlayers.map(player => (
                    <li key={player.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 text-brand-forest flex items-center justify-center font-bold">
                          {player.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-heading font-bold text-brand-forest">{player.name}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          if(confirm(`Are you sure you want to remove ${player.name} from the game?`)) {
                            manageJoinRequest(game.id, player.id, 'remove');
                          }
                        }}
                        className="text-xs font-bold text-red-500 hover:text-red-700 hover:underline"
                      >
                        Remove
                      </button>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>

        </div>

        {/* Right Column: Actions */}
        <div className="space-y-6">
          
          <div className="bg-brand-forest rounded-3xl shadow-sm p-6 text-white">
            <h3 className="font-heading font-black text-xl text-brand-lime mb-4 flex items-center gap-2">
              <Bell size={20} /> Announce
            </h3>
            <p className="text-sm text-gray-300 font-body mb-4">Send a push notification and email to all approved players.</p>
            <form onSubmit={handleSendAnnouncement}>
              <textarea 
                required
                value={announcement}
                onChange={(e) => setAnnouncement(e.target.value)}
                rows={3}
                placeholder="e.g. Venue changed to Field 2, bring white jerseys!"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 font-body outline-none focus:border-brand-lime transition-colors text-white placeholder-gray-400 mb-4"
              ></textarea>
              <button type="submit" className="w-full bg-brand-lime text-brand-forest px-4 py-3 rounded-xl font-heading font-bold hover:bg-white transition-colors">
                Send Announcement
              </button>
              {showNotification && <p className="text-xs text-brand-lime mt-3 text-center animate-pulse">Announcement sent successfully!</p>}
            </form>
          </div>

          <div className="bg-red-50 rounded-3xl shadow-sm border border-red-100 p-6">
            <h3 className="font-heading font-black text-xl text-red-600 mb-2 flex items-center gap-2">
              <AlertTriangle size={20} /> Danger Zone
            </h3>
            <p className="text-sm text-red-800/70 font-body mb-6">Actions here are irreversible and will notify all participants.</p>
            <button 
              onClick={() => {
                if(confirm("Are you sure you want to cancel this game? This cannot be undone.")) {
                  updateGameStatus(game.id, 'cancelled');
                  navigate('/games');
                }
              }}
              className="w-full bg-red-100 text-red-600 px-4 py-3 rounded-xl font-heading font-bold hover:bg-red-600 hover:text-white transition-colors"
            >
              Cancel Game
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
