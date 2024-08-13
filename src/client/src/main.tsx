import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UsersPage, HomePage, SignUpPage, LoginPage } from "./routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./input.css";
import { Chat } from "./routes/Chat";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#263238",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <div>"Not found"</div>,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
    errorElement: <div>"Not found"</div>,
  },
  {
    path: "/home/:id",
    element: <HomePage />,
    errorElement: <div>"Not found"</div>,
  },
  {
    path: "/users",
    element: <UsersPage />,
    errorElement: <div>"Not found"</div>,
  },
  {
    path: "/chat",
    element: <Chat />,
    errorElement: <div>"Not found"</div>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
