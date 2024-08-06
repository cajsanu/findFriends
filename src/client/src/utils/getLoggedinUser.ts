import userRequests from "../requests/user";

export const GetLoggedinUser = async () => {
  const token = window.localStorage.getItem("token");
  if (token) {
    return await userRequests.getUser(token);
  } else {
    return null;
  }
};
