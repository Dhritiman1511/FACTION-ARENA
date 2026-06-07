import api from "../api/axios";
import { API } from "../constants/api";

export const topicService = {
  all(params) {
    return api.get(API.TOPIC.ALL, { params });
  },

  create(data) {
    return api.post(API.TOPIC.ALL, data);
  },

  get(id) {
    return api.get(API.TOPIC.DETAIL(id));
  },

  update(id, data) {
    return api.put(API.TOPIC.DETAIL(id), data);
  },

  delete(id) {
    return api.delete(API.TOPIC.DETAIL(id));
  },

  questions(id) {
    return api.get(API.TOPIC.QUESTIONS(id));
  },
};
