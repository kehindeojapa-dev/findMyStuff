import React from "react";

// Style Import
import "./styles/NewEntry.css";

const NewEntry = ({ showEntry }) => {
  return (
    <>
      <section className="newentry">
        <button onClick={() => showEntry(false)}>X</button>
        <h2>Am a new entry</h2>
      </section>
    </>
  );
};

export default NewEntry;
