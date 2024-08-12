import { BaseDog } from "../types";
import PetsIcon from '@mui/icons-material/Pets';

interface SingleDogProps {
  dog: BaseDog;
}

export const SingleDog = ({ dog }: SingleDogProps) => {
  return (
    <>
      <div className="flex justify-start">
        <p className="text-stone-700 hover:text-rose-400">
          <PetsIcon fontSize="inherit"/> {" "}
          {dog.name} who is a {dog.sex} {dog.breed}
        </p>
      </div>
    </>
  );
};
