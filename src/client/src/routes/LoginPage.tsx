import { LoginForm } from "../components";

export const LoginPage = () => {
  return (
    <div className="bg-gradient-to-r from-rose-400 to-rose-800">
      <div className="flex flex-col">
        <div>
          <h1 className="py-20">Welcome to Find Friends</h1>
        </div>
        <div className="flex flex-row justify-center justify-around">
          <div>
            <p>This would include a short description</p>
          </div>
          <div className="">
            <LoginForm />
            <div>
              <p className="text-white">Not a registered friend yet?</p>
              <a
                href="/signup"
                className="underline text-rose-200 hover:text-white"
              >
                Sign up!
              </a>
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
