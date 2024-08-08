export const RequiresAuthentication = () => {
  return (
    <div className="font-semibold pt-20">
      <p className="text-xl">
        This page requires you to be authenticated, please{" "}
        <a className="underline hover:text-rose-800" href="/signup">
          Sign up
        </a>{" "}
        or{" "}
        <a className="underline hover:text-rose-800" href="/">
          Login
        </a>
      </p>
    </div>
  );
};
