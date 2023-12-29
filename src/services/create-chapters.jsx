import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

export const postChapters = async (input) => {
    const createChapters = await http.post(API_ENDPOINT.CREATE_CHAPTERS, input);
    return createChapters;
  };
  