import axios from "axios";
const URL = "/login?useCookies=true";

export const login = async (email: string, password: string) => {
  try {
    const res = await axios.post(URL, { email, password });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
