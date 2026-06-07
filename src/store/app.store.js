import { create } from "zustand";

export const useAppStore = create((set) => ({
  theme: "dark",

  sidebarOpen: false,

  online: navigator.onLine,

  globalLoading: false,

  notifications: [],

  toggleSidebar: () => {
    set((state) => ({
      sidebarOpen: !state.sidebarOpen,
    }));
  },

  openSidebar: () => {
    set({
      sidebarOpen: true,
    });
  },

  closeSidebar: () => {
    set({
      sidebarOpen: false,
    });
  },

  setTheme: (theme) => {
    set({
      theme,
    });
  },

  setOnline: (status) => {
    set({
      online: status,
    });
  },

  setGlobalLoading: (status) => {
    set({
      globalLoading: status,
    });
  },

  addNotification: (notification) => {
    const id = crypto.randomUUID();

    set((state) => ({
      notifications: [
        ...state.notifications,

        {
          id,
          ...notification,
        },
      ],
    }));

    return id;
  },

  removeNotification: (id) => {
    set((state) => ({
      notifications: state.notifications.filter((item) => item.id !== id),
    }));
  },

  clearNotifications: () => {
    set({
      notifications: [],
    });
  },
}));
