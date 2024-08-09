import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { logout } from "../requests/logout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types";
import { AddDogForm } from "./AddDogForm";
import { getCurrentUser } from "../requests/user";
import { RequiresAuthentication, PersonalInfoForm, MyDogs } from ".";

export const UserNavBar = () => {
  const [openAddDog, setOpenAddDog] = useState(false);
  const [openMyDogs, setOpenMyDogs] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const user = await getCurrentUser();
      user ? setUser(user) : navigate("/");
    };
    getUser();
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
    navigate(`/home/${user.id}`)
  }

  const handleAddDogSuccess = async () => {
    setUser(await getCurrentUser());
    setOpenMyDogs(true);
    setOpenAddDog(false);
  };

  const handleClickUsers = () => {
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

  const handleOpenAddDog = () => setOpenAddDog(true);
  const handleOpenMyDogs = () => setOpenMyDogs(true);
  const handleClose = () => {
    setOpenAddDog(false);
    setOpenMyDogs(false);
  };

  return (
    <div className="bg-gradient-to-r from-rose-500 to-rose-500 p-5">
      <div className="flex justify-between">
        <div>
          <button
            onClick={handleHome}
            className="rounded-md hover:text-pink-900 px-3 py-1.5 text-sm font-semibold text-white"
          >
            Home
          </button>
          <button
            className="rounded-md hover:text-pink-900 px-3 py-1.5 text-sm font-semibold text-white"
            onClick={handleClickUsers}
          >
            See users
          </button>
          <button className="rounded-md hover:text-pink-900 px-3 py-1.5 text-sm font-semibold text-white">
            Start new chat
          </button>
          <button
            onClick={handleOpenAddDog}
            className="rounded-md hover:text-pink-900 px-3 py-1.5 text-sm font-semibold text-white"
          >
            Add dog
          </button>
          <button
            onClick={handleOpenMyDogs}
            className="rounded-md hover:text-pink-900 px-3 py-1.5 text-sm font-semibold text-white"
          >
            My dogs
          </button>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="rounded-md hover:text-pink-900 px-3 py-1.5 text-sm font-semibold text-white"
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
            <button onClick={handleClose}>Close</button>
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
              {user.dogs ? (
                <MyDogs dogs={user.dogs} />
              ) : (
                <p>You have not added any dogs yet</p>
              )}
            </div>
            <button onClick={handleClose}>Close</button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
