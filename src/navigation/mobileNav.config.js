import { sidebarItems } from './sidebar.config';

export const mobileNavItems = sidebarItems.filter(
  (item) =>
    [
      'dashboard',
      'practice',
      'contests',
      'leaderboard',
      'friends',
    ].includes(item.id)
);
