import axios from "axios";
const URL = "http://localhost:5053/register";

export const signup = async (email: string, password: string) => {
  const res = await axios.post(URL, {email, password});
  return res.data;
};