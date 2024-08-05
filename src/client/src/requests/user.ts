import axios from "axios";
import { User } from "../types";
const URL = "/api/user";

const getUser = async () => {
  const res = await axios.get<User>(URL);
};

export default { getUser };