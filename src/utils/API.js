import axios from "axios";

const api = axios.create({
  baseURL: `https://erp.arulphpdeveloper.com/api/`,
});

export async function Login(data) {
  try {
    return await api.post(`login`, data);
  } catch (e) {
    return e;
  }
}
export async function ForgotPass(data) {
  try {
    return await api.post(`forgotPassword`, data);
  } catch (e) {
    return e;
  }
}
export async function ResetPass(data) {
  try {
    return await api.post(`reset`, data);
  } catch (e) {
    return e;
  }
}
