import { BaseDog } from "../types";
import PetsIcon from '@mui/icons-material/Pets';

interface SingleDogProps {
  dog: BaseDog;
}

export const SingleDog = ({ dog }: SingleDogProps) => {
  return (
    <>
      <div className="flex justify-start">
        <p className="text-stone-800 hover:text-rose-300">
          <PetsIcon fontSize="inherit"/> {" "}
          {dog.name} who is a {dog.sex} {dog.breed}
        </p>
      </div>
    </>
  );
};
