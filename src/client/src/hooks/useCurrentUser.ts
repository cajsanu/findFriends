import { useEffect, useState } from "react";
import { User } from "../types";
import { getCurrentUser } from "../requests/user";
import { useNavigate } from "react-router-dom";

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const user = await getCurrentUser();
      user ? setCurrentUser(user) : navigate("/");
    };
    getUser();
  }, []);

  return { currentUser };
};
