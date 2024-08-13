import axios from "axios";
const URL = "/api/chats";

export const createChat = async () => {
  try {
    const res = await axios.post(URL);
    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
