import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [fact, setFact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getDogFact = async() => {
        const res = await axios.get("https://dogapi.dog/api/facts")
        setFact(res.data.facts)
    };
    getDogFact();
  }, []);

  const handleClickUsers = () => {
    navigate("/users");
  };

  return (
    <div className="felx flex-col justify-center p-10">
      <div className="bg-sky-300 p-5">
        <h1 className="text-sky-700">Welcome user</h1>
        <button
          className="rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-200 hover:text-pink-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
          onClick={handleClickUsers}
        >
          See users
        </button>
        <button
          className="rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-200 hover:text-pink-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
         
        >
          Start new chat
        </button>
      </div>
      <div className="flex flex-row justify-around p-10">
        <div className="flex flex-col">
          <p className="bg-white">All chats of user</p>
          <div className="bg-pink-200 p-10">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Dogs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Dogs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="">
            <p>Did you know?</p>
            <p className="max-w-56 bg-white text-black rounded p-5">{fact}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
