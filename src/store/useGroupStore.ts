import { create } from 'zustand';

export interface GroupMember {
  id: string;
  name: string;
  role: 'admin' | 'moderator' | 'member';
  status: 'approved' | 'pending';
}

export interface Group {
  id: string;
  slug: string;
  name: string;
  description: string;
  sport: string;
  location: string;
  privacy: 'public' | 'private';
  members: GroupMember[];
  announcements: { id: string, text: string, date: string }[];
}

interface GroupStore {
  groups: Group[];
  getGroup: (slug: string) => Group | undefined;
  createGroup: (g: Omit<Group, 'id' | 'slug' | 'members' | 'announcements'>, userId: string, userName: string) => string;
  updateGroup: (id: string, data: Partial<Group>) => void;
  joinGroup: (id: string, user: {id: string, name: string}) => void;
  manageMember: (groupId: string, memberId: string, action: 'approve' | 'reject' | 'remove') => void;
  addAnnouncement: (groupId: string, text: string) => void;
}

export const useGroupStore = create<GroupStore>((set, get) => ({
  groups: [
    {
      id: 'grp1', slug: 'delhi-smashers', name: 'Delhi Smashers', description: 'Weekend badminton warriors.',
      sport: 'Badminton', location: 'Delhi', privacy: 'public',
      members: [{ id: 'u1', name: 'Rahul S.', role: 'admin', status: 'approved' }],
      announcements: [{ id: 'a1', text: 'Tournament next week!', date: new Date().toISOString() }]
    }
  ],
  getGroup: (slug) => get().groups.find(g => g.slug === slug),
  createGroup: (data, userId, userName) => {
    const id = `grp${Date.now()}`;
    const slug = data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    set(s => ({
      groups: [...s.groups, {
        ...data, id, slug, announcements: [],
        members: [{ id: userId, name: userName, role: 'admin', status: 'approved' }]
      }]
    }));
    return slug;
  },
  updateGroup: (id, data) => set(s => ({ groups: s.groups.map(g => g.id === id ? { ...g, ...data } : g) })),
  joinGroup: (id, user) => set(s => ({
    groups: s.groups.map(g => {
      if (g.id !== id) return g;
      const status = g.privacy === 'public' ? 'approved' : 'pending';
      if (g.members.some(m => m.id === user.id)) return g;
      return { ...g, members: [...g.members, { id: user.id, name: user.name, role: 'member', status }] };
    })
  })),
  manageMember: (groupId, memberId, action) => set(s => ({
    groups: s.groups.map(g => {
      if (g.id !== groupId) return g;
      if (action === 'remove' || action === 'reject') {
        return { ...g, members: g.members.filter(m => m.id !== memberId) };
      }
      if (action === 'approve') {
        return { ...g, members: g.members.map(m => m.id === memberId ? { ...m, status: 'approved' as const } : m) };
      }
      return g;
    })
  })),
  addAnnouncement: (groupId, text) => set(s => ({
    groups: s.groups.map(g => g.id === groupId ? {
      ...g, announcements: [{ id: `a${Date.now()}`, text, date: new Date().toISOString() }, ...g.announcements]
    } : g)
  }))
}));
