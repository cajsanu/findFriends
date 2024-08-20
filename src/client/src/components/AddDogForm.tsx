import { useState } from "react";
import userRequests from "../requests/users";
import { Sex, UserDog } from "../types";

interface AddDogsFormProps {
  userId: string;
  onSuccess: (newDog: UserDog) => void;
}
export const AddDogForm = ({ userId, onSuccess }: AddDogsFormProps) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [sex, setSex] = useState<Sex>();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!name || !breed || !sex) {
      console.log("All required fields must be filled in");
      return;
    }
    try {
      const newDog = await userRequests.addUserDog(userId, {
        name,
        breed,
        sex,
      });
      onSuccess(newDog);
      setName("");
      setBreed("");
      setSex(undefined);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center pt-40">
      <div className="flex flex-col p-10 bg-rose-300 w-2/4 rounded shadow-2xl">
        <h2 className="text-2xl font-bold text-white pb-5">
          Please enter your dogs information below
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <label className="block text-m leading-6 text-white flex justify-right">
              Name *
            </label>
            <input
              type="name"
              value={name}
              onChange={(n) => setName(n.target.value)}
              required
              className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-pink-800"
            />
          </div>
          <div>
            <label className="block text-m leading-6 text-white flex justify-right">
              Breed *
            </label>
            <input
              type="breed"
              value={breed}
              onChange={(b) => setBreed(b.target.value)}
              required
              className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-pink-800"
            />
          </div>
          <div>
            <label className="block text-m leading-6 text-white flex justify-right">
              Sex *
            </label>
            <select
              required
              value={sex}
              onChange={(s) => setSex(s.target.value as Sex)}
              className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-pink-800"
            >
              <option value=""></option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <div>
            <button
              className="transition duration-150 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 bg-rose-200 text-rose-800 hover:bg-rose-100"
              type="submit"
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
