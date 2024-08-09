import { getUser } from "../requests/user";

export const GetLoggedinUser = async () => {
  return await getUser();
};
