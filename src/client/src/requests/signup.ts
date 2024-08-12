import axios from "axios";
const URL = "http://localhost:5053/register";

export const signup = async (email: string, password: string) => {
  try {
    const res = await axios.post(URL, { email, password });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
