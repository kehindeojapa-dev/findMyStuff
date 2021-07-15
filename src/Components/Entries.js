import React from "react";

// Style
import "./styles/Entries.css";

// Import Component
import Footer from "./Footer";

const Entries = () => {
  return (
    <>
      <section className="entries-container">
        <div className="entries-intro">
          <h1>{"Daniel's"} Items</h1>
          <button className="entries-searchBtn">Search</button>
        </div>
        <section className="entries-addition">
          <p>Click to add new entry</p>
          <button className="entries-addBtn">+</button>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Entries;
