import axios from "axios";
const URL = "/api/chats";

export const getChatById = async (id: string) => {
  try {
    const res = await axios.get(`${URL}/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const startChat = async (recieverId: string) => {
  try {
    const res = await axios.post(URL, recieverId);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};