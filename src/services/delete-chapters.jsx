import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

export const deleteChaptersById = async (id) => {
    const deleteChapters = await http.delete(`${API_ENDPOINT.DELETE_CHAPTER}${id}`);
    console.log(deleteChapters,"dari delete-Chapters");
    return deleteChapters;
  };
  