import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";


export const byCategory = async (id) => {
  const getByKategori = await http.get(API_ENDPOINT.CLASS_CATEGORY(id));
  // console.log(getKategori)
  return getByKategori;
};