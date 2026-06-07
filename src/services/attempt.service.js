import api from "../api/axios";

export const attemptService = {
  create(data) {
    return api.post("/attempts", data);
  },

  getAll(params) {
    return api.get("/attempts", { params });
  },

  stats() {
    return api.get("/attempts/stats");
  },

  getById(id) {
    return api.get(`/attempts/${id}`);
  },

  update(id, data) {
    return api.patch(`/attempts/${id}`, data);
  },

  remove(id) {
    return api.delete(`/attempts/${id}`);
  },

  question(id) {
    return api.get(`/attempts/question/${id}`);
  },

  status(id) {
    return api.get(`/attempts/question/${id}/status`);
  },

  solvedCount(userId) {
    return api.get(`/attempts/user/${userId}/solved-count`);
  },
};
