import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

export const editVideosById = async (id, newData) => {
  const putVideosId = await http.put(`${API_ENDPOINT.VIDEOS}${id}`, newData);
  console.log(putVideosId, "dari edit-class");
  return putVideosId;
};

export const deleteVideosById = async (id) => {
  const deleteVideos = await http.delete(`${API_ENDPOINT.VIDEOS}${id}`);
  console.log(deleteVideos, "dari edit-class");
  return deleteVideos;
};
