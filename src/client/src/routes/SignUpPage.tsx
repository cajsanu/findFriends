import { SignupForm } from "../components";
import PetsIcon from "@mui/icons-material/Pets";

export const SignUpPage = () => {
  return (
    <div className="font-mono">
      <div className="pt-20">
        <PetsIcon fontSize="large" />
      </div>
      <p className="text-xl pb-10">Become a friend to find a friend</p>
      <div className="flex justify-center">
        <div className="w-2/4">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};
