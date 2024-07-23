import { SignupForm } from "../components";

export const SignUpPage = () => {
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
              <SignupForm />
            </div>
          </div>
          <div className="">
            <p>This should be at the bottom</p>
          </div>
        </div>
      </div>
    );
  };
  