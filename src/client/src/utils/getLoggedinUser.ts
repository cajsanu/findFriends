import { getUser } from "../requests/user";

export const GetLoggedinUser = async () => {
  const token = window.localStorage.getItem("token");
  if (token) {
    return await getUser(token);
  } else {
    return null;
  }
};
