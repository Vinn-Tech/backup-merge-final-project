// class-service.js (atau nama file yang sesuai)
import { API_ENDPOINT } from "../utils/api-endpoint";
import { CookieKeys, CookieStorage } from "../utils/cookies";
import http from "../utils/http";

let isFetching = false; // Tambahkan variabel untuk menandai apakah sedang mengambil data

export const getFreeClass = async (id) => {
  try {
    if (isFetching) {
      return; // Jangan mengambil data jika sedang dalam proses pengambilan
    }

    isFetching = true; // Set variabel isFetching menjadi true

    const authToken = CookieStorage.get(CookieKeys.AuthToken);

    console.log('Auth Token:', authToken);

    const response = await http.get(API_ENDPOINT.FREE_CLASS(id), {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    console.log('Response Status:', response.status);
    console.log('Response Data:', response.data);

    isFetching = false; // Set variabel isFetching menjadi false setelah selesai mengambil data

    return response.data;
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    isFetching = false; // Set variabel isFetching menjadi false jika terjadi kesalahan
    throw error;
  }
};
