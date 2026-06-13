import api from "../api/axios";
import { API } from "../api/endpoints";

export const rankingService = {
  arena(params) {
    return api.get(API.RANKING.ARENA, { params });
  },

  streak(params) {
    return api.get(API.RANKING.STREAK, { params });
  },

  contest(params) {
    return api.get(API.RANKING.CONTEST, { params });
  },

  contestLatest(params) {
    return api.get(API.RANKING.CONTEST, {
      params,
    });
  },

  contestById(id, params) {
    return api.get(API.RANKING.CONTEST_DETAIL(id), {
      params,
    });
  },

  rating(params) {
    return api.get(API.RANKING.RATING, {
      params,
    });
  },
};
