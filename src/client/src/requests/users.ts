import axios from "axios";
import { User } from "../types";
const URL = "/api/users";

const getAll = async () => {
  const res = await axios.get<User[]>(URL);
  return res;
};

const getByToken = async (token: string) => {
  const res = await axios.get<User>(URL);
};

export default { getAll, getByToken };
