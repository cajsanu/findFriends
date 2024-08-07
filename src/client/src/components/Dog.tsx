import { BaseDog } from "../types";

interface SingleDogProps {
  dog: BaseDog;
}

export const SingleDog = ({ dog }: SingleDogProps) => {
  return (
    <>
      <div className="">
        <li className="hover:text-rose-300">
          {dog.name} who is a {dog.sex} {dog.breed}
        </li>
      </div>
    </>
  );
};
