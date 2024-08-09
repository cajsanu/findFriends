import { LoginForm } from "../components";

export const LoginPage = () => {
  return (
    <div className="bg-gradient-to-r from-rose-400 to-rose-800 font-mono">
      <div className="flex flex-col">
        <div>
          <h1 className="pt-20">Welcome to Find Friends</h1>
        </div>
        <div className="flex flex-col justify-center justify-around p-5">
          <div>
            <p>This would include a short description</p>
          </div>
          <div className="p-20">
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
