import { Box, Modal } from "@mui/material";
import { BaseDog } from "../types";
import PetsIcon from "@mui/icons-material/Pets";
import { useState } from "react";
import { removeDog } from "../requests/dogs";

interface SingleDogProps {
  dog: BaseDog;
}

export const SingleDog = ({ dog }: SingleDogProps) => {
  const [openMyDog, setOpenMyDogs] = useState(false);

  const handleOpenMyDog = () => setOpenMyDogs(true);
  const handleClose = () => setOpenMyDogs(false);

  const handleRemoveDog = async () => {
    try {
      await removeDog(dog.id)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
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
          <div>
            <p>{dog.name}</p>
            <button onClick={handleRemoveDog}>Remove dog</button>
          </div>
          <button className="font-bold text-xl" onClick={handleClose}>
            x
          </button>
        </Box>
      </Modal>
    </div>
  );
};
