import axios from "axios";
import { SignupUser } from "../types";
const URL = "/register";

export const create = async (newUser: SignupUser) => {
  const res = await axios.post(URL, newUser);
  return res;
};