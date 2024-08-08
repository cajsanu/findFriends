import axios from "axios";
import { User, BaseDog, UserInfo, UserDog } from "../types";
const URL = "/api/users";

const getAll = async (token: string) => {
  const res = await axios.get<User[]>(URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};

const updateInfo = async (id: string, token: string, info: UserInfo) => {
  const res = await axios.put(`${URL}/${id}`, info, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

const addUserDog = async (id: string, token: string, dog: BaseDog): Promise<UserDog> => {
  const res = await axios.post(`${URL}/${id}/dogs`, dog, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export default {getAll, updateInfo, addUserDog}