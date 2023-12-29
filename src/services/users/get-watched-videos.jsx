import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const getWatchedVideos = async (id) => {
  const watchedVideos = await http.get(`${API_ENDPOINT.WATCHED_VIDEOS}/${id}`);
  return watchedVideos;
};