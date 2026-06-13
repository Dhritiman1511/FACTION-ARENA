import api from "../api/axios";
import { API } from "../api/endpoints";

export const leaderboardService = {
  topPerformers() {
    return api.get(API.LEADERBOARD.TOP_PERFORMERS);
  },

  bestRating(exam) {
    return api.get(API.LEADERBOARD.BEST_RATING, {
      params: {
        target_exam_type: exam,
      },
    });
  },

  topRating(limit = 10) {
    return api.get(API.LEADERBOARD.TOP_RATING, {
      params: { limit },
    });
  },

  bestDelta(exam) {
    return api.get(API.LEADERBOARD.BEST_DELTA, {
      params: {
        target_exam_type: exam,
      },
    });
  },

  topDelta(limit = 10) {
    return api.get(API.LEADERBOARD.TOP_DELTA, {
      params: { limit },
    });
  },

  bestQuestions(exam) {
    return api.get(API.LEADERBOARD.BEST_QUESTIONS, {
      params: {
        target_exam_type: exam,
      },
    });
  },

  topQuestions(limit = 10) {
    return api.get(API.LEADERBOARD.TOP_QUESTIONS, {
      params: { limit },
    });
  },

  bestStreak(exam) {
    return api.get(API.LEADERBOARD.BEST_STREAK, {
      params: {
        target_exam_type: exam,
      },
    });
  },
};
