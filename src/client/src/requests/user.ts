import axios from "axios";
import { NewDog, User, UserInfo } from "../types";
const URL = "/api/user";

const getUser = async (token: string) => {
  const res = await axios.get<User>(URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

const updateInfo = async (id: string, token: string, info: UserInfo) => {
  const res = await axios.put(`${URL}/${id}`, info, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

const addUserDog = async (id: string, token: string, dog: NewDog) => {
  console.log(dog)
  const res = await axios.post(`${URL}/${id}/dogs`, dog, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export default { getUser, updateInfo, addUserDog };
