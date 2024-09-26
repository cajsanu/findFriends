import { login } from "../requests/login";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../requests/user";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email({ message: "Please provide a valid email" }),
  password: z.string().min(10),
});

type LoginFields = z.infer<typeof schema>;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>({ resolver: zodResolver(schema) });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFields> = async ({ email, password }) => {
    try {
      await login(email, password);
      const user = await getCurrentUser();
      if (user) {
        navigate(`home/${user.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white py-2">
          Sign in to your account
        </h2>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium leading-6 text-white flex justify-right pt-2">
                Email:
              </label>
              <input
                type="text"
                {...register("email")}
                className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-pink-800"
              />
              {errors.email && (
                <div className="p-2">
                  <p className="text-black">{errors.email.message}</p>
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-white flex justify-right pt-2">
                Password:
              </label>
              <input
                type="password"
                {...register("password")}
                className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-pink-800"
              />
              {errors.password && (
                <div className="text-red-500">{errors.password.message}</div>
              )}
            </div>
            <div className="py-3">
              <button
                className="transition delay-150 flex w-full justify-center rounded-md bg-rose-300 px-3 py-1.5 text-sm font-semibold leading-6 text-rose-800 hover:bg-rose-200"
                type="submit"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
