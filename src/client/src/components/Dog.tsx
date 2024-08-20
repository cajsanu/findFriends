import { Box, Modal } from "@mui/material";
import { BaseDog } from "../types";
import PetsIcon from "@mui/icons-material/Pets";
import { useState } from "react";
import { removeDog } from "../requests/dogs";

interface SingleDogProps {
  dog: BaseDog;
}

export const SingleDog = ({ dog }: SingleDogProps) => {
  const [openMyDog, setOpenMyDog] = useState(false);

  const handleOpenMyDog = () => setOpenMyDog(true);
  const handleClose = () => setOpenMyDog(false);

  const handleRemoveDog = async () => {
    try {
      if (window.confirm(`Are you sure you want to remove ${dog.name}?`)) {
        await removeDog(dog.id);
        setOpenMyDog(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
      <div className="flex justify-start">
        <button
          onClick={handleOpenMyDog}
          className="text-stone-700 hover:text-rose-400"
        >
          <PetsIcon fontSize="inherit" /> {dog.name} who is a {dog.sex}{" "}
          {dog.breed}
        </button>
      </div>
      <Modal
        open={openMyDog}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div className="flex justify-center pt-60">
            <div className="flex flex-col p-10 bg-stone-800 w-2/4 rounded shadow-2xl">
              <p className="font-semibold text-xl font-mono">{dog.name} <PetsIcon fontSize="medium"/></p>
              <div className="p-5">
                <button
                  onClick={handleRemoveDog}
                  className="hover:text-rose-300 text-sm rounded p-1"
                >
                  Remove from my dogs
                </button>
              </div>
            </div>
          </div>
          <button className="font-bold text-xl" onClick={handleClose}>
            x
          </button>
        </Box>
      </Modal>
    </div>
  );
};
