import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

export const fetchSearch = async (query) => {
  try {
    const response = await http.get(API_ENDPOINT.SEARCH(query));
    console.log(response.data.data, "Response Data");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching search:", error);
    throw error; // Anda dapat mengatasi atau melemparkan kembali kesalahan di sini
  }
};
