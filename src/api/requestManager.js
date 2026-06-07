const pending = new Map();

export const createRequestKey = ({ method, url, params, data }) => {
  return JSON.stringify({
    method,
    url,
    params,
    data,
  });
};

export const requestManager = {
  add(key, controller) {
    pending.set(key, controller);
  },

  cancel(key) {
    const controller = pending.get(key);

    if (controller) {
      controller.abort();

      pending.delete(key);
    }
  },

  clear(key) {
    pending.delete(key);
  },
};
