import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { logout } from "../requests/logout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, UserDog } from "../types";
import { AddDogForm } from "./AddDogForm";
import { getCurrentUser } from "../requests/user";
import { RequiresAuthentication, PersonalInfoForm, MyDogs } from ".";

// interface CurrentUserProps {
//   user: User;
// }

export const UserNavBar = () => {
  const [openAddDog, setOpenAddDog] = useState(false);
  const [openMyDogs, setOpenMyDogs] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [dogs, setDogs] = useState<UserDog[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const setUserDogs = async () => {
      const user = await getCurrentUser();
      if (user) {
        setUser(user);
        setDogs(user.dogs);
      }
    };
    setUserDogs();
  }, []);

  if (!user) {
    return <RequiresAuthentication />;
  }

  if (!user.firstName || !user.lastName || !user.city) {
    return (
      <div>
        <PersonalInfoForm userId={user.id} />
      </div>
    );
  }

  const handleHome = () => {
    navigate(`/home/${user.id}`);
  };

  const handleAddDogSuccess = async (newDog: UserDog) => {
    setDogs((prevDogs) => [...prevDogs, newDog]);
    setOpenMyDogs(true);
    setOpenAddDog(false);
  };

  const handleClickNewChat = () => {
    navigate("/users");
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(user.dogs);
  console.log(dogs);

  const handleOpenAddDog = () => setOpenAddDog(true);
  const handleOpenMyDogs = () => setOpenMyDogs(true);
  const handleClose = () => {
    setOpenAddDog(false);
    setOpenMyDogs(false);
  };

  return (
    <div className="bg-red-100 p-5">
      <div className="flex justify-between font-semibold text-rose-400 text-m">
        <div className="">
          <button
            onClick={handleHome}
            className="px-3 py-1.5 hover:text-rose-700"
          >
            Home
          </button>
          <button
            className="px-3 py-1.5 hover:text-rose-700"
            onClick={handleClickNewChat}
          >
            New chat
          </button>
          <button
            onClick={handleOpenAddDog}
            className="px-3 py-1.5 hover:text-rose-700"
          >
            Add dog
          </button>
          <button
            onClick={handleOpenMyDogs}
            className="px-3 py-1.5 hover:text-rose-700"
          >
            My dogs
          </button>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="px-3 py-1.5 hover:text-rose-700"
          >
            Logout
          </button>
        </div>
      </div>
      <div>
        <Modal
          open={openAddDog}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <AddDogForm userId={user.id} onSuccess={handleAddDogSuccess} />
            <button className="font-bold text-xl" onClick={handleClose}>
              x
            </button>
          </Box>
        </Modal>
      </div>
      <div>
        <Modal
          open={openMyDogs}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <div>
              {dogs ? (
                <MyDogs dogs={dogs} />
              ) : (
                <p>You have not added any dogs yet</p>
              )}
            </div>
            <button className="font-bold text-xl" onClick={handleClose}>
              x
            </button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
