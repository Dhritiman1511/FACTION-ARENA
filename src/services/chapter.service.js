import api from "../api/axios";
import { API } from "../constants/api";

export const chapterService = {
  all(params) {
    return api.get(API.CHAPTER.ALL, { params });
  },

  create(data) {
    return api.post(API.CHAPTER.ALL, data);
  },

  get(id) {
    return api.get(API.CHAPTER.DETAIL(id));
  },

  delete(id) {
    return api.delete(API.CHAPTER.DETAIL(id));
  },
};
