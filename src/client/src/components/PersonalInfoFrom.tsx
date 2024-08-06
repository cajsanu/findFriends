import { useState } from "react";
import userRequests from "../requests/user";

export const PersonalInfoForm = (user: {id: string, token:string}) => {
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
      const response = await userRequests.updateInfo(user.id, user.token);
      console.log(response);
      setFirstName("");
      setLastName("");
      setCity("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white">
        Set your personal information
      </h2>
      <form onSubmit={handleSubmit}>
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
        <button className="bg-pink-200 p-1 rounded text-pink-600" type="submit">
          Done
        </button>
      </form>
    </div>
  );
};
