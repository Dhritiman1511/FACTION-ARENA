import { create } from "zustand";
import { leaderboardService } from "../services";

const CACHE_TIME = 5 * 60 * 1000;

export const useLeaderboardStore = create((set, get) => ({
  boards: {},
  fetchPromises: {},
  loading: {},
  error: null,
  buildKey: (name, params = {}) => {
    return JSON.stringify({
      name,
      ...params,
    });
  },

  fetchBoard: async (name, apiCall, params = {}, force = false) => {
    const key = get().buildKey(name, params);

    const state = get();

    const cached = state.boards[key];

    if (!force && cached && Date.now() - cached.time < CACHE_TIME) {
      return cached.data;
    }

    const pending = state.fetchPromises[key];

    if (pending) {
      return pending;
    }

    const promise = (async () => {
      set((state) => ({
        loading: {
          ...state.loading,
          [key]: true,
        },
      }));

      try {
        const res = await apiCall();

        set((state) => {
          const fetchPromises = {
            ...state.fetchPromises,
          };

          delete fetchPromises[key];

          const loading = {
            ...state.loading,
          };

          delete loading[key];

          return {
            boards: {
              ...state.boards,

              [key]: {
                data: res.data,
                time: Date.now(),
                meta: params,
              },
            },

            fetchPromises,

            loading,

            error: null,
          };
        });

        return res.data;
      } catch (error) {
        set((state) => {
          const fetchPromises = {
            ...state.fetchPromises,
          };

          delete fetchPromises[key];

          const loading = {
            ...state.loading,
          };

          delete loading[key];

          return {
            fetchPromises,

            loading,

            error,
          };
        });

        throw error;
      }
    })();

    set((state) => ({
      fetchPromises: {
        ...state.fetchPromises,

        [key]: promise,
      },
    }));

    return promise;
  },

  topRating(limit = 10, force = false) {
    return get().fetchBoard(
      "topRating",
      () => leaderboardService.topRating(limit),
      { limit },
      force,
    );
  },

  topQuestions(
    limit = 10,

    force = false,
  ) {
    return get().fetchBoard(
      "topQuestions",

      () => leaderboardService.topQuestions(limit),

      { limit },

      force,
    );
  },

  topPerformers(force = false) {
    return get().fetchBoard(
      "topPerformers",

      () => leaderboardService.topPerformers(),

      {},

      force,
    );
  },

  bestRating(exam, force = false) {
    return get().fetchBoard(
      "bestRating",
      () => leaderboardService.bestRating(exam),
      { exam },
      force,
    );
  },

  bestQuestions(exam, force = false) {
    return get().fetchBoard(
      "bestQuestions",
      () => leaderboardService.bestQuestions(exam),
      { exam },
      force,
    );
  },

  bestStreak(exam, force = false) {
    return get().fetchBoard(
      "bestStreak",
      () => leaderboardService.bestStreak(exam),
      { exam },
      force,
    );
  },

  isLoading(name, params = {}) {
    const key = get().buildKey(name, params);

    return !!get().loading[key];
  },

  getBoard(name, params = {}) {
    const key = get().buildKey(name, params);

    return get().boards[key]?.data ?? null;
  },

  refresh(name, api, params = {}) {
    return get().fetchBoard(name, api, params, true);
  },

  clear() {
    set({
      boards: {},
      fetchPromises: {},
      loading: {},
      error: null,
    });
  },
}));
