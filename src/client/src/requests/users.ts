import axios from "axios";
import { User, BaseDog, UserInfo, UserDog } from "../types";
const URL = "/api/users";

const getAll = async (search: string) => {
  const res = await axios.get<User[]>(URL + (search ? `?search=${search}` : ""));
  return res.data;
};

const updateInfo = async (id: string, info: UserInfo) => {
  const res = await axios.put(`${URL}/${id}`, info);
  return res.data;
};

const addUserDog = async (id: string, dog: BaseDog): Promise<UserDog> => {
  const res = await axios.post(`${URL}/${id}/dogs`, dog);
  return res.data;
};

export default {getAll, updateInfo, addUserDog}