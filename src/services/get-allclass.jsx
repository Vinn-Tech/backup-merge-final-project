import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

export const allClass = async () => {
  const getAllClass = await http.get(API_ENDPOINT.ALL_CLASS);
  console.log(getAllClass, "dari getTotalClass");
  return getAllClass;
};

export const topikClass = async (
  page,
  limit,
) => {
  const getAllClass = await http.get(
    `${API_ENDPOINT.ALL_CLASS}?page=${page}&limit=${limit}`
  );
  console.log(getAllClass, "dari getClass");
  return getAllClass;
};