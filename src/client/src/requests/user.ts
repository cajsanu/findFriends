import axios from "axios";
import { User } from "../types";
const URL = "/api/user";

export const getCurrentUser = async () => {
  const res = await axios.get<User>(URL);
  return res.data;
};
