import { UserDog } from "../types";
import { SingleDog } from "./Dog";

interface MyDogProps {
  dogs: UserDog[];
}

export const MyDogs = ({ dogs }: MyDogProps) => {
  return (
    <div className="flex justify-center bg-rose-100 py-10">
      <div className="flex flex-col">
        <p className="font-semibold text-xl text-rose-400 pb-5 flex justify-start">My dogs</p>
        {dogs.map((d) => (
          <SingleDog key={d.id} dog={d} />
        ))}
      </div>
    </div>
  );
};
