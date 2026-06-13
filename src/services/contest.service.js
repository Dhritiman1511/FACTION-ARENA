import api from "../api/axios";
import { API } from "../api/endpoints";

export const contestService = {
  create(data) {
    return api.post(API.CONTEST.ALL, data);
  },

  list(type) {
    return api.get(API.CONTEST.ALL, {
      params: {
        type,
      },
    });
  },

  getQuestions(id) {
    return api.get(API.CONTEST.QUESTIONS(id));
  },

  submit(data) {
    return api.post(API.CONTEST.SUBMIT, data);
  },

  leaderboard(contestId, userId) {
    return api.get(API.CONTEST.LEADERBOARD(contestId, userId));
  },

  hasAttempted(id) {
    return api.get(API.CONTEST.HAS_ATTEMPTED(id));
  },
};
