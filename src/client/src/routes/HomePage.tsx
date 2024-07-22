import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/users");
  };

  return (
    <div className="felx justify-center">
      <div className="bg-sky-300">
        <h1 className="text-sky-500">Find Friends</h1>
        <button
          className="rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-200 hover:text-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          onClick={handleClick}
        >
          See users
        </button>
      </div>
      <div className="flex justify-end">
        <div className="flex flex-col">
          <p>Did you know?</p>
          <p className="bg-white text-black rounded p-5">DOG FACTS HERE</p>
        </div>
      </div>
    </div>
  );
};
