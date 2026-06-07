import api from "../api/axios";
import { API } from "../api/endpoints";
import { buildQuery } from "../utils/queryBuilder";
import { createCRUDService } from "../api/baseService";

const base = createCRUDService(API.QUESTIONS.ALL);

export const questionService = {
  ...base,

  getAll(params = {}) {
    return api.get(API.QUESTIONS.ALL, {
      params,
    });
  },

  getById(id) {
    return api.get(API.QUESTIONS.DETAIL(id));
  },

  getQOTD(exam_type) {
    return api.get(
      API.QUESTIONS.QOTD,

      {
        params: {
          exam_type,
        },
      },
    );
  },

  getFilterStats() {
    return api.get(API.QUESTIONS.FILTER_STATS);
  },

  getFiltered(filters = {}) {
    return api.get(
      API.QUESTIONS.FILTER,

      {
        params: buildQuery(filters),
      },
    );
  },

  bulkSeed(data) {
    return api.post(API.QUESTIONS.SEED, data);
  },

  createMultipart(data) {
    return api.post(
      API.QUESTIONS.ALL,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  },

  submit(questionId, data) {
    return api.post(API.QUESTIONS.SUBMIT(questionId), data);
  },
};
