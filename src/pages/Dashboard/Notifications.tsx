import React from 'react';
import { Bell, UserPlus, Calendar, Trophy, MessageSquare, AlertCircle, X, Check, CheckCircle2 } from 'lucide-react';
import { useNotificationStore } from '../../store/useNotificationStore';
import type { NotificationType } from '../../store/useNotificationStore';

const getIcon = (type: NotificationType) => {
  switch(type) {
    case 'game_invitation': return Calendar;
    case 'join_request': return UserPlus;
    case 'request_accepted': return CheckCircle2;
    case 'request_rejected': return X;
    case 'group_invitation': return UserPlus;
    case 'game_reminder': return Bell;
    case 'game_update': return AlertCircle;
    case 'game_cancellation': return X;
    case 'new_message': return MessageSquare;
    case 'group_announcement': return Bell;
    default: return Bell;
  }
};

const getColor = (type: NotificationType) => {
  switch(type) {
    case 'game_invitation': return 'text-blue-500 bg-blue-500/10';
    case 'join_request': return 'text-brand-forest bg-brand-lime/20';
    case 'request_accepted': return 'text-green-500 bg-green-500/10';
    case 'request_rejected': return 'text-red-500 bg-red-500/10';
    case 'game_cancellation': return 'text-red-500 bg-red-500/10';
    default: return 'text-brand-forest bg-gray-100';
  }
};

export default function Notifications() {
  const { notifications, markAsRead, markAllAsRead, deleteNotification, handleAction } = useNotificationStore();

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="max-w-3xl mx-auto space-y-6 pt-12 pb-24 px-4 animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-8 border-b pb-4">
        <h1 className="text-3xl font-heading font-black text-brand-forest flex items-center gap-3">
          Notifications {unreadCount > 0 && <span className="bg-brand-flame text-white text-sm px-3 py-1 rounded-full">{unreadCount}</span>}
        </h1>
        {unreadCount > 0 && (
          <button onClick={markAllAsRead} className="text-sm font-bold text-gray-500 hover:text-brand-forest transition">Mark all as read</button>
        )}
      </div>

      <div className="bg-white rounded-[32px] shadow-sm border border-black/5 overflow-hidden">
        {notifications.length === 0 ? (
          <div className="p-12 text-center text-gray-500 font-body">No notifications to display.</div>
        ) : (
          notifications.map((n) => {
            const Icon = getIcon(n.type);
            const colorClass = getColor(n.type);
            
            return (
              <div 
                key={n.id} 
                onClick={() => !n.read && markAsRead(n.id)}
                className={`p-6 border-b border-black/5 last:border-0 flex gap-4 transition-colors relative group ${!n.read ? 'bg-brand-lime/5 cursor-pointer hover:bg-brand-lime/10' : 'hover:bg-gray-50'}`}
              >
                {!n.read && <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-lime"></div>}
                
                <div className={`w-12 h-12 rounded-full ${colorClass} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={24} />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className={`font-heading ${!n.read ? 'font-black text-brand-forest' : 'font-bold text-gray-700'}`}>{n.title}</h4>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-400 font-body">{n.timestamp}</span>
                      <button onClick={(e) => { e.stopPropagation(); deleteNotification(n.id); }} className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition"><X size={16}/></button>
                    </div>
                  </div>
                  <p className={`font-body text-sm mb-3 ${!n.read ? 'text-gray-800' : 'text-gray-500'}`}>{n.message}</p>
                  
                  {n.actionRequired && (
                    <div className="flex gap-2">
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleAction(n.id, 'accept'); }}
                        className="bg-brand-forest text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-brand-flame transition-colors"
                      >
                        Accept
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleAction(n.id, 'decline'); }}
                        className="bg-gray-100 text-gray-600 text-xs font-bold px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        Decline
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
