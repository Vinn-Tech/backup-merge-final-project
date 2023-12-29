import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";
//*GetAllClassByPageAndLimit
export const getClass = async (page, limit) => {
  const getAllClass = await http.get(
    `${API_ENDPOINT.GET_CLASS}?page=${page}&limit=${limit}`
  );
  console.log(getAllClass, "dari getClass");
  return getAllClass;
};
//*GetAllClassByAllQuery
export const getClassByQuery = async (
  page,
  limit,
  search,
  category,
  type,
  level
) => {
  const getAllClass = await http.get(
    `${API_ENDPOINT.GET_CLASS}?page=${page}&limit=${limit}&search=${search}&category=${category}&type=${type}&level=${level}`
  );
  console.log(getAllClass, "dari getClass");
  return getAllClass;
};
//* Get All Class
export const getTotalClass = async () => {
  const getAllClass = await http.get(API_ENDPOINT.GET_CLASS);
  console.log(getAllClass, "dari getTotalClass");
  return getAllClass;
};
//*Get Premium Class
export const getPremiumClass = async () => {
  const getAllClass = await http.get(`${API_ENDPOINT.GET_CLASS}?type=2`);
  console.log(getAllClass, "dari getTotalClass");
  return getAllClass;
};
//*GetClass By ID
export const getClassById = async (id) => {
  const getClassId = await http.get(`${API_ENDPOINT.GET_CLASS}/${id}`);
  console.log(getClassId);
  return getClassId;
};

//*GetClass by Search
export const getSearchClass = async (query) => {
  const searchClass = await http.get(
    `${API_ENDPOINT.GET_CLASS}?search=${query}`
  );
  return searchClass;
};

export const getFilterClass = async (category, type, level) => {
  const filterClass = await http.get(
    `${API_ENDPOINT.GET_CLASS}?category=${category}&type=${type}&level=${level}`
  );
  return filterClass;
};
