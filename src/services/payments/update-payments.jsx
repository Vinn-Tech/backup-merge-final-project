import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

export const updatePayment = async (id) => {
  const setPaymentTrue = await http.get(`${API_ENDPOINT.UPDATE_PAYMENTS}/${id}`);
  return setPaymentTrue;
};