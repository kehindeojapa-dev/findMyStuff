import React from "react";
import ReactDOM from "react-dom";

// Style
import "./index.css";

// Import Components
import LandingPage from "./Components/LandingPage";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Entries from "./Components/Entries";
const App = () => {
  return (
    <>
      {/* <LandingPage /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      <Entries />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
