import { useState } from "react";
import { signup } from "../requests/signup";

export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      window.alert("Passwords do not match");
      return;
    }
    try {
      const response = await signup(email, password);
      console.log(response);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white">
        Create an account
      </h2>
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
        <button className="bg-pink-200 p-1 rounded text-pink-600" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
