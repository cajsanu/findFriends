import { UserDog } from "../types";
import { SingleDog } from "./Dog";

type MyDogProps = {
  dogs: UserDog[];
}

export const MyDogs = ({ dogs }: MyDogProps) => {
  return (
    <div className="flex justify-center pt-40">
      <div className="flex flex-col p-10 bg-rose-200 w-2/4 rounded shadow-2xl">
        <p className="font-semibold text-xl text-rose-400 pb-5 flex justify-start font-mono">My dogs</p>
        {dogs.map((d) => (
          <SingleDog key={d.id} dog={d} />
        ))}
      </div>
    </div>
  );
};
