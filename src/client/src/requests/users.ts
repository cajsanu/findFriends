import axios from "axios";
import { User } from "../types";
const URL = "/api/users";

export const getAll = async (token: string) => {
  const res = await axios.get<User[]>(URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
