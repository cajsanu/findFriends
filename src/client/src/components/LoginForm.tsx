import { useState } from "react";
import { login } from "../requests/login";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../requests/user";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      await login(email, password);
      const user = await getCurrentUser();
      if (user) {
        navigate(`home/${user.id}`);
      }
    } catch (error) {
      console.log(error);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Sign in to your account
        </h2>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium leading-6 text-white flex justify-right">
                Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-pink-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-white flex justify-right">
                Password:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-pink-400"
              />
            </div>
            <button
              className="transition delay-150 flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-300 hover:text-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              type="submit"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
