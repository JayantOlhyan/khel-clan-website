import { create } from 'zustand';

export type NotificationType = 
  | 'game_invitation'
  | 'join_request'
  | 'request_accepted'
  | 'request_rejected'
  | 'group_invitation'
  | 'game_reminder'
  | 'game_update'
  | 'game_cancellation'
  | 'new_message'
  | 'group_announcement';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionRequired?: boolean;
}

interface NotificationStore {
  notifications: Notification[];
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  deleteNotification: (id: string) => void;
  handleAction: (id: string, action: 'accept' | 'decline') => void;
}

const mockNotifications: Notification[] = [
  {
    id: 'n1',
    type: 'game_invitation',
    title: 'Game Invitation',
    message: 'Rahul Sharma invited you to play 5v5 Football at Turf Arena.',
    timestamp: '10 mins ago',
    read: false,
    actionRequired: true,
  },
  {
    id: 'n2',
    type: 'join_request',
    title: 'Join Request',
    message: 'Priya Patel requested to join your Badminton Doubles game.',
    timestamp: '1 hour ago',
    read: false,
    actionRequired: true,
  },
  {
    id: 'n3',
    type: 'game_reminder',
    title: 'Game Reminder',
    message: 'Your Cricket match at Sector 14 starts in 2 hours.',
    timestamp: '2 hours ago',
    read: true,
  },
  {
    id: 'n4',
    type: 'group_announcement',
    title: 'Weekend Warriors',
    message: 'The regular Sunday game has been moved to 8 AM.',
    timestamp: '1 day ago',
    read: true,
  },
];

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: mockNotifications,
  
  markAsRead: (id) => set((state) => ({
    notifications: state.notifications.map(n => n.id === id ? { ...n, read: true } : n)
  })),

  markAllAsRead: () => set((state) => ({
    notifications: state.notifications.map(n => ({ ...n, read: true }))
  })),

  deleteNotification: (id) => set((state) => ({
    notifications: state.notifications.filter(n => n.id !== id)
  })),

  handleAction: (id, action) => set((state) => ({
    notifications: state.notifications.map(n => 
      n.id === id ? { ...n, read: true, actionRequired: false, message: `You ${action}ed this request.` } : n
    )
  })),
}));
