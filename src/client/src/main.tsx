import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UsersPage, HomePage, SignUpPage, LoginPage } from "./routes";

import "./input.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <div>"Not found"</div>
  },
  {
    path: "/signup",
    element: <SignUpPage />,
    errorElement: <div>"Not found"</div>
  },
  {
    path: "/home",
    element: <HomePage />,
    errorElement: <div>"Not found"</div>
  },
  {
    path: "/users",
    element: <UsersPage />,
    errorElement: <div>"Not found"</div>
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
