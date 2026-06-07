import { create } from "zustand";

import { streakService } from "../services";

export const useStreakStore = create((set, get) => ({
  streak: null,
  calendar: null,
  stats: null,

  loading: false,
  error: null,

  lastFetched: null,
  fetchPromise: null,

  fetch: async (force = false) => {
    const state = get();

    // Existing request in progress
    if (state.loading && state.fetchPromise) {
      return state.fetchPromise;
    }

    // Fresh cache available
    if (
      !force &&
      state.lastFetched &&
      Date.now() - state.lastFetched < 300000
    ) {
      return {
        streak: state.streak,
        calendar: state.calendar,
        stats: state.stats,
      };
    }

    const promise = (async () => {
      set({
        loading: true,
        error: null,
      });

      try {
        const [streak, calendar, stats] = await Promise.all([
          streakService.me(),
          streakService.calendar(),
          streakService.stats(),
        ]);

        set({
          streak: streak.data,
          calendar: calendar.data,
          stats: stats.data,

          loading: false,
          error: null,

          lastFetched: Date.now(),
          fetchPromise: null,
        });

        return streak.data;
      } catch (error) {
        set({
          loading: false,
          error,
          fetchPromise: null,
        });

        throw error;
      }
    })();

    set({
      fetchPromise: promise,
    });

    return promise;
  },

  createStudyEntry: async () => {
    const res = await streakService.createStudyEntry();

    await get().refresh();

    return res.data;
  },

  refresh: () => {
    return get().fetch(true);
  },

  clear: () => {
    set({
      streak: null,
      calendar: null,
      stats: null,

      loading: false,
      error: null,

      lastFetched: null,
      fetchPromise: null,
    });
  },
}));
