import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";


export const kategori = async () => {
  const getKategori = await http.get(API_ENDPOINT.KATEGORI);
  // console.log(getKategori)
  return getKategori;
};