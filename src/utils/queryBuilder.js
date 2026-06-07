export const buildQuery = (params = {}) => {
  const query = {};

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") {
      return;
    }

    if (Array.isArray(value)) {
      if (value.length) {
        query[key] = value.join(",");
      }

      return;
    }

    query[key] = value;
  });

  return query;
};
