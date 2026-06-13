import api from "../api/axios";
import { API } from "../api/endpoints";

export const subjectService = {
  all(params) {
    return api.get(API.SUBJECT.ALL, { params });
  },

  create(data) {
    return api.post(API.SUBJECT.ALL, data);
  },

  get(id) {
    return api.get(API.SUBJECT.DETAIL(id));
  },

  delete(id) {
    return api.delete(API.SUBJECT.DETAIL(id));
  },

  chapters(id) {
    return api.get(API.SUBJECT.CHAPTERS(id));
  },
};
