import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

export const getMe = async (
  page,
  limit,
) => {
  const getAllClass = await http.get(
    `${API_ENDPOINT.GET_ME}?page=${page}&limit=${limit}`
  );
  console.log(getAllClass, "dari getClass");
  return getAllClass;
};

export const getFilterMyClasses = async ({ category, type, level}) => {
  const params = {
    category,
    type,
    level
  }
  const filterMyclass = await http.get(API_ENDPOINT.GET_ME, { params });
  return filterMyclass;
}

