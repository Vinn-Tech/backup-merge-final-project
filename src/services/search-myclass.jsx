import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

export const fetchSearchMyclass = async (query) => {
  try {
    const response = await http.get(API_ENDPOINT.SEARCH_MYCLASS(query));
    console.log(response.data.data, "Response Data");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching search:", error);
    throw error; // Anda dapat mengatasi atau melemparkan kembali kesalahan di sini
  }
};


// export const fetchSearch = async (query) => {
//   const searchQuery = await http.get(`${API_ENDPOINT.ALL_CLASS}?search=${query}`);
//   return searchQuery;
// }