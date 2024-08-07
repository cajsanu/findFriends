import { UserDog } from "../types";
import { SingleDog } from "./Dog";

export const MyDogs = (dogs: UserDog[]) => {
  return (
    <div>
      <div>
        <p>My dogs</p>
        {dogs.map((d) => (
          <SingleDog key={d.id} name={d.name} breed={d.breed} sex={d.sex} />
        ))}
      </div>
    </div>
  );
};
