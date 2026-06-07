import { useEffect } from "react";

import {
  useAuthStore,
  useUserStore,
  useStreakStore,
  useLeaderboardStore,
  useContentStore,
} from "../store";

export const useInitializeApp = () => {
  const hydrated = useAuthStore((state) => state.hydrated);

  const authenticated = useAuthStore((state) => state.authenticated);

  const initialize = useAuthStore((state) => state.initialize);

  const fetchProfile = useUserStore((state) => state.fetchProfile);

  const fetchStreak = useStreakStore((state) => state.fetch);

  const topPerformers = useLeaderboardStore((state) => state.topPerformers);

  const fetchClasses = useContentStore((state) => state.fetchClasses);

  useEffect(() => {
    const init = async () => {
      await initialize();

      const auth = useAuthStore.getState().authenticated;

      if (auth) {
        await Promise.all([
          fetchProfile(),
          fetchStreak(),
          topPerformers(),
          fetchClasses(),
        ]);
      }
    };

    init();
  }, []);

  return {
    hydrated,
    authenticated,
  };
};
