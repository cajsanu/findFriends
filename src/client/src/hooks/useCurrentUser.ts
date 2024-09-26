import { useEffect, useState } from "react";
import { User } from "../types";
import { getCurrentUser } from "../requests/user";

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await getCurrentUser();
      user ? setCurrentUser(user) : null;
    };
    getUser();
  }, []);

  return { currentUser };
};
