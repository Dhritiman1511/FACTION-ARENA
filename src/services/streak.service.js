import api from "../api/axios";

export const streakService = {
  me() {
    return api.get("/streaks/me");
  },

  calendar(days = 365) {
    return api.get("/streaks/me/calendar", {
      params: { days },
    });
  },

  stats() {
    return api.get("/streaks/me/stats");
  },

  createStudyEntry() {
    return api.post("/streaks/me/create_study_stats");
  },

  user(id) {
    return api.get(`/streaks/${id}`);
  },

  userCalendar(id, days = 365) {
    return api.get(`/streaks/${id}/calendar`, {
      params: { days },
    });
  },
};
