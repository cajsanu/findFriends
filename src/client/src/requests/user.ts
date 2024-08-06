import axios from "axios";
import { User } from "../types";
const URL = "/api/user";

const getUser = async (token: string) => {
  const res = await axios.get<User>(URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

const updateInfo = async (id: string, token: string) => {
  console.log(token, id)
  // const res = await axios.put(`${URL}/${id}`, {
  //   headers: { Authorization: `Bearer ${token}` },
  // });
  // return res.data;
};
export default { getUser, updateInfo };
