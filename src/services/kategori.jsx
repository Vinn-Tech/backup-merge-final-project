import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";


export const kategori = async () => {
  const kategoriBelajar = await http.get(API_ENDPOINT.KATEGORI);
  return kategoriBelajar;
};