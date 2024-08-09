import axios from "axios";
const URL = "/api/logout";

export const logout = async () => {
  try {
    const res = await axios.post(URL, {});
    console.log(res)
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
