import { normalizeError } from "./errorHandler";

export const unwrap = async (promise) => {
  try {
    const res = await promise;

    return {
      success: true,

      data: res.data,
    };
  } catch (error) {
    return normalizeError(error);
  }
};
