import { NavItem } from './types';

export const sidebarItems: NavItem[] = [
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'Budget', path: '/budget', icon: 'wallet' },
  { label: 'Transactions', path: '/transactions', icon: 'credit-card-alt' },
  { label: 'Goals', path: '/goals', icon: 'coin-stack' },
  { label: 'Settings', path: '/settings', icon: 'cog' },
  // { label: "Login", path: '/login', icon: "log-in-circle" },
  //   { label: "Logout", path: "/logout", icon: "log-out-circle" },
];
