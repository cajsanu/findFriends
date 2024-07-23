import { SignupForm } from "../components";

export const SignUpPage = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div>
          <h1 className="p-10">Become a friend to find a friend</h1>
        </div>
        <div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};
