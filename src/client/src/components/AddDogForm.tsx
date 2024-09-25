import { zodResolver } from "@hookform/resolvers/zod";
import userRequests from "../requests/users";
import { UserDog } from "../types";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

type AddDogsFormProps = {
  userId: string;
  onSuccess: (newDog: UserDog) => void;
};

const schema = z.object({
  name: z.string(),
  breed: z.string(),
  sex: z.enum(["male", "female"]),
});

type DogFields = z.infer<typeof schema>;

export const AddDogForm = ({ userId, onSuccess }: AddDogsFormProps) => {
  const { register, handleSubmit } = useForm<DogFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<DogFields> = async ({ name, breed, sex }) => {
    try {
      const newDog = await userRequests.addUserDog(userId, {
        name,
        breed,
        sex,
      });
      newDog && onSuccess(newDog);
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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div>
            <label className="block text-m leading-6 text-white flex justify-right">
              Name *
            </label>
            <input
              type="name"
              {...register("name")}
              className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-pink-800"
            />
          </div>
          <div>
            <label className="block text-m leading-6 text-white flex justify-right">
              Breed *
            </label>
            <input
              type="breed"
              {...register("breed")}
              className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-pink-800"
            />
          </div>
          <div>
            <label className="block text-m leading-6 text-white flex justify-right">
              Sex *
            </label>
            <select
              {...register("sex")}
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
