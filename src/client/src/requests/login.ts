import axios from "axios";
const URL = "http://localhost:5053/login";

export const login = async (email: string, password: string) => {
  const res = await axios.post(URL, {email, password});
  window.localStorage.setItem("token", res.data.accessToken);
  return res.data;
};