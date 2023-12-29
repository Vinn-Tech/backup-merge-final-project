import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";
import httpForm from "../utils/httpForm";


export const postClass = async (input) => {
  const createClass = await http.post(API_ENDPOINT.CREATE_CLASS, input, {
    headers: {
      Accept: "multipart/form-data",
      "Content-Type": "multipart/form-data",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk2Y2MwM2RmLTYyM2ItNDQ1Mi1iMjA0LWU0OTg4MmJkN2Y4OSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcwMjExNjc1NX0.VEcB3CNVCIG5PD4Yk6s7mziXxlvJboQivUQy9RA5JPg",
    },
  });
  return createClass;
};
export const postClassForm = async (input) => {
  const createClassForm = await httpForm.post(API_ENDPOINT.CREATE_CLASS, input);
  return createClassForm;
};
