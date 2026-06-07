import api from "../api/axios";

export const customTestService = {
  submit(id, data) {
    return api.post(`/custom-tests/${id}/submit`, data);
  },

  analysis(id) {
    return api.get(`/custom-tests/${id}/analysis`);
  },
};
