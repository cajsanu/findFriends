import userRequests from "../requests/users";
import { useForm, SubmitHandler } from "react-hook-form";

type InfoFormProps = {
  userId: string;
  onSuccess: () => void;
};

type InfoFormFileds = {
  firstName: string;
  lastName: string;
  city: string;
};

export const PersonalInfoForm = ({ userId, onSuccess }: InfoFormProps) => {
  const { register, handleSubmit } = useForm<InfoFormFileds>();

  const onSubmit: SubmitHandler<InfoFormFileds> = async ({
    firstName,
    lastName,
    city,
  }) => {
    try {
      await userRequests.updateInfo(userId, {
        firstName,
        lastName,
        city,
      });
      onSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center pt-40 font-mono">
      <div className="flex flex-col p-10 bg-rose-300 w-2/4 rounded shadow-2xl">
        <h2 className="text-xl font-bold text-white pb-5">
          Please enter your personal information to finish your profile
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div>
            <label className="block text-m leading-6 text-white flex justify-right">
              FirstName *
            </label>
            <input
              type="text"
              {...register("firstName")}
              className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-sky-400"
            />
          </div>
          <div>
            <label className="block text-m leading-6 text-white flex justify-right">
              LastName *
            </label>
            <input
              type="lastname"
              {...register("lastName")}
              className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-sky-400"
            />
          </div>
          <div>
            <label className="block text-m leading-6 text-white flex justify-right">
              City *
            </label>
            <input
              type="city"
              {...register("city")}
              className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-sky-400"
            />
          </div>
          <div>
            <button
              className="transition duration-150 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 bg-rose-800 text-white hover:bg-rose-100 hover:text-rose-800"
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
