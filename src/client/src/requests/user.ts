import axios from "axios";
import { User } from "../types";
const URL = "/api/user";

const getUser = async (token: string) => {
  const res = await axios.get<User>(URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data
};

export default { getUser };
