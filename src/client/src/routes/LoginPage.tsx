import { LoginForm } from "../components";
import PetsIcon from '@mui/icons-material/Pets';

export const LoginPage = () => {
  return (
    <div className="bg-gradient-to-r from-rose-400 to-rose-800 font-mono">
      <div className="flex flex-col">
        <div>
          <h1 className="pt-20 pb-5">Dog<PetsIcon />Go</h1>
        </div>
        <div className="flex flex-col justify-center p-5">
          <div>
            <p>Connect with dog owners near you<p>
              </p>and go for a walk together.</p>
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
        <div className="pb-40">
          <p>Have a good walk <PetsIcon fontSize="inherit"/></p>
        </div>
      </div>
    </div>
  );
};
