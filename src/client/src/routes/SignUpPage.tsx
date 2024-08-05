import { SignupForm } from "../components";

export const SignUpPage = () => {
  return (
    <div>
      <h1>Become a friend to find a friend</h1>
      <div className="flex justify-center">
        <div className="w-56">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};
