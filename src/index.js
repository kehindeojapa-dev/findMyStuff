import React from "react";
import ReactDOM from "react-dom";

// Style
import "./index.css";

// Import Components
import LandingPage from "./Components/LandingPage";

const App = () => {
  return (
    <>
      <LandingPage />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
