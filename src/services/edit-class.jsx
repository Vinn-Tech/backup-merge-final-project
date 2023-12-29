import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

//*EditClass By ID
export const editClassById = async (id,newData) => {
  const putClassId = await http.put(`${API_ENDPOINT.EDIT_CLASS}${id}`,newData);
  console.log(putClassId,"dari edit-class");
  return putClassId;
};