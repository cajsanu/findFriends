import { useState } from "react";
import { User } from "./types";

import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/users");
  };

  return (
    <>
      <h1>Find Friends</h1>
      <button onClick={handleClick}>See users</button>
    </>
  );
}

export default App;
