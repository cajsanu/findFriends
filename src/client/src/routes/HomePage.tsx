import axios from "axios";
import { useEffect, useState } from "react";
import { UserNavBar, Chat } from "../components";

export const HomePage = () => {
  const [fact, setFact] = useState(null);


  useEffect(() => {
    const getDogFact = async () => {
      const res = await axios.get("https://dogapi.dog/api/facts");
      setFact(res.data.facts);
    };
    getDogFact();
  }, []);

  return (
    <div className="font-mono">
      <UserNavBar />
      <div className="felx flex-col justify-center p-10 bg-gradient-to-r from-rose-400 via-rose-700 to-rose-400">
        <div className="flex flex-row justify-around p-10">
          <div className="flex justify-end">
            <div className="">
              <p>Did you know?</p>
              <p className="max-w-56 bg-white text-black rounded p-5">{fact}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Lorem impsum</h1>
      </div>
      <div>
        <Chat />
      </div>
    </div>
  );
};
