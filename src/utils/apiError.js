export const normalizeError = (error) => {
  return {
    success: false,

    status: error.response?.status || 500,

    message: error.response?.data?.detail || error.message || "Unknown Error",

    validation: error.response?.data?.errors || [],
  };
};
