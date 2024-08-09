import axios from "axios";
import { User } from "../types";
const URL = "/api/user";

export const getUser = async () => {
  const res = await axios.get<User>(URL);
  return res.data;
};
