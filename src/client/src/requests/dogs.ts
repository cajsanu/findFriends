import axios from "axios";
import { BaseDog } from "../types";
const URL = "/api/dogs";

export const removeDog = async (id: string) => {
  try {
    const res = await axios.delete<BaseDog>(`${URL}/${id}/`);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};