import axios from "axios";
import { User, BaseDog, UserInfo, UserDog } from "../types";
const URL = "/api/users";

const getAll = async (search: string) => {
  try {
    const res = await axios.get<User[]>(
      URL + (search ? `?search=${search}` : "")
    );
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const updateInfo = async (id: string, info: UserInfo) => {
  try {
    const res = await axios.put(`${URL}/${id}`, info);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const addUserDog = async (id: string, dog: BaseDog): Promise<UserDog | null> => {
  try {
    const res = await axios.post(`${URL}/${id}/dogs`, dog);
    return res.data;
  } catch (err) {
    console.log(err);
    return null
  }
};

export default { getAll, updateInfo, addUserDog };
