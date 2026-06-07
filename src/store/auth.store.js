import { create } from "zustand";

import { authService } from "../services";
import { tokenManager } from "../api/tokenManager";

import { useUserStore } from "./user.store";
import { useStreakStore } from "./streak.store";
import { useQuestionStore } from "./question.store";
import { useLeaderboardStore } from "./leaderboard.store";

const clearAppStores = () => {
  useUserStore.getState().clear();
  useStreakStore.getState().clear();
  useQuestionStore.getState().clear();
  useLeaderboardStore.getState().clear();
};

export const useAuthStore = create((set) => ({
  authenticated: !!tokenManager.getAccessToken(),
  loading: false,
  hydrated: false,
  initializing:false,
  session: {
    accessToken: tokenManager.getAccessToken(),
    refreshToken: tokenManager.getRefreshToken(),
    sessionId: tokenManager.getSessionId(),
  },

  login: async (payload) => {
    if (useAuthStore.getState().loading) {
      return;
    }
    set({
      loading: true,
    });

    try {
      const res = await authService.login(payload);

      set({
        authenticated: true,

        hydrated: true,

        session: {
          accessToken: res.data.access_token,
          refreshToken: res.data.refresh_token,
          sessionId: res.data.session_id,
        },

        loading: false,
      });

      return res;
    } catch (error) {
      set({
        loading: false,
      });

      throw error;
    }
  },

  logout: async () => {
    try {
      await authService.logout();
    } catch {
      /* empty */
    }

    tokenManager.clear();

    clearAppStores();

    set({
      authenticated: false,

      hydrated: true,

      session: {
        accessToken: null,
        refreshToken: null,
        sessionId: null,
      },
    });
  },

  checkSession: async () => {
    if (!tokenManager.getAccessToken()) {
      set({
        authenticated: false,

        session: {
          accessToken: null,
          refreshToken: null,
          sessionId: null,
        },
      });

      return false;
    }

    try {
      await authService.sessionCheck();

      set({
        authenticated: true,

        session: {
          accessToken: tokenManager.getAccessToken(),
          refreshToken: tokenManager.getRefreshToken(),
          sessionId: tokenManager.getSessionId(),
        },
      });

      return true;
    } catch {
      tokenManager.clear();

      clearAppStores();

      set({
        authenticated: false,
        session: {
          accessToken: null,
          refreshToken: null,
          sessionId: null,
        },
      });

      return false;
    }
  },

  initialize: async () => {
    const state = useAuthStore.getState();

    if (state.loading || state.hydrated) {
      return state.authenticated;
    }

    set({
      loading: true,
    });

    const authenticated = await state.checkSession();

    set({
      hydrated: true,
      loading: false,
    });

    return authenticated;
  },
}));
