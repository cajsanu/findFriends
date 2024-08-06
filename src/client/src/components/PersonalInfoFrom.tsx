import { useState } from "react";
import userRequests from "../requests/user";

export const PersonalInfoForm = (user: { id: string; token: string }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!firstName || !lastName || !city) {
      console.log("All required fields must be filled in");
      return;
    }
    try {
      const response = await userRequests.updateInfo(user.id, user.token, {
        firstName,
        lastName,
        city,
      });
      console.log(response);
      setFirstName("");
      setLastName("");
      setCity("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center pt-40">
      <div className="flex flex-col p-10 bg-rose-300 w-2/4 border-double border-4 border-rose-800 shadow-2xl">
        <h2 className="text-2xl font-bold text-white pb-5">
          Please enter your personal information to finish your profile
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <label className="block text-sm font-medium leading-6 text-white flex justify-right">
              FirstName*:
            </label>
            <input
              type="firstname"
              value={firstName}
              onChange={(n) => setFirstName(n.target.value)}
              required
              className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-sky-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-white flex justify-right">
              LastName*:
            </label>
            <input
              type="lastname"
              value={lastName}
              onChange={(n) => setLastName(n.target.value)}
              required
              className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-sky-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-white flex justify-right">
              City*:
            </label>
            <input
              type="city"
              value={city}
              onChange={(c) => setCity(c.target.value)}
              required
              className="block w-full rounded-md py-1.5 text-white outline outline-transparent focus:outline-sky-400"
            />
          </div>
          <div>
            <button
              className="bg-rose-800 p-2 rounded text-white"
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
