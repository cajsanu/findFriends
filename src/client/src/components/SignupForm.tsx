import { useState } from "react";
import { signup } from "../requests/signup";
import { useNavigate } from "react-router-dom";

export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      window.alert("Passwords do not match");
      return;
    }
    try {
      await signup(email, password);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/") 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-red-300 p-10 rounded">
      <div>
        <p className="text-2xl font-bold text-white">Create an account</p>
      </div>
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
              className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-sky-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-white flex justify-right">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(p) => setPassword(p.target.value)}
              required
              className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-sky-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-white flex justify-right">
              Confirm Password:
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(p) => setConfirmPassword(p.target.value)}
              required
              className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-sky-400"
            />
          </div>
          <div className="pt-5">
            <button
              className="rounded-md bg-rose-200 hover:bg-rose-100 px-3 py-1.5 text-sm font-semibold text-stone-700"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
