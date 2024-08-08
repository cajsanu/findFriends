import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetLoggedinUser } from "../utils/getLoggedinUser";
import { User } from "../types";
import { PersonalInfoForm, AddDogForm } from "../components";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { MyDogs } from "../components/MyDogs";

export const HomePage = () => {
  const [fact, setFact] = useState(null);
  const [user, setUser] = useState<User | null>(null);
  const [openAddDog, setOpenAddDog] = useState(false);
  const [openMyDogs, setOpenMyDogs] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getDogFact = async () => {
      const res = await axios.get("https://dogapi.dog/api/facts");
      setFact(res.data.facts);
    };
    const getUser = async () => {
      const user = await GetLoggedinUser();
      user ? setUser(user) : navigate("/");
    };
    getDogFact();
    getUser();
  }, []);

  const handleAddDogSuccess = async () => {
    setUser(await GetLoggedinUser());
  };

  const handleClickUsers = () => {
    navigate("/users");
  };

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    navigate("/");
  };

  const handleOpenAddDog = () => setOpenAddDog(true);
  const handleOpenMyDogs = () => setOpenMyDogs(true);
  const handleClose = () => {
    setOpenAddDog(false);
    setOpenMyDogs(false);
  };

  if (!user) {
    return (
      <div>
        <p>You have been automatically signed out, please go log in again </p>
        <a className="underline" href="/">
          Log in
        </a>
      </div>
    );
  }

  if (!user.firstName || !user.lastName || !user.city) {
    return (
      <div>
        <PersonalInfoForm userId={user.id} />
      </div>
    );
  }

  return (
    <div>
      <div className="felx flex-col justify-center p-10 bg-gradient-to-r from-rose-400 via-rose-700 to-rose-400">
        <div className="flex flex-row justify-around p-10">
          <div className="flex justify-end">
            <div className="">
              <p>Did you know?</p>
              <p className="max-w-56 bg-white text-black rounded p-5">{fact}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-rose-500 to-rose-500 p-5">
        <div className="flex justify-around">
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
            onClick={handleLogout}
            className="rounded-md hover:text-pink-900 px-3 py-1.5 text-sm font-semibold text-white"
          >
            Logout
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
      <div>
        <h1>Lorem impsum</h1>
      </div>
    </div>
  );
};
