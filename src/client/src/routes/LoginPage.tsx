import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate("/signup");
  };

  return (
    <div>
      <div className="flex flex-col">
        <div>
          <h1 className="p-10">Welcome to FindFriends</h1>
        </div>
        <div className="flex flex-row justify-center justify-around">
          <div>
            <p>This would include a short description</p>
          </div>
          <div>
            <LoginForm />
            <div>
              <p>Not a registered friend yet?</p>
              <button
                className="transition delay-150 flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-300 hover:text-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                onClick={handleClickRegister}
              >
                Sign Up!
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <p>This should be at the bottom</p>
        </div>
      </div>
    </div>
  );
};
