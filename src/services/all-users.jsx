import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

export const getUsers = async () => {
  const getAllUser = await http.get(API_ENDPOINT.ALL_USER);
  console.log(getAllUser, "dari getAllusers");
  return getAllUser;
};
export const getAllUsers = async (page) => {
  const allUSers = await http.get(
    `${API_ENDPOINT.ALL_USER}?page=${page}&limit=10`
  );
  console.log(allUSers, "dari getAllusers");
  return allUSers;
};
