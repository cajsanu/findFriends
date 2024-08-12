import axios from "axios";
import { User } from "../types";
const URL = "/api/user";

export const getCurrentUser = async () => {
  try {
    const res = await axios.get<User>(URL);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
