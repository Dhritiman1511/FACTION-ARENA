import { create } from "zustand";

import { userService } from "../services";

export const useUserStore = create((set, get) => ({
  profile: null,
  currentDevice: null,
  rating: null,
  ratingGraph: null,
  loading: false,
  error: null,
  lastFetched: null,
  fetchPromise: null,

  fetchProfile: async (force = false) => {
    const state = get();

    if (state.loading && state.fetchPromise) {
      return state.fetchPromise;
    }

    if (
      !force &&
      state.profile &&
      state.lastFetched &&
      Date.now() - state.lastFetched < 300000
    ) {
      return state.profile;
    }

    const promise = (async () => {
      set({
        loading: true,

        error: null,
      });

      try {
        const [profile, device, rating, graph] = await Promise.all([
          userService.me(),

          userService.currentDevice
            ? userService.currentDevice()
            : Promise.resolve({ data: null }),

          userService.getMyRating(),

          userService.getMyRatingGraph(),
        ]);

        set({
          profile: profile.data,

          currentDevice: device.data,

          rating: rating.data,

          ratingGraph: graph.data,

          loading: false,

          fetchPromise: null,

          lastFetched: Date.now(),
        });

        return profile.data;
      } catch (error) {
        set({
          loading: false,

          fetchPromise: null,

          error,
        });

        throw error;
      }
    })();

    set({
      fetchPromise: promise,
    });

    return promise;
  },

  refresh: async () => {
    return get().fetchProfile(true);
  },

  updateProfile: async (data) => {
    set({
      loading: true,
    });

    try {
      const res = await userService.update(data);

      set({
        profile: res.data,

        loading: false,
      });

      return res.data;
    } catch (error) {
      set({
        loading: false,

        error,
      });

      throw error;
    }
  },

  clear: () => {
    set({
      profile: null,

      currentDevice: null,

      rating: null,

      ratingGraph: null,

      loading: false,

      error: null,

      lastFetched: null,
    });
  },
}));
