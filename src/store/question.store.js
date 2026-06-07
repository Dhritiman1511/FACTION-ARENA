import { create } from "zustand";
import { questionService } from "../services";

const CACHE_TIME = 5 * 60 * 1000;

export const useQuestionStore = create((set, get) => ({
  cache: {},
  fetchPromises: {},
  QOTD: null,
  QOTDTime: null,
  filterStats: null,
  filterStatsTime: null,
  loadingCount: 0,
  error: null,
  isLoading: () => get().loadingCount > 0,

  buildKey: (filters = {}) => {
    const normalized = Object.keys(filters)
      .sort()
      .reduce((acc, key) => {
        acc[key] = filters[key];
        return acc;
      }, {});

    return JSON.stringify(normalized);
  },

  getQuestions: async (filters = {}, force = false) => {
    const key = get().buildKey(filters);

    const state = get();

    const cached = state.cache[key];

    // Cache hit
    if (!force && cached && Date.now() - cached.time < CACHE_TIME) {
      return cached.data;
    }

    // Existing request in progress
    if (state.fetchPromises[key]) {
      return state.fetchPromises[key];
    }

    set((state) => ({
      loadingCount: state.loadingCount + 1,
      error: null,
    }));

    const promise = (async () => {
      try {
        const res = await questionService.getFiltered(filters);

        set((state) => {
          const pending = { ...state.fetchPromises };
          delete pending[key];

          return {
            cache: {
              ...state.cache,

              [key]: {
                data: res.data,
                meta: {
                  filters,
                },
                time: Date.now(),
              },
            },

            fetchPromises: pending,

            loadingCount: Math.max(0, state.loadingCount - 1),
          };
        });

        return res.data;
      } catch (error) {
        set((state) => {
          const pending = { ...state.fetchPromises };
          delete pending[key];

          return {
            fetchPromises: pending,

            loadingCount: Math.max(0, state.loadingCount - 1),

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

  refresh: async (filters = {}) => {
    return get().getQuestions(filters, true);
  },

  submit: async (id, data) => {
    return questionService.submit(id, data);
  },

  invalidateQuestions: (filters = {}) => {
    const key = JSON.stringify(filters);

    set((state) => {
      const cache = { ...state.cache };
      delete cache[key];

      return {
        cache,
      };
    });
  },

  fetchQOTD: async (force = false) => {
    const state = get();

    if (
      !force &&
      state.QOTD &&
      state.QOTDTime &&
      Date.now() - state.QOTDTime < CACHE_TIME
    ) {
      return state.QOTD;
    }

    const res = await questionService.getQOTD();

    set({
      QOTD: res.data,
      QOTDTime: Date.now(),
    });

    return res.data;
  },

  fetchFilterStats: async (force = false) => {
    const state = get();

    if (
      !force &&
      state.filterStats &&
      state.filterStatsTime &&
      Date.now() - state.filterStatsTime < CACHE_TIME
    ) {
      return state.filterStats;
    }

    const res = await questionService.getFilterStats();

    set({
      filterStats: res.data,
      filterStatsTime: Date.now(),
    });

    return res.data;
  },

  invalidateAll: () => {
    set({
      cache: {},
    });
  },

  clear: () => {
    set({
      cache: {},
      fetchPromises: {},
      QOTD: null,
      QOTDTime: null,
      filterStats: null,
      filterStatsTime: null,
      loadingCount: 0,
      error: null,
    });
  },
}));
