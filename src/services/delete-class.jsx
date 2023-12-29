import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

//*DeleteClass By ID
export const deleteClassById = async (id) => {
  const deleteClass = await http.delete(`${API_ENDPOINT.DELETE_CLASS}${id}`);
  console.log(deleteClass,"dari delete-class");
  return deleteClass;
};
