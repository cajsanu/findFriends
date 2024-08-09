import axios from "axios";
const URL = "/api/logout";

export const logout = async (token: string) => {
  try {
    const res = await axios.post(URL, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    window.localStorage.removeItem("token");
    console.log(res)
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
