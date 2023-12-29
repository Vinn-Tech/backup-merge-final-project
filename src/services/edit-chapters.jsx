import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

//*EditChapters By ID
export const editChaptersById = async (id, newData) => {
  const putChaptersId = await http.put(
    `${API_ENDPOINT.EDIT_CHAPTERS}${id}`,
    newData
  );
  console.log(putChaptersId, "dari edit-class");
  return putChaptersId;
};
