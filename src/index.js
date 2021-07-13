import React from "react";
import ReactDOM from "react-dom";

// Style
import "./index.css";

// Import Components
import LandingPage from "./Components/LandingPage";
import Signup from "./Components/Signup";
const App = () => {
  return (
    <>
      {/* <LandingPage /> */}
      <Signup />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
