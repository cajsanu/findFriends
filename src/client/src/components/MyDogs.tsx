import { UserDog } from "../types";
import { SingleDog } from "./Dog";

interface MyDogProps {
  dogs: UserDog[];
}

export const MyDogs = ({ dogs }: MyDogProps) => {
  return (
    <div className="flex justify-center pt-40">
      <div className="flex flex-col p-10 shadow-2xl">
        <p className="font-semibold text-xl text-rose-400 pb-5 flex justify-start">My dogs</p>
        {dogs.map((d) => (
          <SingleDog key={d.id} dog={d} />
        ))}
      </div>
    </div>
  );
};
