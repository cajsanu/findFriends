import axios from "axios";
import { User } from "../types";
const URL = "/api/users";

export const getAll = async () => {
  const res = await axios.get<User[]>(URL);
  return res;
};
