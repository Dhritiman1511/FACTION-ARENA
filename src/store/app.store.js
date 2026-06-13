import { create } from "zustand";

export const useAppStore = create((set) => ({
  theme: "dark",

  sidebarOpen: false,

  online: typeof navigator !== "undefined" ? navigator.onLine : true,

  globalLoading: false,

  notifications: [],

  sidebarCollapsed:
    typeof localStorage !== "undefined" &&
    localStorage.getItem("sidebar_collapsed") === "true",

  toggleSidebarCollapse: () =>
    set((state) => {
      const next = !state.sidebarCollapsed;

      localStorage.setItem("sidebar_collapsed", next);

      return {
        sidebarCollapsed: next,
      };
    }),

  setSidebarCollapsed: (collapsed) => {
    localStorage.setItem("sidebar_collapsed", collapsed);

    set({
      sidebarCollapsed: collapsed,
    });
  },

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
